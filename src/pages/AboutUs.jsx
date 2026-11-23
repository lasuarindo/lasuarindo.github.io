import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { useResponsive } from '@/hooks/useResponsive';
import { useStrings } from '@/i18n/useStrings';
import idAbout from '@/i18n/locales/id/about.json';
import enAbout from '@/i18n/locales/en/about.json';
import { AnimatedReveal } from '@/components/AnimatedReveal';
import { Icon } from '@/components/Icon';

import heroBgImg from '@/assets/images/header_new_HD.png';
import tentangKamiImg from '@/assets/images/about_us.png';
import pendiriImg from '@/assets/images/pendiri.png';
import komisarisImg from '@/assets/images/komisaris.png';

const RED = '#b12600';
const GRAY = '#5f5e5e';

const CONTAINER = 'mx-auto w-full max-w-[1280px] px-6';
const DISPLAY_FONT = 'font-[var(--font-display)]';
const BODY_FONT = 'font-[var(--font-body)]';

const NETWORK = [
  { icon: 'account_balance', name: 'KADIN', delay: 100 },
  { icon: 'handshake', name: 'BPD HIPMI', delay: 200 },
  { icon: 'apartment', name: 'ARDIN Jawa Barat', delay: 300 },
];

const VALUES_ICONS = ['shield', 'lightbulb', 'groups', 'workspace_premium', 'favorite', 'eco'];

function Stars() {
  return (
    <div className="flex flex-row gap-[2px]">
      {[1, 2, 3, 4, 5].map((s) => (<Icon key={s} name="star" size={14} color={RED} />))}
    </div>
  );
}

function useAboutStrings() {
  return useStrings({ id: { about: idAbout }, en: { about: enAbout } });
}

