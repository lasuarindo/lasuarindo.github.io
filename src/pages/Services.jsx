import React from 'react';
import { Link } from 'react-router';
import { useResponsive } from '@/hooks/useResponsive';
import { GradientText } from '@/components/GradientText';
import { AnimatedReveal } from '@/components/AnimatedReveal';
import { Icon } from '@/components/Icon';
import { useStrings } from '@/i18n/useStrings';
import idServices from '@/i18n/locales/id/services.json';
import enServices from '@/i18n/locales/en/services.json';

import heroBgImg from '@/assets/images/header_new_HD.png';
import propertiHeroImg from '@/assets/images/service_property_hero.png';
import layananEkosistemImg from '@/assets/images/services_ecosystem.png';
import teknologiImg from '@/assets/images/service_technology.png';
import teknologiGridImg from '@/assets/images/service_technology_grid.png';
import vamosImg from '@/assets/images/service_vamos_synergy.png';
import proyekPropertiImg from '@/assets/images/future_project_property.png';
import proyekTeknologiImg from '@/assets/images/future_project_technology.png';
import proyekEkosistemImg from '@/assets/images/future_project_ecosystem.png';
import proyekKarbonImg from '@/assets/images/future_project_carbon.png';

const CONTAINER = 'mx-auto w-full max-w-[1280px] px-6';

function GradientDivider({ center = false }) {
  return <div className={`h-1 w-16 rounded-[2px] bg-[linear-gradient(to_right,#b12600,#ffb68b)] ${center ? 'mx-auto mb-5' : 'mb-5'}`} />;
}

function useServicesStrings() {
  return useStrings({ id: { services: idServices }, en: { services: enServices } });
}

// --- 1. Hero ---
function ServicesHero() {
  const t = useServicesStrings();

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#111313] pb-[128px] pt-[110px] lg:pb-[160px] lg:pt-[150px]">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${heroBgImg})` }} />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,rgba(17,19,19,0.9)_0%,rgba(17,19,19,0.6)_50%,rgba(17,19,19,0)_100%)]" />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_top,rgba(17,19,19,0.8)_0%,rgba(17,19,19,0)_50%,rgba(17,19,19,0.3)_100%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
        <div className="max-w-[672px]">
          <AnimatedReveal animation="fade" delay={0}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-4 py-1.5">
              <Icon name="business" size={14} color="#ffb4a3" />
              <span className="font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#ffb4a3]">{t.services.badge}</span>
            </div>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={100}>
            <h1 className="m-0 mb-6 font-[var(--font-display)] text-[28px] font-bold leading-[35px] text-white sm:text-[34px] sm:leading-[43px] md:text-[64px] md:leading-[80px]">
              {t.services.heroTitle1}<br />{t.services.heroTitle2} <GradientText>{t.services.heroTitle3}</GradientText><br /><GradientText>{t.services.heroTitle4}</GradientText>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={200}>
            <p className="mb-10 max-w-[512px] font-[var(--font-body)] text-[18px] leading-[29px] text-[rgba(255,255,255,0.7)]">
              {t.services.heroSubtitle}
            </p>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={400}>
            <Link to="/contact" className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--color-primary)] px-8 py-4 font-[var(--font-display)] text-[16px] font-bold text-[var(--color-on-primary)] no-underline shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all hover:bg-[var(--color-primary-container)]">
              <span>{t.services.partnerBtn}</span><Icon name="arrow_forward" size={20} color="#ffffff" />
            </Link>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

