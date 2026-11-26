import React, { useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftBadge } from '@/components/ui/DraftBadge';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FinalCta } from '@/components/ui/FinalCta';
import { CONTAINER } from '@/constants/layout';
import { paths, routePaths } from '@/app/paths';
import { ecosystems } from '@/data/ecosystems';
import { getSectorByKey } from '@/data/sectors';
import { getUnitCategory, unitCategories, units } from '@/data/units';
import heroImg from '@/assets/images/opt/hero-city-800.webp';
import { useUnitsStrings } from './useUnitsStrings';

/**
 * The catalogue reads as a register: one hero idea, a narrow filter rail,
 * then numbered rows. It deliberately shares no layout with /businesses.
 */
export function Units() {
  const t = useUnitsStrings();
  const common = useStrings({ id: idCommon, en: enCommon });
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  // District facts come from the catalogue, never from published copy.
  const actualEcosystems = ecosystems.filter((ecosystem) => ecosystem.status === 'actual');
  const districtNames = actualEcosystems.map((ecosystem) => localized(ecosystem.name, language));
  const districtNamesLabel = [
    districtNames.slice(0, 2).join(' · '),
    districtNames.length > 2 ? `+${districtNames.length - 2}` : '',
  ]
    .filter(Boolean)
    .join(' · ');

  const normalized = query.trim().toLowerCase();
  const shown = units.filter((unit) => {
    if (activeCategory !== 'all' && unit.category !== activeCategory) return false;
    if (!normalized) return true;
    const desc = localized(unit.desc, language).toLowerCase();
    return unit.name.toLowerCase().includes(normalized) || desc.includes(normalized);
  });

  return (
    <>
      <section className="cover cover--light cover--text register-hero">
        <div className={CONTAINER}>
          <div className="register-hero__grid">
            <div className="cover__copy register-hero__copy">
              <Breadcrumb
                inside
                items={[
                  { label: common.nav.home, to: paths.home },
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
              <dl className="register-facts enter-once" style={{ animationDelay: '180ms' }}>
                <div className="register-fact">
                  <dt>{t.units.heroFacts.units.replace('{{count}}', '').trim()}</dt>
                  <dd>{String(units.length).padStart(2, '0')}</dd>
                </div>
                <div className="register-fact">
                  <dt>{t.units.heroFacts.categories.replace('{{count}}', '').trim()}</dt>
                  <dd>{String(unitCategories.length).padStart(2, '0')}</dd>
                </div>
                <div className="register-fact register-fact--wide">
                  <dd>
                    {t('units.heroFacts.district', {
                      count: actualEcosystems.length,
                      names: districtNamesLabel,
                    })}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="register-hero__media">
              <figure className="figure figure--portrait">
                <img
                  src={heroImg}
                  alt=""
                  width={800}
                  height={950}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <div className="filter-rail">
            <div className="filter-rail__filters">
              <p className="filter-rail__label" id="unit-filter-label">{t.units.filterLabel}</p>
              <div
                className="filter-rail__chips"
                role="group"
                aria-labelledby="unit-filter-label"
              >
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
            </div>
            <div className="filter-rail__search">
              <label className="unit-search">
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
              <p className="filter-rail__hint">{t.units.filterHint}</p>
              <p className="filter-rail__hint">{t.units.searchHelp}</p>
            </div>
          </div>

          <div className="directory-meta">
            <SectionHeader titlePrimary={t.units.gridHeading} />
            <p className="directory-meta__count">
              {t('units.resultCount', { shown: shown.length, total: units.length })}
            </p>
          </div>
          <p className="directory-draft">
            <DraftBadge />
            <span>{t.units.draftHint}</span>
          </p>

          {shown.length ? (
            <ol className="directory">
              {shown.map((unit, index) => {
                const sector = getSectorByKey(unit.sector);
                const category = getUnitCategory(unit.category);
                return (
                  <li key={unit.slug} className="directory__item">
                    <Link
                      to={routePaths.unit(unit.slug)}
                      className="directory__link"
                      aria-label={`${t.units.detailLabel}: ${unit.name}`}
                    >
                      <span className="directory__index" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="directory__icon">
                        <Icon name={unit.icon} size={22} color="#b12600" aria-hidden="true" />
                      </span>
                      <span className="directory__body">
                        <span className="directory__name">{unit.name}</span>
                        <span className="directory__desc">{localized(unit.desc, language)}</span>
                      </span>
                      <span className="directory__tags">
                        {sector ? (
                          <span className="unit-chip">{localized(sector.title, language)}</span>
                        ) : null}
                        {category ? (
                          <span className="unit-chip">{localized(category.label, language)}</span>
                        ) : null}
                      </span>
                      <Icon
                        name="arrow_forward"
                        size={18}
                        color="#b12600"
                        className="directory__arrow"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ol>
          ) : (
            <div className="empty-state">
              <p className="lead">{t.units.noResults}</p>
              <p className="prose mt-3">{t.units.emptyHint}</p>
            </div>
          )}
        </div>
      </section>
      <FinalCta {...t.units.finalCta} />
    </>
  );
}

export default Units;
