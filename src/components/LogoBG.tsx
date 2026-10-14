import React from 'react';

interface LogoProps {
  size: 'small' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <img
      src="/logobg.png"
      alt="Dessert&Co Logo"
      className={`${size === 'small' ? 'h-24 w-24' : 'h-36 w-36'} rounded-full object-contain`}
    />
  );
};

export default Logo;
