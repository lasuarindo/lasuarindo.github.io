import React from 'react';
import { Link } from 'react-router';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { useBusinessesStrings } from '../useBusinessesStrings';
import heroBgImg from '@/assets/images/header_new_HD.png';

export function BusinessesHero() {
  const t = useBusinessesStrings();

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#111313] pb-[128px] pt-[110px] lg:pb-[160px] lg:pt-[150px]">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${heroBgImg})` }} />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,rgba(17,19,19,0.9)_0%,rgba(17,19,19,0.6)_50%,rgba(17,19,19,0)_100%)]" />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_top,rgba(17,19,19,0.8)_0%,rgba(17,19,19,0)_50%,rgba(17,19,19,0.3)_100%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
        <div className="max-w-[672px]">
          <AnimatedReveal animation="fade" delay={0}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-4 py-1.5">
              <Icon name="business" size={14} color="#ffb4a3" />
              <span className="font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#ffb4a3]">{t.businesses.badge}</span>
            </div>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={100}>
            <h1 className="m-0 mb-6 font-[var(--font-display)] text-[28px] font-bold leading-[35px] text-white sm:text-[34px] sm:leading-[43px] md:text-[64px] md:leading-[80px]">
              {t.businesses.heroTitle1}<br />{t.businesses.heroTitle2} <GradientText>{t.businesses.heroTitle3}</GradientText><br /><GradientText>{t.businesses.heroTitle4}</GradientText>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={200}>
            <p className="mb-10 max-w-[512px] font-[var(--font-body)] text-[18px] leading-[29px] text-[rgba(255,255,255,0.7)]">
              {t.businesses.heroSubtitle}
            </p>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={400}>
            <Link to="/contact" className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--color-primary)] px-8 py-4 font-[var(--font-display)] text-[16px] font-bold text-[var(--color-on-primary)] no-underline shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all hover:bg-[var(--color-primary-container)]">
              <span>{t.businesses.partnerBtn}</span><Icon name="arrow_forward" size={20} color="#ffffff" />
            </Link>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

export default BusinessesHero;
