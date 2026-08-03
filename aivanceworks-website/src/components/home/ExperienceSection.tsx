'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Zap, Clock, TrendingUp, Check } from 'lucide-react';
import { SECTION_Y_TIGHT } from '@/lib/section-spacing';
import { useCarouselAutoplay } from '@/hooks/useCarouselAutoplay';
import { AutoplayToggle } from '@/components/shared/primitives';

// Badge PNGs are trimmed to their content bounding box (originals kept alongside)
// so all three fill their square box identically. The Associate badges (AI-104,
// AZ-204) and the Fundamentals badge (AZ-900) use different internal layouts:
// the Fundamentals white title plate sits ~5.8% higher than the Associate ones.
// `nudge` shifts a badge vertically so the (most salient) white plates align on
// the same level — purely optical alignment, applied only where artwork differs.
const certifications = [
  {
    src: '/images/certifications/az-900-trim.png',
    alt: 'Microsoft Certified: Azure Fundamentals',
    title: 'Azure Fundamentals',
    level: 'Fundamentals',
    code: 'AZ-900',
    nudge: 'translate-y-[3px] sm:translate-y-[4px] md:translate-y-[5px] lg:translate-y-[5px]',
  },
  {
    src: '/images/certifications/AZ-204-trim.png',
    alt: 'Microsoft Certified: Azure Developer Associate',
    title: 'Azure Developer',
    level: 'Associate',
    code: 'AZ-204',
    nudge: '',
  },
  {
    src: '/images/certifications/ai-104-trim.png',
    alt: 'Microsoft Certified: Azure AI Engineer Associate',
    title: 'Azure AI Engineer',
    level: 'Associate',
    code: 'AI-104',
    nudge: '',
  },
];

const stats = [
  { value: '5x', label: 'Faster Development', icon: Zap },
  { value: '50%', label: 'Cost Reduction', icon: TrendingUp },
  { value: '53.95%', label: 'Uptime SLA', icon: Clock },
];

const impactHighlights = [
  'Cloud-native architectures built for scale and resilience',
  'AI/ML solutions delivered from prototype to production',
  'Enterprise-grade security and compliance by default',
];

// Small reusable eyebrow pill used at the top of each panel
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
      bg-brand-500/[0.12] border border-brand-400/[0.15]
      text-brand-300 text-[10px] sm:text-[11px] font-semibold tracking-wide mb-2 sm:mb-3">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-400" />
      </span>
      {children}
    </div>
  );
}

// Dark card shell — glow orbs, grid backdrop, border. Each panel lives in its own.
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full overflow-hidden
      bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to
      rounded-2xl lg:rounded-3xl
      border border-white/[0.06]
      shadow-brand-panel">

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/3 w-[400px] h-40 bg-brand-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-32 bg-accent-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Card body */}
      <div className="relative h-full
        px-4 sm:px-8 md:px-10 lg:px-8 xl:px-12
        py-6 sm:py-8 lg:py-8 xl:py-10">
        {children}
      </div>
    </div>
  );
}

