import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../layout/Section';
import { siteTitle } from '../constants';

const headingClass = 'font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  // Titolo della scheda del browser dedicato; uscendo dalla pagina torna quello del sito
  useEffect(() => {
    document.title = t('privacy.metaTitle');
    return () => {
      document.title = siteTitle;
    };
  }, [t]);

  const list = (prefix: string, count: number) => (
    <ul className="list-disc pl-6 mb-6">
      {Array.from({ length: count }, (_, i) => (
        <li key={i}>{t(`privacy.${prefix}.item${i + 1}`)}</li>
      ))}
    </ul>
  );

  return (
    <Section id="privacy-policy" className="pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 shadow-soft md:p-12">
        <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-8 text-bakery-cocoa">{t('privacy.title')}</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">{t('privacy.lastUpdated')}</p>
          <p>{t('privacy.intro')}</p>

          <h2 className={headingClass}>{t('privacy.controller.title')}</h2>
          <p>{t('privacy.controller.content')}</p>

          <h2 className={headingClass}>{t('privacy.data.title')}</h2>
          {list('data', 3)}

          <h2 className={headingClass}>{t('privacy.purposes.title')}</h2>
          {list('purposes', 2)}

          <h2 className={headingClass}>{t('privacy.provision.title')}</h2>
          <p>{t('privacy.provision.content')}</p>

          <h2 className={headingClass}>{t('privacy.cookies.title')}</h2>
          <p>{t('privacy.cookies.content')}</p>
          <p className="mt-4">{t('privacy.cookies.control')}</p>

          <h2 className={headingClass}>{t('privacy.recipients.title')}</h2>
          <p>{t('privacy.recipients.content')}</p>
          {list('recipients', 3)}
          <p>{t('privacy.recipients.transfer')}</p>

          <h2 className={headingClass}>{t('privacy.retention.title')}</h2>
          <p>{t('privacy.retention.content')}</p>

          <h2 className={headingClass}>{t('privacy.rights.title')}</h2>
          <p>{t('privacy.rights.content')}</p>
          {list('rights', 5)}
          <p>{t('privacy.rights.contact')}</p>

          <h2 className={headingClass}>{t('privacy.changes.title')}</h2>
          <p>{t('privacy.changes.content')}</p>
        </div>
      </div>
    </Section>
  );
};

export default PrivacyPolicy;
