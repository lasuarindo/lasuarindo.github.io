import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftNote } from '@/components/ui/DraftBadge';
import { CONTAINER } from '@/constants/layout';
import { getEcosystemByKey } from '@/data/ecosystems';
import { getSectorByKey } from '@/data/sectors';
import { getUnitCategory, units } from '@/data/units';
import { getUnitTheme } from '@/data/unitTheme';
import { UnitBreadcrumb, UnitClosing, UnitEnrichment, UnitFigure } from './UnitShared';

/**
 * Five motifs, one data shape. Each motif composes the same unit fields into
 * a different hero, overview and capability layout. The shared editorial CSS
 * keeps the family resemblance: paper, ink, one red, hairline rules, 2px radius.
 */

function useUnitView(unit, index, t, common) {
  const { language } = useLanguage();
  const theme = getUnitTheme(unit.sector);
  const category = getUnitCategory(unit.category);
  const sector = getSectorByKey(unit.sector);
  const ecosystem = getEcosystemByKey(unit.ecosystem);
  return {
    language,
    theme,
    ecosystem,
    categoryLabel: category ? localized(category.label, language) : '',
    sectorLabel: sector ? localized(sector.title, language) : '',
    desc: localized(unit.desc, language),
    overview: localized(unit.overview, language),
    capabilities: unit.capabilities.map((capability) => localized(capability, language)),
    number: String(index + 1).padStart(2, '0'),
    total: String(units.length).padStart(2, '0'),
    t,
    common,
  };
}

