import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientDivider } from '@/components/ui/GradientDivider';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';
import proyekPropertiImg from '@/assets/images/future_project_property.png';
import proyekTeknologiImg from '@/assets/images/future_project_technology.png';
import proyekEkosistemImg from '@/assets/images/future_project_ecosystem.png';
import proyekKarbonImg from '@/assets/images/future_project_carbon.png';

// Images map to the `projects` array in businesses.json by position.
const PROJECT_IMAGES = [proyekPropertiImg, proyekTeknologiImg, proyekEkosistemImg, proyekKarbonImg];

export function BusinessesProjects() {
  const t = useBusinessesStrings();

  return (
    <section className="section section--surface">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto mb-16 text-center">
            <h2 className="mb-2 font-[var(--font-display)] text-[38px] font-bold leading-[48px] text-[var(--color-on-background)] max-[767px]:text-[28px] max-[767px]:leading-[36px] lg:text-[48px] lg:leading-[58px] lg:whitespace-nowrap">{t.businesses.projectsHeading1}<span className="text-[var(--color-primary)]">{t.businesses.projectsHeading2}</span>{t.businesses.projectsHeading3}</h2>
            <GradientDivider center />
            <p className="mx-auto max-w-[672px] font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-secondary)]">{t.businesses.projectsDesc}</p>
          </div>
        </AnimatedReveal>
        <div className="grid grid-cols-2 gap-4 max-[767px]:grid-cols-1 lg:grid-cols-4">
          {t.businesses.projects.map((item, idx) => (
            <AnimatedReveal key={item.title} animation="up" delay={(idx + 1) * 100} hover="scale">
              <div className="relative h-[360px] overflow-hidden rounded-2xl bg-[#1a1c1e] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                <img src={PROJECT_IMAGES[idx]} alt={item.title} className="block h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.2)_50%,transparent_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 z-[2] p-6">
                  <div className="mb-2 inline-block rounded-full bg-[var(--color-primary)] px-3 py-1"><span className="font-[var(--font-display)] text-[10px] font-bold uppercase tracking-[1px] text-white">{item.tag}</span></div>
                  <h3 className="m-0 font-[var(--font-display)] text-[20px] font-bold leading-[26px] text-white">{item.title}</h3>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessesProjects;
