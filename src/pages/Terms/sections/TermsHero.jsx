import React from 'react';
import { LegalHero } from '@/components/legal/LegalHero';
import { useTermsStrings } from '../useTermsStrings';

export function TermsHero() {
  const t = useTermsStrings();
  const count = t.terms.sections.length;

  return (
    <LegalHero
      titleLead={t.terms.heroTitle1}
      titleAccent={t.terms.heroTitle2}
      description={t.terms.heroSubtitle}
      meta={[
        { icon: 'schedule', label: `${t.terms.lastUpdated} ${t.terms.lastUpdatedDate}` },
        { icon: 'description', label: `${count} ${t.terms.partsLabel}` },
      ]}
    />
  );
}

export default TermsHero;