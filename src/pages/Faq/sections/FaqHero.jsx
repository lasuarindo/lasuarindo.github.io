import React from 'react';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { paths } from '@/app/paths';
import { useFaqStrings } from '../useFaqStrings';

export function FaqHero() {
  const t = useFaqStrings();
  const common = useStrings({ id: idCommon, en: enCommon });

  return (
    <section className="cover cover--light cover--text">
      <div className="cover__copy">
        <Breadcrumb
          inside
          items={[
            { label: common.nav.home, to: paths.home },
            { label: common.footer.faq },
          ]}
        />
        <div className="rule enter-once" />
        <span className="eyebrow enter-once" style={{ animationDelay: '60ms' }}>
          {t.faq.badge}
        </span>
        <h1 className="display display--hero enter-once" style={{ animationDelay: '120ms' }}>
          {t.faq.heroTitle1}
          <br />
          <span className="text-[var(--color-primary)]">{t.faq.heroTitle2}</span>
        </h1>
        <p className="lead enter-once" style={{ animationDelay: '180ms' }}>
          {t.faq.heroSubtitle}
        </p>
      </div>
    </section>
  );
}

export default FaqHero;
