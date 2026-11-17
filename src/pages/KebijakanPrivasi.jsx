import React, { useState } from 'react';
import { useRouter, Link } from '../router/Router';
import { useLanguage } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';
import { HeaderNav } from '../components/HeaderNav';
import { FooterSection } from '../components/FooterSection';
import { BackToTop } from '../components/BackToTop';
import { GradientText } from '../components/GradientText';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { Icon } from '../components/Icon';
import { Colors } from '../constants/theme';

const TOC_ITEMS = [
  { id: 'pendahuluan', number: '1', title: 'Pendahuluan' },
  { id: 'informasi-dikumpulkan', number: '2', title: 'Informasi yang Dikumpulkan' },
  { id: 'penggunaan-informasi', number: '3', title: 'Penggunaan Informasi' },
  { id: 'perlindungan-data', number: '4', title: 'Perlindungan Data' },
  { id: 'berbagi-data', number: '5', title: 'Berbagi Data dengan Pihak Ketiga' },
  { id: 'cookies', number: '6', title: 'Cookie & Teknologi Pelacakan' },
  { id: 'hak-pengguna', number: '7', title: 'Hak-Hak Pengguna' },
  { id: 'perubahan-kebijakan', number: '8', title: 'Perubahan Kebijakan' },
];

export function KebijakanPrivasi() {
  const router = useRouter();
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('pendahuluan');
  const { isDesktop, isMd, contentWidth } = useResponsive();

  const h1Size = isMd ? 72 : Math.max(36, Math.min(48, Math.floor(contentWidth / 7.2)));
  const h1LineHeight = Math.round(h1Size * 1.15);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: Colors.background, minHeight: '100vh', overflowX: 'hidden' }}>
      <HeaderNav />

      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          position: 'relative',
          backgroundColor: Colors.inverseSurface,
          paddingTop: '110px',
          paddingBottom: '80px',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Background Glows matching react_native */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            backgroundColor: 'rgba(177, 38, 0, 0.1)',
            transform: 'translate(-300px, -300px)',
            filter: 'blur(120px)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: 'rgba(177, 38, 0, 0.08)',
            transform: 'translate(133px, 133px)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '768px' }}>
            {/* Breadcrumb */}
            <AnimatedReveal animation="fade" delay={0}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
                <Link
                  to="/"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    color: 'rgba(226, 226, 222, 0.7)',
                    textDecoration: 'none',
                  }}
                >
                  Beranda
                </Link>
                <Icon name="chevron_right" size={18} color="rgba(226, 226, 222, 0.4)" />
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    color: Colors.primaryFixedDim,
                  }}
                >
                  Kebijakan Privasi
                </span>
              </div>
            </AnimatedReveal>

            {/* Badge */}
            <AnimatedReveal animation="fade" delay={100}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  backgroundColor: 'rgba(243, 243, 244, 0.1)',
                  border: '1px solid rgba(228, 190, 181, 0.3)',
                  borderRadius: '999px',
                  marginBottom: '24px',
                }}
              >
                <Icon name="verified_user" size={16} color={Colors.primaryFixedDim} />
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '12px',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    color: Colors.primaryFixedDim,
                  }}
                >
                  Perlindungan Data
                </span>
              </div>
            </AnimatedReveal>

            {/* Title */}
            <AnimatedReveal animation="up" delay={200}>
              <h1
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: `${h1Size}px`,
                  lineHeight: `${h1LineHeight}px`,
                  color: Colors.onPrimary,
                  marginBottom: '24px',
                }}
              >
                KEBIJAKAN
                <br />
                <GradientText>PRIVASI</GradientText>
              </h1>
            </AnimatedReveal>

            {/* Subtitle */}
            <AnimatedReveal animation="up" delay={300}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  lineHeight: '29px',
                  color: Colors.surfaceVariant,
                  marginBottom: '32px',
                  maxWidth: '576px',
                  margin: '0 0 32px 0',
                }}
              >
                Komitmen kami dalam melindungi dan menghormati privasi Anda sebagai bagian dari integritas bisnis kami.
              </p>
            </AnimatedReveal>

            {/* Last Updated */}
            <AnimatedReveal animation="up" delay={400}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
                <Icon name="update" size={20} color={Colors.primaryFixedDim} />
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    color: 'rgba(226, 226, 222, 0.7)',
                  }}
                >
                  Terakhir diperbarui: 12 Agustus 2026
                </span>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* ================= TABLE OF CONTENTS + ARTICLES ================= */}
      <section style={{ backgroundColor: Colors.surface, padding: '80px 0' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            gap: '48px',
            alignItems: 'flex-start',
          }}
        >
          {/* Sidebar */}
          <AnimatedReveal
            animation="left"
            delay={100}
            style={{
              width: isDesktop ? '300px' : '100%',
              marginBottom: isDesktop ? 0 : '48px',
              position: isDesktop ? 'sticky' : 'static',
              top: isDesktop ? '100px' : 'auto',
              alignSelf: 'flex-start',
            }}
          >
            <div
              style={{
                backgroundColor: Colors.surfaceContainerLowest,
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(228, 190, 181, 0.3)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: '22px',
                  color: Colors.onBackground,
                  marginBottom: '16px',
                }}
              >
                Daftar Isi
              </h3>
              <div
                style={{
                  width: '64px',
                  height: '4px',
                  borderRadius: '2px',
                  background: 'linear-gradient(to right, #b12600, #ffb68b)',
                  marginBottom: '24px',
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {TOC_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: isActive ? 'rgba(177, 38, 0, 0.08)' : 'transparent',
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                      }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '12px',
                          backgroundColor: isActive ? Colors.primary : 'rgba(177, 38, 0, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 600,
                            fontSize: '12px',
                            color: isActive ? '#ffffff' : Colors.primary,
                          }}
                        >
                          {item.number}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: isActive ? 'Montserrat, sans-serif' : 'Inter, sans-serif',
                          fontWeight: isActive ? 600 : 400,
                          fontSize: '14px',
                          color: isActive ? Colors.primary : Colors.secondary,
                          flex: 1,
                        }}
                      >
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </AnimatedReveal>

          {/* Main Content Articles */}
          <div style={{ flex: 1, width: '100%' }}>
            {/* 1. Pendahuluan */}
            <div id="pendahuluan" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
              <AnimatedReveal animation="up" delay={0}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(177, 38, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="description" size={28} color={Colors.primary} />
                    </div>
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        fontSize: '28px',
                        lineHeight: '36px',
                        color: Colors.onBackground,
                        margin: 0,
                      }}
                    >
                      Pendahuluan
                    </h2>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(177, 38, 0, 0.04)',
                      borderLeft: `4px solid ${Colors.primary}`,
                      padding: '24px',
                      borderRadius: '8px',
                      marginBottom: '24px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        lineHeight: '29px',
                        color: Colors.secondary,
                        margin: 0,
                      }}
                    >
                      Kebijakan Privasi ini menjelaskan bagaimana{' '}
                      <strong style={{ fontWeight: 700, color: Colors.onBackground }}>PT Lasuarindo Group</strong>{' '}
                      ("Perusahaan", "kami", atau "kita") mengumpulkan, menggunakan, menyimpan, dan
                      melindungi informasi pribadi Anda saat Anda mengunjungi situs web kami di{' '}
                      <span style={{ color: Colors.primary, fontWeight: 600 }}>www.lasuarindo.co.id</span>{' '}
                      atau berinteraksi dengan layanan kami.
                    </p>
                  </div>

                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      lineHeight: '26px',
                      color: Colors.secondary,
                      margin: 0,
                    }}
                  >
                    Sebagai perusahaan bisnis & investasi terpadu yang bergerak di sektor Properti,
                    Investasi, Teknologi, Perdagangan, Kreatif & Media, serta Pariwisata, kami
                    memahami pentingnya menjaga kepercayaan Anda. Kebijakan ini berlaku untuk
                    seluruh unit bisnis dan anak perusahaan dalam lingkup Lasuarindo Group.
                  </p>
                </div>
              </AnimatedReveal>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(228, 190, 181, 0.3)', marginBottom: '48px' }} />

            {/* 2. Informasi yang Kami Kumpulkan */}
            <div id="informasi-dikumpulkan" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
              <AnimatedReveal animation="up" delay={100}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(177, 38, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="storage" size={28} color={Colors.primary} />
                    </div>
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        fontSize: '28px',
                        lineHeight: '36px',
                        color: Colors.onBackground,
                        margin: 0,
                      }}
                    >
                      Informasi yang Kami Kumpulkan
                    </h2>
                  </div>

                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      lineHeight: '26px',
                      color: Colors.secondary,
                      marginBottom: '24px',
                    }}
                  >
                    Kami dapat mengumpulkan dan memproses jenis informasi berikut:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: isMd ? '1fr 1fr' : '1fr', gap: '24px', marginBottom: '24px' }}>
                    {/* Data Pribadi Card */}
                    <AnimatedReveal animation="up" delay={150} hover="lift">
                      <div
                        style={{
                          backgroundColor: Colors.surfaceContainerLowest,
                          padding: '24px',
                          borderRadius: '12px',
                          border: '1px solid rgba(228, 190, 181, 0.5)',
                          height: '100%',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                          <Icon name="person" size={22} color={Colors.primary} />
                          <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '18px', color: Colors.onBackground, margin: 0 }}>
                            Data Pribadi
                          </h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          {['Nama lengkap', 'Alamat email', 'Nomor telepon', 'Nama perusahaan / organisasi'].map((text) => (
                            <div key={text} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                              <Icon name="check_circle" size={18} color={Colors.primary} />
                              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: Colors.secondary }}>
                                {text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AnimatedReveal>

                    {/* Data Teknis Card */}
                    <AnimatedReveal animation="up" delay={250} hover="lift">
                      <div
                        style={{
                          backgroundColor: Colors.surfaceContainerLowest,
                          padding: '24px',
                          borderRadius: '12px',
                          border: '1px solid rgba(228, 190, 181, 0.5)',
                          height: '100%',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                          <Icon name="devices" size={22} color={Colors.primary} />
                          <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '18px', color: Colors.onBackground, margin: 0 }}>
                            Data Teknis
                          </h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          {[
                            'Alamat IP dan jenis perangkat',
                            'Jenis browser dan versinya',
                            'Halaman yang dikunjungi dan waktu akses',
                            'Data cookie dan identifikasi perangkat',
                          ].map((text) => (
                            <div key={text} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                              <Icon name="check_circle" size={18} color={Colors.primary} />
                              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: Colors.secondary }}>
                                {text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AnimatedReveal>
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(228, 190, 181, 0.3)', marginBottom: '48px' }} />

            {/* 3. Penggunaan Informasi */}
            <div id="penggunaan-informasi" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
              <AnimatedReveal animation="up" delay={100}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(177, 38, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="settings_suggest" size={28} color={Colors.primary} />
                    </div>
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        fontSize: '28px',
                        lineHeight: '36px',
                        color: Colors.onBackground,
                        margin: 0,
                      }}
                    >
                      Penggunaan Informasi
                    </h2>
                  </div>

                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      lineHeight: '26px',
                      color: Colors.secondary,
                      marginBottom: '24px',
                    }}
                  >
                    Informasi yang kami kumpulkan digunakan untuk tujuan berikut:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      {
                        icon: 'handshake',
                        title: 'Layanan & Komunikasi',
                        desc: 'Memproses pertanyaan, permintaan kemitraan, dan memberikan informasi mengenai layanan kami di seluruh sektor bisnis.',
                      },
                      {
                        icon: 'insights',
                        title: 'Peningkatan Layanan',
                        desc: 'Menganalisis penggunaan situs web untuk meningkatkan pengalaman pengguna, konten, dan performa platform kami.',
                      },
                      {
                        icon: 'gavel',
                        title: 'Kepatuhan Hukum',
                        desc: 'Memenuhi kewajiban hukum, regulasi, dan standar industri yang berlaku di Indonesia, termasuk UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP).',
                      },
                      {
                        icon: 'security',
                        title: 'Keamanan',
                        desc: 'Mendeteksi, mencegah, dan menangani aktivitas penipuan, penyalahgunaan, atau potensi ancaman keamanan terhadap layanan kami.',
                      },
                    ].map((item, i) => (
                      <AnimatedReveal key={item.title} animation="up" delay={100 * (i + 1)}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            gap: '16px',
                            padding: '20px',
                            backgroundColor: Colors.surfaceContainerLowest,
                            borderRadius: '12px',
                            border: '1px solid rgba(228, 190, 181, 0.3)',
                          }}
                        >
                          <Icon name={item.icon} size={24} color={Colors.primary} />
                          <div style={{ flex: 1 }}>
                            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', color: Colors.onBackground, margin: '0 0 4px 0' }}>
                              {item.title}
                            </h4>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '23px', color: Colors.secondary, margin: 0 }}>
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </AnimatedReveal>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(228, 190, 181, 0.3)', marginBottom: '48px' }} />

            {/* 4. Perlindungan Data */}
            <div id="perlindungan-data" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
              <AnimatedReveal animation="up" delay={100}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(177, 38, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="shield" size={28} color={Colors.primary} />
                    </div>
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        fontSize: '28px',
                        lineHeight: '36px',
                        color: Colors.onBackground,
                        margin: 0,
                      }}
                    >
                      Perlindungan Data
                    </h2>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(177, 38, 0, 0.04)',
                      borderLeft: `4px solid ${Colors.primary}`,
                      padding: '24px',
                      borderRadius: '8px',
                      marginBottom: '24px',
                    }}
                  >
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '29px', color: Colors.secondary, margin: 0 }}>
                      Kami berkomitmen menjaga keamanan data Anda dengan menerapkan langkah-langkah teknis dan organisasi yang sesuai dengan standar industri.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: isMd ? 'repeat(3, 1fr)' : '1fr', gap: '24px' }}>
                    {[
                      { icon: 'lock', title: 'Enkripsi SSL/TLS', desc: 'Seluruh transmisi data melalui protokol terenkripsi.' },
                      { icon: 'admin_panel_settings', title: 'Kontrol Akses', desc: 'Akses data dibatasi hanya untuk personel yang berwenang.' },
                      { icon: 'assessment', title: 'Audit Berkala', desc: 'Peninjauan keamanan secara rutin untuk menjaga integritas data.' },
                    ].map((card, idx) => (
                      <AnimatedReveal key={card.title} animation="up" delay={100 * (idx + 1)} hover="lift">
                        <div
                          style={{
                            backgroundColor: Colors.surfaceContainerLowest,
                            padding: '24px',
                            borderRadius: '12px',
                            border: '1px solid rgba(228, 190, 181, 0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            height: '100%',
                            boxSizing: 'border-box',
                          }}
                        >
                          <div
                            style={{
                              width: '56px',
                              height: '56px',
                              borderRadius: '28px',
                              backgroundColor: 'rgba(177, 38, 0, 0.1)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: '16px',
                            }}
                          >
                            <Icon name={card.icon} size={28} color={Colors.primary} />
                          </div>
                          <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', color: Colors.onBackground, margin: '0 0 8px 0' }}>
                            {card.title}
                          </h4>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '22px', color: Colors.secondary, margin: 0 }}>
                            {card.desc}
                          </p>
                        </div>
                      </AnimatedReveal>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(228, 190, 181, 0.3)', marginBottom: '48px' }} />

            {/* 5. Berbagi Data dengan Pihak Ketiga */}
            <div id="berbagi-data" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
              <AnimatedReveal animation="up" delay={100}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(177, 38, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="share" size={28} color={Colors.primary} />
                    </div>
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        fontSize: '28px',
                        lineHeight: '36px',
                        color: Colors.onBackground,
                        margin: 0,
                      }}
                    >
                      Berbagi Data dengan Pihak Ketiga
                    </h2>
                  </div>

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '26px', color: Colors.secondary, marginBottom: '24px' }}>
                    Kami <strong style={{ fontWeight: 700, color: Colors.onBackground }}>tidak menjual</strong> data pribadi Anda kepada pihak ketiga. Namun, kami dapat membagikan informasi Anda dalam keadaan terbatas berikut:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      {
                        icon: 'apartment',
                        title: 'Afiliasi & Anak Perusahaan',
                        desc: 'Informasi dapat dibagikan kepada entitas dalam lingkup Lasuarindo Group untuk mendukung operasional bisnis terpadu.',
                      },
                      {
                        icon: 'engineering',
                        title: 'Penyedia Layanan Terpercaya',
                        desc: 'Mitra layanan yang membantu kami dalam pengelolaan situs web, analitik, dan komunikasi — seluruhnya terikat perjanjian kerahasiaan.',
                      },
                      {
                        icon: 'account_balance',
                        title: 'Kewajiban Hukum',
                        desc: 'Kami dapat mengungkapkan data jika diwajibkan oleh hukum, proses hukum, atau permintaan pemerintah yang berwenang.',
                      },
                    ].map((item, i) => (
                      <AnimatedReveal key={item.title} animation="up" delay={100 * (i + 1)}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            gap: '16px',
                            padding: '20px',
                            borderRadius: '12px',
                            border: '1px solid rgba(228, 190, 181, 0.3)',
                            backgroundColor: Colors.surfaceContainerLowest,
                          }}
                        >
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '20px',
                              backgroundColor: 'rgba(177, 38, 0, 0.1)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Icon name={item.icon} size={20} color={Colors.primary} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', color: Colors.onBackground, margin: '0 0 4px 0' }}>
                              {item.title}
                            </h4>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '23px', color: Colors.secondary, margin: 0 }}>
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </AnimatedReveal>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(228, 190, 181, 0.3)', marginBottom: '48px' }} />

            {/* 6. Cookies */}
            <div id="cookies" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
              <AnimatedReveal animation="up" delay={100}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(177, 38, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="cookie" size={28} color={Colors.primary} />
                    </div>
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        fontSize: '28px',
                        lineHeight: '36px',
                        color: Colors.onBackground,
                        margin: 0,
                      }}
                    >
                      Cookie & Teknologi Pelacakan
                    </h2>
                  </div>

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '26px', color: Colors.secondary, marginBottom: '24px' }}>
                    Situs web kami menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman browsing Anda. Berikut jenis cookie yang kami gunakan:
                  </p>

                  {/* Cookie Table */}
                  <div
                    style={{
                      borderRadius: '12px',
                      border: '1px solid rgba(228, 190, 181, 0.5)',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        backgroundColor: Colors.surfaceContainerHigh,
                        padding: '16px 24px',
                        borderBottom: '1px solid rgba(228, 190, 181, 0.3)',
                        fontWeight: 600,
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '16px',
                        color: Colors.onBackground,
                      }}
                    >
                      <span style={{ flex: 1.2 }}>Jenis Cookie</span>
                      <span style={{ flex: 2 }}>Tujuan</span>
                      <span style={{ flex: 1 }}>Durasi</span>
                    </div>

                    {[
                      { type: 'Cookie Esensial', purpose: 'Diperlukan untuk fungsionalitas dasar situs web', duration: 'Sesi' },
                      { type: 'Cookie Analitik', purpose: 'Membantu kami memahami interaksi pengunjung', duration: '1 tahun' },
                      { type: 'Cookie Preferensi', purpose: 'Menyimpan pengaturan bahasa dan tampilan', duration: '6 bulan' },
                    ].map((row, rIdx) => (
                      <div
                        key={row.type}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          padding: '16px 24px',
                          borderBottom: rIdx < 2 ? '1px solid rgba(228, 190, 181, 0.2)' : 'none',
                          backgroundColor: rIdx % 2 === 1 ? Colors.surfaceContainerLowest : '#ffffff',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                        }}
                      >
                        <span style={{ flex: 1.2, fontWeight: 600, color: Colors.onBackground }}>{row.type}</span>
                        <span style={{ flex: 2, color: Colors.secondary }}>{row.purpose}</span>
                        <span style={{ flex: 1, color: Colors.secondary }}>{row.duration}</span>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '26px', color: Colors.secondary, marginTop: '24px', margin: '24px 0 0 0' }}>
                    Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda. Perlu diketahui bahwa menonaktifkan cookie tertentu dapat memengaruhi fungsionalitas situs web.
                  </p>
                </div>
              </AnimatedReveal>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(228, 190, 181, 0.3)', marginBottom: '48px' }} />

            {/* 7. Hak Pengguna */}
            <div id="hak-pengguna" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
              <AnimatedReveal animation="up" delay={100}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(177, 38, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="admin_panel_settings" size={28} color={Colors.primary} />
                    </div>
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        fontSize: '28px',
                        lineHeight: '36px',
                        color: Colors.onBackground,
                        margin: 0,
                      }}
                    >
                      Hak-Hak Pengguna
                    </h2>
                  </div>

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '26px', color: Colors.secondary, marginBottom: '24px' }}>
                    Sesuai dengan UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP), Anda memiliki hak-hak berikut atas data pribadi Anda:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: isMd ? '1fr 1fr' : '1fr', gap: '16px' }}>
                    {[
                      { icon: 'visibility', title: 'Hak Akses', desc: 'Meminta salinan data pribadi yang kami simpan.' },
                      { icon: 'edit', title: 'Hak Koreksi', desc: 'Meminta perbaikan data yang tidak akurat atau tidak lengkap.' },
                      { icon: 'delete', title: 'Hak Penghapusan', desc: 'Meminta penghapusan data dalam kondisi tertentu.' },
                      { icon: 'block', title: 'Hak Pembatasan', desc: 'Meminta pembatasan pemrosesan data Anda.' },
                      { icon: 'file_download', title: 'Hak Portabilitas', desc: 'Meminta data Anda dalam format yang dapat dibaca mesin.' },
                      { icon: 'cancel', title: 'Hak Keberatan', desc: 'Menolak pemrosesan data untuk tujuan tertentu.' },
                    ].map((right, rIdx) => (
                      <AnimatedReveal key={right.title} animation="up" delay={80 * (rIdx + 1)} hover="lift">
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            gap: '12px',
                            padding: '16px',
                            backgroundColor: Colors.surfaceContainerLowest,
                            borderRadius: '12px',
                            border: '1px solid rgba(228, 190, 181, 0.3)',
                            height: '100%',
                            boxSizing: 'border-box',
                          }}
                        >
                          <Icon name={right.icon} size={22} color={Colors.primary} />
                          <div style={{ flex: 1 }}>
                            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '15px', color: Colors.onBackground, margin: '0 0 4px 0' }}>
                              {right.title}
                            </h4>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '20px', color: Colors.secondary, margin: 0 }}>
                              {right.desc}
                            </p>
                          </div>
                        </div>
                      </AnimatedReveal>
                    ))}
                  </div>

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '26px', color: Colors.secondary, marginTop: '24px' }}>
                    Untuk menggunakan hak-hak Anda, silakan hubungi kami melalui{' '}
                    <span
                      onClick={() => router.push('/contact')}
                      style={{ color: Colors.primary, fontWeight: 700, cursor: 'pointer' }}
                    >
                      Halaman Kontak
                    </span>
                    . Kami akan merespons permintaan Anda dalam waktu{' '}
                    <strong style={{ fontWeight: 700, color: Colors.onBackground }}>14 hari kerja</strong>.
                  </p>
                </div>
              </AnimatedReveal>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(228, 190, 181, 0.3)', marginBottom: '48px' }} />

            {/* 8. Perubahan Kebijakan */}
            <div id="perubahan-kebijakan" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
              <AnimatedReveal animation="up" delay={100}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(177, 38, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="history" size={28} color={Colors.primary} />
                    </div>
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        fontSize: '28px',
                        lineHeight: '36px',
                        color: Colors.onBackground,
                        margin: 0,
                      }}
                    >
                      Perubahan Kebijakan
                    </h2>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(177, 38, 0, 0.04)',
                      borderLeft: `4px solid ${Colors.primary}`,
                      padding: '24px',
                      borderRadius: '8px',
                      marginBottom: '24px',
                    }}
                  >
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '26px', color: Colors.secondary, marginBottom: '16px' }}>
                      Kami berhak memperbarui Kebijakan Privasi ini sewaktu-waktu. Perubahan signifikan akan diberitahukan melalui pemberitahuan yang jelas di situs web kami.
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '26px', color: Colors.secondary, margin: 0 }}>
                      Kami menyarankan Anda untuk meninjau halaman ini secara berkala agar tetap memahami kebijakan terbaru kami. Penggunaan berkelanjutan atas layanan kami setelah perubahan dipublikasikan merupakan bentuk penerimaan Anda terhadap kebijakan yang diperbarui.
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      <BackToTop />
    </div>
  );
}
