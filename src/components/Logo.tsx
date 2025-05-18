import React from 'react';

interface LogoProps {
  size: 'small' | 'large';
  isSecondaryPage?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size, isSecondaryPage = false }) => {
  // Se è una pagina secondaria, riduciamo ulteriormente le dimensioni
  const finalHeight = isSecondaryPage 
    ? (size === 'small' ? 'h-24' : 'h-28') // Più piccolo per pagine secondarie
    : (size === 'small' ? 'h-32' : 'h-40'); // Dimensioni originali per home page

  const imgHeight = isSecondaryPage 
    ? (size === 'small' ? 'h-20' : 'h-24') // Immagine più piccola per pagine secondarie
    : (size === 'small' ? 'h-28' : 'h-36'); // Dimensioni originali per home page

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