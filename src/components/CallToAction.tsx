import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import Reveal from './Reveal';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../constants';

const CallToAction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-12 md:py-16">
      <Reveal className="container relative mx-auto overflow-hidden rounded-[2.5rem] bg-bakery-cocoa px-6 py-16 text-center text-white md:px-16 md:py-20">
        <img
          src="/torta-5.webp"
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bakery-cocoa via-bakery-cocoa/80 to-bakery-rose/60" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">{t('cta.title')}</h2>
          <p className="mt-5 text-lg text-white/80">{t('cta.description')}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-bakery-cocoa transition-all duration-300 hover:-translate-y-0.5 hover:bg-bakery-pink"
            >
              {t('cta.button')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Phone size={16} />
              {t('cta.call')}
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default CallToAction;
