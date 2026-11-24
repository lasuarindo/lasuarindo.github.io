import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientDivider } from '@/components/ui/GradientDivider';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { useServicesStrings } from '../useServicesStrings';

export function ServicesMedia() {
  const t = useServicesStrings();

  return (
    <section className="section section--surface-low">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto mb-16 text-center">
            <h2 className="mb-2 font-[var(--font-display)] text-[48px] font-bold leading-[58px] text-[var(--color-on-background)] max-[767px]:text-[32px] max-[767px]:leading-[40px]">{t.services.mediaHeadingLead} <span className="text-[var(--color-primary)]">{t.services.mediaHeadingAccent}</span></h2>
            <p className="mb-4 font-[var(--font-display)] text-[14px] font-bold uppercase tracking-[1.4px] text-[var(--color-secondary)]">{t.services.mediaSubheading}</p>
            <GradientDivider center />
            <p className="mx-auto max-w-[672px] font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{t.services.mediaDesc}</p>
          </div>
        </AnimatedReveal>
        <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 max-[767px]:grid-cols-1 lg:grid-cols-3">
          {t.services.mediaCards.map((card) => (
            <AnimatedReveal key={card.title} animation="up" delay={card.delay || 100} hover="lift">
              <div className="box-border flex h-full flex-col justify-between rounded-2xl border border-[rgba(228,190,181,0.2)] bg-[var(--color-surface-container-lowest)] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(177,38,0,0.1)]"><Icon name={card.icon} size={36} color="#b12600" /></div>
                  <h3 className="mb-1 font-[var(--font-display)] text-[28px] font-bold text-[var(--color-on-background)]">{card.title}</h3>
                  <span className="mb-4 block font-[var(--font-display)] text-[12px] font-bold uppercase tracking-[1.2px] text-[var(--color-primary)]">{card.tag}</span>
                  <p className="mb-6 font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{card.desc}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {card.items.map((item) => (<div key={item} className="flex items-center gap-2"><Icon name="check_circle" size={16} color="#b12600" /><span className="font-[var(--font-body)] text-[14px] text-[var(--color-secondary)]">{item}</span></div>))}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        <AnimatedReveal animation="up" delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="font-[var(--font-display)] text-[14px] font-bold uppercase tracking-[1.2px] text-[var(--color-secondary)]">{t.services.ourPlatform}:</span>
            <div className="flex gap-4">
              {['share', 'videocam', 'music_note', 'podcasts', 'article'].map((icon) => (<div key={icon} className="flex h-10 w-10 items-center justify-center rounded-[20px] bg-[var(--color-surface-container-high)]"><Icon name={icon} size={20} color="#5f5e5e" /></div>))}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default ServicesMedia;
