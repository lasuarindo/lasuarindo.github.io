import React from 'react';
import { Link, useParams } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftBadge, DraftNote } from '@/components/ui/DraftBadge';
import { FinalCta } from '@/components/ui/FinalCta';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { NotFound } from '@/pages/NotFound/NotFound';
import { CONTAINER } from '@/constants/layout';
import { getEcosystemByKey } from '@/data/ecosystems';
import { unitCategories } from '@/data/units';
import { company, formatAddress } from '@/data/company';
import { useEcosystemsStrings } from './useEcosystemsStrings';

/** One component for every district in data/ecosystems.js. */
export function District() {
  const { key } = useParams();
  const t = useEcosystemsStrings();
  const common = useStrings({ id: idCommon, en: enCommon });
  const { language } = useLanguage();
  const ecosystem = getEcosystemByKey(key);

  if (!ecosystem) return <NotFound />;

  const isDraft = ecosystem.status === 'draft';
  const fullAddress = ecosystem.addressRef === 'company.address'
    ? formatAddress({ includeCountry: true })
    : null;
  const mapUrl = fullAddress
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`
    : null;
  const d = t.ecosystems.district;

  return (
    <>
      <section className="cover cover--light cover--text">
        <div className="cover__copy">
          <Breadcrumb
            inside
            items={[
              { label: common.nav.home, to: '/' },
              { label: common.nav.ecosystems, to: '/ecosystems' },
              { label: localized(ecosystem.name, language) },
            ]}
          />
          <span className="eyebrow enter-once" style={{ color: ecosystem.theme.accent }}>
            {localized(ecosystem.theme.label, language)}
          </span>
          <h1 className="display display--hero enter-once" style={{ animationDelay: '60ms' }}>
            {localized(ecosystem.name, language)}
          </h1>
          {isDraft ? <DraftBadge className="mt-4" /> : null}
          <p className="lead enter-once" style={{ animationDelay: '120ms' }}>
            {localized(ecosystem.intro, language)}
          </p>
          {fullAddress ? (
            <p className="prose enter-once mt-4" style={{ animationDelay: '160ms' }}>
              <Icon name="location_on" size={17} color="#b12600" /> {fullAddress}
            </p>
          ) : null}
        </div>
      </section>

      {isDraft ? (
        <section className="section section--neutral">
          <div className={CONTAINER}>
            <SectionHeader titlePrimary={t.ecosystems.districtsHeading} />
            <DraftNote>{t.ecosystems.draftNote}</DraftNote>
          </div>
        </section>
      ) : (
        <>
          <section className="section section--paper">
            <div className={CONTAINER}>
              <SectionHeader titlePrimary={d.categoryHeading} />
              <div className="grid-3">
                {unitCategories.map((category) => (
                  <div key={category.key} className="card">
                    <h3 className="display display--card card__title">
                      {localized(category.label, language)}
                    </h3>
                    <p className="prose">{category.units.length} {d.unitCountLabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section section--neutral">
            <div className={CONTAINER}>
              <SectionHeader titlePrimary={d.unitsHeading} />
              <div className="flex flex-col gap-10">
                {unitCategories.map((category) => (
                  <div key={category.key}>
                    <h3 className="mb-5 font-[var(--font-display)] text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                      {localized(category.label, language)}
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {category.units.map((unit) => (
                        <Link
                          key={unit.slug}
                          to={`/units/${unit.slug}`}
                          aria-label={`${d.viewUnit}: ${unit.name}`}
                          className="card no-underline"
                        >
                          <Icon name={unit.icon} size={22} color="#b12600" />
                          <h4 className="display display--card card__title">{unit.name}</h4>
                          <p className="prose">{localized(unit.desc, language)}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="section section--paper">
        <div className={CONTAINER}>
          <h2 className="display display--section">{d.locationHeading}</h2>
          <div className="rule" />
          <p className="lead">{d.locationLead}</p>
          {fullAddress ? (
            <p className="prose mt-4">
              <Icon name="location_on" size={18} color="#b12600" /> {fullAddress}
            </p>
          ) : null}
          {isDraft ? <DraftNote>{t.ecosystems.draftNote}</DraftNote> : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {mapUrl ? (
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn--solid">
                {d.mapLink}
                <Icon name="arrow_forward" size={18} color="#ffffff" />
              </a>
            ) : null}
            <Link to="/units" className="btn btn--outline">
              {d.allUnits}
            </Link>
          </div>
          <p className="prose mt-6">{company.email}</p>
        </div>
      </section>

      <FinalCta {...t.ecosystems.finalCta} />
    </>
  );
}

export default District;
