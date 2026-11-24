import React, { useMemo } from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { BODY_FONT, CARD_CLASS, LIST_ITEM_CLASS } from '@/constants/layout';
import { LegalLayout } from '@/components/legal/LegalLayout';
import { LegalSection } from '@/components/legal/LegalSection';
import { LegalCallout } from '@/components/legal/LegalCallout';
import { LegalCta } from '@/components/legal/LegalCta';
import { useActiveSection } from '@/hooks/useActiveSection';
import { usePrivacyStrings } from '../usePrivacyStrings';

const SECTION_ICONS = {
  introduction: 'description',
  'information-collected': 'storage',
  'information-usage': 'settings_suggest',
  'data-protection': 'shield',
  'data-sharing': 'share',
  cookies: 'cookie',
  'user-rights': 'admin_panel_settings',
  'policy-changes': 'history',
};

function InfoPanel({ icon, title, items }) {
  return (
    <div className={`${CARD_CLASS} p-6`}>
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(177,38,0,0.08)]">
          <Icon name={icon} size={17} color="#b12600" aria-hidden="true" />
        </span>
        <h3 className="m-0 font-[var(--font-display)] text-[16px] font-semibold leading-[1.3] text-[var(--color-on-background)]">
          {title}
        </h3>
      </div>
      <ul className="m-0 list-none space-y-2.5 p-0">
        {items.map((text) => (
          <li
            key={text}
            className="flex items-start gap-2 text-[15px] leading-[1.6] text-[var(--color-secondary)]"
          >
            <Icon name="check_circle" size={16} color="#b12600" className="mt-[3px]" aria-hidden="true" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
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
        icon: SECTION_ICONS[item.id] || 'description',
        title: item.title,
      })),
    [t.privacy.toc],
  );
  const ids = useMemo(() => toc.map((item) => item.id), [toc]);
  const [activeId, , lockActive] = useActiveSection(ids);

  return (
    <LegalLayout
      toc={toc}
      activeId={activeId}
      onNavigate={lockActive}
      tocTitle={t.privacy.tocTitle}
      partsLabel={t.privacy.partsLabel}
    >
      <div>
        {/* 1. Pendahuluan */}
        <LegalSection
          id="introduction"
          icon="description"
          title={sections.introduction.title}
        >
          <div className="rounded-xl border border-[rgba(177,38,0,0.15)] bg-[rgba(177,38,0,0.04)] p-5">
            <p className={`${BODY_FONT} m-0 text-[18px] leading-[1.7] text-[var(--color-on-background)]`}>
              {sections.introduction.lead}
            </p>
          </div>
          <p className={`${BODY_FONT} m-0 text-[16px] leading-[1.75] text-[var(--color-secondary)]`}>
            {sections.introduction.body}
          </p>
        </LegalSection>

        {/* 2. Informasi yang Kami Kumpulkan */}
        <LegalSection
          id="information-collected"
          icon="storage"
          title={sections.information.title}
        >
          <div className="rounded-xl border border-[rgba(177,38,0,0.2)] bg-[rgba(177,38,0,0.055)] p-5">
            <p className={`${BODY_FONT} m-0 text-[17px] leading-[1.7] text-[var(--color-on-background)]`}>
              {sections.information.intro}
            </p>
          </div>
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            <InfoPanel
              icon="person"
              title={sections.information.personalTitle}
              items={sections.information.personalItems}
            />
            <InfoPanel
              icon="devices"
              title={sections.information.technicalTitle}
              items={sections.information.technicalItems}
            />
          </div>
        </LegalSection>

        {/* 3. Penggunaan Informasi */}
        <LegalSection
          id="information-usage"
          icon="settings_suggest"
          title={sections.usage.title}
        >
          <div className="rounded-xl border border-[rgba(177,38,0,0.2)] bg-[rgba(177,38,0,0.055)] p-5">
            <p className={`${BODY_FONT} m-0 text-[17px] leading-[1.7] text-[var(--color-on-background)]`}>
              {sections.usage.intro}
            </p>
          </div>
          <ul className="mt-2 flex flex-col gap-2">
            {sections.usage.items.map((item) => (
              <li key={item.title} className={LIST_ITEM_CLASS}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(177,38,0,0.08)]">
                  <Icon name={item.icon} size={18} color="#b12600" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 font-[var(--font-display)] text-[15px] font-semibold leading-[1.4] text-[var(--color-on-background)]">
                    {item.title}
                  </h3>
                  <p className={`${BODY_FONT} m-0 mt-1 text-[14px] leading-[1.65] text-[var(--color-secondary)]`}>
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </LegalSection>

        {/* 4. Perlindungan Data */}
        <LegalSection
          id="data-protection"
          icon="shield"
          title={sections.protection.title}
        >
          <div className="rounded-xl border border-[rgba(177,38,0,0.2)] bg-[rgba(177,38,0,0.055)] p-5">
            <p className={`${BODY_FONT} m-0 text-[17px] leading-[1.7] text-[var(--color-on-background)]`}>
              {sections.protection.intro}
            </p>
          </div>
          <div className="mt-2 grid gap-3 md:grid-cols-3">
            {sections.protection.items.map((card, idx) => (
              <div key={card.title} className={`${CARD_CLASS} p-5`}>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(177,38,0,0.08)]">
                    <Icon name={card.icon} size={20} color="#b12600" aria-hidden="true" />
                  </span>
                  <span className="font-[var(--font-display)] text-[11px] font-bold tabular-nums text-[rgba(177,38,0,0.45)]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="m-0 font-[var(--font-display)] text-[15px] font-semibold leading-[1.4] text-[var(--color-on-background)]">
                  {card.title}
                </h3>
                <p className={`${BODY_FONT} m-0 mt-2 text-[14px] leading-[1.6] text-[var(--color-secondary)]`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </LegalSection>

        {/* 5. Berbagi Data */}
        <LegalSection id="data-sharing" icon="share" title={sections.sharing.title}>
          <div className="rounded-xl border border-[rgba(177,38,0,0.2)] bg-[rgba(177,38,0,0.055)] p-5">
            <p className={`${BODY_FONT} m-0 text-[17px] leading-[1.7] text-[var(--color-secondary)]`}>
              {sections.sharing.introPrefix}{' '}
              <strong className="font-bold text-[var(--color-on-background)]">
                {sections.sharing.introHighlight}
              </strong>{' '}
              {sections.sharing.introSuffix}
            </p>
          </div>
          <ul className="mt-2 flex flex-col gap-2">
            {sections.sharing.items.map((item) => (
              <li key={item.title} className={LIST_ITEM_CLASS}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(177,38,0,0.08)]">
                  <Icon name={item.icon} size={18} color="#b12600" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 font-[var(--font-display)] text-[15px] font-semibold leading-[1.4] text-[var(--color-on-background)]">
                    {item.title}
                  </h3>
                  <p className={`${BODY_FONT} m-0 mt-1 text-[14px] leading-[1.65] text-[var(--color-secondary)]`}>
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </LegalSection>

        {/* 6. Cookies */}
        <LegalSection id="cookies" icon="cookie" title={sections.cookies.title}>
          <div className="rounded-xl border border-[rgba(177,38,0,0.2)] bg-[rgba(177,38,0,0.055)] p-5">
            <p className={`${BODY_FONT} m-0 text-[17px] leading-[1.7] text-[var(--color-on-background)]`}>
              {sections.cookies.intro}
            </p>
          </div>
          <div className="relative mt-2">
            <div
              role="region"
              aria-label={sections.cookies.title}
              tabIndex={0}
              className="overflow-x-auto rounded-xl border border-[var(--color-outline-variant)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
            >
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead className="bg-[var(--color-surface-container-low)]">
                <tr>
                  {sections.cookies.tableHeaders.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-4 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--color-secondary)]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-outline-variant)] bg-white">
                {sections.cookies.rows.map((row) => (
                  <tr
                    key={row.type}
                    className="transition-colors duration-150 hover:bg-[var(--color-surface-container-low)]"
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-left text-[14px] font-semibold text-[var(--color-on-background)]"
                    >
                      {row.type}
                    </th>
                    <td className="px-4 py-3 text-[14px] text-[var(--color-secondary)]">
                      {row.purpose}
                    </td>
                    <td className="px-4 py-3 text-[14px] text-[var(--color-secondary)]">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-10 rounded-r-xl bg-[linear-gradient(to_left,white,rgba(255,255,255,0))] md:hidden"
            />
          </div>
          <LegalCallout
            tone={sections.cookies.callout.tone}
            icon={sections.cookies.callout.icon}
          >
            {sections.cookies.callout.text}
          </LegalCallout>
        </LegalSection>

        {/* 7. Hak Pengguna */}
        <LegalSection
          id="user-rights"
          icon="admin_panel_settings"
          title={sections.rights.title}
        >
          <div className="rounded-xl border border-[rgba(177,38,0,0.2)] bg-[rgba(177,38,0,0.055)] p-5">
            <p className={`${BODY_FONT} m-0 text-[17px] leading-[1.7] text-[var(--color-on-background)]`}>
              {sections.rights.intro}
            </p>
          </div>
          <div className="mt-2 grid gap-3 md:grid-cols-2">
            {sections.rights.items.map((right) => (
              <div
                key={right.title}
                className={`${CARD_CLASS} flex items-start gap-3 p-4`}
              >
                <Icon
                  name={right.icon}
                  size={18}
                  color="#b12600"
                  className="mt-[2px]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="m-0 font-[var(--font-display)] text-[14px] font-semibold leading-[1.4] text-[var(--color-on-background)]">
                    {right.title}
                  </h3>
                  <p className={`${BODY_FONT} m-0 mt-1 text-[13.5px] leading-[1.55] text-[var(--color-secondary)]`}>
                    {right.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className={`${BODY_FONT} m-0 text-[15px] leading-[1.7] text-[var(--color-secondary)]`}>
            {sections.rights.outroPrefix}{' '}
            <Link
              to="/contact"
              className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
            >
              {sections.rights.outroLink}
            </Link>
            {sections.rights.outroSuffix1}{' '}
            <strong className="font-bold text-[var(--color-on-background)]">
              {sections.rights.outroHighlight}
            </strong>
            {sections.rights.outroSuffix2}
          </p>
        </LegalSection>

        {/* 8. Perubahan Kebijakan */}
        <LegalSection
          id="policy-changes"
          icon="history"
          title={sections.changes.title}
        >
          <LegalCallout
            tone={sections.changes.callout.tone}
            icon={sections.changes.callout.icon}
          >
            {sections.changes.callout.paragraphs.map((text, idx) => (
              <p key={idx} className={`m-0 text-[15px] leading-[1.75] ${idx > 0 ? 'mt-3' : ''}`}>
                {text}
              </p>
            ))}
          </LegalCallout>
        </LegalSection>

        <div className="mt-16">
          <LegalCta text={t.privacy.ctaText} buttonText={t.privacy.ctaButton} />
        </div>
      </div>
    </LegalLayout>
  );
}

export default PrivacyContent;