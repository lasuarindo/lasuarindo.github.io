import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { useLanguage } from '@/context/LanguageContext';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { MobileMenu } from '@/layouts/MobileMenu';
import { Icon } from '@/components/Icon';
import { Colors } from '@/constants/theme';
import logoImg from '@/assets/images/logoHD-rmv.png';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const { language, setLanguage } = useLanguage();
  const t = useStrings({ id: idCommon, en: enCommon });

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  const MENU = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about-us' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.contact, href: '/contact' },
  ];

  return (
    <>
      <header
        className={`glass-nav ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 80,
          backgroundColor: scrolled ? 'rgba(249, 249, 249, 0.96)' : 'rgba(249, 249, 249, 0.88)',
          borderBottom: '1px solid rgba(228, 190, 181, 0.35)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: scrolled ? '0 4px 24px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px clamp(14px, 3vw, 32px)',
          }}
        >
          {/* Logo (flex: 1 matching react_native) */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              flex: 1,
            }}
          >
            <img
              src={logoImg}
              alt="PT. LASUARINDO Logo"
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
            />
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(15px, 2.2vw, 20px)',
                lineHeight: '28px',
                letterSpacing: '-0.2px',
                color: Colors.onSurface,
                whiteSpace: 'nowrap',
              }}
            >
              LASUARINDO GROUP
            </span>
          </Link>

          {/* Desktop Nav (flex: 2, centered matching react_native) */}
          <nav
            className="desktop-only"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
              flex: 2,
            }}
          >
            {MENU.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="nav-link-item"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: active ? Colors.primary : Colors.secondary,
                    paddingBottom: '4px',
                    borderBottom: active ? `2px solid ${Colors.primary}` : '2px solid transparent',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = Colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = Colors.secondary;
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right: Lang Switcher & CTA */}
          <div
            className="desktop-only"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '16px',
              flex: 1,
            }}
          >
            {/* Language Switcher */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid rgba(228, 190, 181, 0.45)',
                borderRadius: '999px',
                padding: '3px',
              }}
            >
              <button
                type="button"
                onClick={() => setLanguage('id')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: language === 'id' ? Colors.primary : 'transparent',
                  color: language === 'id' ? '#ffffff' : Colors.secondary,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
              >
                ID
              </button>
              <div
                style={{
                  width: '1px',
                  height: '12px',
                  backgroundColor: 'rgba(228, 190, 181, 0.5)',
                  margin: '0 1px',
                }}
              />
              <button
                type="button"
                onClick={() => setLanguage('en')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: language === 'en' ? Colors.primary : 'transparent',
                  color: language === 'en' ? '#ffffff' : Colors.secondary,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => navigate('/contact')}
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
              style={{
                backgroundColor: ctaHover ? Colors.primaryContainer : Colors.primary,
                color: Colors.onPrimary,
                border: 'none',
                padding: '10px 22px',
                borderRadius: '8px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(177, 38, 0, 0.25)',
                transition: 'background-color 0.2s ease, transform 0.15s ease',
                transform: ctaHover ? 'translateY(-1px)' : 'none',
              }}
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile Right: Lang & Hamburger */}
          <div className="mobile-only" style={{ display: 'none', alignItems: 'center', gap: '10px' }}>
            {/* Quick Lang Switch */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid rgba(228, 190, 181, 0.45)',
                borderRadius: '999px',
                padding: '2px',
              }}
            >
              <button
                type="button"
                onClick={() => setLanguage('id')}
                style={{
                  padding: '3px 8px',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: language === 'id' ? Colors.primary : 'transparent',
                  color: language === 'id' ? '#ffffff' : Colors.secondary,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                style={{
                  padding: '3px 8px',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: language === 'en' ? Colors.primary : 'transparent',
                  color: language === 'en' ? '#ffffff' : Colors.secondary,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                EN
              </button>
            </div>

            {/* Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Buka menu"
              style={{
                background: 'none',
                border: 'none',
                color: Colors.onSurface,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: '6px',
              }}
            >
              <Icon name="menu" size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu visible={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

// Backward compatibility alias
export const HeaderNav = Header;
export default Header;
