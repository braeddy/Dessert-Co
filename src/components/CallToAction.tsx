import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import Reveal from './Reveal';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../constants';
import ctaVariants from '../assets/images/cta-cake.webp?w=640;1024;1600&format=webp&as=metadata';
import { toResponsive } from '../utils/responsiveImage';

const ctaImage = toResponsive(ctaVariants);

// Card di invito a contattarci, in fondo alla sezione "Cosa facciamo" (dopo "Come funziona"),
// con la stessa spaziatura dei riquadri sopra
const CallToAction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-5">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-bakery-cocoa px-6 py-16 text-center text-white md:px-16 md:py-20">
        <img
          src={ctaImage.src}
          srcSet={ctaImage.srcSet}
          sizes="100vw"
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bakery-cocoa via-bakery-cocoa/80 to-bakery-rose/60" />

        <div className="relative mx-auto max-w-2xl">
          <h3 className="font-serif text-4xl font-medium leading-tight md:text-5xl">{t('cta.title')}</h3>
          <p className="mt-5 text-lg text-white/80">{t('cta.description')}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              // Porta direttamente al modulo nella sezione Contatti
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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
