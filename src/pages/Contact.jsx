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
import heroBgImg from '@/assets/images/header_hero_home.png';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7983637172087!2d107.6119859!3d-6.9189088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6302dc3a29b%3A0x6002fef9a8f27807!2sJl.%20Tamblong%20No.46%2C%20Kb.%20Pisang%2C%20Kec.%20Sumur%20Bandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040112!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid';

const SOCIALS = [
  { label: 'Website', icon: 'language', url: 'https://www.lasuarindo.co.id' },
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/lasuarindogroup' },
  { label: 'LinkedIn', icon: 'linkedin' },
  { label: 'Email', icon: 'mail', url: 'mailto:contact@lasuarindo.co.id' },
];

const CONTAINER = 'mx-auto w-full max-w-[1280px] px-6';
const DISPLAY_FONT = 'font-[var(--font-display)]';
const BODY_FONT = 'font-[var(--font-body)]';
const INPUT_CLASS = 'box-border w-full rounded-lg border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] px-[14px] py-[10px] font-[var(--font-body)] text-[15px] text-[var(--color-on-background)] outline-none focus:border-[var(--color-primary)]';
const LABEL_CLASS = 'mb-[6px] block font-[var(--font-display)] text-[12px] font-semibold uppercase leading-4 tracking-[0.35px] text-[var(--color-on-background)]';
const INFO_ICON_BOX = 'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(177,38,0,0.1)]';
const INFO_TITLE = `m-0 mb-[2px] ${DISPLAY_FONT} text-[18px] font-bold leading-6 text-[var(--color-on-background)]`;
const INFO_TEXT = `m-0 ${BODY_FONT} text-[14px] leading-5 text-[var(--color-secondary)]`;

function GradientDivider({ center = false }) {
  return <div className={`mb-5 h-1 w-16 rounded-[2px] bg-[linear-gradient(to_right,#b12600,#ffb68b)] ${center ? 'mx-auto' : ''}`} />;
}

function useContactStrings() {
  return useStrings({ id: { contact: idContact, home: idHome }, en: { contact: enContact, home: enHome } });
}

