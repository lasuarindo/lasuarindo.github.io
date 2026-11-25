import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Stars } from '@/components/ui/Stars';
import { getLeaderByKey } from '@/data/leadership';
import { CONTAINER } from '@/constants/layout';
import { useAboutStrings } from '../useAboutStrings';
import commissionerImg from '@/assets/images/opt/commissioner-800.webp';

export function AboutCommissioner() {
  const t = useAboutStrings();
  const { language } = useLanguage();
  const commissioner = getLeaderByKey('commissioner');

  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <div className="split split--wide">
          <div>
            <h2 className="display display--section">
              {t.about.commissionerHeading1}
              <br />
              <span className="text-[var(--color-primary)]">
                {t.about.commissionerHeading2}
              </span>
            </h2>
            <div className="rule" />
            <span className="card__index">99</span>
            <div className="leader__core">{t.about.commissionerCore}</div>
            <details className="leader__more">
              <summary>{t.about.readFullMessage}</summary>
              <p className="prose mt-3">{t.about.commissionerQuote}</p>
            </details>
            <p className="prose leader__body">
              {t.about.commissionerBody1}
              <strong className="font-bold text-[var(--color-primary)]">
                {t.about.commissionerHighlight1}
              </strong>{' '}
              {t.about.commissionerConnector1}{' '}
              <strong className="font-bold text-[var(--color-primary)]">
                {t.about.commissionerHighlight2}
              </strong>{' '}
              {t.about.commissionerConnector2}
            </p>
            <p className="prose leader__body">{t.about.commissionerBody2}</p>
            <div className="leader__meta">
              <h3 className="leader__name">{commissioner.name}</h3>
              <div className="leader__role">
                {localized(commissioner.role, language)} · <Stars />
              </div>
            </div>
          </div>
          <div className="leader__figure">
            <img
              src={commissionerImg}
              alt={localized(commissioner.imageAlt, language)}
              width="800"
              height="1080"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCommissioner;
