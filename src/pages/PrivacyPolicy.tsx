import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../layout/Section';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="privacy-policy" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-bakery-brown">{t('privacy.title', 'Informativa sulla Privacy')}</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">{t('privacy.lastUpdated', 'Ultimo aggiornamento: 18 maggio 2024')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('privacy.introduction.title', 'Introduzione')}</h2>
          <p>{t('privacy.introduction.content', 'La tua privacy è importante per noi. Questa Informativa sulla Privacy spiega come Dessert&Co raccoglie, utilizza e protegge le informazioni che ci fornisci quando utilizzi il nostro sito web. Ci impegniamo a garantire la protezione dei tuoi dati personali e a rispettare le leggi applicabili sulla protezione dei dati, incluso il Regolamento Generale sulla Protezione dei Dati (GDPR) dell\'Unione Europea.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('privacy.dataCollection.title', 'Raccolta delle Informazioni')}</h2>
          <p>{t('privacy.dataCollection.content', 'Raccogliamo diversi tipi di informazioni per vari scopi, per fornire e migliorare i nostri servizi. Queste informazioni possono includere:')}</p>
          <ul className="list-disc pl-6 mb-6">
            <li>{t('privacy.dataCollection.item1', 'Informazioni personali (come nome, indirizzo email e numero di telefono) che ci fornisci volontariamente quando utilizzi il nostro modulo di contatto.')}</li>
            <li>{t('privacy.dataCollection.item2', 'Informazioni di utilizzo e dati tecnici (come indirizzo IP, tipo di browser, dispositivo utilizzato) raccolti automaticamente quando visiti il nostro sito.')}</li>
            <li>{t('privacy.dataCollection.item3', 'Informazioni sui cookie memorizzati sul tuo dispositivo quando visiti il nostro sito.')}</li>
          </ul>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('privacy.cookies.title', 'Utilizzo dei Cookie')}</h2>
          <p>{t('privacy.cookies.content', 'Il nostro sito utilizza cookie per migliorare la tua esperienza. I cookie sono piccoli file di testo memorizzati sul tuo dispositivo. Utilizziamo i seguenti tipi di cookie:')}</p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <strong>{t('privacy.cookies.essential.title', 'Cookie essenziali:')}</strong>{' '}
              {t('privacy.cookies.essential.content', 'Necessari per il funzionamento del sito web. Non possono essere disattivati.')}
            </li>
            <li>
              <strong>{t('privacy.cookies.analytics.title', 'Cookie analitici:')}</strong>{' '}
              {t('privacy.cookies.analytics.content', 'Ci aiutano a capire come utilizzi il sito, per migliorare la tua esperienza futura. Questi cookie raccolgono informazioni aggregate e anonime.')}
            </li>
          </ul>
          <p>{t('privacy.cookies.control', 'Puoi gestire le tue preferenze sui cookie attraverso il banner dei cookie visualizzato quando visiti il nostro sito. In alternativa, puoi modificare le impostazioni del tuo browser per bloccare o eliminare i cookie, ma ciò potrebbe influire sulla tua esperienza di navigazione.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('privacy.dataUse.title', 'Utilizzo dei Dati')}</h2>
          <p>{t('privacy.dataUse.content', 'Utilizziamo le informazioni raccolte per:')}</p>
          <ul className="list-disc pl-6 mb-6">
            <li>{t('privacy.dataUse.item1', 'Fornire, gestire e migliorare i nostri servizi')}</li>
            <li>{t('privacy.dataUse.item2', 'Rispondere alle tue richieste e comunicare con te')}</li>
            <li>{t('privacy.dataUse.item3', 'Analizzare come utilizzi il nostro sito per migliorarlo')}</li>
            <li>{t('privacy.dataUse.item4', 'Prevenire attività potenzialmente proibite o illegali')}</li>
          </ul>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('privacy.dataSharing.title', 'Condivisione dei Dati')}</h2>
          <p>{t('privacy.dataSharing.content', 'Non vendiamo, scambiamo o trasferiamo in altro modo le tue informazioni personali a terze parti, tranne come descritto in questa Informativa sulla Privacy. Possiamo condividere le tue informazioni con:')}</p>
          <ul className="list-disc pl-6 mb-6">
            <li>{t('privacy.dataSharing.item1', 'Fornitori di servizi che ci aiutano a gestire il sito e i servizi (come servizi di hosting)')}</li>
            <li>{t('privacy.dataSharing.item2', 'Autorità legali quando richiesto dalla legge')}</li>
          </ul>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('privacy.dataRetention.title', 'Conservazione dei Dati')}</h2>
          <p>{t('privacy.dataRetention.content', 'Conserviamo i tuoi dati personali solo per il tempo necessario agli scopi indicati in questa informativa, a meno che non sia richiesto o consentito un periodo di conservazione più lungo per legge.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('privacy.rights.title', 'I Tuoi Diritti')}</h2>
          <p>{t('privacy.rights.content', 'Se sei un residente dell\'Unione Europea, hai il diritto di:')}</p>
          <ul className="list-disc pl-6 mb-6">
            <li>{t('privacy.rights.item1', 'Accedere ai tuoi dati personali')}</li>
            <li>{t('privacy.rights.item2', 'Rettificare i tuoi dati personali se inesatti o incompleti')}</li>
            <li>{t('privacy.rights.item3', 'Richiedere la cancellazione dei tuoi dati personali')}</li>
            <li>{t('privacy.rights.item4', 'Limitare od opporti al trattamento dei tuoi dati')}</li>
            <li>{t('privacy.rights.item5', 'Richiedere la portabilità dei tuoi dati')}</li>
          </ul>
          <p>{t('privacy.rights.contact', 'Per esercitare questi diritti, contattaci utilizzando i dettagli forniti alla fine di questa informativa.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('privacy.security.title', 'Sicurezza dei Dati')}</h2>
          <p>{t('privacy.security.content', 'Adottiamo misure di sicurezza appropriate per proteggere i tuoi dati personali contro l\'accesso non autorizzato, l\'alterazione, la divulgazione o la distruzione. Tuttavia, nessun metodo di trasmissione via Internet o di archiviazione elettronica è sicuro al 100%.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('privacy.children.title', 'Privacy dei Minori')}</h2>
          <p>{t('privacy.children.content', 'I nostri servizi non sono destinati a persone di età inferiore ai 16 anni e non raccogliamo consapevolmente dati personali da minori di 16 anni.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('privacy.changes.title', 'Modifiche alla Presente Informativa')}</h2>
          <p>{t('privacy.changes.content', 'Possiamo aggiornare la nostra Informativa sulla Privacy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova Informativa sulla Privacy in questa pagina e, se le modifiche sono significative, ti avviseremo via email.')}</p>
          
          <h2 className="font-serif text-2xl font-semibold mt-8 mb-4 text-bakery-brown">{t('privacy.contact.title', 'Contattaci')}</h2>
          <p>{t('privacy.contact.content', 'Se hai domande su questa Informativa sulla Privacy, contattaci:')}</p>
          <ul className="list-none mb-6">
            <li>{t('privacy.contact.name', 'Dessert&Co di Roberta Rosetti')}</li>
            <li>{t('privacy.contact.address', 'Via Domenico Cimarosa, 5/a, 57025 Piombino (LI)')}</li>
            <li>{t('privacy.contact.email', 'Email: ddessert.co@gmail.com')}</li>
            <li>{t('privacy.contact.phone', 'Telefono: +39 349 413 6253')}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default PrivacyPolicy;
