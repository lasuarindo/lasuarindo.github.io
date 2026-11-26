import { units } from '@/data/units';
import cityImg from '@/assets/images/opt/jakarta-golden-hour-1562367072-800-opt.webp';
import technologyImg from '@/assets/images/opt/server-racks-1558494949-opt.webp';
import propertyCurvedImg from '@/assets/images/opt/architecture-curved-facade-1554793000-1000x1000-opt.webp';
import propertyConcreteImg from '@/assets/images/opt/architecture-concrete-wood-1614595737476-opt.webp';
import propertyWhiteImg from '@/assets/images/opt/architecture-white-curves-1483366774565-1000x1000-opt.webp';
import foodLatteImg from '@/assets/images/opt/coffee-latte-art-1507915135761-1200x1192-opt.webp';
import foodEspressoImg from '@/assets/images/opt/coffee-barista-espresso-1513663580958-1200x1192-opt.webp';
import foodBaristaImg from '@/assets/images/opt/coffee-barista-neon-1595475038784-opt.webp';
import lifestylePaddleImg from '@/assets/images/opt/padel-paddle-balls-1526888935184-opt.webp';
import lifestyleCourtImg from '@/assets/images/opt/padel-flatlay-1646649853703-1200x900-opt.webp';
import lifestyleVamosImg from '@/assets/images/opt/vamos-1200.webp';

/**
 * Sector-level illustration for a unit card. Sectors with several units rotate
 * through suitable photographs; the unit catalogue is marked DRAFT, so imagery
 * never claims to depict a specific business.
 */
const SECTOR_IMAGES = {
  investment: [cityImg],
  property: [propertyConcreteImg, propertyWhiteImg, propertyCurvedImg],
  technology: [technologyImg],
  food: [foodLatteImg, foodEspressoImg, foodBaristaImg],
  lifestyle: [lifestylePaddleImg, lifestyleCourtImg, lifestyleVamosImg],
};

export function unitImage(unit) {
  const pool = SECTOR_IMAGES[unit?.sector] || [cityImg];
  const position = Math.max(0, units.findIndex((candidate) => candidate.slug === unit?.slug));
  const occurrence = units.slice(0, position).filter((candidate) => candidate.sector === unit?.sector).length;
  return pool[occurrence % pool.length];
}
