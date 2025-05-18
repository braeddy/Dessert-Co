import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import LogoM from './LogoM';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  scrolled: boolean;
}

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const currentLanguage = i18n.language;

  const flagMap: Record<string, string> = {
    it: '🇮🇹',
    en: '🇬🇧',
    de: '🇩🇪',
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setDropdownOpen(!dropdownOpen)} 
        className="px-4 py-2 bg-bakery-blue text-white rounded flex items-center gap-2"
      >
        {flagMap[currentLanguage]} {currentLanguage.toUpperCase()} <ChevronDown size={16} />
      </button>
      <div
        className={`absolute right-0 mt-2 w-32 bg-white shadow-lg rounded transition-all duration-300 transform ${
          dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ pointerEvents: dropdownOpen ? 'auto' : 'none' }}
      >
        <button 
          onClick={() => changeLanguage('it')} 
          className="w-full text-left px-4 py-2 hover:bg-bakery-blue hover:text-white flex items-center gap-2"
        >
          🇮🇹 IT
        </button>
        <button 
          onClick={() => changeLanguage('en')} 
          className="w-full text-left px-4 py-2 hover:bg-bakery-blue hover:text-white flex items-center gap-2"
        >
          🇬🇧 EN
        </button>
        <button 
          onClick={() => changeLanguage('de')} 
          className="w-full text-left px-4 py-2 hover:bg-bakery-blue hover:text-white flex items-center gap-2"
        >
          🇩🇪 DE
        </button>
      </div>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Verifica se ci troviamo in una pagina secondaria (non nella home)
  const isSecondaryPage = location.pathname !== '/';

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          {/* Logo per la versione desktop */}
          <div className="hidden md:block">
            <Logo size={scrolled ? 'small' : 'large'} isSecondaryPage={isSecondaryPage} />
          </div>

          {/* LogoM per la versione mobile */}
          <div className="block md:hidden">
            <LogoM size={scrolled ? 'small' : 'large'} isSecondaryPage={isSecondaryPage} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="font-serif text-bakery-brown hover:text-bakery-blue transition-colors"
              >
                {t('header.home')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-serif text-bakery-brown hover:text-bakery-blue transition-colors"
              >
                {t('header.about')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="font-serif text-bakery-brown hover:text-bakery-blue transition-colors"
              >
                {t('header.gallery')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-serif text-bakery-brown hover:text-bakery-blue transition-colors"
              >
                {t('header.contact')}
              </button>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-bakery-brown"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white fixed inset-0 z-40 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-bakery-brown"
            aria-label={t('header.closeMenu')}
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-8">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="font-serif text-bakery-brown text-lg"
            >
              {t('header.home')}
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-serif text-bakery-brown text-lg"
            >
              {t('header.about')}
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="font-serif text-bakery-brown text-lg"
            >
              {t('header.gallery')}
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-serif text-bakery-brown text-lg"
            >
              {t('header.contact')}
            </button>
          </li>
        </ul>
        <div className="mt-8 flex justify-center">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;