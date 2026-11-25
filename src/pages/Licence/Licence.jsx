import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { localized } from '@/utils/localized';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientText } from '@/components/ui/GradientText';
import { Icon } from '@/components/ui/Icon';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FinalCta } from '@/components/ui/FinalCta';
import { CONTAINER } from '@/constants/layout';
import { licences } from '@/data/licences';
import { useLicenceStrings } from './useLicenceStrings';

/** Basic legal standing only. Unknown number/issuer/year are never rendered. */
export function Licence() {
  const t = useLicenceStrings();
  const common = useStrings({ id: idCommon, en: enCommon });
  const { language } = useLanguage();

  return (
    <>
      <Breadcrumb
        items={[
          { label: common.nav.home, to: '/' },
          { label: common.footer.licence },
        ]}
      />
      <section className="relative mt-6 flex min-h-[40vh] items-end overflow-hidden bg-[var(--color-inverse-surface)] pb-12 pt-8">
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="max-w-[760px]">
            <h1 className="m-0 font-[var(--font-display)] text-[38px] font-bold leading-[46px] text-white md:text-[56px] md:leading-[64px]">
              {t.licence.heroTitle1}<br /><GradientText>{t.licence.heroTitle2}</GradientText>
            </h1>
            <div className="mb-5 mt-6 h-1 w-16 rounded-[2px] bg-[#ffb4a3]" />
            <p className="m-0 font-[var(--font-body)] text-[16px] leading-[27px] text-[var(--color-surface-variant)]">{t.licence.heroLead}</p>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className={CONTAINER}>
          <AnimatedReveal animation="up" delay={0}>
            <h2 className="mb-7 font-[var(--font-display)] text-[26px] font-bold leading-[34px] text-[var(--color-on-background)] md:text-[34px] md:leading-[42px]">{t.licence.listHeading}</h2>
          </AnimatedReveal>
          <div className="mx-auto grid max-w-[860px] grid-cols-1 gap-5 sm:grid-cols-2">
            {licences.map((licence, idx) => (
              <AnimatedReveal key={licence.key} animation="up" delay={100 + idx * 80} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-lowest)] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[rgba(177,38,0,0.1)]"><Icon name="description" size={22} color="#b12600" /></span>
                  <span className="self-start rounded-full bg-[rgba(177,38,0,0.08)] px-3 py-1 font-[var(--font-display)] text-[11px] font-bold uppercase tracking-[0.8px] text-[var(--color-primary)]">{t.licence.categoryLabel}</span>
                  <h3 className="m-0 font-[var(--font-display)] text-[19px] font-bold leading-[26px] text-[var(--color-on-background)]">{localized(licence.name, language)}</h3>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal animation="up" delay={160}>
            <div className="mx-auto mt-10 max-w-[860px] rounded-2xl bg-[var(--color-surface-container-low)] p-6">
              <h2 className="m-0 mb-2 font-[var(--font-display)] text-[17px] font-bold text-[var(--color-on-background)]">{t.licence.noteHeading}</h2>
              <p className="m-0 font-[var(--font-body)] text-[15px] leading-[25px] text-[var(--color-secondary)]">{t.licence.note}</p>
            </div>
          </AnimatedReveal>
        </div>
      </section>
      <FinalCta {...t.licence.finalCta} />
    </>
  );
}

export default Licence;
