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

export const footerNav = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.about', href: '/about-us' },
  { labelKey: 'nav.services', href: '/services' },
];

export const footerHelp = [
  { labelKey: 'footer.contactUs', href: '/contact' },
  { labelKey: 'footer.privacyPolicy', href: '/legal/privacy-policy' },
  { labelKey: 'footer.terms', href: '/legal/term-condition' },
  { labelKey: 'footer.faq', href: '/faq' },
];

export function isNavActive(pathname, href) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}