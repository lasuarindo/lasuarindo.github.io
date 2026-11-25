import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';

/** Points to the district level — unit names belong on /units and /ecosystems. */
export function BusinessesEcosystem() {
  const t = useBusinessesStrings();

  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader
          badge={t.businesses.ecosystemBadge}
          titlePrimary={t.businesses.ecosystemHeading}
          subtitle={t.businesses.ecosystemDesc}
        />
        <div className="mt-2">
          <Link to="/ecosystems/t46" className="btn btn--solid">
            {t.businesses.ecosystemCta}
            <Icon name="arrow_forward" size={18} color="#ffffff" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BusinessesEcosystem;
