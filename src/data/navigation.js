/**
 * Navigation structure shared by the desktop header, mobile drawer and footer.
 * Labels are locale keys so the active language resolves them; `icon` is only
 * used by the mobile drawer.
 *
 * Header has exactly six items: Beranda, Tentang Kami, Bisnis Kami, Ekosistem,
 * Unit, Kontak — in that order. New districts are data, not menu items, and
 * /licence is reached from the footer, /about-us and /legal (not the header).
 */

export const mainNav = [
  { labelKey: 'nav.home', href: '/', icon: 'home' },
  { labelKey: 'nav.about', href: '/about-us', icon: 'info' },
  { labelKey: 'nav.businesses', href: '/businesses', icon: 'design_services' },
  { labelKey: 'nav.ecosystems', href: '/ecosystems', icon: 'apartment' },
  { labelKey: 'nav.units', href: '/units', icon: 'boxes' },
  { labelKey: 'nav.contact', href: '/contact', icon: 'mail' },
];

export const ctaLink = { labelKey: 'nav.cta', href: '/contact' };

export const footerNav = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.about', href: '/about-us' },
  { labelKey: 'nav.businesses', href: '/businesses' },
  { labelKey: 'nav.ecosystems', href: '/ecosystems' },
  { labelKey: 'nav.units', href: '/units' },
  { labelKey: 'footer.licence', href: '/licence' },
];

export const footerHelp = [
  { labelKey: 'footer.contactUs', href: '/contact' },
  { labelKey: 'footer.privacyPolicy', href: '/legal/privacy-policy' },
  { labelKey: 'footer.terms', href: '/legal/term-condition' },
  { labelKey: 'footer.faq', href: '/faq' },
];

/**
 * A nested route marks its parent item active: /ecosystems/t46 belongs to
 * Ekosistem, /units/pro belongs to Unit. The home route must match exactly.
 */
export function isNavActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}
