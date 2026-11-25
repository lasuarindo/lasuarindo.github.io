import React from 'react';
import { Link, useParams } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { localized } from '@/utils/localized';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
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

  const fullAddress = formatAddress({ includeCountry: true });
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const d = t.ecosystems.district;

  return (
    <>
      <Breadcrumb
        items={[
          { label: common.nav.home, to: '/' },
          { label: common.nav.ecosystems, to: '/ecosystems' },
          { label: ecosystem.name },
        ]}
      />
      <section className="relative mt-6 flex min-h-[44vh] items-end overflow-hidden bg-[var(--color-inverse-surface)] pb-12 pt-10">
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="max-w-[760px]">
            <span className="mb-3 block font-[var(--font-display)] text-[12px] font-bold uppercase tracking-[1.5px] text-[#ffb4a3]">{d.eyebrow}</span>
            <h1 className="m-0 font-[var(--font-display)] text-[40px] font-bold leading-[48px] text-white md:text-[60px] md:leading-[68px]">{ecosystem.name}</h1>
            <div className="mb-5 mt-6 h-1 w-16 rounded-[2px] bg-[#ffb4a3]" />
            <p className="m-0 font-[var(--font-body)] text-[16px] leading-[27px] text-[var(--color-surface-variant)]">{localized(ecosystem.intro, language)}</p>
            <p className="m-0 mt-4 flex items-start gap-2 font-[var(--font-body)] text-[14px] leading-[23px] text-[rgba(226,226,222,0.85)]">
              <Icon name="location_on" size={17} color="#ffb4a3" />
              <span>{fullAddress}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className={CONTAINER}>
          <AnimatedReveal animation="up" delay={0}>
            <div className="mx-auto mb-10 max-w-[720px] text-center">
              <h2 className="m-0 font-[var(--font-display)] text-[28px] font-bold leading-[36px] text-[var(--color-on-background)] md:text-[38px] md:leading-[46px]">{d.categoryHeading}</h2>
            </div>
          </AnimatedReveal>
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-5 md:grid-cols-3">
            {unitCategories.map((category, idx) => (
              <AnimatedReveal key={category.key} animation="up" delay={100 + idx * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-lowest)] p-6">
                  <h3 className="m-0 mb-3 font-[var(--font-display)] text-[19px] font-bold leading-[25px] text-[var(--color-on-background)]">{localized(category.label, language)}</h3>
                  <p className="m-0 font-[var(--font-body)] text-[14px] leading-[22px] text-[var(--color-secondary)]">{category.units.length} {d.unitCountLabel}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface-low">
        <div className={CONTAINER}>
          <AnimatedReveal animation="up" delay={0}>
            <h2 className="mb-9 font-[var(--font-display)] text-[28px] font-bold leading-[36px] text-[var(--color-on-background)] md:text-[36px] md:leading-[44px]">{d.unitsHeading}</h2>
          </AnimatedReveal>
          <div className="flex flex-col gap-10">
            {unitCategories.map((category) => (
              <div key={category.key}>
                <h3 className="mb-5 font-[var(--font-display)] text-[17px] font-bold uppercase leading-[23px] tracking-[0.6px] text-[var(--color-primary)]">{localized(category.label, language)}</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.units.map((unit, idx) => (
                    <AnimatedReveal key={unit.slug} animation="up" delay={(idx % 3) * 70} hover="lift" className="h-full">
                      <Link
                        to={`/units/${unit.slug}`}
                        aria-label={`${d.viewUnit}: ${unit.name}`}
                        className="flex h-full min-h-[120px] items-start gap-4 rounded-2xl border border-[rgba(228,190,181,0.25)] bg-[var(--color-surface-container-lowest)] p-5 no-underline shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-colors hover:border-[var(--color-primary)]"
                      >
                        <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px] bg-[rgba(177,38,0,0.1)]"><Icon name={unit.icon} size={21} color="#b12600" /></div>
                        <div>
                          <h4 className="m-0 mb-1 font-[var(--font-display)] text-[16px] font-bold leading-[22px] text-[var(--color-on-background)]">{unit.name}</h4>
                          <p className="m-0 font-[var(--font-body)] text-[13px] leading-[20px] text-[var(--color-secondary)]">{localized(unit.desc, language)}</p>
                        </div>
                      </Link>
                    </AnimatedReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className={CONTAINER}>
          <AnimatedReveal animation="up" delay={0}>
            <div className="mx-auto max-w-[860px] rounded-2xl border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-lowest)] p-7 md:p-9">
              <h2 className="m-0 mb-4 font-[var(--font-display)] text-[26px] font-bold leading-[34px] text-[var(--color-on-background)]">{d.locationHeading}</h2>
              <p className="m-0 mb-4 font-[var(--font-body)] text-[15px] leading-[25px] text-[var(--color-secondary)]">{d.locationLead}</p>
              <p className="m-0 mb-6 flex items-start gap-2 font-[var(--font-body)] text-[15px] leading-[25px] text-[var(--color-on-background)]">
                <Icon name="location_on" size={18} color="#b12600" />
                <span>{fullAddress}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-2 font-[var(--font-display)] text-[14px] font-bold text-white no-underline transition-colors hover:bg-[var(--color-primary-container)]">
                  <span>{d.mapLink}</span>
                  <Icon name="arrow_forward" size={16} color="#ffffff" />
                </a>
                <Link to="/units" className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border-[1.5px] border-[var(--color-primary)] px-6 py-2 font-[var(--font-display)] text-[14px] font-bold text-[var(--color-primary)] no-underline transition-colors hover:bg-[rgba(177,38,0,0.08)]">
                  <span>{d.allUnits}</span>
                </Link>
              </div>
              <p className="m-0 mt-6 font-[var(--font-body)] text-[13px] text-[var(--color-secondary)]">{company.email}</p>
            </div>
          </AnimatedReveal>
        </div>
      </section>
      <FinalCta {...t.ecosystems.finalCta} />
    </>
  );
}

export default District;
