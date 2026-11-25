import React from 'react';
import { Link, useParams } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftNote } from '@/components/ui/DraftBadge';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FinalCta } from '@/components/ui/FinalCta';
import { NotFound } from '@/pages/NotFound/NotFound';
import { CONTAINER } from '@/constants/layout';
import { getEcosystemByKey } from '@/data/ecosystems';
import { getUnitBySlug, getUnitCategory } from '@/data/units';
import { formatAddress } from '@/data/company';
import { useUnitsStrings } from './useUnitsStrings';
import { paths, routePaths } from '@/app/paths';

/** One component renders all twelve unit detail routes. */
export function UnitDetail() {
  const { slug } = useParams();
  const t = useUnitsStrings();
  const common = useStrings({ id: idCommon, en: enCommon });
  const { language } = useLanguage();
  const unit = getUnitBySlug(slug);

  if (!unit) return <NotFound />;

  const category = getUnitCategory(unit.category);
  const ecosystem = getEcosystemByKey(unit.ecosystem);

  return (
    <>
      <section className="cover cover--light cover--text">
        <div className="cover__copy">
          <Breadcrumb
            inside
            items={[
              { label: common.nav.home, to: '/' },
              { label: common.nav.units, to: '/units' },
              { label: unit.name },
            ]}
          />
          <span className="eyebrow enter-once">
            {category ? localized(category.label, language) : ''}
          </span>
          <div className="mt-4 flex items-center gap-4 enter-once" style={{ animationDelay: '60ms' }}>
            <span className="flex h-12 w-12 items-center justify-center border border-[var(--color-line)]">
              <Icon name={unit.icon} size={26} color="#b12600" />
            </span>
            <h1 className="display display--hero">{unit.name}</h1>
          </div>
          <p className="lead enter-once" style={{ animationDelay: '120ms' }}>
            {localized(unit.desc, language)}
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.overviewHeading} />
          <div className="max-w-[860px]">
            <p className="lead">{localized(unit.overview, language)}</p>
            {unit.status === 'draft' ? <DraftNote /> : null}
          </div>
        </div>
      </section>

      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.capabilitiesHeading} />
          <ul className="grid-3 list-none p-0">
            {unit.capabilities.map((capability) => (
              <li key={capability.en} className="card">
                <Icon name="check_circle" size={20} color="#b12600" />
                <p className="prose mt-3">{localized(capability, language)}</p>
              </li>
            ))}
          </ul>
          {unit.status === 'draft' ? <DraftNote /> : null}
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.draftHeading} />
          <p className="lead">{t.units.draftLead}</p>
          <DraftNote />
        </div>
      </section>

      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.units.locationHeading} />
          <p className="lead">{t.units.locationLead}</p>
          <p className="prose mt-4">
            <Icon name="location_on" size={18} color="#b12600" /> {formatAddress({ includeCountry: true })}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={paths.units} className="btn btn--solid">
              <Icon name="arrow_forward" size={18} color="#ffffff" className="rotate-180" />
              {t.units.backToCatalog}
            </Link>
            {ecosystem ? (
              <Link to={routePaths.ecosystem(ecosystem.key)} className="btn btn--outline">
                {t.units.districtLink}
                <Icon name="arrow_forward" size={18} color="#b12600" />
              </Link>
            ) : null}
          </div>
        </div>
      </section>
      <FinalCta {...t.units.finalCta} />
    </>
  );
}

export default UnitDetail;
