import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';
import ContactUs from '../components/ContactUs';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Gallery />
      <ContactUs />
    </>
  );
};

export default Home;
