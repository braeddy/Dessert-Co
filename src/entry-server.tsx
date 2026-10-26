import { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Writable } from 'node:stream';
import App from './App';
import { initI18n } from './i18n';

// Pagine generate in HTML durante la build (vedi scripts/prerender.mjs).
// "404.html" viene servita da Vercel, con codice 404, per ogni indirizzo inesistente.
export const prerenderedPages = [
  { route: '/', file: 'index.html' },
  { route: '/privacy-policy', file: 'privacy-policy/index.html' },
  { route: '/404', file: '404.html', notFound: true },
];

// Le pagine vengono generate in italiano, la lingua predefinita del sito
export const prepare = () => initI18n('it');

// Restituisce l'HTML della pagina, aspettando anche i componenti caricati a richiesta
export const render = (url: string) =>
  new Promise<string>((resolve, reject) => {
    let html = '';
    const stream = renderToPipeableStream(
      <StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </StrictMode>,
      {
        onAllReady() {
          const output = new Writable({
            write(chunk, _encoding, done) {
              html += chunk;
              done();
            },
          });
          output.on('finish', () => resolve(html));
          stream.pipe(output);
        },
        onShellError: reject,
        onError: reject,
      }
    );
  });
