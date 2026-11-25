import React from 'react';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';
import vamosImg from '@/assets/images/service_vamos_synergy.png';

export function BusinessesVamos() {
  const t = useBusinessesStrings();

  return (
    <section className="overflow-hidden bg-[#1a1c1e] py-20">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-16 max-[767px]:gap-8 lg:grid-cols-2">
          <AnimatedReveal animation="up" delay={100} hover="scale">
            <div className="h-[400px] overflow-hidden rounded-[24px] bg-[#27292a] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] max-[767px]:h-[260px]"><img src={vamosImg} alt={t.businesses.imageAlts.vamos} className="block h-full w-full object-cover" /></div>
          </AnimatedReveal>
          <AnimatedReveal animation="right" delay={200}>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] px-4 py-1.5"><Icon name="handshake" size={14} color="#ffb4a3" /><span className="font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#ffb4a3]">{t.businesses.vamosBadge}</span></div>
              <h2 className="mb-4 font-[var(--font-display)] text-[34px] font-bold leading-[42px] text-white max-[767px]:text-[26px] max-[767px]:leading-[34px] lg:text-[40px] lg:leading-[48px]">{t.businesses.vamosHeading1}<GradientText>{t.businesses.vamosHeading2}</GradientText></h2>
              <p className="mb-8 font-[var(--font-body)] text-[16px] leading-[26px] text-[rgba(255,255,255,0.7)]">{t.businesses.vamosDesc}</p>
              <div className="mb-8 flex flex-wrap gap-3">
                {t.businesses.vamosTags.map((tag) => (<div key={tag.label} className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-4 py-2"><Icon name={tag.icon} size={16} color="#ffb4a3" /><span className="font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[0.5px] text-white">{tag.label}</span></div>))}
              </div>
              <div className="flex gap-3">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (<div key={social} className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[18px] bg-[rgba(255,255,255,0.08)]"><Icon name={social} size={18} color="rgba(255,255,255,0.6)" /></div>))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

export default BusinessesVamos;
