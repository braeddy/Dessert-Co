// Funzione per configurare Google Analytics
export const initializeAnalytics = (consent: 'granted' | 'denied') => {
  // Verifica se siamo in produzione
  const isProduction = process.env.NODE_ENV === 'production';
  
  // ID di Google Analytics (sostituisci con il tuo ID)
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Sostituisci con il tuo ID

  // Aggiungiamo lo script di Google Analytics solo in produzione
  if (isProduction) {
    // Crea e aggiungi lo script di Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Inizializza Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    
    // Configurazione di base con preferenza di consenso
    gtag('config', GA_MEASUREMENT_ID, {
      'anonymize_ip': true, // Anonimizza gli IP
      'allow_google_signals': false,
      'allow_ad_personalization_signals': false
    });

    // Imposta lo stato di consenso
    gtag('consent', 'default', {
      'analytics_storage': consent
    });
    
    // Assegna la funzione gtag all'oggetto window
    window.gtag = gtag;
  }
};

// Tipi per dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
