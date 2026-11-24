import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { Icon } from '@/components/ui/Icon';
import logoImg from '@/assets/images/logoHD-rmv.png';

export function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const { language, setLanguage } = useLanguage();
  const t = useStrings({ id: idCommon, en: enCommon });

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        className={`glass-nav ${scrolled ? 'scrolled' : ''} sticky top-0 z-[80] w-full border-b border-[rgba(228,190,181,0.35)] bg-[rgba(249,249,249,0.88)] backdrop-blur-[16px]`}
      >
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-[clamp(14px,3vw,32px)] py-4">
          {/* Logo (flex: 1 matching react_native) */}
          <Link to="/" className="flex flex-1 items-center gap-3 no-underline">
            <img src={logoImg} alt="PT. LASUARINDO Logo" className="h-10 w-auto object-contain" />
            <span className="whitespace-nowrap font-[var(--font-display)] text-[clamp(15px,2.2vw,20px)] font-bold leading-7 tracking-[-0.2px] text-[var(--color-on-surface)]">
              LASUARINDO GROUP
            </span>
          </Link>

          {/* Desktop Nav (flex: 2, centered matching react_native) */}
          <nav className="desktop-only flex flex-[2] items-center justify-center gap-10">
            {MENU.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`nav-link-item border-b-2 pb-1 font-[var(--font-display)] text-[12px] font-bold uppercase tracking-[1.2px] no-underline transition-[color,border-color] duration-200 ${
                    active
                      ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                      : 'border-transparent text-[var(--color-secondary)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right: Lang Switcher & CTA */}
          <div className="desktop-only flex flex-1 items-center justify-end gap-4">
            {/* Language Switcher */}
            <div className="flex items-center rounded-full border border-[rgba(228,190,181,0.45)] bg-[rgba(255,255,255,0.85)] p-[3px]">
              <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`cursor-pointer rounded-full border-none px-[10px] py-1 font-[var(--font-display)] text-[11px] font-bold transition-colors duration-200 ${
                  language === 'id'
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-transparent text-[var(--color-secondary)]'
                }`}
              >
                ID
              </button>
              <div className="mx-px h-3 w-px bg-[rgba(228,190,181,0.5)]" />
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`cursor-pointer rounded-full border-none px-[10px] py-1 font-[var(--font-display)] text-[11px] font-bold transition-colors duration-200 ${
                  language === 'en'
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-transparent text-[var(--color-secondary)]'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-block cursor-pointer rounded-lg border-none bg-[var(--color-primary)] px-[22px] py-[10px] font-[var(--font-display)] text-[13px] font-bold text-[var(--color-on-primary)] no-underline shadow-[0_4px_14px_rgba(177,38,0,0.25)] transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-[var(--color-primary-container)]"
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile Right: Lang & Hamburger */}
          <div className="mobile-only items-center gap-[10px]">
            {/* Quick Lang Switch */}
            <div className="flex items-center rounded-full border border-[rgba(228,190,181,0.45)] bg-[rgba(255,255,255,0.85)] p-0.5">
              <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`cursor-pointer rounded-full border-none px-2 py-[3px] font-[var(--font-display)] text-[10px] font-bold ${
                  language === 'id'
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-transparent text-[var(--color-secondary)]'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`cursor-pointer rounded-full border-none px-2 py-[3px] font-[var(--font-display)] text-[10px] font-bold ${
                  language === 'en'
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-transparent text-[var(--color-secondary)]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t.footer.openMenu}
              className="flex cursor-pointer items-center justify-center border-none bg-transparent p-[6px] text-[var(--color-on-surface)]"
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

export default Header;