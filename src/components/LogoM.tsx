import React from 'react';

interface LogoProps {
  size: 'small' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <div className={`flex items-center ${size === 'small' ? 'h-20' : 'h-28'}`}>
      <div className="relative">
        <img 
          src="/logo.png" 
          alt="Dessert&Co Logo" 
          className={`${size === 'small' ? 'h-16' : 'h-24'} object-contain transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default Logo;