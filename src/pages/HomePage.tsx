import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Categories from '../components/Categories';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Categories />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default HomePage;