// ── Panel 1: Certifications (heading + badges) ──────────────────────────────
function CertificationsPanel() {
  return (
    <div className="flex flex-col items-center h-full">
      {/* Header */}
      <div className="text-center mb-5 sm:mb-6">
        <Eyebrow>Microsoft Certified Professional</Eyebrow>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-white mb-1.5">
          Our{' '}
          <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-[11px] sm:text-xs md:text-sm text-white/75 leading-relaxed max-w-md mx-auto">
          Industry-recognized Microsoft certifications backed by hands-on Azure cloud and AI engineering.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-row items-start justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-6 xl:gap-10">
        {certifications.map((cert) => (
          <div key={cert.code} className="group flex flex-col items-center gap-2 sm:gap-3 flex-1 min-w-0 max-w-[120px]">
            {/* Badge image */}
            <div className="relative
              w-[55px] h-[55px]
              sm:w-[70px] sm:h-[70px]
              md:w-[80px] md:h-[80px]
              lg:w-[75px] lg:h-[75px]
              xl:w-[90px] xl:h-[90px]
              drop-shadow-[0_6px_18px_rgba(var(--brand-shadow-rgb),0.35)]
              group-hover:drop-shadow-[0_10px_28px_rgba(var(--brand-shadow-rgb),0.55)]
              group-hover:scale-[1.04]
              transition-all duration-300">
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className={`object-contain ${cert.nudge}`}
                sizes="(max-width: 640px) 55px, (max-width: 768px) 70px, (max-width: 1280px) 80px, 90px"
              />
            </div>

            {/* Label — fixed-height title reserves 2 lines so pills align across columns */}
            <div className="text-center flex flex-col items-center">
              <p className="text-[9px] sm:text-[10px] text-brand-400/70 font-semibold uppercase tracking-widest
                mb-0.5 leading-tight min-h-[2.2em] flex items-start justify-center text-center">
                Microsoft Certified
              </p>
              <h3 className="text-xs sm:text-sm font-bold text-white leading-tight
                min-h-[2.6em] flex items-center justify-center">
                {cert.title}
              </h3>
              <span className="block w-full text-center whitespace-nowrap mt-1
                text-[8px] sm:text-[10px] font-semibold
                px-1.5 py-0.5 rounded-full
                bg-brand-500/[0.15] border border-brand-400/[0.2] text-brand-300 tracking-wide">
                {cert.level} · {cert.code}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Panel 2: Impact stats (heading + metrics) ───────────────────────────────
function StatsPanel() {
  return (
    <div className="flex flex-col items-center h-full">
      {/* Header */}
      <div className="text-center mb-5 sm:mb-6">
        <Eyebrow>Proven Results</Eyebrow>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-white mb-1.5">
          Measurable{' '}
          <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
            Impact
          </span>
        </h2>
        <p className="text-[11px] sm:text-xs md:text-sm text-white/75 leading-relaxed max-w-md mx-auto">
          Outcomes our engineering consistently delivers for enterprise teams building on Azure.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-lg mx-auto">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.07]
              rounded-lg px-1.5 py-2 sm:px-2 sm:py-2.5 md:px-2.5 md:py-3
              text-center hover:bg-white/[0.08] hover:border-brand-400/20 transition-all duration-300"
          >
            <stat.icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-3.5 lg:w-3.5 text-brand-400 mb-0.5 mx-auto" />
            <div className="text-xs sm:text-sm lg:text-base font-black text-white leading-none mb-0.5">
              {stat.value}
            </div>
            <div className="text-[7px] sm:text-[8px] lg:text-[9px] text-white/40 font-medium leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Supporting highlights — balances the card height with the badges panel */}
      <ul className="mt-5 sm:mt-6 w-full max-w-md mx-auto space-y-2.5 sm:space-y-3">
        {impactHighlights.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-left">
            <span className="flex-shrink-0 flex items-center justify-center
              h-4 w-4 sm:h-5 sm:w-5 rounded-full
              bg-brand-500/[0.15] border border-brand-400/[0.25]">
              <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand-300" strokeWidth={3} />
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm text-white/70 leading-snug">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExperienceSection() {
  // Mobile auto-sliding carousel state (0 = certifications, 1 = stats)
  const [active, setActive] = useState(0);

  // The carousel is `lg:hidden` — on desktop both panels render side by side and
  // the timer had nothing to animate, yet it still ticked and re-rendered the
  // section every 4.5 s. Gate on the same 1024px breakpoint as the layout.
  const [isNarrow, setIsNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023.98px)');
    setIsNarrow(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsNarrow(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const advance = useCallback(() => setActive((prev) => (prev === 0 ? 1 : 0)), []);

  const { containerRef, isPaused, setPaused, pause } = useCarouselAutoplay<HTMLDivElement>({
    onTick: advance,
    intervalMs: 4500,
    enabled: isNarrow,
  });

  const slides = ['Certifications', 'Impact'];

  return (
    <section data-section="home-experience" className={`relative overflow-hidden ${SECTION_Y_TIGHT}`}>

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12">

        {/* ── Desktop: two separate cards side by side ──────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-3 xl:gap-4 lg:items-stretch">
          <Card>
            <CertificationsPanel />
          </Card>
          <Card>
            <StatsPanel />
          </Card>
        </div>

        {/* ── Mobile / tablet: auto-sliding carousel of the two cards ────── */}
        <div ref={containerRef} className="lg:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              <div className="w-full shrink-0 px-1">
                <Card>
                  <CertificationsPanel />
                </Card>
              </div>
              <div className="w-full shrink-0 px-1">
                <Card>
                  <StatsPanel />
                </Card>
              </div>
            </div>
          </div>

          {/* Dots indicator. These sit outside the dark <Card>, i.e. on the
              white page background — the previous bg-white/25 was invisible,
              and a 6px dot fails target-size. */}
          <div className="flex items-center justify-center mt-4">
            <AutoplayToggle
              isPaused={isPaused}
              onToggle={setPaused}
              label="certifications and impact carousel"
              className="mr-1 text-gray-400 hover:text-brand-600"
            />
            {slides.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setActive(i);
                  pause();
                }}
                aria-label={`Show ${label}`}
                aria-current={active === i}
                className="group flex h-6 min-w-6 items-center justify-center px-1"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    active === i
                      ? 'w-6 bg-brand-600'
                      : 'w-1.5 bg-gray-300 group-hover:bg-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-4 sm:mt-5 lg:mt-6 text-center">
          {/* This note is outside the dark <Card>, so text-white/50 rendered
              white-on-white — invisible. gray-500 is 4.84:1 on white. */}
          <p className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-wide">
            Verified credentials issued by Microsoft · Building enterprise solutions on Azure
          </p>
        </div>
      </div>
    </section>
  );
}
