import React, { useMemo } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTermsStrings } from '../useTermsStrings';
import { TermsLayout } from './TermsLayout';
import { TermsSection } from './TermsSection';
import { TermsCallout } from './TermsCallout';
import { TermsCta } from './TermsCta';

export function TermsContent() {
  const t = useTermsStrings();
  const sections = t.terms.sections;

  // One source of truth for numbering: the order of the locale's section data.
  const toc = useMemo(
    () =>
      sections.map((section, idx) => ({
        id: section.id,
        number: idx + 1,
        title: section.title,
      })),
    [sections],
  );
  const ids = useMemo(() => sections.map((section) => section.id), [sections]);
  const [activeId, , lockActive] = useActiveSection(ids);

  return (
    <TermsLayout
      toc={toc}
      activeId={activeId}
      onNavigate={lockActive}
      tocTitle={t.terms.tocTitle}
      partsLabel={t.terms.partsLabel}
    >
      {sections.map((section, sectionIdx) => {
        const number = sectionIdx + 1;
        const paragraphs = section.paragraphs || [];

        return (
          <TermsSection key={section.id} id={section.id} number={number} title={section.title}>
            {paragraphs.map((text, idx) => {
              const isLead = idx === 0;
              const style = isLead ? 'lead' : 'prose';

              // Numbered clauses use the same section number as the heading,
              // with a local paragraph index starting at 1.
              if (section.numbered) {
                return (
                  <div
                    key={`${section.id}-p-${idx}`}
                    className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-4"
                  >
                    <span className="pt-[3px] font-[var(--font-display)] text-[11px] font-bold tabular-nums text-[var(--color-primary)]">
                      {number}.{idx + 1}
                    </span>
                    <p className={style}>{text}</p>
                  </div>
                );
              }

              return (
                <p key={`${section.id}-p-${idx}`} className={style}>
                  {text}
                </p>
              );
            })}

            {section.definitions?.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {section.definitions.map((item, idx) => (
                  <div
                    key={item.term}
                    className="rounded-[2px] border border-[var(--color-line)] bg-white p-4"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="m-0 font-[var(--font-display)] text-[14px] font-bold leading-[1.4] text-[var(--color-ink)]">
                        {item.term}
                      </h3>
                      <span className="font-[var(--font-display)] text-[10px] font-bold tabular-nums tracking-[0.1em] text-[var(--color-primary)]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="prose mt-2">{item.definition}</p>
                  </div>
                ))}
              </div>
            )}

            {section.bullets?.length > 0 && (
              <ul className="ml-5 list-disc space-y-2 marker:text-[var(--color-primary)]">
                {section.bullets.map((text) => (
                  <li key={text} className="prose pl-1">
                    {text}
                  </li>
                ))}
              </ul>
            )}

            {section.callout && (
              <TermsCallout title={section.callout.title}>{section.callout.text}</TermsCallout>
            )}
          </TermsSection>
        );
      })}

      <div className="mt-16">
        <TermsCta text={t.terms.ctaText} buttonText={t.terms.contactCta} />
      </div>
    </TermsLayout>
  );
}

export default TermsContent;
