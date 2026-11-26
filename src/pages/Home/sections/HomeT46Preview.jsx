import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { UnitCard } from '@/components/ui/UnitCard';
import { CONTAINER } from '@/constants/layout';
import { ecosystems } from '@/data/ecosystems';
import { getUnitBySlug } from '@/data/units';
import { useHomeStrings } from '../useHomeStrings';
import { paths, routePaths } from '@/app/paths';

// A short preview only; the complete twelve live on /units and /ecosystems/t46.
const PREVIEW_SLUGS = ['pro', 'win', 'agt', 'lazura-koffie', 'vps-vamos-padelon', 'bizencio-business-hub'];

export function HomeT46Preview() {
  const t = useHomeStrings();
  const { language } = useLanguage();
  const preview = t.home.t46Preview;
  const activeEcosystems = ecosystems.filter((ecosystem) => ecosystem.status !== 'draft');

  return (
    <>
      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader
            badge={preview.badge}
            titlePrimary={preview.heading}
            subtitle={preview.desc}
          />
          <div className="eco-grid">
            {activeEcosystems.map((ecosystem) => (
              <Link
                key={ecosystem.key}
                to={routePaths.ecosystem(ecosystem.key)}
                className="eco-card"
                style={{ '--eco-accent': ecosystem.theme.accent }}
              >
                <span className="eco-card__label">
                  {localized(ecosystem.theme.label, language)}
                </span>
                <h3 className="eco-card__title">{localized(ecosystem.name, language)}</h3>
                <p className="prose">{localized(ecosystem.intro, language)}</p>
                <span className="eco-card__foot">
                  <Icon name="arrow_forward" size={16} color="currentColor" />
                </span>
              </Link>
            ))}

            <div className="eco-invite">
              <span className="eco-invite__label">{preview.upcomingEyebrow}</span>
              <h3 className="eco-invite__title">{preview.upcomingTitle}</h3>
              <p className="prose">{preview.upcomingDesc}</p>
              <Link to={paths.contact} className="btn btn--outline mt-auto">
                {preview.upcomingCta}
                <Icon name="arrow_forward" size={18} color="#b12600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader
            titlePrimary={preview.unitsHeading}
            subtitle={preview.unitsDesc}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PREVIEW_SLUGS.map((slug) => (
              <UnitCard
                key={slug}
                unit={getUnitBySlug(slug)}
                detailLabel={preview.detailLabel}
              />
            ))}
          </div>
          <div className="mt-10">
            <Link to={paths.units} className="btn btn--outline">
              {preview.unitsCta}
              <Icon name="arrow_forward" size={18} color="#b12600" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeT46Preview;
