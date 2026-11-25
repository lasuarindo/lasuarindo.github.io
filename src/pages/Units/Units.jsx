import React, { useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { localized } from '@/utils/localized';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientText } from '@/components/ui/GradientText';
import { Icon } from '@/components/ui/Icon';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
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
      <section className="relative mt-6 flex min-h-[40vh] items-end overflow-hidden bg-[var(--color-inverse-surface)] pb-12 pt-8">
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="max-w-[760px]">
            <h1 className="m-0 font-[var(--font-display)] text-[38px] font-bold leading-[46px] text-white md:text-[56px] md:leading-[64px]">
              {t.units.heroTitle1}<br /><GradientText>{t.units.heroTitle2}</GradientText>
            </h1>
            <div className="mb-5 mt-6 h-1 w-16 rounded-[2px] bg-[#ffb4a3]" />
            <p className="m-0 font-[var(--font-body)] text-[16px] leading-[27px] text-[var(--color-surface-variant)]">{t.units.heroLead}</p>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className={CONTAINER}>
          <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label={t.units.gridHeading}>
            <button
              type="button"
              aria-pressed={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={`min-h-[44px] rounded-full border px-5 py-2 font-[var(--font-display)] text-[13px] font-bold transition-colors ${activeCategory === 'all' ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-[rgba(177,38,0,0.3)] bg-transparent text-[var(--color-primary)]'}`}
            >
              {t.units.filterAll}
            </button>
            {unitCategories.map((category) => (
              <button
                key={category.key}
                type="button"
                aria-pressed={activeCategory === category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`min-h-[44px] rounded-full border px-5 py-2 font-[var(--font-display)] text-[13px] font-bold transition-colors ${activeCategory === category.key ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-[rgba(177,38,0,0.3)] bg-transparent text-[var(--color-primary)]'}`}
              >
                {localized(category.label, language)}
              </button>
            ))}
          </div>
          <h2 className="mb-6 font-[var(--font-display)] text-[24px] font-bold leading-[32px] text-[var(--color-on-background)]">{t.units.gridHeading}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((unit, idx) => (
              <AnimatedReveal key={unit.slug} animation="up" delay={80 + (idx % 3) * 70} hover="lift" className="h-full">
                <Link
                  to={`/units/${unit.slug}`}
                  aria-label={`${t.units.viewUnit}: ${unit.name}`}
                  className="flex h-full min-h-[130px] items-start gap-4 rounded-2xl border border-[rgba(228,190,181,0.3)] bg-[var(--color-surface-container-lowest)] p-5 no-underline shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-colors hover:border-[var(--color-primary)]"
                >
                  <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(177,38,0,0.1)]"><Icon name={unit.icon} size={22} color="#b12600" /></div>
                  <div>
                    <h3 className="m-0 mb-1 font-[var(--font-display)] text-[16px] font-bold leading-[22px] text-[var(--color-on-background)]">{unit.name}</h3>
                    <p className="m-0 font-[var(--font-body)] text-[13px] leading-[20px] text-[var(--color-secondary)]">{localized(unit.desc, language)}</p>
                  </div>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCta {...t.units.finalCta} />
    </>
  );
}

export default Units;
