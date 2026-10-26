import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Section from '../layout/Section';
import { siteTitle } from '../constants';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  // Titolo della scheda del browser dedicato; uscendo dalla pagina torna quello del sito
  // (anche quando si arriva direttamente da 404.html, che ha già il titolo della 404)
  useEffect(() => {
    document.title = t('notFound.metaTitle');
    return () => {
      document.title = siteTitle;
    };
  }, [t]);

  return (
    <Section id="not-found" className="flex min-h-[85vh] items-center pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="container mx-auto flex flex-col items-center text-center">
        <p aria-hidden="true" className="font-serif text-[7rem] font-medium leading-none tracking-tight text-bakery-pink md:text-[11rem]">
          404
        </p>
        <span className="eyebrow mt-6">{t('notFound.eyebrow')}</span>
        <h1 className="section-title mt-5 max-w-2xl">{t('notFound.title')}</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-bakery-brown/75">{t('notFound.description')}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} />
            {t('notFound.home')}
          </Link>
          <Link to="/" state={{ scrollTo: 'gallery' }} className="btn-ghost bg-white/60">
            {t('notFound.gallery')}
          </Link>
          <Link to="/" state={{ scrollTo: 'contact' }} className="btn-ghost bg-white/60">
            {t('notFound.contact')}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default NotFound;
