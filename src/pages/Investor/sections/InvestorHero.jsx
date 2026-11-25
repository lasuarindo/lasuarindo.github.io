import React from 'react';
import { Link } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Icon } from '@/components/ui/Icon';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { routePaths } from '@/app/paths';

export function InvestorHero({ bundle, link }) {
  const t = useStrings(bundle);
  const common = useStrings({ id: idCommon, en: enCommon });

  return (
    <section className="cover cover--light cover--text">
      <div className="cover__copy">
        <Breadcrumb
          inside
          items={[
            { label: common.nav.home, to: '/' },
            { label: common.engagement.investor },
          ]}
        />
        <span className="eyebrow enter-once">{t.heroEyebrow}</span>
        <h1 className="display display--hero enter-once" style={{ animationDelay: '60ms' }}>
          {t.heroTitle1}
          <br />
          <span className="text-[var(--color-primary)]">{t.heroTitle2}</span>
        </h1>
        <p className="lead enter-once" style={{ animationDelay: '120ms' }}>{t.heroLead}</p>
        <div className="cover__actions enter-once" style={{ animationDelay: '180ms' }}>
          <Link to={routePaths.contactIntent(link.intent)} className="btn btn--solid">
            {t.ctaButton}
            <Icon name="arrow_forward" size={18} color="#ffffff" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InvestorHero;
