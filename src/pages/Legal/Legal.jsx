import React from 'react';
import { Link } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientText } from '@/components/ui/GradientText';
import { Icon } from '@/components/ui/Icon';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CONTAINER } from '@/constants/layout';
import { useLegalStrings } from './useLegalStrings';

/** Optional index for the two legal documents that already exist. */
export function Legal() {
  const t = useLegalStrings();
  const common = useStrings({ id: idCommon, en: enCommon });
  const documents = [
    { to: '/legal/privacy-policy', title: t.legal.privacyTitle, desc: t.legal.privacyDesc, icon: 'lock' },
    { to: '/legal/term-condition', title: t.legal.termsTitle, desc: t.legal.termsDesc, icon: 'description' },
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: common.nav.home, to: '/' },
          { label: t.legal.heroTitle },
        ]}
      />
      <section className="relative mt-6 flex min-h-[38vh] items-end overflow-hidden bg-[var(--color-inverse-surface)] pb-12 pt-8">
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="max-w-[760px]">
            <h1 className="m-0 font-[var(--font-display)] text-[38px] font-bold leading-[46px] text-white md:text-[54px] md:leading-[62px]">{t.legal.heroTitle}</h1>
            <div className="mb-5 mt-6 h-1 w-16 rounded-[2px] bg-[#ffb4a3]" />
            <p className="m-0 font-[var(--font-body)] text-[16px] leading-[27px] text-[var(--color-surface-variant)]"><GradientText>{t.legal.heroLead}</GradientText></p>
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className={CONTAINER}>
          <AnimatedReveal animation="up" delay={0}>
            <h2 className="mb-7 font-[var(--font-display)] text-[26px] font-bold leading-[34px] text-[var(--color-on-background)] md:text-[34px] md:leading-[42px]">{t.legal.docsHeading}</h2>
          </AnimatedReveal>
          <div className="mx-auto grid max-w-[860px] grid-cols-1 gap-5 sm:grid-cols-2">
            {documents.map((doc, idx) => (
              <AnimatedReveal key={doc.to} animation="up" delay={100 + idx * 80} hover="lift" className="h-full">
                <Link to={doc.to} className="flex h-full flex-col gap-4 rounded-2xl border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-lowest)] p-6 no-underline transition-colors hover:border-[var(--color-primary)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[rgba(177,38,0,0.1)]"><Icon name={doc.icon} size={22} color="#b12600" /></span>
                  <h3 className="m-0 font-[var(--font-display)] text-[19px] font-bold leading-[26px] text-[var(--color-on-background)]">{doc.title}</h3>
                  <p className="m-0 font-[var(--font-body)] text-[14px] leading-[22px] text-[var(--color-secondary)]">{doc.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 font-[var(--font-display)] text-[13px] font-bold text-[var(--color-primary)]">
                    {t.legal.readDoc}
                    <Icon name="arrow_forward" size={15} color="#b12600" />
                  </span>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Legal;
