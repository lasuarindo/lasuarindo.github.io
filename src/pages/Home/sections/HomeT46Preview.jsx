import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { getUnitBySlug } from '@/data/units';
import { useHomeStrings } from '../useHomeStrings';

// A short preview only; the complete twelve live on /ecosystems/t46.
const PREVIEW_SLUGS = ['pro', 'win', 'agt', 'lazura-koffie', 'vps-vamos-padelon', 'bizencio-business-hub'];

export function HomeT46Preview() {
  const t = useHomeStrings();
  const { language } = useLanguage();

  return (
    <section className="section section--surface-low">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mb-10 max-w-[672px]">
            <span className="mb-3 block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.home.t46Preview.badge}</span>
            <h2 className="mb-4 font-[var(--font-display)] text-[30px] font-bold leading-[38px] text-[var(--color-on-background)] md:text-[42px] md:leading-[50px]">{t.home.t46Preview.heading}</h2>
            <div className="mb-5 h-1 w-16 rounded-[2px] bg-[linear-gradient(to_right,#b12600,#ffb68b)]" />
            <p className="m-0 font-[var(--font-body)] text-[16px] leading-[27px] text-[var(--color-secondary)]">{t.home.t46Preview.desc}</p>
          </div>
        </AnimatedReveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_SLUGS.map((slug, idx) => {
            const unit = getUnitBySlug(slug);
            return (
              <AnimatedReveal key={slug} animation="up" delay={80 + idx * 60} hover="lift" className="h-full">
                <div className="flex h-full items-start gap-4 rounded-2xl border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-lowest)] p-5">
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px] bg-[rgba(177,38,0,0.1)]">
                    <Icon name={unit.icon} size={21} color="#b12600" />
                  </div>
                  <div>
                    <h3 className="m-0 mb-1 font-[var(--font-display)] text-[16px] font-bold leading-[22px] text-[var(--color-on-background)]">{unit.name}</h3>
                    <p className="m-0 font-[var(--font-body)] text-[13px] leading-[20px] text-[var(--color-secondary)]">{localized(unit.desc, language)}</p>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
        <AnimatedReveal animation="up" delay={360}>
          <div className="mt-10 text-center">
            <Link
              to="/ecosystems/t46"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-[var(--color-primary)] px-7 py-3 font-[var(--font-display)] text-[15px] font-bold text-white no-underline transition-colors duration-200 hover:bg-[var(--color-primary-container)]"
            >
              <span>{t.home.t46Preview.cta}</span>
              <Icon name="arrow_forward" size={18} color="#ffffff" />
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default HomeT46Preview;
