import React from 'react';

interface LogoProps {
  size: 'small' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <img
      src="/logo.webp"
      alt="Dessert&Co Logo"
      className={`${size === 'small' ? 'h-11 w-11' : 'h-16 w-16 md:h-20 md:w-20'} rounded-full bg-white object-contain shadow-sm ring-1 ring-bakery-brown/5 transition-all duration-500`}
    />
  );
};

export default Logo;
