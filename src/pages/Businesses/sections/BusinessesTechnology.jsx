import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientDivider } from '@/components/ui/GradientDivider';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';
import teknologiImg from '@/assets/images/service_technology.png';
import teknologiGridImg from '@/assets/images/service_technology_grid.png';
import proyekTeknologiImg from '@/assets/images/future_project_technology.png';

export function BusinessesTechnology() {
  const t = useBusinessesStrings();

  return (
    <section className="section section--dark section--relative">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimatedReveal animation="left" delay={100}>
            <div>
              <span className="mb-[10px] block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.businesses.techLabel}</span>
              <h3 className="mb-2 font-[var(--font-display)] text-[32px] font-bold leading-[42px] text-white max-[767px]:text-[24px] max-[767px]:leading-[32px]">{t.businesses.techHeading}</h3>
              <GradientDivider />
              <p className="mb-8 font-[var(--font-body)] text-[18px] leading-[29px] text-[rgba(255,255,255,0.7)]">{t.businesses.techDesc}</p>
              <div className="flex flex-col gap-4">
                {t.businesses.techCards.map((item) => (
                  <AnimatedReveal key={item.title} animation="up" delay={200} hover="lift">
                    <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-5 backdrop-blur-[8px]">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(177,38,0,0.2)]"><Icon name={item.icon} size={20} color="#ffb4a3" /></div>
                        <h4 className="m-0 font-[var(--font-display)] text-[14px] font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="m-0 font-[var(--font-body)] text-[12px] leading-5 text-[rgba(255,255,255,0.6)]">{item.desc}</p>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </div>
          </AnimatedReveal>
          <AnimatedReveal animation="right" delay={200}>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[200px] overflow-hidden rounded-xl max-[767px]:h-[130px]"><img src={teknologiImg} alt={t.businesses.imageAlts.techPlatform} className="block h-full w-full object-cover" /></div>
                <div className="h-[200px] overflow-hidden rounded-xl max-[767px]:h-[130px]"><img src={teknologiGridImg} alt={t.businesses.imageAlts.techGrid} className="block h-full w-full object-cover" /></div>
              </div>
              <div className="h-[280px] overflow-hidden rounded-xl max-[767px]:h-[180px]"><img src={proyekTeknologiImg} alt={t.businesses.imageAlts.techProject} className="block h-full w-full object-cover" /></div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

export default BusinessesTechnology;
