import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import '@fontsource-variable/fraunces/opsz.css';
import '@fontsource-variable/fraunces/opsz-italic.css';
import '@fontsource-variable/manrope';
import '@fontsource/pinyon-script';
import './index.css';
import { detectLanguage, initI18n } from './i18n';
import { Analytics } from "@vercel/analytics/react"

const language = detectLanguage();

initI18n(language).then(() => {
  const container = document.getElementById('root')!;
  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </StrictMode>
  );

  // Le pagine pre-generate sono in italiano e indicano il percorso che contengono:
  // se lingua e pagina coincidono React riprende l'HTML già presente, altrimenti lo
  // sostituisce (es. visitatore inglese, indirizzo che non esiste, o in sviluppo)
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  if (language === 'it' && container.dataset.prerendered === currentPath) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
});
