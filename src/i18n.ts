import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        cakeAlt: "Wedding cake",
        photoAlt: "Roberta Rosetti cutting a wedding cake",
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
        alts: {
          sunsetWedding: "Wedding cake with flower decorations at sunset",
          poolsideHydrangeas: "Tiered wedding cake with pink roses and blue hydrangeas by the pool at night",
          millefeuille: "Tiered millefeuille wedding cake with berries",
          whiteFrosting: "Wedding cake with white frosting and flowers",
          sugarFlowers: "White wedding cake by the pool with sugar flowers",
          seminaked: "Semi-naked wedding cakes with fresh flowers on an illuminated staircase",
          colorfulBirthday: "Birthday cake with colorful decorations",
          peachRoses: "Wedding cake with peach roses and monogram topper",
          cupcakes: "Cupcakes with vanilla frosting",
          chocolateBerries: "Chocolate cake with berries",
          lambeth: "Vintage Lambeth-style cake with pink and mint piping",
          candles: "White wedding cake with roses surrounded by candles",
          anniversaryGold: "Anniversary cake with gold decorations",
          cartoonBirthday: "Children's birthday cake with cartoon theme"
        },
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
        vatLabel: "VAT No.",
        privacyPolicy: "Privacy Policy",
      },
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: October 15, 2026",
        intro: "This policy explains which personal data we collect through the website, why we use it and what your rights are, under EU Regulation 2016/679 (GDPR).",
        controller: {
          title: "Data controller",
          content: "The data controller is Dessert&Co di Roberta Rosetti, Via Domenico Cimarosa 5/a, 57025 Piombino (LI), Italy, VAT No. IT01563900495. For any privacy question you can write to ddessert.co@gmail.com or call +39 349 413 6253."
        },
        data: {
          title: "What data we collect",
          item1: "Data you send us through the contact form: name, email, phone number (optional) and the text of your message.",
          item2: "Technical browsing data: as with any website, the hosting service automatically records some technical data (such as IP address, browser and requested page) needed to run and secure the site.",
          item3: "Anonymous, aggregated visit statistics (such as pages viewed, country and device type), which do not allow you to be identified."
        },
        purposes: {
          title: "Why we use it",
          item1: "To answer your requests and, if you wish, prepare a quote. The legal basis is taking steps at your request prior to entering into a contract (Art. 6(1)(b) GDPR).",
          item2: "To run the site, protect it from abuse and understand which pages are visited most. The legal basis is our legitimate interest (Art. 6(1)(f) GDPR)."
        },
        provision: {
          title: "Is providing data mandatory?",
          content: "Name, email and message are needed to reply to you: without them we cannot handle your request. The phone number is optional."
        },
        cookies: {
          title: "Cookies",
          content: "This site does not use cookies — neither technical, analytical nor profiling ones — and does not load third-party content that sets them (such as embedded maps, videos or external fonts). For this reason no consent banner is shown.",
          control: "Visit statistics are collected with Vercel Web Analytics, a service that does not use cookies and cannot recognise individual visitors."
        },
        recipients: {
          title: "Who we share data with",
          content: "We do not sell or hand over your data. To run the site we rely on a few providers, who process data only on our behalf:",
          item1: "Vercel Inc. – website hosting and anonymous statistics;",
          item2: "Resend – delivery of emails generated by the contact form;",
          item3: "Google (Gmail) – the mailbox where we receive and keep messages.",
          transfer: "These providers are based in the United States. Data transfers comply with the GDPR, based on the EU-U.S. Data Privacy Framework or the standard contractual clauses approved by the European Commission."
        },
        retention: {
          title: "How long we keep it",
          content: "Messages received through the contact form are kept for as long as needed to handle the request and in any case no longer than 2 years from the last contact. If the request leads to an order, the data needed for invoicing is kept for the period required by law (10 years). Technical browsing data is deleted automatically by the hosting provider after a short period."
        },
        rights: {
          title: "Your rights",
          content: "At any time you can ask us to:",
          item1: "access your data and receive a copy;",
          item2: "correct it if inaccurate or incomplete;",
          item3: "delete it;",
          item4: "restrict or object to its processing;",
          item5: "receive it in a readable format to transfer it elsewhere (portability).",
          contact: "To exercise these rights, just write to ddessert.co@gmail.com. If you believe the processing does not comply with the law, you can also lodge a complaint with the Italian Data Protection Authority (www.garanteprivacy.it)."
        },
        changes: {
          title: "Changes to this policy",
          content: "Any changes will be published on this page, updating the date shown at the top."
        }
      },
    },
  },
  it: {
    translation: {
      hero: {
        cakeAlt: "Torta nuziale",
        photoAlt: "Roberta Rosetti taglia una torta nuziale",
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
        alts: {
          sunsetWedding: "Torta nuziale con decorazioni floreali al tramonto",
          poolsideHydrangeas: "Torta nuziale a piani con rose rosa e ortensie blu a bordo piscina, di sera",
          millefeuille: "Torta nuziale millefoglie a piani con frutti di bosco",
          whiteFrosting: "Torta nuziale con glassa bianca e fiori",
          sugarFlowers: "Torta nuziale bianca con fiori di zucchero a bordo piscina",
          seminaked: "Torte nuziali semi-naked con fiori freschi su una scalinata illuminata",
          colorfulBirthday: "Torta di compleanno con decorazioni colorate",
          peachRoses: "Torta nuziale con rose color pesca e cake topper con monogramma",
          cupcakes: "Cupcake con crema alla vaniglia",
          chocolateBerries: "Torta al cioccolato con frutti di bosco",
          lambeth: "Torta vintage in stile Lambeth con decorazioni rosa e verde menta",
          candles: "Torta nuziale bianca con rose circondata da candele",
          anniversaryGold: "Torta per anniversario con decorazioni dorate",
          cartoonBirthday: "Torta di compleanno per bambini a tema cartoni animati"
        },
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
        vatLabel: "P.IVA",
        privacyPolicy: "Informativa sulla privacy",
      },
      privacy: {
        title: "Informativa sulla Privacy",
        lastUpdated: "Ultimo aggiornamento: 15 ottobre 2026",
        intro: "Questa informativa spiega quali dati personali raccogliamo attraverso il sito, perché li usiamo e quali sono i tuoi diritti, ai sensi del Regolamento UE 2016/679 (GDPR).",
        controller: {
          title: "Titolare del trattamento",
          content: "Il titolare del trattamento è Dessert&Co di Roberta Rosetti, Via Domenico Cimarosa 5/a, 57025 Piombino (LI), P.IVA 01563900495. Per qualsiasi domanda sulla privacy puoi scrivere a ddessert.co@gmail.com o chiamare il +39 349 413 6253."
        },
        data: {
          title: "Quali dati raccogliamo",
          item1: "Dati che ci invii con il modulo di contatto: nome, email, numero di telefono (facoltativo) e il testo del messaggio.",
          item2: "Dati tecnici di navigazione: come per qualsiasi sito, il servizio di hosting registra automaticamente alcuni dati tecnici (ad esempio indirizzo IP, browser e pagina richiesta) necessari al funzionamento e alla sicurezza del sito.",
          item3: "Statistiche di visita anonime e aggregate (ad esempio pagine visitate, paese e tipo di dispositivo), che non permettono di identificarti."
        },
        purposes: {
          title: "Perché li usiamo",
          item1: "Per rispondere alle tue richieste e, se lo desideri, preparare un preventivo. La base giuridica è l'esecuzione di misure precontrattuali adottate su tua richiesta (art. 6.1.b GDPR).",
          item2: "Per far funzionare il sito, proteggerlo da abusi e capire quali pagine sono più visitate. La base giuridica è il nostro legittimo interesse (art. 6.1.f GDPR)."
        },
        provision: {
          title: "Obbligatorietà dei dati",
          content: "Nome, email e messaggio sono necessari per poterti rispondere: senza questi dati non possiamo dare seguito alla richiesta. Il numero di telefono è facoltativo."
        },
        cookies: {
          title: "Cookie",
          content: "Questo sito non utilizza cookie, né tecnici, né analitici, né di profilazione, e non carica contenuti di terze parti che ne installino (come mappe, video o font esterni). Per questo non viene mostrato alcun banner per il consenso.",
          control: "Le statistiche di visita sono raccolte con Vercel Web Analytics, un servizio che non usa cookie e non permette di riconoscere il singolo visitatore."
        },
        recipients: {
          title: "A chi comunichiamo i dati",
          content: "Non vendiamo né cediamo i tuoi dati. Per gestire il sito ci affidiamo ad alcuni fornitori, che trattano i dati solo per nostro conto:",
          item1: "Vercel Inc. – hosting del sito e statistiche anonime;",
          item2: "Resend – invio delle email generate dal modulo di contatto;",
          item3: "Google (Gmail) – casella di posta in cui riceviamo e conserviamo i messaggi.",
          transfer: "Questi fornitori hanno sede negli Stati Uniti. Il trasferimento dei dati avviene nel rispetto del GDPR, sulla base dell'EU-U.S. Data Privacy Framework o delle clausole contrattuali standard approvate dalla Commissione europea."
        },
        retention: {
          title: "Per quanto tempo li conserviamo",
          content: "I messaggi ricevuti tramite il modulo di contatto sono conservati per il tempo necessario a gestire la richiesta e comunque non oltre 2 anni dall'ultimo contatto. Se la richiesta porta a un ordine, i dati necessari alla fatturazione sono conservati per i tempi previsti dalla legge (10 anni). I dati tecnici di navigazione sono cancellati automaticamente dal fornitore di hosting dopo un breve periodo."
        },
        rights: {
          title: "I tuoi diritti",
          content: "In qualsiasi momento puoi chiederci di:",
          item1: "accedere ai tuoi dati e riceverne una copia;",
          item2: "correggerli se inesatti o incompleti;",
          item3: "cancellarli;",
          item4: "limitarne il trattamento od opporti ad esso;",
          item5: "riceverli in un formato leggibile per trasferirli ad altri (portabilità).",
          contact: "Per esercitare questi diritti basta scriverci a ddessert.co@gmail.com. Se ritieni che il trattamento non sia conforme alla legge, puoi anche presentare reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it)."
        },
        changes: {
          title: "Modifiche a questa informativa",
          content: "Eventuali modifiche saranno pubblicate su questa pagina, aggiornando la data indicata in alto."
        }
      },
    },
  },
  de: {
    translation: {
      hero: {
        cakeAlt: "Hochzeitstorte",
        photoAlt: "Roberta Rosetti schneidet eine Hochzeitstorte an",
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
        alts: {
          sunsetWedding: "Hochzeitstorte mit Blumendekoration bei Sonnenuntergang",
          poolsideHydrangeas: "Mehrstöckige Hochzeitstorte mit rosa Rosen und blauen Hortensien am Pool bei Nacht",
          millefeuille: "Mehrstöckige Millefeuille-Hochzeitstorte mit Beeren",
          whiteFrosting: "Hochzeitstorte mit weißer Glasur und Blumen",
          sugarFlowers: "Weiße Hochzeitstorte mit Zuckerblumen am Pool",
          seminaked: "Semi-Naked-Hochzeitstorten mit frischen Blumen auf einer beleuchteten Treppe",
          colorfulBirthday: "Geburtstagstorte mit bunter Dekoration",
          peachRoses: "Hochzeitstorte mit pfirsichfarbenen Rosen und Monogramm-Topper",
          cupcakes: "Cupcakes mit Vanillecreme",
          chocolateBerries: "Schokoladentorte mit Beeren",
          lambeth: "Vintage-Torte im Lambeth-Stil mit rosa und mintgrünen Verzierungen",
          candles: "Weiße Hochzeitstorte mit Rosen, umgeben von Kerzen",
          anniversaryGold: "Jubiläumstorte mit goldener Dekoration",
          cartoonBirthday: "Kindergeburtstagstorte im Cartoon-Stil"
        },
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
        vatLabel: "USt-IdNr.",
        privacyPolicy: "Datenschutzrichtlinie",
      },
      privacy: {
        title: "Datenschutzerklärung",
        lastUpdated: "Letzte Aktualisierung: 15. Oktober 2026",
        intro: "Diese Erklärung beschreibt, welche personenbezogenen Daten wir über die Website erheben, wofür wir sie verwenden und welche Rechte Sie gemäß der EU-Verordnung 2016/679 (DSGVO) haben.",
        controller: {
          title: "Verantwortlicher",
          content: "Verantwortlich für die Datenverarbeitung ist Dessert&Co di Roberta Rosetti, Via Domenico Cimarosa 5/a, 57025 Piombino (LI), Italien, USt-IdNr. IT01563900495. Bei Fragen zum Datenschutz erreichen Sie uns unter ddessert.co@gmail.com oder +39 349 413 6253."
        },
        data: {
          title: "Welche Daten wir erheben",
          item1: "Daten, die Sie uns über das Kontaktformular senden: Name, E-Mail, Telefonnummer (optional) und der Text Ihrer Nachricht.",
          item2: "Technische Nutzungsdaten: Wie bei jeder Website erfasst der Hosting-Dienst automatisch einige technische Daten (z. B. IP-Adresse, Browser und aufgerufene Seite), die für Betrieb und Sicherheit der Website nötig sind.",
          item3: "Anonyme, aggregierte Besuchsstatistiken (z. B. aufgerufene Seiten, Land und Gerätetyp), die keine Identifizierung ermöglichen."
        },
        purposes: {
          title: "Wofür wir sie verwenden",
          item1: "Um Ihre Anfragen zu beantworten und auf Wunsch ein Angebot zu erstellen. Rechtsgrundlage ist die Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO).",
          item2: "Um die Website zu betreiben, vor Missbrauch zu schützen und zu verstehen, welche Seiten am häufigsten besucht werden. Rechtsgrundlage ist unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)."
        },
        provision: {
          title: "Pflicht zur Angabe der Daten",
          content: "Name, E-Mail und Nachricht sind erforderlich, um Ihnen antworten zu können: Ohne diese Angaben können wir Ihre Anfrage nicht bearbeiten. Die Telefonnummer ist freiwillig."
        },
        cookies: {
          title: "Cookies",
          content: "Diese Website verwendet keine Cookies – weder technische noch Analyse- oder Profiling-Cookies – und lädt keine Inhalte von Drittanbietern, die solche setzen (etwa eingebettete Karten, Videos oder externe Schriftarten). Daher wird kein Einwilligungsbanner angezeigt.",
          control: "Besuchsstatistiken werden mit Vercel Web Analytics erhoben, einem Dienst, der keine Cookies verwendet und einzelne Besucher nicht wiedererkennen kann."
        },
        recipients: {
          title: "Empfänger der Daten",
          content: "Wir verkaufen Ihre Daten nicht und geben sie nicht weiter. Für den Betrieb der Website nutzen wir einige Dienstleister, die Daten ausschließlich in unserem Auftrag verarbeiten:",
          item1: "Vercel Inc. – Hosting der Website und anonyme Statistiken;",
          item2: "Resend – Versand der E-Mails aus dem Kontaktformular;",
          item3: "Google (Gmail) – Postfach, in dem wir die Nachrichten empfangen und aufbewahren.",
          transfer: "Diese Dienstleister haben ihren Sitz in den USA. Die Datenübermittlung erfolgt DSGVO-konform auf Grundlage des EU-U.S. Data Privacy Framework oder der von der Europäischen Kommission genehmigten Standardvertragsklauseln."
        },
        retention: {
          title: "Speicherdauer",
          content: "Über das Kontaktformular erhaltene Nachrichten werden so lange aufbewahrt, wie es für die Bearbeitung der Anfrage nötig ist, höchstens jedoch 2 Jahre ab dem letzten Kontakt. Führt die Anfrage zu einer Bestellung, werden die für die Rechnungsstellung nötigen Daten für die gesetzlich vorgeschriebene Dauer (10 Jahre) aufbewahrt. Technische Nutzungsdaten werden vom Hosting-Anbieter nach kurzer Zeit automatisch gelöscht."
        },
        rights: {
          title: "Ihre Rechte",
          content: "Sie können jederzeit verlangen:",
          item1: "Auskunft über Ihre Daten und eine Kopie davon;",
          item2: "die Berichtigung unrichtiger oder unvollständiger Daten;",
          item3: "die Löschung Ihrer Daten;",
          item4: "die Einschränkung der Verarbeitung oder den Widerspruch dagegen;",
          item5: "den Erhalt Ihrer Daten in einem lesbaren Format zur Übertragung an Dritte (Datenübertragbarkeit).",
          contact: "Um diese Rechte auszuüben, schreiben Sie uns einfach an ddessert.co@gmail.com. Wenn Sie der Meinung sind, dass die Verarbeitung nicht rechtmäßig ist, können Sie sich auch bei der italienischen Datenschutzbehörde (www.garanteprivacy.it) beschweren."
        },
        changes: {
          title: "Änderungen dieser Erklärung",
          content: "Änderungen werden auf dieser Seite veröffentlicht und das oben angegebene Datum wird aktualisiert."
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