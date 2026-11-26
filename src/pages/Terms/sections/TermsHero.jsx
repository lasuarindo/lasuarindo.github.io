import React from 'react';
import { useTermsStrings } from '../useTermsStrings';

/** Editorial cover: solid rule, Montserrat/Inter, quiet meta row — no blur, no glow. */
export function TermsHero() {
  const t = useTermsStrings();
  const count = t.terms.sections.length;

  return (
    <section className="cover cover--light cover--text">
      <div className="cover__copy">
        <h1 className="display display--hero enter-once">
          {t.terms.heroTitle1}
          <br />
          <span className="text-[var(--color-primary)]">{t.terms.heroTitle2}</span>
        </h1>
        <div className="rule enter-once" style={{ animationDelay: '60ms' }} aria-hidden="true" />
        <p className="lead enter-once" style={{ animationDelay: '120ms' }}>
          {t.terms.heroSubtitle}
        </p>
        <ul className="cover__facts enter-once" style={{ animationDelay: '180ms' }}>
          <li>
            <span className="cover__fact-title">{t.terms.lastUpdated}</span>
            <span className="cover__fact-desc">{t.terms.lastUpdatedDate}</span>
          </li>
          <li>
            <span className="cover__fact-title">{count}</span>
            <span className="cover__fact-desc">{t.terms.partsLabel}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TermsHero;
