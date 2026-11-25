import React from 'react';
import CountUpModule from 'react-countup';
import { DraftBadge } from '@/components/ui/DraftBadge';

// react-countup ships as double-wrapped CJS; unwrap the real component.
const CountUp = CountUpModule.default || CountUpModule;
import { CONTAINER } from '@/constants/layout';
import { useHomeStrings } from '../useHomeStrings';

/** Portfolio-wide metrics. The third figure is still temporary content. */
export function HomeImpact() {
  const t = useHomeStrings();
  const stats = [t.home.impact.stat1, t.home.impact.stat2, t.home.impact.stat3];

  return (
    <section className="section section--tight section--paper">
      <div className={CONTAINER}>
        <span className="eyebrow">{t.home.impact.eyebrow}</span>
        <div className="grid-3">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat">
              <span className="stat__value">
                <CountUp end={Number(stat.value) || 0} duration={1.6} separator="," />
              </span>
              <span className="stat__label">{stat.label}</span>
              {index === 2 ? <DraftBadge className="mt-3" /> : null}
            </div>
          ))}
        </div>
        <p className="impact-note">{t.home.impact.note}</p>
      </div>
    </section>
  );
}

export default HomeImpact;
