import React from 'react';
import { CONTAINER } from '@/constants/layout';
import { useAboutStrings } from '../useAboutStrings';

export function AboutStrengths() {
  const t = useAboutStrings();

  return (
    <section className="section section--tight section--paper">
      <div className={CONTAINER}>
        <div className="strengths">
          <div className="strengths__row">
            <span className="strengths__number">66</span>
            <span className="strengths__rule" />
          </div>
          <h2 className="display display--section strengths__heading">
            {t.about.strengthsHeading1}
            <span className="text-[var(--color-primary)]">
              {t.about.strengthsHeading2}
            </span>
          </h2>
          <p className="lead strengths__body">{t.about.strengthsBody}</p>
          <div className="strengths__row strengths__row--end">
            <span className="strengths__rule" />
            <span className="strengths__number">99</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStrengths;
