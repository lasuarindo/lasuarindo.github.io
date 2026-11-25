import React from 'react';
import { FaqTeaser } from '@/components/ui/FaqTeaser';
import { FinalCta } from '@/components/ui/FinalCta';
import { useBusinessesStrings } from './useBusinessesStrings';
import { BusinessesHero } from './sections/BusinessesHero';
import { BusinessesIntro } from './sections/BusinessesIntro';
import { BusinessesProperty } from './sections/BusinessesProperty';
import { BusinessesMedia } from './sections/BusinessesMedia';
import { BusinessesTechnology } from './sections/BusinessesTechnology';
import { BusinessesVamos } from './sections/BusinessesVamos';
import { BusinessesEcosystem } from './sections/BusinessesEcosystem';
import { BusinessesProjects } from './sections/BusinessesProjects';
import { BusinessesProcess } from './sections/BusinessesProcess';

export function Businesses() {
  const t = useBusinessesStrings();

  return (
    <>
      <BusinessesHero />
      <BusinessesIntro />
      <BusinessesProperty />
      <BusinessesMedia />
      <BusinessesTechnology />
      <BusinessesVamos />
      <BusinessesEcosystem />
      <BusinessesProjects />
      <BusinessesProcess />
      <FaqTeaser {...t.businesses.faqTeaser} />
      <FinalCta {...t.businesses.finalCta} />
    </>
  );
}

export default Businesses;
