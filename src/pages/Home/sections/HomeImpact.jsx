import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientDivider } from '@/components/ui/GradientDivider';
import { CONTAINER } from '@/constants/layout';
import { useHomeStrings } from '../useHomeStrings';

/** Two verified figures (F11/F12) and one temporary illustrative figure. */
export function HomeImpact() {
  const t = useHomeStrings();
  const stats = [t.home.impact.stat1, t.home.impact.stat2, t.home.impact.stat3];

  return (
    <section className="section section--surface">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto mb-10 max-w-[640px] text-center">
            <span className="mb-3 block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.home.impact.eyebrow}</span>
            <GradientDivider center />
          </div>
        </AnimatedReveal>
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, idx) => (
            <AnimatedReveal key={stat.label} animation="up" delay={100 + idx * 80} className="h-full">
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-lowest)] px-5 py-8 text-center">
                <span className="font-[var(--font-display)] text-[48px] font-extrabold leading-[56px] text-[var(--color-primary)] md:text-[56px] md:leading-[64px]">{stat.value}</span>
                <p className="m-0 mt-2 font-[var(--font-body)] text-[14px] leading-[22px] text-[var(--color-secondary)]">{stat.label}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        <AnimatedReveal animation="up" delay={340}>
          <p className="mt-7 text-center font-[var(--font-body)] text-[13px] leading-[20px] text-[var(--color-secondary)]">{t.home.impact.note}</p>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default HomeImpact;
