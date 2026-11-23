import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { Icon } from '@/components/Icon';
import { Colors } from '@/constants/theme';
import logoImg from '@/assets/images/logoHD-rmv.png';
import { footerGallery } from '@/data/footerGallery';
import { sectors, localized } from '@/data/sectors';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';

const WEBSITE_URL = 'https://www.lasuarindo.co.id';
const INSTAGRAM_URL = 'https://www.instagram.com/lasuarindogroup';
const EMAIL_URL = 'mailto:contact@lasuarindo.co.id';

function SocialButton({ label, url, icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '18px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${hovered ? Colors.primary : 'rgba(255, 255, 255, 0.2)'}`,
        backgroundColor: 'transparent',
        color: hovered ? '#ffffff' : '#d1d5db',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
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

  const legalList = [
    { label: t.footer.privacyPolicy, path: '/privacy-policy' },
    { label: t.footer.terms, path: null },
    { label: t.footer.investorRelations, path: '/contact' },
    { label: t.footer.globalOffice, path: '/contact' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#111313',
        color: '#f0f1f1',
        paddingTop: isServices && gallery.length ? 0 : '60px',
        paddingBottom: '32px',
        borderTop: `4px solid ${Colors.primary}`,
        position: 'relative',
        zIndex: 20,
      }}
    >
      {/* Gallery Section on Services Page */}
      {isServices && gallery.length > 0 && (
        <div style={{ backgroundColor: '#111313', paddingTop: '32px', marginBottom: '32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '4px',
                  height: '24px',
                  borderRadius: '2px',
                  backgroundColor: Colors.primary,
                }}
              />
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '1.12px',
                  color: Colors.primary,
                  textTransform: 'uppercase',
                }}
              >
                {t.footer.creativeEcosystem}
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '3px',
              }}
            >
              {gallery.map((imgSrc, i) => (
                <div
                  key={i}
                  className="img-zoom"
                  style={{
                    borderRadius: '4px',
                    overflow: 'hidden',
                    aspectRatio: '16/10',
                    backgroundColor: '#2a2c2c',
                  }}
                >
                  <img
                    src={imgSrc}
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      opacity: 0.7,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main 4-Column Footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <img src={logoImg} alt="Lasuarindo" style={{ height: '36px', width: 'auto' }} />
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  fontSize: '18px',
                  letterSpacing: '0.5px',
                  color: '#ffffff',
                }}
              >
                LASUARINDO
              </span>
            </div>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '1px',
                color: Colors.primary,
                marginBottom: '14px',
                textTransform: 'uppercase',
              }}
            >
              {language === 'en'
                ? 'CREATIVE TECHNOLOGY & LIFESTYLE GROUP'
                : 'GRUP TEKNOLOGI KREATIF GAYA HIDUP'}
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#9ca3af',
                marginBottom: '24px',
              }}
            >
              {t.footer.tagline}
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <SocialButton label="Website" url={WEBSITE_URL} icon="language" />
              <SocialButton label="Instagram" url={INSTAGRAM_URL} icon="instagram" />
              <SocialButton label="LinkedIn" url="https://www.linkedin.com" icon="linkedin" />
              <SocialButton label="Email" url={EMAIL_URL} icon="mail" />
            </div>
          </div>

          {/* Col 2: Sektor Bisnis */}
          <div>
            <h4
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '1px',
                color: '#ffffff',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              {t.footer.sectors}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {sectorList.map((item) => (
                <Link
                  key={item}
                  to="/services"
                  style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = Colors.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Hubungi Kami */}
          <div>
            <h4
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '1px',
                color: '#ffffff',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              {t.footer.contactUs}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Icon name="location_on" size={18} color={Colors.primary} style={{ marginTop: '2px' }} />
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#9ca3af',
                  }}
                >
                  Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40112
                </span>
              </div>
              <a
                href="mailto:contact@lasuarindo.co.id"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = Colors.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                <Icon name="mail" size={18} color={Colors.primary} />
                <span>contact@lasuarindo.co.id</span>
              </a>
            </div>
          </div>

          {/* Col 4: Legalitas */}
          <div>
            <h4
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '1px',
                color: '#ffffff',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              {t.footer.legal}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {legalList.map((item) =>
                item.path ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    style={{
                      color: '#9ca3af',
                      textDecoration: 'none',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = Colors.primary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    key={item.label}
                    style={{
                      color: '#6b7280',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                    }}
                  >
                    {item.label}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#9ca3af',
            }}
          >
            © {new Date().getFullYear()} {t.footer.copyright}
          </span>
          <span
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.5px',
              color: Colors.primaryFixedDim,
            }}
          >
            {language === 'en'
              ? '#CreativeTechnologyLifestyleGroup'
              : '#GrupTeknologiKreatifGayaHidup'}
          </span>
        </div>
      </div>
    </footer>
  );
}

// Backward compatibility alias
export const FooterSection = Footer;
export default Footer;
