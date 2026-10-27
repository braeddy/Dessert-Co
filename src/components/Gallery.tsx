import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Section from '../layout/Section';
import Reveal from './Reveal';
import { X, ChevronLeft, ChevronRight, Instagram, Expand, ChevronDown } from 'lucide-react';
import { galleryImages, galleryCategories, contactInfo, type GalleryCategory, type GalleryImage } from '../constants';
import { useTranslation } from 'react-i18next';
import { useFocusTrap } from '../hooks/useFocusTrap';

// Foto mostrate prima di espandere la galleria
const MOBILE_PREVIEW_COUNT = 7;
const DESKTOP_PREVIEW_COUNT = 12;

// Larghezza indicativa di una miniatura: 2 colonne fino a lg, poi 3.
// Serve al browser per scegliere la misura giusta dal srcset.
const THUMB_SIZES = '(min-width: 1024px) 33vw, 50vw';

// useLayoutEffect nel browser; durante la pre-generazione delle pagine (dove non fa nulla
// e React avvisa) basta useEffect
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

// Trascinamento orizzontale (px) oltre il quale lo swipe cambia foto
const SWIPE_THRESHOLD = 50;
// Trascinamento verso il basso (px) oltre il quale il lightbox si chiude
const CLOSE_THRESHOLD = 120;
// Lo stesso per lo swipe a due dita sul trackpad, che ha movimenti più piccoli e rapidi
const WHEEL_THRESHOLD = 80;
// Pausa (ms) negli eventi del trackpad dopo la quale il gesto, inerzia compresa, è finito
const WHEEL_END_DELAY = 150;

// Dopo aver chiuso il lightbox con uno swipe sul trackpad, l'inerzia del gesto continua a
// inviare eventi per circa un secondo e farebbe scorrere la pagina. Questi eventi vengono
// ignorati finché si fermano, oppure finché ne arriva uno chiaramente più forte (stesso
// criterio del carosello): è un nuovo gesto fatto apposta e la pagina torna a scorrere
const WHEEL_MOMENTUM_MAX = 2000;
const ignoreWheelMomentum = () => {
  let peakDelta = 0;
  let decayed = false;
  let minDelta = Infinity;
  let risingEvents = 0;
  let idleTimer: number | undefined;
  const stop = () => {
    window.removeEventListener('wheel', handleWheel);
    window.clearTimeout(idleTimer);
    window.clearTimeout(maxTimer);
  };
  const handleWheel = (e: WheelEvent) => {
    const delta = Math.max(Math.abs(e.deltaX), Math.abs(e.deltaY));
    // Le dita possono essere ancora in movimento: un gesto nuovo si cerca solo dopo che
    // questo è sceso sotto un terzo del suo massimo
    if (!decayed) {
      peakDelta = Math.max(peakDelta, delta);
      if (delta < peakDelta / 3) decayed = true;
    } else {
      minDelta = Math.min(minDelta, delta);
      risingEvents = delta > Math.max(minDelta * 3, 6) ? risingEvents + 1 : 0;
      if (risingEvents >= 2) {
        stop();
        return;
      }
    }
    e.preventDefault();
    window.clearTimeout(idleTimer);
    idleTimer = window.setTimeout(stop, WHEEL_END_DELAY);
  };
  window.addEventListener('wheel', handleWheel, { passive: false });
  idleTimer = window.setTimeout(stop, WHEEL_END_DELAY);
  // In ogni caso dopo 2 secondi la pagina torna a scorrere normalmente
  const maxTimer = window.setTimeout(stop, WHEEL_MOMENTUM_MAX);
};

// Nel lightbox la foto occupa quasi tutta la larghezza dello schermo
const FULL_SIZES = '100vw';

// Foto del lightbox già scaricate e decodificate. Le immagini restano in memoria qui,
// così Safari non deve decodificarle di nuovo e il cambio foto è immediato
const decodedFulls = new Map<string, Promise<void>>();
const decodeFull = (image: GalleryImage) => {
  let decoding = decodedFulls.get(image.full);
  if (!decoding) {
    const img = new Image();
    img.sizes = FULL_SIZES;
    img.srcset = image.fullSrcSet;
    img.src = image.full;
    // Se la decodifica fallisce la foto viene comunque mostrata, al massimo con un attimo di ritardo
    decoding = img.decode().catch(() => undefined);
    decodedFulls.set(image.full, decoding);
  }
  return decoding;
};

type Filter = 'all' | GalleryCategory;

// Solo le categorie che hanno almeno una foto
const availableCategories = galleryCategories.filter((category) =>
  galleryImages.some((image) => image.category === category)
);

