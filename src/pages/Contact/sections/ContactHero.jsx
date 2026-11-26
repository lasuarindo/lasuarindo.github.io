import React from 'react';
import { useContactStrings } from '../useContactStrings';
import contactHeroImg from '@/assets/images/opt/jakarta-dusk-1666884257245-1200x1198-opt.webp';

export function ContactHero() {
  const t = useContactStrings();

  return (
    <section className="cover">
      <div className="cover__copy">
        <span className="eyebrow eyebrow--light enter-once">{t.contact.badge}</span>
        <h1 className="display display--hero enter-once" style={{ animationDelay: '60ms' }}>
          {t.contact.heroTitle1}
          <br />
          <span className="text-[var(--color-primary-fixed-dim)]">
            {t.contact.heroTitle2}
          </span>
        </h1>
        <p className="lead lead--light enter-once" style={{ animationDelay: '120ms' }}>
          {t.contact.heroSubtitle}
        </p>
      </div>
      <div className="cover__media">
        <img
          src={contactHeroImg}
          alt=""
          width="1200"
          height="1198"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}

export default ContactHero;
