import React from 'react';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';

/**
 * A quiet, visible marker for data that is still temporary. It never replaces
 * a fact — it sits next to it so readers know the item awaits verification.
 */
export function DraftBadge({ status = 'draft', className = '' }) {
  const t = useStrings({ id: idCommon, en: enCommon });
  if (status !== 'draft') return null;

  return (
    <span className={`draft-badge ${className}`.trim()} title={t.status.draftNote}>
      {t.status.draft}
    </span>
  );
}

export function DraftNote({ children, className = '' }) {
  const t = useStrings({ id: idCommon, en: enCommon });

  return (
    <p className={`draft-note ${className}`.trim()}>
      <DraftBadge />
      <span>{children || t.status.draftNote}</span>
    </p>
  );
}

export default DraftBadge;
