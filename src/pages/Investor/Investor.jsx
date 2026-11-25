import React from 'react';
import { useStrings } from '@/i18n/useStrings';
import idBundle from '@/i18n/locales/id/investor.json';
import enBundle from '@/i18n/locales/en/investor.json';
import { engagementLinks } from '@/app/paths';
import { InvestorHero } from './sections/InvestorHero';
import { InvestorFocus } from './sections/InvestorFocus';
import { InvestorProcess } from './sections/InvestorProcess';
import { InvestorOffer } from './sections/InvestorOffer';

export function Investor() {
  const bundle = { id: idBundle, en: enBundle };
  useStrings(bundle);

  return (
    <>
      <InvestorHero bundle={bundle} link={engagementLinks.investor} />
      <InvestorFocus bundle={bundle} />
      <InvestorProcess bundle={bundle} />
      <InvestorOffer bundle={bundle} link={engagementLinks.investor} />
    </>
  );
}

export default Investor;
