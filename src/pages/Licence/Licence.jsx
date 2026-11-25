import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftNote } from '@/components/ui/DraftBadge';
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
      <section className="cover cover--light cover--text">
        <div className="cover__copy">
          <span className="eyebrow enter-once">{common.footer.licence}</span>
          <h1 className="display display--hero enter-once" style={{ animationDelay: '60ms' }}>
            {t.licence.heroTitle1} {t.licence.heroTitle2}
          </h1>
          <p className="lead enter-once" style={{ animationDelay: '120ms' }}>
            {t.licence.heroLead}
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.licence.scopeHeading} subtitle={t.licence.scopeLead} />
        </div>
      </section>

      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.licence.listHeading} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {licences.map((licence) => (
              <div key={licence.key} className="card">
                <Icon name="description" size={24} color="#b12600" />
                <span className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                  {t.licence.categoryLabel}
                </span>
                <h3 className="display display--card card__title">
                  {localized(licence.name, language)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.licence.noteHeading} subtitle={t.licence.note} />
          <DraftNote>{common.status.draftNote}</DraftNote>
        </div>
      </section>

      <FinalCta {...t.licence.finalCta} />
    </>
  );
}

export default Licence;
