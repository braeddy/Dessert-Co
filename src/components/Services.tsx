import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from '../layout/Section';
import Reveal from './Reveal';
import { useTranslation } from 'react-i18next';

const services = [
  { key: 'weddings', image: '/torta-2.jpg' },
  { key: 'birthdays', image: '/gallery-2.jpg' },
  { key: 'events', image: '/gallery-5.jpg' },
  { key: 'sweets', image: '/gallery-4.jpg' },
];

const Services: React.FC = () => {
  const { t } = useTranslation();

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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ key, image }, index) => (
            <Reveal key={key} delay={index * 100}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative block aspect-[3/4] w-full overflow-hidden rounded-[2rem] text-left shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-bakery-rose focus-visible:ring-offset-4"
              >
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bakery-cocoa/90 via-bakery-cocoa/30 to-transparent transition-opacity duration-500" />

                <span className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  0{index + 1}
                </span>
                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-bakery-cocoa opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-serif text-2xl font-medium">{t(`services.items.${key}.title`)}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-focus-visible:max-h-40 group-focus-visible:opacity-100 max-lg:max-h-40 max-lg:opacity-100">
                    {t(`services.items.${key}.description`)}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
