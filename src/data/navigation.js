/**
 * Navigation structure shared by the desktop header, mobile drawer and footer.
 * Labels are locale keys so the active language resolves them; `icon` is only
 * used by the mobile drawer.
 */

export const mainNav = [
  { labelKey: 'nav.home', href: '/', icon: 'home' },
  { labelKey: 'nav.about', href: '/about-us', icon: 'info' },
  { labelKey: 'nav.services', href: '/services', icon: 'design_services' },
  { labelKey: 'nav.contact', href: '/contact', icon: 'mail' },
];

export const ctaLink = { labelKey: 'nav.cta', href: '/contact' };

export const footerLegal = [
  { labelKey: 'footer.privacyPolicy', href: '/privacy-policy' },
  { labelKey: 'footer.terms', href: null },
  { labelKey: 'footer.investorRelations', href: '/contact' },
  { labelKey: 'footer.globalOffice', href: '/contact' },
];

export function isNavActive(pathname, href) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}