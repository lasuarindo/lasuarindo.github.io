import React from 'react';
import { Link } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';

export function NotFound() {
  const t = useStrings({ id: idCommon, en: enCommon });

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 pb-20 pt-[120px] text-center">
      <span className="font-[var(--font-display)] text-[clamp(64px,12vw,120px)] font-extrabold leading-none text-[var(--color-primary)]">404</span>
      <h1 className="font-[var(--font-display)] text-[clamp(22px,4vw,32px)] font-bold text-[var(--color-on-background)]">{t.notFound.title}</h1>
      <p className="max-w-[480px] font-[var(--font-body)] text-[16px] leading-relaxed text-[var(--color-secondary)]">{t.notFound.message}</p>
      <Link to="/" className="mt-3 inline-block rounded-lg bg-[var(--color-primary)] px-7 py-3 font-[var(--font-display)] text-[14px] font-bold text-[var(--color-on-primary)] no-underline">{t.notFound.backHome}</Link>
    </section>
  );
}

export default NotFound;
