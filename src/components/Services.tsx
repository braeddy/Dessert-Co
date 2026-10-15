import React, { useEffect, useState } from 'react';
import { Plus, X, ArrowRight } from 'lucide-react';
import Section from '../layout/Section';
import Reveal from './Reveal';
import { useTranslation } from 'react-i18next';

const services = [
  { key: 'weddings', image: '/torta-6.webp' },
  { key: 'birthdays', image: '/gallery-2.webp' },
  { key: 'events', image: '/gallery-5.webp' },
];

const Services: React.FC = () => {
  const { t } = useTranslation();
  const [openKey, setOpenKey] = useState<string | null>(null);

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
                    src={image}
                    alt=""
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${isOpen ? 'scale-110' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bakery-cocoa/90 via-bakery-cocoa/30 to-transparent" />

                  {/* Fronte della card */}
                  <button
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="absolute inset-0 flex flex-col justify-between p-6 text-left text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bakery-rose"
                  >
                    <span className="self-start rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
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
                    className={`absolute inset-0 flex flex-col gap-4 bg-bakery-cocoa/90 p-6 text-white backdrop-blur-sm transition-all duration-500 md:p-7 ${
                      isOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-2xl font-medium md:text-3xl">{t(`services.items.${key}.title`)}</h3>
                      <button
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
