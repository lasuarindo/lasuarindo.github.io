import React from 'react';
import { useStrings } from '@/i18n/useStrings';
import idBundle from '@/i18n/locales/id/partnership.json';
import enBundle from '@/i18n/locales/en/partnership.json';
import { engagementLinks } from '@/data/navigation';
import { PartnershipHero } from './sections/PartnershipHero';
import { PartnershipFocus } from './sections/PartnershipFocus';
import { PartnershipProcess } from './sections/PartnershipProcess';
import { PartnershipOffer } from './sections/PartnershipOffer';

export function Partnership() {
  const bundle = { id: idBundle, en: enBundle };
  useStrings(bundle);

  return (
    <>
      <PartnershipHero bundle={bundle} link={engagementLinks.partnership} />
      <PartnershipFocus bundle={bundle} />
      <PartnershipProcess bundle={bundle} />
      <PartnershipOffer bundle={bundle} link={engagementLinks.partnership} />
    </>
  );
}

export default Partnership;
