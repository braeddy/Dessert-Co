import { useEffect, useRef, useState } from 'react';

// Diventa true quando l'elemento entra nel viewport. Di base poi resta tale; con replayAfter (ms)
// torna false quando l'elemento esce dallo schermo, ma solo se sono passati almeno replayAfter ms
// da quando è comparso: così l'animazione si ripete quando riappare, non a ogni piccolo scroll.
// Il ritorno a false avviene sempre fuori dallo schermo, quindi non si vede
export const useInView = <T extends HTMLElement>(enabled = true, replayAfter?: number) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    let shownAt = 0;
    let shown = false;
    let resetTimer: number | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(resetTimer);
          if (!shown) {
            shown = true;
            shownAt = Date.now();
            setInView(true);
          }
          if (replayAfter === undefined) observer.disconnect();
        } else if (shown && replayAfter !== undefined) {
          // Uscito dallo schermo: si prepara a ripetere l'animazione appena trascorso il tempo minimo
          resetTimer = window.setTimeout(() => {
            shown = false;
            setInView(false);
          }, Math.max(shownAt + replayAfter - Date.now(), 0));
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => {
      window.clearTimeout(resetTimer);
      observer.disconnect();
    };
  }, [enabled, replayAfter]);

  return { ref, inView };
};
