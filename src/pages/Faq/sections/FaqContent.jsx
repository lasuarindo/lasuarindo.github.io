import React, { useState } from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { DraftBadge, DraftNote } from '@/components/ui/DraftBadge';
import { FinalCta } from '@/components/ui/FinalCta';
import { CONTAINER } from '@/constants/layout';
import { engagementLinks, paths, routePaths } from '@/app/paths';
import { company, formatAddress } from '@/data/company';
import { useFaqStrings } from '../useFaqStrings';

const CATEGORY_ORDER = ['group', 'business', 'ecosystem', 'partnership', 'legal', 'contact'];

/** Locale links carry a key, never a path literal. */
const LINK_TARGETS = {
  about: paths.about,
  businesses: paths.businesses,
  ecosystems: paths.ecosystems,
  t46: routePaths.t46(),
  units: paths.units,
  licence: paths.licence,
  contact: paths.contact,
  legal: paths.legal,
  privacy: paths.privacy,
  terms: paths.terms,
  partnership: engagementLinks.partnership.to,
  investor: engagementLinks.investor.to,
  collaboration: engagementLinks.collaboration.to,
};

export function FaqContent() {
  const t = useFaqStrings();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const items = t.faq.items || [];
  const normalized = query.trim().toLowerCase();

  const shown = items.filter((item) => {
    if (activeCategory !== 'all' && item.category !== activeCategory) return false;
    if (!normalized) return true;
    const haystack = `${item.question} ${item.answer} ${t.faq.categories[item.category] || ''}`;
    return haystack.toLowerCase().includes(normalized);
  });

  const grouped = CATEGORY_ORDER.map((category) => ({
    key: category,
    label: t.faq.categories[category],
    items: shown.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0);

  const reset = () => {
    setQuery('');
    setActiveCategory('all');
  };

  return (
    <>
      <section className="section section--paper" aria-labelledby="faq-content-title">
        <div className={CONTAINER}>
          <div className="section-head">
            <span className="section-head__meta">{t.faq.contentMeta}</span>
            <div className="section-head__body">
              <h2 id="faq-content-title" className="display display--section">
                {t.faq.contentTitle}
              </h2>
              <p className="lead">{t.faq.contentLead}</p>
            </div>
          </div>

          <div className="faq-toolbar">
            <div className="faq-toolbar__search">
              <label htmlFor="faq-search" className="sr-only">
                {t.faq.searchLabel}
              </label>
              <div className="unit-search">
                <input
                  id="faq-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t.faq.searchPlaceholder}
                  aria-label={t.faq.searchLabel}
                />
              </div>
            </div>
            <div className="faq-toolbar__filters" role="group" aria-label={t.faq.filterLabel}>
              <button
                type="button"
                className="filter-chip"
                aria-pressed={activeCategory === 'all'}
                onClick={() => setActiveCategory('all')}
              >
                {t.faq.filterAll}
              </button>
              {CATEGORY_ORDER.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="filter-chip"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {t.faq.categories[category]}
                </button>
              ))}
            </div>
          </div>

          <p className="faq-results" role="status" aria-live="polite">
            {t('faq.resultsCount', { total: shown.length })}
          </p>

          {shown.length === 0 ? (
            <div className="empty-state">
              <h3 className="display display--card">{t.faq.emptyTitle}</h3>
              <p className="prose">{t.faq.emptyText}</p>
              <button type="button" className="btn btn--outline mt-6" onClick={reset}>
                {t.faq.resetFilters}
              </button>
            </div>
          ) : (
            <div className="faq-groups">
              {grouped.map((group, groupIndex) => (
                <div className="faq-group" key={group.key}>
                  <div className="faq-group__head">
                    <span className="faq-group__index">{String(groupIndex + 1).padStart(2, '0')}</span>
                    <h3 className="faq-group__title">{group.label}</h3>
                  </div>
                  <div className="faq-list">
                    {group.items.map((item) => (
                      <details className="faq-item" key={item.id}>
                        <summary className="faq-item__summary">
                          <span className="faq-item__question">
                            {item.question}
                            {item.status === 'draft' ? (
                              <DraftBadge status={item.status} className="faq-item__badge" />
                            ) : null}
                          </span>
                          <Icon name="chevron_right" size={20} color="#b12600" className="faq-item__icon" />
                        </summary>
                        <div className="faq-item__body">
                          <p className="faq-item__answer">{item.answer}</p>
                          {item.facts?.includes('address') ? (
                            <p className="faq-item__fact">{formatAddress({ includeCountry: true })}</p>
                          ) : null}
                          {item.facts?.includes('email') ? (
                            <a className="link-arrow faq-item__email" href={`mailto:${company.email}`}>
                              {company.email}
                            </a>
                          ) : null}
                          {item.links?.length ? (
                            <div className="faq-item__links">
                              {item.links
                                .filter((link) => LINK_TARGETS[link.key])
                                .map((link) => (
                                  <Link key={link.key} to={LINK_TARGETS[link.key]} className="faq-item__link">
                                    {link.label}
                                  </Link>
                                ))}
                            </div>
                          ) : null}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <DraftNote>{t.faq.draftLegend}</DraftNote>
        </div>
      </section>

      <FinalCta {...t.faq.finalCta} to={paths.contact} />
    </>
  );
}

export default FaqContent;
