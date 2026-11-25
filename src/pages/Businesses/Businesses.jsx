import React from 'react';
import { FaqTeaser } from '@/components/ui/FaqTeaser';
import { FinalCta } from '@/components/ui/FinalCta';
import { useBusinessesStrings } from './useBusinessesStrings';
import { BusinessesHero } from './sections/BusinessesHero';
import { BusinessesIntro } from './sections/BusinessesIntro';
import { BusinessesSectors } from './sections/BusinessesSectors';
import { BusinessesInvestment } from './sections/BusinessesInvestment';
import { BusinessesProperty } from './sections/BusinessesProperty';
import { BusinessesTechnology } from './sections/BusinessesTechnology';
import { BusinessesMedia } from './sections/BusinessesMedia';
import { BusinessesFood } from './sections/BusinessesFood';
import { BusinessesLifestyle } from './sections/BusinessesLifestyle';
import { BusinessesEcosystem } from './sections/BusinessesEcosystem';
import { BusinessesProjects } from './sections/BusinessesProjects';
import { BusinessesProcess } from './sections/BusinessesProcess';

export function Businesses() {
  const t = useBusinessesStrings();

  return (
    <>
      <BusinessesHero />
      <BusinessesIntro />
      <BusinessesSectors />
      <BusinessesInvestment />
      <BusinessesProperty />
      <BusinessesTechnology />
      <BusinessesMedia />
      <BusinessesFood />
      <BusinessesLifestyle />
      <BusinessesEcosystem />
      <BusinessesProjects />
      <BusinessesProcess />
      <FaqTeaser {...t.businesses.faqTeaser} />
      <FinalCta {...t.businesses.finalCta} />
    </>
  );
}

export default Businesses;
