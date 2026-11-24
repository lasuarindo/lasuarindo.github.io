import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientDivider } from '@/components/ui/GradientDivider';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { unitCategories } from '@/data/units';
import { localized } from '@/utils/localized';
import { useServicesStrings } from '../useServicesStrings';

export function ServicesEcosystem() {
  const t = useServicesStrings();
  const { language } = useLanguage();

  const groups = unitCategories.map((category) => ({
    label: localized(category.label, language),
    items: category.units.map((unit) => ({
      name: unit.name,
      icon: unit.icon,
      desc: localized(unit.desc, language),
    })),
  }));

  return (
    <section className="section section--surface-low">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <span className="mb-[10px] block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.services.ecosystemBadge}</span>
            <h2 className="mb-4 font-[var(--font-display)] text-[34px] font-bold leading-[44px] text-[var(--color-on-background)] max-[767px]:text-[28px] max-[767px]:leading-[36px]">{t.services.ecosystemHeading}</h2>
            <GradientDivider center />
            <p className="font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{t.services.ecosystemDesc}</p>
          </div>
        </AnimatedReveal>
        <div className="flex flex-col gap-12">
          {groups.map((group, groupIdx) => (
            <AnimatedReveal key={group.label} animation="up" delay={groupIdx * 100}>
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="whitespace-nowrap font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-secondary)]">{group.label}</span>
                  <div className="h-[1px] flex-1 bg-[linear-gradient(to_right,rgba(177,38,0,0.35),rgba(177,38,0,0))]" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((unit) => (
                    <AnimatedReveal key={unit.name} animation="up" delay={100} hover="lift" className="h-full">
                      <div className="flex h-full items-start gap-4 rounded-2xl border border-[rgba(228,190,181,0.2)] bg-[var(--color-surface-container-lowest)] p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(177,38,0,0.1)]"><Icon name={unit.icon} size={22} color="#b12600" /></div>
                        <div>
                          <h3 className="m-0 mb-1 font-[var(--font-display)] text-[16px] font-bold leading-[22px] text-[var(--color-on-background)]">{unit.name}</h3>
                          <p className="m-0 font-[var(--font-body)] text-[13px] leading-[20px] text-[var(--color-secondary)]">{unit.desc}</p>
                        </div>
                      </div>
                    </AnimatedReveal>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesEcosystem;
