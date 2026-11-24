import React from 'react';
import { Link } from 'react-router';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { useResponsive } from '@/hooks/useResponsive';
import { useHomeStrings } from '../useHomeStrings';
import heroBgImg from '@/assets/images/header_new_HD.png';

export function HomeHero() {
  const t = useHomeStrings();
  const { isDesktop } = useResponsive();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-inverse-surface)] pb-[35px] pt-[95px] md:pt-[100px] lg:flex lg:flex-row lg:pb-[40px] lg:pt-[105px]">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBgImg})` }} />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(47,49,49,0)_0%,rgba(47,49,49,0.5)_60%,#2f3131_100%)]" />
      <div className="relative z-10 block lg:flex lg:flex-row lg:items-center lg:gap-6 mx-auto w-full max-w-[1280px] px-6">
        <div className="flex flex-1 flex-col items-start gap-3 lg:flex-[1.25] lg:gap-[14px]">
          <AnimatedReveal animation="fade" delay={0} disabled>
            <div className="rounded-full border border-[rgba(255,180,163,0.3)] bg-[rgba(255,255,255,0.08)] px-4 py-1.5 lg:px-[18px] lg:py-[7px]">
              <span className="font-[var(--font-display)] text-[11px] font-semibold uppercase tracking-[1.5px] text-[#ffb4a3] lg:text-[12.5px]">{t.home.badge}</span>
            </div>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={60} disabled>
            <h1 className="m-0 font-[var(--font-display)] text-[34px] font-bold leading-[38px] tracking-normal text-white max-[379px]:text-[28px] max-[379px]:leading-[31px] md:text-[46px] md:leading-[52px] lg:text-[62px] lg:leading-[69px] lg:tracking-[-1px]">
              {t.home.heroTitle1}<br />
              <GradientText>{t.home.heroTitle2}</GradientText><br />
              {t.home.heroTitle3}<br />
              <GradientText>{t.home.heroTitle4}</GradientText>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={120} disabled>
            <p className="m-0 mt-1 font-[var(--font-body)] max-w-[420px] text-[16px] leading-[25px] text-[#e2e2e2] lg:mt-[6px] lg:max-w-[560px] lg:text-[18px] lg:leading-[29px] lg:text-[#f0f0f0]">{t.home.heroSubtitle}</p>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={180} disabled>
            <div className="mt-[14px] flex flex-wrap gap-3 lg:mt-[18px] lg:gap-[14px]">
              <Link to="/services" className="inline-block rounded-lg bg-[#b12600] px-[22px] py-[11px] font-[var(--font-display)] text-[14px] font-bold text-white no-underline transition-all hover:bg-[var(--color-primary-container)] lg:px-[26px] lg:py-[13px] lg:text-[15px]">{t.home.exploreBtn}</Link>
              <Link to="/about-us" className="inline-block rounded-lg border-[1.5px] border-white bg-transparent px-[22px] py-[11px] font-[var(--font-display)] text-[14px] font-bold text-white no-underline transition-all hover:bg-[rgba(255,255,255,0.15)] lg:px-[26px] lg:py-[13px] lg:text-[15px]">{t.home.visionBtn}</Link>
            </div>
          </AnimatedReveal>
          {!isDesktop && (
            <div className="mt-[18px] flex flex-wrap gap-3">
              <AnimatedReveal animation="scale" delay={220} className="min-w-[140px] flex-1">
                <div className="rounded-xl border border-[rgba(228,190,181,0.2)] bg-[rgba(255,255,255,0.08)] p-[14px]">
                  <Icon name="groups" size={20} color="#ffb4a3" className="mb-2" />
                  <h3 className="mb-1 font-[var(--font-display)] text-[14px] font-bold tracking-[0.5px] text-white">{t.home.integrityTitle}</h3>
                  <p className="m-0 font-[var(--font-body)] text-[12px] leading-[18px] text-[rgba(226,226,222,0.8)]">{t.home.integrityDesc}</p>
                </div>
              </AnimatedReveal>
              <AnimatedReveal animation="scale" delay={280} className="min-w-[140px] flex-1">
                <div className="rounded-xl border border-[rgba(228,190,181,0.2)] bg-[rgba(255,255,255,0.08)] p-[14px]">
                  <Icon name="lightbulb" size={20} color="#ffb4a3" className="mb-2" />
                  <h3 className="mb-1 font-[var(--font-display)] text-[14px] font-bold tracking-[0.5px] text-white">{t.home.innovationTitle}</h3>
                  <p className="m-0 font-[var(--font-body)] text-[12px] leading-[18px] text-[rgba(226,226,222,0.8)]">{t.home.innovationDesc}</p>
                </div>
              </AnimatedReveal>
            </div>
          )}
        </div>
        {isDesktop && (
          <div className="z-10 flex flex-1 flex-row items-center justify-end gap-6 pr-[10px]">
            <AnimatedReveal animation="scale" delay={100} className="max-w-[240px] flex-1">
              <div className="rounded-[14px] border border-[rgba(228,190,181,0.2)] bg-[rgba(255,255,255,0.08)] p-5">
                <Icon name="groups" size={26} color="#ffb4a3" className="mb-[10px]" />
                <h3 className="mb-[6px] font-[var(--font-display)] text-[19px] font-bold tracking-[0.5px] text-white">{t.home.integrityTitle}</h3>
                <p className="m-0 font-[var(--font-body)] text-[15px] leading-5 text-[rgba(226,226,222,0.8)]">{t.home.integrityDesc}</p>
              </div>
            </AnimatedReveal>
            <AnimatedReveal animation="scale" delay={180} className="mt-7 max-w-[240px] flex-1">
              <div className="rounded-[14px] border border-[rgba(228,190,181,0.2)] bg-[rgba(255,255,255,0.08)] p-5">
                <Icon name="lightbulb" size={26} color="#ffb4a3" className="mb-[10px]" />
                <h3 className="mb-[6px] font-[var(--font-display)] text-[19px] font-bold tracking-[0.5px] text-white">{t.home.innovationTitle}</h3>
                <p className="m-0 font-[var(--font-body)] text-[15px] leading-5 text-[rgba(226,226,222,0.8)]">{t.home.innovationDesc}</p>
              </div>
            </AnimatedReveal>
          </div>
        )}
      </div>
    </section>
  );
}

export default HomeHero;
