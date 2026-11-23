import React, { useState } from 'react';
import { useLanguage } from '@/i18n/language.js';
import { useResponsive } from '@/hooks/useResponsive';
import { useStrings } from '@/i18n/useStrings';
import idContact from '@/i18n/locales/id/contact.json';
import enContact from '@/i18n/locales/en/contact.json';
import idHome from '@/i18n/locales/id/home.json';
import enHome from '@/i18n/locales/en/home.json';
import { GradientText } from '@/components/GradientText';
import { AnimatedReveal } from '@/components/AnimatedReveal';
import { Icon } from '@/components/Icon';
import { Colors } from '@/constants/theme';
import heroBgImg from '@/assets/images/header_hero_home.png';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7983637172087!2d107.6119859!3d-6.9189088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6302dc3a29b%3A0x6002fef9a8f27807!2sJl.%20Tamblong%20No.46%2C%20Kb.%20Pisang%2C%20Kec.%20Sumur%20Bandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040112!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid';

const SOCIALS = [
  { label: 'Website', icon: 'language', url: 'https://www.lasuarindo.co.id' },
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/lasuarindogroup' },
  { label: 'LinkedIn', icon: 'linkedin' },
  { label: 'Email', icon: 'mail', url: 'mailto:contact@lasuarindo.co.id' },
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

function useContactStrings() {
  return useStrings({ id: { contact: idContact, home: idHome }, en: { contact: enContact, home: enHome } });
}

// --- Hero ---
function ContactHero() {
  const t = useContactStrings();
  const { isDesktop } = useResponsive();

  return (
    <section style={{ position: 'relative', backgroundColor: Colors.inverseSurface, overflow: 'hidden', paddingTop: isDesktop ? '110px' : '96px', paddingBottom: isDesktop ? '112px' : '80px' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: `url(${heroBgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(47, 49, 49, 0) 0%, rgba(47, 49, 49, 0.5) 60%, #2f3131 100%)' }} />
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <AnimatedReveal animation="up" delay={0} disabled>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#ffb4a3', display: 'block', marginBottom: '14px' }}>{t.contact.badge}</span>
        </AnimatedReveal>
        <AnimatedReveal animation="up" delay={60} disabled>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: isDesktop ? '56px' : '40px', lineHeight: '1.12', color: '#ffffff', margin: 0, marginBottom: '18px' }}>
            {t.contact.heroTitle1}<br />
            <GradientText>{t.contact.heroTitle2}</GradientText>
          </h1>
        </AnimatedReveal>
        <AnimatedReveal animation="up" delay={120} disabled>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '29px', color: Colors.surfaceVariant, maxWidth: '672px', margin: 0 }}>{t.contact.heroSubtitle}</p>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- Contact Info & Form ---
function ContactFormSection() {
  const { language } = useLanguage();
  const t = useContactStrings();
  const { isDesktop, isMobile, isMd } = useResponsive();
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [perusahaan, setPerusahaan] = useState('');
  const [subjek, setSubjek] = useState('');
  const [pesan, setPesan] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const SUBJECTS =
    language === 'en'
      ? ['Strategic Partnership', 'Investor Relations', 'Project Collaboration', 'Technology Services', 'General Inquiries']
      : ['Kemitraan Strategis', 'Hubungan Investor', 'Kolaborasi Proyek', 'Layanan Teknologi', 'Pertanyaan Umum'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama.trim() || !email.trim() || !subjek || !pesan.trim()) {
      setStatus({ type: 'error', message: t.contact.alertIncomplete });
      return;
    }
    if (!email.includes('@')) {
      setStatus({ type: 'error', message: t.contact.alertEmailInvalid });
      return;
    }
    setStatus({ type: 'success', message: t.contact.alertSuccess });
    setNama(''); setEmail(''); setPerusahaan(''); setSubjek(''); setPesan('');
  };

  const inputStyle = {
    width: '100%', padding: '10px 14px', backgroundColor: Colors.surfaceContainerLow,
    border: `1px solid ${Colors.outlineVariant}`, borderRadius: '8px',
    fontFamily: 'Inter, sans-serif', fontSize: '15px', color: Colors.onBackground,
    outline: 'none', boxSizing: 'border-box',
  };
  const labelStyle = {
    display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: '12px',
    fontWeight: 600, lineHeight: '16px', letterSpacing: '0.35px', textTransform: 'uppercase',
    color: Colors.onBackground, marginBottom: '6px',
  };

  return (
    <section className="section" style={{ padding: '48px 0', backgroundColor: Colors.surface }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? '1fr 1.15fr' : '1fr', gap: isDesktop ? '40px' : '32px', alignItems: 'start' }}>
          {/* Left Info Column */}
          <AnimatedReveal animation="left" delay={100}>
            <div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: isDesktop ? '34px' : '28px', lineHeight: isDesktop ? '40px' : '34px', color: Colors.onBackground, marginBottom: '10px' }}>
                {language === 'en' ? 'CONTACT ' : 'INFORMASI '}<span style={{ color: Colors.primary }}>{language === 'en' ? 'INFO' : 'KONTAK'}</span>
              </h2>
              <GradientDivider />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(177, 38, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="location_on" size={24} color={Colors.primary} /></div>
                  <div>
                    <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '24px', color: Colors.onBackground, margin: '0 0 2px 0' }}>{t.contact.addressTitle}</h4>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '20px', color: Colors.secondary, margin: 0 }}>Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40112, Indonesia</p>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '20px', color: 'rgba(95, 94, 94, 0.7)', display: 'block', marginTop: '2px' }}>{language === 'en' ? 'Bandung City Area' : 'Area Kota Bandung'}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(177, 38, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="mail" size={24} color={Colors.primary} /></div>
                  <div>
                    <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '24px', color: Colors.onBackground, margin: '0 0 2px 0' }}>{t.contact.emailTitle}</h4>
                    <a href="mailto:contact@lasuarindo.co.id" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '20px', color: Colors.secondary, textDecoration: 'none' }}>contact@lasuarindo.co.id</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(177, 38, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="schedule" size={24} color={Colors.primary} /></div>
                  <div>
                    <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '24px', color: Colors.onBackground, margin: '0 0 2px 0' }}>{t.contact.hoursTitle}</h4>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '20px', color: Colors.secondary, margin: 0 }}>{t.contact.hoursDesc}</p>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '20px', color: 'rgba(95, 94, 94, 0.7)', display: 'block', marginTop: '2px' }}>{language === 'en' ? 'Saturday - Sunday: Closed' : 'Sabtu - Minggu: Tutup'}</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(228, 190, 181, 0.3)' }}>
                <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '15px', lineHeight: '22px', color: Colors.onBackground, marginBottom: '12px' }}>{t.contact.socialHeading}</h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {SOCIALS.map((s) => (
                    <a key={s.label} href={s.url || '#'} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(177, 38, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: Colors.primary, transition: 'background-color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(177, 38, 0, 0.2)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(177, 38, 0, 0.1)')}>
                      <Icon name={s.icon} size={20} color={Colors.primary} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Right Form Column */}
          <AnimatedReveal animation="right" delay={100}>
            <div style={{ backgroundColor: Colors.surfaceContainerLowest, borderRadius: '16px', border: '1px solid rgba(228, 190, 181, 0.3)', boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.1)', padding: isDesktop ? '28px' : isMobile ? '20px' : '24px' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '30px', color: Colors.onBackground, margin: '0 0 4px 0' }}>{t.contact.formTitle}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '20px', color: Colors.secondary, marginBottom: '20px' }}>
                {language === 'en' ? 'Fill out the form below and our team will get in touch with you within 24 hours.' : 'Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam waktu 1x24 jam.'}
              </p>
              {status.message && (
                <div style={{ padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px', fontFamily: 'Inter, sans-serif', backgroundColor: status.type === 'error' ? 'rgba(186, 26, 26, 0.1)' : 'rgba(16, 185, 129, 0.1)', border: `1px solid ${status.type === 'error' ? '#ba1a1a' : '#10b981'}`, color: status.type === 'error' ? '#ba1a1a' : '#047857' }}>{status.message}</div>
              )}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: isMd ? '1fr 1fr' : '1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>{t.contact.nameLabel}</label>
                    <input type="text" placeholder={t.contact.namePlaceholder} value={nama} onChange={(e) => setNama(e.target.value)} style={inputStyle} onFocus={(e) => (e.target.style.borderColor = Colors.primary)} onBlur={(e) => (e.target.style.borderColor = Colors.outlineVariant)} />
                  </div>
                  <div>
                    <label style={labelStyle}>{t.contact.emailLabel}</label>
                    <input type="email" placeholder={t.contact.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} onFocus={(e) => (e.target.style.borderColor = Colors.primary)} onBlur={(e) => (e.target.style.borderColor = Colors.outlineVariant)} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>{t.contact.companyLabel}</label>
                  <input type="text" placeholder={t.contact.companyPlaceholder} value={perusahaan} onChange={(e) => setPerusahaan(e.target.value)} style={inputStyle} onFocus={(e) => (e.target.style.borderColor = Colors.primary)} onBlur={(e) => (e.target.style.borderColor = Colors.outlineVariant)} />
                </div>
                <div>
                  <label style={labelStyle}>{t.contact.subjectLabel}</label>
                  <select value={subjek} onChange={(e) => setSubjek(e.target.value)} style={inputStyle} onFocus={(e) => (e.target.style.borderColor = Colors.primary)} onBlur={(e) => (e.target.style.borderColor = Colors.outlineVariant)}>
                    <option value="">{t.contact.subjectPlaceholder}</option>
                    {SUBJECTS.map((opt) => (<option key={opt} value={opt} style={{ color: Colors.onBackground }}>{opt}</option>))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>{t.contact.messageLabel}</label>
                  <textarea rows={4} placeholder={t.contact.messagePlaceholder} value={pesan} onChange={(e) => setPesan(e.target.value)} style={inputStyle} onFocus={(e) => (e.target.style.borderColor = Colors.primary)} onBlur={(e) => (e.target.style.borderColor = Colors.outlineVariant)} />
                </div>
                <button type="submit" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: Colors.primary, padding: '12px 24px', borderRadius: '12px', border: 'none', color: Colors.onPrimary, fontFamily: 'Montserrat, sans-serif', fontSize: '16px', lineHeight: '22px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = Colors.primaryContainer)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = Colors.primary)}>
                  <Icon name="send" size={20} color={Colors.onPrimary} /><span>{t.contact.sendBtn}</span>
                </button>
              </form>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

// --- Map ---
function ContactMap() {
  const { isMobile, isMd } = useResponsive();

  return (
    <section style={{ padding: '80px 0', backgroundColor: Colors.surfaceContainerLow }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <AnimatedReveal animation="up" delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: isMd ? '40px' : '30px', color: Colors.onBackground, marginBottom: '16px' }}>LOKASI <span style={{ color: Colors.primary }}>KAMI</span></h2>
            <GradientDivider center />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(228, 190, 181, 0.3)', boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', height: isMobile ? '320px' : '450px' }}>
            <iframe src={MAP_EMBED_URL} width="100%" height={isMobile ? '320' : '450'} style={{ border: 0, display: 'block' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi Kantor Lasuarindo Group" />
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- Partnership CTA ---
function ContactPartnership() {
  const { language } = useLanguage();
  const t = useContactStrings();
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const partnerCards = [
    { icon: 'handshake', title: t.home.strategicPartnership, desc: language === 'en' ? 'Build mutually rewarding collaboration and create lasting tangible impact together with us.' : 'Bangun kolaborasi yang saling menguntungkan dan menciptakan dampak nyata bersama kami.' },
    { icon: 'trending_up', title: t.home.investorRelations, desc: language === 'en' ? 'Invest in an integrated, high-growth business ecosystem with sustainable potential.' : 'Investasikan di ekosistem bisnis yang terintegrasi dan terus berkembang.' },
    { icon: 'group_add', title: t.home.collaboration, desc: language === 'en' ? 'Join our community of professionals and creators to execute impactful initiatives.' : 'Bergabunglah dengan komunitas profesional dan kreatif kami untuk proyek berdampak.' },
  ];

  return (
    <section className="section section--dark" style={{ padding: isMobile ? '56px 0' : '80px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : isTablet ? 'repeat(2, 1fr)' : '1fr', gap: '24px' }}>
        {partnerCards.map((card, i) => (
          <AnimatedReveal key={card.title} animation="up" delay={100 * (i + 1)} hover="lift">
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(228, 190, 181, 0.2)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', boxSizing: 'border-box' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: 'rgba(177, 38, 0, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}><Icon name={card.icon} size={36} color={Colors.primaryFixedDim} /></div>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '28px', lineHeight: '36px', color: Colors.onPrimary, marginBottom: '12px' }}>{card.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '26px', color: Colors.surfaceVariant, margin: 0 }}>{card.desc}</p>
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactMap />
      <ContactPartnership />
    </>
  );
}

export const Kontak = Contact;
export default Contact;