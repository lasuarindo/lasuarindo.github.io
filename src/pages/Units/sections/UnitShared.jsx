import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftBadge, DraftNote } from '@/components/ui/DraftBadge';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CONTAINER } from '@/constants/layout';
import { paths, routePaths } from '@/app/paths';
import { getEcosystemByKey } from '@/data/ecosystems';
import { getSectorByKey } from '@/data/sectors';
import { formatAddress } from '@/data/company';
import { getUnitCategory, units } from '@/data/units';
import { getUnitNote } from '@/data/unitEnrichment';

/** The same breadcrumb sits at the top of every themed dossier. */
export function UnitBreadcrumb({ unit, common }) {
  return (
    <Breadcrumb
      inside
      items={[
        { label: common.nav.home, to: paths.home },
        { label: common.nav.units, to: paths.units },
        { label: unit.name },
      ]}
    />
  );
}

/** Decorative group imagery; `priority` is used only for the hero frame. */
export function UnitFigure({ image, className = '', priority = false }) {
  return (
    <figure className={`figure ${className}`.trim()}>
      <img
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    </figure>
  );
}

/**
 * Illustrative enrichment. Every fact here is read from the public catalogue;
 * the prose is explicitly marked DRAFT so it cannot be mistaken for a verified
 * company statement. `variant` changes composition inside the shared editorial
 * system — it never introduces a second design language.
 */
export function UnitEnrichment({ unit, t, variant = 'ledger', dark = false }) {
  const { language } = useLanguage();
  const category = getUnitCategory(unit.category);
  const sector = getSectorByKey(unit.sector);
  const ecosystem = getEcosystemByKey(unit.ecosystem);
  const note = getUnitNote(unit.slug);
  const capabilities = unit.capabilities.map((capability) => localized(capability, language));
  const sameSector = units.filter(
    (candidate) => candidate.sector === unit.sector && candidate.slug !== unit.slug,
  );
  const related = sameSector.length
    ? sameSector
    : units
        .filter(
          (candidate) => candidate.category === unit.category && candidate.slug !== unit.slug,
        )
        .slice(0, 3);

  const values = {
    name: unit.name,
    cap1: capabilities[0] || '',
    cap2: capabilities[1] || '',
    note: note ? localized(note, language) : '',
    category: category ? localized(category.label, language) : '',
    sector: sector ? localized(sector.title, language) : '',
    district: ecosystem ? localized(ecosystem.name, language) : '',
  };

  const steps = [
    t('units.enrichment.step1', values),
    t('units.enrichment.step2', values),
    t('units.enrichment.step3', values),
  ];
  const pending = [
    t('units.enrichment.pending1'),
    t('units.enrichment.pending2'),
    t('units.enrichment.pending3'),
  ];

  return (
    <section className={`section ${dark ? 'section--ink' : 'section--paper'}`}>
      <div className={CONTAINER}>
        <SectionHeader
          titlePrimary={t.units.enrichment.heading}
          subtitle={t.units.enrichment.lead}
          darkTheme={dark}
        />
        <div className={`unit-notes unit-notes--${variant}`}>
          <div className="unit-notes__head">
            <DraftBadge />
            <span className="unit-notes__motif">{values.sector}</span>
          </div>

          <article className="unit-note">
            <h3 className="unit-note__title">{t.units.enrichment.focusLabel}</h3>
            <p className="prose">{t('units.enrichment.focus', values)}</p>
          </article>

          <article className="unit-note">
            <h3 className="unit-note__title">{t.units.enrichment.contextLabel}</h3>
            <p className="prose">{t('units.enrichment.context', values)}</p>
          </article>

          <div className="unit-steps">
            <h3 className="unit-note__title">{t.units.enrichment.stepsLabel}</h3>
            <ol className="unit-steps__list">
              {steps.map((step, index) => (
                <li key={step} className="unit-steps__item">
                  <span className="unit-steps__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="prose">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="unit-pending">
            <h3 className="unit-note__title">{t.units.enrichment.pendingLabel}</h3>
            <ul className="unit-pending__list">
              {pending.map((item) => (
                <li key={item} className="prose">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="unit-related">
            <h3 className="unit-note__title">{t.units.enrichment.relatedLabel}</h3>
            <ul className="unit-related__list">
              {related.map((candidate) => (
                <li key={candidate.slug}>
                  <Link className="link-arrow" to={routePaths.unit(candidate.slug)}>
                    <span>{candidate.name}</span>
                    <Icon name="arrow_forward" size={16} />
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="link-arrow unit-related__sector" to={paths.businesses}>
              <span>{t.units.enrichment.sectorLinkLabel}</span>
              <Icon name="arrow_forward" size={16} />
            </Link>
          </div>
        </div>
        <DraftNote>{t.units.enrichment.note}</DraftNote>
      </div>
    </section>
  );
}

/** Location and the two stable exits appear once on every unit dossier. */
export function UnitClosing({ t, ecosystem, tone = 'neutral' }) {
  const { language } = useLanguage();
  const district = ecosystem ? localized(ecosystem.name, language) : '';
  const locationValues = {
    district,
    districtLabel: ecosystem ? localized(ecosystem.theme.label, language) : '',
    city: t.units.locationCity,
    province: t.units.locationProvince,
  };

  return (
    <section className={`section section--${tone}`}>
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={t.units.locationHeading} />
        <p className="lead">{t('units.locationLead', locationValues)}</p>
        <p className="prose unit-closing__address">
          <Icon name="location_on" size={18} color="#b12600" aria-hidden="true" />
          <span>{formatAddress({ includeCountry: true })}</span>
        </p>
        <div className="unit-closing__actions">
          <Link to={paths.units} className="btn btn--solid">
            <Icon name="arrow_forward" size={18} color="#ffffff" className="rotate-180" aria-hidden="true" />
            {t.units.backToCatalog}
          </Link>
          {ecosystem ? (
            <Link to={routePaths.ecosystem(ecosystem.key)} className="btn btn--outline">
              {t('units.districtLink', { district })}
              <Icon name="arrow_forward" size={18} color="#b12600" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
