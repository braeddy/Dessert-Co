import type { ImageMetadata } from '../utils/responsiveImage';

// Galleria: ogni sottocartella di src/assets/gallery è una categoria.
// Per aggiungere una foto basta copiarla nella cartella giusta (jpg, png o webp):
// in fase di build viene convertita in WebP: miniature da 400/600/800px per la griglia
// (il browser sceglie la più adatta allo schermo) e una versione da 1800px per il lightbox.
// L'ordine segue il nome del file; un prefisso numerico ("01-") serve solo a ordinarle.
export const galleryCategories = ['matrimoni', 'compleanni', 'eventi'] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryImage {
  thumb: string;
  thumbSrcSet: string;
  full: string;
  width: number;
  height: number;
  category: GalleryCategory;
  // Nome del file senza prefisso numerico: chiave del testo alternativo specifico, se esiste
  name: string;
}


const thumbs = import.meta.glob<ImageMetadata>('../assets/gallery/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
  query: { w: '800', format: 'webp', as: 'metadata' },
});
const thumbSrcSets = import.meta.glob<string>('../assets/gallery/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
  query: { w: '400;600;800', format: 'webp', as: 'srcset' },
});
const fulls = import.meta.glob<string>('../assets/gallery/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
  query: { w: '1800', format: 'webp' },
});

const sortedImages: GalleryImage[] = Object.entries(thumbs)
  .map(([path, meta]) => {
    const [, category, file] = path.match(/gallery\/([^/]+)\/([^/]+)$/)!;
    return {
      thumb: meta.src,
      thumbSrcSet: thumbSrcSets[path],
      full: fulls[path],
      width: meta.width,
      height: meta.height,
      category: category as GalleryCategory,
      name: file.replace(/\.[^.]+$/, '').replace(/^\d+-/, ''),
    };
  })
  .filter((image) => galleryCategories.includes(image.category))
  .sort((a, b) => galleryCategories.indexOf(a.category) - galleryCategories.indexOf(b.category));

// Alterna le categorie distribuendo le foto di ognuna in modo uniforme lungo la lista,
// così la vista "Tutte" è varia anche se una categoria ha molte più foto delle altre.
// Dentro ogni categoria l'ordine dei file resta invariato.
const position = new Map<GalleryImage, number>();
galleryCategories.forEach((category) => {
  const inCategory = sortedImages.filter((image) => image.category === category);
  inCategory.forEach((image, index) => position.set(image, (index + 0.5) / inCategory.length));
});

export const galleryImages: GalleryImage[] = [...sortedImages].sort(
  (a, b) => position.get(a)! - position.get(b)! || galleryCategories.indexOf(a.category) - galleryCategories.indexOf(b.category)
);

// Titolo della scheda del browser, uguale a quello di index.html
export const siteTitle = 'Dessert&Co di Roberta Rosetti – Torte personalizzate a Piombino';

export const navSections = ['home', 'about', 'services', 'gallery', 'contact'] as const;

export const contactInfo = {
  phoneHref: 'tel:+393494136253',
  emailHref: 'mailto:ddessert.co@gmail.com',
  mapsUrl: 'https://maps.app.goo.gl/bX76yy3AF5AbpsUb7',
  instagram: 'https://www.instagram.com/robertadessert?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  facebook: 'https://www.facebook.com/profile.php?id=100060329632132',
  vatNumber: '01563900495',
};

export const foundedYear = 2007;
