import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftNote } from '@/components/ui/DraftBadge';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';

/** The preferred step-line treatment, with a generic placeholder lead. */
export function BusinessesProcess() {
  const t = useBusinessesStrings();
  const p = t.businesses.process;

  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={p.heading} subtitle={p.generic} />
        <div className="step-line">
          {p.steps.map((step, index) => (
            <div key={step.title} className="step-line__item">
              <span className="step-line__dot">{index + 1}</span>
              <h3 className="display display--card">{step.title}</h3>
              <p className="prose mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
        <DraftNote />
      </div>
    </section>
  );
}

export default BusinessesProcess;
