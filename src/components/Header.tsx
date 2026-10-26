import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { navSections } from '../constants';

interface HeaderProps {
  scrolled: boolean;
}

const languages = [
  { code: 'it', label: 'Italiano' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
];

const LanguageSwitcher: React.FC<{ align?: 'left' | 'right'; direction?: 'down' | 'up' }> = ({
  align = 'right',
  direction = 'down',
}) => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Chiude il menu cliccando fuori
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem('lang', lng);
    } catch {
      // Storage non disponibile (es. navigazione privata): la scelta vale solo per questa visita
    }
    setDropdownOpen(false);
  };

  const currentLanguage = i18n.resolvedLanguage ?? 'it';

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-bakery-cocoa transition-colors hover:bg-bakery-pink/50"
      >
        {currentLanguage.toUpperCase()}
        <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        role="listbox"
        className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} ${
          direction === 'up' ? 'bottom-full mb-2 origin-bottom-left' : 'top-full mt-2 origin-top'
        } w-40 overflow-hidden rounded-2xl border border-bakery-brown/10 bg-white/95 p-1.5 shadow-soft backdrop-blur-xl transition-all duration-200 ${
          dropdownOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        {languages.map(({ code, label }) => (
          <button
            key={code}
            role="option"
            aria-selected={currentLanguage === code}
            onClick={() => changeLanguage(code)}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors ${
              currentLanguage === code ? 'bg-bakery-pink/60 font-semibold text-bakery-cocoa' : 'text-bakery-brown hover:bg-bakery-ivory'
            }`}
          >
            <span>{label}</span>
            <span className="text-xs opacity-60">{code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  // Evidenzia la voce di menu della sezione visibile
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  // Blocca lo scroll della pagina con il menu mobile aperto
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      // Dalle pagine secondarie torniamo alla home e poi scorriamo alla sezione
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const solid = scrolled || !isHome;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full transition-all duration-500 ${
          solid
            ? 'border border-white/60 bg-white/75 py-2 pl-3 pr-2 shadow-soft backdrop-blur-xl'
            : 'border border-transparent bg-transparent py-3 pl-1 pr-1'
        }`}
      >
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3" aria-label="Dessert&Co - Home">
          <Logo size={solid ? 'small' : 'large'} />
          <span className="hidden font-serif text-lg font-medium tracking-tight text-bakery-cocoa sm:block">
            Dessert<span className="text-bakery-rose">&amp;</span>Co
          </span>
        </button>

        {/* Navigazione desktop */}
        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {navSections.map((id) => {
              const active = isHome && activeSection === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active ? 'text-bakery-cocoa' : 'text-bakery-brown/70 hover:text-bakery-cocoa'
                    }`}
                  >
                    {t(`header.${id}`)}
                    <span
                      className={`absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-bakery-rose transition-all duration-300 ${
                        active ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <button onClick={() => scrollToSection('contact')} className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
            {t('header.cta')}
            <ArrowUpRight size={16} />
          </button>

          {/* Pulsante menu mobile */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full bg-bakery-cocoa text-white lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label={t('header.openMenu', 'Menu')}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-bakery-ivory transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-bakery-pink/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-bakery-blue/50 blur-3xl" />

        <div className="relative flex items-center justify-between px-5 pt-5">
          <Logo size="small" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-bakery-cocoa text-white"
            aria-label={t('header.closeMenu', 'Close')}
          >
            <X size={20} />
          </button>
        </div>

        <ul className="relative mt-10 flex flex-1 flex-col gap-2 px-8">
          {navSections.map((id, index) => (
            <li
              key={id}
              className={`transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: mobileMenuOpen ? `${120 + index * 60}ms` : '0ms' }}
            >
              <button
                onClick={() => scrollToSection(id)}
                className="flex w-full items-baseline gap-4 border-b border-bakery-brown/10 py-4 text-left"
              >
                <span className="text-xs font-semibold text-bakery-rose">0{index + 1}</span>
                <span className="font-serif text-4xl font-medium text-bakery-cocoa">{t(`header.${id}`)}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="relative flex items-center justify-between gap-4 px-8 pb-10">
          {/* In fondo allo schermo il menu si apre verso l'alto */}
          <LanguageSwitcher align="left" direction="up" />
          <button onClick={() => scrollToSection('contact')} className="btn-primary">
            {t('header.cta')}
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
