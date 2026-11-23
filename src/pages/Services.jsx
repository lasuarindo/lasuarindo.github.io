import React from 'react';
import { useNavigate } from 'react-router';
import { useResponsive } from '@/hooks/useResponsive';
import { GradientText } from '@/components/GradientText';
import { AnimatedReveal } from '@/components/AnimatedReveal';
import { Icon } from '@/components/Icon';
import { Colors } from '@/constants/theme';

import heroBgImg from '@/assets/images/header_new_HD.png';
import propertiHeroImg from '@/assets/images/service_property_hero.png';
import layananEkosistemImg from '@/assets/images/services_ecosystem.png';
import teknologiImg from '@/assets/images/service_technology.png';
import teknologiGridImg from '@/assets/images/service_technology_grid.png';
import vamosImg from '@/assets/images/service_vamos_synergy.png';
import proyekPropertiImg from '@/assets/images/future_project_property.png';
import proyekTeknologiImg from '@/assets/images/future_project_technology.png';
import proyekEkosistemImg from '@/assets/images/future_project_ecosystem.png';
import proyekKarbonImg from '@/assets/images/future_project_carbon.png';

const PROPERTY_FEATURES = [
  {
    icon: 'location_city',
    title: 'Perencanaan Tata Kota',
    desc: 'Perencanaan komprehensif untuk kawasan hunian modern.',
  },
  {
    icon: 'architecture',
    title: 'Desain & Konstruksi',
    desc: 'Arsitektur inovatif dengan standar kualitas tertinggi.',
  },
  {
    icon: 'apartment',
    title: 'Manajemen Properti',
    desc: 'Pengelolaan profesional untuk aset bernilai tinggi.',
  },
];

const MEDIA_CARDS = [
  {
    icon: 'public',
    title: 'MSS',
    tag: 'MEDIA ONLINE',
    desc: 'Menyediakan solusi media digital terintegrasi untuk menjangkau audiens secara luas dan relevan.',
    items: ['Logo & Brand Identity', 'Portal Berita', 'Media Online', 'Sosial Media'],
    delay: 100,
  },
  {
    icon: 'photo_camera',
    title: 'Arcadia Segara Cita',
    tag: 'PRODUCTION HOUSE',
    desc: 'Berfokus pada produksi konten visual berkualitas tinggi untuk kebutuhan komersial dan hiburan.',
    items: ['Pembuatan Film', 'Pembuatan Video dan musik', 'TVC dan iklan', 'Script & Storytelling'],
    delay: 200,
  },
  {
    icon: 'qr_code_2',
    title: 'Berkah Media Gemilang',
    tag: 'Media Luar Ruangan',
    desc: 'Menyediakan solusi media luar ruang dan layanan pendukung untuk membangun brand yang kuat dan berkesan.',
    items: ['Event Management', 'Bilboard', 'Vidiotron', 'branding & Signage'],
    delay: 300,
  },
];

const PLATFORM_ICONS = ['share', 'videocam', 'music_note', 'podcasts', 'article'];

const TECH_CARDS = [
  {
    icon: 'router',
    title: 'Authentic Guards Technology',
    desc: 'Sistem teknologi terdepan yang melindungi produk dari pemalsuan dan memastikan keaslian melalui verifikasi digital yang aman, cepat, dan terpercaya.',
  },
  {
    icon: 'view_in_ar',
    title: 'Berkah Megah Abadi',
    desc: 'Solusi teknologi untuk melindungi hak cipta musisi dan pencipta lagu dari pembajakan serta memastikan mereka mendapatkan royalti yang adil dan transparan.',
  },
];

const VAMOS_TAGS = [
  { icon: 'sports_tennis', label: 'lapangan padel premium' },
  { icon: 'storefront', label: 'pro shope' },
  { icon: 'coffee', label: 'cafe dan area relaksasi' },
  { icon: 'play_circle', label: 'Media' },
  { icon: 'flight_takeoff', label: 'fasilitas modern' },
];

