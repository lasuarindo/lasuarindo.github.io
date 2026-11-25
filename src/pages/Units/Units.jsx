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
import { DraftBadge, DraftNote } from '@/components/ui/DraftBadge';
import { FinalCta } from '@/components/ui/FinalCta';
import { CONTAINER } from '@/constants/layout';
import { unitCategories, units } from '@/data/units';
import { unitImage } from '@/data/unitVisual';
import { useUnitsStrings } from './useUnitsStrings';

/** Catalog of all twelve units — the parent URL for /units/:slug. */
export function Units() {
  const t = useUnitsStrings();
  const common = useStrings({ id: idCommon, en: enCommon });
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  const normalized = query.trim().toLowerCase();
  const shown = units.filter((unit) => {
    if (activeCategory !== 'all' && unit.category !== activeCategory) return false;
    if (!normalized) return true;
    const desc = localized(unit.desc, language).toLowerCase();
    return unit.name.toLowerCase().includes(normalized) || desc.includes(normalized);
  });

  return (
    <>
      <section className="cover cover--light cover--text">
        <div className="cover__copy">
          <Breadcrumb
            inside
            items={[
              { label: common.nav.home, to: '/' },
              { label: common.nav.units },
            ]}
          />
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

          <label className="unit-search mb-8">
            <Icon name="search" size={18} color="#6b665f" aria-hidden="true" />
            <span className="sr-only">{t.units.searchLabel}</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.units.searchPlaceholder}
              aria-label={t.units.searchLabel}
            />
          </label>

          <SectionHeader titlePrimary={t.units.gridHeading} />
          {shown.length ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((unit, index) => {
                const category = unitCategories.find((item) => item.key === unit.category);
                const image = unitImage(index);
                return (
                  <Link
                    key={unit.slug}
                    to={`/units/${unit.slug}`}
                    aria-label={`${t.units.detailLabel}: ${unit.name}`}
                    className="card card--grow unit-card no-underline"
                  >
                    <div className="unit-card__media">
                      <img src={image} alt="" loading="lazy" decoding="async" />
                      <span className="unit-card__badge">
                        {category ? localized(category.label, language) : unit.name}
                      </span>
                    </div>
                    <div className="unit-card__body">
                      <div className="flex items-start justify-between gap-3">
                        <Icon name={unit.icon} size={24} color="#b12600" />
                        <DraftBadge />
                      </div>
                      <h3 className="display display--card card__title">{unit.name}</h3>
                      <p className="prose">{localized(unit.desc, language)}</p>
                      <span className="card__cta mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-bold text-[var(--color-primary)]">
                        {t.units.detailLabel}
                        <Icon name="arrow_forward" size={16} color="#b12600" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="lead">{t.units.noResults}</p>
          )}
          <DraftNote>{common.status.draftNote}</DraftNote>
        </div>
      </section>
      <FinalCta {...t.units.finalCta} />
    </>
  );
}

export default Units;
