import React from 'react';
import MarqueeModule from 'react-fast-marquee';
import { Icon } from '@/components/ui/Icon';

// react-fast-marquee ships as double-wrapped CJS; unwrap the real component.
const Marquee = MarqueeModule.default || MarqueeModule;
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { network } from '@/data/network';
import { useAboutStrings } from '../useAboutStrings';

export function AboutNetwork() {
  const t = useAboutStrings();

  return (
    <section className="section section--tight section--neutral">
      <div className={CONTAINER}>
        <SectionHeader
          titlePrimary={t.about.networkHeading}
          subtitle={t.about.networkLead}
        />
      </div>
      <div className="network-marquee" aria-hidden="true">
        <Marquee speed={35} pauseOnHover gradient={false}>
          {network.map((item) => (
            <div key={item.name} className="network-marquee-item">
              <Icon name={item.icon} size={22} color="#b12600" />
              <span>{item.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
      <ul className="sr-only">
        {network.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default AboutNetwork;
