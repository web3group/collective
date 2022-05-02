import React from 'react';
import Collaboration from './Collaboration';
import Collection from './Collection';
import CTA from './CTA';
import Hero from './Hero';
import Intelligence from './Intelligence';

const MainCont = () => {
  return (
    <main className="main">
      <Hero />
      <Collection />
      <Collaboration />
      <Intelligence />
      <CTA />
    </main>
  );
};

export default MainCont;
