import React from 'react';

interface LogoProps {
  size: 'small' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <div className={`flex items-center ${size === 'small' ? 'h-32' : 'h-40'}`}>
      <div className="relative">
        <img 
          src="/logo.png" 
          alt="Dessert&Co Logo" 
          className={`${size === 'small' ? 'h-28' : 'h-36'} object-contain transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default Logo;