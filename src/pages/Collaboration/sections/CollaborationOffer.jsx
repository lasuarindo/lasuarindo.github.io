import React from 'react';
import { Link } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftNote } from '@/components/ui/DraftBadge';
import { FinalCta } from '@/components/ui/FinalCta';
import { ctaLink } from '@/data/navigation';
import { CONTAINER } from '@/constants/layout';

export function CollaborationOffer({ bundle, link }) {
  const t = useStrings(bundle);
  const to = `${ctaLink.href}?intent=${link.intent}`;

  return (
    <>
      <section className="section section--neutral">
        <div className={CONTAINER}>
          <SectionHeader titlePrimary={t.offerHeading} subtitle={t.offerLead} />
          <p className="prose mt-4 max-w-[62ch]">{t.closingNote}</p>
          <Link to={to} className="btn btn--outline mt-6">
            {t.ctaButton}
            <Icon name="arrow_forward" size={18} color="#b12600" />
          </Link>
          <DraftNote>{t.draftNote}</DraftNote>
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

export default CollaborationOffer;
