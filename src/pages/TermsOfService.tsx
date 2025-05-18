import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../layout/Section';

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="terms-of-service" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-bakery-brown">{t('terms.title', 'Termini di Servizio')}</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">{t('terms.lastUpdated', 'Ultimo aggiornamento: 18 maggio 2024')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('terms.introduction.title', 'Introduzione')}</h2>
          <p>{t('terms.introduction.content', 'Benvenuto sul sito web di Dessert&Co. I seguenti termini e condizioni regolano il tuo accesso e utilizzo del nostro sito web. Utilizzando il nostro sito, accetti di essere vincolato da questi termini di servizio. Se non sei d\'accordo con questi termini, ti preghiamo di non utilizzare il nostro sito.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('terms.definitions.title', 'Definizioni')}</h2>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>"Noi", "Nostro", "Ci"</strong>: {t('terms.definitions.we', 'si riferiscono a Dessert&Co di Roberta Rosetti')}</li>
            <li><strong>"Tu", "Tuo"</strong>: {t('terms.definitions.you', 'si riferiscono all\'utente o visitatore del nostro sito web')}</li>
            <li><strong>"Sito"</strong>: {t('terms.definitions.site', 'si riferisce al sito web di Dessert&Co')}</li>
            <li><strong>"Servizi"</strong>: {t('terms.definitions.services', 'si riferiscono ai prodotti, servizi o contenuti offerti tramite il nostro sito')}</li>
          </ul>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('terms.use.title', 'Utilizzo del Sito')}</h2>
          <p>{t('terms.use.license', 'Ti concediamo una licenza limitata, non esclusiva e non trasferibile per accedere e utilizzare il nostro sito per scopi personali e non commerciali.')}</p>
          <p>{t('terms.use.restrictions', 'Non puoi:')}</p>
          <ul className="list-disc pl-6 mb-6">
            <li>{t('terms.use.restriction1', 'Copiare, modificare o creare opere derivate dal nostro sito o dai suoi contenuti')}</li>
            <li>{t('terms.use.restriction2', 'Utilizzare il nostro sito per scopi illegali o non autorizzati')}</li>
            <li>{t('terms.use.restriction3', 'Interferire o danneggiare il nostro sito o i server e le reti ad esso collegati')}</li>
            <li>{t('terms.use.restriction4', 'Raccogliere o tracciare informazioni personali di altri utenti')}</li>
            <li>{t('terms.use.restriction5', 'Impersonare un\'altra persona o entità o falsificare la tua affiliazione con una persona o entità')}</li>
          </ul>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('terms.content.title', 'Proprietà dei Contenuti')}</h2>
          <p>{t('terms.content.ownership', 'Tutti i contenuti del nostro sito, inclusi testo, grafica, loghi, icone, immagini e software, sono di nostra proprietà o dei nostri licenzianti e sono protetti dalle leggi sul copyright e sui marchi. Nessun contenuto del sito può essere copiato, riprodotto, distribuito o utilizzato senza la nostra espressa autorizzazione scritta.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('terms.orders.title', 'Ordini e Prodotti')}</h2>
          <p>{t('terms.orders.process', 'Gli ordini effettuati tramite il nostro sito sono soggetti alla nostra accettazione. Ci riserviamo il diritto di rifiutare o annullare qualsiasi ordine per qualsiasi motivo, inclusi errori nel prezzo o nella descrizione del prodotto.')}</p>
          <p>{t('terms.orders.accuracy', 'Facciamo del nostro meglio per garantire che le descrizioni, le immagini e i prezzi dei nostri prodotti siano accurati, ma non garantiamo che tali informazioni siano prive di errori.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('terms.liability.title', 'Limitazione di Responsabilità')}</h2>
          <p>{t('terms.liability.disclaimer', 'Il nostro sito e i suoi contenuti sono forniti "così come sono" e "come disponibili". Non offriamo garanzie di alcun tipo, esplicite o implicite, riguardo al nostro sito o ai suoi contenuti.')}</p>
          <p>{t('terms.liability.limitation', 'In nessun caso saremo responsabili per danni diretti, indiretti, incidentali, speciali o consequenziali derivanti dall\'utilizzo o dall\'impossibilità di utilizzare il nostro sito o i nostri servizi.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('terms.indemnification.title', 'Indennizzo')}</h2>
          <p>{t('terms.indemnification.content', 'Accetti di indennizzare e tenere indenni noi, i nostri affiliati, funzionari, agenti e altri partner e dipendenti da qualsiasi reclamo o richiesta, compresi ragionevoli onorari legali, fatti da terze parti a causa di o derivanti dalla tua violazione di questi Termini di Servizio o dai documenti che essi incorporano per riferimento.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('terms.governing.title', 'Legge Applicabile')}</h2>
          <p>{t('terms.governing.content', 'Questi Termini di Servizio sono regolati e interpretati in conformità alle leggi italiane, senza riguardo a suoi principi di conflitto di leggi.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('terms.changes.title', 'Modifiche ai Termini')}</h2>
          <p>{t('terms.changes.content', 'Ci riserviamo il diritto di modificare o sostituire questi Termini di Servizio in qualsiasi momento. Le modifiche sostanziali entreranno in vigore 30 giorni dopo la pubblicazione dei termini aggiornati. Il tuo utilizzo continuato del nostro sito dopo tale periodo costituisce accettazione dei nuovi Termini di Servizio.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('terms.contact.title', 'Contattaci')}</h2>
          <p>{t('terms.contact.content', 'Se hai domande su questi Termini di Servizio, contattaci:')}</p>
          <ul className="list-none mb-6">
            <li>{t('terms.contact.name', 'Dessert&Co di Roberta Rosetti')}</li>
            <li>{t('terms.contact.address', 'Via Domenico Cimarosa, 5/a, 57025 Piombino (LI)')}</li>
            <li>{t('terms.contact.email', 'Email: ddessert.co@gmail.com')}</li>
            <li>{t('terms.contact.phone', 'Telefono: +39 349 413 6253')}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default TermsOfService;
