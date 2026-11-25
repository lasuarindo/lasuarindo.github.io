import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftNote } from '@/components/ui/DraftBadge';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';

/** Three temporary treatments shown together so one can be chosen. */
export function BusinessesProcess() {
  const t = useBusinessesStrings();
  const p = t.businesses.process;
  const steps = p.steps;

  return (
    <>
      <section className="section section--neutral">
        <div className={CONTAINER}>
          <span className="variant-label">{p.variants.a}</span>
          <SectionHeader titlePrimary={p.eyebrow} subtitle={p.heading} />
          <div className="grid-4">
            {steps.map((step, index) => (
              <div key={step.title} className="card card--grow">
                <span className="card__index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="display display--card card__title">{step.title}</h3>
                <p className="prose">{step.desc}</p>
              </div>
            ))}
          </div>
          <DraftNote />
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <span className="variant-label">{p.variants.b}</span>
          <SectionHeader titlePrimary={p.heading} />
          <div className="step-line">
            {steps.map((step, index) => (
              <div key={step.title} className="step-line__item">
                <span className="step-line__dot">{index + 1}</span>
                <h3 className="display display--card">{step.title}</h3>
                <p className="prose mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--neutral">
        <div className={CONTAINER}>
          <span className="variant-label">{p.variants.c}</span>
          <SectionHeader titlePrimary={p.heading} />
          <ol className="step-list">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-list__index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="display display--card">{step.title}</h3>
                  <p className="prose mt-2">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="impact-note mt-8">{p.variants.note}</p>
        </div>
      </section>
    </>
  );
}

export default BusinessesProcess;
