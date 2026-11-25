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

// A short preview only; the complete twelve live on /ecosystems/t46.
const PREVIEW_SLUGS = ['pro', 'win', 'agt', 'lazura-koffie', 'vps-vamos-padelon', 'bizencio-business-hub'];

export function HomeT46Preview() {
  const t = useHomeStrings();
  const { language } = useLanguage();

  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader
          badge={t.home.t46Preview.badge}
          titlePrimary={t.home.t46Preview.heading}
          subtitle={t.home.t46Preview.desc}
        />

        <div className="eco-grid">
          {ecosystems.map((ecosystem) => (
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
              {ecosystem.status === 'draft' ? <DraftBadge /> : null}
              <p className="prose">{localized(ecosystem.intro, language)}</p>
              <span className="eco-card__foot">
                <Icon name="arrow_forward" size={16} color="currentColor" />
              </span>
            </Link>
          ))}
        </div>

        <DraftNote>{t.home.t46Preview.draftNote}</DraftNote>

        <h3 className="display display--card mt-12">
          {t.home.t46Preview.unitsHeading}
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_SLUGS.map((slug) => {
            const unit = getUnitBySlug(slug);
            return (
              <div key={slug} className="card">
                <Icon name={unit.icon} size={22} color="#b12600" />
                <h4 className="display display--card card__title">{unit.name}</h4>
                <p className="prose">{localized(unit.desc, language)}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <Link to="/ecosystems/t46" className="btn btn--solid">
            {t.home.t46Preview.cta}
            <Icon name="arrow_forward" size={18} color="#ffffff" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeT46Preview;
