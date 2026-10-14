import React from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './LogoBG';
import { useTranslation } from 'react-i18next';
import { contactInfo, navSections } from '../constants';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const goTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialClass =
    'flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-bakery-rose hover:bg-bakery-rose';

  return (
    <footer className="relative overflow-hidden bg-bakery-cocoa text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-bakery-rose/20 blur-3xl" />

      <div className="container relative mx-auto px-4 pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size="small" />
            <p className="mt-6 max-w-sm leading-relaxed text-white/65">{t('footer.description')}</p>
            <div className="mt-8 flex gap-3">
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialClass}>
                <Instagram size={18} />
              </a>
              <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialClass}>
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-bakery-pink">{t('footer.navTitle')}</h4>
            <ul className="mt-6 space-y-3">
              {navSections.map((id) => (
                <li key={id}>
                  <button onClick={() => goTo(id)} className="text-white/75 transition-colors hover:text-white">
                    {t(`header.${id}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-bakery-pink">{t('footer.contactTitle')}</h4>
            <ul className="mt-6 space-y-3 text-white/75">
              <li>{t('contact.address')}</li>
              <li>
                <a href={contactInfo.phoneHref} className="transition-colors hover:text-white">{t('contact.phone')}</a>
              </li>
              <li>
                <a href={contactInfo.emailHref} className="transition-colors hover:text-white">{t('contact.email')}</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pointer-events-none mt-16 select-none text-center font-serif text-[18vw] font-medium leading-none tracking-tight text-white/[0.04] md:text-[12rem]" aria-hidden="true">
          Dessert&amp;Co
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/55 md:flex-row">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li>
              <Link to="/privacy-policy" className="transition-colors hover:text-white">{t('footer.privacyPolicy')}</Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="transition-colors hover:text-white">{t('footer.termsOfService')}</Link>
            </li>
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                {t('footer.backToTop')}
                <ArrowUp size={14} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
