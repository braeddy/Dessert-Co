import React from 'react';
import { useTranslation } from 'react-i18next';

// Striscia scorrevole con le occasioni
const Marquee: React.FC = () => {
  const { t } = useTranslation();
  const items = t('marquee', { returnObjects: true }) as string[];
  const list = Array.isArray(items) ? items : [];

  return (
    <div className="relative overflow-hidden bg-bakery-cocoa py-5 text-bakery-ivory" aria-hidden="true">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {[...list, ...list].map((item, index) => (
              <span key={index} className="flex items-center">
                <span className="px-8 font-serif text-2xl italic md:text-3xl">{item}</span>
                <span className="text-bakery-rose">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
