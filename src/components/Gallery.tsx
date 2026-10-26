import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Section from '../layout/Section';
import Reveal from './Reveal';
import { X, ChevronLeft, ChevronRight, Instagram, Expand, ChevronDown } from 'lucide-react';
import { galleryImages, galleryCategories, contactInfo, type GalleryCategory } from '../constants';
import { useTranslation } from 'react-i18next';
import { useFocusTrap } from '../hooks/useFocusTrap';

// Foto mostrate prima di espandere la galleria
const MOBILE_PREVIEW_COUNT = 7;
const DESKTOP_PREVIEW_COUNT = 12;

// Larghezza indicativa di una miniatura: 2 colonne fino a lg, poi 3.
// Serve al browser per scegliere la misura giusta dal srcset.
const THUMB_SIZES = '(min-width: 1024px) 33vw, 50vw';

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

  const closeModal = useCallback(() => setSelectedIndex(null), []);
  const showNext = useCallback(() => setSelectedIndex((i) => (i === null ? i : (i + 1) % total)), [total]);
  const showPrev = useCallback(() => setSelectedIndex((i) => (i === null ? i : (i - 1 + total) % total)), [total]);

  // Tastiera e blocco dello scroll mentre il lightbox è aperto
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [selectedIndex, closeModal, showNext, showPrev]);

  // Precarica la foto precedente e la successiva, così scorrendo non si aspetta il download
  useEffect(() => {
    if (selectedIndex === null || total < 2) return;
    [selectedIndex + 1, selectedIndex - 1 + total].forEach((i) => {
      new Image().src = images[i % total].full;
    });
  }, [selectedIndex, images, total]);

  const selected = selectedIndex !== null ? images[selectedIndex] : null;
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

      {/* Lightbox */}
      {selected && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-bakery-cocoa/95 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={altFor(selected)}
        >
          <button
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
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

          <figure className="flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              key={selected.full}
              src={selected.full}
              alt={altFor(selected)}
              className="max-h-[80vh] w-auto animate-fade-in rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-sm tracking-wider text-white/70">
              {selectedIndex! + 1} / {total}
            </figcaption>
          </figure>

          <button
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label={t('gallery.next')}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </Section>
  );
};

export default Gallery;
