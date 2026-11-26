import React from 'react';
import { Link, useLocation } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import logoImg from '@/assets/images/logoHD-rmv.png';
import { footerGallery } from '@/data/footerGallery';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { company, formatAddress } from '@/data/company';
import { footerGroups, isNavActive } from '@/data/navigation';
import { paths } from '@/app/paths';

const YEAR = new Date().getFullYear();
const OTHER_CHANNELS = company.social.filter((item) => item.icon !== 'mail');

function SocialButton({ label, url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-button"
    >
      <Icon name={icon} size={18} />
    </a>
  );
}

export function Footer() {
  const t = useStrings({ id: idCommon, en: enCommon });
  const { pathname } = useLocation();
  // The quiet ecosystem strip belongs to the Businesses route only.
  const isBusinesses = pathname === paths.businesses || pathname.startsWith(`${paths.businesses}/`);
  const gallery = isBusinesses ? footerGallery : [];

  return (
    <footer className="site-footer">
      {gallery.length > 0 && (
        <div className="border-b border-[rgba(255,255,255,0.18)] py-10">
          <div className="wrap">
            <p className="eyebrow eyebrow--light">{t.footer.creativeEcosystem}</p>
            <div className="footer-gallery">
              {gallery.map((src) => (
                <img key={src} src={src} alt="" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="wrap pt-16 pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Lasuarindo" className="h-10 w-auto" />
              <span className="font-[var(--font-display)] text-[18px] font-bold tracking-[-0.02em] text-[#f7f5f1]">
                LASUARINDO GROUP
              </span>
            </div>
            <p className="eyebrow eyebrow--light mb-3 mt-5">{t.footer.brandSubline}</p>
            <p className="prose prose--light max-w-[46ch]">{t.footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.labelKey}>
                <h2 className="footer-heading">{t(group.labelKey)}</h2>
                <div className="footer-list">
                  {group.items.map((item) => {
                    const active = isNavActive(pathname, item.href);
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        aria-current={active ? 'page' : undefined}
                        className="footer-link"
                      >
                        {t(item.labelKey)}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-contact mt-10">
          <h2 className="footer-heading">{t.footer.contactUs}</h2>
          <div className="footer-contact__list">
            <div className="footer-contact__item">
              <span className="footer-item-label">{t.footer.address}</span>
              <p className="footer-contact__value">{formatAddress()}</p>
            </div>
            <div className="footer-contact__item">
              <span className="footer-item-label">{t.nav.contact}</span>
              <a href={`mailto:${company.email}`} className="footer-email">
                {company.email}
              </a>
            </div>
            <div className="footer-contact__item">
              <span className="footer-item-label">{t.footer.more}</span>
              <div className="social-row footer-contact__socials">
                {OTHER_CHANNELS.map((item) => (
                  <SocialButton key={item.label} label={item.label} url={item.url} icon={item.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal mt-10">
          <span>© {YEAR} {t.footer.copyright}</span>
          <span className="font-[var(--font-display)] text-[12px] font-semibold tracking-[0.06em]">
            {t.footer.hashtag}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
