import React from 'react';
import { Link } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftNote } from '@/components/ui/DraftBadge';
import { FinalCta } from '@/components/ui/FinalCta';
import { routePaths } from '@/app/paths';
import { CONTAINER } from '@/constants/layout';

export function InvestorOffer({ bundle, link }) {
  const t = useStrings(bundle);
  const to = routePaths.contactIntent(link.intent);

  return (
    <>
      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.offerHeading} subtitle={t.offerLead} />
          <div className="empty-state mt-8 !max-w-none">
            <p className="prose">{t.closingNote}</p>
            <Link to={to} className="btn btn--solid mt-6">
              {t.ctaButton}
              <Icon name="arrow_forward" size={18} color="#ffffff" />
            </Link>
            <DraftNote>{t.draftNote}</DraftNote>
          </div>
        </div>
      </section>
      <FinalCta
        title={t.ctaTitle}
        text={t.ctaText}
        button={t.ctaButton}
        to={to}
      />
    </>
  );
}

export default InvestorOffer;
