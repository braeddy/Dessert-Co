import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Logo size={scrolled ? 'small' : 'large'} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="font-serif text-bakery-brown hover:text-bakery-blue transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-serif text-bakery-brown hover:text-bakery-blue transition-colors"
              >
                Chi siamo
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="font-serif text-bakery-brown hover:text-bakery-blue transition-colors"
              >
                Galleria
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-serif text-bakery-brown hover:text-bakery-blue transition-colors"
              >
                Contatti
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-bakery-brown"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="font-serif text-bakery-brown"
              >
                Home
              </button>
            </li>
            <li className="py-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="font-serif text-bakery-brown"
              >
                Chi siamo
              </button>
            </li>
            <li className="py-2">
              <button 
                onClick={() => scrollToSection('gallery')}
                className="font-serif text-bakery-brown"
              >
                Galleria
              </button>
            </li>
            <li className="py-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-serif text-bakery-brown"
              >
                Contatti
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;