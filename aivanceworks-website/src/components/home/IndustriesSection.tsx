'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SECTION_Y_TIGHT } from '@/lib/section-spacing';

// Industry ledger rows. Image folders don't always match route slugs
// (realestate vs real-estate, msc vs manufacturing-supply-chain), so each
// entry carries its own image path. Taglines and proof chips are distilled
// from each industry's data file — the chips are concrete evidence of
// vertical depth, not decoration.
const industries = [
  // Healthcare is intentionally absent: 'healthcare' (and 'banking') are
  // commented out of INDUSTRY_PAGE_MODULES in src/lib/content.ts, so
  // /industry/healthcare 404s. The card linked there regardless. Restore this
  // entry at the same time as re-enabling the route in that registry.
  {
    name: 'Travel & Hospitality',
    tagline:
      'Journey-first platforms for hotels, airlines, agencies, and restaurants — one seamless guest experience from first search to loyal return.',
    proof: ['Booking Engines', 'PMS / POS', 'Guest Loyalty'],
    href: '/industry/travel-hospitality',
    image: '/images/industries/travel-hospitality/category-card.jpg',
    alt: 'Vintage map and travel ephemera arranged on a desk',
  },
  {
    name: 'Real Estate',
    tagline:
      'Data-first software that moves listings, deals, and decisions faster — from the first listing to the final signature.',
    proof: ['MLS / IDX Data', 'Deal Pipeline', 'Property Analytics'],
    href: '/industry/real-estate',
    image: '/images/industries/realestate/category-card.jpg',
    alt: 'City skyline of high-rise real estate at dusk',
  },
  {
    name: 'Manufacturing & Supply Chain',
    tagline:
      'Connecting the shop floor to the decision layer — built on top of SAP, Oracle, and the plant systems you already run.',
    proof: ['MES Dashboards', 'ERP Integration', 'Predictive Maintenance'],
    href: '/industry/manufacturing-supply-chain',
    image: '/images/industries/msc/category-card.jpg',
    alt: 'Automated production line on a modern factory floor',
  },
  {
    name: 'Logistics',
    tagline:
      'Visibility and control across every mile — the software layer on top of your TMS, telematics, and carrier systems.',
    proof: ['TMS', 'Fleet Telematics', 'Route Optimization'],
    href: '/industry/logistics',
    image: '/images/industries/logistics/category-card.jpg',
    alt: 'Towering warehouse racking aisle in a distribution center',
  },
];

type Industry = (typeof industries)[number];

// One ledger row. Each row owns its scroll reveal so the wipe fires as the
// row itself enters the viewport, not when the section header does.
function IndustryRow({ industry, flip }: { industry: Industry; flip: boolean }) {
  const ref = useScrollReveal<HTMLLIElement>({ threshold: 0.25 });

  return (
    <li ref={ref} className="scroll-step">
      <Link
        href={industry.href}
        aria-label={`${industry.name} — ${industry.tagline}`}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-center
          py-5 sm:py-6 lg:py-7 rounded-xl outline-none
          focus-visible:ring-2 focus-visible:ring-brand-400"
      >
        {/* Image plate — unmasks toward the text as the row reveals */}
        <div
          className={`relative h-36 sm:h-44 lg:h-48 rounded-xl lg:rounded-2xl overflow-hidden
            ring-1 ring-white/10 lg:col-span-7
            ${flip ? 'lg:order-first plate-wipe-rtl' : 'lg:order-last plate-wipe'}`}
        >
          <Image
            src={industry.image}
            alt={industry.alt}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-105 motion-reduce:transition-none"
          />
        </div>

        {/* Message block — name, tagline, and proof of vertical depth */}
        <div className="lg:col-span-5">
          <h3
            className="text-lg sm:text-xl lg:text-2xl font-black text-white [text-wrap:balance]
              group-hover:text-brand-300 transition-colors duration-300 mb-1.5 sm:mb-2"
          >
            {industry.name}
          </h3>
          <p className="text-xs sm:text-sm lg:text-[15px] text-white/75 leading-relaxed max-w-md mb-3 sm:mb-3.5">
            {industry.tagline}
          </p>

          {/* Proof chips — same chip language as the Experience section */}
          <div className="flex flex-wrap gap-1.5 mb-3.5 sm:mb-4">
            {industry.proof.map((item) => (
              <span
                key={item}
                className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 sm:px-2.5 rounded-full
                  bg-brand-500/[0.15] border border-brand-400/[0.2] text-brand-300 tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center text-xs sm:text-sm font-semibold text-brand-300 group-hover:text-brand-200 transition-colors duration-300">
            Explore {industry.name}
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300 motion-reduce:transition-none" />
          </span>
        </div>
      </Link>
    </li>
  );
}

export function IndustriesSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      data-section="home-industries"
      className={`relative overflow-hidden ${SECTION_Y_TIGHT}`}
    >
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Dark spotlight panel — same surface language as Hero / Experience */}
        <div
          className="relative w-full
            bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to
            rounded-2xl lg:rounded-3xl
            border border-white/[0.06]
            shadow-brand-panel
            overflow-hidden"
        >
          {/* Glow orbs + grid, matching the Experience panel */}
          <div className="absolute top-0 right-1/4 w-[400px] h-40 bg-brand-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-32 bg-accent-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <div className="relative px-4 sm:px-8 md:px-12 lg:px-16 py-5 sm:py-6 md:py-7 lg:py-8">
            {/* Header — left-aligned: this section reads as a ledger, not a billboard */}
            <div
              ref={headerRef}
              className="scroll-step flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-6 mb-1 sm:mb-2"
            >
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-white mb-1.5 [text-wrap:balance]">
                  Software Built Around Your Industry
                </h2>
                <p className="text-[11px] sm:text-xs md:text-sm text-white/70 leading-relaxed max-w-xl">
                  Vertical-specific software and AI, engineered for the way your industry
                  actually operates — from the first patient record to the final mile.
                </p>
              </div>
              <Link
                href="/industry"
                className="inline-flex items-center shrink-0 text-brand-300 hover:text-brand-200 font-semibold text-xs sm:text-sm transition-colors duration-300"
              >
                View all industries
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>

            {/* The ledger — five rows separated by hairlines, image side alternating */}
            <ul className="divide-y divide-white/[0.08]">
              {industries.map((industry, i) => (
                <IndustryRow key={industry.href} industry={industry} flip={i % 2 === 1} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
