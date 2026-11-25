import React from 'react';
import { useStrings } from '@/i18n/useStrings';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';

export function PartnershipProcess({ bundle }) {
  const t = useStrings(bundle);

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={t.processHeading} subtitle={t.processLead} />
        <div className="step-line">
          {t.processSteps.map((step, index) => (
            <div key={step.title} className="step-line__item">
              <span className="step-line__dot">{index + 1}</span>
              <h3 className="display display--card">{step.title}</h3>
              <p className="prose mt-2">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnershipProcess;
