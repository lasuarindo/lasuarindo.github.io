import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Icon } from '@/components/ui/Icon';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ctaLink, isNavActive, mainNav } from '@/data/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

export function MobileMenu({ visible, onClose }) {
  const location = useLocation();
  const pathname = location.pathname;
  const t = useStrings({ id: idCommon, en: enCommon });
  const reduceMotion = useReducedMotion();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!visible) return undefined;

    const previouslyFocused = document.activeElement;
    const drawer = drawerRef.current;
    const focusable = () =>
      Array.from(
        drawer?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? [],
      );

    focusable()[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    // Only the vertical axis is locked: overflow-x stays `clip` as in base.css.
    const previousOverflowY = document.body.style.overflowY;
    document.body.style.overflowY = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflowY = previousOverflowY;
      previouslyFocused?.focus?.();
    };
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            onClick={onClose}
            className="absolute inset-0 bg-[rgba(0,0,0,0.45)]"
          />

          <motion.div
            ref={drawerRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.primary}
            initial={reduceMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { x: '100%' }}
            transition={reduceMotion ? { duration: 0 } : { type: 'spring', damping: 32, stiffness: 320 }}
            className="relative z-[101] flex h-full w-full max-w-[420px] flex-col border-l border-[var(--color-line)] bg-[var(--color-paper)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-[var(--color-line)] px-6 py-3">
              <span className="font-[var(--font-display)] text-[15px] font-bold tracking-[-0.01em] text-[var(--color-ink)]">
                LASUARINDO GROUP
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.footer.closeMenu}
                className="menu-toggle"
              >
                <Icon name="close" size={24} />
              </button>
            </div>

            <nav aria-label={t.nav.primary} className="flex-1 overflow-y-auto px-4 py-5">
              {mainNav.map((item) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    aria-current={active ? 'page' : undefined}
                    data-active={active ? 'true' : undefined}
                    className="drawer-link"
                  >
                    <Icon name={item.icon} size={20} />
                    <span>{t(item.labelKey)}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-[var(--color-line)] px-6 pb-7 pt-5">
              <p className="eyebrow">{t.nav.language}</p>
              <LanguageSwitcher variant="drawer" />
              <Link to={ctaLink.href} onClick={onClose} className="btn btn--solid mt-4 w-full">
                {t(ctaLink.labelKey)}
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
