import React, { useState } from 'react';
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
  const contactBundle = { id: { contact: idContact }, en: { contact: enContact } };
  const homeBundle = { id: { home: idHome }, en: { home: enHome } };
  return useStrings({
    id: Object.assign({}, contactBundle.id, homeBundle.id),
    en: Object.assign({}, contactBundle.en, homeBundle.en),
  });
}

// --- Hero ---
function ContactHero() {
  const t = useContactStrings();

  return (
    <section className="relative overflow-hidden bg-[var(--color-inverse-surface)] pb-[80px] pt-[96px] lg:pb-[112px] lg:pt-[110px]">
      <img src={heroBgImg} alt="" aria-hidden="true" className="absolute inset-0 z-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(47,49,49,0)_0%,rgba(47,49,49,0.5)_60%,#2f3131_100%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
        <AnimatedReveal animation="up" delay={0} disabled>
          <span className="mb-[14px] block font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[1.5px] text-[#ffb4a3]">{t.contact.badge}</span>
        </AnimatedReveal>
        <AnimatedReveal animation="up" delay={60} disabled>
          <h1 className="m-0 mb-[18px] font-[var(--font-display)] text-[40px] font-bold leading-[1.12] text-white lg:text-[56px]">
            {t.contact.heroTitle1}<br />
            <GradientText>{t.contact.heroTitle2}</GradientText>
          </h1>
        </AnimatedReveal>
        <AnimatedReveal animation="up" delay={120} disabled>
          <p className="m-0 max-w-[672px] font-[var(--font-body)] text-[18px] leading-[29px] text-[var(--color-surface-variant)]">{t.contact.heroSubtitle}</p>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- Contact Info & Form ---
function ContactFormSection() {
  const t = useContactStrings();
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [perusahaan, setPerusahaan] = useState('');
  const [subjek, setSubjek] = useState('');
  const [pesan, setPesan] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

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
              <h2 className="mb-[10px] font-[var(--font-display)] text-[28px] font-bold leading-[34px] text-[var(--color-on-background)] lg:text-[34px] lg:leading-[40px]">
                {t.contact.infoHeading1}<span className="text-[var(--color-primary)]">{t.contact.infoHeading2}</span>
              </h2>
              <GradientDivider />
              <div className="mt-5 flex flex-col gap-5">
                <div className="flex items-start gap-[14px]">
                  <div className={INFO_ICON_BOX}><Icon name="location_on" size={24} color="#b12600" /></div>
                  <div>
                    <h4 className={INFO_TITLE}>{t.contact.addressTitle}</h4>
                    <p className={INFO_TEXT}>{t.contact.addressDetail}</p>
                    <span className="mt-[2px] block font-[var(--font-body)] text-[14px] leading-5 text-[rgba(95,94,94,0.7)]">{t.contact.addressArea}</span>
                  </div>
                </div>
                <div className="flex items-start gap-[14px]">
                  <div className={INFO_ICON_BOX}><Icon name="mail" size={24} color="#b12600" /></div>
                  <div>
                    <h4 className={INFO_TITLE}>{t.contact.emailTitle}</h4>
                    <a href="mailto:contact@lasuarindo.co.id" className="font-[var(--font-body)] text-[14px] leading-5 text-[var(--color-secondary)] no-underline">contact@lasuarindo.co.id</a>
                  </div>
                </div>
                <div className="flex items-start gap-[14px]">
                  <div className={INFO_ICON_BOX}><Icon name="schedule" size={24} color="#b12600" /></div>
                  <div>
                    <h4 className={INFO_TITLE}>{t.contact.hoursTitle}</h4>
                    <p className={INFO_TEXT}>{t.contact.hoursDesc}</p>
                    <span className="mt-[2px] block font-[var(--font-body)] text-[14px] leading-5 text-[rgba(95,94,94,0.7)]">{t.contact.hoursDetail}</span>
                  </div>
                </div>
              </div>
              <div className="mt-7 border-t border-[rgba(228,190,181,0.3)] pt-5">
                <h4 className="mb-3 font-[var(--font-display)] text-[15px] font-bold leading-[22px] text-[var(--color-on-background)]">{t.contact.socialHeading}</h4>
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
              <h3 className="m-0 mb-1 font-[var(--font-display)] text-[24px] font-bold leading-[30px] text-[var(--color-on-background)]">{t.contact.formTitle}</h3>
              <p className="m-0 mb-5 font-[var(--font-body)] text-[14px] leading-5 text-[var(--color-secondary)]">
                {t.contact.formSubtitle}
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
                    {t.contact.subjects.map((opt) => (<option key={opt} value={opt} className="text-[var(--color-on-background)]">{opt}</option>))}
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
  const t = useContactStrings();

  return (
    <section className="bg-[var(--color-surface-container-low)] py-20">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-[var(--font-display)] text-[30px] font-bold text-[var(--color-on-background)] md:text-[40px]">{t.contact.locationHeading1}<span className="text-[var(--color-primary)]">{t.contact.locationHeading2}</span></h2>
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
  const t = useContactStrings();
  const partnerCards = [
    { icon: 'handshake', title: t.home.strategicPartnership, desc: t.contact.partnerCardsDesc.strategicPartnership },
    { icon: 'trending_up', title: t.home.investorRelations, desc: t.contact.partnerCardsDesc.investorRelations },
    { icon: 'group_add', title: t.home.collaboration, desc: t.contact.partnerCardsDesc.collaboration },
  ];

  return (
    <section className="section--dark py-20 max-[767px]:py-14">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full max-w-[1280px] px-6">
        {partnerCards.map((card, i) => (
          <AnimatedReveal key={card.title} animation="up" delay={100 * (i + 1)} hover="lift">
            <div className="box-border flex h-full flex-col items-center rounded-2xl border border-[rgba(228,190,181,0.2)] bg-[rgba(255,255,255,0.08)] p-8 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(177,38,0,0.2)]"><Icon name={card.icon} size={36} color="#ffb4a3" /></div>
              <h3 className="mb-3 font-[var(--font-display)] text-[28px] font-bold leading-9 text-[var(--color-on-primary)]">{card.title}</h3>
              <p className="m-0 font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-surface-variant)]">{card.desc}</p>
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