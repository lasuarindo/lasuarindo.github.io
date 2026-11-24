import React, { useEffect, useRef } from 'react';
import { Icon } from '@/components/ui/Icon';
import { BODY_FONT, CONTAINER, DISPLAY_FONT } from '@/constants/layout';
import { cancelScrollAnimation, scrollToSection } from '@/utils/scrollToSection';

function scrollToTocTarget(event, item, onNavigate) {
  const details = event.currentTarget.closest('details');

  event.preventDefault();
  if (details) details.removeAttribute('open');
  onNavigate(item.id);

  const scroll = () => {
    const target = document.getElementById(item.id);
    if (!target) return;

    const offset = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 96;
    scrollToSection(item.id, { offset });

    if (window.location.hash !== `#${item.id}`) {
      window.history.replaceState(null, '', `#${item.id}`);
    }
  };

  if (details) {
    // Let the collapsed outline release its height before measuring the target.
    requestAnimationFrame(() => requestAnimationFrame(scroll));
  } else {
    scroll();
  }
}

function TocList({ toc, activeId, onNavigate, className = '' }) {
  return (
    <ol className={className || 'space-y-1'}>
      {toc.map((item) => {
        const active = activeId === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active ? 'location' : undefined}
              onClick={(event) => scrollToTocTarget(event, item, onNavigate)}
              className={`group flex items-start gap-2.5 rounded-lg px-2.5 py-1.5 text-[12.5px] font-medium leading-[1.4] no-underline transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ${
                active
                  ? 'bg-[rgba(177,38,0,0.08)] text-[var(--color-primary)]'
                  : 'text-[var(--color-secondary)] hover:bg-[var(--color-surface-container-low)] hover:text-[var(--color-on-background)]'
              }`}
            >
              <span
                className={`mt-[1px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md ${
                  active
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[rgba(177,38,0,0.08)] text-[var(--color-primary)]'
                }`}
              >
                <Icon name={item.icon || 'description'} size={14} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1 break-words">{item.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Two-column legal shell: sticky table of contents on desktop, a collapsible
 * outline on mobile, and a readable content column sized for long-form text.
 */
export function LegalLayout({ toc, activeId, onNavigate, tocTitle, partsLabel, children }) {
  const desktopNavRef = useRef(null);

  useEffect(() => () => cancelScrollAnimation(), []);

  // Direct hash links (e.g. /terms#disclaimer) arrive before the lazy page has
  // rendered, so retry until the target exists and then jump to it.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return undefined;

    let frame = 0;
    let attempts = 0;

    const tryScroll = () => {
      const target = document.getElementById(hash);
      if (target) {
        const offset = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 96;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: 'auto',
        });
        return;
      }
      if (attempts < 30) {
        attempts += 1;
        frame = requestAnimationFrame(tryScroll);
      }
    };

    frame = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Keep the active entry visible when the TOC itself scrolls.
  useEffect(() => {
    const nav = desktopNavRef.current;
    if (!nav) return;

    const link = nav.querySelector('a[aria-current="location"]');
    if (!link) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const outside = linkRect.top < navRect.top || linkRect.bottom > navRect.bottom;
    if (!outside) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    nav.scrollTo({
      top: nav.scrollTop + (linkRect.top - navRect.top) - 6,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }, [activeId]);

  return (
    <section className="bg-[var(--color-surface)] py-20 md:py-24">
      <div className={CONTAINER}>
        <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              {/* Mobile outline */}
              <details className="group rounded-2xl border border-[var(--color-outline-variant)] bg-white lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span
                    className={`${DISPLAY_FONT} text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--color-on-background)]`}
                  >
                    {tocTitle}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className={`${BODY_FONT} text-[11px] text-[var(--color-secondary)]`}>
                      {toc.length} {partsLabel}
                    </span>
                    <Icon
                      name="chevron_right"
                      size={14}
                      color="#5f5e5e"
                      className="transition-transform duration-200 group-open:rotate-90"
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <nav
                  aria-label={tocTitle}
                  className="border-t border-[var(--color-outline-variant)] p-2.5"
                >
                  <TocList
                    toc={toc}
                    activeId={activeId}
                    onNavigate={onNavigate}
                    className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-x-2"
                  />
                </nav>
              </details>

              {/* Desktop outline */}
              <nav
                ref={desktopNavRef}
                aria-label={tocTitle}
                className="legal-toc-scroll hidden max-h-[calc(100vh-7rem)] overflow-y-auto overflow-x-hidden rounded-2xl border border-[var(--color-outline-variant)] bg-white p-4 lg:block"
              >
                <div className="mb-4 flex items-center justify-between gap-2">
                  <h2
                    className={`m-0 ${DISPLAY_FONT} text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--color-on-background)]`}
                  >
                    {tocTitle}
                  </h2>
                  <span className="rounded-full bg-[rgba(177,38,0,0.08)] px-1.5 py-0.5 text-[10px] font-bold tabular-nums text-[var(--color-primary)]">
                    {toc.length}
                  </span>
                </div>
                <TocList toc={toc} activeId={activeId} onNavigate={onNavigate} />
              </nav>
            </div>
          </div>

          <div className="mt-12 lg:col-span-1 lg:mt-0">
            <div className="max-w-[68ch]">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegalLayout;