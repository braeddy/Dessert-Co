import React from 'react';

interface LogoProps {
  size: 'small' | 'large';
  isSecondaryPage?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size, isSecondaryPage = false }) => {
  // Se è una pagina secondaria, riduciamo ulteriormente le dimensioni
  const finalHeight = isSecondaryPage 
    ? (size === 'small' ? 'h-16' : 'h-20') // Più piccolo per pagine secondarie
    : (size === 'small' ? 'h-20' : 'h-28'); // Dimensioni originali per home page

  const imgHeight = isSecondaryPage 
    ? (size === 'small' ? 'h-12' : 'h-16') // Immagine più piccola per pagine secondarie
    : (size === 'small' ? 'h-16' : 'h-24'); // Dimensioni originali per home page

  return (
    <div className={`flex items-center ${finalHeight}`}>
      <div className="relative">
        <img 
          src="/logo.png" 
          alt="Dessert&Co Logo" 
          className={`${imgHeight} object-contain transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default Logo;