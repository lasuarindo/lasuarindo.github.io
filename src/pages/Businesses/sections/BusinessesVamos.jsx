import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';
import vamosImg from '@/assets/images/opt/vamos-1200.webp';

export function BusinessesVamos() {
  const t = useBusinessesStrings();

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <div className="split">
          <div className="figure figure--portrait">
            <img src={vamosImg} alt={t.businesses.imageAlts.vamos} width="1200" height="900" loading="lazy" decoding="async" />
          </div>
          <div>
            <span className="eyebrow">{t.businesses.vamosBadge}</span>
            <h2 className="display display--section">
              {t.businesses.vamosHeading1}
              <span className="text-[var(--color-primary)]">
                {t.businesses.vamosHeading2}
              </span>
            </h2>
            <div className="rule" />
            <p className="lead">{t.businesses.vamosDesc}</p>

            <div className="tag-list mt-8">
              {t.businesses.vamosTags.map((tag) => (
                <div key={tag.label}>
                  <Icon name={tag.icon} size={17} color="#ffb4a3" />
                  <span>{tag.label}</span>
                </div>
              ))}
            </div>

            <div className="social-row mt-8" aria-hidden="true">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <span key={social}>
                  <Icon name={social} size={18} color="rgba(255,255,255,0.6)" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessesVamos;
