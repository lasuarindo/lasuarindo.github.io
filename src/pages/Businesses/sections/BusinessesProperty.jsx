import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { useResponsive } from '@/hooks/useResponsive';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';
import propertiHeroImg from '@/assets/images/service_property_hero.png';
import layananEkosistemImg from '@/assets/images/services_ecosystem.png';

export function BusinessesProperty() {
  const { isMobile } = useResponsive();
  const t = useBusinessesStrings();

  return (
    <section className={`section section--sm section--surface${isMobile ? ' section--sm-mobile' : ''}`}>
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-[rgba(228,190,181,0.2)] bg-[var(--color-surface-container-lowest)] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] lg:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-col justify-center p-8 max-[767px]:px-4 max-[767px]:py-5 lg:px-12 lg:py-10">
              <span className="mb-[10px] block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.businesses.propertyLabel}</span>
              <h3 className="mb-4 font-[var(--font-display)] text-[26px] font-bold leading-[34px] text-[var(--color-on-background)] max-[767px]:text-[22px] max-[767px]:leading-[30px]">{t.businesses.propertyHeading}</h3>
              <p className="mb-6 font-[var(--font-body)] text-[15px] leading-6 text-[var(--color-secondary)]">{t.businesses.propertyDesc}</p>
              <div className="mb-7 grid grid-cols-3 gap-4 max-[767px]:grid-cols-1">
                {t.businesses.propertyFeatures.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-[rgba(177,38,0,0.1)]"><Icon name={item.icon} size={22} color="#b12600" /></div>
                    <h4 className="m-0 mb-1 font-[var(--font-display)] text-[14px] font-bold leading-5 text-[var(--color-on-background)]">{item.title}</h4>
                    <p className="m-0 font-[var(--font-body)] text-[12px] leading-[18px] text-[var(--color-secondary)]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(177,38,0,0.2)] bg-[rgba(177,38,0,0.08)] px-4 py-2"><Icon name="trending_up" size={16} color="#b12600" /><span className="font-[var(--font-display)] text-[14px] font-bold text-[var(--color-primary)]">{t.businesses.recentProject}</span></div>
            </div>
            <div className="flex min-h-[400px] flex-col gap-1 max-[767px]:min-h-[260px]">
              <div className="min-h-[200px] flex-1 overflow-hidden"><img src={propertiHeroImg} alt={t.businesses.imageAlts.propertyDistrict} className="block h-full w-full object-cover" /></div>
              <div className="min-h-[200px] flex-1 overflow-hidden"><img src={layananEkosistemImg} alt={t.businesses.imageAlts.propertyBuilding} className="block h-full w-full object-cover" /></div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default BusinessesProperty;
