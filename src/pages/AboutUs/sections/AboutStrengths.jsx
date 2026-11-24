import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { CONTAINER } from '@/constants/layout';
import { useAboutStrings } from '../useAboutStrings';

export function AboutStrengths() {
  const t = useAboutStrings();

  return (
    <section className="section section--sm section--surface">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
            <div className="my-[12px] flex w-full flex-row items-center gap-[16px]">
              <span className="font-[var(--font-display)] text-[40px] font-bold leading-[40px] text-[var(--color-primary)]">66</span>
              <div className="h-[2px] flex-1 bg-[linear-gradient(to_right,#b12600,rgba(177,38,0,0.1))]" />
            </div>
            <h2 className="mb-[8px] font-[var(--font-display)] text-[32px] font-bold leading-[42px] text-[var(--color-on-background)]">{t.about.strengthsHeading1}<span className="text-[var(--color-primary)]">{t.about.strengthsHeading2}</span></h2>
            <p className="mx-auto max-w-[700px] font-[var(--font-body)] text-[15px] leading-[25px] text-[var(--color-secondary)]">{t.about.strengthsBody}</p>
            <div className="my-[12px] flex w-full flex-row items-center gap-[16px]">
              <div className="h-[2px] flex-1 bg-[linear-gradient(to_right,rgba(177,38,0,0.1),#b12600)]" />
              <span className="font-[var(--font-display)] text-[40px] font-bold leading-[40px] text-[var(--color-primary)]">99</span>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default AboutStrengths;
