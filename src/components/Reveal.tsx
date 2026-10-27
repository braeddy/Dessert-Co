import React from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  // Ritardo della comparsa (ms). Senza, il ritardo può arrivare da --reveal-delay nelle classi
  // (es. diverso tra mobile e desktop); i figli possono usare la stessa variabile
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  // Per i contenuti visibili all'apertura della pagina: la dissolvenza parte subito via CSS,
  // senza aspettare JavaScript, traduzioni e React, che sui telefoni lenti la ritardavano
  immediate?: boolean;
  // Visibilità decisa dal componente che lo usa (es. più elementi animati insieme e ripetuti);
  // in quel caso Reveal non osserva lo scroll da solo
  visible?: boolean;
}

// Mostra il contenuto con una dissolvenza quando entra nel viewport
const Reveal: React.FC<RevealProps> = ({ children, className = '', delay, as = 'div', immediate = false, visible: forcedVisible }) => {
  const { ref, inView } = useInView<HTMLElement>(!immediate && forcedVisible === undefined);
  const visible = forcedVisible ?? inView;

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`${immediate ? 'reveal-immediate' : `reveal ${visible ? 'is-visible' : ''}`} ${className}`}
      style={delay === undefined ? undefined : ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties)}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
