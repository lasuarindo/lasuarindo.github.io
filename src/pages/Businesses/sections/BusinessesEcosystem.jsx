import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { getUnitBySlug } from '@/data/units';
import { useBusinessesStrings } from '../useBusinessesStrings';

// Three examples only; the full twelve live on /ecosystems/t46 and /units.
const TEASER_SLUGS = ['pro', 'win', 'agt'];

/** Points visitors to the district and to unit detail pages. */
export function BusinessesEcosystem() {
  const t = useBusinessesStrings();
  const { language } = useLanguage();

  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader
          badge={t.businesses.ecosystemBadge}
          titlePrimary={t.businesses.ecosystemHeading}
          subtitle={t.businesses.ecosystemDesc}
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TEASER_SLUGS.map((slug) => {
            const unit = getUnitBySlug(slug);
            return (
              <Link key={slug} to={`/units/${slug}`} className="card no-underline">
                <Icon name={unit.icon} size={22} color="#b12600" />
                <h3 className="display display--card card__title">{unit.name}</h3>
                <p className="prose">{localized(unit.desc, language)}</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-10">
          <Link to="/ecosystems/t46" className="btn btn--solid">
            {t.businesses.ecosystemCta}
            <Icon name="arrow_forward" size={18} color="#ffffff" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BusinessesEcosystem;
