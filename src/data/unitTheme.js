import cityImg from '@/assets/images/opt/hero-city-800.webp';
import propertyImg from '@/assets/images/opt/property-hero-1000.webp';
import technologyImg from '@/assets/images/opt/technology-grid-900.webp';
import foodImg from '@/assets/images/opt/ecosystem-service-1200.webp';
import lifestyleImg from '@/assets/images/opt/vamos-1200.webp';
import districtImg from '@/assets/images/opt/ecosystem-wide-1800.webp';

/**
 * One motif per sector. The unit data keeps one shape; only the rendering
 * changes. Imagery is category-level group photography, never a portrait of a
 * specific unit, and stays decorative (empty alt) on every theme.
 */
export const UNIT_THEMES = {
  investment: {
    motif: 'ledger',
    dark: false,
    hero: { src: cityImg, width: 800, height: 950 },
    band: { src: districtImg, width: 1800, height: 438 },
  },
  property: {
    motif: 'site',
    dark: false,
    hero: { src: propertyImg, width: 1000, height: 1000 },
    band: { src: districtImg, width: 1800, height: 438 },
  },
  technology: {
    motif: 'protocol',
    dark: true,
    hero: { src: technologyImg, width: 900, height: 900 },
    band: { src: districtImg, width: 1800, height: 438 },
  },
  food: {
    motif: 'menu',
    dark: false,
    hero: { src: foodImg, width: 1200, height: 1192 },
    band: { src: districtImg, width: 1800, height: 438 },
  },
  lifestyle: {
    motif: 'court',
    dark: false,
    hero: { src: lifestyleImg, width: 1200, height: 900 },
    band: { src: districtImg, width: 1800, height: 438 },
  },
};

export function getUnitTheme(sectorKey) {
  return UNIT_THEMES[sectorKey] || UNIT_THEMES.investment;
}

export default UNIT_THEMES;
