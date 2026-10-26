import i18n, { type BackendModule, type ResourceKey } from 'i18next';
import { initReactI18next } from 'react-i18next';
import it from './locales/it';

export const supportedLanguages = ['it', 'en', 'de'] as const;
export type Language = (typeof supportedLanguages)[number];

// L'italiano è incluso nel bundle (è anche la lingua delle pagine pre-generate);
// inglese e tedesco vengono scaricati solo quando servono.
const loaders: Record<Language, () => Promise<{ default: ResourceKey }>> = {
  it: () => Promise.resolve({ default: it }),
  en: () => import('./locales/en'),
  de: () => import('./locales/de'),
};

const isSupported = (lng: string | null | undefined): lng is Language =>
  !!lng && (supportedLanguages as readonly string[]).includes(lng);

// Prima la scelta fatta dall'utente nel menu, poi la lingua del browser ("de-CH" diventa "de"),
// altrimenti l'inglese
export const detectLanguage = (): Language => {
  try {
    const saved = localStorage.getItem('lang');
    if (isSupported(saved)) return saved;
  } catch {
    // Storage non disponibile (es. navigazione privata)
  }
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return browserLanguages.map((lng) => lng.split('-')[0]).find(isSupported) ?? 'en';
};

const lazyLocales: BackendModule = {
  type: 'backend',
  init() {},
  read(lng, _namespace, callback) {
    if (!isSupported(lng)) return callback(null, {});
    loaders[lng]()
      .then((module) => callback(null, module.default))
      .catch((error) => callback(error, null));
  },
};

// Mantiene l'attributo lang della pagina allineato alla lingua attiva
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') document.documentElement.lang = lng;
});

// Restituisce una promise risolta quando la lingua richiesta è caricata
export const initI18n = (lng: Language) =>
  i18n
    .use(lazyLocales)
    .use(initReactI18next)
    .init({
      lng,
      resources: { it: { translation: it } },
      partialBundledLanguages: true,
      supportedLngs: supportedLanguages,
      fallbackLng: 'it',
      interpolation: {
        escapeValue: false, // React già gestisce la protezione contro XSS
      },
      react: { useSuspense: false },
    });

export default i18n;
