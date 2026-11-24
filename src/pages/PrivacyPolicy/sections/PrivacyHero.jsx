import React from 'react';
import { LegalHero } from '@/components/legal/LegalHero';
import { usePrivacyStrings } from '../usePrivacyStrings';

export function PrivacyHero() {
  const t = usePrivacyStrings();
  const count = t.privacy.toc.length;

  return (
    <LegalHero
      titleLead={t.privacy.heroTitle1}
      titleAccent={t.privacy.heroTitle2}
      description={t.privacy.heroSubtitle}
      meta={[
        { icon: 'schedule', label: `${t.privacy.lastUpdated} ${t.privacy.lastUpdatedDate}` },
        { icon: 'description', label: `${count} ${t.privacy.partsLabel}` },
      ]}
    />
  );
}

export default PrivacyHero;