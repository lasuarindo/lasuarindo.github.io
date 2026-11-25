import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';

/** Four illustrative steps from drafts.md §C — content, not an SOP. */
export function BusinessesProcess() {
  const t = useBusinessesStrings();

  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader
          badge={t.businesses.process.eyebrow}
          titlePrimary={t.businesses.process.heading}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.businesses.process.steps.map((step, index) => (
            <div key={step.title} className="card">
              <span className="card__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="display display--card card__title">{step.title}</h3>
              <p className="prose">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessesProcess;
