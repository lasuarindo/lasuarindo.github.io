import React from 'react';
import { Link, useLocation } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { Icon } from '@/components/ui/Icon';
import { Colors } from '@/constants/theme';
import { BODY_FONT, CONTAINER, DISPLAY_FONT } from '@/constants/layout';
import logoImg from '@/assets/images/logoHD-rmv.png';
import { footerGallery } from '@/data/footerGallery';
import { sectors } from '@/data/sectors';
import { localized } from '@/utils/localized';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { company, formatAddress } from '@/data/company';
import { footerLegal } from '@/data/navigation';

const YEAR = new Date().getFullYear();

const FOOTER_HEADING = `${DISPLAY_FONT} mb-5 text-[14px] font-bold uppercase tracking-[1px] text-white`;
const FOOTER_LINK = `${BODY_FONT} text-[14px] text-[#9ca3af] no-underline transition-colors duration-200 hover:text-[var(--color-primary)]`;

function SocialButton({ label, url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-[18px] border border-[rgba(255,255,255,0.2)] bg-transparent text-[#d1d5db] no-underline transition-all duration-200 hover:border-[var(--color-primary)] hover:text-white"
    >
      <Icon name={icon} size={18} />
    </a>
  );
}

export function Footer() {
  const { language } = useLanguage();
  const t = useStrings({ id: idCommon, en: enCommon });
  const { pathname } = useLocation();
  // Route-aware: the creative-ecosystem gallery only appears on the Services page.
  const isServices = pathname === '/services' || pathname.startsWith('/services/');
  const gallery = isServices ? footerGallery : [];

  const sectorList = [
    localized(sectors.find((s) => s.key === 'property').title, language),
    localized(sectors.find((s) => s.key === 'investment').title, language),
    localized(sectors.find((s) => s.key === 'technology').title, language),
    localized(sectors.find((s) => s.key === 'commerce').title, language),
    `${localized(sectors.find((s) => s.key === 'creative').title, language)} & ${localized(
      sectors.find((s) => s.key === 'media').title,
      language,
    )}`,
  ];

  const legalList = footerLegal.map((item) => ({
    label: t(item.labelKey),
    path: item.href,
  }));

  return (
    <footer
      className={`relative z-20 border-t-4 border-t-[var(--color-primary)] bg-[#111313] pb-8 text-[#f0f1f1] ${
        isServices && gallery.length ? 'pt-0' : 'pt-[60px]'
      }`}
    >
      {/* Gallery Section on Services Page */}
      {isServices && gallery.length > 0 && (
        <div className="mb-8 bg-[#111313] pt-8">
          <div className={CONTAINER}>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[24px] w-[4px] rounded-[2px] bg-[var(--color-primary)]" />
              <span className={`${DISPLAY_FONT} text-[14px] font-bold uppercase tracking-[1.12px] text-[var(--color-primary)]`}>
                {t.footer.creativeEcosystem}
              </span>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-[3px]">
              {gallery.map((imgSrc, i) => (
                <div
                  key={i}
                  className="img-zoom aspect-[16/10] overflow-hidden rounded-[4px] bg-[#2a2c2c]"
                >
                  <img src={imgSrc} alt="" className="block h-full w-full object-cover opacity-70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main 4-Column Footer */}
      <div className={CONTAINER}>
        <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
          {/* Col 1: Brand Info */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <img src={logoImg} alt="Lasuarindo" className="h-[36px] w-auto" />
              <span className={`${DISPLAY_FONT} text-[18px] font-extrabold tracking-[0.5px] text-white`}>
                LASUARINDO
              </span>
            </div>
            <p className={`${DISPLAY_FONT} mb-[14px] text-[11px] font-semibold uppercase tracking-[1px] text-[var(--color-primary)]`}>
              {t.footer.brandSubline}
            </p>
            <p className={`${BODY_FONT} mb-6 text-[14px] leading-[1.6] text-[#9ca3af]`}>
              {t.footer.tagline}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {company.social.map((item) => (
                <SocialButton key={item.label} label={item.label} url={item.url} icon={item.icon} />
              ))}
            </div>
          </div>

          {/* Col 2: Sektor Bisnis */}
          <div>
            <h4 className={FOOTER_HEADING}>
              {t.footer.sectors}
            </h4>
            <div className="flex flex-col gap-3">
              {sectorList.map((item) => (
                <Link key={item} to="/services" className={FOOTER_LINK}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Hubungi Kami */}
          <div>
            <h4 className={FOOTER_HEADING}>
              {t.footer.contactUs}
            </h4>
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-start gap-[10px]">
                <Icon name="location_on" size={18} color={Colors.primary} className="mt-[2px]" />
                <span className={`${BODY_FONT} text-[14px] leading-5 text-[#9ca3af]`}>
                  {formatAddress()}
                </span>
              </div>
              <a href={`mailto:${company.email}`} className={`${FOOTER_LINK} flex items-center gap-[10px]`}>
                <Icon name="mail" size={18} color={Colors.primary} />
                <span>{company.email}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Legalitas */}
          <div>
            <h4 className={FOOTER_HEADING}>
              {t.footer.legal}
            </h4>
            <div className="flex flex-col gap-3">
              {legalList.map((item) =>
                item.path ? (
                  <Link key={item.label} to={item.path} className={FOOTER_LINK}>
                    {item.label}
                  </Link>
                ) : (
                  <span key={item.label} className={`${BODY_FONT} text-[14px] text-[#6b7280]`}>
                    {item.label}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-t-[rgba(255,255,255,0.1)] pt-[28px]">
          <span className={`${BODY_FONT} text-[13px] text-[#9ca3af]`}>
            © {YEAR} {t.footer.copyright}
          </span>
          <span className={`${DISPLAY_FONT} text-[12px] font-semibold tracking-[0.5px] text-[var(--color-primary-fixed-dim)]`}>
            {t.footer.hashtag}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;