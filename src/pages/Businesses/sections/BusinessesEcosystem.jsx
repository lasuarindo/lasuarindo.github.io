import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientDivider } from '@/components/ui/GradientDivider';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { getUnitBySlug } from '@/data/units';
import { useBusinessesStrings } from '../useBusinessesStrings';

// Three examples only; the full twelve live on /ecosystems/t46 and /units.
const TEASER_SLUGS = ['pro', 'win', 'agt'];

/** Points visitors to the district and to unit detail pages. */
export function BusinessesEcosystem() {
  const t = useBusinessesStrings();
  const { language } = useLanguage();

  return (
    <section className="section section--surface-low">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <span className="mb-[10px] block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.businesses.ecosystemBadge}</span>
            <h2 className="mb-4 font-[var(--font-display)] text-[34px] font-bold leading-[44px] text-[var(--color-on-background)] max-[767px]:text-[28px] max-[767px]:leading-[36px]">{t.businesses.ecosystemHeading}</h2>
            <GradientDivider center />
            <p className="font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{t.businesses.ecosystemDesc}</p>
          </div>
        </AnimatedReveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TEASER_SLUGS.map((slug, idx) => {
            const unit = getUnitBySlug(slug);
            return (
              <AnimatedReveal key={slug} animation="up" delay={100 + idx * 80} hover="lift" className="h-full">
                <Link
                  to={`/units/${slug}`}
                  className="flex h-full min-h-[120px] items-start gap-4 rounded-2xl border border-[rgba(228,190,181,0.2)] bg-[var(--color-surface-container-lowest)] p-5 no-underline shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-colors hover:border-[var(--color-primary)]"
                >
                  <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(177,38,0,0.1)]">
                    <Icon name={unit.icon} size={22} color="#b12600" />
                  </div>
                  <div>
                    <h3 className="m-0 mb-1 font-[var(--font-display)] text-[16px] font-bold leading-[22px] text-[var(--color-on-background)]">{unit.name}</h3>
                    <p className="m-0 font-[var(--font-body)] text-[13px] leading-[20px] text-[var(--color-secondary)]">{localized(unit.desc, language)}</p>
                  </div>
                </Link>
              </AnimatedReveal>
            );
          })}
        </div>
        <AnimatedReveal animation="up" delay={320}>
          <div className="mt-10 text-center">
            <Link
              to="/ecosystems/t46"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-[var(--color-primary)] px-7 py-3 font-[var(--font-display)] text-[15px] font-bold text-white no-underline transition-colors duration-200 hover:bg-[var(--color-primary-container)]"
            >
              <span>{t.businesses.ecosystemCta}</span>
              <Icon name="arrow_forward" size={18} color="#ffffff" />
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default BusinessesEcosystem;
