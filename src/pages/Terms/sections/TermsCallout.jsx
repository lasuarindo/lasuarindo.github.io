import React from 'react';

/** A note distinguished by a brand left rule, not by a tinted background. */
export function TermsCallout({ title, children }) {
  return (
    <aside className="border-l-2 border-[var(--color-primary)] pl-5">
      {title ? (
        <p className="m-0 font-[var(--font-display)] text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink)]">
          {title}
        </p>
      ) : null}
      <div className={`prose ${title ? 'mt-1.5' : ''}`.trim()}>{children}</div>
    </aside>
  );
}

export default TermsCallout;
