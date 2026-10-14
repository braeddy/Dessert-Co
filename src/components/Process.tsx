import React from 'react';
import { MessageCircleHeart, PencilRuler, PartyPopper, Info } from 'lucide-react';
import Section from '../layout/Section';
import Reveal from './Reveal';
import { useTranslation } from 'react-i18next';

const steps = [
  { key: 'one', icon: MessageCircleHeart },
  { key: 'two', icon: PencilRuler },
  { key: 'three', icon: PartyPopper },
];

const Process: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="process" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-bakery-blue/30 blur-3xl" />

      <div className="container mx-auto">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('process.eyebrow')}</span>
          <h2 className="section-title mt-5">{t('process.title')}</h2>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {/* Linea di collegamento tra i passaggi */}
          <div className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-bakery-rose/30 md:block" />

          {steps.map(({ key, icon: Icon }, index) => (
            <Reveal key={key} delay={index * 150} className="relative text-center">
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-soft ring-8 ring-bakery-ivory">
                <Icon size={28} className="text-bakery-rose" />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-bakery-cocoa text-xs font-bold text-white">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-2xl font-medium text-bakery-cocoa">{t(`process.steps.${key}.title`)}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-bakery-brown/70">{t(`process.steps.${key}.description`)}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-14 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-bakery-pink/50 px-5 py-2.5 text-center text-sm text-bakery-cocoa">
            <Info size={16} className="shrink-0" />
            {t('process.note')}
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Process;
