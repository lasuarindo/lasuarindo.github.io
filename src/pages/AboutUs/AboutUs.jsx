import React from 'react';
import { FinalCta } from '@/components/ui/FinalCta';
import { useAboutStrings } from './useAboutStrings';
import { AboutHero } from './sections/AboutHero';
import { AboutVision } from './sections/AboutVision';
import { AboutValues } from './sections/AboutValues';
import { AboutStrengths } from './sections/AboutStrengths';
import { AboutFounder } from './sections/AboutFounder';
import { AboutCommissioner } from './sections/AboutCommissioner';
import { AboutTimeline } from './sections/AboutTimeline';
import { AboutNetwork } from './sections/AboutNetwork';

export function AboutUs() {
  const t = useAboutStrings();

  return (
    <>
      <AboutHero />
      <AboutVision />
      <AboutValues />
      <AboutStrengths />
      <AboutFounder />
      <AboutCommissioner />
      <AboutTimeline />
      <AboutNetwork />
      <FinalCta {...t.about.cta} />
    </>
  );
}

export default AboutUs;
