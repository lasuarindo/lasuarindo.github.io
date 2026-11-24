import React from 'react';
import { ServicesHero } from './sections/ServicesHero';
import { ServicesProperty } from './sections/ServicesProperty';
import { ServicesMedia } from './sections/ServicesMedia';
import { ServicesTechnology } from './sections/ServicesTechnology';
import { ServicesVamos } from './sections/ServicesVamos';
import { ServicesEcosystem } from './sections/ServicesEcosystem';
import { ServicesProjects } from './sections/ServicesProjects';

export function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesProperty />
      <ServicesMedia />
      <ServicesTechnology />
      <ServicesVamos />
      <ServicesEcosystem />
      <ServicesProjects />
    </>
  );
}

export default Services;
