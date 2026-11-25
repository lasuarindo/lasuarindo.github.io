import React from 'react';
import { Link } from 'react-router';
import { useBusinessesStrings } from '../useBusinessesStrings';
import heroCity from '@/assets/images/opt/hero-city-wide-1600.webp';

export function BusinessesHero() {
  const t = useBusinessesStrings();

  return (
    <section className="cover">
      <div className="cover__copy">
        <span className="eyebrow eyebrow--light enter-once">{t.businesses.badge}</span>
        <h1 className="display display--hero enter-once" style={{ animationDelay: '60ms' }}>
          {t.businesses.heroTitle1}
          <br />
          {t.businesses.heroTitle2} <span className="text-[var(--color-primary-fixed-dim)]">{t.businesses.heroTitle3}</span>
          <br />
          <span className="text-[var(--color-primary-fixed-dim)]">{t.businesses.heroTitle4}</span>
        </h1>
        <p className="lead lead--light enter-once" style={{ animationDelay: '120ms' }}>
          {t.businesses.heroSubtitle}
        </p>
        <div className="cover__actions enter-once" style={{ animationDelay: '180ms' }}>
          <Link to="/contact" className="btn btn--solid">
            {t.businesses.partnerBtn}
          </Link>
        </div>
      </div>

      <div className="cover__media">
        <img
          src={heroCity}
          alt=""
          width="1600"
          height="858"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}

export default BusinessesHero;
