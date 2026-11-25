import React from 'react';

/**
 * One section header for the whole group profile: an editorial meta column,
 * a tight Montserrat heading, and a single lead paragraph. No pill badge,
 * no gradient rule.
 */
export function SectionHeader({
  badge,
  titlePrimary,
  titleSecondary,
  subtitle,
  darkTheme = false,
}) {
  return (
    <div
      className={`section-head ${badge ? '' : 'section-head--plain'} ${
        darkTheme ? 'section-head--dark' : ''
      }`.trim()}
    >
      {badge ? <span className="section-head__meta">{badge}</span> : null}
      <div className="section-head__body">
        <h2 className={`display display--section ${darkTheme ? 'display--light' : ''}`}>
          {titlePrimary}
          {titleSecondary ? (
            <span className="section-head__accent"> {titleSecondary}</span>
          ) : null}
        </h2>
        {subtitle ? (
          <p className={`lead ${darkTheme ? 'lead--light' : ''}`}>{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

export default SectionHeader;
