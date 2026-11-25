import React from 'react';
import { useStrings } from '@/i18n/useStrings';
import idBundle from '@/i18n/locales/id/collaboration.json';
import enBundle from '@/i18n/locales/en/collaboration.json';
import { engagementLinks } from '@/data/navigation';
import { CollaborationHero } from './sections/CollaborationHero';
import { CollaborationFocus } from './sections/CollaborationFocus';
import { CollaborationProcess } from './sections/CollaborationProcess';
import { CollaborationOffer } from './sections/CollaborationOffer';

export function Collaboration() {
  const bundle = { id: idBundle, en: enBundle };
  useStrings(bundle);

  return (
    <>
      <CollaborationHero bundle={bundle} link={engagementLinks.collaboration} />
      <CollaborationFocus bundle={bundle} />
      <CollaborationProcess bundle={bundle} />
      <CollaborationOffer bundle={bundle} link={engagementLinks.collaboration} />
    </>
  );
}

export default Collaboration;
