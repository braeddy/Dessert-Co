import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import CallToAction from '../components/CallToAction';
import ContactUs from '../components/ContactUs';

const Home: React.FC = () => {
  const location = useLocation();

  // Arrivando da un'altra pagina, scorre alla sezione richiesta
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    const timer = setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [location.state]);

  return (
    <>
      <Hero />
      <Marquee />
      <AboutUs />
      <Services />
      <Gallery />
      <Process />
      <CallToAction />
      <ContactUs />
    </>
  );
};

export default Home;
