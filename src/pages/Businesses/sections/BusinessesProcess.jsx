import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientDivider } from '@/components/ui/GradientDivider';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';

/** Four illustrative steps from drafts.md §C — content, not an SOP. */
export function BusinessesProcess() {
  const t = useBusinessesStrings();

  return (
    <section className="section section--surface">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <span className="mb-[10px] block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.businesses.process.eyebrow}</span>
            <h2 className="mb-4 font-[var(--font-display)] text-[30px] font-bold leading-[38px] text-[var(--color-on-background)] md:text-[40px] md:leading-[48px]">{t.businesses.process.heading}</h2>
            <GradientDivider center />
          </div>
        </AnimatedReveal>
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.businesses.process.steps.map((step, idx) => (
            <AnimatedReveal key={step.title} animation="up" delay={100 + idx * 80} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-lowest)] p-6">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-[11px] bg-[var(--color-primary)] font-[var(--font-display)] text-[15px] font-bold text-white">{idx + 1}</span>
                <h3 className="m-0 mb-2 font-[var(--font-display)] text-[18px] font-bold leading-[24px] text-[var(--color-on-background)]">{step.title}</h3>
                <p className="m-0 font-[var(--font-body)] text-[14px] leading-[22px] text-[var(--color-secondary)]">{step.desc}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessesProcess;
