// Definizione dei tipi per Google Analytics
interface Window {
  gtag?: (
    command: string,
    action: string,
    params?: {
      [key: string]: any;
    }
  ) => void;
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: {
        [key: string]: any;
      }
    ) => void;
  }
}

export {};
