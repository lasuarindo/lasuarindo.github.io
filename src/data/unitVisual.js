import cityImg from '@/assets/images/opt/hero-city-800.webp';
import teamImg from '@/assets/images/opt/about-team-1200.webp';
import propertyImg from '@/assets/images/opt/property-hero-1000.webp';
import technologyImg from '@/assets/images/opt/future-technology-1200.webp';
import mediaImg from '@/assets/images/opt/creative-media-900.webp';
import lifestyleImg from '@/assets/images/opt/vamos-1200.webp';

/**
 * Existing group imagery used as category-level illustration, never as a
 * photograph of a specific unit. The unit catalogue is marked DRAFT.
 */
export const UNIT_IMAGES = [
  cityImg,
  teamImg,
  propertyImg,
  technologyImg,
  mediaImg,
  lifestyleImg,
];

export function unitImage(index) {
  return UNIT_IMAGES[Math.abs(index) % UNIT_IMAGES.length];
}
