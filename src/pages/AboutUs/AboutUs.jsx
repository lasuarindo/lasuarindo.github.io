import React from 'react';
import { AboutHero } from './sections/AboutHero';
import { AboutValues } from './sections/AboutValues';
import { AboutStrengths } from './sections/AboutStrengths';
import { AboutFounder } from './sections/AboutFounder';
import { AboutCommissioner } from './sections/AboutCommissioner';
import { AboutNetwork } from './sections/AboutNetwork';

export function AboutUs() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutStrengths />
      <AboutFounder />
      <AboutCommissioner />
      <AboutNetwork />
    </>
  );
}

export default AboutUs;