// Numero di colonne in base ai breakpoint Tailwind (sm: 640px, lg: 1024px).
// Su mobile si usano 2 colonne compatte invece di una sola a tutta larghezza.
const getColumnCount = () => (window.matchMedia('(min-width: 1024px)').matches ? 3 : 2);
const getIsMobile = () => !window.matchMedia('(min-width: 640px)').matches;

// Il primo render usa valori fissi, uguali a quelli della pagina pre-generata;
// le misure reali dello schermo vengono lette subito dopo
const useColumnCount = () => {
  const [count, setCount] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const queries = ['(min-width: 640px)', '(min-width: 1024px)'].map((q) => window.matchMedia(q));
    const update = () => {
      setCount(getColumnCount());
      setIsMobile(getIsMobile());
    };
    update();
    queries.forEach((mq) => mq.addEventListener('change', update));
    return () => queries.forEach((mq) => mq.removeEventListener('change', update));
  }, []);

  return { columnCount: count, isMobile };
};

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { columnCount, isMobile } = useColumnCount();
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState<Filter>('all');
  const gridRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const images = useMemo(
    () => (filter === 'all' ? galleryImages : galleryImages.filter((image) => image.category === filter)),
    [filter]
  );

  const total = images.length;
  const previewCount = isMobile ? MOBILE_PREVIEW_COUNT : DESKTOP_PREVIEW_COUNT;
  const collapsible = total > previewCount;
  const collapsed = collapsible && !expanded;
  const visibleCount = collapsed ? previewCount : total;

  // Distribuisce le foto nella colonna più bassa, così le colonne restano bilanciate
  const columns = useMemo(() => {
    const cols: number[][] = Array.from({ length: columnCount }, () => []);
    const heights = new Array(columnCount).fill(0);
    images.slice(0, visibleCount).forEach((image, index) => {
      const shortest = heights.indexOf(Math.min(...heights));
      cols[shortest].push(index);
      heights[shortest] += image.height / image.width;
    });
    return cols;
  }, [columnCount, visibleCount, images]);

  const changeFilter = (next: Filter) => {
    setFilter(next);
    setExpanded(false);
  };

  const altFor = (image: (typeof galleryImages)[number]) =>
    t([`gallery.alts.${image.name}`, `gallery.categoryAlts.${image.category}`]);

  const toggleExpanded = () => {
    // Richiudendo, riporta l'utente all'inizio della galleria
    if (expanded) gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setExpanded(!expanded);
  };

  // Carosello del lightbox: la foto precedente e la successiva stanno ai lati di quella aperta.
  // Le tre foto si spostano insieme: seguono il dito durante lo swipe e, per cambiare foto,
  // scorrono di una larghezza di schermo; a fine animazione l'indice avanza e la fila torna
  // a 0 senza transizione, così il cambio non si vede. Lo spostamento è scritto direttamente
  // sull'elemento e non nello stato di React: ricalcolare la galleria a ogni movimento del
  // dito faceva scattare l'animazione
  const trackRef = useRef<HTMLDivElement>(null);
  const pendingStep = useRef(0);

  const controlsRef = useRef<HTMLDivElement>(null);
  const closing = useRef(false);

  // y > 0 sposta la foto verso il basso (swipe per chiudere): la foto si rimpicciolisce un po',
  // mentre sfondo e pulsanti sfumano lasciando intravedere la pagina
  const moveTrack = (x: number, animate: boolean, y = 0) => {
    const track = trackRef.current;
    const dialog = dialogRef.current;
    if (!track || !dialog) return;
    const transition = animate ? '300ms cubic-bezier(0.22, 1, 0.36, 1)' : '0s';
    const progress = Math.min(y / window.innerHeight, 1);
    track.style.transition = `transform ${transition}`;
    track.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${1 - progress * 0.25})`;
    dialog.style.transition = `background-color ${transition}`;
    dialog.style.backgroundColor = `rgb(46 32 25 / ${1 - Math.min(progress * 2, 1)})`;
    if (controlsRef.current) controlsRef.current.style.opacity = y > 0 ? '0' : '';
  };

  const closeModal = useCallback(() => {
    pendingStep.current = 0;
    closing.current = false;
    setSelectedIndex(null);
  }, []);

  const slide = useCallback(
    (step: 1 | -1) => {
      if (pendingStep.current !== 0) return;
      if (total < 2) {
        moveTrack(0, true);
        return;
      }
      pendingStep.current = step;
      moveTrack(-step * window.innerWidth, true);
    },
    [total]
  );
  const showNext = useCallback(() => slide(1), [slide]);
  const showPrev = useCallback(() => slide(-1), [slide]);

  const handleSlideEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return;
    if (closing.current) {
      closeModal();
      return;
    }
    const step = pendingStep.current;
    pendingStep.current = 0;
    if (step !== 0) setSelectedIndex((i) => (i === null ? i : (i + step + total) % total));
  };

  // Dopo il cambio di foto la fila torna al centro prima che il browser disegni,
  // altrimenti per un fotogramma si vedrebbe di nuovo la foto precedente
  useIsomorphicLayoutEffect(() => {
    moveTrack(0, false);
  }, [selectedIndex]);

  // Tastiera mentre il lightbox è aperto
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, closeModal, showNext, showPrev]);

  // Swipe tra le foto su mobile e trackpad. Annullare il trascinamento blocca anche lo scroll della
  // pagina sotto: non usiamo overflow: hidden sul body, che su iPhone costringe Safari a
  // ridisegnare tutta la pagina e ritarda l'apertura. I listener sono nativi perché quelli
  // di React sono passivi e non permettono preventDefault
  const isOpen = selectedIndex !== null;
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    let start: { x: number; y: number } | null = null;
    let deltaX = 0;
    let deltaY = 0;
    // Direzione decisa dai primi pixel del gesto: in orizzontale si cambia foto,
    // verso il basso si chiude. Poi resta quella fino a fine gesto
    let axis: 'x' | 'y' | null = null;

    const handleStart = (e: TouchEvent) => {
      if (e.touches.length !== 1 || pendingStep.current !== 0 || closing.current) return;
      start = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      deltaX = 0;
      deltaY = 0;
      axis = null;
    };
    const handleMove = (e: TouchEvent) => {
      e.preventDefault();
      if (!start || e.touches.length !== 1) return;
      const x = e.touches[0].clientX - start.x;
      const y = e.touches[0].clientY - start.y;
      if (!axis) {
        if (Math.max(Math.abs(x), Math.abs(y)) < 10) return;
        axis = Math.abs(x) > Math.abs(y) ? 'x' : 'y';
      }
      if (axis === 'x') {
        deltaX = x;
        moveTrack(deltaX, false);
      } else {
        // Verso l'alto non succede nulla
        deltaY = Math.max(y, 0);
        moveTrack(0, false, deltaY);
      }
    };
    const handleEnd = () => {
      if (!start) return;
      start = null;
      if (axis === 'y') {
        if (deltaY >= CLOSE_THRESHOLD) {
          // La foto scende fuori dallo schermo, poi il lightbox si chiude (handleSlideEnd)
          closing.current = true;
          moveTrack(0, true, window.innerHeight);
        } else if (deltaY > 0) {
          moveTrack(0, true);
        }
        return;
      }
      if (deltaX <= -SWIPE_THRESHOLD) slide(1);
      else if (deltaX >= SWIPE_THRESHOLD) slide(-1);
      else if (deltaX !== 0) {
        // Swipe troppo corto: la foto torna al centro
        moveTrack(0, true);
      }
    };

    // Swipe a due dita sul trackpad (Mac e Windows): il browser lo invia come rotella.
    // In orizzontale le foto seguono le dita e, superata la soglia, cambiano subito; il resto
    // del gesto e l'inerzia vengono ignorati fino all'inizio di uno swipe nuovo. In verticale
    // la foto scende come per lo swipe sul telefono e, superata la soglia, il lightbox si chiude
    let wheelX = 0;
    let wheelY = 0;
    // Direzione del gesto, decisa dal primo evento come per il tocco
    let wheelAxis: 'x' | 'y' | null = null;
    let wheelLocked = false;
    let wheelTimer: number | undefined;
    // Dopo un cambio di foto: spostamento massimo del gesto, minimo raggiunto mentre
    // rallenta, e se il gesto ha già rallentato abbastanza da poterne riconoscere uno nuovo
    let peakDelta = 0;
    let minDelta = Infinity;
    let decayed = false;
    let risingEvents = 0;
    const handleWheel = (e: WheelEvent) => {
      // La pagina sotto non deve scorrere e lo swipe orizzontale non deve far tornare
      // il browser alla pagina precedente
      e.preventDefault();
      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        // Gesto finito senza cambiare foto né chiudere: torna al centro
        if (!wheelLocked && !closing.current && (wheelX !== 0 || wheelY !== 0)) moveTrack(0, true);
        wheelX = 0;
        wheelY = 0;
        wheelAxis = null;
        wheelLocked = false;
      }, WHEEL_END_DELAY);
      if (wheelLocked) {
        // Un nuovo swipe si riconosce senza aspettare la fine dell'inerzia: prima il gesto
        // deve essere sceso sotto un terzo del suo massimo (dita alzate, inerzia che si
        // spegne), poi lo spostamento deve tornare nettamente più grande del minimo per
        // due eventi di fila. Le piccole oscillazioni dell'inerzia non bastano
        // Conta anche il verticale: il gesto nuovo può essere uno swipe per chiudere
        const delta = Math.max(Math.abs(e.deltaX), Math.abs(e.deltaY));
        if (!decayed) {
          peakDelta = Math.max(peakDelta, delta);
          if (delta < peakDelta / 3) decayed = true;
        }
        if (!decayed) return;
        minDelta = Math.min(minDelta, delta);
        risingEvents = delta > Math.max(minDelta * 3, 6) ? risingEvents + 1 : 0;
        if (risingEvents < 2) return;
        wheelLocked = false;
        wheelX = 0;
        wheelAxis = null;
      }
      if (pendingStep.current !== 0 || closing.current) return;
      if (!wheelAxis) {
        if (e.deltaX === 0 && e.deltaY === 0) return;
        wheelAxis = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? 'x' : 'y';
      }
      // deltaMode 1: valori in righe invece che in pixel (alcuni mouse su Windows)
      const scale = e.deltaMode === 1 ? 16 : 1;

      if (wheelAxis === 'y') {
        // La foto si muove come si muoverebbe la pagina con lo stesso gesto: con lo scorrimento
        // naturale del Mac le dita verso il basso la portano giù. Verso l'alto non succede nulla
        wheelY = Math.max(wheelY - e.deltaY * scale, 0);
        if (wheelY >= CLOSE_THRESHOLD) {
          closing.current = true;
          ignoreWheelMomentum();
          moveTrack(0, true, window.innerHeight);
        } else {
          moveTrack(0, false, wheelY);
        }
        return;
      }

      wheelX -= e.deltaX * scale;
      if (Math.abs(wheelX) >= WHEEL_THRESHOLD) {
        wheelLocked = true;
        peakDelta = Math.abs(e.deltaX);
        minDelta = Infinity;
        decayed = false;
        risingEvents = 0;
        slide(wheelX < 0 ? 1 : -1);
      } else {
        moveTrack(wheelX, false);
      }
    };

    dialog.addEventListener('wheel', handleWheel, { passive: false });
    dialog.addEventListener('touchstart', handleStart, { passive: true });
    dialog.addEventListener('touchmove', handleMove, { passive: false });
    dialog.addEventListener('touchend', handleEnd);
    dialog.addEventListener('touchcancel', handleEnd);
    return () => {
      window.clearTimeout(wheelTimer);
      dialog.removeEventListener('wheel', handleWheel);
      dialog.removeEventListener('touchstart', handleStart);
      dialog.removeEventListener('touchmove', handleMove);
      dialog.removeEventListener('touchend', handleEnd);
      dialog.removeEventListener('touchcancel', handleEnd);
    };
  }, [isOpen, slide]);

  const selected = selectedIndex !== null ? images[selectedIndex] : null;

  // Scarica e decodifica la foto aperta, la precedente e la successiva. Finché una foto
  // non è pronta si vede la sua miniatura (quasi sempre già caricata nella griglia)
  const [decoded, setDecoded] = useState<ReadonlySet<string>>(() => new Set());
  useEffect(() => {
    if (selectedIndex === null) return;
    [0, 1, -1].forEach((step) => {
      const image = images[(selectedIndex + step + total) % total];
      decodeFull(image).then(() =>
        setDecoded((prev) => (prev.has(image.full) ? prev : new Set(prev).add(image.full)))
      );
    });
  }, [selectedIndex, images, total]);

  // Posizioni delle foto nel carosello: -1 a sinistra, 0 al centro, 1 a destra
  const positions = total > 1 ? [-1, 0, 1] : [0];
  useFocusTrap(selected !== null, dialogRef);

  return (
    <Section id="gallery" className="relative bg-bakery-cream/40 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t('gallery.eyebrow')}</span>
            <h2 className="section-title mt-5">{t('gallery.title')}</h2>
          </Reveal>
          <Reveal delay={100} className="max-w-md">
            <p className="leading-relaxed text-bakery-brown/75">{t('gallery.description')}</p>
          </Reveal>
        </div>

        {/* Filtri per occasione */}
        {availableCategories.length > 1 && (
          <Reveal className="mb-8">
            <div role="group" aria-label={t('gallery.filtersLabel')} className="flex flex-wrap gap-2">
              {(['all', ...availableCategories] as Filter[]).map((option) => {
                const active = filter === option;
                const count = option === 'all' ? galleryImages.length : galleryImages.filter((image) => image.category === option).length;
                return (
                  <button
                    key={option}
                    onClick={() => changeFilter(option)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-bakery-rose focus-visible:ring-offset-2 ${
                      active
                        ? 'border-bakery-cocoa bg-bakery-cocoa text-white'
                        : 'border-bakery-brown/25 bg-white/60 text-bakery-cocoa hover:border-bakery-cocoa hover:bg-white'
                    }`}
                  >
                    {t(`gallery.filters.${option}`)}
                    <span className={`text-xs font-medium ${active ? 'text-white/70' : 'text-bakery-brown/60'}`}>{count}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}

        {/* Griglia masonry */}
        <div ref={gridRef} className="relative flex scroll-mt-28 gap-3 sm:gap-5">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-5">
              {column.map((index, rowIndex) => {
                const image = images[index];
                return (
                  <Reveal key={image.thumb} delay={(colIndex + rowIndex) % 3 * 100}>
                    <button
                      onClick={() => setSelectedIndex(index)}
                      aria-label={`${t('gallery.open')}: ${altFor(image)}`}
                      className="group relative block w-full overflow-hidden rounded-2xl bg-bakery-cream sm:rounded-[1.75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-bakery-rose focus-visible:ring-offset-4"
                    >
                      <img
                        src={image.thumb}
                        srcSet={image.thumbSrcSet}
                        sizes={THUMB_SIZES}
                        alt={altFor(image)}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bakery-cocoa/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white/90 text-bakery-cocoa opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <Expand size={18} />
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          ))}
          {/* Sfumatura che suggerisce altre foto (colore = ivory + cream/40 dello sfondo sezione) */}
          {collapsed && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#faf2e8] to-transparent" />
          )}
        </div>

        {collapsible && (
          <div className="mt-6 flex justify-center">
            <button onClick={toggleExpanded} aria-expanded={expanded} className="btn-primary">
              {expanded ? t('gallery.showLess') : t('gallery.showAll', { count: total })}
              <ChevronDown size={16} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        <Reveal className="mt-10 flex justify-center">
          <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost bg-white/60">
            <Instagram size={18} />
            {t('gallery.instagram')}
          </a>
        </Reveal>
      </div>

      {/* Lightbox: sfondo pieno e senza backdrop-blur, che su Safari mobile rallentava l'apertura */}
      {selected && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-[60] animate-fade-in overflow-hidden overscroll-none bg-bakery-cocoa"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={altFor(selected)}
        >
          <div ref={trackRef} className="absolute inset-0 will-change-transform" onTransitionEnd={handleSlideEnd}>
            {positions.map((pos) => {
              const image = images[(selectedIndex! + pos + total) % total];
              const ready = decoded.has(image.full);
              return (
                <div
                  // Con 3 o più foto la chiave è la foto stessa: avanzando, l'immagine laterale
                  // diventa quella centrale senza essere ricreata
                  key={total > 2 ? image.full : `${image.full}:${pos}`}
                  aria-hidden={pos !== 0}
                  className="absolute inset-0 flex items-center justify-center px-4 pb-14 pt-20"
                  style={{ transform: `translateX(${pos * 100}%)` }}
                >
                  <img
                    src={ready ? image.full : image.thumb}
                    srcSet={ready ? image.fullSrcSet : image.thumbSrcSet}
                    sizes={ready ? FULL_SIZES : THUMB_SIZES}
                    alt={altFor(image)}
                    onClick={(e) => e.stopPropagation()}
                    className="max-h-full max-w-full rounded-2xl object-contain md:max-w-5xl"
                  />
                </div>
              );
            })}
          </div>

          {/* Pulsanti e contatore: sfumano mentre si trascina la foto verso il basso */}
          <div ref={controlsRef} className="pointer-events-none absolute inset-0 transition-opacity duration-200 [&>button]:pointer-events-auto">
            <p className="pointer-events-none absolute inset-x-0 bottom-5 text-center text-sm tracking-wider text-white/70">
              {selectedIndex! + 1} / {total}
            </p>

            <button
              className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={closeModal}
              aria-label={t('gallery.close')}
            >
              <X size={22} />
            </button>

            <button
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-8"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label={t('gallery.prev')}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label={t('gallery.next')}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Gallery;
