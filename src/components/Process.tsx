import React from 'react';
import { MessageCircleHeart, PencilRuler, PartyPopper, Info } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';

// delay: quando compare ogni passaggio. Su desktop segue la linea che si disegna da sinistra
// a destra, così ogni passaggio compare quando la linea lo raggiunge; su mobile i passaggi
// sono uno sotto l'altro e basta una breve cascata
const steps = [
  { key: 'one', icon: MessageCircleHeart, delay: '[--reveal-delay:0ms]' },
  { key: 'two', icon: PencilRuler, delay: '[--reveal-delay:150ms] md:[--reveal-delay:550ms]' },
  { key: 'three', icon: PartyPopper, delay: '[--reveal-delay:300ms] md:[--reveal-delay:1100ms]' },
];

// L'animazione si ripete ogni volta che il pannello torna sullo schermo, ma non prima che
// siano passati questi millisecondi da quando è comparso l'ultima volta
const REPLAY_AFTER = 8000;

// Comparsa con un piccolo rimbalzo, dopo il ritardo del passaggio (--reveal-delay di Reveal)
const pop =
  'reveal-pop transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none [.is-visible_&]:scale-100 [.is-visible_&]:opacity-100';

// Pannello della sezione "Cosa facciamo", subito sotto le card dei servizi e con la stessa
// spaziatura e gli stessi angoli: come si arriva dalla richiesta alla torta
const Process: React.FC = () => {
  const { t } = useTranslation();
  // Linea, passaggi e nota si animano insieme in base alla visibilità dell'intero blocco
  const { ref: stepsRef, inView: stepsInView } = useInView<HTMLDivElement>(true, REPLAY_AFTER);

  return (
    <div id="process" className="mt-5 rounded-[2rem] bg-bakery-ivory px-6 py-12 md:px-12 md:py-16">
      <SectionHeader eyebrow={t('process.eyebrow')} title={t('process.title')} level="h3" />

      <div ref={stepsRef}>
        <div className="relative grid gap-6 md:grid-cols-3 md:gap-8">
          {/* Linea ondulata di collegamento tra i passaggi: passa dal centro di ogni cerchio e
              si disegna da sinistra a destra scoprendosi con clip-path */}
          <div
            className={`reveal-line pointer-events-none absolute left-[16%] right-[16%] top-0 hidden h-20 transition-[clip-path] delay-100 duration-[1100ms] ease-in-out motion-reduce:transition-none motion-reduce:[clip-path:none] md:block ${
              stepsInView ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_100%_0_0)]'
            }`}
          >
            <svg viewBox="0 0 1000 80" preserveAspectRatio="none" aria-hidden="true" className="h-full w-full overflow-visible text-bakery-rose/40">
              <path
                d="M0 40 C 170 0, 330 0, 500 40 S 830 80, 1000 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 7"
                strokeLinecap="round"
                // Spessore e trattini restano uguali anche se l'SVG viene allargato
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {steps.map(({ key, icon: Icon, delay }, index) => (
            <Reveal key={key} visible={stepsInView} className={`group relative text-center ${delay}`}>
              <div className={`relative mx-auto h-20 w-20 scale-75 opacity-0 [transition-delay:var(--reveal-delay)] ${pop}`}>
                {/* L'hover è su un elemento interno, senza il ritardo della comparsa */}
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-soft ring-8 ring-bakery-ivory transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon size={28} className="text-bakery-rose transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <span
                  className={`absolute -right-1 -top-1 flex h-7 w-7 scale-0 items-center justify-center rounded-full bg-bakery-cocoa text-xs font-bold text-white [transition-delay:calc(var(--reveal-delay)+250ms)] ${pop}`}
                >
                  {index + 1}
                </span>
              </div>
              <h4 className="mt-6 font-serif text-2xl font-medium text-bakery-cocoa">{t(`process.steps.${key}.title`)}</h4>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-bakery-brown/70">{t(`process.steps.${key}.description`)}</p>
            </Reveal>
          ))}
        </div>

        <Reveal visible={stepsInView} className="mt-10 flex justify-center [--reveal-delay:300ms] md:[--reveal-delay:1400ms]">
          <p className="inline-flex items-center gap-2 rounded-full bg-bakery-pink/50 px-5 py-2.5 text-center text-sm text-bakery-cocoa">
            <Info size={16} className="shrink-0" />
            {t('process.note')}
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default Process;
