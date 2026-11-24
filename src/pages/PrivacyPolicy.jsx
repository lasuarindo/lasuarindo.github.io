import React, { useState } from 'react';
import { Link } from 'react-router';
import { GradientText } from '@/components/GradientText';
import { AnimatedReveal } from '@/components/AnimatedReveal';
import { Icon } from '@/components/Icon';
import { useStrings } from '@/i18n/useStrings';
import idPrivacy from '@/i18n/locales/id/privacy.json';
import enPrivacy from '@/i18n/locales/en/privacy.json';

const DISPLAY_FONT = 'font-[var(--font-display)]';
const BODY_FONT = 'font-[var(--font-body)]';

// --- Hero ---
function PrivacyHero() {
  const t = useStrings({ id: { privacy: idPrivacy }, en: { privacy: enPrivacy } });

  return (
    <section className="relative overflow-hidden bg-[var(--color-inverse-surface)] pb-20 pt-[110px]">
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(177,38,0,0.1)] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-[133px] translate-y-[133px] rounded-full bg-[rgba(177,38,0,0.08)] blur-[100px]" />
      <div className="mx-auto w-full max-w-[1280px] px-6 relative z-10">
        <div className="max-w-[768px]">
          <AnimatedReveal animation="fade" delay={0}>
            <div className="mb-8 flex flex-row items-center gap-2">
              <Link to="/" className="font-[var(--font-body)] text-[16px] text-[rgba(226,226,222,0.7)] no-underline">{t.privacy.breadcrumbHome}</Link>
              <Icon name="chevron_right" size={18} color="rgba(226, 226, 222, 0.4)" />
              <span className="font-[var(--font-body)] text-[16px] text-[var(--color-primary-fixed-dim)]">{t.privacy.breadcrumbPrivacy}</span>
            </div>
          </AnimatedReveal>
          <AnimatedReveal animation="fade" delay={100}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(228,190,181,0.3)] bg-[rgba(243,243,244,0.1)] px-4 py-1.5">
              <Icon name="verified_user" size={16} color="#ffb4a3" />
              <span className="font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[1.2px] text-[var(--color-primary-fixed-dim)]">{t.privacy.badge}</span>
            </div>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={200}>
            <h1 className="mb-6 font-[var(--font-display)] text-[36px] font-bold leading-[1.15] text-[var(--color-on-primary)] md:text-[48px] lg:text-[72px]">{t.privacy.heroTitle1}<br /><GradientText>{t.privacy.heroTitle2}</GradientText></h1>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={300}>
            <p className="m-0 mb-8 font-[var(--font-body)] text-[18px] leading-[29px] text-[var(--color-surface-variant)]">{t.privacy.heroSubtitle}</p>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={400}>
            <div className="flex flex-row items-center gap-3">
              <Icon name="update" size={20} color="#ffb4a3" />
              <span className="font-[var(--font-body)] text-[16px] text-[rgba(226,226,222,0.7)]">{t.privacy.lastUpdated} {t.privacy.lastUpdatedDate}</span>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

