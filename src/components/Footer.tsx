import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bakery-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex justify-center md:justify-start">
              <Logo size="small" />
            </div>
            <p className="text-gray-300 mt-4 text-center md:text-left max-w-xs">
              Dessert&Co creates beautiful, custom-designed cakes for all your special occasions.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-serif text-xl mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-bakery-blue transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-bakery-blue transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-bakery-blue transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {currentYear} Dessert&Co di Roberta Rosetti. All rights reserved.
          </p>
          
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;