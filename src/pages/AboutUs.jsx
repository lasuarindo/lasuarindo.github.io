import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useResponsive } from '@/hooks/useResponsive';
import { useStrings } from '@/i18n/useStrings';
import idAbout from '@/i18n/locales/id/about.json';
import enAbout from '@/i18n/locales/en/about.json';
import { AnimatedReveal } from '@/components/AnimatedReveal';
import { Icon } from '@/components/Icon';
import { Colors } from '@/constants/theme';

import heroBgImg from '@/assets/images/header_new_HD.png';
import tentangKamiImg from '@/assets/images/about_us.png';
import pendiriImg from '@/assets/images/pendiri.png';
import komisarisImg from '@/assets/images/komisaris.png';

const RED = '#b12600';
const GRAY = '#5f5e5e';
const DARK = '#1a1c1c';

const NETWORK = [
  { icon: 'account_balance', name: 'KADIN', delay: 100 },
  { icon: 'handshake', name: 'BPD HIPMI', delay: 200 },
  { icon: 'apartment', name: 'ARDIN Jawa Barat', delay: 300 },
];

function Stars() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Icon key={s} name="star" size={14} color={RED} />
      ))}
    </div>
  );
}

export function AboutUs() {
  const { language } = useLanguage();
  const t = useStrings({ id: { about: idAbout }, en: { about: enAbout } });
  const { isLg, isMd, isMobile, isSmallMobile } = useResponsive();

  const heroFeatures = [
    { icon: 'settings_suggest', title: t.about.features.integrated.title, desc: t.about.features.integrated.desc },
    { icon: 'trending_up', title: t.about.features.sectors.title, desc: t.about.features.sectors.desc },
    { icon: 'rocket_launch', title: t.about.features.innovation.title, desc: t.about.features.innovation.desc },
    { icon: 'volunteer_activism', title: t.about.features.impact.title, desc: t.about.features.impact.desc },
  ];

  const valuesIcons = ['shield', 'lightbulb', 'groups', 'workspace_premium', 'favorite', 'eco'];

  return (
    <div style={{ backgroundColor: Colors.background, minHeight: '100vh', overflowX: 'hidden' }}>
      {/* ============================================
           1. SIAPA KAMI
          ============================================ */}
      <section
        style={{
          position: 'relative',
          backgroundColor: Colors.inverseSurface,
          paddingTop: '110px',
          paddingBottom: '48px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background hero image with 0.4 opacity */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${heroBgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4,
          }}
        />

        {/* Linear gradient overlay matching react_native */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(to bottom, rgba(47, 49, 49, 0) 0%, rgba(47, 49, 49, 0.5) 60%, #2f3131 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1280px',
            width: '100%',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: isLg ? 'row' : 'column',
            alignItems: 'center',
            gap: isLg ? '48px' : '36px',
          }}
        >
          {/* Left Box */}
          <AnimatedReveal animation="left" delay={0} style={{ flex: isLg ? 1 : 'none', width: '100%' }}>
            <div style={{ maxWidth: '580px' }}>
              <h1
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: isLg ? '56px' : isMd ? '42px' : isSmallMobile ? '28px' : '34px',
                  lineHeight: isLg ? '62px' : isMd ? '48px' : isSmallMobile ? '34px' : '40px',
                  color: '#ffffff',
                  marginBottom: '24px',
                }}
              >
                {t.about.heroTitle1}
                <br />
                <span style={{ color: RED }}>{t.about.heroTitle2}</span>
              </h1>

              <div
                style={{
                  borderLeft: '4px solid rgba(255, 180, 163, 0.5)',
                  paddingLeft: '20px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: isLg ? '20px' : '17px',
                    lineHeight: isLg ? '31px' : '27px',
                    color: '#e2e2e2',
                    marginBottom: '16px',
                  }}
                >
                  <strong style={{ fontWeight: 700, color: '#ffffff' }}>{t.about.lead1}</strong>{' '}
                  {t.about.lead2}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: isLg ? '17px' : '15px',
                    lineHeight: isLg ? '28px' : '25px',
                    color: 'rgba(226, 226, 222, 0.8)',
                    margin: 0,
                  }}
                >
                  {t.about.body}
                </p>
              </div>
            </div>
          </AnimatedReveal>

          {/* Right Box: Curved Image with Feature Overlay */}
          <AnimatedReveal animation="right" delay={150} style={{ flex: isLg ? 1 : 'none', width: '100%' }}>
            <div
              style={{
                borderRadius: '16px',
                borderTopRightRadius: '110px',
                overflow: 'hidden',
                backgroundColor: '#171717',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              }}
            >
              <img
                src={tentangKamiImg}
                alt="Tentang Kami"
                style={{
                  width: '100%',
                  height: isLg ? '420px' : isMd ? '340px' : isSmallMobile ? '320px' : '260px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Feature Overlay at bottom of image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.85)',
                  padding: isSmallMobile ? '12px 10px' : '18px 16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <div
                  style={{
                    display: isSmallMobile ? 'grid' : 'flex',
                    gridTemplateColumns: isSmallMobile ? 'repeat(2, 1fr)' : undefined,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: isSmallMobile ? '10px' : '8px',
                  }}
                >
                  {heroFeatures.map((f) => (
                    <div
                      key={f.title}
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <Icon
                        name={f.icon}
                        size={isLg ? 26 : isMd ? 22 : 18}
                        color={RED}
                        style={{ marginBottom: '6px' }}
                      />
                      <span
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: isLg ? '14px' : isMd ? '12px' : '10px',
                          lineHeight: isLg ? '18px' : isMd ? '16px' : '13px',
                          color: '#ffffff',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontWeight: 700,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {f.title}
                      </span>
                      <span
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: isLg ? '12.5px' : isMd ? '11px' : '9px',
                          lineHeight: isLg ? '17px' : isMd ? '15px' : '12px',
                          color: '#9ca3af',
                          marginTop: '4px',
                        }}
                      >
                        {f.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ============================================
           2. NILAI KAMI
          ============================================ */}
      <section style={{ backgroundColor: Colors.surfaceContainerLow, padding: '64px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedReveal animation="up" delay={0}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: isMd ? '40px' : '28px',
                  lineHeight: isMd ? '50px' : '36px',
                  color: DARK,
                  marginBottom: '12px',
                }}
              >
                {t.about.valuesHeading1} <span style={{ color: RED }}>{t.about.valuesHeading2}</span>
              </h2>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: isMd ? '15px' : '14px',
                  lineHeight: isMd ? '24px' : '22px',
                  letterSpacing: '0.7px',
                  textTransform: 'uppercase',
                  color: GRAY,
                  margin: 0,
                }}
              >
                {t.about.valuesSub}
              </p>
            </div>
          </AnimatedReveal>

          {/* Values Grid: 3 top + 3 bottom */}
          <div
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: isLg ? 'repeat(3, 1fr)' : isMd ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            {t.about.values.map((desc, idx) => (
              <AnimatedReveal key={idx} animation="up" delay={100 + idx * 50} hover="lift">
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '26px 20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(228, 190, 181, 0.4)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '210px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '13px',
                      border: '1.5px solid rgba(177, 38, 0, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon name={valuesIcons[idx % valuesIcons.length]} size={26} color={RED} />
                  </div>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: isLg ? '15px' : '14px',
                      lineHeight: isLg ? '24px' : '22px',
                      color: GRAY,
                      textAlign: 'center',
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
           3. NILAI KAMI, KEKUATAN KAMI
          ============================================ */}
      <section style={{ backgroundColor: Colors.surface, padding: '64px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedReveal animation="up" delay={0}>
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Top line with 66 */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  gap: '16px',
                  margin: '12px 0',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '40px',
                    lineHeight: '40px',
                    color: RED,
                    fontWeight: 700,
                  }}
                >
                  66
                </span>
                <div
                  style={{
                    flex: 1,
                    height: '2px',
                    background: `linear-gradient(to right, ${RED}, rgba(177, 38, 0, 0.1))`,
                  }}
                />
              </div>

              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '42px',
                  color: DARK,
                  marginBottom: '8px',
                }}
              >
                {language === 'en' ? 'OUR VALUES, ' : 'NILAI KAMI, '}
                <span style={{ color: RED }}>{language === 'en' ? 'OUR STRENGTH' : 'KEKUATAN KAMI'}</span>
              </h2>

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  lineHeight: '25px',
                  color: GRAY,
                  maxWidth: '700px',
                  margin: '0 auto',
                }}
              >
                {language === 'en'
                  ? 'These values are not just guidelines, but our steadfast commitment to grow, create impact, and inspire the future.'
                  : 'Nilai-nilai ini bukan hanya pedoman, tetapi komitmen kami untuk terus tumbuh, memberi manfaat, dan menjadi inspirasi bagi masa depan.'}
              </p>

              {/* Bottom line with 99 */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  gap: '16px',
                  margin: '12px 0',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: '2px',
                    background: `linear-gradient(to right, rgba(177, 38, 0, 0.1), ${RED})`,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '40px',
                    lineHeight: '40px',
                    color: RED,
                    fontWeight: 700,
                  }}
                >
                  99
                </span>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ============================================
           4. PESAN PENDIRI
          ============================================ */}
      <section style={{ backgroundColor: Colors.surfaceContainerLow, padding: '64px 0' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: isLg ? 'row' : 'column',
            alignItems: 'center',
            gap: isLg ? '48px' : '36px',
          }}
        >
          {/* Photo */}
          <AnimatedReveal animation="left" delay={100} style={{ flex: isLg ? 1 : 'none', width: '100%' }}>
            <div
              style={{
                width: '100%',
                height: isLg ? '480px' : isMd ? '400px' : '300px',
                borderRadius: '24px',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={pendiriImg}
                alt="Ryan Othink - Founder & CEO"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          </AnimatedReveal>

          {/* Text & Quotes */}
          <AnimatedReveal animation="right" delay={200} style={{ flex: isLg ? 1.25 : 'none', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '42px',
                  color: DARK,
                  margin: '0 0 10px 0',
                }}
              >
                {language === 'en' ? "FOUNDER'S" : 'PESAN'}
                <br />
                <span style={{ color: RED }}>{language === 'en' ? 'MESSAGE' : 'PENDIRI'}</span>
              </h2>

              <div
                style={{
                  width: '44px',
                  height: '4px',
                  backgroundColor: RED,
                  borderRadius: '2px',
                  marginBottom: '24px',
                }}
              />

              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '32px',
                  borderRadius: '18px',
                  borderLeft: `4px solid ${RED}`,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: RED,
                    marginBottom: '12px',
                    letterSpacing: '1px',
                  }}
                >
                  99
                </div>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: '15px',
                    lineHeight: '25px',
                    color: DARK,
                    marginBottom: '18px',
                  }}
                >
                  {language === 'en'
                    ? '"It is not about numbers, but about the meaning we build, the impact we generate, and the legacy we leave behind. Every step we take is an investment for generations to come."'
                    : '"Ini bukan tentang angka, melainkan tentang makna yang kita bangun, memberi dampak, dan meninggalkan warisan. Setiap langkah yang kita ambil adalah investasi bagi generasi yang akan datang."'}
                </p>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    lineHeight: '22px',
                    color: '#6b7280',
                    marginBottom: '14px',
                  }}
                >
                  {language === 'en'
                    ? 'For me, founding Lasuarindo Group was not merely about building a business — it is a journey of creating a purposeful ecosystem where individuals can flourish and contribute their finest work.'
                    : 'Bagi saya, mendirikan Lasuarindo Group bukan sekadar membangun bisnis — ini adalah perjalanan membangun ekosistem yang bermakna, tempat setiap individu bisa tumbuh dan memberikan kontribusi terbaik mereka.'}
                </p>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    lineHeight: '22px',
                    color: '#6b7280',
                    margin: 0,
                  }}
                >
                  {language === 'en'
                    ? 'I believe great business starts from strong values — integrity, collaboration, and a relentless spirit to innovate for the greater good. With our visionary team, we are eager to elevate Lasuarindo Group to even higher heights.'
                    : 'Saya percaya bahwa bisnis yang hebat dimulai dari nilai yang kuat — integritas, kolaborasi, dan semangat untuk terus berinovasi demi kebaikan yang lebih besar. Dengan tim yang luar biasa dan visi yang jelas, kami siap membawa Lasuarindo Group ke level yang lebih tinggi dan berdampak lebih luas.'}
                </p>
              </div>

              <div style={{ paddingLeft: '4px', marginTop: '18px' }}>
                <h3
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '22px',
                    color: DARK,
                    margin: 0,
                  }}
                >
                  Ryan Othink
                </h3>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      fontSize: '13px',
                      color: RED,
                    }}
                  >
                    Founder & CEO
                  </span>
                  <span style={{ color: '#9ca3af', margin: '0 6px' }}>•</span>
                  <Stars />
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ============================================
           5. PESAN KOMISARIS
          ============================================ */}
      <section style={{ backgroundColor: Colors.surface, padding: '64px 0' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: isLg ? 'row' : 'column',
            alignItems: 'center',
            gap: isLg ? '48px' : '36px',
          }}
        >
          {/* Text & Quotes */}
          <AnimatedReveal animation="left" delay={100} style={{ flex: isLg ? 1.25 : 'none', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '42px',
                  color: DARK,
                  margin: '0 0 10px 0',
                }}
              >
                {language === 'en' ? "COMMISSIONER'S" : 'PESAN'}
                <br />
                <span style={{ color: RED }}>{language === 'en' ? 'MESSAGE' : 'KOMISARIS'}</span>
              </h2>

              <div
                style={{
                  width: '44px',
                  height: '4px',
                  backgroundColor: RED,
                  borderRadius: '2px',
                  marginBottom: '24px',
                }}
              />

              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '32px',
                  borderRadius: '18px',
                  borderLeft: `4px solid ${RED}`,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: RED,
                    marginBottom: '12px',
                    letterSpacing: '1px',
                  }}
                >
                  99
                </div>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: '15px',
                    lineHeight: '25px',
                    color: DARK,
                    marginBottom: '18px',
                  }}
                >
                  {language === 'en'
                    ? '"Trust is the bedrock of everything. Without uncompromising integrity and sincere commitment, any enterprise is merely a fragile edifice shaken by the tests of time."'
                    : '"Kepercayaan adalah fondasi dari segalanya. Tanpa integritas yang kuat dan komitmen yang tulus, bisnis apapun hanya akan menjadi gedung tanpa pondasi yang mudah goyah oleh tantangan zaman."'}
                </p>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    lineHeight: '22px',
                    color: '#6b7280',
                    marginBottom: '14px',
                  }}
                >
                  {language === 'en'
                    ? 'As Commissioner of Lasuarindo Group, I witness immense potential in each step we take forward. This is not just about growing a company — it is about '
                    : 'Sebagai Komisaris Lasuarindo Group, saya melihat potensi yang luar biasa dalam setiap langkah yang kami ambil bersama. Ini bukan hanya tentang membangun perusahaan — ini tentang '}
                  <strong style={{ fontWeight: 700, color: RED }}>
                    {language === 'en' ? 'building a legacy' : 'membangun warisan'}
                  </strong>
                  {language === 'en' ? ' and ' : ' dan '}
                  <strong style={{ fontWeight: 700, color: RED }}>
                    {language === 'en' ? 'creating an ecosystem' : 'menciptakan ekosistem'}
                  </strong>
                  {language === 'en' ? ' that delivers true impact.' : ' yang memberikan dampak.'}
                </p>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    lineHeight: '22px',
                    color: '#6b7280',
                    margin: 0,
                  }}
                >
                  {language === 'en'
                    ? 'I am immensely proud of our team growth and unwavering devotion to the shared values we built. With visionary leadership and a committed team, I am confident Lasuarindo Group will continue thriving.'
                    : 'Saya bangga menyaksikan pertumbuhan tim dan komitmen kami terhadap nilai-nilai yang telah kami bangun bersama. Dengan kepemimpinan yang visioner dan tim yang berdedikasi, saya yakin Lasuarindo Group akan terus berkembang dan memberikan kontribusi nyata.'}
                </p>
              </div>

              <div style={{ paddingLeft: '4px', marginTop: '18px' }}>
                <h3
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '22px',
                    color: DARK,
                    margin: 0,
                  }}
                >
                  Herawati
                </h3>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      fontSize: '13px',
                      color: RED,
                    }}
                  >
                    Commissioner
                  </span>
                  <span style={{ color: '#9ca3af', margin: '0 6px' }}>•</span>
                  <Stars />
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Photo */}
          <AnimatedReveal animation="right" delay={200} style={{ flex: isLg ? 1 : 'none', width: '100%' }}>
            <div
              style={{
                width: '100%',
                height: isLg ? '480px' : isMd ? '400px' : '300px',
                borderRadius: '24px',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={komisarisImg}
                alt="Herawati - Commissioner"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ============================================
           6. JARINGAN STRATEGIS & KOLABORASI
          ============================================ */}
      <section
        style={{
          padding: '36px 0',
          backgroundColor: Colors.surfaceContainerLow,
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedReveal animation="up" delay={0}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  color: GRAY,
                }}
              >
                {language === 'en' ? 'STRATEGIC NETWORK & COLLABORATION' : 'JARINGAN STRATEGIS & KOLABORASI'}
              </span>
            </div>
          </AnimatedReveal>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
            }}
          >
            {NETWORK.map((item) => (
              <AnimatedReveal key={item.name} animation="up" delay={item.delay}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
                  <Icon name={item.icon} size={28} color={GRAY} />
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '16px',
                      color: DARK,
                      fontWeight: 700,
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export const TentangKami = AboutUs;
export default AboutUs;
