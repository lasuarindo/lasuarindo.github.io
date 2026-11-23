import React from 'react';
import { useNavigate } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { sectors, localized } from '@/data/sectors';
import { useStrings } from '@/i18n/useStrings';
import idHome from '@/i18n/locales/id/home.json';
import enHome from '@/i18n/locales/en/home.json';
import { GradientText } from '@/components/GradientText';
import { AnimatedReveal } from '@/components/AnimatedReveal';
import { Icon } from '@/components/Icon';
import { Colors } from '@/constants/theme';
import heroBgImg from '@/assets/images/header_new_HD.png';
import kemitraanImg from '@/assets/images/partnership_home_hd.png';
import { useResponsive } from '@/hooks/useResponsive';

const BENTO_COLUMNS = [[0, 4], [1, 5], [2], [3, 6]];

function useHomeStrings() {
  return useStrings({ id: { home: idHome }, en: { home: enHome } });
}

// --- Hero ---
function HomeHero() {
  const navigate = useNavigate();
  const t = useHomeStrings();
  const { isDesktop, isTablet, isSmallMobile } = useResponsive();
  const heroTitleSize = isDesktop ? 62 : isTablet ? 46 : isSmallMobile ? 28 : 34;

  return (
    <section style={{ position: 'relative', backgroundColor: Colors.inverseSurface, overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: isDesktop ? '105px' : isTablet ? '100px' : '95px', paddingBottom: isDesktop ? '40px' : '35px' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: `url(${heroBgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4 }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(47, 49, 49, 0) 0%, rgba(47, 49, 49, 0.5) 60%, #2f3131 100%)' }} />
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 24px', display: isDesktop ? 'flex' : 'block', flexDirection: 'row', alignItems: 'center', gap: '24px' }}>
        <div style={{ flex: isDesktop ? '1.25' : '1', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: isDesktop ? '14px' : '12px' }}>
          <AnimatedReveal animation="fade" delay={0} disabled>
            <div style={{ padding: isDesktop ? '7px 18px' : '6px 16px', backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 180, 163, 0.3)', borderRadius: '999px' }}>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: isDesktop ? '12.5px' : '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#ffb4a3' }}>{t.home.badge}</span>
            </div>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={60} disabled>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: `${heroTitleSize}px`, lineHeight: `${Math.round(heroTitleSize * 1.12)}px`, color: '#ffffff', margin: 0, letterSpacing: isDesktop ? '-1px' : '0' }}>
              {t.home.heroTitle1}<br />
              <GradientText>{t.home.heroTitle2}</GradientText><br />
              {t.home.heroTitle3}<br />
              <GradientText>{t.home.heroTitle4}</GradientText>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={120} disabled>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: isDesktop ? '18px' : '16px', lineHeight: isDesktop ? '29px' : '25px', color: isDesktop ? '#f0f0f0' : '#e2e2e2', maxWidth: isDesktop ? '560px' : '420px', marginTop: isDesktop ? '6px' : '4px', marginBottom: 0 }}>{t.home.heroSubtitle}</p>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={180} disabled>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: isDesktop ? '14px' : '12px', marginTop: isDesktop ? '18px' : '14px' }}>
              <button type="button" onClick={() => navigate('/services')} style={{ backgroundColor: '#b12600', padding: isDesktop ? '13px 26px' : '11px 22px', borderRadius: '8px', border: 'none', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontSize: isDesktop ? '15px' : '14px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = Colors.primaryContainer)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#b12600')}>{t.home.exploreBtn}</button>
              <button type="button" onClick={() => navigate('/about-us')} style={{ border: '1.5px solid #ffffff', padding: isDesktop ? '13px 26px' : '11px 22px', borderRadius: '8px', backgroundColor: 'transparent', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontSize: isDesktop ? '15px' : '14px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>{t.home.visionBtn}</button>
            </div>
          </AnimatedReveal>
          {!isDesktop && (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '12px', marginTop: '18px' }}>
              <AnimatedReveal animation="scale" delay={220} style={{ flex: 1, minWidth: '140px' }}>
                <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(228, 190, 181, 0.2)' }}>
                  <Icon name="groups" size={20} color="#ffb4a3" style={{ marginBottom: '8px' }} />
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#ffffff', marginBottom: '4px', letterSpacing: '0.5px', fontWeight: 700 }}>{t.home.integrityTitle}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', lineHeight: '18px', color: 'rgba(226, 226, 222, 0.8)', margin: 0 }}>{t.home.integrityDesc}</p>
                </div>
              </AnimatedReveal>
              <AnimatedReveal animation="scale" delay={280} style={{ flex: 1, minWidth: '140px' }}>
                <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(228, 190, 181, 0.2)' }}>
                  <Icon name="lightbulb" size={20} color="#ffb4a3" style={{ marginBottom: '8px' }} />
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#ffffff', marginBottom: '4px', letterSpacing: '0.5px', fontWeight: 700 }}>{t.home.innovationTitle}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', lineHeight: '18px', color: 'rgba(226, 226, 222, 0.8)', margin: 0 }}>{t.home.innovationDesc}</p>
                </div>
              </AnimatedReveal>
            </div>
          )}
        </div>
        {isDesktop && (
          <div style={{ flex: '1', display: 'flex', flexDirection: 'row', gap: '24px', justifyContent: 'flex-end', alignItems: 'center', zIndex: 10, paddingRight: '10px' }}>
            <AnimatedReveal animation="scale" delay={100} style={{ flex: 1, maxWidth: '240px' }}>
              <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(228, 190, 181, 0.2)' }}>
                <Icon name="groups" size={26} color="#ffb4a3" style={{ marginBottom: '10px' }} />
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '19px', color: '#ffffff', marginBottom: '6px', letterSpacing: '0.5px', fontWeight: 700 }}>{t.home.integrityTitle}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '20px', color: 'rgba(226, 226, 222, 0.8)', margin: 0 }}>{t.home.integrityDesc}</p>
              </div>
            </AnimatedReveal>
            <AnimatedReveal animation="scale" delay={180} style={{ flex: 1, maxWidth: '240px', marginTop: '28px' }}>
              <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(228, 190, 181, 0.2)' }}>
                <Icon name="lightbulb" size={26} color="#ffb4a3" style={{ marginBottom: '10px' }} />
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '19px', color: '#ffffff', marginBottom: '6px', letterSpacing: '0.5px', fontWeight: 700 }}>{t.home.innovationTitle}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '20px', color: 'rgba(226, 226, 222, 0.8)', margin: 0 }}>{t.home.innovationDesc}</p>
              </div>
            </AnimatedReveal>
          </div>
        )}
      </div>
    </section>
  );
}

// --- Ecosystem (bento grid) ---
function HomeEcosystem() {
  const { language } = useLanguage();
  const t = useHomeStrings();
  const { isDesktop, isMd, isTablet } = useResponsive();
  const h2Size = isMd ? 52 : 36;
  const h2LineHeight = isMd ? '60px' : '44px';
  const ecosystemItems = sectors.map((sector) => ({
    title: localized(sector.title, language),
    icon: sector.icon,
    desc: localized(sector.desc, language),
    delay: sector.delay,
    highlight: sector.highlight,
    tag: sector.highlight ? t.home.focusTag : undefined,
  }));

  return (
    <section className="section section--surface">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <AnimatedReveal animation="up" delay={0}>
          <div style={{ maxWidth: '672px', marginBottom: '50px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: `${h2Size}px`, lineHeight: h2LineHeight, color: Colors.onBackground, marginBottom: '14px' }}>{t.home.ecosystemHeading1}{' '}<span style={{ color: Colors.primary }}>{t.home.ecosystemHeading2}</span></h2>
            <div style={{ width: '64px', height: '4px', borderRadius: '2px', background: 'linear-gradient(to right, #b12600, #ffb68b)', marginBottom: '20px' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: '28px', color: Colors.secondary, margin: 0 }}>{t.home.ecosystemLead}</p>
          </div>
        </AnimatedReveal>
        {isDesktop ? (
          <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'stretch' }}>
            {BENTO_COLUMNS.map((col, colIdx) => (
              <div key={colIdx} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {col.map((itemIdx) => {
                  const item = ecosystemItems[itemIdx];
                  const isTall = item.highlight;
                  return (
                    <AnimatedReveal key={item.title} animation="up" delay={item.delay} hover="lift" style={{ flex: isTall ? 1 : 'none', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ backgroundColor: Colors.surfaceContainerLowest, padding: '32px', border: '1.5px solid rgba(228, 190, 181, 0.4)', borderRadius: '16px', overflow: 'hidden', position: 'relative', flex: isTall ? 1 : 'none', minHeight: isTall ? '520px' : 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        {isTall && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(240, 240, 240, 0.6) 0%, rgba(230, 230, 230, 0.9) 100%)', pointerEvents: 'none' }} />}
                        <div style={{ position: 'relative', zIndex: 2 }}>
                          <div style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}><Icon name={item.icon} size={28} color={Colors.primary} /></div>
                          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '24px', lineHeight: '32px', color: Colors.onBackground, marginBottom: '12px', letterSpacing: '0.5px' }}>{item.title}</h3>
                          <div style={{ width: '32px', height: '4px', backgroundColor: Colors.primary, marginBottom: '16px' }} />
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '25px', color: Colors.secondary, margin: 0, marginBottom: item.tag ? '32px' : 0 }}>{item.desc}</p>
                        </div>
                        {item.tag && <div style={{ position: 'relative', zIndex: 2, alignSelf: 'flex-start', backgroundColor: Colors.primary, padding: '6px 14px', borderRadius: '999px' }}><span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '11px', lineHeight: '14px', letterSpacing: '1.2px', textTransform: 'uppercase', color: '#ffffff' }}>{item.tag}</span></div>}
                      </div>
                    </AnimatedReveal>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: isTablet ? 'repeat(2, 1fr)' : '1fr', gap: '24px' }}>
            {ecosystemItems.map((item) => (
              <AnimatedReveal key={item.title} animation="up" delay={item.delay} hover="lift">
                <div style={{ backgroundColor: Colors.surfaceContainerLowest, padding: '32px', border: '1.5px solid rgba(228, 190, 181, 0.4)', borderRadius: '16px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <div>
                    <div style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}><Icon name={item.icon} size={28} color={Colors.primary} /></div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '24px', lineHeight: '32px', color: Colors.onBackground, marginBottom: '12px', letterSpacing: '0.5px' }}>{item.title}</h3>
                    <div style={{ width: '32px', height: '4px', backgroundColor: Colors.primary, marginBottom: '16px' }} />
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '25px', color: Colors.secondary, margin: 0, marginBottom: item.tag ? '24px' : 0 }}>{item.desc}</p>
                  </div>
                  {item.tag && <div style={{ alignSelf: 'flex-start', backgroundColor: Colors.primary, padding: '6px 14px', borderRadius: '999px' }}><span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '11px', lineHeight: '14px', letterSpacing: '1.2px', textTransform: 'uppercase', color: '#ffffff' }}>{item.tag}</span></div>}
                </div>
              </AnimatedReveal>
            ))}
          </div>
        )}
        <AnimatedReveal animation="up" delay={200}>
          <div style={{ marginTop: '64px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', lineHeight: '32px', color: Colors.onBackground, marginBottom: '8px', fontWeight: 700 }}><span style={{ color: Colors.primary, fontSize: '32px' }}>"</span>{'  '}{t.home.quoteText}{'  '}<span style={{ color: Colors.primary, fontSize: '32px' }}>"</span></p>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '30px', lineHeight: '40px', color: Colors.onBackground, margin: 0 }}>{t.home.taglineMain1}{' '}<span style={{ color: Colors.primary }}>{t.home.taglineMain2}</span></h3>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- Journey / Partnership ---
function HomeJourney() {
  const navigate = useNavigate();
  const t = useHomeStrings();
  const { isDesktop, isMd } = useResponsive();
  const h2Size = isMd ? 52 : 36;
  const h2LineHeight = isMd ? '60px' : '44px';
  const partnershipLinks = [
    { title: t.home.strategicPartnership, icon: 'handshake', delay: 100 },
    { title: t.home.investorRelations, icon: 'trending_up', delay: 200 },
    { title: t.home.collaboration, icon: 'group_add', delay: 300 },
  ];

  return (
    <section className="section section--dark section--relative">
      {isDesktop && (
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', zIndex: 1 }}>
          <img src={kemitraanImg} alt="Kemitraan Lasuarindo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '48px', borderBottomLeftRadius: '48px', display: 'block' }} />
        </div>
      )}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: isDesktop ? '576px' : '576px' }}>
          <AnimatedReveal animation="up" delay={0}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: `${h2Size}px`, lineHeight: h2LineHeight, color: '#ffffff', marginBottom: '14px' }}>{t.home.journeyHeading1}<br /><GradientText>{t.home.journeyHeading2}</GradientText></h2>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={100}>
            <div style={{ width: '64px', height: '4px', backgroundColor: '#ffb4a3', marginBottom: '32px' }} />
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={200}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '29px', color: Colors.surfaceVariant, marginBottom: '24px' }}>{t.home.journeyLead}</p>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={300}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '26px', color: 'rgba(226, 226, 222, 0.8)', marginBottom: '40px' }}>{t.home.journeyBody}</p>
          </AnimatedReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
            {partnershipLinks.map((link) => (
              <AnimatedReveal key={link.title} animation="left" delay={link.delay}>
                <button type="button" onClick={() => navigate('/contact')} style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', padding: '16px 0', border: 'none', borderBottom: '1px solid rgba(228, 190, 181, 0.3)', backgroundColor: 'transparent', cursor: 'pointer', textAlign: 'left', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(6px)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}>
                  <Icon name={link.icon} size={24} color="#ffb4a3" />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '18px', lineHeight: '26px', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#ffffff', flex: 1 }}>{link.title}</span>
                  <Icon name="arrow_forward" size={24} color={Colors.surfaceVariant} />
                </button>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
      {!isDesktop && (
        <div style={{ maxWidth: '1280px', margin: '32px auto 0 auto', padding: '0 24px' }}>
          <img src={kemitraanImg} alt="Kemitraan Lasuarindo" style={{ width: '100%', aspectRatio: '16/9', maxHeight: '420px', borderRadius: '20px', objectFit: 'cover', display: 'block' }} />
        </div>
      )}
    </section>
  );
}

export function Home() {
  return (
    <>
      <HomeHero />
      <HomeEcosystem />
      <HomeJourney />
    </>
  );
}

export const Beranda = Home;
export default Home;