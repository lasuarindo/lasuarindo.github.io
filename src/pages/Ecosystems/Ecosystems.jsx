import React from 'react';
import { Link } from 'react-router';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { FinalCta } from '@/components/ui/FinalCta';
import { CONTAINER } from '@/constants/layout';
import { ecosystems } from '@/data/ecosystems';
import { formatAddress } from '@/data/company';
import { useEcosystemsStrings } from './useEcosystemsStrings';

/** Lightweight index: the parent URL for every district, now and future. */
export function Ecosystems() {
  const t = useEcosystemsStrings();

  return (
    <>
      <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-[var(--color-inverse-surface)] pb-14 pt-[140px]">
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="max-w-[720px]">
            <h1 className="m-0 font-[var(--font-display)] text-[34px] font-bold leading-[42px] text-white max-[379px]:text-[28px] md:text-[52px] md:leading-[60px]">
              {t.ecosystems.heroTitle1}<br /><GradientText>{t.ecosystems.heroTitle2}</GradientText>
            </h1>
            <div className="mb-5 mt-6 h-1 w-16 rounded-[2px] bg-[#ffb4a3]" />
            <p className="m-0 font-[var(--font-body)] text-[17px] leading-[28px] text-[var(--color-surface-variant)]">{t.ecosystems.heroLead}</p>
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className={CONTAINER}>
          <AnimatedReveal animation="up" delay={0}>
            <h2 className="mb-8 font-[var(--font-display)] text-[28px] font-bold leading-[36px] text-[var(--color-on-background)] md:text-[36px] md:leading-[44px]">{t.ecosystems.districtsHeading}</h2>
          </AnimatedReveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ecosystems.map((ecosystem, idx) => (
              <AnimatedReveal key={ecosystem.key} animation="up" delay={100 + idx * 80} hover="lift" className="h-full">
                <Link
                  to={`/ecosystems/${ecosystem.key}`}
                  className="flex h-full min-h-[190px] flex-col justify-between rounded-2xl border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-lowest)] p-7 no-underline shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-colors hover:border-[var(--color-primary)]"
                >
                  <div>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] bg-[rgba(177,38,0,0.1)]"><Icon name="apartment" size={23} color="#b12600" /></div>
                    <h3 className="m-0 mb-2 font-[var(--font-display)] text-[22px] font-bold text-[var(--color-on-background)]">{ecosystem.name}</h3>
                    <p className="m-0 font-[var(--font-body)] text-[14px] leading-[22px] text-[var(--color-secondary)]">{formatAddress()}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 font-[var(--font-display)] text-[14px] font-bold text-[var(--color-primary)]">
                    {t.ecosystems.viewDistrict}
                    <Icon name="arrow_forward" size={16} color="#b12600" />
                  </span>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCta {...t.ecosystems.finalCta} />
    </>
  );
}

export default Ecosystems;
