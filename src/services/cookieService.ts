// Importiamo il servizio di analytics
import { initializeAnalytics } from './analyticsService';

// Tipi di consenso ai cookie
export type CookieConsentType = 'all' | 'essential' | null;

// Cookie essenziali necessari per il funzionamento del sito
export const setEssentialCookies = () => {
  // I cookie essenziali vengono sempre impostati
  // Per esempio, impostare un cookie di sessione se necessario
  // document.cookie = 'essential=true; path=/; max-age=31536000; SameSite=Lax';
};

// Cookie analitici e di tracciamento
export const setAnalyticsCookies = () => {
  // Inizializza/configura i cookie analitici come Google Analytics, ecc.
  // Questo viene eseguito solo se l'utente ha acconsentito a tutti i cookie
  
  // Se gtag è già inizializzato, aggiorniamo solo lo stato del consenso
  if (window.gtag && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  } else {
    // Altrimenti inizializziamo Google Analytics con il consenso
    initializeAnalytics('granted');
  }
};

// Leggi lo stato di consenso corrente
export const getCookieConsent = (): CookieConsentType => {
  return localStorage.getItem('cookieConsent') as CookieConsentType;
};

// Imposta il consenso e gestisci l'inizializzazione dei cookie appropriati
export const setCookieConsent = (consentType: CookieConsentType) => {
  if (consentType) {
    localStorage.setItem('cookieConsent', consentType);
    localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
    
    // Imposta sempre i cookie essenziali
    setEssentialCookies();
    
    // Imposta cookie analitici solo se l'utente ha dato il consenso completo
    if (consentType === 'all') {
      setAnalyticsCookies();
    }
  } else {
    // Se il consenso è nullo, rimuoviamo tutto
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookieConsentTimestamp');
  }
  
  return consentType;
};

// Inizializza i cookie in base alle preferenze salvate
export const initializeCookies = () => {
  const consent = getCookieConsent();
  
  // Imposta sempre i cookie essenziali
  setEssentialCookies();
  
  // Gestisci l'inizializzazione di Analytics in base al consenso
  if (consent === 'all') {
    // Se l'utente ha già dato il consenso completo, inizializziamo con consenso abilitato
    setAnalyticsCookies();
  } else if (consent === 'essential' || process.env.NODE_ENV === 'production') {
    // Se l'utente ha scelto solo cookie essenziali o siamo in produzione senza consenso esplicito,
    // inizializziamo comunque Analytics ma con consenso negato
    initializeAnalytics('denied');
  }
  
  return consent;
};
