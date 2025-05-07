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