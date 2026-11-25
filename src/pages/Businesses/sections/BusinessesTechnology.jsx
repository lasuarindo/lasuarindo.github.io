import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';
import teknologiImg from '@/assets/images/opt/technology-584.webp';
import teknologiGridImg from '@/assets/images/opt/technology-grid-900.webp';
import proyekTeknologiImg from '@/assets/images/opt/future-technology-1200.webp';

export function BusinessesTechnology() {
  const t = useBusinessesStrings();

  return (
    <section className="section section--ink">
      <div className={CONTAINER}>
        <div className="split">
          <div>
            <span className="eyebrow eyebrow--light">{t.businesses.techLabel}</span>
            <h2 className="display display--section display--light">
              {t.businesses.techHeading}
            </h2>
            <div className="rule rule--light" />
            <p className="lead lead--light">{t.businesses.techDesc}</p>

            <div className="mt-8 flex flex-col gap-4">
              {t.businesses.techCards.map((item) => (
                <div key={item.title} className="dark-card">
                  <div className="mb-3 flex items-center gap-3">
                    <Icon name={item.icon} size={20} color="#ffb4a3" />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="tech-grid">
              <div className="figure">
                <img src={teknologiImg} alt={t.businesses.imageAlts.techPlatform} width="584" height="500" loading="lazy" decoding="async" />
              </div>
              <div className="figure">
                <img src={teknologiGridImg} alt={t.businesses.imageAlts.techGrid} width="900" height="900" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="figure">
              <img src={proyekTeknologiImg} alt={t.businesses.imageAlts.techProject} width="1200" height="922" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessesTechnology;
