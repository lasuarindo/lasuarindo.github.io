import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';
import propertiHeroImg from '@/assets/images/opt/property-hero-1000.webp';
import layananEkosistemImg from '@/assets/images/opt/ecosystem-service-1200.webp';

export function BusinessesProperty() {
  const t = useBusinessesStrings();

  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <div className="split">
          <div>
            <span className="eyebrow">{t.businesses.propertyLabel}</span>
            <h2 className="display display--section">{t.businesses.propertyHeading}</h2>
            <div className="rule" />
            <p className="lead">{t.businesses.propertyDesc}</p>
            <p className="prose mt-4 max-w-[62ch]">{t.businesses.propertyScope}</p>

            <div className="feature-row">
              {t.businesses.propertyFeatures.map((item) => (
                <div key={item.title}>
                  <Icon name={item.icon} size={22} color="#b12600" />
                  <h3>{item.title}</h3>
                  <p className="prose">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="recent-label">
              <Icon name="trending_up" size={16} color="#b12600" />
              <span>{t.businesses.recentProject}</span>
            </div>
          </div>

          <div className="photo-stack">
            <div className="figure">
              <img src={propertiHeroImg} alt={t.businesses.imageAlts.propertyDistrict} width="1000" height="1000" loading="lazy" decoding="async" />
            </div>
            <div className="figure">
              <img src={layananEkosistemImg} alt={t.businesses.imageAlts.propertyBuilding} width="1200" height="1193" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessesProperty;
