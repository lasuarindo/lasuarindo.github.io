import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { getEcosystemByKey } from '@/data/ecosystems';
import { getSectorByKey } from '@/data/sectors';
import { getUnitCategory, units } from '@/data/units';

/** Shared localized view data for every theme slot on a unit page. */
export function useUnitView(unit, index, t, common, theme) {
  const { language } = useLanguage();
  const category = unit ? getUnitCategory(unit.category) : null;
  const sector = unit ? getSectorByKey(unit.sector) : null;
  const ecosystem = unit ? getEcosystemByKey(unit.ecosystem) : null;

  return {
    language,
    theme,
    ecosystem,
    categoryLabel: category ? localized(category.label, language) : '',
    sectorLabel: sector ? localized(sector.title, language) : '',
    desc: unit ? localized(unit.desc, language) : '',
    overview: unit ? localized(unit.overview, language) : '',
    capabilities: unit ? unit.capabilities.map((capability) => localized(capability, language)) : [],
    number: String(index + 1).padStart(2, '0'),
    total: String(units.length).padStart(2, '0'),
    t,
    common,
  };
}

export default useUnitView;
