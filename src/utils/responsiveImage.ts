export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
}

export interface ResponsiveImage {
  src: string;
  srcSet: string;
  width: number;
  height: number;
}

// Trasforma le varianti generate da vite-imagetools negli attributi di un <img>.
// Il browser sceglie dal srcset la misura più adatta in base a `sizes` e alla densità dello schermo.
export const toResponsive = (variants: ImageMetadata | ImageMetadata[]): ResponsiveImage => {
  const list = Array.isArray(variants) ? variants : [variants];
  // Senza ingrandimenti due varianti possono avere la stessa larghezza: ne basta una
  const unique = [...new Map(list.map((v) => [v.width, v])).values()].sort((a, b) => a.width - b.width);
  const largest = unique[unique.length - 1];
  return {
    src: largest.src,
    srcSet: unique.map((v) => `${v.src} ${v.width}w`).join(', '),
    width: largest.width,
    height: largest.height,
  };
};
