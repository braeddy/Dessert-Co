import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  // Per i contenuti visibili all'apertura della pagina: la dissolvenza parte subito via CSS,
  // senza aspettare JavaScript, traduzioni e React, che sui telefoni lenti la ritardavano
  immediate?: boolean;
}

// Mostra il contenuto con una dissolvenza quando entra nel viewport
const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, as = 'div', immediate = false }) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || immediate) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [immediate]);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`${immediate ? 'reveal-immediate' : `reveal ${visible ? 'is-visible' : ''}`} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
