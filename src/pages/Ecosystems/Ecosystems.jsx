import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FinalCta } from '@/components/ui/FinalCta';
import { CONTAINER } from '@/constants/layout';
import { ecosystems } from '@/data/ecosystems';
import { useEcosystemsStrings } from './useEcosystemsStrings';

/** Lightweight index: the parent URL for every district, now and future. */
export function Ecosystems() {
  const t = useEcosystemsStrings();
  const { language } = useLanguage();
  const activeEcosystems = ecosystems.filter((ecosystem) => ecosystem.status !== 'draft');

  return (
    <>
      <section className="cover cover--light cover--text">
        <div className="cover__copy">
          <span className="eyebrow enter-once">{t.ecosystems.heroTitle1}</span>
          <h1 className="display display--hero enter-once" style={{ animationDelay: '60ms' }}>
            {t.ecosystems.heroTitle2}
          </h1>
          <p className="lead enter-once" style={{ animationDelay: '120ms' }}>
            {t.ecosystems.heroLead}
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader
            titlePrimary={t.ecosystems.introHeading}
            subtitle={t.ecosystems.introLead}
          />
          <div className="grid-3">
            {t.ecosystems.introPoints.map((point, index) => (
              <div key={point.title} className="card">
                <span className="card__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="display display--card card__title">{point.title}</h3>
                <p className="prose">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.ecosystems.districtsHeading} />
          <div className="eco-grid">
            {activeEcosystems.map((ecosystem) => (
              <Link
                key={ecosystem.key}
                to={`/ecosystems/${ecosystem.key}`}
                className="eco-card"
                style={{ '--eco-accent': ecosystem.theme.accent }}
              >
                <span className="eco-card__label">
                  {localized(ecosystem.theme.label, language)}
                </span>
                <h3 className="eco-card__title">{localized(ecosystem.name, language)}</h3>
                <p className="prose">{localized(ecosystem.intro, language)}</p>
                <span className="eco-card__foot">
                  {t.ecosystems.viewDistrict}
                  <Icon name="arrow_forward" size={16} color="currentColor" />
                </span>
              </Link>
            ))}

            <div className="eco-invite">
              <span className="eco-invite__label">{t.ecosystems.inviteEyebrow}</span>
              <h3 className="eco-invite__title">{t.ecosystems.inviteTitle}</h3>
              <p className="prose">{t.ecosystems.inviteDesc}</p>
              <Link to="/contact" className="btn btn--outline mt-auto">
                {t.ecosystems.inviteCta}
                <Icon name="arrow_forward" size={18} color="#b12600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta {...t.ecosystems.finalCta} />
    </>
  );
}

export default Ecosystems;
