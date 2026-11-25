import React from 'react';
import { useStrings } from '@/i18n/useStrings';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';

export function CollaborationProcess({ bundle }) {
  const t = useStrings(bundle);

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={t.processHeading} subtitle={t.processLead} />
        <ol className="step-list">
          {t.processSteps.map((step, index) => (
            <li key={step.title}>
              <span className="step-list__index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="display display--card">{step.title}</h3>
                <p className="prose mt-2">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default CollaborationProcess;
