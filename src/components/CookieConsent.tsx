import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { setCookieConsent, getCookieConsent } from '../services/cookieService';

interface CookieConsentProps {
  className?: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Verifica se il consenso è già stato dato
    const consentGiven = getCookieConsent();
    if (!consentGiven) {
      // Mostra il banner dopo 1 secondo per una migliore esperienza utente
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    // Imposta i cookie e il consenso
    setCookieConsent('all');
    setVisible(false);
  };

  const acceptEssential = () => {
    // Imposta solo i cookie essenziali
    setCookieConsent('essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] animate-fade-in px-4 pb-4">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-bakery-brown/10 bg-white/95 shadow-soft backdrop-blur-xl">
        <div className="p-6 md:p-8">
          <h3 className="mb-3 font-serif text-2xl font-medium text-bakery-cocoa">
            {t('cookies.title', 'Informativa sui Cookie')}
          </h3>
          
          <p className="mb-6 text-sm leading-relaxed text-bakery-brown/75">
            {t('cookies.description', 
              'Questo sito utilizza cookie tecnici necessari al funzionamento e cookie analitici per migliorare la tua esperienza. Puoi accettare tutti i cookie o solo quelli essenziali per la navigazione.')}
          </p>
          
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button
              onClick={acceptEssential}
              className="btn-ghost !py-2.5"
            >
              {t('cookies.acceptEssential', 'Solo cookie essenziali')}
            </button>
            
            <button
              onClick={acceptAll}
              className="btn-primary !py-2.5"
            >
              {t('cookies.acceptAll', 'Accetta tutti i cookie')}
            </button>
            
            <Link
              to="/privacy-policy"
              className="order-first flex items-center justify-center px-2 py-2 text-sm text-bakery-brown/70 underline decoration-bakery-rose underline-offset-2 hover:text-bakery-rose sm:mr-auto"
            >
              {t('cookies.privacyPolicy', 'Privacy Policy')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
