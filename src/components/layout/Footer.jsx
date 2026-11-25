import React from 'react';
import { Link, useLocation } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import logoImg from '@/assets/images/logoHD-rmv.png';
import { footerGallery } from '@/data/footerGallery';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { company, formatAddress } from '@/data/company';
import { footerHelp, footerNav } from '@/data/navigation';
import { paths } from '@/app/paths';

const YEAR = new Date().getFullYear();

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
        <div className="border-b border-[var(--color-line)] py-10">
          <div className="wrap">
            <p className="eyebrow">{t.footer.creativeEcosystem}</p>
            <div className="footer-gallery">
              {gallery.map((src) => (
                <img key={src} src={src} alt="" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="wrap pt-16 pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Lasuarindo" className="h-10 w-auto" />
              <span className="font-[var(--font-display)] text-[18px] font-bold tracking-[-0.02em] text-[var(--color-ink)]">
                LASUARINDO GROUP
              </span>
            </div>
            <p className="eyebrow mb-3 mt-5">{t.footer.brandSubline}</p>
            <p className="prose max-w-[46ch]">{t.footer.tagline}</p>
            <div className="social-row mt-7">
              {company.social.map((item) => (
                <SocialButton key={item.label} label={item.label} url={item.url} icon={item.icon} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="footer-heading">{t.footer.navigation}</h2>
              <div className="footer-list">
                {footerNav.map((item) => (
                  <Link key={item.href} to={item.href} className="footer-link">
                    {t(item.labelKey)}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="footer-heading">{t.footer.help}</h2>
              <div className="footer-list">
                {footerHelp.map((item) => (
                  <Link key={item.href} to={item.href} className="footer-link">
                    {t(item.labelKey)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-row mt-14">
          <h2 className="footer-heading">{t.footer.contactUs}</h2>
          <ul className="footer-list">
            <li className="flex items-start gap-3 py-2">
              <Icon name="location_on" size={18} className="mt-[3px] text-[var(--color-muted)]" />
              <span className="prose">{formatAddress()}</span>
            </li>
            <li className="flex items-start gap-3 py-2">
              <Icon name="mail" size={18} className="mt-[3px] text-[var(--color-muted)]" />
              <a href={`mailto:${company.email}`} className="link-arrow">
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-legal mt-10">
          <span className="font-[var(--font-body)] text-[13px] text-[var(--color-muted)]">
            © {YEAR} {t.footer.copyright}
          </span>
          <span className="font-[var(--font-display)] text-[12px] font-semibold tracking-[0.06em] text-[var(--color-muted)]">
            {t.footer.hashtag}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
