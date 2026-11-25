import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Stars } from '@/components/ui/Stars';
import { getLeaderByKey } from '@/data/leadership';
import { CONTAINER } from '@/constants/layout';
import { useAboutStrings } from '../useAboutStrings';
import founderImg from '@/assets/images/opt/founder-900.webp';

export function AboutFounder() {
  const t = useAboutStrings();
  const { language } = useLanguage();
  const founder = getLeaderByKey('founder');

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <div className="split split--wide">
          <div className="leader__figure">
            <img
              src={founderImg}
              alt={localized(founder.imageAlt, language)}
              width="900"
              height="978"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h2 className="display display--section">
              {t.about.founderHeading1}
              <br />
              <span className="text-[var(--color-primary)]">
                {t.about.founderHeading2}
              </span>
            </h2>
            <div className="rule" />
            <span className="card__index">99</span>
            <div className="leader__quote">{t.about.founderQuote}</div>
            <p className="prose leader__body">{t.about.founderBody1}</p>
            <p className="prose leader__body">{t.about.founderBody2}</p>
            <div className="leader__meta">
              <h3 className="leader__name">{founder.name}</h3>
              <div className="leader__role">
                {localized(founder.role, language)} · <Stars />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFounder;
