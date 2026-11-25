import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Stars } from '@/components/ui/Stars';
import { getLeaderByKey } from '@/data/leadership';
import { useAboutStrings } from '../useAboutStrings';
import pendiriImg from '@/assets/images/pendiri.png';

export function AboutFounder() {
  const t = useAboutStrings();
  const { language } = useLanguage();
  const founder = getLeaderByKey('founder');

  return (
    <section className="section section--sm section--surface-low">
      <div className="flex flex-col items-center gap-[36px] lg:flex-row lg:gap-[48px] mx-auto w-full max-w-[1280px] px-6">
        <AnimatedReveal animation="left" delay={100} className="w-full lg:flex-1">
          <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-[24px] bg-[var(--color-surface-container-lowest)] shadow-[0_20px_40px_rgba(0,0,0,0.06)] md:h-[400px] lg:h-[480px]">
            <img src={pendiriImg} alt={localized(founder.imageAlt, language)} className="block h-full w-full object-contain" />
          </div>
        </AnimatedReveal>
        <AnimatedReveal animation="right" delay={200} className="w-full lg:flex-[1.25]">
          <div className="flex flex-col justify-center">
            <h2 className="mb-[10px] font-[var(--font-display)] text-[36px] font-bold leading-[42px] text-[var(--color-on-background)]">{t.about.founderHeading1}<br /><span className="text-[var(--color-primary)]">{t.about.founderHeading2}</span></h2>
            <div className="mb-[24px] h-[4px] w-[44px] rounded-[2px] bg-[var(--color-primary)]" />
            <div className="rounded-[18px] border-l-4 border-l-[var(--color-primary)] bg-[var(--color-surface-container-lowest)] p-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="mb-[12px] font-[var(--font-display)] text-[24px] font-bold tracking-[1px] text-[var(--color-primary)]">99</div>
              <p className="mb-[18px] font-[var(--font-body)] text-[15px] font-bold italic leading-[25px] text-[var(--color-on-background)]">{t.about.founderQuote}</p>
              <p className="mb-[14px] font-[var(--font-body)] text-[13px] leading-[22px] text-[#6b7280]">{t.about.founderBody1}</p>
              <p className="m-0 font-[var(--font-body)] text-[13px] leading-[22px] text-[#6b7280]">{t.about.founderBody2}</p>
            </div>
            <div className="mt-[18px] pl-[4px]">
              <h3 className="m-0 font-[var(--font-display)] text-[22px] font-bold text-[var(--color-on-background)]">{founder.name}</h3>
              <div className="mt-[4px] flex flex-row items-center"><span className="font-[var(--font-display)] text-[13px] font-semibold text-[var(--color-primary)]">{localized(founder.role, language)}</span><span className="mx-[6px] text-[#9ca3af]">•</span><Stars /></div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default AboutFounder;
