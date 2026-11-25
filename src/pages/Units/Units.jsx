import React, { useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { DraftNote } from '@/components/ui/DraftBadge';
import { FinalCta } from '@/components/ui/FinalCta';
import { CONTAINER } from '@/constants/layout';
import { unitCategories, units } from '@/data/units';
import { useUnitsStrings } from './useUnitsStrings';

/** Catalog of all twelve units — the parent URL for /units/:slug. */
export function Units() {
  const t = useUnitsStrings();
  const common = useStrings({ id: idCommon, en: enCommon });
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const shown = activeCategory === 'all' ? units : units.filter((unit) => unit.category === activeCategory);

  return (
    <>
      <Breadcrumb
        items={[
          { label: common.nav.home, to: '/' },
          { label: common.nav.units },
        ]}
      />
      <section className="cover cover--light cover--text">
        <div className="cover__copy">
          <span className="eyebrow enter-once">{common.nav.units}</span>
          <h1 className="display display--hero enter-once" style={{ animationDelay: '60ms' }}>
            {t.units.heroTitle1} {t.units.heroTitle2}
          </h1>
          <p className="lead enter-once" style={{ animationDelay: '120ms' }}>
            {t.units.heroLead}
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label={t.units.gridHeading}>
            <button
              type="button"
              aria-pressed={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className="filter-chip"
            >
              {t.units.filterAll}
            </button>
            {unitCategories.map((category) => (
              <button
                key={category.key}
                type="button"
                aria-pressed={activeCategory === category.key}
                onClick={() => setActiveCategory(category.key)}
                className="filter-chip"
              >
                {localized(category.label, language)}
              </button>
            ))}
          </div>
          <SectionHeader titlePrimary={t.units.gridHeading} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((unit) => (
              <Link
                key={unit.slug}
                to={`/units/${unit.slug}`}
                aria-label={`${t.units.viewUnit}: ${unit.name}`}
                className="card no-underline"
              >
                <Icon name={unit.icon} size={22} color="#b12600" />
                <h3 className="display display--card card__title">{unit.name}</h3>
                <p className="prose">{localized(unit.desc, language)}</p>
              </Link>
            ))}
          </div>
          <DraftNote>{common.status.draftNote}</DraftNote>
        </div>
      </section>
      <FinalCta {...t.units.finalCta} />
    </>
  );
}

export default Units;
