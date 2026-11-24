import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { BODY_FONT } from '@/constants/layout';

/**
 * Dark editorial hero shared by the legal pages. No eyebrow/kicker: the
 * heading carries the page, with the accent line in the brand's fixed-dim red.
 */
export function LegalHero({ titleLead, titleAccent, description, meta = [] }) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-inverse-surface)] pb-16 pt-32 md:pb-24 md:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-28 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,107,61,0.22),transparent_68%)] blur-2xl" />
        <div className="absolute -bottom-48 left-[18%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(255,182,139,0.12),transparent_70%)] blur-2xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <h1 className="m-0 font-[var(--font-display)] text-[clamp(34px,6vw,64px)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
            {titleLead}
            <br />
            <span className="text-[var(--color-primary-fixed-dim)]">{titleAccent}</span>
          </h1>

          <div className="mt-7 h-1 w-16 rounded-[2px] bg-[linear-gradient(to_right,#b12600,#ffb68b)]" />

          <p
            className={`${BODY_FONT} mt-7 max-w-[60ch] text-[17px] leading-[1.75] text-[rgba(240,241,241,0.72)] md:text-[18px]`}
          >
            {description}
          </p>

          {meta.length > 0 && (
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {meta.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <Icon name={item.icon} size={16} color="#ffb4a3" aria-hidden="true" />
                  <span className={`${BODY_FONT} text-[13px] text-[rgba(240,241,241,0.66)]`}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default LegalHero;