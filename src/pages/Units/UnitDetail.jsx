import React from 'react';
import { Link, useParams } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { localized } from '@/utils/localized';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FinalCta } from '@/components/ui/FinalCta';
import { NotFound } from '@/pages/NotFound/NotFound';
import { CONTAINER } from '@/constants/layout';
import { getEcosystemByKey } from '@/data/ecosystems';
import { getUnitBySlug, getUnitCategory } from '@/data/units';
import { formatAddress } from '@/data/company';
import { useUnitsStrings } from './useUnitsStrings';

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
      <Breadcrumb
        items={[
          { label: common.nav.home, to: '/' },
          { label: common.nav.units, to: '/units' },
          { label: unit.name },
        ]}
      />
      <section className="relative mt-6 flex min-h-[42vh] items-end overflow-hidden bg-[var(--color-inverse-surface)] pb-12 pt-8">
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="max-w-[780px]">
            <span className="mb-3 block font-[var(--font-display)] text-[12px] font-bold uppercase tracking-[1.5px] text-[#ffb4a3]">{category ? localized(category.label, language) : ''}</span>
            <div className="mb-4 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-[rgba(255,180,163,0.15)]"><Icon name={unit.icon} size={26} color="#ffb4a3" /></span>
              <h1 className="m-0 font-[var(--font-display)] text-[38px] font-bold leading-[46px] text-white md:text-[56px] md:leading-[64px]">{unit.name}</h1>
            </div>
            <p className="m-0 font-[var(--font-body)] text-[17px] leading-[27px] text-[var(--color-surface-variant)]">{localized(unit.desc, language)}</p>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className={CONTAINER}>
          <AnimatedReveal animation="up" delay={0}>
            <div className="mx-auto max-w-[860px]">
              <h2 className="m-0 mb-4 font-[var(--font-display)] text-[28px] font-bold leading-[36px] text-[var(--color-on-background)] md:text-[36px] md:leading-[44px]">{t.units.overviewHeading}</h2>
              <p className="m-0 font-[var(--font-body)] text-[16px] leading-[27px] text-[var(--color-secondary)]">{localized(unit.overview, language)}</p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section section--surface-low">
        <div className={CONTAINER}>
          <AnimatedReveal animation="up" delay={0}>
            <div className="mx-auto max-w-[860px]">
              <h2 className="m-0 mb-6 font-[var(--font-display)] text-[28px] font-bold leading-[36px] text-[var(--color-on-background)] md:text-[36px] md:leading-[44px]">{t.units.capabilitiesHeading}</h2>
              <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
                {unit.capabilities.map((capability) => (
                  <li key={capability.en} className="flex items-center gap-3 rounded-xl border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-lowest)] px-5 py-4">
                    <Icon name="check_circle" size={19} color="#b12600" />
                    <span className="font-[var(--font-body)] text-[15px] leading-[23px] text-[var(--color-on-background)]">{localized(capability, language)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className={CONTAINER}>
          <AnimatedReveal animation="up" delay={0}>
            <div className="mx-auto max-w-[860px] rounded-2xl border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-lowest)] p-7 md:p-9">
              <h2 className="m-0 mb-4 font-[var(--font-display)] text-[26px] font-bold leading-[34px] text-[var(--color-on-background)]">{t.units.locationHeading}</h2>
              <p className="m-0 mb-4 font-[var(--font-body)] text-[15px] leading-[25px] text-[var(--color-secondary)]">{t.units.locationLead}</p>
              <p className="m-0 mb-6 flex items-start gap-2 font-[var(--font-body)] text-[15px] leading-[25px] text-[var(--color-on-background)]">
                <Icon name="location_on" size={18} color="#b12600" />
                <span>{formatAddress({ includeCountry: true })}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/units" className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-2 font-[var(--font-display)] text-[14px] font-bold text-white no-underline transition-colors hover:bg-[var(--color-primary-container)]">
                  <Icon name="arrow_forward" size={16} color="#ffffff" className="rotate-180" />
                  <span>{t.units.backToCatalog}</span>
                </Link>
                {ecosystem && (
                  <Link to={`/ecosystems/${ecosystem.key}`} className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border-[1.5px] border-[var(--color-primary)] px-6 py-2 font-[var(--font-display)] text-[14px] font-bold text-[var(--color-primary)] no-underline transition-colors hover:bg-[rgba(177,38,0,0.08)]">
                    <span>{t.units.districtLink}</span>
                    <Icon name="arrow_forward" size={16} color="#b12600" />
                  </Link>
                )}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>
      <FinalCta {...t.units.finalCta} />
    </>
  );
}

export default UnitDetail;
