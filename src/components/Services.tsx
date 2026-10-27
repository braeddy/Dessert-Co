import React, { useEffect, useRef, useState } from 'react';
import { Plus, X, ArrowRight } from 'lucide-react';
import Section from '../layout/Section';
import Reveal from './Reveal';
import { useTranslation } from 'react-i18next';
import weddingsImage from '../assets/images/service-weddings.webp?w=600;900;1200;1600&format=webp&as=metadata';
import birthdaysImage from '../assets/images/service-birthdays.webp?w=600;900;1200;1600&format=webp&as=metadata';
import eventsImage from '../assets/images/service-events.webp?w=600;900;1200;1600&format=webp&as=metadata';
import { toResponsive } from '../utils/responsiveImage';

const services = [
  { key: 'weddings', image: toResponsive(weddingsImage) },
  { key: 'birthdays', image: toResponsive(birthdaysImage) },
  { key: 'events', image: toResponsive(eventsImage) },
];

const Services: React.FC = () => {
  const { t } = useTranslation();
  const [openKey, setOpenKey] = useState<string | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const lastOpenKey = useRef<string | null>(null);

  // Aprendo una card il focus va sul pulsante di chiusura del dettaglio;
  // chiudendola torna sulla card, così chi usa la tastiera non perde il punto
  useEffect(() => {
    if (openKey) {
      closeRefs.current[openKey]?.focus({ preventScroll: true });
    } else if (lastOpenKey.current) {
      triggerRefs.current[lastOpenKey.current]?.focus({ preventScroll: true });
    }
    lastOpenKey.current = openKey;
  }, [openKey]);

  // Chiude la card aperta con il tasto Esc
  useEffect(() => {
    if (!openKey) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenKey(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openKey]);

  const goToContact = () => {
    setOpenKey(null);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="services" className="relative bg-white py-24 md:py-32">
      <div className="container mx-auto">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{t('services.eyebrow')}</span>
            <h2 className="section-title mt-5">{t('services.title')}</h2>
          </Reveal>
          <Reveal delay={100} className="max-w-md">
            <p className="leading-relaxed text-bakery-brown/75">{t('services.description')}</p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map(({ key, image }, index) => {
            const isOpen = openKey === key;
            const panelId = `service-${key}`;

            return (
              <Reveal key={key} delay={index * 100}>
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-soft">
                  <img
                    src={image.src}
                    srcSet={image.srcSet}
                    // Card 4:5 riempita da una foto più larga: su 3 colonne da md in su
                    sizes="(min-width: 768px) 60vw, 180vw"
                    alt=""
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${isOpen ? 'scale-110' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bakery-cocoa/90 via-bakery-cocoa/30 to-transparent" />

                  {/* Fronte della card */}
                  <button
                    ref={(el) => (triggerRefs.current[key] = el)}
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    // Coperta dal dettaglio quando è aperta: esce dalla sequenza del tasto Tab
                    tabIndex={isOpen ? -1 : 0}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="absolute inset-0 flex flex-col justify-between p-6 text-left text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bakery-rose"
                  >
                    <span className="self-start rounded-full bg-bakery-cocoa/40 px-3 py-1 text-xs font-semibold">
                      0{index + 1}
                    </span>
                    <span>
                      <span className="block font-serif text-2xl font-medium md:text-3xl">{t(`services.items.${key}.title`)}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-white/85">{t(`services.items.${key}.description`)}</span>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-bakery-cocoa transition-transform duration-500 group-hover:rotate-90">
                          <Plus size={16} />
                        </span>
                        {t('services.more')}
                      </span>
                    </span>
                  </button>

                  {/* Dettaglio del servizio */}
                  <div
                    id={panelId}
                    role="region"
                    aria-label={t(`services.items.${key}.title`)}
                    ref={(el) => {
                      // Chiuso, il pannello non riceve focus né tocchi. Non usiamo visibility: hidden
                      // perché Safari non anima gli elementi che partono invisibili
                      if (el) el.inert = !isOpen;
                    }}
                    aria-hidden={!isOpen}
                    // Toccando un punto qualsiasi del dettaglio la card si richiude, come si è aperta;
                    // da tastiera restano il pulsante X ed Esc
                    onClick={() => setOpenKey(null)}
                    // Niente backdrop-blur: su Safari mobile rende lenta l'apertura, mentre la
                    // foto sotto si ingrandisce. Lo sfondo più coprente tiene leggibile il testo
                    className={`absolute inset-0 flex cursor-pointer flex-col gap-4 bg-bakery-cocoa/95 p-6 text-white transition-[opacity,transform] duration-500 md:p-7 ${
                      isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-2xl font-medium md:text-3xl">{t(`services.items.${key}.title`)}</h3>
                      <button
                        ref={(el) => (closeRefs.current[key] = el)}
                        onClick={() => setOpenKey(null)}
                        aria-label={t('services.close')}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-bakery-rose"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <p className="overflow-y-auto leading-relaxed text-white/85">{t(`services.items.${key}.details`)}</p>
                    <button
                      onClick={goToContact}
                      className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-bakery-cocoa transition-colors hover:bg-bakery-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-bakery-rose"
                    >
                      {t('services.cta')}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Services;
