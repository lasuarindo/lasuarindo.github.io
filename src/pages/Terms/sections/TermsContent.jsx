import React, { useMemo } from 'react';
import { LegalLayout } from '@/components/legal/LegalLayout';
import { LegalSection } from '@/components/legal/LegalSection';
import { LegalCallout } from '@/components/legal/LegalCallout';
import { LegalCta } from '@/components/legal/LegalCta';
import { Icon } from '@/components/ui/Icon';
import { CARD_CLASS, LIST_ITEM_CLASS } from '@/constants/layout';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTermsStrings } from '../useTermsStrings';

// Icon per section id; content stays in the locale bundle.
const SECTION_ICONS = {
  acceptance: 'check_circle',
  definitions: 'description',
  changes: 'update',
  'use-of-site': 'public',
  accounts: 'person',
  'intellectual-property': 'workspace_premium',
  'user-content': 'edit',
  privacy: 'shield',
  'third-parties': 'language',
  disclaimer: 'info',
  'limitation-of-liability': 'block',
  indemnification: 'handshake',
  suspension: 'cancel',
  'governing-law': 'gavel',
  miscellaneous: 'description',
  contact: 'mail',
};

export function TermsContent() {
  const t = useTermsStrings();
  const sections = t.terms.sections;

  const toc = useMemo(
    () =>
      sections.map((section) => ({
        id: section.id,
        icon: SECTION_ICONS[section.id] || 'description',
        title: section.title,
      })),
    [sections],
  );
  const ids = useMemo(() => sections.map((section) => section.id), [sections]);
  const [activeId, , lockActive] = useActiveSection(ids);

  return (
    <LegalLayout
      toc={toc}
      activeId={activeId}
      onNavigate={lockActive}
      tocTitle={t.terms.tocTitle}
      partsLabel={t.terms.partsLabel}
    >
      <div>
        {sections.map((section, sectionIdx) => (
          <LegalSection
            key={section.id}
            id={section.id}
            icon={SECTION_ICONS[section.id] || 'description'}
            title={section.title}
          >
            {section.paragraphs?.length > 0 &&
              (section.paragraphs.length > 1 ? (
                <div className="flex flex-col gap-6">
                  <div className="rounded-xl border border-[rgba(177,38,0,0.2)] bg-[rgba(177,38,0,0.055)] p-5">
                    <p className="m-0 text-[17px] leading-[1.7] text-[var(--color-on-background)]">
                      {section.paragraphs[0]}
                    </p>
                  </div>
                  {section.numbered ? (
                    <div className="flex flex-col gap-4">
                      {section.paragraphs.slice(1).map((text, idx) => (
                        <div key={idx} className="flex gap-4">
                          <span className="w-8 shrink-0 pt-[3px] font-[var(--font-display)] text-[12px] font-bold tabular-nums text-[var(--color-primary)]">
                            {sectionIdx + 1}.{idx + 2}
                          </span>
                          <p className="m-0 text-[15.5px] leading-[1.75] text-[var(--color-secondary)]">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {section.paragraphs.slice(1).map((text, idx) => (
                        <p
                          key={idx}
                          className="m-0 text-[15.5px] leading-[1.75] text-[var(--color-secondary)]"
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <p className="m-0 text-[16px] leading-[1.75] text-[var(--color-secondary)]">
                  {section.paragraphs[0]}
                </p>
              ))}

            {section.definitions?.length > 0 && (
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                {section.definitions.map((item, idx) => (
                  <div key={item.term} className={`${CARD_CLASS} p-4`}>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(177,38,0,0.08)]">
                        <Icon
                          name={item.icon || 'description'}
                          size={18}
                          color="#b12600"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="font-[var(--font-display)] text-[11px] font-bold tabular-nums text-[var(--color-primary)]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-[var(--font-display)] text-[15px] font-bold leading-[1.4] text-[var(--color-on-background)]">
                      {item.term}
                    </h3>
                    <p className="m-0 mt-2 text-[14px] leading-[1.65] text-[var(--color-secondary)]">
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {section.bullets?.length > 0 && (
              <ul className="mt-2 flex flex-col gap-2">
                {section.bullets.map((text) => (
                  <li key={text} className={LIST_ITEM_CLASS}>
                    <Icon
                      name="check_circle"
                      size={16}
                      color="#b12600"
                      className="mt-[2px]"
                      aria-hidden="true"
                    />
                    <span className="text-[14.5px] leading-[1.6] text-[var(--color-secondary)]">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {section.callout && (
              <LegalCallout
                tone={section.callout.tone || 'brand'}
                icon={section.callout.icon || 'info'}
                title={section.callout.title}
              >
                {section.callout.text}
              </LegalCallout>
            )}
          </LegalSection>
        ))}

        <div className="mt-16">
          <LegalCta text={t.terms.ctaText} buttonText={t.terms.contactCta} />
        </div>
      </div>
    </LegalLayout>
  );
}

export default TermsContent;