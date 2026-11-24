import React from 'react';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { useFaqStrings } from '../useFaqStrings';

export function FaqHero() {
  const t = useFaqStrings();

  return (
    <section className="relative overflow-hidden bg-[var(--color-inverse-surface)] pb-20 pt-[110px]">
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(177,38,0,0.1)] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-[133px] translate-y-[133px] rounded-full bg-[rgba(177,38,0,0.08)] blur-[100px]" />
      <div className="mx-auto w-full max-w-[1280px] px-6 relative z-10">
        <div className="max-w-[768px]">
          <AnimatedReveal animation="fade" delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(228,190,181,0.3)] bg-[rgba(243,243,244,0.1)] px-4 py-1.5">
              <Icon name="help" size={16} color="#ffb4a3" />
              <span className="font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[1.2px] text-[var(--color-primary-fixed-dim)]">{t.faq.badge}</span>
            </div>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={100}>
            <h1 className="mb-6 font-[var(--font-display)] text-[36px] font-bold leading-[1.15] text-[var(--color-on-primary)] md:text-[48px] lg:text-[64px]">{t.faq.heroTitle1}<br /><GradientText>{t.faq.heroTitle2}</GradientText></h1>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={200}>
            <p className="m-0 max-w-[672px] font-[var(--font-body)] text-[18px] leading-[29px] text-[var(--color-surface-variant)]">{t.faq.heroSubtitle}</p>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

export default FaqHero;