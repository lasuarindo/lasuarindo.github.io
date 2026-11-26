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

function TocList({ toc, activeId, onNavigate, className = 'flex flex-col' }) {
  return (
    <ol className={className}>
      {toc.map((item) => {
        const active = activeId === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active ? 'location' : undefined}
              onClick={(event) => scrollToTocTarget(event, item, onNavigate)}
              className={`flex min-h-[44px] items-center gap-3 border-l-2 bg-white px-3 text-[12.5px] leading-[1.45] no-underline transition-colors duration-150 ${
                active
                  ? 'border-[var(--color-primary)] bg-[#fcf9f9] font-semibold text-[var(--color-primary)]'
                  : 'border-transparent text-[var(--color-muted)] hover:border-[var(--color-line-strong)] hover:text-[var(--color-ink)]'
              }`}
            >
              <span className="w-6 shrink-0 font-[var(--font-display)] text-[11px] font-bold tabular-nums text-[var(--color-primary)]">
                {String(item.number).padStart(2, '0')}
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
 * Terms-only outline shell: sticky flat TOC on desktop, collapsible outline on
 * mobile. Scroll-spy, hash deep links and the `legal-toc-scroll` hook are kept.
 */
export function TermsLayout({ toc, activeId, onNavigate, tocTitle, partsLabel, children }) {
  const desktopNavRef = useRef(null);

  useEffect(() => () => cancelScrollAnimation(), []);

  // A hash can arrive before the lazy route has rendered; retry until it exists.
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
    <section className="section section--paper">
      <div className={CONTAINER}>
        <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              {/* Mobile outline */}
              <details className="group rounded-[2px] border border-[var(--color-line)] bg-white lg:hidden">
                <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-2 px-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] [&::-webkit-details-marker]:hidden">
                  <span className={`${DISPLAY_FONT} text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-ink)]`}>
                    {tocTitle}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className={`${BODY_FONT} text-[11px] text-[var(--color-muted)]`}>
                      {toc.length} {partsLabel}
                    </span>
                    <Icon
                      name="chevron_right"
                      size={14}
                      color="#6b665f"
                      className="transition-transform duration-200 group-open:rotate-90"
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <nav aria-label={tocTitle} className="border-t border-[var(--color-line)] p-2.5">
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
                className="legal-toc-scroll hidden max-h-[calc(100vh-7rem)] overflow-y-auto overflow-x-hidden rounded-[2px] border border-[var(--color-line)] bg-white p-3 lg:block"
              >
                <h2 className={`m-0 mb-3 ${DISPLAY_FONT} text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]`}>
                  {tocTitle}
                </h2>
                <TocList toc={toc} activeId={activeId} onNavigate={onNavigate} />
              </nav>
            </div>
          </div>

          <div className="mt-10 lg:col-span-1 lg:mt-0">
            <div className="max-w-[68ch]">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsLayout;
