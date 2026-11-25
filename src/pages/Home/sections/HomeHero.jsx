import React from 'react';
import { Link } from 'react-router';
import { useHomeStrings } from '../useHomeStrings';
import heroCity800 from '@/assets/images/opt/hero-city-800.webp';
import heroCity1600 from '@/assets/images/opt/hero-city-1600.webp';
import { paths } from '@/app/paths';

export function HomeHero() {
  const t = useHomeStrings();

  return (
    <section className="cover">
      <div className="cover__copy">
        <span className="eyebrow eyebrow--light enter-once">{t.home.badge}</span>
        <h1
          className="display display--hero enter-once"
          style={{ animationDelay: '60ms' }}
        >
          {t.home.heroTitle1}
          <br />
          <span className="text-[var(--color-primary-fixed-dim)]">
            {t.home.heroTitle2}
          </span>
          <br />
          {t.home.heroTitle3}
          <br />
          <span className="text-[var(--color-primary-fixed-dim)]">
            {t.home.heroTitle4}
          </span>
        </h1>
        <p
          className="lead lead--light enter-once"
          style={{ animationDelay: '120ms' }}
        >
          {t.home.heroSubtitle}
        </p>
        <div
          className="cover__actions enter-once"
          style={{ animationDelay: '180ms' }}
        >
          <Link to={paths.businesses} className="btn btn--solid">
            {t.home.exploreBtn}
          </Link>
          <Link to={paths.vision} className="btn btn--light">
            {t.home.visionBtn}
          </Link>
        </div>
        <div
          className="cover__facts enter-once"
          style={{ animationDelay: '220ms' }}
        >
          <div>
            <span className="cover__fact-title">{t.home.integrityTitle}</span>
            <span className="cover__fact-desc">{t.home.integrityDesc}</span>
          </div>
          <div>
            <span className="cover__fact-title">{t.home.innovationTitle}</span>
            <span className="cover__fact-desc">{t.home.innovationDesc}</span>
          </div>
        </div>
      </div>

      <div className="cover__media">
        <img
          src={heroCity800}
          srcSet={`${heroCity800} 800w, ${heroCity1600} 1600w`}
          sizes="(max-width: 900px) 100vw, 48vw"
          alt=""
          width="800"
          height="950"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}

export default HomeHero;
