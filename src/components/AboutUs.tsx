import React from 'react';
import { Heart, Award, Palette, Quote } from 'lucide-react';
import Section from '../layout/Section';
import Reveal from './Reveal';
import { useTranslation } from 'react-i18next';
import { foundedYear } from '../constants';
import aboutVariants from '../assets/images/about-us.webp?w=800;1200;1600;2304&format=webp&as=metadata';
import { toResponsive } from '../utils/responsiveImage';

const aboutImage = toResponsive(aboutVariants);

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const years = new Date().getFullYear() - foundedYear;

  const features = [
    { key: 'love', icon: Heart, color: 'bg-bakery-pink' },
    { key: 'quality', icon: Award, color: 'bg-bakery-blue/60' },
    { key: 'custom', icon: Palette, color: 'bg-bakery-cream' },
  ];

  return (
    <Section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Immagine */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
              <img
                src={aboutImage.src}
                srcSet={aboutImage.srcSet}
                // La foto 3:2 riempie un riquadro 4:5 (5:4 da sm a lg): serve più larghezza del riquadro stesso
                sizes="(min-width: 1536px) 1350px, (min-width: 1280px) 1110px, (min-width: 1024px) 870px, (min-width: 640px) 120vw, 188vw"
                width={aboutImage.width}
                height={aboutImage.height}
                alt={t('about.imageAlt')}
                className="aspect-[4/5] w-full object-cover object-[65%_center] sm:aspect-[5/4] lg:aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bakery-cocoa/70 via-bakery-cocoa/0 to-transparent" />
              <figure className="absolute inset-x-6 bottom-6 text-white md:inset-x-10 md:bottom-10">
                <Quote size={28} className="mb-3 text-bakery-pink" />
                <blockquote className="font-serif text-2xl font-light italic leading-snug md:text-3xl">
                  {t('about.quote')}
                </blockquote>
                <figcaption className="mt-3 font-script text-3xl text-bakery-pink">{t('about.signature')}</figcaption>
              </figure>
            </div>

            <div className="absolute -right-4 -top-6 rounded-3xl bg-white px-6 py-5 text-center shadow-soft md:-right-8">
              <p className="font-serif text-5xl font-medium text-bakery-rose">{years}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-bakery-brown/70">{t('about.yearsLabel')}</p>
            </div>
          </Reveal>

          {/* Testo */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">{t('about.eyebrow')}</span>
              <h2 className="section-title mt-5">{t('about.storyTitle')}</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 text-lg leading-relaxed text-bakery-brown/85">{t('about.storyParagraph1')}</p>
              <p className="mt-5 leading-relaxed text-bakery-brown/75">{t('about.storyParagraph2')}</p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {features.map(({ key, icon: Icon, color }, index) => (
                <Reveal
                  key={key}
                  delay={150 + index * 100}
                  className="group rounded-3xl border border-bakery-brown/10 bg-white/70 p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${color} transition-transform duration-500 group-hover:rotate-6`}>
                    <Icon className="text-bakery-cocoa" size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-bakery-cocoa">{t(`about.features.${key}.title`)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-bakery-brown/70">{t(`about.features.${key}.description`)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
