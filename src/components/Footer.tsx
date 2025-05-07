import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from './LogoBG';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
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
              {t('footer.description')}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-serif text-xl mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/robertadessert?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="text-white hover:text-bakery-blue transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100060329632132" target='_blank' className="text-white hover:text-bakery-blue transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {currentYear} {t('footer.copyright')}
          </p>
          
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                {t('footer.privacyPolicy')}
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                {t('footer.termsOfService')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;