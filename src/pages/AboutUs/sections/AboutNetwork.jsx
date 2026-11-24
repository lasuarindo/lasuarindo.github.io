import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { Colors } from '@/constants/theme';
import { CONTAINER } from '@/constants/layout';
import { network } from '@/data/network';
import { useAboutStrings } from '../useAboutStrings';

export function AboutNetwork() {
  const t = useAboutStrings();

  return (
    <section className="border-y border-[rgba(0,0,0,0.06)] bg-[var(--color-surface-container-low)] py-[36px]">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mb-[20px] text-center"><span className="font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[1.8px] text-[var(--color-secondary)]">{t.about.networkHeading}</span></div>
        </AnimatedReveal>
        <div className="flex flex-row flex-wrap items-center justify-center gap-[40px]">
          {network.map((item) => (
            <AnimatedReveal key={item.name} animation="up" delay={item.delay}>
              <div className="flex flex-row items-center gap-[12px]"><Icon name={item.icon} size={28} color={Colors.secondary} /><span className="font-[var(--font-display)] text-[16px] font-bold text-[var(--color-on-background)]">{item.name}</span></div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutNetwork;
