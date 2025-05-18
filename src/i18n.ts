import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        title: "Dessert&Co",
        subtitle: "For special moments",
        description: "Dessert&Co creates beautiful, custom-designed cakes that taste as amazing as they look. Based in Piombino, we bring your sweetest dreams to life.",
        creations: "Our Creations",
        contact: "Contact Us",
      },
      about: {
        title: "About Dessert&Co",
        imageAlt: "Cake maker decorating a beautiful cake",
        storyTitle: "Our Sweet Story",
        storyParagraph1: "Founded with passion by Roberta Rosetti, Dessert&Co has been creating edible works of art in Piombino since 2012. Over the years, we have become a beloved local bakery specializing in custom cakes for all occasions.",
        storyParagraph2: "We believe that every celebration deserves a cake that's not just delicious but also tells your unique story. We combine traditional Italian baking techniques with modern designs to create unique and memorable creations for your special moments.",
        features: {
          love: {
            title: "Made with Love",
            description: "Every cake crafted with passion and attention to detail",
          },
          quality: {
            title: "Quality Ingredients",
            description: "We use only the finest ingredients to create our cakes",
          },
          custom: {
            title: "Custom Designs",
            description: "Personalized creations for your special moments",
          },
        },
      },
      contact: {
        title: "Contact Us",
        description: "We'd love to hear from you! Please fill out the form below or contact us directly.",
        formTitle: "Get in Touch",
        form: {
          name: "Name",
          email: "Email",
          phone: "Phone",
          message: "Message",
          send: "Send Message",
          sending: "Sending...",
        },
        successMessage: "Thank you for your message! We'll get back to you soon.",
        visitTitle: "Visit Us",
        addressTitle: "Address",
        address: "Via Domenico Cimarosa 5/a, Piombino 57025, Province of Livorno, Italy",
        phoneTitle: "Phone",
        phone: "+39 349 413 6253",
        emailTitle: "Email",
        email: "ddessert.co@gmail.com",
        hoursTitle: "Opening Hours",
        hours: {
          weekdays: "Tuesday - Saturday",
          weekdaysTime: "9:00 AM - 12:30 PM / 4:30 PM - 7:00 PM",
          sunday: "Sunday",
          sundayTime: "9:00 AM - 12:30 PM",
          monday: "Monday",
          mondayTime: "Closed",
        },
      },
      gallery: {
        title: "Our Creations",
        description: "Explore our gallery of custom cakes and desserts, each crafted with love and precision to make your celebrations unforgettable.",
      },
      header: {
        home: "Home",
        about: "About Us",
        gallery: "Gallery",
        contact: "Contact",
      },
      footer: {
        description: "Dessert&Co creates beautiful, custom-designed cakes for all your special occasions.",
        followUs: "Follow Us",
        copyright: "Dessert&Co di Roberta Rosetti. All rights reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
      },
      cookies: {
        title: "Cookie Policy",
        description: "This site uses necessary technical cookies and analytical cookies to enhance your experience. You can accept all cookies or only those essential for navigation.",
        acceptEssential: "Only essential cookies",
        acceptAll: "Accept all cookies",
        privacyPolicy: "Privacy Policy",
      },
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: May 18, 2024",
        introduction: {
          title: "Introduction",
          content: "Your privacy is important to us. This Privacy Policy explains how Dessert&Co collects, uses and protects the information you provide when using our website."
        },
        dataCollection: {
          title: "Information Collection",
          content: "We collect different types of information for various purposes to provide and improve our services. This information may include:",
          item1: "Personal information (such as name, email address, and phone number) that you voluntarily provide when using our contact form.",
          item2: "Usage and technical data collected automatically when you visit our site.",
          item3: "Information about cookies stored on your device when you visit our site."
        },
        cookies: {
          title: "Use of Cookies",
          content: "Our site uses cookies to improve your experience. Cookies are small text files stored on your device. We use the following types of cookies:",
          essential: {
            title: "Essential cookies",
            content: "Necessary for the website to function. They cannot be disabled."
          },
          analytics: {
            title: "Analytical cookies",
            content: "Help us understand how you use the site, to improve your future experience."
          },
          control: "You can manage your cookie preferences through the cookie banner displayed when you visit our site."
        },
        dataUse: {
          title: "Use of Data",
          content: "We use the collected information to:",
          item1: "Provide, manage, and improve our services",
          item2: "Respond to your requests and communicate with you",
          item3: "Analyze how you use our site to improve it",
          item4: "Prevent potentially prohibited or illegal activities"
        },
        dataSharing: {
          title: "Data Sharing",
          content: "We do not sell, trade, or otherwise transfer your personal information to third parties, except as described in this Privacy Policy.",
          item1: "Service providers that help us manage the site and services",
          item2: "Legal authorities when required by law"
        },
        dataRetention: {
          title: "Data Retention",
          content: "We keep your personal data only for as long as necessary for the purposes stated in this policy."
        },
        rights: {
          title: "Your Rights",
          content: "If you are a resident of the European Union, you have the right to:",
          item1: "Access your personal data",
          item2: "Rectify your personal data if inaccurate or incomplete",
          item3: "Request the deletion of your personal data",
          item4: "Restrict or object to the processing of your data",
          item5: "Request the portability of your data",
          contact: "To exercise these rights, contact us using the details provided at the end of this notice."
        },
        security: {
          title: "Data Security",
          content: "We adopt appropriate security measures to protect your personal data."
        },
        children: {
          title: "Children's Privacy",
          content: "Our services are not intended for people under the age of 16."
        },
        changes: {
          title: "Changes to This Policy",
          content: "We may update our Privacy Policy from time to time."
        },
        contact: {
          title: "Contact Us",
          content: "If you have any questions about this Privacy Policy, please contact us:",
          name: "Dessert&Co di Roberta Rosetti",
          address: "Via Domenico Cimarosa, 5/a, 57025 Piombino (LI)",
          email: "Email: ddessert.co@gmail.com",
          phone: "Phone: +39 349 413 6253"
        }
      },
      terms: {
        title: "Terms of Service",
        lastUpdated: "Last updated: May 18, 2024",
        introduction: {
          title: "Introduction",
          content: "Welcome to the Dessert&Co website. The following terms and conditions govern your access to and use of our website."
        },
        definitions: {
          title: "Definitions",
          we: "refers to Dessert&Co di Roberta Rosetti",
          you: "refers to the user or visitor of our website",
          site: "refers to the Dessert&Co website",
          services: "refers to products, services or content offered through our site"
        },
        use: {
          title: "Use of the Site",
          license: "We grant you a limited, non-exclusive, non-transferable license to access and use our site for personal, non-commercial purposes.",
          restrictions: "You may not:",
          restriction1: "Copy, modify, or create derivative works from our site or its content",
          restriction2: "Use our site for illegal or unauthorized purposes",
          restriction3: "Interfere with or damage our site or servers and networks connected to it",
          restriction4: "Collect or track personal information of other users",
          restriction5: "Impersonate another person or entity or falsify your affiliation with a person or entity"
        },
        content: {
          title: "Ownership of Content",
          ownership: "All content on our site is owned by us or our licensors and is protected by copyright and trademark laws."
        },
        orders: {
          title: "Orders and Products",
          process: "Orders placed through our site are subject to our acceptance.",
          accuracy: "We do our best to ensure that descriptions, images, and prices of our products are accurate."
        },
        liability: {
          title: "Limitation of Liability",
          disclaimer: "Our site and its contents are provided \"as is\" and \"as available\".",
          limitation: "In no event will we be liable for damages arising from the use of or inability to use our site or our services."
        },
        indemnification: {
          title: "Indemnification",
          content: "You agree to indemnify and hold us harmless from any claims arising from your violation of these Terms of Service."
        },
        governing: {
          title: "Governing Law",
          content: "These Terms of Service are governed by and construed in accordance with Italian law."
        },
        changes: {
          title: "Changes to Terms",
          content: "We reserve the right to modify or replace these Terms of Service at any time."
        },
        contact: {
          title: "Contact Us",
          content: "If you have any questions about these Terms of Service, please contact us:",
          name: "Dessert&Co di Roberta Rosetti",
          address: "Via Domenico Cimarosa, 5/a, 57025 Piombino (LI)",
          email: "Email: ddessert.co@gmail.com",
          phone: "Phone: +39 349 413 6253"
        }
      },
    },
  },
  it: {
    translation: {
      hero: {
        title: "Dessert&Co",
        subtitle: "Per i momenti speciali",
        description: "Dessert&Co crea torte bellissime e personalizzate che hanno un sapore incredibile. Con sede a Piombino, trasformiamo i tuoi sogni più dolci in realtà.",
        creations: "Le nostre creazioni",
        contact: "Contattaci",
      },
      about: {
        title: "Chi siamo",
        imageAlt: "Pasticcere che decora una torta bellissima",
        storyTitle: "La nostra dolce storia",
        storyParagraph1: "Fondata con passione da Roberta Rosetti, Dessert&Co crea opere d'arte commestibili a Piombino dal 2012. Nel corso degli anni siamo diventati una pasticceria locale amata, specializzata in torte personalizzate per ogni occasione.",
        storyParagraph2: "Crediamo che ogni celebrazione meriti una torta che non sia solo deliziosa ma che racconti anche la tua storia unica. Combiniamo tecniche di pasticceria italiana tradizionale con design moderni per realizzare creazioni uniche e memorabili per i tuoi momenti speciali.",
        features: {
          love: {
            title: "Fatto con amore",
            description: "Ogni torta è realizzata con passione e attenzione ai dettagli",
          },
          quality: {
            title: "Ingredienti di qualità",
            description: "Utilizziamo solo i migliori ingredienti per realizzare le nostre torte",
          },
          custom: {
            title: "Design personalizzati",
            description: "Creazioni personalizzate per i tuoi momenti speciali",
          },
        },
      },
      contact: {
        title: "Contattaci",
        description: "Ci piacerebbe sentirti! Compila il modulo qui sotto o contattaci direttamente.",
        formTitle: "Mettiti in contatto",
        form: {
          name: "Nome",
          email: "Email",
          phone: "Telefono",
          message: "Messaggio",
          send: "Invia messaggio",
          sending: "Invio in corso...",
        },
        successMessage: "Grazie per il tuo messaggio! Ti risponderemo al più presto.",
        visitTitle: "Vieni a trovarci",
        addressTitle: "Indirizzo",
        address: "Via Domenico Cimarosa 5/a, Piombino 57025, Provincia di Livorno, Italia",
        phoneTitle: "Telefono",
        phone: "+39 349 413 6253",
        emailTitle: "Email",
        email: "ddessert.co@gmail.com",
        hoursTitle: "Orari di apertura",
        hours: {
          weekdays: "Martedì - Sabato",
          weekdaysTime: "9:00 - 12:30 / 16:30 - 19:00",
          sunday: "Domenica",
          sundayTime: "9:00 - 12:30",
          monday: "Lunedì",
          mondayTime: "Chiuso",
        },
      },
      gallery: {
        title: "Le nostre creazioni",
        description: "Esplora la nostra galleria di torte e dessert personalizzati, ognuno realizzato con amore e precisione per rendere indimenticabili le tue celebrazioni.",
      },
      header: {
        home: "Home",
        about: "Chi siamo",
        gallery: "Galleria",
        contact: "Contatti",
      },
      footer: {
        description: "Dessert&Co crea torte bellissime e personalizzate per tutte le tue occasioni speciali.",
        followUs: "Seguici",
        copyright: "Dessert&Co di Roberta Rosetti. Tutti i diritti riservati.",
        privacyPolicy: "Informativa sulla privacy",
        termsOfService: "Termini di servizio",
      },
      cookies: {
        title: "Informativa sui Cookie",
        description: "Questo sito utilizza cookie tecnici necessari al funzionamento e cookie analitici per migliorare la tua esperienza. Puoi accettare tutti i cookie o solo quelli essenziali per la navigazione.",
        acceptEssential: "Solo cookie essenziali",
        acceptAll: "Accetta tutti i cookie",
        privacyPolicy: "Informativa sulla privacy",
      },
      privacy: {
        title: "Informativa sulla Privacy",
        lastUpdated: "Ultimo aggiornamento: 18 maggio 2024",
        introduction: {
          title: "Introduzione",
          content: "La tua privacy è importante per noi. Questa Informativa sulla Privacy spiega come Dessert&Co raccoglie, utilizza e protegge le informazioni che ci fornisci quando utilizzi il nostro sito web."
        },
        dataCollection: {
          title: "Raccolta delle Informazioni",
          content: "Raccogliamo diversi tipi di informazioni per vari scopi, per fornire e migliorare i nostri servizi. Queste informazioni possono includere:",
          item1: "Informazioni personali (come nome, indirizzo email e numero di telefono) che ci fornisci volontariamente quando utilizzi il nostro modulo di contatto.",
          item2: "Informazioni di utilizzo e dati tecnici raccolti automaticamente quando visiti il nostro sito.",
          item3: "Informazioni sui cookie memorizzati sul tuo dispositivo quando visiti il nostro sito."
        },
        cookies: {
          title: "Utilizzo dei Cookie",
          content: "Il nostro sito utilizza cookie per migliorare la tua esperienza. I cookie sono piccoli file di testo memorizzati sul tuo dispositivo. Utilizziamo i seguenti tipi di cookie:",
          essential: {
            title: "Cookie essenziali",
            content: "Necessari per il funzionamento del sito web. Non possono essere disattivati."
          },
          analytics: {
            title: "Cookie analitici",
            content: "Ci aiutano a capire come utilizzi il sito, per migliorare la tua esperienza futura."
          },
          control: "Puoi gestire le tue preferenze sui cookie attraverso il banner dei cookie visualizzato quando visiti il nostro sito."
        },
        dataUse: {
          title: "Utilizzo dei Dati",
          content: "Utilizziamo le informazioni raccolte per:",
          item1: "Fornire, gestire e migliorare i nostri servizi",
          item2: "Rispondere alle tue richieste e comunicare con te",
          item3: "Analizzare come utilizzi il nostro sito per migliorarlo",
          item4: "Prevenire attività potenzialmente proibite o illegali"
        },
        dataSharing: {
          title: "Condivisione dei Dati",
          content: "Non vendiamo, scambiamo o trasferiamo in altro modo le tue informazioni personali a terze parti, tranne come descritto in questa Informativa sulla Privacy.",
          item1: "Fornitori di servizi che ci aiutano a gestire il sito e i servizi",
          item2: "Autorità legali quando richiesto dalla legge"
        },
        dataRetention: {
          title: "Conservazione dei Dati",
          content: "Conserviamo i tuoi dati personali solo per il tempo necessario agli scopi indicati in questa informativa."
        },
        rights: {
          title: "I Tuoi Diritti",
          content: "Se sei un residente dell'Unione Europea, hai il diritto di:",
          item1: "Accedere ai tuoi dati personali",
          item2: "Rettificare i tuoi dati personali se inesatti o incompleti",
          item3: "Richiedere la cancellazione dei tuoi dati personali",
          item4: "Limitare od opporti al trattamento dei tuoi dati",
          item5: "Richiedere la portabilità dei tuoi dati",
          contact: "Per esercitare questi diritti, contattaci utilizzando i dettagli forniti alla fine di questa informativa."
        },
        security: {
          title: "Sicurezza dei Dati",
          content: "Adottiamo misure di sicurezza appropriate per proteggere i tuoi dati personali."
        },
        children: {
          title: "Privacy dei Minori",
          content: "I nostri servizi non sono destinati a persone di età inferiore ai 16 anni."
        },
        changes: {
          title: "Modifiche alla Presente Informativa",
          content: "Possiamo aggiornare la nostra Informativa sulla Privacy di tanto in tanto."
        },
        contact: {
          title: "Contattaci",
          content: "Se hai domande su questa Informativa sulla Privacy, contattaci:",
          name: "Dessert&Co di Roberta Rosetti",
          address: "Via Domenico Cimarosa, 5/a, 57025 Piombino (LI)",
          email: "Email: ddessert.co@gmail.com",
          phone: "Telefono: +39 349 413 6253"
        }
      },
      terms: {
        title: "Termini di Servizio",
        lastUpdated: "Ultimo aggiornamento: 18 maggio 2024",
        introduction: {
          title: "Introduzione",
          content: "Benvenuto sul sito web di Dessert&Co. I seguenti termini e condizioni regolano il tuo accesso e utilizzo del nostro sito web."
        },
        definitions: {
          title: "Definizioni",
          we: "si riferiscono a Dessert&Co di Roberta Rosetti",
          you: "si riferiscono all'utente o visitatore del nostro sito web",
          site: "si riferisce al sito web di Dessert&Co",
          services: "si riferiscono ai prodotti, servizi o contenuti offerti tramite il nostro sito"
        },
        use: {
          title: "Utilizzo del Sito",
          license: "Ti concediamo una licenza limitata, non esclusiva e non trasferibile per accedere e utilizzare il nostro sito per scopi personali e non commerciali.",
          restrictions: "Non puoi:",
          restriction1: "Copiare, modificare o creare opere derivate dal nostro sito o dai suoi contenuti",
          restriction2: "Utilizzare il nostro sito per scopi illegali o non autorizzati",
          restriction3: "Interferire o danneggiare il nostro sito o i server e le reti ad esso collegati",
          restriction4: "Raccogliere o tracciare informazioni personali di altri utenti",
          restriction5: "Impersonare un'altra persona o entità o falsificare la tua affiliazione con una persona o entità"
        },
        content: {
          title: "Proprietà dei Contenuti",
          ownership: "Tutti i contenuti del nostro sito sono di nostra proprietà o dei nostri licenzianti e sono protetti dalle leggi sul copyright e sui marchi."
        },
        orders: {
          title: "Ordini e Prodotti",
          process: "Gli ordini effettuati tramite il nostro sito sono soggetti alla nostra accettazione.",
          accuracy: "Facciamo del nostro meglio per garantire che le descrizioni, le immagini e i prezzi dei nostri prodotti siano accurati."
        },
        liability: {
          title: "Limitazione di Responsabilità",
          disclaimer: "Il nostro sito e i suoi contenuti sono forniti \"così come sono\" e \"come disponibili\".",
          limitation: "In nessun caso saremo responsabili per danni derivanti dall'utilizzo o dall'impossibilità di utilizzare il nostro sito o i nostri servizi."
        },
        indemnification: {
          title: "Indennizzo",
          content: "Accetti di indennizzare e tenere indenni noi da qualsiasi reclamo derivante dalla tua violazione di questi Termini di Servizio."
        },
        governing: {
          title: "Legge Applicabile",
          content: "Questi Termini di Servizio sono regolati e interpretati in conformità alle leggi italiane."
        },
        changes: {
          title: "Modifiche ai Termini",
          content: "Ci riserviamo il diritto di modificare o sostituire questi Termini di Servizio in qualsiasi momento."
        },
        contact: {
          title: "Contattaci",
          content: "Se hai domande su questi Termini di Servizio, contattaci:",
          name: "Dessert&Co di Roberta Rosetti",
          address: "Via Domenico Cimarosa, 5/a, 57025 Piombino (LI)",
          email: "Email: ddessert.co@gmail.com",
          phone: "Telefono: +39 349 413 6253"
        }
      },
    },
  },
  de: {
    translation: {
      hero: {
        title: "Dessert&Co",
        subtitle: "Für besondere Momente",
        description: "Dessert&Co kreiert wunderschöne, maßgeschneiderte Kuchen, die genauso gut schmecken, wie sie aussehen. Mit Sitz in Piombino verwirklichen wir Ihre süßesten Träume.",
        creations: "Unsere Kreationen",
        contact: "Kontaktieren Sie uns",
      },
      about: {
        title: "Über Dessert&Co",
        imageAlt: "Konditor dekoriert einen wunderschönen Kuchen",
        storyTitle: "Unsere süße Geschichte",
        storyParagraph1: "Mit Leidenschaft gegründet von Roberta Rosetti, kreiert Dessert&Co seit 2012 essbare Kunstwerke in Piombino. Im Laufe der Jahre sind wir zu einer beliebten lokalen Bäckerei geworden, die sich auf maßgeschneiderte Kuchen für alle Anlässe spezialisiert hat.",
        storyParagraph2: "Wir glauben, dass jede Feier einen Kuchen verdient, der nicht nur köstlich ist, sondern auch Ihre einzigartige Geschichte erzählt. Wir kombinieren traditionelle italienische Backtechniken mit modernen Designs, um einzigartige und unvergessliche Kreationen für Ihre besonderen Momente zu schaffen.",
        features: {
          love: {
            title: "Mit Liebe gemacht",
            description: "Jeder Kuchen wird mit Leidenschaft und Liebe zum Detail gefertigt",
          },
          quality: {
            title: "Qualitätszutaten",
            description: "Wir verwenden nur die besten Zutaten, um unsere Kuchen herzustellen",
          },
          custom: {
            title: "Individuelle Designs",
            description: "Personalisierte Kreationen für Ihre besonderen Momente",
          },
        },
      },
      contact: {
        title: "Kontaktieren Sie uns",
        description: "Wir würden uns freuen, von Ihnen zu hören! Bitte füllen Sie das untenstehende Formular aus oder kontaktieren Sie uns direkt.",
        formTitle: "Kontakt aufnehmen",
        form: {
          name: "Name",
          email: "E-Mail",
          phone: "Telefon",
          message: "Nachricht",
          send: "Nachricht senden",
          sending: "Senden...",
        },
        successMessage: "Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.",
        visitTitle: "Besuchen Sie uns",
        addressTitle: "Adresse",
        address: "Via Domenico Cimarosa 5/a, Piombino 57025, Provinz Livorno, Italien",
        phoneTitle: "Telefon",
        phone: "+39 349 413 6253",
        emailTitle: "E-Mail",
        email: "ddessert.co@gmail.com",
        hoursTitle: "Öffnungszeiten",
        hours: {
          weekdays: "Dienstag - Samstag",
          weekdaysTime: "9:00 - 12:30 / 16:30 - 19:00",
          sunday: "Sonntag",
          sundayTime: "9:00 - 12:30",
          monday: "Montag",
          mondayTime: "Geschlossen",
        },
      },
      gallery: {
        title: "Unsere Kreationen",
        description: "Entdecken Sie unsere Galerie maßgeschneiderter Kuchen und Desserts, die mit Liebe und Präzision gefertigt wurden, um Ihre Feiern unvergesslich zu machen.",
      },
      header: {
        home: "Startseite",
        about: "Über uns",
        gallery: "Galerie",
        contact: "Kontakt",
      },
      footer: {
        description: "Dessert&Co kreiert wunderschöne, maßgeschneiderte Kuchen für all Ihre besonderen Anlässe.",
        followUs: "Folgen Sie uns",
        copyright: "Dessert&Co von Roberta Rosetti. Alle Rechte vorbehalten.",
        privacyPolicy: "Datenschutzrichtlinie",
        termsOfService: "Nutzungsbedingungen",
      },
      cookies: {
        title: "Cookie-Richtlinie",
        description: "Diese Website verwendet technische Cookies, die für den Betrieb erforderlich sind, und Analyse-Cookies, um Ihre Erfahrung zu verbessern. Sie können alle Cookies akzeptieren oder nur die für die Navigation wesentlichen.",
        acceptEssential: "Nur wesentliche Cookies",
        acceptAll: "Alle Cookies akzeptieren",
        privacyPolicy: "Datenschutzrichtlinie",
      },
      privacy: {
        title: "Datenschutzrichtlinie",
        lastUpdated: "Letzte Aktualisierung: 18. Mai 2024",
        introduction: {
          title: "Einführung",
          content: "Ihre Privatsphäre ist uns wichtig. Diese Datenschutzrichtlinie erklärt, wie Dessert&Co Informationen sammelt, verwendet und schützt, die Sie bei der Nutzung unserer Website bereitstellen."
        },
        dataCollection: {
          title: "Informationssammlung",
          content: "Wir sammeln verschiedene Arten von Informationen für verschiedene Zwecke, um unsere Dienste bereitzustellen und zu verbessern. Diese Informationen können umfassen:",
          item1: "Persönliche Informationen (wie Name, E-Mail-Adresse und Telefonnummer), die Sie freiwillig angeben, wenn Sie unser Kontaktformular verwenden.",
          item2: "Nutzungs- und technische Daten, die automatisch erfasst werden, wenn Sie unsere Website besuchen.",
          item3: "Informationen zu Cookies, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen."
        },
        cookies: {
          title: "Verwendung von Cookies",
          content: "Unsere Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Wir verwenden die folgenden Arten von Cookies:",
          essential: {
            title: "Wesentliche Cookies",
            content: "Notwendig für die Funktionalität der Website. Sie können nicht deaktiviert werden."
          },
          analytics: {
            title: "Analyse-Cookies",
            content: "Helfen uns zu verstehen, wie Sie die Website nutzen, um Ihre zukünftige Erfahrung zu verbessern."
          },
          control: "Sie können Ihre Cookie-Einstellungen über das Cookie-Banner verwalten, das angezeigt wird, wenn Sie unsere Website besuchen."
        },
        dataUse: {
          title: "Datennutzung",
          content: "Wir verwenden die gesammelten Informationen, um:",
          item1: "Unsere Dienste bereitzustellen, zu verwalten und zu verbessern",
          item2: "Auf Ihre Anfragen zu antworten und mit Ihnen zu kommunizieren",
          item3: "Zu analysieren, wie Sie unsere Website nutzen, um sie zu verbessern",
          item4: "Potenziell verbotene oder illegale Aktivitäten zu verhindern"
        },
        dataSharing: {
          title: "Datenweitergabe",
          content: "Wir verkaufen, tauschen oder übertragen Ihre persönlichen Daten nicht an Dritte, außer wie in dieser Datenschutzrichtlinie beschrieben.",
          item1: "Dienstleister, die uns bei der Verwaltung der Website und der Dienste helfen",
          item2: "Rechtliche Behörden, wenn gesetzlich vorgeschrieben"
        },
        dataRetention: {
          title: "Datenspeicherung",
          content: "Wir speichern Ihre persönlichen Daten nur so lange, wie es für die in dieser Richtlinie genannten Zwecke erforderlich ist."
        },
        rights: {
          title: "Ihre Rechte",
          content: "Wenn Sie in der Europäischen Union ansässig sind, haben Sie das Recht:",
          item1: "Auf Ihre persönlichen Daten zuzugreifen",
          item2: "Ihre persönlichen Daten zu korrigieren, wenn sie ungenau oder unvollständig sind",
          item3: "Die Löschung Ihrer persönlichen Daten zu verlangen",
          item4: "Die Verarbeitung Ihrer Daten einzuschränken oder ihr zu widersprechen",
          item5: "Die Übertragbarkeit Ihrer Daten zu verlangen",
          contact: "Um diese Rechte auszuüben, kontaktieren Sie uns über die am Ende dieser Mitteilung angegebenen Details."
        },
        security: {
          title: "Datensicherheit",
          content: "Wir ergreifen geeignete Sicherheitsmaßnahmen zum Schutz Ihrer persönlichen Daten."
        },
        children: {
          title: "Datenschutz für Kinder",
          content: "Unsere Dienste sind nicht für Personen unter 16 Jahren bestimmt."
        },
        changes: {
          title: "Änderungen dieser Richtlinie",
          content: "Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren."
        },
        contact: {
          title: "Kontaktieren Sie uns",
          content: "Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte:",
          name: "Dessert&Co di Roberta Rosetti",
          address: "Via Domenico Cimarosa, 5/a, 57025 Piombino (LI)",
          email: "E-Mail: ddessert.co@gmail.com",
          phone: "Telefon: +39 349 413 6253"
        }
      },
      terms: {
        title: "Nutzungsbedingungen",
        lastUpdated: "Letzte Aktualisierung: 18. Mai 2024",
        introduction: {
          title: "Einführung",
          content: "Willkommen auf der Website von Dessert&Co. Die folgenden Bedingungen regeln Ihren Zugang und Ihre Nutzung unserer Website."
        },
        definitions: {
          title: "Definitionen",
          we: "bezieht sich auf Dessert&Co di Roberta Rosetti",
          you: "bezieht sich auf den Benutzer oder Besucher unserer Website",
          site: "bezieht sich auf die Website von Dessert&Co",
          services: "bezieht sich auf Produkte, Dienstleistungen oder Inhalte, die über unsere Website angeboten werden"
        },
        use: {
          title: "Nutzung der Website",
          license: "Wir gewähren Ihnen eine eingeschränkte, nicht exklusive, nicht übertragbare Lizenz für den Zugriff und die Nutzung unserer Website für persönliche, nicht kommerzielle Zwecke.",
          restrictions: "Sie dürfen nicht:",
          restriction1: "Unsere Website oder deren Inhalte kopieren, ändern oder abgeleitete Werke erstellen",
          restriction2: "Unsere Website für illegale oder nicht autorisierte Zwecke verwenden",
          restriction3: "In unsere Website oder Server und Netzwerke eingreifen oder diese beschädigen",
          restriction4: "Persönliche Informationen anderer Benutzer sammeln oder verfolgen",
          restriction5: "Sich als eine andere Person oder Einrichtung ausgeben"
        },
        content: {
          title: "Eigentumsrechte an Inhalten",
          ownership: "Alle Inhalte auf unserer Website sind unser Eigentum oder das Eigentum unserer Lizenzgeber und durch Urheberrechts- und Markengesetze geschützt."
        },
        orders: {
          title: "Bestellungen und Produkte",
          process: "Über unsere Website aufgegebene Bestellungen unterliegen unserer Annahme.",
          accuracy: "Wir bemühen uns, sicherzustellen, dass Beschreibungen, Bilder und Preise unserer Produkte korrekt sind."
        },
        liability: {
          title: "Haftungsbeschränkung",
          disclaimer: "Unsere Website und ihre Inhalte werden \"wie sie sind\" und \"wie verfügbar\" bereitgestellt.",
          limitation: "Unter keinen Umständen haften wir für Schäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung unserer Website oder unserer Dienste entstehen."
        },
        indemnification: {
          title: "Entschädigung",
          content: "Sie erklären sich damit einverstanden, uns von allen Ansprüchen freizustellen, die aus Ihrer Verletzung dieser Nutzungsbedingungen entstehen."
        },
        governing: {
          title: "Anwendbares Recht",
          content: "Diese Nutzungsbedingungen unterliegen dem italienischen Recht und werden in Übereinstimmung mit diesem ausgelegt."
        },
        changes: {
          title: "Änderungen der Bedingungen",
          content: "Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern oder zu ersetzen."
        },
        contact: {
          title: "Kontaktieren Sie uns",
          content: "Wenn Sie Fragen zu diesen Nutzungsbedingungen haben, kontaktieren Sie uns bitte:",
          name: "Dessert&Co di Roberta Rosetti",
          address: "Via Domenico Cimarosa, 5/a, 57025 Piombino (LI)",
          email: "E-Mail: ddessert.co@gmail.com",
          phone: "Telefon: +39 349 413 6253"
        }
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'it', // Lingua predefinita
  fallbackLng: 'en', // Lingua di fallback
  interpolation: {
    escapeValue: false, // React già gestisce la protezione contro XSS
  },
});

export default i18n;