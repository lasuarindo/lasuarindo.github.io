import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { Colors } from '@/constants/theme';
import { CONTAINER } from '@/constants/layout';
import { useAboutStrings } from '../useAboutStrings';

/** Icons belong to the value itself, not to its position in the array. */
export function AboutValues() {
  const t = useAboutStrings();
  const { language } = useLanguage();

  return (
    <section className="section section--sm section--surface-low">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mb-[40px] text-center">
            <h2 className="mb-[12px] font-[var(--font-display)] text-[28px] font-bold leading-[36px] text-[var(--color-on-background)] md:text-[40px] md:leading-[50px]">{t.about.valuesHeading1} <span className="text-[var(--color-primary)]">{t.about.valuesHeading2}</span></h2>
            <p className="m-0 font-[var(--font-display)] text-[14px] uppercase leading-[22px] tracking-[0.7px] text-[var(--color-secondary)] md:text-[15px] md:leading-[24px]">{t.about.valuesSub}</p>
          </div>
        </AnimatedReveal>
        <div className="mx-auto grid max-w-[960px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[16px] md:grid-cols-3">
          {t.about.values.map((value, idx) => (
            <AnimatedReveal key={value.icon} animation="up" delay={100 + idx * 50} hover="lift">
              <div className="flex h-full min-h-[210px] flex-col items-center rounded-[16px] border border-[rgba(228,190,181,0.4)] bg-[var(--color-surface-container-lowest)] px-[20px] py-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                <div className="mb-[16px] flex h-[52px] w-[52px] items-center justify-center rounded-[13px] border-[1.5px] border-[rgba(177,38,0,0.4)]">
                  <Icon name={value.icon} size={26} color={Colors.primary} />
                </div>
                <p className="m-0 text-center font-[var(--font-body)] text-[14px] leading-[22px] text-[var(--color-secondary)] lg:text-[15px] lg:leading-[24px]">{localized(value.text, language)}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutValues;