// --- Hero ---
function ContactHero() {
  const t = useContactStrings();

  return (
    <section className="relative overflow-hidden bg-[var(--color-inverse-surface)] pb-[80px] pt-[96px] lg:pb-[112px] lg:pt-[110px]">
      <img src={heroBgImg} alt="" aria-hidden="true" className="absolute inset-0 z-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(47,49,49,0)_0%,rgba(47,49,49,0.5)_60%,#2f3131_100%)]" />
      <div className={`relative z-10 ${CONTAINER}`}>
        <AnimatedReveal animation="up" delay={0} disabled>
          <span className={`mb-[14px] block ${DISPLAY_FONT} text-[12px] font-semibold uppercase tracking-[1.5px] text-[#ffb4a3]`}>{t.contact.badge}</span>
        </AnimatedReveal>
        <AnimatedReveal animation="up" delay={60} disabled>
          <h1 className={`m-0 mb-[18px] ${DISPLAY_FONT} text-[40px] font-bold leading-[1.12] text-white lg:text-[56px]`}>
            {t.contact.heroTitle1}<br />
            <GradientText>{t.contact.heroTitle2}</GradientText>
          </h1>
        </AnimatedReveal>
        <AnimatedReveal animation="up" delay={120} disabled>
          <p className={`m-0 max-w-[672px] ${BODY_FONT} text-[18px] leading-[29px] text-[var(--color-surface-variant)]`}>{t.contact.heroSubtitle}</p>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- Contact Info & Form ---
function ContactFormSection() {
  const { language } = useLanguage();
  const t = useContactStrings();
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

  return (
    <section className="bg-[var(--color-surface)] py-12">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          {/* Left Info Column */}
          <AnimatedReveal animation="left" delay={100}>
            <div>
              <h2 className={`mb-[10px] ${DISPLAY_FONT} text-[28px] font-bold leading-[34px] text-[var(--color-on-background)] lg:text-[34px] lg:leading-[40px]`}>
                {language === 'en' ? 'CONTACT ' : 'INFORMASI '}<span className="text-[var(--color-primary)]">{language === 'en' ? 'INFO' : 'KONTAK'}</span>
              </h2>
              <GradientDivider />
              <div className="mt-5 flex flex-col gap-5">
                <div className="flex items-start gap-[14px]">
                  <div className={INFO_ICON_BOX}><Icon name="location_on" size={24} color="#b12600" /></div>
                  <div>
                    <h4 className={INFO_TITLE}>{t.contact.addressTitle}</h4>
                    <p className={INFO_TEXT}>Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40112, Indonesia</p>
                    <span className={`mt-[2px] block ${BODY_FONT} text-[14px] leading-5 text-[rgba(95,94,94,0.7)]`}>{language === 'en' ? 'Bandung City Area' : 'Area Kota Bandung'}</span>
                  </div>
                </div>
                <div className="flex items-start gap-[14px]">
                  <div className={INFO_ICON_BOX}><Icon name="mail" size={24} color="#b12600" /></div>
                  <div>
                    <h4 className={INFO_TITLE}>{t.contact.emailTitle}</h4>
                    <a href="mailto:contact@lasuarindo.co.id" className={`${BODY_FONT} text-[14px] leading-5 text-[var(--color-secondary)] no-underline`}>contact@lasuarindo.co.id</a>
                  </div>
                </div>
                <div className="flex items-start gap-[14px]">
                  <div className={INFO_ICON_BOX}><Icon name="schedule" size={24} color="#b12600" /></div>
                  <div>
                    <h4 className={INFO_TITLE}>{t.contact.hoursTitle}</h4>
                    <p className={INFO_TEXT}>{t.contact.hoursDesc}</p>
                    <span className={`mt-[2px] block ${BODY_FONT} text-[14px] leading-5 text-[rgba(95,94,94,0.7)]`}>{language === 'en' ? 'Saturday - Sunday: Closed' : 'Sabtu - Minggu: Tutup'}</span>
                  </div>
                </div>
              </div>
              <div className="mt-7 border-t border-[rgba(228,190,181,0.3)] pt-5">
                <h4 className={`mb-3 ${DISPLAY_FONT} text-[15px] font-bold leading-[22px] text-[var(--color-on-background)]`}>{t.contact.socialHeading}</h4>
                <div className="flex gap-3">
                  {SOCIALS.map((s) => (
                    <a key={s.label} href={s.url || '#'} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[rgba(177,38,0,0.1)] text-[var(--color-primary)] no-underline transition-colors duration-200 hover:bg-[rgba(177,38,0,0.2)]">
                      <Icon name={s.icon} size={20} color="#b12600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Right Form Column */}
          <AnimatedReveal animation="right" delay={100}>
            <div className="rounded-2xl border border-[rgba(228,190,181,0.3)] bg-[var(--color-surface-container-lowest)] p-6 shadow-[0_20px_25px_rgba(0,0,0,0.1),0_8px_10px_rgba(0,0,0,0.1)] max-[767px]:p-5 lg:p-7">
              <h3 className={`m-0 mb-1 ${DISPLAY_FONT} text-[24px] font-bold leading-[30px] text-[var(--color-on-background)]`}>{t.contact.formTitle}</h3>
              <p className={`m-0 mb-5 ${BODY_FONT} text-[14px] leading-5 text-[var(--color-secondary)]`}>
                {language === 'en' ? 'Fill out the form below and our team will get in touch with you within 24 hours.' : 'Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam waktu 1x24 jam.'}
              </p>
              {status.message && (
                <div className={`mb-4 rounded-lg border px-4 py-3 font-[var(--font-body)] text-[14px] ${status.type === 'error' ? 'border-[#ba1a1a] bg-[rgba(186,26,26,0.1)] text-[#ba1a1a]' : 'border-[#10b981] bg-[rgba(16,185,129,0.1)] text-[#047857]'}`}>{status.message}</div>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div>
                    <label className={LABEL_CLASS}>{t.contact.nameLabel}</label>
                    <input type="text" placeholder={t.contact.namePlaceholder} value={nama} onChange={(e) => setNama(e.target.value)} className={INPUT_CLASS} />
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>{t.contact.emailLabel}</label>
                    <input type="email" placeholder={t.contact.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} className={INPUT_CLASS} />
                  </div>
                </div>
                <div>
                  <label className={LABEL_CLASS}>{t.contact.companyLabel}</label>
                  <input type="text" placeholder={t.contact.companyPlaceholder} value={perusahaan} onChange={(e) => setPerusahaan(e.target.value)} className={INPUT_CLASS} />
                </div>
                <div>
                  <label className={LABEL_CLASS}>{t.contact.subjectLabel}</label>
                  <select value={subjek} onChange={(e) => setSubjek(e.target.value)} className={INPUT_CLASS}>
                    <option value="">{t.contact.subjectPlaceholder}</option>
                    {SUBJECTS.map((opt) => (<option key={opt} value={opt} className="text-[var(--color-on-background)]">{opt}</option>))}
                  </select>
                </div>
                <div>
                  <label className={LABEL_CLASS}>{t.contact.messageLabel}</label>
                  <textarea rows={4} placeholder={t.contact.messagePlaceholder} value={pesan} onChange={(e) => setPesan(e.target.value)} className={INPUT_CLASS} />
                </div>
                <button type="submit" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-0 bg-[var(--color-primary)] px-6 py-3 font-[var(--font-display)] text-[16px] font-bold leading-[22px] text-[var(--color-on-primary)] shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] transition-colors duration-200 hover:bg-[var(--color-primary-container)]">
                  <Icon name="send" size={20} color="#ffffff" /><span>{t.contact.sendBtn}</span>
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
  const { isMobile } = useResponsive();

  return (
    <section className="bg-[var(--color-surface-container-low)] py-20">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mb-12 text-center">
            <h2 className={`mb-4 ${DISPLAY_FONT} text-[30px] font-bold text-[var(--color-on-background)] md:text-[40px]`}>LOKASI <span className="text-[var(--color-primary)]">KAMI</span></h2>
            <GradientDivider center />
          </div>
          <div className="h-[450px] overflow-hidden rounded-2xl border border-[rgba(228,190,181,0.3)] bg-white shadow-[0_20px_25px_rgba(0,0,0,0.1),0_8px_10px_rgba(0,0,0,0.1)] max-[767px]:h-[320px]">
            <iframe src={MAP_EMBED_URL} width="100%" height={isMobile ? '320' : '450'} className="block border-0" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi Kantor Lasuarindo Group" />
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
  const partnerCards = [
    { icon: 'handshake', title: t.home.strategicPartnership, desc: language === 'en' ? 'Build mutually rewarding collaboration and create lasting tangible impact together with us.' : 'Bangun kolaborasi yang saling menguntungkan dan menciptakan dampak nyata bersama kami.' },
    { icon: 'trending_up', title: t.home.investorRelations, desc: language === 'en' ? 'Invest in an integrated, high-growth business ecosystem with sustainable potential.' : 'Investasikan di ekosistem bisnis yang terintegrasi dan terus berkembang.' },
    { icon: 'group_add', title: t.home.collaboration, desc: language === 'en' ? 'Join our community of professionals and creators to execute impactful initiatives.' : 'Bergabunglah dengan komunitas profesional dan kreatif kami untuk proyek berdampak.' },
  ];

  return (
    <section className="section--dark py-20 max-[767px]:py-14">
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${CONTAINER}`}>
        {partnerCards.map((card, i) => (
          <AnimatedReveal key={card.title} animation="up" delay={100 * (i + 1)} hover="lift">
            <div className="box-border flex h-full flex-col items-center rounded-2xl border border-[rgba(228,190,181,0.2)] bg-[rgba(255,255,255,0.08)] p-8 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(177,38,0,0.2)]"><Icon name={card.icon} size={36} color="#ffb4a3" /></div>
              <h3 className={`mb-3 ${DISPLAY_FONT} text-[28px] font-bold leading-9 text-[var(--color-on-primary)]`}>{card.title}</h3>
              <p className={`m-0 ${BODY_FONT} text-[16px] leading-[26px] text-[var(--color-surface-variant)]`}>{card.desc}</p>
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
