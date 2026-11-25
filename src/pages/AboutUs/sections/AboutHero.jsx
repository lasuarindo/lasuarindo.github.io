import React from 'react';
import { useAboutStrings } from '../useAboutStrings';
import aboutTeamImg from '@/assets/images/opt/about-team-1200.webp';

export function AboutHero() {
  const t = useAboutStrings();
  const heroFeatures = [
    { icon: 'settings_suggest', title: t.about.features.integrated.title, desc: t.about.features.integrated.desc },
    { icon: 'trending_up', title: t.about.features.sectors.title, desc: t.about.features.sectors.desc },
    { icon: 'rocket_launch', title: t.about.features.innovation.title, desc: t.about.features.innovation.desc },
    { icon: 'volunteer_activism', title: t.about.features.impact.title, desc: t.about.features.impact.desc },
  ];

  return (
    <section className="cover cover--light">
      <div className="cover__copy">
        <span className="eyebrow enter-once">{t.about.heroEyebrow}</span>
        <h1 className="display display--hero enter-once" style={{ animationDelay: '60ms' }}>
          {t.about.heroTitle1}
          <br />
          <span className="text-[var(--color-primary)]">{t.about.heroTitle2}</span>
        </h1>
        <p className="lead enter-once" style={{ animationDelay: '120ms' }}>
          <strong className="font-bold text-[var(--color-ink)]">{t.about.lead1}</strong>{' '}
          {t.about.lead2}
        </p>
        <p className="prose enter-once mt-4 max-w-[58ch]" style={{ animationDelay: '160ms' }}>
          {t.about.body}
        </p>
        <div className="cover__facts enter-once" style={{ animationDelay: '220ms' }}>
          {heroFeatures.map((f) => (
            <div key={f.title}>
              <span className="cover__fact-title whitespace-pre-line">{f.title}</span>
              <span className="cover__fact-desc">{f.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="cover__media">
        <img
          src={aboutTeamImg}
          alt={t.about.heroImageAlt}
          width="1200"
          height="1193"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}

export default AboutHero;
