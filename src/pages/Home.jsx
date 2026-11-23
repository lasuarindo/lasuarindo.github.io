import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { sectors, localized } from '@/data/sectors';
import { useStrings } from '@/i18n/useStrings';
import idHome from '@/i18n/locales/id/home.json';
import enHome from '@/i18n/locales/en/home.json';
import { GradientText } from '@/components/GradientText';
import { AnimatedReveal } from '@/components/AnimatedReveal';
import { Icon } from '@/components/Icon';
import heroBgImg from '@/assets/images/header_new_HD.png';
import kemitraanImg from '@/assets/images/partnership_home_hd.png';
import { useResponsive } from '@/hooks/useResponsive';

const BENTO_COLUMNS = [[0, 4], [1, 5], [2], [3, 6]];

const CONTAINER = 'mx-auto w-full max-w-[1280px] px-6';
const BODY_FONT = 'font-[var(--font-body)]';

function useHomeStrings() {
  return useStrings({ id: { home: idHome }, en: { home: enHome } });
}

// --- Hero ---
function HomeHero() {
  const t = useHomeStrings();
  const { isDesktop } = useResponsive();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-inverse-surface)] pb-[35px] pt-[95px] md:pt-[100px] lg:flex lg:flex-row lg:pb-[40px] lg:pt-[105px]">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBgImg})` }} />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(47,49,49,0)_0%,rgba(47,49,49,0.5)_60%,#2f3131_100%)]" />
      <div className="relative z-10 block lg:flex lg:flex-row lg:items-center lg:gap-6 mx-auto w-full max-w-[1280px] px-6">
        <div className="flex flex-1 flex-col items-start gap-3 lg:flex-[1.25] lg:gap-[14px]">
          <AnimatedReveal animation="fade" delay={0} disabled>
            <div className="rounded-full border border-[rgba(255,180,163,0.3)] bg-[rgba(255,255,255,0.08)] px-4 py-1.5 lg:px-[18px] lg:py-[7px]">
              <span className="font-[var(--font-display)] text-[11px] font-semibold uppercase tracking-[1.5px] text-[#ffb4a3] lg:text-[12.5px]">{t.home.badge}</span>
            </div>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={60} disabled>
            <h1 className="m-0 font-[var(--font-display)] text-[34px] font-bold leading-[38px] tracking-normal text-white max-[379px]:text-[28px] max-[379px]:leading-[31px] md:text-[46px] md:leading-[52px] lg:text-[62px] lg:leading-[69px] lg:tracking-[-1px]">
              {t.home.heroTitle1}<br />
              <GradientText>{t.home.heroTitle2}</GradientText><br />
              {t.home.heroTitle3}<br />
              <GradientText>{t.home.heroTitle4}</GradientText>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={120} disabled>
            <p className="m-0 mt-1 font-[var(--font-body)] max-w-[420px] text-[16px] leading-[25px] text-[#e2e2e2] lg:mt-[6px] lg:max-w-[560px] lg:text-[18px] lg:leading-[29px] lg:text-[#f0f0f0]">{t.home.heroSubtitle}</p>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={180} disabled>
            <div className="mt-[14px] flex flex-wrap gap-3 lg:mt-[18px] lg:gap-[14px]">
              <Link to="/services" className="inline-block rounded-lg bg-[#b12600] px-[22px] py-[11px] font-[var(--font-display)] text-[14px] font-bold text-white no-underline transition-all hover:bg-[var(--color-primary-container)] lg:px-[26px] lg:py-[13px] lg:text-[15px]">{t.home.exploreBtn}</Link>
              <Link to="/about-us" className="inline-block rounded-lg border-[1.5px] border-white bg-transparent px-[22px] py-[11px] font-[var(--font-display)] text-[14px] font-bold text-white no-underline transition-all hover:bg-[rgba(255,255,255,0.15)] lg:px-[26px] lg:py-[13px] lg:text-[15px]">{t.home.visionBtn}</Link>
            </div>
          </AnimatedReveal>
          {!isDesktop && (
            <div className="mt-[18px] flex flex-wrap gap-3">
              <AnimatedReveal animation="scale" delay={220} className="min-w-[140px] flex-1">
                <div className="rounded-xl border border-[rgba(228,190,181,0.2)] bg-[rgba(255,255,255,0.08)] p-[14px]">
                  <Icon name="groups" size={20} color="#ffb4a3" className="mb-2" />
                  <h3 className="mb-1 font-[var(--font-display)] text-[14px] font-bold tracking-[0.5px] text-white">{t.home.integrityTitle}</h3>
                  <p className="m-0 font-[var(--font-body)] text-[12px] leading-[18px] text-[rgba(226,226,222,0.8)]">{t.home.integrityDesc}</p>
                </div>
              </AnimatedReveal>
              <AnimatedReveal animation="scale" delay={280} className="min-w-[140px] flex-1">
                <div className="rounded-xl border border-[rgba(228,190,181,0.2)] bg-[rgba(255,255,255,0.08)] p-[14px]">
                  <Icon name="lightbulb" size={20} color="#ffb4a3" className="mb-2" />
                  <h3 className="mb-1 font-[var(--font-display)] text-[14px] font-bold tracking-[0.5px] text-white">{t.home.innovationTitle}</h3>
                  <p className="m-0 font-[var(--font-body)] text-[12px] leading-[18px] text-[rgba(226,226,222,0.8)]">{t.home.innovationDesc}</p>
                </div>
              </AnimatedReveal>
            </div>
          )}
        </div>
        {isDesktop && (
          <div className="z-10 flex flex-1 flex-row items-center justify-end gap-6 pr-[10px]">
            <AnimatedReveal animation="scale" delay={100} className="max-w-[240px] flex-1">
              <div className="rounded-[14px] border border-[rgba(228,190,181,0.2)] bg-[rgba(255,255,255,0.08)] p-5">
                <Icon name="groups" size={26} color="#ffb4a3" className="mb-[10px]" />
                <h3 className="mb-[6px] font-[var(--font-display)] text-[19px] font-bold tracking-[0.5px] text-white">{t.home.integrityTitle}</h3>
                <p className="m-0 font-[var(--font-body)] text-[15px] leading-5 text-[rgba(226,226,222,0.8)]">{t.home.integrityDesc}</p>
              </div>
            </AnimatedReveal>
            <AnimatedReveal animation="scale" delay={180} className="mt-7 max-w-[240px] flex-1">
              <div className="rounded-[14px] border border-[rgba(228,190,181,0.2)] bg-[rgba(255,255,255,0.08)] p-5">
                <Icon name="lightbulb" size={26} color="#ffb4a3" className="mb-[10px]" />
                <h3 className="mb-[6px] font-[var(--font-display)] text-[19px] font-bold tracking-[0.5px] text-white">{t.home.innovationTitle}</h3>
                <p className="m-0 font-[var(--font-body)] text-[15px] leading-5 text-[rgba(226,226,222,0.8)]">{t.home.innovationDesc}</p>
              </div>
            </AnimatedReveal>
          </div>
        )}
      </div>
    </section>
  );
}