// --- TOC + Articles ---
function PrivacyContent() {
  const t = useStrings({ id: { privacy: idPrivacy }, en: { privacy: enPrivacy } });
  const [activeSection, setActiveSection] = useState('pendahuluan');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const sectionStyle = 'mb-12 scroll-mt-[100px]';
  const dividerStyle = 'mb-12 h-px bg-[rgba(228,190,181,0.3)]';
  const headingStyle = `m-0 ${DISPLAY_FONT} text-[28px] font-semibold leading-[36px] text-[var(--color-on-background)]`;
  const bodyStyle = `mb-6 ${BODY_FONT} text-[16px] leading-[26px] text-[var(--color-secondary)]`;
  const iconBoxStyle = 'flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(177,38,0,0.1)]';

  const sections = t.privacy.sections;
  const tocItems = t.privacy.toc;

  return (
    <section className="section section--surface">
      <div className="flex flex-col items-start gap-12 lg:flex-row mx-auto w-full max-w-[1280px] px-6">
        {/* Sidebar */}
        <div className="static mb-12 w-full self-start lg:sticky lg:top-[100px] lg:mb-0 lg:w-[300px]">
          <div className="rounded-2xl border border-[rgba(228,190,181,0.3)] bg-[var(--color-surface-container-lowest)] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <h3 className="mb-4 font-[var(--font-display)] text-[22px] font-semibold text-[var(--color-on-background)]">{t.privacy.tocTitle}</h3>
            <div className="mb-6 h-1 w-16 rounded-[2px] bg-[linear-gradient(to_right,#b12600,#ffb68b)]" />
            <div className="flex flex-col gap-1.5">
              {tocItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button key={item.id} type="button" onClick={() => scrollToSection(item.id)} className={`flex w-full cursor-pointer flex-row items-center gap-3 rounded-lg border-none px-3 py-2.5 text-left ${isActive ? 'bg-[rgba(177,38,0,0.08)]' : 'bg-transparent'}`}>
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isActive ? 'bg-[var(--color-primary)]' : 'bg-[rgba(177,38,0,0.1)]'}`}><span className={`${DISPLAY_FONT} text-[12px] font-semibold ${isActive ? 'text-white' : 'text-[var(--color-primary)]'}`}>{item.number}</span></div>
                    <span className={`flex-1 text-[14px] ${isActive ? `${DISPLAY_FONT} font-semibold text-[var(--color-primary)]` : `${BODY_FONT} font-normal text-[var(--color-secondary)]`}`}>{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="w-full flex-1">
          {/* 1. Pendahuluan */}
          <div id="pendahuluan" className={sectionStyle}>
            <AnimatedReveal animation="up" delay={0}>
              <div>
                <div className="mb-6 flex flex-row items-center gap-4"><div className={iconBoxStyle}><Icon name="description" size={28} color="#b12600" /></div><h2 className={headingStyle}>{sections.pendahuluan.title}</h2></div>
                <div className="mb-6 rounded-lg border-l-4 border-[var(--color-primary)] bg-[rgba(177,38,0,0.04)] p-6">
                  <p className="m-0 font-[var(--font-body)] text-[18px] leading-[29px] text-[var(--color-secondary)]">{sections.pendahuluan.lead}</p>
                </div>
                <p className="m-0 font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{sections.pendahuluan.body}</p>
              </div>
            </AnimatedReveal>
          </div>
          <div className={dividerStyle} />

          {/* 2. Informasi yang Kami Kumpulkan */}
          <div id="informasi-dikumpulkan" className={sectionStyle}>
            <AnimatedReveal animation="up" delay={100}>
              <div>
                <div className="mb-6 flex flex-row items-center gap-4"><div className={iconBoxStyle}><Icon name="storage" size={28} color="#b12600" /></div><h2 className={headingStyle}>{sections.informasi.title}</h2></div>
                <p className={bodyStyle}>{sections.informasi.intro}</p>
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <AnimatedReveal animation="up" delay={150} hover="lift">
                    <div className="box-border h-full rounded-xl border border-[rgba(228,190,181,0.5)] bg-[var(--color-surface-container-lowest)] p-8">
                      <div className="mb-4 flex flex-row items-center gap-3"><Icon name="person" size={22} color="#b12600" /><h4 className="m-0 font-[var(--font-display)] text-[18px] font-semibold text-[var(--color-on-background)]">{sections.informasi.personalTitle}</h4></div>
                      <div className="flex flex-col gap-3">{sections.informasi.personalItems.map((text) => (<div key={text} className="flex flex-row items-center gap-2"><Icon name="check_circle" size={18} color="#b12600" /><span className="font-[var(--font-body)] text-[15px] text-[var(--color-secondary)]">{text}</span></div>))}</div>
                    </div>
                  </AnimatedReveal>
                  <AnimatedReveal animation="up" delay={250} hover="lift">
                    <div className="box-border h-full rounded-xl border border-[rgba(228,190,181,0.5)] bg-[var(--color-surface-container-lowest)] p-8">
                      <div className="mb-4 flex flex-row items-center gap-3"><Icon name="devices" size={22} color="#b12600" /><h4 className="m-0 font-[var(--font-display)] text-[18px] font-semibold text-[var(--color-on-background)]">{sections.informasi.technicalTitle}</h4></div>
                      <div className="flex flex-col gap-3">{sections.informasi.technicalItems.map((text) => (<div key={text} className="flex flex-row items-center gap-2"><Icon name="check_circle" size={18} color="#b12600" /><span className="font-[var(--font-body)] text-[15px] text-[var(--color-secondary)]">{text}</span></div>))}</div>
                    </div>
                  </AnimatedReveal>
                </div>
              </div>
            </AnimatedReveal>
          </div>
          <div className={dividerStyle} />

          {/* 3. Penggunaan Informasi */}
          <div id="penggunaan-informasi" className={sectionStyle}>
            <AnimatedReveal animation="up" delay={100}>
              <div>
                <div className="mb-6 flex flex-row items-center gap-4"><div className={iconBoxStyle}><Icon name="settings_suggest" size={28} color="#b12600" /></div><h2 className={headingStyle}>{sections.penggunaan.title}</h2></div>
                <p className={bodyStyle}>{sections.penggunaan.intro}</p>
                <div className="flex flex-col gap-4">{sections.penggunaan.items.map((item, i) => (
                  <AnimatedReveal key={item.title} animation="up" delay={100 * (i + 1)}>
                    <div className="flex flex-row items-start gap-4 rounded-xl border border-[rgba(228,190,181,0.3)] bg-[var(--color-surface-container-lowest)] p-5">
                      <Icon name={item.icon} size={24} color="#b12600" />
                      <div className="flex-1"><h4 className="m-0 mb-1 font-[var(--font-display)] text-[16px] font-semibold text-[var(--color-on-background)]">{item.title}</h4><p className="m-0 font-[var(--font-body)] text-[15px] leading-[23px] text-[var(--color-secondary)]">{item.desc}</p></div>
                    </div>
                  </AnimatedReveal>
                ))}</div>
              </div>
            </AnimatedReveal>
          </div>
          <div className={dividerStyle} />

          {/* 4. Perlindungan Data */}
          <div id="perlindungan-data" className={sectionStyle}>
            <AnimatedReveal animation="up" delay={100}>
              <div>
                <div className="mb-6 flex flex-row items-center gap-4"><div className={iconBoxStyle}><Icon name="shield" size={28} color="#b12600" /></div><h2 className={headingStyle}>{sections.perlindungan.title}</h2></div>
                <div className="mb-6 rounded-lg border-l-4 border-[var(--color-primary)] bg-[rgba(177,38,0,0.04)] p-6">
                  <p className="m-0 font-[var(--font-body)] text-[18px] leading-[29px] text-[var(--color-secondary)]">{sections.perlindungan.intro}</p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">{sections.perlindungan.items.map((card, idx) => (
                  <AnimatedReveal key={card.title} animation="up" delay={100 * (idx + 1)} hover="lift">
                    <div className="box-border flex h-full flex-col items-center rounded-xl border border-[rgba(228,190,181,0.5)] bg-[var(--color-surface-container-lowest)] p-8 text-center">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(177,38,0,0.1)]"><Icon name={card.icon} size={28} color="#b12600" /></div>
                      <h4 className="m-0 mb-2 font-[var(--font-display)] text-[16px] font-semibold text-[var(--color-on-background)]">{card.title}</h4>
                      <p className="m-0 font-[var(--font-body)] text-[14px] leading-[22px] text-[var(--color-secondary)]">{card.desc}</p>
                    </div>
                  </AnimatedReveal>
                ))}</div>
              </div>
            </AnimatedReveal>
          </div>
          <div className={dividerStyle} />

          {/* 5. Berbagi Data */}
          <div id="berbagi-data" className={sectionStyle}>
            <AnimatedReveal animation="up" delay={100}>
              <div>
                <div className="mb-6 flex flex-row items-center gap-4"><div className={iconBoxStyle}><Icon name="share" size={28} color="#b12600" /></div><h2 className={headingStyle}>{sections.berbagi.title}</h2></div>
                <p className={bodyStyle}>{sections.berbagi.introPrefix} <strong className="font-bold text-[var(--color-on-background)]">{sections.berbagi.introHighlight}</strong> {sections.berbagi.introSuffix}</p>
                <div className="flex flex-col gap-4">{sections.berbagi.items.map((item, i) => (
                  <AnimatedReveal key={item.title} animation="up" delay={100 * (i + 1)}>
                    <div className="flex flex-row items-start gap-4 rounded-xl border border-[rgba(228,190,181,0.3)] bg-[var(--color-surface-container-lowest)] p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(177,38,0,0.1)]"><Icon name={item.icon} size={20} color="#b12600" /></div>
                      <div className="flex-1"><h4 className="m-0 mb-1 font-[var(--font-display)] text-[16px] font-semibold text-[var(--color-on-background)]">{item.title}</h4><p className="m-0 font-[var(--font-body)] text-[15px] leading-[23px] text-[var(--color-secondary)]">{item.desc}</p></div>
                    </div>
                  </AnimatedReveal>
                ))}</div>
              </div>
            </AnimatedReveal>
          </div>
          <div className={dividerStyle} />

          {/* 6. Cookies */}
          <div id="cookies" className={sectionStyle}>
            <AnimatedReveal animation="up" delay={100}>
              <div>
                <div className="mb-6 flex flex-row items-center gap-4"><div className={iconBoxStyle}><Icon name="cookie" size={28} color="#b12600" /></div><h2 className={headingStyle}>{sections.cookies.title}</h2></div>
                <p className={bodyStyle}>{sections.cookies.intro}</p>
                <div className="w-full overflow-hidden rounded-xl border border-[rgba(228,190,181,0.5)]">
                  <div className="flex flex-row border-b border-[rgba(228,190,181,0.3)] bg-[var(--color-surface-container-high)] px-6 py-4 font-[var(--font-display)] text-[16px] font-semibold text-[var(--color-on-background)]">{sections.cookies.tableHeaders.map((header, idx) => (
                    <span key={header} className={idx === 0 ? 'flex-[1.2]' : idx === 1 ? 'flex-[2]' : 'flex-1'}>{header}</span>
                  ))}</div>
                  {sections.cookies.rows.map((row, rIdx) => (
                    <div key={row.type} className={`flex flex-row px-6 py-4 ${BODY_FONT} text-[15px] ${rIdx < sections.cookies.rows.length - 1 ? 'border-b border-[rgba(228,190,181,0.2)]' : 'border-b-0'} ${rIdx % 2 === 1 ? 'bg-[var(--color-surface-container-lowest)]' : 'bg-white'}`}>
                      <span className="flex-[1.2] font-semibold text-[var(--color-on-background)]">{row.type}</span>
                      <span className="flex-[2] text-[var(--color-secondary)]">{row.purpose}</span>
                      <span className="flex-1 text-[var(--color-secondary)]">{row.duration}</span>
                    </div>
                  ))}
                </div>
                <p className="m-0 mt-6 font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{sections.cookies.outro}</p>
              </div>
            </AnimatedReveal>
          </div>
          <div className={dividerStyle} />

          {/* 7. Hak Pengguna */}
          <div id="hak-pengguna" className={sectionStyle}>
            <AnimatedReveal animation="up" delay={100}>
              <div>
                <div className="mb-6 flex flex-row items-center gap-4"><div className={iconBoxStyle}><Icon name="admin_panel_settings" size={28} color="#b12600" /></div><h2 className={headingStyle}>{sections.hak.title}</h2></div>
                <p className={bodyStyle}>{sections.hak.intro}</p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{sections.hak.items.map((right, rIdx) => (
                  <AnimatedReveal key={right.title} animation="up" delay={80 * (rIdx + 1)} hover="lift">
                    <div className="box-border flex h-full flex-row items-start gap-3 rounded-xl border border-[rgba(228,190,181,0.3)] bg-[var(--color-surface-container-lowest)] p-4">
                      <Icon name={right.icon} size={22} color="#b12600" />
                      <div className="flex-1"><h4 className="m-0 mb-1 font-[var(--font-display)] text-[15px] font-semibold text-[var(--color-on-background)]">{right.title}</h4><p className="m-0 font-[var(--font-body)] text-[14px] leading-[20px] text-[var(--color-secondary)]">{right.desc}</p></div>
                    </div>
                  </AnimatedReveal>
                ))}</div>
                <p className="m-0 mt-6 font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{sections.hak.outroPrefix}{' '}<Link to="/contact" className="cursor-pointer font-bold text-[var(--color-primary)] no-underline">{sections.hak.outroLink}</Link>{sections.hak.outroSuffix1}{' '}<strong className="font-bold text-[var(--color-on-background)]">{sections.hak.outroHighlight}</strong>{sections.hak.outroSuffix2}</p>
              </div>
            </AnimatedReveal>
          </div>
          <div className={dividerStyle} />

          {/* 8. Perubahan Kebijakan */}
          <div id="perubahan-kebijakan" className={sectionStyle}>
            <AnimatedReveal animation="up" delay={100}>
              <div>
                <div className="mb-6 flex flex-row items-center gap-4"><div className={iconBoxStyle}><Icon name="history" size={28} color="#b12600" /></div><h2 className={headingStyle}>{sections.perubahan.title}</h2></div>
                <div className="mb-6 rounded-lg border-l-4 border-[var(--color-primary)] bg-[rgba(177,38,0,0.04)] p-6">
                  <p className="mb-4 font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{sections.perubahan.body1}</p>
                  <p className="m-0 font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{sections.perubahan.body2}</p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrivacyPolicy() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}

export const KebijakanPrivasi = PrivacyPolicy;
export default PrivacyPolicy;