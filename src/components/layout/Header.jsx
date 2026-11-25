import React, { useCallback, useState } from 'react';
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

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className="site-header">
        <div className="wrap site-header__inner">
          <Link to={paths.home} className="site-header__brand">
            <img src={logoImg} alt="PT. LASUARINDO Logo" className="site-header__logo" />
            <span className="site-header__name">LASUARINDO GROUP</span>
          </Link>

          <nav aria-label={t.nav.primary} className="site-header__nav desktop-only">
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

          <div className="site-header__actions desktop-only">
            <LanguageSwitcher />
            <Link to={ctaLink.href} className="btn btn--solid site-header__cta">
              {t(ctaLink.labelKey)}
            </Link>
          </div>

          <div className="mobile-only">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t.footer.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="menu-toggle"
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu visible={menuOpen} onClose={closeMenu} />
    </>
  );
}

export default Header;
