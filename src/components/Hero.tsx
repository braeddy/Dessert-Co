import React from 'react';
import { Cake } from 'lucide-react';
import Section from '../layout/Section';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="home" className="pt-24 md:pt-32 lg:min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-bakery-brown leading-tight">
              {t('hero.title')} <br />
              <span className="text-bakery-blue">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-bakery-brown text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Cake size={18} />
                <span>{t('hero.creations')}</span>
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-bakery-blue text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                {t('hero.contact')}
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-64 md:h-96 animate-float">
              <div className="absolute inset-0 bg-bakery-cream rounded-full opacity-30 transform scale-90"></div>
              <img 
                src="./hero-image.jpg" 
                alt="Wedding cake" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 md:h-48 md:w-48 bg-bakery-pink rounded-full animate-float" style={{ animationDelay: '1s', opacity: 0.3 }}></div>
            <div className="absolute -top-4 -right-4 h-24 w-24 md:h-32 md:w-32 bg-bakery-blue rounded-full animate-float" style={{ animationDelay: '2s', opacity: 0.3 }}></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;