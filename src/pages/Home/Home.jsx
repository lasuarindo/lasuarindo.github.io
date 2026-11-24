import React from 'react';
import { HomeHero } from './sections/HomeHero';
import { HomeEcosystem } from './sections/HomeEcosystem';
import { HomeJourney } from './sections/HomeJourney';

export function Home() {
  return (
    <>
      <HomeHero />
      <HomeEcosystem />
      <HomeJourney />
    </>
  );
}

export default Home;
