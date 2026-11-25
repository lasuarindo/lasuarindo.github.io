import React from 'react';
import { FaqTeaser } from '@/components/ui/FaqTeaser';
import { FinalCta } from '@/components/ui/FinalCta';
import { useHomeStrings } from './useHomeStrings';
import { HomeHero } from './sections/HomeHero';
import { HomeEcosystem } from './sections/HomeEcosystem';
import { HomeT46Preview } from './sections/HomeT46Preview';
import { HomeImpact } from './sections/HomeImpact';
import { HomeJourney } from './sections/HomeJourney';

export function Home() {
  const t = useHomeStrings();

  return (
    <>
      <HomeHero />
      <HomeEcosystem />
      <HomeT46Preview />
      <HomeImpact />
      <HomeJourney />
      <FaqTeaser {...t.home.faqTeaser} />
      <FinalCta {...t.home.finalCta} />
    </>
  );
}

export default Home;
