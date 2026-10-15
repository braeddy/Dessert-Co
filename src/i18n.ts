import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        eyebrow: "Cake design · Piombino",
        line1: "Cakes that",
        accent: "tell the story",
        line2: "of your moments",
        badge: "since 2012",
        scroll: "Scroll",
        stat1Label: "years of passion",
        stat2Value: "100%",
        stat2Label: "handmade",
        stat3Value: "Bespoke",
        stat3Label: "for every event",
        title: "Dessert&Co",
        subtitle: "For special moments",
        description: "Dessert&Co creates beautiful, custom-designed cakes that taste as amazing as they look. Based in Piombino, we bring your sweetest dreams to life.",
        creations: "Our Creations",
        contact: "Contact Us",
      },
      about: {
        eyebrow: "Our story",
        quote: "Every cake is a memory you can taste.",
        signature: "Roberta Rosetti",
        yearsLabel: "years in Piombino",
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
        eyebrow: "Contact",
        directions: "Get directions",
        privacyNote: "By submitting this form you accept our",
        privacyLink: "privacy policy",
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
        errorMessage: "We couldn't send your message. Please try again or contact us by phone or email.",
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
        eyebrow: "Portfolio",
        close: "Close",
        prev: "Previous image",
        next: "Next image",
        instagram: "See more creations on Instagram",
        open: "Open image",
        title: "Our Creations",
        description: "Explore our gallery of custom cakes and desserts, each crafted with love and precision to make your celebrations unforgettable.",
      },
      services: {
        eyebrow: "What we create",
        title: "A cake for every occasion",
        description: "From show-stopping wedding cakes to the most indulgent birthday cakes: every creation is made just for you.",
        more: "Learn more",
        cta: "Request a quote",
        close: "Close",
        items: {
          weddings: {
            title: "Weddings",
            description: "Elegant wedding cakes, coordinated with the flowers, setting and style of your day.",
            details: "We design your wedding cake together, starting with a private tasting where you choose the flavours. Shape, tiers and decorations are then defined around your guest count and the style of the celebration. On the day, we deliver the cake directly to your venue.",
          },
          birthdays: {
            title: "Birthdays",
            description: "Themed cakes for kids and grown-ups, hand-decorated and personalised in every detail.",
            details: "From a favourite character to a refined design for a milestone birthday, every cake starts from your ideas. You choose flavours, fillings and decorations; size and portions are tailored to the number of guests.",
          },
          events: {
            title: "Events & celebrations",
            description: "Christenings, communions, graduations and anniversaries: cakes made to celebrate together.",
            details: "For christenings, communions, confirmations, graduations and anniversaries we create cakes that match the theme and colours of your celebration. Each project is made to measure, planned around the date and size of your event.",
          },
        },
      },
      process: {
        eyebrow: "How it works",
        title: "From your idea to your cake",
        steps: {
          one: {
            title: "Tell us your idea",
            description: "Write or call us: date, number of guests, style and favourite flavours.",
          },
          two: {
            title: "We design it together",
            description: "We define design, flavours and decorations for a cake that feels like you.",
          },
          three: {
            title: "The big day",
            description: "We handcraft your cake with fresh ingredients, ready to amaze your guests.",
          },
        },
        note: "For weddings and major events we recommend getting in touch well in advance.",
      },
      cta: {
        title: "Got a special occasion coming up?",
        description: "Tell us what you dream of: together we'll create the perfect cake.",
        button: "Request a quote",
        call: "Call us",
      },
      marquee: ["Wedding cakes", "Birthdays", "Christenings", "Communions", "Anniversaries", "Graduations", "Events"],
      header: {
        cta: "Get a quote",
        services: "Services",
        home: "Home",
        about: "About Us",
        gallery: "Gallery",
        contact: "Contact",
      },
      footer: {
        navTitle: "Explore",
        contactTitle: "Contact",
        backToTop: "Back to top",
        description: "Dessert&Co creates beautiful, custom-designed cakes for all your special occasions.",
        followUs: "Follow Us",
        copyright: "Dessert&Co di Roberta Rosetti. All rights reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
      },
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: October 15, 2026",
        introduction: {
          title: "Introduction",
          content: "Your privacy is important to us. This Privacy Policy explains how Dessert&Co collects, uses and protects the information you provide when using our website."
        },
        dataCollection: {
          title: "Information Collection",
          content: "We collect different types of information for various purposes to provide and improve our services. This information may include:",
          item1: "Personal information (such as name, email address, and phone number) that you voluntarily provide when using our contact form.",
          item2: "Usage and technical data collected automatically when you visit our site.",
          item3: "Anonymous, aggregated visit statistics (such as pages viewed, country and device type), collected without cookies and without identifying individual visitors."
        },
        cookies: {
          title: "Cookies",
          content: "This site does not use cookies — neither technical, analytical nor profiling ones — and does not load third-party content that sets them (such as embedded maps, videos or external fonts). For this reason no consent banner is shown.",
          control: "Visit statistics are collected with Vercel Web Analytics, a service that does not use cookies and cannot recognise individual visitors."
        },
        dataUse: {
          title: "Use of Data",
          content: "We use the collected information to:",
          item1: "Provide, manage, and improve our services",
          item2: "Respond to your requests and communicate with you",
          item3: "Understand, through anonymous and aggregated statistics, which pages of the site are visited most",
          item4: "Prevent potentially prohibited or illegal activities"
        },
        dataSharing: {
          title: "Data Sharing",
          content: "We do not sell, trade, or otherwise transfer your personal information to third parties, except as described in this Privacy Policy.",
          item1: "Service providers that help us run the site: Vercel (hosting and anonymous statistics) and Resend (delivery of contact form emails)",
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
        eyebrow: "Cake design · Piombino",
        line1: "Torte che",
        accent: "raccontano",
        line2: "i tuoi momenti",
        badge: "dal 2012",
        scroll: "Scorri",
        stat1Label: "anni di passione",
        stat2Value: "100%",
        stat2Label: "fatto a mano",
        stat3Value: "Su misura",
        stat3Label: "per ogni evento",
        title: "Dessert&Co",
        subtitle: "Per i momenti speciali",
        description: "Dessert&Co crea torte bellissime e personalizzate che hanno un sapore incredibile. Con sede a Piombino, trasformiamo i tuoi sogni più dolci in realtà.",
        creations: "Le nostre creazioni",
        contact: "Contattaci",
      },
      about: {
        eyebrow: "La nostra storia",
        quote: "Ogni torta è un ricordo che si può assaggiare.",
        signature: "Roberta Rosetti",
        yearsLabel: "anni a Piombino",
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
        eyebrow: "Contatti",
        directions: "Indicazioni stradali",
        privacyNote: "Inviando il modulo accetti la nostra",
        privacyLink: "informativa sulla privacy",
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
        errorMessage: "Non siamo riusciti a inviare il messaggio. Riprova oppure contattaci per telefono o email.",
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
        eyebrow: "Portfolio",
        close: "Chiudi",
        prev: "Immagine precedente",
        next: "Immagine successiva",
        instagram: "Scopri altre creazioni su Instagram",
        open: "Apri immagine",
        title: "Le nostre creazioni",
        description: "Esplora la nostra galleria di torte e dessert personalizzati, ognuno realizzato con amore e precisione per rendere indimenticabili le tue celebrazioni.",
      },
      services: {
        eyebrow: "Cosa realizziamo",
        title: "Una torta per ogni occasione",
        description: "Dalle wedding cake scenografiche alle torte di compleanno più golose: ogni creazione nasce su misura per te.",
        more: "Scopri di più",
        cta: "Richiedi un preventivo",
        close: "Chiudi",
        items: {
          weddings: {
            title: "Matrimoni",
            description: "Wedding cake eleganti, coordinate con fiori, allestimento e stile del vostro giorno.",
            details: "Progettiamo insieme la vostra wedding cake, a partire da una degustazione riservata agli sposi per scegliere i gusti. Forma, piani e decorazioni vengono poi definiti in base al numero di ospiti e allo stile della cerimonia. Il giorno del matrimonio consegniamo la torta direttamente in location.",
          },
          birthdays: {
            title: "Compleanni",
            description: "Torte a tema per grandi e piccini, decorate a mano e personalizzate in ogni dettaglio.",
            details: "Dal personaggio preferito a un design raffinato per un compleanno importante, ogni torta nasce dalle vostre idee. Scegliete gusti, farciture e decorazioni: dimensioni e porzioni sono calibrate sul numero di invitati.",
          },
          events: {
            title: "Eventi e ricorrenze",
            description: "Battesimi, comunioni, lauree e anniversari: torte pensate per celebrare insieme.",
            details: "Per battesimi, comunioni, cresime, lauree e anniversari realizziamo torte coordinate con il tema e i colori della festa. Ogni progetto è studiato su misura, in base alla data e al numero di ospiti dell'evento.",
          },
        },
      },
      process: {
        eyebrow: "Come funziona",
        title: "Dalla tua idea alla tua torta",
        steps: {
          one: {
            title: "Raccontaci la tua idea",
            description: "Scrivici o chiamaci: data, numero di invitati, stile e gusti preferiti.",
          },
          two: {
            title: "Progettiamo insieme",
            description: "Definiamo design, sapori e decorazioni per una torta che ti somigli.",
          },
          three: {
            title: "Il grande giorno",
            description: "Realizziamo la tua torta a mano, con ingredienti freschi, pronta a stupire i tuoi ospiti.",
          },
        },
        note: "Per matrimoni ed eventi importanti ti consigliamo di contattarci con anticipo.",
      },
      cta: {
        title: "Hai un'occasione speciale in arrivo?",
        description: "Raccontaci cosa sogni: insieme creeremo la torta perfetta.",
        button: "Richiedi un preventivo",
        call: "Chiamaci",
      },
      marquee: ["Wedding cake", "Compleanni", "Battesimi", "Comunioni", "Anniversari", "Lauree", "Eventi"],
      header: {
        cta: "Richiedi preventivo",
        services: "Servizi",
        home: "Home",
        about: "Chi siamo",
        gallery: "Galleria",
        contact: "Contatti",
      },
      footer: {
        navTitle: "Esplora",
        contactTitle: "Contatti",
        backToTop: "Torna su",
        description: "Dessert&Co crea torte bellissime e personalizzate per tutte le tue occasioni speciali.",
        followUs: "Seguici",
        copyright: "Dessert&Co di Roberta Rosetti. Tutti i diritti riservati.",
        privacyPolicy: "Informativa sulla privacy",
        termsOfService: "Termini di servizio",
      },
      privacy: {
        title: "Informativa sulla Privacy",
        lastUpdated: "Ultimo aggiornamento: 15 ottobre 2026",
        introduction: {
          title: "Introduzione",
          content: "La tua privacy è importante per noi. Questa Informativa sulla Privacy spiega come Dessert&Co raccoglie, utilizza e protegge le informazioni che ci fornisci quando utilizzi il nostro sito web."
        },
        dataCollection: {
          title: "Raccolta delle Informazioni",
          content: "Raccogliamo diversi tipi di informazioni per vari scopi, per fornire e migliorare i nostri servizi. Queste informazioni possono includere:",
          item1: "Informazioni personali (come nome, indirizzo email e numero di telefono) che ci fornisci volontariamente quando utilizzi il nostro modulo di contatto.",
          item2: "Informazioni di utilizzo e dati tecnici raccolti automaticamente quando visiti il nostro sito.",
          item3: "Statistiche di visita anonime e aggregate (ad esempio pagine visitate, paese e tipo di dispositivo), raccolte senza cookie e senza identificare i singoli visitatori."
        },
        cookies: {
          title: "Cookie",
          content: "Questo sito non utilizza cookie, né tecnici, né analitici, né di profilazione, e non carica contenuti di terze parti che ne installino (come mappe, video o font esterni). Per questo non viene mostrato alcun banner per il consenso.",
          control: "Le statistiche di visita sono raccolte con Vercel Web Analytics, un servizio che non usa cookie e non permette di riconoscere il singolo visitatore."
        },
        dataUse: {
          title: "Utilizzo dei Dati",
          content: "Utilizziamo le informazioni raccolte per:",
          item1: "Fornire, gestire e migliorare i nostri servizi",
          item2: "Rispondere alle tue richieste e comunicare con te",
          item3: "Capire, tramite statistiche anonime e aggregate, quali pagine del sito sono più visitate",
          item4: "Prevenire attività potenzialmente proibite o illegali"
        },
        dataSharing: {
          title: "Condivisione dei Dati",
          content: "Non vendiamo, scambiamo o trasferiamo in altro modo le tue informazioni personali a terze parti, tranne come descritto in questa Informativa sulla Privacy.",
          item1: "Fornitori di servizi che ci aiutano a gestire il sito: Vercel (hosting e statistiche anonime) e Resend (invio delle email del modulo di contatto)",
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
        eyebrow: "Cake Design · Piombino",
        line1: "Torten, die",
        accent: "Ihre Momente",
        line2: "erzählen",
        badge: "seit 2012",
        scroll: "Scrollen",
        stat1Label: "Jahre Leidenschaft",
        stat2Value: "100%",
        stat2Label: "handgemacht",
        stat3Value: "Maßgefertigt",
        stat3Label: "für jeden Anlass",
        title: "Dessert&Co",
        subtitle: "Für besondere Momente",
        description: "Dessert&Co kreiert wunderschöne, maßgeschneiderte Kuchen, die genauso gut schmecken, wie sie aussehen. Mit Sitz in Piombino verwirklichen wir Ihre süßesten Träume.",
        creations: "Unsere Kreationen",
        contact: "Kontaktieren Sie uns",
      },
      about: {
        eyebrow: "Unsere Geschichte",
        quote: "Jede Torte ist eine Erinnerung, die man schmecken kann.",
        signature: "Roberta Rosetti",
        yearsLabel: "Jahre in Piombino",
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
        eyebrow: "Kontakt",
        directions: "Route planen",
        privacyNote: "Mit dem Absenden des Formulars akzeptieren Sie unsere",
        privacyLink: "Datenschutzrichtlinie",
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
        errorMessage: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch oder per E-Mail.",
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
        eyebrow: "Portfolio",
        close: "Schließen",
        prev: "Vorheriges Bild",
        next: "Nächstes Bild",
        instagram: "Weitere Kreationen auf Instagram",
        open: "Bild öffnen",
        title: "Unsere Kreationen",
        description: "Entdecken Sie unsere Galerie maßgeschneiderter Kuchen und Desserts, die mit Liebe und Präzision gefertigt wurden, um Ihre Feiern unvergesslich zu machen.",
      },
      services: {
        eyebrow: "Was wir kreieren",
        title: "Eine Torte für jeden Anlass",
        description: "Von spektakulären Hochzeitstorten bis zu köstlichen Geburtstagstorten: Jede Kreation entsteht ganz nach Ihren Wünschen.",
        more: "Mehr erfahren",
        cta: "Angebot anfragen",
        close: "Schließen",
        items: {
          weddings: {
            title: "Hochzeiten",
            description: "Elegante Hochzeitstorten, abgestimmt auf Blumen, Dekoration und Stil Ihres Tages.",
            details: "Wir entwerfen Ihre Hochzeitstorte gemeinsam, beginnend mit einer exklusiven Verkostung, bei der Sie die Geschmacksrichtungen wählen. Form, Etagen und Dekoration richten sich anschließend nach der Gästezahl und dem Stil der Feier. Am Hochzeitstag liefern wir die Torte direkt an Ihre Location.",
          },
          birthdays: {
            title: "Geburtstage",
            description: "Motivtorten für Groß und Klein, von Hand dekoriert und in jedem Detail personalisiert.",
            details: "Ob Lieblingsfigur oder elegantes Design für einen runden Geburtstag: Jede Torte entsteht aus Ihren Ideen. Sie wählen Geschmack, Füllung und Dekoration; Größe und Portionen werden auf die Gästezahl abgestimmt.",
          },
          events: {
            title: "Feste & Jubiläen",
            description: "Taufen, Kommunionen, Abschlüsse und Jubiläen: Torten, um gemeinsam zu feiern.",
            details: "Für Taufen, Kommunionen, Firmungen, Abschlüsse und Jubiläen gestalten wir Torten passend zu Thema und Farben Ihrer Feier. Jedes Projekt wird individuell geplant, abgestimmt auf Termin und Gästezahl.",
          },
        },
      },
      process: {
        eyebrow: "So funktioniert's",
        title: "Von Ihrer Idee zu Ihrer Torte",
        steps: {
          one: {
            title: "Erzählen Sie uns Ihre Idee",
            description: "Schreiben oder rufen Sie uns an: Datum, Gästezahl, Stil und Lieblingsgeschmack.",
          },
          two: {
            title: "Gemeinsam gestalten",
            description: "Wir legen Design, Geschmack und Dekoration fest – für eine Torte, die zu Ihnen passt.",
          },
          three: {
            title: "Der große Tag",
            description: "Wir fertigen Ihre Torte von Hand mit frischen Zutaten, bereit, Ihre Gäste zu begeistern.",
          },
        },
        note: "Für Hochzeiten und große Feiern empfehlen wir, uns frühzeitig zu kontaktieren.",
      },
      cta: {
        title: "Steht ein besonderer Anlass bevor?",
        description: "Erzählen Sie uns von Ihren Wünschen: Gemeinsam kreieren wir die perfekte Torte.",
        button: "Angebot anfragen",
        call: "Rufen Sie uns an",
      },
      marquee: ["Hochzeitstorten", "Geburtstage", "Taufen", "Kommunionen", "Jubiläen", "Abschlüsse", "Events"],
      header: {
        cta: "Angebot anfragen",
        services: "Leistungen",
        home: "Startseite",
        about: "Über uns",
        gallery: "Galerie",
        contact: "Kontakt",
      },
      footer: {
        navTitle: "Entdecken",
        contactTitle: "Kontakt",
        backToTop: "Nach oben",
        description: "Dessert&Co kreiert wunderschöne, maßgeschneiderte Kuchen für all Ihre besonderen Anlässe.",
        followUs: "Folgen Sie uns",
        copyright: "Dessert&Co von Roberta Rosetti. Alle Rechte vorbehalten.",
        privacyPolicy: "Datenschutzrichtlinie",
        termsOfService: "Nutzungsbedingungen",
      },
      privacy: {
        title: "Datenschutzrichtlinie",
        lastUpdated: "Letzte Aktualisierung: 15. Oktober 2026",
        introduction: {
          title: "Einführung",
          content: "Ihre Privatsphäre ist uns wichtig. Diese Datenschutzrichtlinie erklärt, wie Dessert&Co Informationen sammelt, verwendet und schützt, die Sie bei der Nutzung unserer Website bereitstellen."
        },
        dataCollection: {
          title: "Informationssammlung",
          content: "Wir sammeln verschiedene Arten von Informationen für verschiedene Zwecke, um unsere Dienste bereitzustellen und zu verbessern. Diese Informationen können umfassen:",
          item1: "Persönliche Informationen (wie Name, E-Mail-Adresse und Telefonnummer), die Sie freiwillig angeben, wenn Sie unser Kontaktformular verwenden.",
          item2: "Nutzungs- und technische Daten, die automatisch erfasst werden, wenn Sie unsere Website besuchen.",
          item3: "Anonyme, aggregierte Besuchsstatistiken (z. B. aufgerufene Seiten, Land und Gerätetyp), die ohne Cookies und ohne Identifizierung einzelner Besucher erhoben werden."
        },
        cookies: {
          title: "Cookies",
          content: "Diese Website verwendet keine Cookies – weder technische noch Analyse- oder Profiling-Cookies – und lädt keine Inhalte von Drittanbietern, die solche setzen (etwa eingebettete Karten, Videos oder externe Schriftarten). Daher wird kein Einwilligungsbanner angezeigt.",
          control: "Besuchsstatistiken werden mit Vercel Web Analytics erhoben, einem Dienst, der keine Cookies verwendet und einzelne Besucher nicht wiedererkennen kann."
        },
        dataUse: {
          title: "Datennutzung",
          content: "Wir verwenden die gesammelten Informationen, um:",
          item1: "Unsere Dienste bereitzustellen, zu verwalten und zu verbessern",
          item2: "Auf Ihre Anfragen zu antworten und mit Ihnen zu kommunizieren",
          item3: "Anhand anonymer, aggregierter Statistiken zu verstehen, welche Seiten der Website am häufigsten besucht werden",
          item4: "Potenziell verbotene oder illegale Aktivitäten zu verhindern"
        },
        dataSharing: {
          title: "Datenweitergabe",
          content: "Wir verkaufen, tauschen oder übertragen Ihre persönlichen Daten nicht an Dritte, außer wie in dieser Datenschutzrichtlinie beschrieben.",
          item1: "Dienstleister, die uns beim Betrieb der Website helfen: Vercel (Hosting und anonyme Statistiken) und Resend (Versand der E-Mails des Kontaktformulars)",
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