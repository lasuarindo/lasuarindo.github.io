import React, { useState } from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientDivider } from '@/components/ui/GradientDivider';
import { Icon } from '@/components/ui/Icon';
import { BODY_FONT, CONTAINER, DISPLAY_FONT } from '@/constants/layout';
import { useContactStrings } from '../useContactStrings';

const SOCIALS = [
  { label: 'Website', icon: 'language', url: 'https://www.lasuarindo.co.id' },
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/lasuarindogroup' },
  { label: 'LinkedIn', icon: 'linkedin' },
  { label: 'Email', icon: 'mail', url: 'mailto:contact@lasuarindo.co.id' },
];

const INPUT_CLASS = 'box-border w-full rounded-lg border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] px-[14px] py-[10px] font-[var(--font-body)] text-[15px] text-[var(--color-on-background)] outline-none focus:border-[var(--color-primary)]';
const LABEL_CLASS = 'mb-[6px] block font-[var(--font-display)] text-[12px] font-semibold uppercase leading-4 tracking-[0.35px] text-[var(--color-on-background)]';
const INFO_ICON_BOX = 'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(177,38,0,0.1)]';
const INFO_TITLE = `m-0 mb-[2px] ${DISPLAY_FONT} text-[18px] font-bold leading-6 text-[var(--color-on-background)]`;
const INFO_TEXT = `m-0 ${BODY_FONT} text-[14px] leading-5 text-[var(--color-secondary)]`;

export function ContactForm() {
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

export default ContactForm;
