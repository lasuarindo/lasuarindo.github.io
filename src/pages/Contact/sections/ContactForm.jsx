import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { company, formatAddress } from '@/data/company';
import { localized } from '@/utils/localized';
import { useContactStrings } from '../useContactStrings';

/** A label that never hides, an error that lives next to its own field. */
function Field({ id, label, error, children, className = '' }) {
  const errorId = `${id}-error`;

  return (
    <div className={`field ${className}`.trim()}>
      <label htmlFor={id} className="field__label">{label}</label>
      <div className="field__control-wrap">
        {React.cloneElement(children, {
          id,
          'aria-invalid': error ? 'true' : undefined,
          'aria-describedby': error ? errorId : undefined,
        })}
      </div>
      {error ? <p id={errorId} className="field__error">{error}</p> : null}
    </div>
  );
}

export function ContactForm() {
  const t = useContactStrings();
  const { language } = useLanguage();
  const { search } = useLocation();
  const intent = new URLSearchParams(search).get('intent');
  const initialSubject =
    intent && Object.prototype.hasOwnProperty.call(t.contact.subjects, intent)
      ? intent
      : '';

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [perusahaan, setPerusahaan] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [pesan, setPesan] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const formRef = useRef(null);
  const focusOnErrors = useRef(false);

  useEffect(() => {
    if (!focusOnErrors.current || !Object.keys(errors).length) return;
    focusOnErrors.current = false;
    formRef.current?.querySelector('[aria-invalid="true"]')?.focus();
  }, [errors]);

  const clearFieldError = (field) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    setStatus((prev) => (prev.message ? { type: '', message: '' } : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!nama.trim()) nextErrors.name = t.contact.errorName;
    if (!email.trim()) nextErrors.email = t.contact.errorEmail;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = t.contact.errorEmailFormat;
    }
    if (!subject) nextErrors.subject = t.contact.errorSubject;
    if (!pesan.trim()) nextErrors.message = t.contact.errorMessage;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus({ type: 'error', message: t.contact.alertIncomplete });
      focusOnErrors.current = true;
      return;
    }

    // No endpoint is connected: this is a demo confirmation, not a sent message.
    setStatus({ type: 'success', message: t.contact.alertSuccess });
  };

  const statusClass =
    status.type === 'error'
      ? 'border-l-2 border-[var(--color-error)] bg-[rgba(186,26,26,0.06)] text-[var(--color-error)]'
      : 'border-l-2 border-[var(--color-primary)] bg-[rgba(177,38,0,0.06)] text-[var(--color-primary)]';

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader
          badge={t.contact.infoTitle}
          titlePrimary={t.contact.infoHeading1}
          titleSecondary={t.contact.infoHeading2}
        />

        <AnimatedReveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
            {/* Contact details: one editorial row per fact. */}
            <div>
              <dl className="info-list">
                <div className="info-row">
                  <dt className="info-row__label">{t.contact.addressTitle}</dt>
                  <dd className="info-row__value">
                    {formatAddress({ includeCountry: true })}
                    <span className="info-row__note">{t.contact.addressArea}</span>
                  </dd>
                </div>
                <div className="info-row">
                  <dt className="info-row__label">{t.contact.emailTitle}</dt>
                  <dd className="info-row__value">
                    <a className="info-link" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div className="info-row">
                  <dt className="info-row__label">{t.contact.hoursTitle}</dt>
                  <dd className="info-row__value">
                    {localized(company.hours.weekdays, language)}
                    <span className="info-row__note">
                      {localized(company.hours.weekend, language)}
                    </span>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 border-t border-[var(--color-line)] pt-5">
                <h3 className="m-0 mb-2 font-[var(--font-display)] text-[15px] font-bold text-[var(--color-ink)]">
                  {t.contact.socialHeading}
                </h3>
                <div className="flex flex-wrap gap-x-6">
                  {company.social.filter((item) => item.url).map((item) => (
                    <a
                      key={item.label}
                      className="info-link"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Flat paper panel; no shadow, no glass. */}
            <div className="rounded-[2px] border border-[var(--color-line)] bg-white p-6 sm:p-8">
              <h3 className="m-0 font-[var(--font-display)] text-[24px] font-semibold leading-[30px] text-[var(--color-ink)]">
                {t.contact.formTitle}
              </h3>
              <p className="prose mt-2">{t.contact.formSubtitle}</p>

              {status.message ? (
                <div
                  role={status.type === 'error' ? 'alert' : 'status'}
                  aria-live={status.type === 'error' ? 'assertive' : 'polite'}
                  className={`mt-5 px-4 py-3 text-[14px] leading-5 ${statusClass}`}
                >
                  {status.message}
                </div>
              ) : null}

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="mt-6 flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="contact-name" label={t.contact.nameLabel} error={errors.name}>
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder={t.contact.namePlaceholder}
                      value={nama}
                      onChange={(event) => {
                        setNama(event.target.value);
                        clearFieldError('name');
                      }}
                      className="field__control"
                    />
                  </Field>
                  <Field id="contact-email" label={t.contact.emailLabel} error={errors.email}>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={t.contact.emailPlaceholder}
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        clearFieldError('email');
                      }}
                      className="field__control"
                    />
                  </Field>
                </div>

                <Field id="contact-company" label={t.contact.companyLabel} error={errors.company}>
                  <input
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder={t.contact.companyPlaceholder}
                    value={perusahaan}
                    onChange={(event) => setPerusahaan(event.target.value)}
                    className="field__control"
                  />
                </Field>

                <Field id="contact-subject" label={t.contact.subjectLabel} error={errors.subject}>
                  <select
                    name="subject"
                    value={subject}
                    onChange={(event) => {
                      setSubject(event.target.value);
                      clearFieldError('subject');
                    }}
                    className="field__control"
                  >
                    <option value="">{t.contact.subjectPlaceholder}</option>
                    {Object.entries(t.contact.subjects).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </Field>

                <Field id="contact-message" label={t.contact.messageLabel} error={errors.message}>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    value={pesan}
                    onChange={(event) => {
                      setPesan(event.target.value);
                      clearFieldError('message');
                    }}
                    className="field__control"
                  />
                </Field>

                <button type="submit" className="btn btn--solid mt-1 w-full">
                  <Icon name="send" size={18} />
                  <span>{t.contact.sendBtn}</span>
                </button>
                <p className="draft-note">{t.contact.formDemoNote}</p>
              </form>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default ContactForm;
