import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { Icon } from '@/components/ui/Icon';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ctaLink, isNavActive, mainNav } from '@/data/navigation';
import logoImg from '@/assets/images/logoHD-rmv.png';
import { paths } from '@/app/paths';

export function Header() {
  const location = useLocation();
  const pathname = location.pathname;
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

  return (
    <>
      <header
        className={`glass-nav ${scrolled ? 'scrolled' : ''} sticky top-0 z-[80] w-full`}
      >
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-[clamp(14px,3vw,32px)] py-4">
          {/* Logo (flex: 1 matching react_native) */}
          <Link to={paths.home} className="flex flex-1 items-center gap-3 no-underline">
            <img src={logoImg} alt="PT. LASUARINDO Logo" className="h-10 w-auto object-contain" />
            <span className="whitespace-nowrap font-[var(--font-display)] text-[clamp(15px,2.2vw,20px)] font-bold leading-7 tracking-[-0.2px] text-[var(--color-on-surface)]">
              LASUARINDO GROUP
            </span>
          </Link>

          {/* Desktop Nav (flex: 2, centered matching react_native) */}
          <nav aria-label={t.nav.primary} className="desktop-only flex flex-[2] items-center justify-center gap-5">
            {mainNav.map((item) => {
              const active = isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  data-active={active ? 'true' : undefined}
                  className="nav-link-item"
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right: Lang Switcher & CTA */}
          <div className="desktop-only flex flex-1 items-center justify-end gap-4">
            <LanguageSwitcher variant="pill" />

            {/* CTA Button */}
            <Link
              to={ctaLink.href}
              className="btn btn--solid btn--sm"
            >
              {t(ctaLink.labelKey)}
            </Link>
          </div>

          {/* Mobile Right: Lang & Hamburger */}
          <div className="mobile-only items-center gap-[10px]">
            <LanguageSwitcher variant="compact" />

            {/* Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t.footer.openMenu}
              className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center border-none bg-transparent text-[var(--color-on-surface)]"
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