const VAMOS_SOCIALS = [
  { icon: 'facebook', label: 'Facebook' },
  { icon: 'twitter', label: 'Twitter' },
  { icon: 'instagram', label: 'Instagram' },
  { icon: 'linkedin', label: 'LinkedIn' },
];

const PROJECTS = [
  { tag: 'Properti', title: 'Kawasan Residensial Premium', image: proyekPropertiImg, delay: 100 },
  { tag: 'Teknologi', title: 'Digital Hub Indonesia', image: proyekTeknologiImg, delay: 200 },
  { tag: 'Ekosistem', title: 'Ekosistem Bisnis Terpadu', image: proyekEkosistemImg, delay: 300 },
  { tag: 'Sustainability', title: 'Green Development Initiative', image: proyekKarbonImg, delay: 400 },
];

function GradientDivider({ center = false }) {
  return (
    <div
      style={{
        width: '64px',
        height: '4px',
        borderRadius: '2px',
        background: 'linear-gradient(to right, #b12600, #ffb68b)',
        margin: center ? '0 auto 20px auto' : '0 0 20px 0',
      }}
    />
  );
}

export function Services() {
  const navigate = useNavigate();
  const { width, isLg, isMd, isSm, isMobile, contentWidth } = useResponsive();

  const h1Size = isMd ? 64 : Math.max(28, Math.min(42, Math.floor(contentWidth / 7.2)));
  const h1LineHeight = Math.round(h1Size * 1.25);
  const propertyPadding = isLg ? '40px 48px' : isMobile ? '20px 16px' : '32px';

  return (
    <div style={{ backgroundColor: Colors.background, minHeight: '100vh', overflowX: 'hidden' }}>
      {/* ============================================
           1. HERO SECTION
          ============================================ */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#111313',
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          alignItems: 'center',
          paddingTop: isLg ? '150px' : '110px',
          paddingBottom: isLg ? '160px' : '128px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${heroBgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
          }}
        />

        {/* Double gradient overlay matching react_native */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(to right, rgba(17, 19, 19, 0.9) 0%, rgba(17, 19, 19, 0.6) 50%, rgba(17, 19, 19, 0) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background:
              'linear-gradient(to top, rgba(17, 19, 19, 0.8) 0%, rgba(17, 19, 19, 0) 50%, rgba(17, 19, 19, 0.3) 100%)',
          }}
        />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10, width: '100%' }}>
          <div style={{ maxWidth: '672px' }}>
            <AnimatedReveal animation="fade" delay={0}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  marginBottom: '32px',
                }}
              >
                <Icon name="business" size={14} color={Colors.primaryFixedDim} />
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    color: Colors.primaryFixedDim,
                  }}
                >
                  Lasuarindo Group
                </span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal animation="up" delay={100}>
              <h1
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: `${h1Size}px`,
                  lineHeight: `${h1LineHeight}px`,
                  color: '#ffffff',
                  marginBottom: '24px',
                }}
              >
                Membangun Masa
                <br />
                Depan di <GradientText>Industri</GradientText>
                <br />
                <GradientText>Kunci</GradientText>
              </h1>
            </AnimatedReveal>

            <AnimatedReveal animation="up" delay={200}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  lineHeight: '29px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '40px',
                  maxWidth: '512px',
                }}
              >
                Lasuarindo Group menghadirkan ekosistem bisnis terpadu yang mendorong pertumbuhan,
                inovasi, dan dampak nyata di sektor-sektor strategis Indonesia.
              </p>
            </AnimatedReveal>

            <AnimatedReveal animation="up" delay={400}>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: Colors.primary,
                  padding: '16px 32px',
                  borderRadius: '8px',
                  border: 'none',
                  color: Colors.onPrimary,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = Colors.primaryContainer)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = Colors.primary)}
              >
                <span>Bermitra Dengan Kami</span>
                <Icon name="arrow_forward" size={20} color={Colors.onPrimary} />
              </button>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* ============================================
           2. PROPERTI SECTION
          ============================================ */}
      <section style={{ backgroundColor: Colors.surface, padding: isMobile ? '48px 0' : '64px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedReveal animation="up" delay={0}>
            <div
              style={{
                backgroundColor: Colors.surfaceContainerLowest,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(228, 190, 181, 0.2)',
                display: 'grid',
                gridTemplateColumns: isLg ? '1.2fr 1fr' : '1fr',
              }}
            >
              {/* Left Content */}
              <div style={{ padding: propertyPadding, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '13px',
                    lineHeight: '18px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: Colors.primary,
                    marginBottom: '10px',
                    display: 'block',
                  }}
                >
                  PROPERTI
                </span>

                <h3
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: isMobile ? '22px' : '26px',
                    lineHeight: isMobile ? '30px' : '34px',
                    color: Colors.onBackground,
                    marginBottom: '16px',
                  }}
                >
                  MENGEMBANGKAN RUANG UNTUK KEHIDUPAN LEBIH BAIK
                </h3>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    lineHeight: '24px',
                    color: Colors.secondary,
                    marginBottom: '24px',
                  }}
                >
                  Kami mengembangkan properti berkualitas tinggi dengan desain arsitektur modern,
                  lokasi strategis, dan nilai investasi yang terus berkembang. Dari perumahan
                  residensial hingga proyek komersial skala besar, setiap proyek dirancang untuk
                  memberikan kenyamanan dan kepuasan tertinggi.
                </p>

                {/* 3 Features Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                    gap: '16px',
                    marginBottom: '28px',
                  }}
                >
                  {PROPERTY_FEATURES.map((item) => (
                    <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(177, 38, 0, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name={item.icon} size={22} color={Colors.primary} />
                      </div>
                      <h4
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: '14px',
                          lineHeight: '20px',
                          fontWeight: 700,
                          color: Colors.onBackground,
                          margin: '0 0 4px 0',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: Colors.secondary,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pill Badge */}
                <div
                  style={{
                    alignSelf: 'flex-start',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(177, 38, 0, 0.08)',
                    border: '1px solid rgba(177, 38, 0, 0.2)',
                  }}
                >
                  <Icon name="trending_up" size={16} color={Colors.primary} />
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: Colors.primary,
                    }}
                  >
                    Proyek Terkini
                  </span>
                </div>
              </div>

              {/* Right Images Column: 2 halves */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  minHeight: isMobile ? '260px' : '400px',
                }}
              >
                <div style={{ flex: 1, minHeight: '200px', overflow: 'hidden' }}>
                  <img
                    src={propertiHeroImg}
                    alt="Properti"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ flex: 1, minHeight: '200px', overflow: 'hidden' }}>
                  <img
                    src={layananEkosistemImg}
                    alt="Layanan Ekosistem"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ============================================
           3. MEDIA KREATIF SECTION
          ============================================ */}
      <section style={{ backgroundColor: Colors.surfaceContainerLow, padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedReveal animation="up" delay={0}>
            <div style={{ textAlign: 'center', margin: '0 auto 64px auto' }}>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: isMobile ? '32px' : '48px',
                  lineHeight: isMobile ? '40px' : '58px',
                  color: Colors.onBackground,
                  marginBottom: '8px',
                }}
              >
                MEDIA <span style={{ color: Colors.primary }}>KREATIF</span>
              </h2>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  letterSpacing: '1.4px',
                  textTransform: 'uppercase',
                  color: Colors.secondary,
                  marginBottom: '16px',
                }}
              >
                DI BALIK LAYAR, CERITA, PENGARUH & MEDIA
              </p>
              <GradientDivider center />
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: Colors.secondary,
                  maxWidth: '672px',
                  margin: '0 auto',
                }}
              >
                Kami menghadirkan layanan kreatif terdepan yang menyatu dengan kebutuhan bisnis
                modern — dari desain visual hingga produksi event berskala besar, semua dirancang
                untuk memberikan dampak maksimal.
              </p>
            </div>
          </AnimatedReveal>

          {/* 3 Media Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isLg ? 'repeat(3, 1fr)' : isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              marginBottom: '48px',
            }}
          >
            {MEDIA_CARDS.map((card) => (
              <AnimatedReveal key={card.title} animation="up" delay={card.delay} hover="lift">
                <div
                  style={{
                    backgroundColor: Colors.surfaceContainerLowest,
                    padding: '32px',
                    borderRadius: '16px',
                    border: '1px solid rgba(228, 190, 181, 0.2)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        backgroundColor: 'rgba(177, 38, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px',
                      }}
                    >
                      <Icon name={card.icon} size={36} color={Colors.primary} />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        fontSize: '28px',
                        color: Colors.onBackground,
                        marginBottom: '4px',
                      }}
                    >
                      {card.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        color: Colors.primary,
                        display: 'block',
                        marginBottom: '16px',
                      }}
                    >
                      {card.tag}
                    </span>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        lineHeight: '26px',
                        color: Colors.secondary,
                        marginBottom: '24px',
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {card.items.map((item) => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Icon name="check_circle" size={16} color={Colors.primary} />
                        <span
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '14px',
                            color: Colors.secondary,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          {/* Platform Kami Row */}
          <AnimatedReveal animation="up" delay={400}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: Colors.secondary,
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                }}
              >
                Platform Kami:
              </span>
              <div style={{ display: 'flex', gap: '16px' }}>
                {PLATFORM_ICONS.map((icon) => (
                  <div
                    key={icon}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '20px',
                      backgroundColor: Colors.surfaceContainerHigh,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name={icon} size={20} color={Colors.secondary} />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ============================================
           4. TEKNOLOGI SECTION (DARK)
          ============================================ */}
      <section style={{ backgroundColor: Colors.inverseSurface, padding: '80px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isLg ? '1fr 1fr' : '1fr',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <AnimatedReveal animation="left" delay={100}>
              <div>
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '13px',
                    lineHeight: '18px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: Colors.primary,
                    marginBottom: '10px',
                    display: 'block',
                  }}
                >
                  TEKNOLOGI
                </span>

                <h3
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: isMobile ? '24px' : '32px',
                    lineHeight: isMobile ? '32px' : '42px',
                    color: '#ffffff',
                    marginBottom: '8px',
                  }}
                >
                  MELINDUNGI MEREK MELALUI INOVASI
                </h3>

                <GradientDivider />

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    lineHeight: '29px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '32px',
                  }}
                >
                  Lasuarindo Group membangun fondasi digital yang kuat melalui layanan teknologi
                  terdepan. Dari pengembangan perangkat lunak hingga infrastruktur cloud, kami
                  menghadirkan solusi yang cerdas, aman, dan berkelanjutan untuk mendorong
                  transformasi digital bisnis Anda.
                </p>

                {/* 2 Tech Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {TECH_CARDS.map((item) => (
                    <AnimatedReveal key={item.title} animation="up" delay={200} hover="lift">
                      <div
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '12px',
                          padding: '20px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(177, 38, 0, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon name={item.icon} size={20} color={Colors.primaryFixedDim} />
                          </div>
                          <h4
                            style={{
                              fontFamily: 'Montserrat, sans-serif',
                              fontWeight: 700,
                              fontSize: '14px',
                              color: '#ffffff',
                              margin: 0,
                            }}
                          >
                            {item.title}
                          </h4>
                        </div>
                        <p
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '12px',
                            lineHeight: '20px',
                            color: 'rgba(255, 255, 255, 0.6)',
                            margin: 0,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </AnimatedReveal>
                  ))}
                </div>
              </div>
            </AnimatedReveal>

            {/* Right Images Grid */}
            <AnimatedReveal animation="right" delay={200}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ height: isMobile ? '130px' : '200px', borderRadius: '12px', overflow: 'hidden' }}>
                    <img
                      src={teknologiImg}
                      alt="Teknologi"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ height: isMobile ? '130px' : '200px', borderRadius: '12px', overflow: 'hidden' }}>
                    <img
                      src={teknologiGridImg}
                      alt="Teknologi Grid"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                </div>
                <div style={{ height: isMobile ? '180px' : '280px', borderRadius: '12px', overflow: 'hidden' }}>
                  <img
                    src={proyekTeknologiImg}
                    alt="Digital Hub"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* ============================================
           5. VAMOS PADELON SINERGI SECTION
          ============================================ */}
      <section style={{ backgroundColor: '#1a1c1e', padding: '80px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isLg ? '1fr 1fr' : '1fr',
              gap: isMobile ? '32px' : '64px',
              alignItems: 'center',
            }}
          >
            {/* Left Image */}
            <AnimatedReveal animation="up" delay={100} hover="scale">
              <div
                style={{
                  height: isMobile ? '260px' : '400px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundColor: '#27292a',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={vamosImg}
                  alt="Vamos Padelon Sinergi"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </AnimatedReveal>

            {/* Right Info */}
            <AnimatedReveal animation="right" delay={200}>
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 16px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    marginBottom: '24px',
                  }}
                >
                  <Icon name="handshake" size={14} color={Colors.primaryFixedDim} />
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: Colors.primaryFixedDim,
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                    }}
                  >
                    Olahraga dan Gaya hidup
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: isMobile ? '26px' : isMd ? '34px' : '40px',
                    lineHeight: isMobile ? '34px' : isMd ? '42px' : '48px',
                    color: '#ffffff',
                    marginBottom: '16px',
                  }}
                >
                  VAMOS PADELON <GradientText>SINERGI</GradientText>
                </h2>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '26px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '32px',
                  }}
                >
                  Vamos Padelon Sinergi (VPS) adalah sarana olahraga padel berkualitas dengan
                  fasilitas modern, nyaman, dan berstandar profesional untuk semua kalangan.
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                  {VAMOS_TAGS.map((tag) => (
                    <div
                      key={tag.label}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 16px',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <Icon name={tag.icon} size={16} color={Colors.primaryFixedDim} />
                      <span
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: '12px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          color: '#ffffff',
                        }}
                      >
                        {tag.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Social Circles */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  {VAMOS_SOCIALS.map((s) => (
                    <div
                      key={s.label}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '18px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <Icon name={s.icon} size={18} color="rgba(255, 255, 255, 0.6)" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* ============================================
           6. PROYEK MASA DEPAN KAMI
          ============================================ */}
      <section style={{ backgroundColor: Colors.surface, padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedReveal animation="up" delay={0}>
            <div style={{ textAlign: 'center', margin: '0 auto 64px auto' }}>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: isMobile ? '28px' : isMd ? '38px' : '48px',
                  lineHeight: isMobile ? '36px' : isMd ? '48px' : '58px',
                  color: Colors.onBackground,
                  marginBottom: '8px',
                  whiteSpace: isLg ? 'nowrap' : 'normal',
                }}
              >
                PROYEK <span style={{ color: Colors.primary }}>MASA DEPAN</span> KAMI
              </h2>
              <GradientDivider center />
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: Colors.secondary,
                  maxWidth: '672px',
                  margin: '0 auto',
                }}
              >
                Inilah proyek-proyek strategis yang kami kembangkan untuk membangun masa depan
                yang lebih baik dan berkelanjutan.
              </p>
            </div>
          </AnimatedReveal>

          {/* 4 Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isLg ? 'repeat(4, 1fr)' : isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '16px',
            }}
          >
            {PROJECTS.map((item) => (
              <AnimatedReveal key={item.title} animation="up" delay={item.delay} hover="scale">
                <div
                  style={{
                    position: 'relative',
                    height: '360px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: '#1a1c1e',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)',
                    }}
                  />

                  {/* Content on top */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '24px',
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        backgroundColor: Colors.primary,
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: '10px',
                          fontWeight: 700,
                          color: '#ffffff',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#ffffff',
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export const Layanan = Services;
export default Services;
