import cityImg from '@/assets/images/opt/jakarta-golden-hour-1562367072-800-opt.webp';
import wideCityImg from '@/assets/images/opt/hero-city-wide-1600.webp';
import propertyImg from '@/assets/images/opt/property-hero-1000.webp';
import technologyImg from '@/assets/images/opt/technology-grid-900.webp';
import foodImg from '@/assets/images/opt/ecosystem-service-1200.webp';
import lifestyleImg from '@/assets/images/opt/vamos-1200.webp';
import posterImg from '@/assets/images/opt/future-property-1200.webp';
import districtImg from '@/assets/images/opt/office-creative-1559136555-1800x438-opt.webp';
import { units } from '@/data/units';

/**
 * Mixed theme slots. The unit data keeps one shape; each slot picks a
 * composition independently. Selection is deterministic (sector + public
 * order), so a refresh never reshuffles a page and neighbours rarely match.
 * Imagery is category-level group photography, never a portrait of a unit.
 */
const MEDIA = {
  cityPortrait: { src: cityImg, width: 800, height: 950 },
  cityWide: { src: wideCityImg, width: 1600, height: 858 },
  property: { src: propertyImg, width: 1000, height: 1000 },
  technology: { src: technologyImg, width: 900, height: 900 },
  food: { src: foodImg, width: 1200, height: 1192 },
  lifestyle: { src: lifestyleImg, width: 1200, height: 900 },
  poster: { src: posterImg, width: 1200, height: 1086 },
  district: { src: districtImg, width: 1800, height: 438 },
};

const HERO_MEDIA = {
  ledger: MEDIA.cityPortrait,
  index: MEDIA.cityWide,
  protocol: MEDIA.technology,
  menu: MEDIA.food,
  court: MEDIA.lifestyle,
  site: MEDIA.property,
  poster: MEDIA.poster,
};

const HERO_POOLS = {
  investment: ['ledger', 'index'],
  property: ['site', 'poster'],
  technology: ['protocol', 'ledger'],
  food: ['menu', 'poster', 'index'],
  lifestyle: ['court', 'site', 'index'],
};

const OVERVIEW_SLOTS = ['ledger', 'split', 'quote', 'grid'];
const CAPABILITY_SLOTS = ['numbered', 'tiles', 'menu', 'protocol', 'strip'];
const NOTE_SLOTS = ['ledger', 'site', 'protocol', 'menu', 'court'];
const CLOSING_SLOTS = ['rail', 'split', 'index', 'quiet'];

export const THEME_SLOTS = {
  hero: [...new Set(Object.values(HERO_POOLS).flat())],
  overview: OVERVIEW_SLOTS,
  capabilities: CAPABILITY_SLOTS,
  notes: NOTE_SLOTS,
  closing: CLOSING_SLOTS,
};

/** Resolves one theme tuple for a unit. `index` is its position in /units. */
export function resolveUnitTheme(unit, index) {
  const heroes = HERO_POOLS[unit.sector] || ['ledger'];
  const occurrence = units.slice(0, index).filter((candidate) => candidate.sector === unit.sector).length;
  const hero = heroes[occurrence % heroes.length];

  return {
    hero,
    overview: OVERVIEW_SLOTS[(index + 1) % OVERVIEW_SLOTS.length],
    capabilities: CAPABILITY_SLOTS[(index * 2 + 1) % CAPABILITY_SLOTS.length],
    notes: NOTE_SLOTS[(index + 2) % NOTE_SLOTS.length],
    closing: CLOSING_SLOTS[(index + 3) % CLOSING_SLOTS.length],
    media: HERO_MEDIA[hero] || MEDIA.cityPortrait,
    band: MEDIA.district,
  };
}

export default THEME_SLOTS;
