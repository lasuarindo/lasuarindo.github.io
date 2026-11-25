import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Icon } from '@/components/ui/Icon';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ctaLink, isNavActive, mainNav } from '@/data/navigation';
import { motion, AnimatePresence } from 'motion/react';

export function MobileMenu({ visible, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const t = useStrings({ id: idCommon, en: enCommon });

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  const go = (href) => {
    onClose();
    navigate(href);
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px]"
          />

          {/* Slide-out Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative z-[101] flex h-full w-[85%] max-w-[320px] flex-col bg-white shadow-[-8px_0_30px_rgba(0,0,0,0.25)]"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-[#f0f0f0] px-6 py-5">
              <span className="font-[var(--font-display)] text-[18px] font-extrabold tracking-[0.5px] text-[var(--color-primary)]">
                LASUARINDO
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.footer.closeMenu}
                className="flex cursor-pointer items-center justify-center border-none bg-transparent p-1 text-[var(--color-on-surface)]"
              >
                <Icon name="close" size={28} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              {mainNav.map((item) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => go(item.href)}
                    aria-current={active ? 'page' : undefined}
                    className={`mb-2 flex w-full cursor-pointer items-center gap-4 rounded-xl border-none px-4 py-[14px] text-left font-[var(--font-display)] text-[15px] transition-colors duration-200 ${
                      active
                        ? 'bg-[rgba(177,38,0,0.08)] font-bold text-[var(--color-primary)]'
                        : 'bg-transparent font-semibold text-[var(--color-on-background)]'
                    }`}
                  >
                    <Icon
                      name={item.icon}
                      size={22}
                      color={active ? '#b12600' : '#5f5e5e'}
                    />
                    <span>{t(item.labelKey)}</span>
                  </button>
                );
              })}
            </div>

            {/* Drawer Footer: Language & CTA */}
            <div className="mt-auto flex flex-col gap-4 border-t border-[rgba(228,190,181,0.25)] px-6 pb-7 pt-4">
              <div>
                <div className="mb-[10px] font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[1px] text-[var(--color-secondary)]">
                  {t.nav.language}
                </div>
                <LanguageSwitcher variant="drawer" />
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => go(ctaLink.href)}
                className="w-full cursor-pointer rounded-lg border-none bg-[var(--color-primary)] px-6 py-3 text-center font-[var(--font-display)] text-[14px] font-bold text-white shadow-[0_4px_14px_rgba(177,38,0,0.25)] transition-colors duration-200"
              >
                {t(ctaLink.labelKey)}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;