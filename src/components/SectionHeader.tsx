import React from 'react';
import Reveal from './Reveal';

interface SectionHeaderProps {
  // Per le sezioni principali è il nome della voce nel menu (header.*), così coincidono sempre
  eyebrow: string;
  title: string;
  description?: string;
  // h3 per le parti interne a una sezione (es. "Come funziona" dentro "Cosa facciamo"):
  // titolo più piccolo e meno spazio sotto
  level?: 'h2' | 'h3';
}

// Intestazione comune delle sezioni, allineata a sinistra: etichetta e titolo, con la
// descrizione a destra su schermi larghi e sotto su mobile
const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, description, level = 'h2' }) => {
  const Heading = level;

  return (
    <div className={`${level === 'h2' ? 'mb-14' : 'mb-12'} flex flex-col justify-between gap-6 md:flex-row md:items-end`}>
      <Reveal className="max-w-2xl">
        <span className="eyebrow">{eyebrow}</span>
        <Heading
          className={
            level === 'h2'
              ? 'section-title mt-5'
              : 'mt-4 font-serif text-2xl font-medium leading-[1.1] tracking-tight text-bakery-cocoa md:text-3xl lg:text-4xl'
          }
        >
          {title}
        </Heading>
      </Reveal>
      {description && (
        <Reveal delay={100} className="max-w-md">
          <p className="leading-relaxed text-bakery-brown/75">{description}</p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeader;