// --- 2. Properti ---
function ServicesProperty() {
  const { isMobile } = useResponsive();
  const t = useServicesStrings();

  return (
    <section className={`section section--sm section--surface${isMobile ? ' section--sm-mobile' : ''}`}>
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-[rgba(228,190,181,0.2)] bg-[var(--color-surface-container-lowest)] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] lg:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-col justify-center p-8 max-[767px]:px-4 max-[767px]:py-5 lg:px-12 lg:py-10">
              <span className="mb-[10px] block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.services.propertyLabel}</span>
              <h3 className="mb-4 font-[var(--font-display)] text-[26px] font-bold leading-[34px] text-[var(--color-on-background)] max-[767px]:text-[22px] max-[767px]:leading-[30px]">{t.services.propertyHeading}</h3>
              <p className="mb-6 font-[var(--font-body)] text-[15px] leading-6 text-[var(--color-secondary)]">{t.services.propertyDesc}</p>
              <div className="mb-7 grid grid-cols-3 gap-4 max-[767px]:grid-cols-1">
                {t.services.propertyFeatures.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-[rgba(177,38,0,0.1)]"><Icon name={item.icon} size={22} color="#b12600" /></div>
                    <h4 className="m-0 mb-1 font-[var(--font-display)] text-[14px] font-bold leading-5 text-[var(--color-on-background)]">{item.title}</h4>
                    <p className="m-0 font-[var(--font-body)] text-[12px] leading-[18px] text-[var(--color-secondary)]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(177,38,0,0.2)] bg-[rgba(177,38,0,0.08)] px-4 py-2"><Icon name="trending_up" size={16} color="#b12600" /><span className="font-[var(--font-display)] text-[14px] font-bold text-[var(--color-primary)]">{t.services.recentProject}</span></div>
            </div>
            <div className="flex min-h-[400px] flex-col gap-1 max-[767px]:min-h-[260px]">
              <div className="min-h-[200px] flex-1 overflow-hidden"><img src={propertiHeroImg} alt={t.services.propertyLabel} className="block h-full w-full object-cover" /></div>
              <div className="min-h-[200px] flex-1 overflow-hidden"><img src={layananEkosistemImg} alt={t.services.propertyLabel} className="block h-full w-full object-cover" /></div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- 3. Media Kreatif ---
function ServicesMedia() {
  const t = useServicesStrings();

  return (
    <section className="section section--surface-low">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto mb-16 text-center">
            <h2 className="mb-2 font-[var(--font-display)] text-[48px] font-bold leading-[58px] text-[var(--color-on-background)] max-[767px]:text-[32px] max-[767px]:leading-[40px]">{t.services.mediaHeading.replace(' KREATIF', '')} <span className="text-[var(--color-primary)]">KREATIF</span></h2>
            <p className="mb-4 font-[var(--font-display)] text-[14px] font-bold uppercase tracking-[1.4px] text-[var(--color-secondary)]">{t.services.mediaSubheading}</p>
            <GradientDivider center />
            <p className="mx-auto max-w-[672px] font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{t.services.mediaDesc}</p>
          </div>
        </AnimatedReveal>
        <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 max-[767px]:grid-cols-1 lg:grid-cols-3">
          {t.services.mediaCards.map((card) => (
            <AnimatedReveal key={card.title} animation="up" delay={card.delay || 100} hover="lift">
              <div className="box-border flex h-full flex-col justify-between rounded-2xl border border-[rgba(228,190,181,0.2)] bg-[var(--color-surface-container-lowest)] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(177,38,0,0.1)]"><Icon name={card.icon} size={36} color="#b12600" /></div>
                  <h3 className="mb-1 font-[var(--font-display)] text-[28px] font-bold text-[var(--color-on-background)]">{card.title}</h3>
                  <span className="mb-4 block font-[var(--font-display)] text-[12px] font-bold uppercase tracking-[1.2px] text-[var(--color-primary)]">{card.tag}</span>
                  <p className="mb-6 font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{card.desc}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {card.items.map((item) => (<div key={item} className="flex items-center gap-2"><Icon name="check_circle" size={16} color="#b12600" /><span className="font-[var(--font-body)] text-[14px] text-[var(--color-secondary)]">{item}</span></div>))}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        <AnimatedReveal animation="up" delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="font-[var(--font-display)] text-[14px] font-bold uppercase tracking-[1.2px] text-[var(--color-secondary)]">{t.services.ourPlatform}:</span>
            <div className="flex gap-4">
              {['share', 'videocam', 'music_note', 'podcasts', 'article'].map((icon) => (<div key={icon} className="flex h-10 w-10 items-center justify-center rounded-[20px] bg-[var(--color-surface-container-high)]"><Icon name={icon} size={20} color="#5f5e5e" /></div>))}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

// --- 4. Teknologi (Dark) ---
function ServicesTechnology() {
  const t = useServicesStrings();

  return (
    <section className="section section--dark section--relative">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimatedReveal animation="left" delay={100}>
            <div>
              <span className="mb-[10px] block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.services.techLabel}</span>
              <h3 className="mb-2 font-[var(--font-display)] text-[32px] font-bold leading-[42px] text-white max-[767px]:text-[24px] max-[767px]:leading-[32px]">{t.services.techHeading}</h3>
              <GradientDivider />
              <p className="mb-8 font-[var(--font-body)] text-[18px] leading-[29px] text-[rgba(255,255,255,0.7)]">{t.services.techDesc}</p>
              <div className="flex flex-col gap-4">
                {t.services.techCards.map((item) => (
                  <AnimatedReveal key={item.title} animation="up" delay={200} hover="lift">
                    <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-5 backdrop-blur-[8px]">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(177,38,0,0.2)]"><Icon name={item.icon} size={20} color="#ffb4a3" /></div>
                        <h4 className="m-0 font-[var(--font-display)] text-[14px] font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="m-0 font-[var(--font-body)] text-[12px] leading-5 text-[rgba(255,255,255,0.6)]">{item.desc}</p>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </div>
          </AnimatedReveal>
          <AnimatedReveal animation="right" delay={200}>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[200px] overflow-hidden rounded-xl max-[767px]:h-[130px]"><img src={teknologiImg} alt={t.services.techLabel} className="block h-full w-full object-cover" /></div>
                <div className="h-[200px] overflow-hidden rounded-xl max-[767px]:h-[130px]"><img src={teknologiGridImg} alt={t.services.techLabel} className="block h-full w-full object-cover" /></div>
              </div>
              <div className="h-[280px] overflow-hidden rounded-xl max-[767px]:h-[180px]"><img src={proyekTeknologiImg} alt={t.services.techLabel} className="block h-full w-full object-cover" /></div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

// --- 5. Vamos Padelon ---
function ServicesVamos() {
  const t = useServicesStrings();

  return (
    <section className="overflow-hidden bg-[#1a1c1e] py-20">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-16 max-[767px]:gap-8 lg:grid-cols-2">
          <AnimatedReveal animation="up" delay={100} hover="scale">
            <div className="h-[400px] overflow-hidden rounded-[24px] bg-[#27292a] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] max-[767px]:h-[260px]"><img src={vamosImg} alt="Vamos Padelon Sinergi" className="block h-full w-full object-cover" /></div>
          </AnimatedReveal>
          <AnimatedReveal animation="right" delay={200}>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] px-4 py-1.5"><Icon name="handshake" size={14} color="#ffb4a3" /><span className="font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#ffb4a3]">{t.services.vamosBadge}</span></div>
              <h2 className="mb-4 font-[var(--font-display)] text-[34px] font-bold leading-[42px] text-white max-[767px]:text-[26px] max-[767px]:leading-[34px] lg:text-[40px] lg:leading-[48px]">{t.services.vamosHeading1}<GradientText>{t.services.vamosHeading2}</GradientText></h2>
              <p className="mb-8 font-[var(--font-body)] text-[16px] leading-[26px] text-[rgba(255,255,255,0.7)]">{t.services.vamosDesc}</p>
              <div className="mb-8 flex flex-wrap gap-3">
                {t.services.vamosTags.map((tag) => (<div key={tag.label} className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-4 py-2"><Icon name={tag.icon} size={16} color="#ffb4a3" /><span className="font-[var(--font-display)] text-[12px] font-semibold uppercase tracking-[0.5px] text-white">{tag.label}</span></div>))}
              </div>
              <div className="flex gap-3">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (<div key={social} className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[18px] bg-[rgba(255,255,255,0.08)]"><Icon name={social} size={18} color="rgba(255,255,255,0.6)" /></div>))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

// --- 6. Ekosistem T46 ---
function ServicesEcosystem() {
  const t = useServicesStrings();

  const groups = [
    { label: t.services.ecosystemGroups.managedLabel, items: t.services.ecosystemGroups.managed },
    { label: t.services.ecosystemGroups.partnershipLabel, items: t.services.ecosystemGroups.partnership },
    { label: t.services.ecosystemGroups.spacesLabel, items: t.services.ecosystemGroups.spaces },
  ];

  return (
    <section className="section section--surface-low">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <span className="mb-[10px] block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.services.ecosystemBadge}</span>
            <h2 className="mb-4 font-[var(--font-display)] text-[34px] font-bold leading-[44px] text-[var(--color-on-background)] max-[767px]:text-[28px] max-[767px]:leading-[36px]">{t.services.ecosystemHeading}</h2>
            <GradientDivider center />
            <p className="font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{t.services.ecosystemDesc}</p>
          </div>
        </AnimatedReveal>
        <div className="flex flex-col gap-12">
          {groups.map((group, groupIdx) => (
            <AnimatedReveal key={group.label} animation="up" delay={groupIdx * 100}>
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="whitespace-nowrap font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-secondary)]">{group.label}</span>
                  <div className="h-[1px] flex-1 bg-[linear-gradient(to_right,rgba(177,38,0,0.35),rgba(177,38,0,0))]" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((unit) => (
                    <AnimatedReveal key={unit.name} animation="up" delay={100} hover="lift" className="h-full">
                      <div className="flex h-full items-start gap-4 rounded-2xl border border-[rgba(228,190,181,0.2)] bg-[var(--color-surface-container-lowest)] p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(177,38,0,0.1)]"><Icon name={unit.icon} size={22} color="#b12600" /></div>
                        <div>
                          <h3 className="m-0 mb-1 font-[var(--font-display)] text-[16px] font-bold leading-[22px] text-[var(--color-on-background)]">{unit.name}</h3>
                          <p className="m-0 font-[var(--font-body)] text-[13px] leading-[20px] text-[var(--color-secondary)]">{unit.desc}</p>
                        </div>
                      </div>
                    </AnimatedReveal>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 7. Proyek Masa Depan ---
function ServicesProjects() {
  const t = useServicesStrings();

  return (
    <section className="section section--surface">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto mb-16 text-center">
            <h2 className="mb-2 font-[var(--font-display)] text-[38px] font-bold leading-[48px] text-[var(--color-on-background)] max-[767px]:text-[28px] max-[767px]:leading-[36px] lg:text-[48px] lg:leading-[58px] lg:whitespace-nowrap">{t.services.projectsHeading1}<span className="text-[var(--color-primary)]">{t.services.projectsHeading2}</span>{t.services.projectsHeading3}</h2>
            <GradientDivider center />
            <p className="mx-auto max-w-[672px] font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{t.services.projectsDesc}</p>
          </div>
        </AnimatedReveal>
        <div className="grid grid-cols-2 gap-4 max-[767px]:grid-cols-1 lg:grid-cols-4">
          {t.services.projects.map((item, idx) => {
            const images = [proyekPropertiImg, proyekTeknologiImg, proyekEkosistemImg, proyekKarbonImg];
            return (
              <AnimatedReveal key={item.title} animation="up" delay={(idx + 1) * 100} hover="scale">
                <div className="relative h-[360px] overflow-hidden rounded-2xl bg-[#1a1c1e] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                  <img src={images[idx]} alt={item.title} className="block h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.2)_50%,transparent_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 z-[2] p-6">
                    <div className="mb-2 inline-block rounded-full bg-[var(--color-primary)] px-3 py-1"><span className="font-[var(--font-display)] text-[10px] font-bold uppercase tracking-[1px] text-white">{item.tag}</span></div>
                    <h3 className="m-0 font-[var(--font-display)] text-[20px] font-bold leading-[26px] text-white">{item.title}</h3>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesProperty />
      <ServicesMedia />
      <ServicesTechnology />
      <ServicesVamos />
      <ServicesEcosystem />
      <ServicesProjects />
    </>
  );
}

export const Layanan = Services;
export default Services;