// --- 1. Hero (Siapa Kami) ---
function AboutHero() {
  const t = useAboutStrings();
  const { isLg, isMd } = useResponsive();
  const heroFeatures = [
    { icon: 'settings_suggest', title: t.about.features.integrated.title, desc: t.about.features.integrated.desc },
    { icon: 'trending_up', title: t.about.features.sectors.title, desc: t.about.features.sectors.desc },
    { icon: 'rocket_launch', title: t.about.features.innovation.title, desc: t.about.features.innovation.desc },
    { icon: 'volunteer_activism', title: t.about.features.impact.title, desc: t.about.features.impact.desc },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-inverse-surface)] pb-[48px] pt-[110px]">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBgImg})` }} />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(47,49,49,0)_0%,rgba(47,49,49,0.5)_60%,#2f3131_100%)]" />
      <div className={`relative z-10 flex flex-col items-center gap-[36px] lg:flex-row lg:gap-[48px] ${CONTAINER}`}>
        <AnimatedReveal animation="left" delay={0} className="w-full lg:flex-1">
          <div className="max-w-[580px]">
            <h1 className={`mb-[24px] ${DISPLAY_FONT} text-[34px] font-bold leading-[40px] text-white max-[379px]:text-[28px] max-[379px]:leading-[34px] md:text-[42px] md:leading-[48px] lg:text-[56px] lg:leading-[62px]`}>
              {t.about.heroTitle1}<br /><span className="text-[var(--color-primary)]">{t.about.heroTitle2}</span>
            </h1>
            <div className="border-l-4 border-l-[rgba(255,180,163,0.5)] pl-[20px]">
              <p className={`mb-[16px] ${BODY_FONT} text-[17px] leading-[27px] text-[var(--color-surface-variant)] lg:text-[20px] lg:leading-[31px]`}><strong className="font-bold text-white">{t.about.lead1}</strong>{' '}{t.about.lead2}</p>
              <p className={`m-0 ${BODY_FONT} text-[15px] leading-[25px] text-[rgba(226,226,222,0.8)] lg:text-[17px] lg:leading-[28px]`}>{t.about.body}</p>
            </div>
          </div>
        </AnimatedReveal>
        <AnimatedReveal animation="right" delay={150} className="w-full lg:flex-1">
          <div className="relative overflow-hidden rounded-tl-[16px] rounded-tr-[110px] rounded-br-[16px] rounded-bl-[16px] bg-[#171717] shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
            <img src={tentangKamiImg} alt="Tentang Kami" className="block h-[260px] w-full object-cover max-[379px]:h-[320px] md:h-[340px] lg:h-[420px]" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-t-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.85)] px-[16px] py-[18px] backdrop-blur-[12px] max-[379px]:px-[10px] max-[379px]:py-[12px]">
              <div className="flex flex-row justify-between gap-[8px] max-[379px]:grid max-[379px]:grid-cols-2 max-[379px]:gap-[10px]">
                {heroFeatures.map((f) => (
                  <div key={f.title} className="flex flex-1 flex-col items-center text-center">
                    <Icon name={f.icon} size={isLg ? 26 : isMd ? 22 : 18} color={RED} className="mb-[6px]" />
                    <span className={`${DISPLAY_FONT} text-[10px] font-bold uppercase leading-[13px] tracking-[0.5px] whitespace-pre-line text-white md:text-[12px] md:leading-[16px] lg:text-[14px] lg:leading-[18px]`}>{f.title}</span>
                    <span className={`mt-[4px] ${BODY_FONT} text-[9px] leading-[12px] text-[#9ca3af] md:text-[11px] md:leading-[15px] lg:text-[12.5px] lg:leading-[17px]`}>{f.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- 2. Nilai Kami ---
function AboutValues() {
  const t = useAboutStrings();

  return (
    <section className="section section--sm section--surface-low">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mb-[40px] text-center">
            <h2 className={`mb-[12px] ${DISPLAY_FONT} text-[28px] font-bold leading-[36px] text-[var(--color-on-background)] md:text-[40px] md:leading-[50px]`}>{t.about.valuesHeading1} <span className="text-[var(--color-primary)]">{t.about.valuesHeading2}</span></h2>
            <p className={`m-0 ${DISPLAY_FONT} text-[14px] uppercase leading-[22px] tracking-[0.7px] text-[var(--color-secondary)] md:text-[15px] md:leading-[24px]`}>{t.about.valuesSub}</p>
          </div>
        </AnimatedReveal>
        <div className="mx-auto grid max-w-[960px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[16px] md:grid-cols-3">
          {t.about.values.map((desc, idx) => (
            <AnimatedReveal key={idx} animation="up" delay={100 + idx * 50} hover="lift">
              <div className="flex h-full min-h-[210px] flex-col items-center rounded-[16px] border border-[rgba(228,190,181,0.4)] bg-[var(--color-surface-container-lowest)] px-[20px] py-[26px] shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                <div className="mb-[16px] flex h-[52px] w-[52px] items-center justify-center rounded-[13px] border-[1.5px] border-[rgba(177,38,0,0.4)]"><Icon name={VALUES_ICONS[idx % VALUES_ICONS.length]} size={26} color={RED} /></div>
                <p className={`m-0 text-center ${BODY_FONT} text-[14px] leading-[22px] text-[var(--color-secondary)] lg:text-[15px] lg:leading-[24px]`}>{desc}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 3. Nilai Kami, Kekuatan Kami ---
function AboutStrengths() {
  const { language } = useLanguage();

  return (
    <section className="section section--sm section--surface">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
            <div className="my-[12px] flex w-full flex-row items-center gap-[16px]">
              <span className={`${DISPLAY_FONT} text-[40px] font-bold leading-[40px] text-[var(--color-primary)]`}>66</span>
              <div className="h-[2px] flex-1 bg-[linear-gradient(to_right,#b12600,rgba(177,38,0,0.1))]" />
            </div>
            <h2 className={`mb-[8px] ${DISPLAY_FONT} text-[32px] font-bold leading-[42px] text-[var(--color-on-background)]`}>{language === 'en' ? 'OUR VALUES, ' : 'NILAI KAMI, '}<span className="text-[var(--color-primary)]">{language === 'en' ? 'OUR STRENGTH' : 'KEKUATAN KAMI'}</span></h2>
            <p className={`mx-auto max-w-[700px] ${BODY_FONT} text-[15px] leading-[25px] text-[var(--color-secondary)]`}>{language === 'en' ? 'These values are not just guidelines, but our steadfast commitment to grow, create impact, and inspire the future.' : 'Nilai-nilai ini bukan hanya pedoman, tetapi komitmen kami untuk terus tumbuh, memberi manfaat, dan menjadi inspirasi bagi masa depan.'}</p>
            <div className="my-[12px] flex w-full flex-row items-center gap-[16px]">
              <div className="h-[2px] flex-1 bg-[linear-gradient(to_right,rgba(177,38,0,0.1),#b12600)]" />
              <span className={`${DISPLAY_FONT} text-[40px] font-bold leading-[40px] text-[var(--color-primary)]`}>99</span>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- 4. Pesan Pendiri ---
function AboutFounder() {
  const { language } = useLanguage();

  return (
    <section className="section section--sm section--surface-low">
      <div className={`flex flex-col items-center gap-[36px] lg:flex-row lg:gap-[48px] ${CONTAINER}`}>
        <AnimatedReveal animation="left" delay={100} className="w-full lg:flex-1">
          <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-[24px] bg-[var(--color-surface-container-lowest)] shadow-[0_20px_40px_rgba(0,0,0,0.06)] md:h-[400px] lg:h-[480px]">
            <img src={pendiriImg} alt="Ryan Othink - Founder & CEO" className="block h-full w-full object-contain" />
          </div>
        </AnimatedReveal>
        <AnimatedReveal animation="right" delay={200} className="w-full lg:flex-[1.25]">
          <div className="flex flex-col justify-center">
            <h2 className={`mb-[10px] ${DISPLAY_FONT} text-[36px] font-bold leading-[42px] text-[var(--color-on-background)]`}>{language === 'en' ? "FOUNDER'S" : 'PESAN'}<br /><span className="text-[var(--color-primary)]">{language === 'en' ? 'MESSAGE' : 'PENDIRI'}</span></h2>
            <div className="mb-[24px] h-[4px] w-[44px] rounded-[2px] bg-[var(--color-primary)]" />
            <div className="rounded-[18px] border-l-4 border-l-[var(--color-primary)] bg-[var(--color-surface-container-lowest)] p-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className={`mb-[12px] ${DISPLAY_FONT} text-[24px] font-bold tracking-[1px] text-[var(--color-primary)]`}>99</div>
              <p className={`mb-[18px] ${BODY_FONT} text-[15px] font-bold italic leading-[25px] text-[var(--color-on-background)]`}>{language === 'en' ? '"It is not about numbers, but about the meaning we build, the impact we generate, and the legacy we leave behind. Every step we take is an investment for generations to come."' : '"Ini bukan tentang angka, melainkan tentang makna yang kita bangun, memberi dampak, dan meninggalkan warisan. Setiap langkah yang kita ambil adalah investasi bagi generasi yang akan datang."'}</p>
              <p className={`mb-[14px] ${BODY_FONT} text-[13px] leading-[22px] text-[#6b7280]`}>{language === 'en' ? 'For me, founding Lasuarindo Group was not merely about building a business — it is a journey of creating a purposeful ecosystem where individuals can flourish and contribute their finest work.' : 'Bagi saya, mendirikan Lasuarindo Group bukan sekadar membangun bisnis — ini adalah perjalanan membangun ekosistem yang bermakna, tempat setiap individu bisa tumbuh dan memberikan kontribusi terbaik mereka.'}</p>
              <p className={`m-0 ${BODY_FONT} text-[13px] leading-[22px] text-[#6b7280]`}>{language === 'en' ? 'I believe great business starts from strong values — integrity, collaboration, and a relentless spirit to innovate for the greater good. With our visionary team, we are eager to elevate Lasuarindo Group to even higher heights.' : 'Saya percaya bahwa bisnis yang hebat dimulai dari nilai yang kuat — integritas, kolaborasi, dan semangat untuk terus berinovasi demi kebaikan yang lebih besar. Dengan tim yang luar biasa dan visi yang jelas, kami siap membawa Lasuarindo Group ke level yang lebih tinggi dan berdampak lebih luas.'}</p>
            </div>
            <div className="mt-[18px] pl-[4px]">
              <h3 className={`m-0 ${DISPLAY_FONT} text-[22px] font-bold text-[var(--color-on-background)]`}>Ryan Othink</h3>
              <div className="mt-[4px] flex flex-row items-center"><span className={`${DISPLAY_FONT} text-[13px] font-semibold text-[var(--color-primary)]`}>Founder & CEO</span><span className="mx-[6px] text-[#9ca3af]">•</span><Stars /></div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- 5. Pesan Komisaris ---
function AboutCommissioner() {
  const { language } = useLanguage();

  return (
    <section className="section section--sm section--surface">
      <div className={`flex flex-col items-center gap-[36px] lg:flex-row lg:gap-[48px] ${CONTAINER}`}>
        <AnimatedReveal animation="left" delay={100} className="w-full lg:flex-[1.25]">
          <div className="flex flex-col justify-center">
            <h2 className={`mb-[10px] ${DISPLAY_FONT} text-[36px] font-bold leading-[42px] text-[var(--color-on-background)]`}>{language === 'en' ? "COMMISSIONER'S" : 'PESAN'}<br /><span className="text-[var(--color-primary)]">{language === 'en' ? 'MESSAGE' : 'KOMISARIS'}</span></h2>
            <div className="mb-[24px] h-[4px] w-[44px] rounded-[2px] bg-[var(--color-primary)]" />
            <div className="rounded-[18px] border-l-4 border-l-[var(--color-primary)] bg-[var(--color-surface-container-lowest)] p-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className={`mb-[12px] ${DISPLAY_FONT} text-[24px] font-bold tracking-[1px] text-[var(--color-primary)]`}>99</div>
              <p className={`mb-[18px] ${BODY_FONT} text-[15px] font-bold italic leading-[25px] text-[var(--color-on-background)]`}>{language === 'en' ? '"Trust is the bedrock of everything. Without uncompromising integrity and sincere commitment, any enterprise is merely a fragile edifice shaken by the tests of time."' : '"Kepercayaan adalah fondasi dari segalanya. Tanpa integritas yang kuat dan komitmen yang tulus, bisnis apapun hanya akan menjadi gedung tanpa pondasi yang mudah goyah oleh tantangan zaman."'}</p>
              <p className={`mb-[14px] ${BODY_FONT} text-[13px] leading-[22px] text-[#6b7280]`}>{language === 'en' ? 'As Commissioner of Lasuarindo Group, I witness immense potential in each step we take forward. This is not just about growing a company — it is about ' : 'Sebagai Komisaris Lasuarindo Group, saya melihat potensi yang luar biasa dalam setiap langkah yang kami ambil bersama. Ini bukan hanya tentang membangun perusahaan — ini tentang '}<strong className="font-bold text-[var(--color-primary)]">{language === 'en' ? 'building a legacy' : 'membangun warisan'}</strong>{' '}{language === 'en' ? 'and' : 'dan'}{' '}<strong className="font-bold text-[var(--color-primary)]">{language === 'en' ? 'creating an ecosystem' : 'menciptakan ekosistem'}</strong>{' '}{language === 'en' ? 'that delivers true impact.' : 'yang memberikan dampak.'}</p>
              <p className={`m-0 ${BODY_FONT} text-[13px] leading-[22px] text-[#6b7280]`}>{language === 'en' ? 'I am immensely proud of our team growth and unwavering devotion to the shared values we built. With visionary leadership and a committed team, I am confident Lasuarindo Group will continue thriving.' : 'Saya bangga menyaksikan pertumbuhan tim dan komitmen kami terhadap nilai-nilai yang telah kami bangun bersama. Dengan kepemimpinan yang visioner dan tim yang berdedikasi, saya yakin Lasuarindo Group akan terus berkembang dan memberikan kontribusi nyata.'}</p>
            </div>
            <div className="mt-[18px] pl-[4px]">
              <h3 className={`m-0 ${DISPLAY_FONT} text-[22px] font-bold text-[var(--color-on-background)]`}>Herawati</h3>
              <div className="mt-[4px] flex flex-row items-center"><span className={`${DISPLAY_FONT} text-[13px] font-semibold text-[var(--color-primary)]`}>Commissioner</span><span className="mx-[6px] text-[#9ca3af]">•</span><Stars /></div>
            </div>
          </div>
        </AnimatedReveal>
        <AnimatedReveal animation="right" delay={200} className="w-full lg:flex-1">
          <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-[24px] bg-[var(--color-surface-container-lowest)] shadow-[0_20px_40px_rgba(0,0,0,0.06)] md:h-[400px] lg:h-[480px]">
            <img src={komisarisImg} alt="Herawati - Commissioner" className="block h-full w-full object-contain" />
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- 6. Jaringan Strategis ---
function AboutNetwork() {
  const { language } = useLanguage();

  return (
    <section className="border-y border-[rgba(0,0,0,0.06)] bg-[var(--color-surface-container-low)] py-[36px]">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mb-[20px] text-center"><span className={`${DISPLAY_FONT} text-[12px] font-semibold uppercase tracking-[1.8px] text-[var(--color-secondary)]`}>{language === 'en' ? 'STRATEGIC NETWORK & COLLABORATION' : 'JARINGAN STRATEGIS & KOLABORASI'}</span></div>
        </AnimatedReveal>
        <div className="flex flex-row flex-wrap items-center justify-center gap-[40px]">
          {NETWORK.map((item) => (
            <AnimatedReveal key={item.name} animation="up" delay={item.delay}>
              <div className="flex flex-row items-center gap-[12px]"><Icon name={item.icon} size={28} color={GRAY} /><span className={`${DISPLAY_FONT} text-[16px] font-bold text-[var(--color-on-background)]`}>{item.name}</span></div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutUs() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutStrengths />
      <AboutFounder />
      <AboutCommissioner />
      <AboutNetwork />
    </>
  );
}

export const TentangKami = AboutUs;
export default AboutUs;
