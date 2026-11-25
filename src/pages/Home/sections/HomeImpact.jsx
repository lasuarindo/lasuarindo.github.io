import React from 'react';
import { CONTAINER } from '@/constants/layout';
import { useHomeStrings } from '../useHomeStrings';

/** Two verified figures (F11/F12) and one temporary illustrative figure. */
export function HomeImpact() {
  const t = useHomeStrings();
  const stats = [t.home.impact.stat1, t.home.impact.stat2, t.home.impact.stat3];

  return (
    <section className="section section--tight section--paper">
      <div className={CONTAINER}>
        <span className="eyebrow">{t.home.impact.eyebrow}</span>
        <div className="grid-3">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
        <p className="impact-note">{t.home.impact.note}</p>
      </div>
    </section>
  );
}

export default HomeImpact;
