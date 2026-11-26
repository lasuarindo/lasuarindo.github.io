import React, { useMemo } from 'react';
import { Link } from 'react-router';
import { paths } from '@/app/paths';
import { useActiveSection } from '@/hooks/useActiveSection';
import { PrivacyLayout } from './PrivacyLayout';
import { PrivacySection } from './PrivacySection';
import { PrivacyCallout } from './PrivacyCallout';
import { PrivacyCta } from './PrivacyCta';
import { usePrivacyStrings } from '../usePrivacyStrings';

// Flat editorial surface: one border, square corners, no shadow, no tint.
const PANEL = 'rounded-[2px] border border-[var(--color-line)] bg-white p-5';
const NUMBER = 'font-[var(--font-display)] text-[12px] font-bold tabular-nums tracking-[0.1em] text-[var(--color-primary)]';
const SUBTITLE = 'm-0 font-[var(--font-display)] text-[15px] font-semibold leading-[1.35] text-[var(--color-ink)]';

function SimpleList({ items }) {
  return (
    <ul className="m-0 list-none space-y-2.5 p-0">
      {items.map((text) => (
        <li
          key={text}
          className="flex items-start gap-3 font-[var(--font-body)] text-[14px] leading-[1.65] text-[var(--color-muted)]"
        >
          <span
            aria-hidden="true"
            className="mt-[10px] h-[2px] w-3 shrink-0 bg-[var(--color-primary)]"
          />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoPanel({ title, items }) {
  return (
    <div className={PANEL}>
      <h3 className={`mb-4 ${SUBTITLE}`}>{title}</h3>
      <SimpleList items={items} />
    </div>
  );
}

function NumberedRows({ items }) {
  return (
    <div className="border-t border-[var(--color-line)]">
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="grid grid-cols-[36px_minmax(0,1fr)] gap-4 border-b border-[var(--color-line)] py-5 last:border-b-0"
        >
          <span className={NUMBER}>{String(idx + 1).padStart(2, '0')}</span>
          <div className="min-w-0">
            <h3 className={SUBTITLE}>{item.title}</h3>
            <p className="prose mt-1.5">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PrivacyContent() {
  const t = usePrivacyStrings();
  const sections = t.privacy.sections;

  const toc = useMemo(
    () =>
      t.privacy.toc.map((item) => ({
        id: item.id,
        number: item.number,
        title: item.title,
      })),
    [t.privacy.toc],
  );
  const ids = useMemo(() => toc.map((item) => item.id), [toc]);
  const [activeId, , lockActive] = useActiveSection(ids);

  return (
    <PrivacyLayout
      toc={toc}
      activeId={activeId}
      onNavigate={lockActive}
      tocTitle={t.privacy.tocTitle}
      partsLabel={t.privacy.partsLabel}
    >
      <div>
        {/* 1. Pendahuluan */}
        <PrivacySection id="introduction" number="1" title={sections.introduction.title}>
          <div className={PANEL}>
            <p className="m-0 font-[var(--font-body)] text-[17px] leading-[1.7] text-[var(--color-ink)]">
              {sections.introduction.lead}
            </p>
          </div>
          <p className="prose">{sections.introduction.body}</p>
        </PrivacySection>

        {/* 2. Informasi yang Kami Kumpulkan */}
        <PrivacySection id="information-collected" number="2" title={sections.information.title}>
          <div className={PANEL}>
            <p className="m-0 font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-ink)]">
              {sections.information.intro}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoPanel
              title={sections.information.personalTitle}
              items={sections.information.personalItems}
            />
            <InfoPanel
              title={sections.information.technicalTitle}
              items={sections.information.technicalItems}
            />
          </div>
        </PrivacySection>

        {/* 3. Penggunaan Informasi */}
        <PrivacySection id="information-usage" number="3" title={sections.usage.title}>
          <div className={PANEL}>
            <p className="m-0 font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-ink)]">
              {sections.usage.intro}
            </p>
          </div>
          <NumberedRows items={sections.usage.items} />
        </PrivacySection>

        {/* 4. Perlindungan Data */}
        <PrivacySection id="data-protection" number="4" title={sections.protection.title}>
          <div className={PANEL}>
            <p className="m-0 font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-ink)]">
              {sections.protection.intro}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {sections.protection.items.map((card, idx) => (
              <div key={card.title} className={PANEL}>
                <span className={NUMBER}>{String(idx + 1).padStart(2, '0')}</span>
                <h3 className={`mt-3 ${SUBTITLE}`}>{card.title}</h3>
                <p className="prose mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
        </PrivacySection>

        {/* 5. Berbagi Data */}
        <PrivacySection id="data-sharing" number="5" title={sections.sharing.title}>
          <div className={PANEL}>
            <p className="m-0 font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-muted)]">
              {sections.sharing.introPrefix}{' '}
              <strong className="font-bold text-[var(--color-ink)]">
                {sections.sharing.introHighlight}
              </strong>{' '}
              {sections.sharing.introSuffix}
            </p>
          </div>
          <NumberedRows items={sections.sharing.items} />
        </PrivacySection>

        {/* 6. Cookies */}
        <PrivacySection id="cookies" number="6" title={sections.cookies.title}>
          <div className={PANEL}>
            <p className="m-0 font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-ink)]">
              {sections.cookies.intro}
            </p>
          </div>
          <div
            role="region"
            aria-label={sections.cookies.title}
            tabIndex={0}
            className="overflow-x-auto rounded-[2px] border border-[var(--color-line)] bg-white focus-visible:border-[var(--color-primary)]"
          >
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--color-line)]">
                  {sections.cookies.tableHeaders.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-4 py-3 font-[var(--font-display)] text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-primary)]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sections.cookies.rows.map((row) => (
                  <tr
                    key={row.type}
                    className="border-b border-[var(--color-line)] last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-left text-[14px] font-semibold text-[var(--color-ink)]"
                    >
                      {row.type}
                    </th>
                    <td className="px-4 py-3 font-[var(--font-body)] text-[14px] text-[var(--color-muted)]">
                      {row.purpose}
                    </td>
                    <td className="px-4 py-3 font-[var(--font-body)] text-[14px] text-[var(--color-muted)]">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PrivacyCallout icon={sections.cookies.callout.icon}>
            {sections.cookies.callout.text}
          </PrivacyCallout>
        </PrivacySection>

        {/* 7. Hak Pengguna */}
        <PrivacySection id="user-rights" number="7" title={sections.rights.title}>
          <div className={PANEL}>
            <p className="m-0 font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-ink)]">
              {sections.rights.intro}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {sections.rights.items.map((right, idx) => (
              <div key={right.title} className={PANEL}>
                <span className={NUMBER}>{String(idx + 1).padStart(2, '0')}</span>
                <h3 className={`mt-2 ${SUBTITLE}`}>{right.title}</h3>
                <p className="prose mt-1">{right.desc}</p>
              </div>
            ))}
          </div>
          <p className="prose">
            {sections.rights.outroPrefix}{' '}
            <Link
              to={paths.contact}
              className="rounded-[2px] font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-primary-container)]"
            >
              {sections.rights.outroLink}
            </Link>
            {sections.rights.outroSuffix1}{' '}
            <strong className="font-bold text-[var(--color-ink)]">
              {sections.rights.outroHighlight}
            </strong>
            {sections.rights.outroSuffix2}
          </p>
        </PrivacySection>

        {/* 8. Perubahan Kebijakan */}
        <PrivacySection id="policy-changes" number="8" title={sections.changes.title}>
          <PrivacyCallout icon={sections.changes.callout.icon}>
            {sections.changes.callout.paragraphs.map((text, idx) => (
              <p key={idx} className={`m-0 leading-[1.7] ${idx > 0 ? 'mt-3' : ''}`}>
                {text}
              </p>
            ))}
          </PrivacyCallout>
        </PrivacySection>

        <div className="mt-16">
          <PrivacyCta text={t.privacy.ctaText} buttonText={t.privacy.ctaButton} />
        </div>
      </div>
    </PrivacyLayout>
  );
}

export default PrivacyContent;
