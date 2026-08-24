/**
 * EcommerceAiShowcase — signature section for E-commerce Websites page.
 *
 * 7-tile asymmetric bento grid showcasing AI capabilities woven into the
 * shopper journey. Ported from the legacy `AiPoweredFeatures` component
 * into theme tokens. Tile content lives inline as a module-level TILES
 * constant, matching the prop-less pattern used by other signatures
 * (PortalArchitectureMap, ClaimsFlowComparison).
 *
 * Palette strategy: three theme-safe tile variants (A: light surface,
 * B: dark brand spotlight, C: warm accent) rotated across 7 cards as
 * A / B / C / A / C / A / C. All variants resolve through brand-*, accent-*,
 * surface-*, text-*, border-* tokens, so data-theme swapping is automatic.
 *
 * Content integrity: every tile description is a capability claim. No
 * outcome metrics, no stats chips, no "clients see" language. The legacy
 * RECOMMENDATIONS_STATS ("15–30% higher AOV") and PERSONALIZATION_BADGES
 * arrays are intentionally removed — they cannot be backed in a greenfield
 * context.
 */

import { Sparkles, Search, TrendingUp, Package, Users, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

type TileVariant = 'A' | 'B' | 'C';

interface Tile {
  icon: LucideIcon;
  title: string;
  description: string;
  variant: TileVariant;
  /** Tailwind `md:col-span-*` class on the 6-column md grid (6 = full row). */
  spanClass: string;
}

const TILES: ReadonlyArray<Tile> = [
  {
    icon: Sparkles,
    title: 'Smart product recommendations',
    description:
      'Recommendation engine analysis analyzes behaviour, purchase history, similar-customer profiles, and more to surface the most relevant products at every stage.',
    variant: 'A',
    spanClass: 'md:col-span-4',
  },
  {
    icon: Search,
    title: 'Visual search',
    description:
      'Users take a photo to be automated directly to matching products instantly. Computer vision powered by Azure AI Vision with endless capabilities built for you.',
    variant: 'B',
    spanClass: 'md:col-span-2',
  },
  {
    icon: TrendingUp,
    title: 'Dynamic pricing',
    description:
      'Real-time price optimisation based on demand signals, competitor pricing, and inventory levels — with guardrails for margin floors and brand-safety rules.',
    variant: 'C',
    spanClass: 'md:col-span-2',
  },
  {
    icon: Package,
    title: 'Predictive inventory',
    description:
      'Forecast demand by SKU, prevent stockouts, and reduce carrying costs with ML-driven inventory planning tuned to your seasonality and promotional calendar.',
    variant: 'A',
    spanClass: 'md:col-span-2',
  },
  {
    icon: Users,
    title: 'Personalized journeys',
    description:
      'Custom software built for your preferences. Hero banners, category ordering, and more features ready to be deployed.',
    variant: 'C',
    spanClass: 'md:col-span-2',
  },
  {
    icon: TrendingUp,
    title: 'Conversion-First Architecture',
      description:
        'AI-First cloud based platforms ready to be adapted for any situation.  With CRO principles built at every page, from a product classification system to checkout friction, our software is custom designed for you.',
    variant: 'A',
    spanClass: 'md:col-span-3',
  },
    {
     icon: Zap,
      title: 'Performance Leadership',
      description:
        'Next.js App Router with server-side rendering, automatic image optimization, and global CDN delivery are architected to produce Core Web Vitals scores of the kind that Google rewards in organic search rankings and that typically correlate with lower bounce rates.',
    variant: 'A',
    spanClass: 'md:col-span-3',
  }
];

const VARIANT_CLASSES: Record<TileVariant, {
  card: string;
  iconWrap: string;
  icon: string;
  heading: string;
  body: string;
}> = {
  // A — Light surface (brand-tinted)
  A: {
    card:
      'bg-surface-white border border-border-light rounded-2xl shadow-card-sm hover:shadow-card transition-shadow',
    iconWrap: 'bg-brand-50',
    icon: 'text-brand-600',
    heading: 'text-text-heading',
    body: 'text-text-body',
  },
  // B — Dark brand spotlight (the hero-contrast tile)
  B: {
    card:
      'bg-gradient-to-br from-brand-700 to-brand-500 rounded-2xl shadow-card transition-shadow',
    iconWrap: 'bg-white/15',
    icon: 'text-white',
    heading: 'text-white',
    body: 'text-brand-50/90',
  },
  // C — Warm accent
  C: {
    card:
      'bg-accent-50 border border-border-light rounded-2xl shadow-card-sm hover:shadow-card transition-shadow',
    iconWrap: 'bg-accent-100',
    icon: 'text-accent-700',
    heading: 'text-text-heading',
    body: 'text-text-body',
  },
};

export const EcommerceAiShowcase = () => (
  <Section tone="warm" size="lg" className="pt-5 md:pt-6 lg:pt-6 xl:pt-7 3xl:pt-8">
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
          AI, built in
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
          AI woven into every step of your journey.
        </h2>
        <p className="text-base md:text-lg text-text-body leading-relaxed">
          Recommendation engines, visual search, pricing intelligence, and personalization designed from day one.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
        {TILES.map((tile, idx) => {
          const v = VARIANT_CLASSES[tile.variant];
          const Icon = tile.icon;
          return (
            <div
              key={idx}
              className={`${v.card} ${tile.spanClass} p-6 md:p-7 flex flex-col`}
            >
              <div
                className={`w-11 h-11 rounded-xl ${v.iconWrap} flex items-center justify-center mb-4`}
              >
                <Icon className={`h-5 w-5 ${v.icon}`} aria-hidden="true" />
              </div>
              <h3 className={`text-xl font-bold ${v.heading} mb-2`}>
                {tile.title}
              </h3>
              <p className={`text-sm md:text-base ${v.body} leading-relaxed`}>
                {tile.description}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
