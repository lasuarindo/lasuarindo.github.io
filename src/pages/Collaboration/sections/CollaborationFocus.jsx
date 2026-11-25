import React from 'react';
import { useStrings } from '@/i18n/useStrings';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';

export function CollaborationFocus({ bundle }) {
  const t = useStrings(bundle);

  return (
    <>
      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.introHeading} subtitle={t.introLead} />
          <div className="grid-3">
            {t.points.map((point) => (
              <div key={point.title} className="card card--grow">
                <Icon name="lightbulb" size={22} color="#b12600" />
                <h3 className="display display--card card__title">{point.title}</h3>
                <p className="prose">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.audienceHeading} subtitle={t.audienceLead} />
          <div className="value-list">
            {t.audienceItems.map((item, index) => (
              <div key={item.title} className="value-row">
                <span className="value-row__index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="value-row__label">{item.title}</h3>
                <p className="prose value-row__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CollaborationFocus;
