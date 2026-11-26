import React from 'react';
import { useParams } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { FinalCta } from '@/components/ui/FinalCta';
import { NotFound } from '@/pages/NotFound/NotFound';
import { getUnitBySlug, units } from '@/data/units';
import { getUnitTheme } from '@/data/unitTheme';
import { useUnitsStrings } from './useUnitsStrings';
import {
  CourtUnit,
  LedgerUnit,
  MenuUnit,
  ProtocolUnit,
  SiteUnit,
} from './sections/UnitThemes';

const THEME_COMPONENTS = {
  ledger: LedgerUnit,
  site: SiteUnit,
  protocol: ProtocolUnit,
  menu: MenuUnit,
  court: CourtUnit,
};

/**
 * One route, five compositions. The unit data keeps a single shape; the
 * sector decides which motif renders it. Approved overview, capabilities,
 * location and closing invitation stay intact on every motif.
 */
export function UnitDetail() {
  const { slug } = useParams();
  const t = useUnitsStrings();
  const common = useStrings({ id: idCommon, en: enCommon });
  const unit = getUnitBySlug(slug);

  if (!unit) return <NotFound />;

  const index = Math.max(
    0,
    units.findIndex((candidate) => candidate.slug === unit.slug),
  );
  const motif = getUnitTheme(unit.sector).motif;
  const Theme = THEME_COMPONENTS[motif] || THEME_COMPONENTS.ledger;

  return (
    <>
      <Theme unit={unit} index={index} t={t} common={common} />
      <FinalCta {...t.units.finalCta} />
    </>
  );
}

export default UnitDetail;
