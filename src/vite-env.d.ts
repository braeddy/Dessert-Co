/// <reference types="vite/client" />

// Immagini elaborate da vite-imagetools in più larghezze (es. "foto.webp?w=400;800&format=webp&as=metadata")
declare module '*&as=metadata' {
  const variants: import('./utils/responsiveImage').ImageMetadata[];
  export default variants;
}
