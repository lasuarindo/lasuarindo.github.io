/**
 * Navigation structure shared by the desktop header, mobile drawer and footer.
 * Labels are locale keys so the active language resolves them; `icon` is only
 * used by the mobile drawer. Every destination comes from `app/paths`.
 *
 * Header has exactly six items: Beranda, Tentang Kami, Bisnis Kami, Ekosistem,
 * Unit, Kontak — in that order. New districts are data, not menu items, and
 * /licence is reached from the footer, /about-us and /legal (not the header).
 */

import { paths } from '@/app/paths';

export const mainNav = [
  { labelKey: 'nav.home', href: paths.home, icon: 'home' },
  { labelKey: 'nav.about', href: paths.about, icon: 'info' },
  { labelKey: 'nav.businesses', href: paths.businesses, icon: 'design_services' },
  { labelKey: 'nav.ecosystems', href: paths.ecosystems, icon: 'apartment' },
  { labelKey: 'nav.units', href: paths.units, icon: 'boxes' },
  { labelKey: 'nav.contact', href: paths.contact, icon: 'mail' },
];

export const ctaLink = { labelKey: 'nav.cta', href: paths.contact };

export const footerNav = [
  { labelKey: 'nav.home', href: paths.home },
  { labelKey: 'nav.about', href: paths.about },
  { labelKey: 'nav.businesses', href: paths.businesses },
  { labelKey: 'nav.ecosystems', href: paths.ecosystems },
  { labelKey: 'nav.units', href: paths.units },
  { labelKey: 'footer.licence', href: paths.licence },
];

export const footerHelp = [
  { labelKey: 'footer.contactUs', href: paths.contact },
  { labelKey: 'footer.privacyPolicy', href: paths.privacy },
  { labelKey: 'footer.terms', href: paths.terms },
  { labelKey: 'footer.faq', href: paths.faq },
];

/**
 * A nested route marks its parent item active: /ecosystems/t46 belongs to
 * Ekosistem, /units/pro belongs to Unit. The home route must match exactly.
 */
export function isNavActive(pathname, href) {
  if (href === paths.home) return pathname === paths.home;
  return pathname === href || pathname.startsWith(`${href}/`);
}
