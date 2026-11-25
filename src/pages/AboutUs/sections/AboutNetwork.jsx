import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { network } from '@/data/network';
import { useAboutStrings } from '../useAboutStrings';

export function AboutNetwork() {
  const t = useAboutStrings();

  return (
    <section className="section section--tight section--neutral">
      <div className={CONTAINER}>
        <span className="eyebrow">{t.about.networkHeading}</span>
        <div className="network-row">
          {network.map((item) => (
            <div key={item.name} className="network-item">
              <Icon name={item.icon} size={24} color="#6b665f" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutNetwork;
