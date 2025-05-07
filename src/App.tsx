import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-bakery-brown bg-white">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <AboutUs />
        <Gallery />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;