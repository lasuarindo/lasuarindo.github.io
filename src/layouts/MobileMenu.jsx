import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Icon } from '@/components/Icon';
import { Colors } from '@/constants/theme';
import { motion, AnimatePresence } from 'motion/react';

export function MobileMenu({ visible, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const { language, setLanguage } = useLanguage();
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

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  const MENU_ITEMS = [
    { label: t.nav.home, href: '/', icon: 'home' },
    { label: t.nav.about, href: '/about-us', icon: 'info' },
    { label: t.nav.services, href: '/services', icon: 'design_services' },
    { label: t.nav.contact, href: '/contact', icon: 'mail' },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
            }}
          />

          {/* Slide-out Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{
              position: 'relative',
              width: '85%',
              maxWidth: '320px',
              height: '100%',
              backgroundColor: '#ffffff',
              boxShadow: '-8px 0 30px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 101,
            }}
          >
            {/* Drawer Header */}
            <div
              style={{
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #f0f0f0',
              }}
            >
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  fontSize: '18px',
                  letterSpacing: '0.5px',
                  color: Colors.primary,
                }}
              >
                LASUARINDO
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup menu"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: Colors.onSurface,
                  padding: '4px',
                }}
              >
                <Icon name="close" size={28} />
              </button>
            </div>

            {/* Navigation Items */}
            <div style={{ flex: 1, padding: '24px 16px', overflowY: 'auto' }}>
              {MENU_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => go(item.href)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      marginBottom: '8px',
                      border: 'none',
                      backgroundColor: active ? 'rgba(177, 38, 0, 0.08)' : 'transparent',
                      color: active ? Colors.primary : Colors.onBackground,
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '15px',
                      fontWeight: active ? 700 : 600,
                      transition: 'background-color 0.2s ease',
                    }}
                  >
                    <Icon
                      name={item.icon}
                      size={22}
                      color={active ? Colors.primary : Colors.secondary}
                    />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Drawer Footer: Language & CTA */}
            <div
              style={{
                padding: '16px 24px 28px 24px',
                borderTop: '1px solid rgba(228, 190, 181, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginTop: 'auto',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: Colors.secondary,
                    marginBottom: '10px',
                  }}
                >
                  {t.nav.language}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => setLanguage('id')}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: `1px solid ${language === 'id' ? Colors.primary : 'rgba(228, 190, 181, 0.4)'}`,
                      backgroundColor: language === 'id' ? Colors.primary : '#fafafa',
                      color: language === 'id' ? '#ffffff' : Colors.onSurface,
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    🇮🇩 Indonesia
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: `1px solid ${language === 'en' ? Colors.primary : 'rgba(228, 190, 181, 0.4)'}`,
                      backgroundColor: language === 'en' ? Colors.primary : '#fafafa',
                      color: language === 'en' ? '#ffffff' : Colors.onSurface,
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    🇬🇧 English
                  </button>
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => go('/contact')}
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  backgroundColor: Colors.primary,
                  color: '#ffffff',
                  border: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxShadow: '0 4px 14px rgba(177, 38, 0, 0.25)',
                  transition: 'background-color 0.2s ease',
                }}
              >
                {t.nav.cta}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
