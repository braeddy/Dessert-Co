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
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h3 className="font-serif text-xl font-semibold text-bakery-brown mb-3">
            {t('cookies.title', 'Informativa sui Cookie')}
          </h3>
          
          <p className="text-gray-700 mb-4">
            {t('cookies.description', 
              'Questo sito utilizza cookie tecnici necessari al funzionamento e cookie analitici per migliorare la tua esperienza. Puoi accettare tutti i cookie o solo quelli essenziali per la navigazione.')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-bakery-brown border border-bakery-brown rounded-md hover:bg-bakery-cream hover:bg-opacity-20 transition-colors"
            >
              {t('cookies.acceptEssential', 'Solo cookie essenziali')}
            </button>
            
            <button
              onClick={acceptAll}
              className="px-4 py-2 bg-bakery-brown text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              {t('cookies.acceptAll', 'Accetta tutti i cookie')}
            </button>
            
            <Link
              to="/privacy-policy"
              className="px-4 py-2 text-bakery-blue hover:underline flex items-center justify-center"
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
