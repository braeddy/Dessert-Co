import React from 'react';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import Section from '../layout/Section';
import Reveal from './Reveal';
import { useTranslation } from 'react-i18next';
import heroCakeVariants from '../assets/images/hero-cake.webp?w=600;900;1200;1600&format=webp&as=metadata';
import heroPhotoVariants from '../assets/images/hero-photo.webp?w=320;480;640;960&format=webp&as=metadata';
import { toResponsive } from '../utils/responsiveImage';

const heroCake = toResponsive(heroCakeVariants);
const heroPhoto = toResponsive(heroPhotoVariants);
import { foundedYear } from '../constants';

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// Badge circolare con testo rotante
const RotatingBadge: React.FC<{ text: string }> = ({ text }) => (
  <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-bakery-cocoa text-white shadow-soft md:h-32 md:w-32">
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
      <defs>
        <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
      </defs>
      <text className="fill-current text-[9.5px] font-semibold uppercase tracking-[0.3em]">
        <textPath href="#badge-circle">{text}</textPath>
      </text>
    </svg>
    <Sparkles size={22} className="text-bakery-pink" />
  </div>
);

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const years = new Date().getFullYear() - foundedYear;

  return (
    <Section id="home" className="relative overflow-hidden pb-16 pt-32 md:pt-40 lg:min-h-screen lg:pb-24">
      {/* Sfondo decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-bakery-pink/60 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-bakery-blue/40 blur-3xl" />
        <div className="bg-grain absolute inset-0 opacity-60" />
      </div>

      <div className="container mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">{t('hero.eyebrow')}</span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 font-serif text-5xl font-medium leading-[0.98] tracking-tight text-bakery-cocoa sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {t('hero.line1')}{' '}
                <em className="font-light italic text-bakery-rose">{t('hero.accent')}</em>{' '}
                {t('hero.line2')}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-bakery-brown/80">
                {t('hero.description')}
              </p>
            </Reveal>

            <Reveal delay={300} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollTo('gallery')} className="btn-primary group">
                {t('hero.creations')}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-ghost">
                {t('hero.contact')}
              </button>
            </Reveal>

            <Reveal delay={400}>
              <dl className="mt-14 grid max-w-lg grid-cols-3 divide-x divide-bakery-brown/10 border-t border-bakery-brown/10 pt-8">
                <div className="pr-4">
                  <dt className="sr-only">{t('hero.stat1Label')}</dt>
                  <dd className="font-serif text-3xl font-medium text-bakery-cocoa md:text-4xl">{years}+</dd>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-bakery-brown/60">{t('hero.stat1Label')}</dd>
                </div>
                <div className="px-4">
                  <dt className="sr-only">{t('hero.stat2Label')}</dt>
                  <dd className="font-serif text-3xl font-medium text-bakery-cocoa md:text-4xl">{t('hero.stat2Value')}</dd>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-bakery-brown/60">{t('hero.stat2Label')}</dd>
                </div>
                <div className="pl-4">
                  <dt className="sr-only">{t('hero.stat3Label')}</dt>
                  <dd className="font-serif text-xl font-medium italic text-bakery-cocoa md:text-2xl">{t('hero.stat3Value')}</dd>
                  <dd className="mt-2 text-xs uppercase tracking-wider text-bakery-brown/60">{t('hero.stat3Label')}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Collage di immagini */}
          <div className="relative lg:col-span-6">
            <Reveal delay={200} className="relative mx-auto max-w-md lg:ml-auto lg:mr-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] shadow-soft">
                <img
                  src={heroCake.src}
                  srcSet={heroCake.srcSet}
                  // Riquadro 4:5 riempito da una foto 3:2: serve una larghezza ~1,9 volte quella del riquadro
                  sizes="(min-width: 480px) 840px, 175vw"
                  width={heroCake.width}
                  height={heroCake.height}
                  // È la prima immagine grande della pagina: il browser la scarica con priorità
                  {...{ fetchpriority: 'high' }}
                  alt={t('hero.cakeAlt')}
                  className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bakery-cocoa/30 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-10 -left-6 w-40 overflow-hidden rounded-3xl border-[6px] border-bakery-ivory shadow-soft sm:-left-16 sm:w-52">
                <img
                  src={heroPhoto.src}
                  srcSet={heroPhoto.srcSet}
                  sizes="(min-width: 640px) 312px, 240px"
                  width={heroPhoto.width}
                  height={heroPhoto.height}
                  alt={t('hero.photoAlt')}
                  className="aspect-square h-full w-full object-cover" />
              </div>

              <div className="absolute -right-2 -top-6 sm:-right-10">
                <RotatingBadge text={`Dessert & Co · ${t('hero.badge')} · `} />
              </div>

              <p className="absolute -right-4 bottom-10 hidden rotate-[-6deg] rounded-2xl bg-white/90 px-5 py-3 font-script text-3xl text-bakery-rose shadow-soft backdrop-blur md:block">
                {t('hero.subtitle')}
              </p>
            </Reveal>
          </div>
        </div>

        <button
          onClick={() => scrollTo('about')}
          className="mx-auto mt-20 hidden flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-bakery-brown/60 transition-colors hover:text-bakery-cocoa lg:flex"
        >
          {t('hero.scroll')}
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </div>
    </Section>
  );
};

export default Hero;
