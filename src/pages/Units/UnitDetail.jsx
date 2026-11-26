import React from 'react';
import { useParams } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { FinalCta } from '@/components/ui/FinalCta';
import { NotFound } from '@/pages/NotFound/NotFound';
import { getUnitBySlug, units } from '@/data/units';
import { resolveThemeSlots } from './sections/themeRegistry';
import { useUnitView } from './sections/useUnitView';
import { useUnitsStrings } from './useUnitsStrings';

/**
 * One route, six theme slots. The registry owns every component mapping, so
 * adding a new variant never touches this page. Approved copy, facts, location
 * and the closing invitation stay identical on every combination.
 */
export function UnitDetail() {
  const { slug } = useParams();
  const t = useUnitsStrings();
  const common = useStrings({ id: idCommon, en: enCommon });
  const unit = getUnitBySlug(slug);
  const index = unit
    ? Math.max(0, units.findIndex((candidate) => candidate.slug === unit.slug))
    : 0;
  const slots = unit ? resolveThemeSlots(unit, index) : null;
  const v = useUnitView(unit, index, t, common, slots?.theme);

  if (!unit || !slots) return <NotFound />;

  const { Hero, Overview, Capabilities, Notes, Closing } = slots;

  return (
    <>
      <Hero unit={unit} v={v} />
      <Overview unit={unit} v={v} />
      <Capabilities unit={unit} v={v} />
      <Notes unit={unit} t={t} variant={slots.theme.notes} />
      <Closing t={t} ecosystem={v.ecosystem} />
      <FinalCta {...t.units.finalCta} />
    </>
  );
}

export default UnitDetail;
