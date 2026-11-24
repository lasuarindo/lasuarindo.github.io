import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { useResponsive } from '@/hooks/useResponsive';
import { Colors } from '@/constants/theme';
import { useAboutStrings } from '../useAboutStrings';
import heroBgImg from '@/assets/images/header_new_HD.png';
import tentangKamiImg from '@/assets/images/about_us.png';

export function AboutHero() {
  const t = useAboutStrings();
  const { isLg, isMd } = useResponsive();
  const heroFeatures = [
    { icon: 'settings_suggest', title: t.about.features.integrated.title, desc: t.about.features.integrated.desc },
    { icon: 'trending_up', title: t.about.features.sectors.title, desc: t.about.features.sectors.desc },
    { icon: 'rocket_launch', title: t.about.features.innovation.title, desc: t.about.features.innovation.desc },
    { icon: 'volunteer_activism', title: t.about.features.impact.title, desc: t.about.features.impact.desc },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-inverse-surface)] pb-[48px] pt-[110px]">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBgImg})` }} />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(47,49,49,0)_0%,rgba(47,49,49,0.5)_60%,#2f3131_100%)]" />
      <div className="relative z-10 flex flex-col items-center gap-[36px] lg:flex-row lg:gap-[48px] mx-auto w-full max-w-[1280px] px-6">
        <AnimatedReveal animation="left" delay={0} className="w-full lg:flex-1">
          <div className="max-w-[580px]">
            <h1 className="mb-[24px] font-[var(--font-display)] text-[34px] font-bold leading-[40px] text-white max-[379px]:text-[28px] max-[379px]:leading-[34px] md:text-[42px] md:leading-[48px] lg:text-[56px] lg:leading-[62px]">
              {t.about.heroTitle1}<br /><span className="text-[var(--color-primary)]">{t.about.heroTitle2}</span>
            </h1>
            <div className="border-l-4 border-l-[rgba(255,180,163,0.5)] pl-[20px]">
              <p className="mb-[16px] font-[var(--font-body)] text-[17px] leading-[27px] text-[var(--color-surface-variant)] lg:text-[20px] lg:leading-[31px]"><strong className="font-bold text-white">{t.about.lead1}</strong>{' '}{t.about.lead2}</p>
              <p className="m-0 font-[var(--font-body)] text-[15px] leading-[25px] text-[rgba(226,226,222,0.8)] lg:text-[17px] lg:leading-[28px]">{t.about.body}</p>
            </div>
          </div>
        </AnimatedReveal>
        <AnimatedReveal animation="right" delay={150} className="w-full lg:flex-1">
          <div className="relative overflow-hidden rounded-tl-[16px] rounded-tr-[110px] rounded-br-[16px] rounded-bl-[16px] bg-[#171717] shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
            <img src={tentangKamiImg} alt="Tentang Kami" className="block h-[260px] w-full object-cover max-[379px]:h-[320px] md:h-[340px] lg:h-[420px]" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-t-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.85)] px-[16px] py-[18px] backdrop-blur-[12px] max-[379px]:px-[10px] max-[379px]:py-[12px]">
              <div className="flex flex-row justify-between gap-[8px] max-[379px]:grid max-[379px]:grid-cols-2 max-[379px]:gap-[10px]">
                {heroFeatures.map((f) => (
                  <div key={f.title} className="flex flex-1 flex-col items-center text-center">
                    <Icon name={f.icon} size={isLg ? 26 : isMd ? 22 : 18} color={Colors.primary} className="mb-[6px]" />
                    <span className="font-[var(--font-display)] text-[10px] font-bold uppercase leading-[13px] tracking-[0.5px] whitespace-pre-line text-white md:text-[12px] md:leading-[16px] lg:text-[14px] lg:leading-[18px]">{f.title}</span>
                    <span className="mt-[4px] font-[var(--font-body)] text-[9px] leading-[12px] text-[#9ca3af] md:text-[11px] md:leading-[15px] lg:text-[12.5px] lg:leading-[17px]">{f.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default AboutHero;
