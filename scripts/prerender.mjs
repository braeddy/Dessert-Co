// Genera l'HTML delle pagine dopo la build, così contenuti e immagini sono già presenti
// al primo caricamento (utile per Google, per le anteprime dei link e per la velocità).
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const ssrDir = path.resolve('dist-ssr');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { prepare, render, prerenderedPages } = await import(path.join(ssrDir, 'entry-server.js'));

await prepare();

for (const { route, file, notFound } of prerenderedPages) {
  const html = await render(route);
  // La 404 non corrisponde a un indirizzo preciso: nel browser viene sempre ridisegnata
  const marker = notFound ? '' : ` data-prerendered="${route}"`;
  let page = template.replace('<div id="root"></div>', `<div id="root"${marker}>${html}</div>`);
  if (page === template) throw new Error('Contenitore #root non trovato in index.html');
  if (notFound) {
    // Titolo dedicato, niente indicizzazione e niente indirizzo canonico della home
    page = page
      .replace(/<title>[^<]*<\/title>/, '<title>Pagina non trovata – Dessert&amp;Co</title>\n    <meta name="robots" content="noindex" />')
      .replace(/\s*<link rel="canonical"[^>]*>/, '')
      .replace(/\s*<meta property="og:url"[^>]*>/, '');
  }
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true });
  fs.writeFileSync(path.join(dist, file), page);
  console.log(`prerender: ${route} -> dist/${file}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
