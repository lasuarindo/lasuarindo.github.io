import React from 'react';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { useContactStrings } from '../useContactStrings';
import heroBgImg from '@/assets/images/header_hero_home.png';

export function ContactHero() {
  const t = useContactStrings();

  return (
    <section className="relative overflow-hidden bg-[var(--color-inverse-surface)] pb-[80px] pt-[96px] lg:pb-[112px] lg:pt-[110px]">
      <img src={heroBgImg} alt="" aria-hidden="true" className="absolute inset-0 z-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(47,49,49,0)_0%,rgba(47,49,49,0.5)_60%,#2f3131_100%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
        <AnimatedReveal animation="up" delay={0} disabled>
          <span className="mb-[14px] block font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[1.5px] text-[#ffb4a3]">{t.contact.badge}</span>
        </AnimatedReveal>
        <AnimatedReveal animation="up" delay={60} disabled>
          <h1 className="m-0 mb-[18px] font-[var(--font-display)] text-[40px] font-bold leading-[1.12] text-white lg:text-[56px]">
            {t.contact.heroTitle1}<br />
            <GradientText>{t.contact.heroTitle2}</GradientText>
          </h1>
        </AnimatedReveal>
        <AnimatedReveal animation="up" delay={120} disabled>
          <p className="m-0 max-w-[672px] font-[var(--font-body)] text-[18px] leading-[29px] text-[var(--color-surface-variant)]">{t.contact.heroSubtitle}</p>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default ContactHero;