// --- Ecosystem (bento grid) ---
function HomeEcosystem() {
  const { language } = useLanguage();
  const t = useHomeStrings();
  const { isDesktop } = useResponsive();
  const ecosystemItems = sectors.map((sector) => ({
    title: localized(sector.title, language),
    icon: sector.icon,
    desc: localized(sector.desc, language),
    delay: sector.delay,
    highlight: sector.highlight,
    tag: sector.highlight ? t.home.focusTag : undefined,
  }));

  return (
    <section className="section section--surface">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mb-[50px] max-w-[672px]">
            <h2 className="mb-[14px] font-[var(--font-display)] text-[36px] font-bold leading-[44px] text-[var(--color-on-background)] md:text-[52px] md:leading-[60px]">{t.home.ecosystemHeading1}{' '}<span className="text-[var(--color-primary)]">{t.home.ecosystemHeading2}</span></h2>
            <div className="mb-5 h-1 w-16 rounded-[2px] bg-[linear-gradient(to_right,#b12600,#ffb68b)]" />
            <p className="m-0 font-[var(--font-body)] text-[17px] leading-[28px] text-[var(--color-secondary)]">{t.home.ecosystemLead}</p>
          </div>
        </AnimatedReveal>
        {isDesktop ? (
          <div className="flex flex-row items-stretch gap-6">
            {BENTO_COLUMNS.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-1 flex-col gap-6">
                {col.map((itemIdx) => {
                  const item = ecosystemItems[itemIdx];
                  const isTall = item.highlight;
                  return (
                    <AnimatedReveal key={item.title} animation="up" delay={item.delay} hover="lift" className={isTall ? 'flex flex-1 flex-col' : 'flex flex-col'}>
                      <div className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border-[1.5px] border-[rgba(228,190,181,0.4)] bg-[var(--color-surface-container-lowest)] p-8 ${isTall ? 'min-h-[520px] flex-1' : ''}`}>
                        {isTall && <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(240,240,240,0.6)_0%,rgba(230,230,230,0.9)_100%)]" />}
                        <div className="relative z-[2]">
                          <div className="mb-5 flex h-11 w-11 items-center justify-start"><Icon name={item.icon} size={28} color="#b12600" /></div>
                          <h3 className="mb-3 font-[var(--font-display)] text-[24px] font-semibold leading-[32px] tracking-[0.5px] text-[var(--color-on-background)]">{item.title}</h3>
                          <div className="mb-4 h-1 w-8 bg-[var(--color-primary)]" />
                          <p className={`m-0 ${BODY_FONT} text-[15px] leading-[25px] text-[var(--color-secondary)] ${item.tag ? 'mb-8' : ''}`}>{item.desc}</p>
                        </div>
                        {item.tag && <div className="relative z-[2] self-start rounded-full bg-[var(--color-primary)] px-[14px] py-[6px]"><span className="font-[var(--font-display)] text-[11px] font-semibold uppercase leading-[14px] tracking-[1.2px] text-white">{item.tag}</span></div>}
                      </div>
                    </AnimatedReveal>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ecosystemItems.map((item) => (
              <AnimatedReveal key={item.title} animation="up" delay={item.delay} hover="lift">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border-[1.5px] border-[rgba(228,190,181,0.4)] bg-[var(--color-surface-container-lowest)] p-8">
                  <div>
                    <div className="mb-5 flex h-11 w-11 items-center justify-start"><Icon name={item.icon} size={28} color="#b12600" /></div>
                    <h3 className="mb-3 font-[var(--font-display)] text-[24px] font-semibold leading-[32px] tracking-[0.5px] text-[var(--color-on-background)]">{item.title}</h3>
                    <div className="mb-4 h-1 w-8 bg-[var(--color-primary)]" />
                    <p className={`m-0 ${BODY_FONT} text-[15px] leading-[25px] text-[var(--color-secondary)] ${item.tag ? 'mb-6' : ''}`}>{item.desc}</p>
                  </div>
                  {item.tag && <div className="self-start rounded-full bg-[var(--color-primary)] px-[14px] py-[6px]"><span className="font-[var(--font-display)] text-[11px] font-semibold uppercase leading-[14px] tracking-[1.2px] text-white">{item.tag}</span></div>}
                </div>
              </AnimatedReveal>
            ))}
          </div>
        )}
        <AnimatedReveal animation="up" delay={200}>
          <div className="mt-16 text-center">
            <p className="mb-2 font-[var(--font-display)] text-[24px] font-bold leading-[32px] text-[var(--color-on-background)]"><span className="text-[32px] text-[var(--color-primary)]">"</span>{'  '}{t.home.quoteText}{'  '}<span className="text-[32px] text-[var(--color-primary)]">"</span></p>
            <h3 className="m-0 font-[var(--font-display)] text-[30px] font-semibold leading-[40px] text-[var(--color-on-background)]">{t.home.taglineMain1}{' '}<span className="text-[var(--color-primary)]">{t.home.taglineMain2}</span></h3>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- Journey / Partnership ---
function HomeJourney() {
  const t = useHomeStrings();
  const { isDesktop } = useResponsive();
  const partnershipLinks = [
    { title: t.home.strategicPartnership, icon: 'handshake', delay: 100 },
    { title: t.home.investorRelations, icon: 'trending_up', delay: 200 },
    { title: t.home.collaboration, icon: 'group_add', delay: 300 },
  ];

  return (
    <section className="section section--dark section--relative">
      {isDesktop && (
        <div className="absolute bottom-0 right-0 top-0 z-[1] w-1/2">
          <img src={kemitraanImg} alt="Kemitraan Lasuarindo" className="block h-full w-full rounded-l-[48px] object-cover" />
        </div>
      )}
      <div className="relative z-[2] mx-auto w-full max-w-[1280px] px-6">
        <div className="max-w-[576px]">
          <AnimatedReveal animation="up" delay={0}>
            <h2 className="mb-[14px] font-[var(--font-display)] text-[36px] font-bold leading-[44px] text-white md:text-[52px] md:leading-[60px]">{t.home.journeyHeading1}<br /><GradientText>{t.home.journeyHeading2}</GradientText></h2>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={100}>
            <div className="mb-8 h-1 w-16 bg-[#ffb4a3]" />
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={200}>
            <p className="mb-6 font-[var(--font-body)] text-[18px] leading-[29px] text-[var(--color-surface-variant)]">{t.home.journeyLead}</p>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={300}>
            <p className="mb-10 font-[var(--font-body)] text-[16px] leading-[26px] text-[rgba(226,226,222,0.8)]">{t.home.journeyBody}</p>
          </AnimatedReveal>
          <div className="mb-12 flex flex-col gap-4">
            {partnershipLinks.map((link) => (
              <AnimatedReveal key={link.title} animation="left" delay={link.delay}>
                <Link to="/contact" className="flex w-full flex-row items-center gap-4 border-b border-[rgba(228,190,181,0.3)] bg-transparent py-4 text-left no-underline transition-transform hover:translate-x-[6px]">
                  <Icon name={link.icon} size={24} color="#ffb4a3" />
                  <span className="flex-1 font-[var(--font-display)] text-[18px] font-semibold uppercase leading-[26px] tracking-[0.5px] text-white">{link.title}</span>
                  <Icon name="arrow_forward" size={24} color="#e2e2e2" />
                </Link>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
      {!isDesktop && (
        <div className="mx-auto mt-8 mx-auto w-full max-w-[1280px] px-6">
          <img src={kemitraanImg} alt="Kemitraan Lasuarindo" className="block aspect-[16/9] max-h-[420px] w-full rounded-[20px] object-cover" />
        </div>
      )}
    </section>
  );
}

export function Home() {
  return (
    <>
      <HomeHero />
      <HomeEcosystem />
      <HomeJourney />
    </>
  );
}

export const Beranda = Home;
export default Home;
