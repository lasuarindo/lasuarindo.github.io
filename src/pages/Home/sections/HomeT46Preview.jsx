import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftBadge, DraftNote } from '@/components/ui/DraftBadge';
import { CONTAINER } from '@/constants/layout';
import { ecosystems } from '@/data/ecosystems';
import { getUnitBySlug } from '@/data/units';
import { useHomeStrings } from '../useHomeStrings';

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
                  <Icon name="arrow_forward" size={16} color="currentColor" />
                </span>
              </Link>
            ))}

            <div className="eco-invite">
              <span className="eco-invite__label">{preview.upcomingEyebrow}</span>
              <h3 className="eco-invite__title">{preview.upcomingTitle}</h3>
              <DraftBadge />
              <p className="prose">{preview.upcomingDesc}</p>
              <Link to="/contact" className="btn btn--outline mt-auto">
                {preview.upcomingCta}
                <Icon name="arrow_forward" size={18} color="#b12600" />
              </Link>
            </div>
          </div>
          <DraftNote>{preview.draftNote}</DraftNote>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader
            titlePrimary={preview.unitsHeading}
            subtitle={preview.unitsDesc}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PREVIEW_SLUGS.map((slug) => {
              const unit = getUnitBySlug(slug);
              return (
                <Link key={slug} to={`/units/${slug}`} className="card card--grow no-underline">
                  <div className="flex items-start justify-between">
                    <Icon name={unit.icon} size={24} color="#b12600" />
                    <DraftBadge />
                  </div>
                  <h3 className="display display--card card__title">{unit.name}</h3>
                  <p className="prose">{localized(unit.desc, language)}</p>
                  <span className="card__cta mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-bold text-[var(--color-primary)]">
                    {preview.detailLabel}
                    <Icon name="arrow_forward" size={16} color="#b12600" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-10">
            <Link to="/units" className="btn btn--outline">
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