/* Ledger — investment: a numbered record with tabular rows. */
export function LedgerUnit({ unit, index, t, common }) {
  const v = useUnitView(unit, index, t, common);
  return (
    <>
      <section className="unit-hero unit-hero--ledger">
        <div className={CONTAINER}>
          <UnitBreadcrumb unit={unit} common={common} />
          <div className="unit-hero__grid">
            <div className="unit-hero__copy">
              <span className="eyebrow enter-once">{v.categoryLabel}</span>
              <p className="unit-hero__numeral enter-once">
                {v.number}<span> / {v.total}</span>
              </p>
              <h1 className="display display--hero enter-once">{unit.name}</h1>
              <p className="lead enter-once">{v.desc}</p>
            </div>
            <UnitFigure image={v.theme.hero} className="unit-hero__figure figure--portrait" priority />
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.overviewHeading} />
          <dl className="unit-ledger">
            <div className="unit-ledger__row">
              <dt>{t.units.overviewHeading}</dt>
              <dd className="lead">{v.overview}</dd>
            </div>
            <div className="unit-ledger__row">
              <dt>{v.sectorLabel}</dt>
              <dd className="prose">{localized(getSectorByKey(unit.sector).desc, v.language)}</dd>
            </div>
          </dl>
          {unit.status === 'draft' ? <DraftNote /> : null}
        </div>
      </section>

      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.capabilitiesHeading} />
          <ol className="unit-ledger__caps">
            {v.capabilities.map((capability, position) => (
              <li key={capability} className="unit-ledger__cap">
                <span aria-hidden="true">{String(position + 1).padStart(2, '0')}</span>
                <p className="prose">{capability}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="unit-band">
        <div className={CONTAINER}>
          <UnitFigure image={v.theme.band} className="unit-band__figure figure--wide" />
        </div>
      </section>

      <UnitEnrichment unit={unit} t={t} variant="ledger" />
      <UnitClosing t={t} ecosystem={v.ecosystem} tone="paper" />
    </>
  );
}

/* Site — property: photograph first, then a plan-like fact grid. */
export function SiteUnit({ unit, index, t, common }) {
  const v = useUnitView(unit, index, t, common);
  return (
    <>
      <section className="unit-hero unit-hero--site">
        <div className={CONTAINER}>
          <UnitBreadcrumb unit={unit} common={common} />
          <UnitFigure image={v.theme.hero} className="unit-hero__figure figure--wide" priority />
          <div className="unit-hero__grid">
            <div className="unit-hero__copy">
              <span className="eyebrow enter-once">{v.categoryLabel}</span>
              <h1 className="display display--hero enter-once">{unit.name}</h1>
              <p className="lead enter-once">{v.desc}</p>
            </div>
            <div className="unit-hero__aside">
              <span className="unit-hero__numeral">{v.number}<span> / {v.total}</span></span>
              <span className="unit-hero__aside-label">{v.sectorLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.overviewHeading} />
          <div className="unit-site__grid">
            <div>
              <p className="lead">{v.overview}</p>
              {unit.status === 'draft' ? <DraftNote /> : null}
            </div>
            <ul className="unit-site__facts">
              <li><span>{v.categoryLabel}</span><strong>{v.sectorLabel}</strong></li>
              <li>
                <span>{v.ecosystem ? localized(v.ecosystem.name, v.language) : unit.ecosystem}</span>
                <strong>
                  {v.ecosystem
                    ? localized(v.ecosystem.theme.label, v.language)
                    : v.categoryLabel}
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.capabilitiesHeading} />
          <ul className="unit-cap-tiles">
            {v.capabilities.map((capability) => (
              <li key={capability} className="unit-cap-tile">
                <Icon name="check_circle" size={20} color="#b12600" aria-hidden="true" />
                <p className="prose">{capability}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <UnitEnrichment unit={unit} t={t} variant="site" />
      <UnitClosing t={t} ecosystem={v.ecosystem} tone="paper" />
    </>
  );
}

/* Protocol — technology: an ink-toned numbered dossier. */
export function ProtocolUnit({ unit, index, t, common }) {
  const v = useUnitView(unit, index, t, common);
  return (
    <>
      <section className="unit-hero unit-hero--protocol section--ink">
        <div className={CONTAINER}>
          <UnitBreadcrumb unit={unit} common={common} />
          <div className="unit-hero__grid">
            <div className="unit-hero__copy">
              <span className="eyebrow enter-once">{v.categoryLabel}</span>
              <p className="unit-hero__numeral enter-once">
                {v.number}<span> / {v.total}</span>
              </p>
              <h1 className="display display--hero enter-once">{unit.name}</h1>
              <p className="lead lead--light enter-once">{v.desc}</p>
            </div>
            <UnitFigure image={v.theme.hero} className="unit-hero__figure figure--square" priority />
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.overviewHeading} />
          <p className="lead">{v.overview}</p>
          {unit.status === 'draft' ? <DraftNote /> : null}
        </div>
      </section>

      <section className="section section--ink">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.capabilitiesHeading} darkTheme />
          <ol className="unit-protocol__list">
            {v.capabilities.map((capability, position) => (
              <li key={capability} className="unit-protocol__item">
                <span className="unit-protocol__index" aria-hidden="true">
                  {String(position + 1).padStart(2, '0')}
                </span>
                <p className="prose prose--light">{capability}</p>
                <Icon name="arrow_forward" size={18} color="#ffb4a3" aria-hidden="true" />
              </li>
            ))}
          </ol>
          {unit.status === 'draft' ? <DraftNote /> : null}
        </div>
      </section>

      <UnitEnrichment unit={unit} t={t} variant="protocol" />
      <UnitClosing t={t} ecosystem={v.ecosystem} tone="paper" />
    </>
  );
}

/* Menu — food: a card-like list with quiet dotted leaders. */
export function MenuUnit({ unit, index, t, common }) {
  const v = useUnitView(unit, index, t, common);
  return (
    <>
      <section className="unit-hero unit-hero--menu">
        <div className={CONTAINER}>
          <UnitBreadcrumb unit={unit} common={common} />
          <div className="unit-hero__grid">
            <div className="unit-hero__copy">
              <span className="eyebrow enter-once">{v.categoryLabel}</span>
              <h1 className="display display--hero enter-once">{unit.name}</h1>
              <p className="lead enter-once">{v.desc}</p>
              <p className="unit-hero__numeral enter-once">
                {v.number}<span> / {v.total}</span>
              </p>
            </div>
            <UnitFigure image={v.theme.hero} className="unit-hero__figure figure--square" priority />
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.overviewHeading} />
          <p className="unit-menu__lead">{v.overview}</p>
          {unit.status === 'draft' ? <DraftNote /> : null}
        </div>
      </section>

      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.capabilitiesHeading} />
          <ul className="unit-menu__list">
            {v.capabilities.map((capability) => (
              <li key={capability} className="unit-menu__item">
                <span className="unit-menu__dot" aria-hidden="true" />
                <span className="prose">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <UnitEnrichment unit={unit} t={t} variant="menu" />
      <UnitClosing t={t} ecosystem={v.ecosystem} tone="paper" />
    </>
  );
}

/* Court — lifestyle: a poster-like name with a wide image strip. */
export function CourtUnit({ unit, index, t, common }) {
  const v = useUnitView(unit, index, t, common);
  return (
    <>
      <section className="unit-hero unit-hero--court">
        <div className={CONTAINER}>
          <UnitBreadcrumb unit={unit} common={common} />
          <div className="unit-hero__grid">
            <div className="unit-hero__copy">
              <span className="eyebrow enter-once">{v.categoryLabel}</span>
              <h1 className="display display--hero enter-once">{unit.name}</h1>
              <p className="lead enter-once">{v.desc}</p>
            </div>
            <div className="unit-hero__aside">
              <span className="unit-hero__numeral">{v.number}<span> / {v.total}</span></span>
              <span className="unit-hero__aside-label">{v.sectorLabel}</span>
            </div>
          </div>
          <UnitFigure image={v.theme.hero} className="unit-hero__figure figure--wide" priority />
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.overviewHeading} />
          <div className="unit-court__grid">
            <p className="lead">{v.overview}</p>
            <p className="unit-court__mark" aria-hidden="true">
              {v.ecosystem ? localized(v.ecosystem.name, v.language) : unit.ecosystem}
            </p>
          </div>
          {unit.status === 'draft' ? <DraftNote /> : null}
        </div>
      </section>

      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.capabilitiesHeading} />
          <ul className="unit-court__strip">
            {v.capabilities.map((capability, position) => (
              <li key={capability} className="unit-court__item">
                <span aria-hidden="true">{String(position + 1).padStart(2, '0')}</span>
                <p className="prose">{capability}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <UnitEnrichment unit={unit} t={t} variant="court" />
      <UnitClosing t={t} ecosystem={v.ecosystem} tone="paper" />
    </>
  );
}
