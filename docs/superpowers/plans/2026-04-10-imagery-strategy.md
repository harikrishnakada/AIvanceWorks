# Imagery Strategy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add photo-driven imagery to 3 solution pages and illustration/interactivity to 2 service pages, per the approved spec at `docs/superpowers/specs/2026-04-10-imagery-strategy-design.md`.

**Architecture:** Extend the existing shared component library with `ImageFeature` section and `heroImage`/`heroIllustration` props on `Hero`. Solution pages get Unsplash photos (hero + mid-page). Service pages get inline SVG illustrations (hero + spot) plus scroll animations and interactive signature components. All changes are additive — existing pages with no imagery continue working unchanged.

**Tech Stack:** Next.js 15 `<Image>`, Tailwind CSS, IntersectionObserver for scroll animations, inline SVG for illustrations.

---

## File Structure

### New Files
| File | Responsibility |
|------|---------------|
| `src/components/shared/sections/ImageFeature.tsx` | Text + image alternating section for solution pages |
| `src/components/signature/DiscoveryHeroIllustration.tsx` | Hero SVG illustration for Product Discovery |
| `src/components/signature/MvpHeroIllustration.tsx` | Hero SVG illustration for MVP Development |
| `src/hooks/useScrollReveal.ts` | IntersectionObserver hook for scroll-triggered animations |
| `src/styles/scroll-animations.css` | Keyframe definitions for staggered step reveals |
| `public/images/solutions/patient-portals/` | Photo directory (hero.jpg, feature-1.jpg, feature-2.jpg) |
| `public/images/solutions/insurance-portals/` | Photo directory (hero.jpg, feature-1.jpg, feature-2.jpg) |
| `public/images/solutions/e-commerce-websites/` | Photo directory (hero.jpg, feature-1.jpg, feature-2.jpg) |

### Modified Files
| File | Change |
|------|--------|
| `src/types/pages.ts:153-223` | Add `heroImage` to hero block, `imageFeatures` to `SolutionPageData` |
| `src/components/shared/sections/Hero.tsx:11-21` | Add `heroImage` and `heroIllustration` props |
| `src/components/shared/sections/index.ts` | Export `ImageFeature` |
| `src/components/templates/SolutionDetailTemplate.tsx:29-39` | Pass `heroImage` to Hero, render ImageFeature sections |
| `src/components/templates/ServiceDetailTemplate.tsx:35-46` | Pass `heroIllustration` to Hero |
| `src/components/signature/index.ts` | Export new hero illustrations |
| `src/components/signature/DiscoveryBeforeAfter.tsx` | Add interactive hover/click states |
| `src/components/signature/MvpDualTrackRoadmap.tsx` | Add interactive hover/click states |
| `src/components/shared/sections/ProcessTimeline.tsx` | Add scroll-triggered animation support |
| `src/data/solutions/patient-portals.ts` | Add `heroImage` and `imageFeatures` data |
| `src/data/solutions/insurance-portals.ts` | Add `heroImage` and `imageFeatures` data |
| `src/data/solutions/e-commerce-websites.ts` | Add `heroImage` and `imageFeatures` data |
| `src/data/services/product-discovery.ts` | Move hero metrics to `metricsStrip` |
| `src/data/services/mvp-development.ts` | Move hero metrics to `metricsStrip` |
| `src/app/services/product-discovery/page.tsx` | Pass hero illustration |
| `src/app/services/mvp-development/page.tsx` | Pass hero illustration |
| `src/styles/globals.css` | Import scroll-animations.css |

All paths relative to `aivanceworks-website/`.

---

## Task 1: Extend Types — Add Image Fields to Page Data

**Files:**
- Modify: `src/types/pages.ts:131-223`

- [ ] **Step 1: Add `imageFeatures` to SectionKey union**

In `src/types/pages.ts`, add `'imageFeatures'` to the `SectionKey` union type:

```typescript
export type SectionKey =
  | 'hero'
  | 'metricsStrip'
  | 'featureGrid'
  | 'benefitsGrid'
  | 'processTimeline'
  | 'techStackBlock'
  | 'integrationsPanel'
  | 'faq'
  | 'ctaBlock'
  | 'discoveryMethodology'
  | 'engagementModels'
  | 'complianceDeepDive'
  | 'complianceSpotlight'
  | 'personaComparison'
  | 'relatedPages'
  | 'imageFeatures'
  | 'signature';
```

- [ ] **Step 2: Add `ImageFeatureData` interface and `heroImage` to hero block**

Add a new interface before `BasePageData` and extend the hero block:

```typescript
export interface ImageFeatureData {
  heading: string;
  description: string;
  image: { src: string; alt: string };
}
```

In `BasePageData`, add to the `hero` block:

```typescript
hero: {
  badge?: string;
  badgeHref?: string;
  headline: string;
  subhead: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  metrics?: HeroMetric[];
  heroImage?: { src: string; alt: string };
};
```

- [ ] **Step 3: Add `imageFeatures` to `SolutionPageData`**

```typescript
export interface SolutionPageData extends BasePageData {
  industry: SolutionIndustry;
  industryMetrics?: HeroMetric[];
  complianceDetail?: ComplianceDetail;
  caseStudySpotlight?: CaseStudyRef;
  signatureComponent: string;
  imageFeatures?: ImageFeatureData[];
}
```

- [ ] **Step 4: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds (all new fields are optional, no breaking changes)

- [ ] **Step 5: Commit**

```bash
git add src/types/pages.ts
git commit -m "feat(types): add heroImage and imageFeatures to page data types"
```

---

## Task 2: Extend Hero Component — Support Image and Illustration Right Column

**Files:**
- Modify: `src/components/shared/sections/Hero.tsx:1-93`

- [ ] **Step 1: Add `heroImage` and `heroIllustration` props to `HeroProps`**

```typescript
import Image from 'next/image';

export interface HeroProps {
  badge?: string;
  badgeHref?: string;
  headline: string;
  subhead: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  metrics?: Metric[];
  metricsTitle?: string;
  heroImage?: { src: string; alt: string };
  heroIllustration?: React.ReactNode;
  className?: string;
}
```

- [ ] **Step 2: Update the component to render the right column based on props**

Replace the `hasRightColumn` logic and the right-column rendering:

```typescript
export const Hero = ({
  badge,
  badgeHref,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  metrics,
  metricsTitle = 'Key Results',
  heroImage,
  heroIllustration,
  className,
}: HeroProps) => {
  const hasMetrics = metrics && metrics.length > 0;
  const hasRightColumn = hasMetrics || !!heroImage || !!heroIllustration;

  return (
    <Section tone="dark" size={hasRightColumn ? 'md' : 'lg'} withGrid className={className}>
      <Container>
        <div
          className={cn(
            'grid gap-10 md:gap-12 items-center',
            hasRightColumn ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
          )}
        >
          <div>
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-sm font-medium mb-6">
                {badgeHref ? (
                  <Link href={badgeHref} className="hover:text-brand-200 transition-colors">
                    {badge}
                  </Link>
                ) : (
                  badge
                )}
              </div>
            )}
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold text-text-light mb-6 leading-tight tracking-tight",
              hasRightColumn ? "lg:text-[3.25rem]" : "lg:text-6xl"
            )}>
              {headline}
            </h1>
            <p className={cn(
              "text-base md:text-lg lg:text-xl text-text-subtle leading-relaxed max-w-[62ch]",
              hasRightColumn ? "mb-6" : "mb-8"
            )}>
              {subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700 text-text-light">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border-subtle text-text-light hover:bg-[color:var(--glass-hover)]"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Right column: image > illustration > metrics (priority order) */}
          {heroImage ? (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={640}
                height={480}
                className="w-full h-auto object-cover saturate-[0.85] contrast-[1.05] sepia-[0.05] hue-rotate-[190deg]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : heroIllustration ? (
            <div className="flex items-center justify-center">
              {heroIllustration}
            </div>
          ) : hasMetrics ? (
            <MetricsCard metrics={metrics!} title={metricsTitle} />
          ) : null}
        </div>
      </Container>
    </Section>
  );
};
```

- [ ] **Step 3: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds. Existing pages unchanged (they pass `metrics`, not `heroImage`).

- [ ] **Step 4: Commit**

```bash
git add src/components/shared/sections/Hero.tsx
git commit -m "feat(Hero): add heroImage and heroIllustration right-column variants"
```

---

## Task 3: Create ImageFeature Section Component

**Files:**
- Create: `src/components/shared/sections/ImageFeature.tsx`
- Modify: `src/components/shared/sections/index.ts`

- [ ] **Step 1: Create the ImageFeature component**

Create `src/components/shared/sections/ImageFeature.tsx`:

```typescript
import Image from 'next/image';
import { Section, Container } from '@/components/shared/primitives';
import { cn } from '@/lib/utils';
import type { ImageFeatureData } from '@/types/pages';

export interface ImageFeatureProps {
  features: ImageFeatureData[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const ImageFeature = ({
  features,
  tone = 'light',
  className,
}: ImageFeatureProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      <div className="flex flex-col gap-16 md:gap-20">
        {features.map((feature, idx) => {
          const reverse = idx % 2 !== 0;
          return (
            <div
              key={idx}
              className={cn(
                'grid gap-8 md:gap-12 items-center',
                'md:grid-cols-2',
                reverse && 'md:[&>*:first-child]:order-2'
              )}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-4 tracking-tight">
                  {feature.heading}
                </h3>
                <p className="text-base md:text-lg text-text-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  width={640}
                  height={427}
                  className="w-full h-auto object-cover saturate-[0.85] contrast-[1.05] sepia-[0.05] hue-rotate-[190deg]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2: Export from sections barrel**

Add to `src/components/shared/sections/index.ts`:

```typescript
export { ImageFeature, type ImageFeatureProps } from './ImageFeature';
```

- [ ] **Step 3: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/shared/sections/ImageFeature.tsx src/components/shared/sections/index.ts
git commit -m "feat: add ImageFeature section component for solution pages"
```

---

## Task 4: Wire ImageFeature into SolutionDetailTemplate

**Files:**
- Modify: `src/components/templates/SolutionDetailTemplate.tsx:1-119`

- [ ] **Step 1: Import ImageFeature and pass heroImage to Hero**

Add `ImageFeature` to the imports from `@/components/shared/sections` (line 3-18).

Update the `hero` renderer (line 30-39) to pass `heroImage`:

```typescript
hero: () => (
  <Hero
    badge={data.hero.badge}
    badgeHref={data.hero.badgeHref}
    headline={data.hero.headline}
    subhead={data.hero.subhead}
    primaryCta={data.hero.primaryCta}
    secondaryCta={data.hero.secondaryCta}
    metrics={data.hero.metrics}
    heroImage={data.hero.heroImage}
  />
),
```

- [ ] **Step 2: Add `imageFeatures` to the section renderers**

In the `sectionRenderers` record, add the `imageFeatures` entry:

```typescript
imageFeatures: () =>
  data.imageFeatures && data.imageFeatures.length > 0 ? (
    <ImageFeature features={data.imageFeatures} />
  ) : null,
```

- [ ] **Step 3: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds. Existing solution pages still render (no `heroImage` or `imageFeatures` in their data = no change).

- [ ] **Step 4: Commit**

```bash
git add src/components/templates/SolutionDetailTemplate.tsx
git commit -m "feat(SolutionTemplate): wire heroImage and ImageFeature into composition"
```

---

## Task 5: Wire ImageFeature into ServiceDetailTemplate

**Files:**
- Modify: `src/components/templates/ServiceDetailTemplate.tsx:1-121`

- [ ] **Step 1: Add `imageFeatures` renderer (unused for now but keeps SectionKey complete)**

Import `ImageFeature` from sections. Add to `sectionRenderers`:

```typescript
imageFeatures: () => null, // services use illustrations, not photos
```

- [ ] **Step 2: Accept and pass `heroIllustration` prop**

Update the template props interface:

```typescript
export interface ServiceDetailTemplateProps {
  data: ServicePageData;
  signature?: ReactNode;
  heroIllustration?: ReactNode;
}
```

Update the hero renderer:

```typescript
hero: () => (
  <Hero
    badge={data.hero.badge}
    badgeHref={data.hero.badgeHref}
    headline={data.hero.headline}
    subhead={data.hero.subhead}
    primaryCta={data.hero.primaryCta}
    secondaryCta={data.hero.secondaryCta}
    metrics={heroIllustration ? undefined : data.hero.metrics}
    heroIllustration={heroIllustration}
  />
),
```

When `heroIllustration` is provided, hero metrics are suppressed (they render via MetricsStrip instead).

- [ ] **Step 3: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/templates/ServiceDetailTemplate.tsx
git commit -m "feat(ServiceTemplate): add heroIllustration prop, suppress hero metrics when illustration present"
```

---

## Task 6: Research and Source Unsplash Photos for Solution Pages

**Files:**
- Create: `public/images/solutions/patient-portals/` (3 photos)
- Create: `public/images/solutions/insurance-portals/` (3 photos)
- Create: `public/images/solutions/e-commerce-websites/` (3 photos)

This task is **parallelizable** — run 3 subagents, one per solution page.

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p aivanceworks-website/public/images/solutions/patient-portals
mkdir -p aivanceworks-website/public/images/solutions/insurance-portals
mkdir -p aivanceworks-website/public/images/solutions/e-commerce-websites
```

- [ ] **Step 2: Research and download Patient Portals photos**

Search Unsplash for:
- Hero: "nurse tablet patient portal" or "clinician using digital health" — need a modern clinical setting with technology visible
- Feature 1: "patient mobile health app" or "patient viewing medical results" — focus on the patient perspective
- Feature 2: "doctor patient telehealth" or "healthcare team technology" — human interaction with tech

Download to:
- `public/images/solutions/patient-portals/hero.jpg`
- `public/images/solutions/patient-portals/feature-1.jpg`
- `public/images/solutions/patient-portals/feature-2.jpg`

Requirements: landscape orientation, minimum 1200px wide, no watermarks, Unsplash license.

- [ ] **Step 3: Research and download Insurance Portals photos**

Search Unsplash for:
- Hero: "insurance professional workstation" or "business advisor office" — modern corporate setting
- Feature 1: "business analytics dashboard" or "data analysis professional" — digital dashboard context
- Feature 2: "client advisor meeting" or "business consultation laptop" — human interaction

Download to:
- `public/images/solutions/insurance-portals/hero.jpg`
- `public/images/solutions/insurance-portals/feature-1.jpg`
- `public/images/solutions/insurance-portals/feature-2.jpg`

- [ ] **Step 4: Research and download E-commerce photos**

Search Unsplash for:
- Hero: "ecommerce warehouse fulfillment" or "online retail operations" — the business side
- Feature 1: "mobile shopping app" or "person browsing online store" — consumer perspective
- Feature 2: "ecommerce analytics dashboard" or "retail data analysis" — performance metrics

Download to:
- `public/images/solutions/e-commerce-websites/hero.jpg`
- `public/images/solutions/e-commerce-websites/feature-1.jpg`
- `public/images/solutions/e-commerce-websites/feature-2.jpg`

- [ ] **Step 5: Commit photos**

```bash
git add public/images/solutions/
git commit -m "feat: add Unsplash photos for solution page imagery (hero + features)"
```

---

## Task 7: Add Image Data to Solution Page Data Files

**Files:**
- Modify: `src/data/solutions/patient-portals.ts`
- Modify: `src/data/solutions/insurance-portals.ts`
- Modify: `src/data/solutions/e-commerce-websites.ts`

- [ ] **Step 1: Add heroImage and imageFeatures to patient-portals.ts**

In the `hero` block, add:

```typescript
hero: {
  // ... existing fields ...
  heroImage: {
    src: '/images/solutions/patient-portals/hero.jpg',
    alt: 'Clinician reviewing patient records on a tablet in a modern healthcare facility',
  },
},
```

Add `'imageFeatures'` to the `composition` array — place it after `'featureGrid'` and before `'complianceSpotlight'`:

```typescript
composition: [
  'hero',
  'metricsStrip',
  'featureGrid',
  'imageFeatures',
  'complianceSpotlight',
  // ... rest unchanged
],
```

Add the `imageFeatures` data:

```typescript
imageFeatures: [
  {
    heading: 'Real-Time Lab Results at Your Patients\' Fingertips',
    description:
      'Patients see lab values the moment they\'re released by the provider. No more waiting for phone calls or paper mail — instant access builds trust and reduces inbound support calls.',
    image: {
      src: '/images/solutions/patient-portals/feature-1.jpg',
      alt: 'Patient reviewing lab results on a mobile health app',
    },
  },
  {
    heading: 'Secure Messaging That Meets HIPAA Standards',
    description:
      'HIPAA-compliant chat between patients and care teams with attachment support, read receipts, and audit trails. Keeps communication inside the portal instead of leaking to unsecured email.',
    image: {
      src: '/images/solutions/patient-portals/feature-2.jpg',
      alt: 'Doctor and patient communicating through a secure telehealth session',
    },
  },
],
```

- [ ] **Step 2: Add heroImage and imageFeatures to insurance-portals.ts**

In the `hero` block, add:

```typescript
heroImage: {
  src: '/images/solutions/insurance-portals/hero.jpg',
  alt: 'Insurance advisor reviewing policy details on a modern workstation',
},
```

Add `'imageFeatures'` to `composition` (after `'featureGrid'`).

Add `imageFeatures` data:

```typescript
imageFeatures: [
  {
    heading: 'Claims Processing in Minutes, Not Weeks',
    description:
      'Adjusters review, approve, and route claims from a single dashboard with built-in compliance checks. Automation handles the routine, humans handle the exceptions.',
    image: {
      src: '/images/solutions/insurance-portals/feature-1.jpg',
      alt: 'Claims professional reviewing an analytics dashboard with policy data',
    },
  },
  {
    heading: 'Self-Service That Policyholders Actually Use',
    description:
      'Policyholders manage coverage, file claims, and track status without calling an agent. Designed for adoption — not just built and abandoned.',
    image: {
      src: '/images/solutions/insurance-portals/feature-2.jpg',
      alt: 'Client and insurance advisor meeting with a laptop showing policy details',
    },
  },
],
```

- [ ] **Step 3: Add heroImage and imageFeatures to e-commerce-websites.ts**

In the `hero` block, add:

```typescript
heroImage: {
  src: '/images/solutions/e-commerce-websites/hero.jpg',
  alt: 'E-commerce fulfillment operation with digital inventory management',
},
```

Add `'imageFeatures'` to `composition` (after `'featureGrid'`).

Add `imageFeatures` data:

```typescript
imageFeatures: [
  {
    heading: 'Storefronts That Convert, Not Just Display',
    description:
      'AI-powered product recommendations, dynamic pricing, and optimized checkout flows. Every storefront decision is backed by conversion data, not guesswork.',
    image: {
      src: '/images/solutions/e-commerce-websites/feature-1.jpg',
      alt: 'Shopper browsing products on a mobile e-commerce application',
    },
  },
  {
    heading: 'Real-Time Analytics You Can Act On',
    description:
      'Conversion funnels, cart abandonment tracking, and revenue dashboards — all in one place. See what\'s working, what\'s not, and where to invest next.',
    image: {
      src: '/images/solutions/e-commerce-websites/feature-2.jpg',
      alt: 'E-commerce performance dashboard showing conversion analytics and revenue data',
    },
  },
],
```

- [ ] **Step 4: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds. Solution pages now render hero images and ImageFeature sections.

- [ ] **Step 5: Commit**

```bash
git add src/data/solutions/
git commit -m "feat(solutions): add heroImage and imageFeatures data for all 3 solution pages"
```

---

## Task 8: Create Discovery Hero Illustration (SVG)

**Files:**
- Create: `src/components/signature/DiscoveryHeroIllustration.tsx`
- Modify: `src/components/signature/index.ts`

- [ ] **Step 1: Create the inline SVG illustration**

Create `src/components/signature/DiscoveryHeroIllustration.tsx`:

```typescript
/**
 * DiscoveryHeroIllustration — abstract SVG for Product Discovery hero.
 * Visual concept: question mark → magnifying glass → validated target → checkmark.
 * Uses currentColor and CSS vars for theme awareness per constitution §11.2.
 */

export const DiscoveryHeroIllustration = () => (
  <div className="w-full max-w-md mx-auto" role="img" aria-label="Product discovery process: from question to validated plan">
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <title>Product Discovery Process</title>
      <desc>An abstract illustration showing the journey from an uncertain idea through research and validation to a confirmed plan.</desc>

      {/* Background glow */}
      <defs>
        <radialGradient id="disc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="disc-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.3" />
          <stop offset="50%" stopColor="var(--brand-500)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="150" rx="180" ry="120" fill="url(#disc-glow)" />

      {/* Node 1: Question / Idea */}
      <circle cx="80" cy="150" r="38" stroke="var(--brand-400)" strokeWidth="2" fill="none" opacity="0.4" />
      <circle cx="80" cy="150" r="28" stroke="var(--brand-400)" strokeWidth="2.5" fill="var(--brand-500)" fillOpacity="0.1" />
      <text x="80" y="158" textAnchor="middle" fill="var(--brand-300)" fontSize="28" fontWeight="700">?</text>
      <text x="80" y="205" textAnchor="middle" fill="var(--text-subtle)" fontSize="11" fontWeight="500">Idea</text>

      {/* Connector 1→2 */}
      <path d="M120 150 L170 150" stroke="url(#disc-line)" strokeWidth="2" strokeDasharray="6 4" />
      <polygon points="168,145 178,150 168,155" fill="var(--brand-400)" opacity="0.6" />

      {/* Node 2: Search / Validate */}
      <circle cx="210" cy="140" r="30" stroke="var(--brand-500)" strokeWidth="2.5" fill="var(--brand-500)" fillOpacity="0.08" />
      <line x1="232" y1="160" x2="252" y2="178" stroke="var(--brand-400)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="210" cy="140" r="14" stroke="var(--brand-400)" strokeWidth="2" fill="none" />
      {/* Orbiting dots */}
      <circle cx="185" cy="118" r="4" fill="var(--accent-400)" opacity="0.6" />
      <circle cx="240" cy="125" r="3" fill="var(--brand-300)" opacity="0.5" />
      <circle cx="195" cy="170" r="3.5" fill="var(--accent-400)" opacity="0.5" />
      <text x="210" y="210" textAnchor="middle" fill="var(--text-subtle)" fontSize="11" fontWeight="500">Validate</text>

      {/* Connector 2→3 */}
      <path d="M252 150 L295 150" stroke="url(#disc-line)" strokeWidth="2" strokeDasharray="6 4" />
      <polygon points="293,145 303,150 293,155" fill="var(--accent-400)" opacity="0.6" />

      {/* Node 3: Confirmed / Ship */}
      <circle cx="335" cy="150" r="32" stroke="var(--accent-400)" strokeWidth="2.5" fill="var(--accent-500)" fillOpacity="0.12" />
      <polyline points="320,150 330,160 352,138" stroke="var(--accent-400)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="335" y="205" textAnchor="middle" fill="var(--text-subtle)" fontSize="11" fontWeight="500">Ship</text>

      {/* Decorative particles */}
      <circle cx="140" cy="100" r="2" fill="var(--brand-400)" opacity="0.3" />
      <circle cx="270" cy="95" r="2.5" fill="var(--accent-400)" opacity="0.3" />
      <circle cx="160" cy="200" r="2" fill="var(--brand-300)" opacity="0.25" />
      <circle cx="300" cy="210" r="1.5" fill="var(--accent-300)" opacity="0.25" />
    </svg>
  </div>
);
```

- [ ] **Step 2: Export from signature barrel**

Add to `src/components/signature/index.ts`:

```typescript
export { DiscoveryHeroIllustration } from './DiscoveryHeroIllustration';
```

- [ ] **Step 3: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/signature/DiscoveryHeroIllustration.tsx src/components/signature/index.ts
git commit -m "feat: add Discovery hero SVG illustration (idea → validate → ship)"
```

---

## Task 9: Create MVP Hero Illustration (SVG)

**Files:**
- Create: `src/components/signature/MvpHeroIllustration.tsx`
- Modify: `src/components/signature/index.ts`

- [ ] **Step 1: Create the inline SVG illustration**

Create `src/components/signature/MvpHeroIllustration.tsx`:

```typescript
/**
 * MvpHeroIllustration — abstract SVG for MVP Development hero.
 * Visual concept: rocket launch → iterative orbit loops → orbit stabilized.
 * Uses currentColor and CSS vars for theme awareness per constitution §11.2.
 */

export const MvpHeroIllustration = () => (
  <div className="w-full max-w-md mx-auto" role="img" aria-label="MVP development: rapid launch and iterative improvement">
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <title>MVP Development Process</title>
      <desc>An abstract illustration showing a rocket launch followed by iterative development cycles, representing rapid MVP delivery.</desc>

      <defs>
        <radialGradient id="mvp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mvp-trail" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="155" rx="185" ry="125" fill="url(#mvp-glow)" />

      {/* Launch trail */}
      <path d="M70 240 Q120 180 145 130" stroke="url(#mvp-trail)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Rocket body */}
      <g transform="translate(140, 100) rotate(-35)">
        <path d="M0 15 L8 0 L16 15 L12 15 L12 30 L4 30 L4 15 Z" fill="var(--brand-500)" fillOpacity="0.8" stroke="var(--brand-400)" strokeWidth="1.5" />
        <rect x="4" y="18" width="8" height="4" rx="1" fill="var(--accent-400)" fillOpacity="0.7" />
        {/* Flame */}
        <path d="M5 30 L8 40 L11 30" fill="var(--accent-400)" fillOpacity="0.6" />
      </g>

      {/* Iteration orbit 1 (sprint loop) */}
      <ellipse cx="230" cy="140" rx="55" ry="35" stroke="var(--brand-400)" strokeWidth="1.5" fill="none" opacity="0.25" strokeDasharray="4 4" />
      {/* Sprint markers on orbit */}
      <circle cx="176" cy="140" r="5" fill="var(--brand-500)" fillOpacity="0.6" stroke="var(--brand-400)" strokeWidth="1.5" />
      <text x="176" y="143" textAnchor="middle" fill="var(--brand-200)" fontSize="6" fontWeight="700">1</text>
      <circle cx="230" cy="105" r="5" fill="var(--brand-500)" fillOpacity="0.6" stroke="var(--brand-400)" strokeWidth="1.5" />
      <text x="230" y="108" textAnchor="middle" fill="var(--brand-200)" fontSize="6" fontWeight="700">2</text>
      <circle cx="284" cy="140" r="5" fill="var(--brand-500)" fillOpacity="0.6" stroke="var(--brand-400)" strokeWidth="1.5" />
      <text x="284" y="143" textAnchor="middle" fill="var(--brand-200)" fontSize="6" fontWeight="700">3</text>

      {/* Iteration orbit 2 (wider = later sprints) */}
      <ellipse cx="280" cy="150" rx="70" ry="45" stroke="var(--accent-400)" strokeWidth="1.5" fill="none" opacity="0.2" strokeDasharray="5 5" />
      <circle cx="350" cy="150" r="5" fill="var(--accent-500)" fillOpacity="0.6" stroke="var(--accent-400)" strokeWidth="1.5" />
      <text x="350" y="153" textAnchor="middle" fill="var(--accent-200)" fontSize="6" fontWeight="700">4</text>

      {/* V1 destination node */}
      <circle cx="330" cy="100" r="22" stroke="var(--accent-400)" strokeWidth="2.5" fill="var(--accent-500)" fillOpacity="0.1" />
      <text x="330" y="97" textAnchor="middle" fill="var(--accent-300)" fontSize="12" fontWeight="700">V1</text>
      <text x="330" y="109" textAnchor="middle" fill="var(--accent-400)" fontSize="7" fontWeight="500">LAUNCH</text>

      {/* Labels */}
      <text x="70" y="258" fill="var(--text-subtle)" fontSize="11" fontWeight="500">Kickoff</text>
      <text x="200" y="210" textAnchor="middle" fill="var(--text-subtle)" fontSize="11" fontWeight="500">Sprint Cycles</text>
      <text x="330" y="138" textAnchor="middle" fill="var(--text-subtle)" fontSize="11" fontWeight="500">Ship</text>

      {/* Decorative particles */}
      <circle cx="95" cy="190" r="2" fill="var(--brand-300)" opacity="0.3" />
      <circle cx="310" cy="200" r="2.5" fill="var(--accent-400)" opacity="0.25" />
      <circle cx="180" cy="80" r="1.5" fill="var(--brand-400)" opacity="0.3" />
    </svg>
  </div>
);
```

- [ ] **Step 2: Export from signature barrel**

Add to `src/components/signature/index.ts`:

```typescript
export { MvpHeroIllustration } from './MvpHeroIllustration';
```

- [ ] **Step 3: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/signature/MvpHeroIllustration.tsx src/components/signature/index.ts
git commit -m "feat: add MVP hero SVG illustration (rocket → sprint orbits → V1 launch)"
```

---

## Task 10: Wire Hero Illustrations into Service Pages

**Files:**
- Modify: `src/app/services/product-discovery/page.tsx`
- Modify: `src/app/services/mvp-development/page.tsx`
- Modify: `src/data/services/product-discovery.ts`
- Modify: `src/data/services/mvp-development.ts`

- [ ] **Step 1: Move hero metrics to metricsStrip in product-discovery data**

In `src/data/services/product-discovery.ts`, the `hero.metrics` array needs to stay as `metricsStrip` data. Check the current data file — if `hero.metrics` exists and `metricsStrip` is already populated, the hero metrics can be removed. If `metricsStrip` is empty or absent, copy the `hero.metrics` values to `metricsStrip` and delete `hero.metrics`.

The key change: ensure `metricsStrip` is in the `composition` array (it already is at position 1), and remove `metrics` from the `hero` block so the Hero component uses the illustration instead.

- [ ] **Step 2: Same for mvp-development data**

Same migration — `hero.metrics` → `metricsStrip`, remove `metrics` from hero block.

- [ ] **Step 3: Update product-discovery page to pass heroIllustration**

In `src/app/services/product-discovery/page.tsx`, import the illustration and pass it to the template:

```typescript
import { DiscoveryBeforeAfter, DiscoveryHeroIllustration } from '@/components/signature';

// ... in the JSX:
<ServiceDetailTemplate
  data={data}
  signature={<DiscoveryBeforeAfter />}
  heroIllustration={<DiscoveryHeroIllustration />}
/>
```

- [ ] **Step 4: Update mvp-development page to pass heroIllustration**

In `src/app/services/mvp-development/page.tsx`:

```typescript
import { MvpDualTrackRoadmap, MvpHeroIllustration } from '@/components/signature';

// ... in the JSX:
<ServiceDetailTemplate
  data={data}
  signature={<MvpDualTrackRoadmap />}
  heroIllustration={<MvpHeroIllustration />}
/>
```

- [ ] **Step 5: Verify the build compiles and pages render**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -10`
Expected: Build succeeds. Service pages now show SVG illustrations in hero, metrics in strip below.

- [ ] **Step 6: Commit**

```bash
git add src/app/services/ src/data/services/
git commit -m "feat(services): wire hero illustrations, migrate hero metrics to MetricsStrip"
```

---

## Task 11: Create Scroll Animation Hook and CSS

**Files:**
- Create: `src/hooks/useScrollReveal.ts`
- Create: `src/styles/scroll-animations.css`
- Modify: `src/styles/globals.css`

- [ ] **Step 1: Create the IntersectionObserver hook**

Create `src/hooks/useScrollReveal.ts`:

```typescript
'use client';

import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the ref element.
 * When the element enters the viewport, adds the `revealed` class.
 * Respects prefers-reduced-motion by applying the class immediately.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: options?.rootMargin ?? '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return ref;
}
```

- [ ] **Step 2: Create scroll animation keyframes CSS**

Create `src/styles/scroll-animations.css`:

```css
/* ─── Scroll-Triggered Step Reveals ─── */

.scroll-step {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-step.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children within a revealed container */
.scroll-stagger.revealed > * {
  opacity: 0;
  transform: translateY(16px);
  animation: stagger-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.scroll-stagger.revealed > *:nth-child(1) { animation-delay: 0ms; }
.scroll-stagger.revealed > *:nth-child(2) { animation-delay: 100ms; }
.scroll-stagger.revealed > *:nth-child(3) { animation-delay: 200ms; }
.scroll-stagger.revealed > *:nth-child(4) { animation-delay: 300ms; }
.scroll-stagger.revealed > *:nth-child(5) { animation-delay: 400ms; }
.scroll-stagger.revealed > *:nth-child(6) { animation-delay: 500ms; }

@keyframes stagger-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Connector line draw animation */
.scroll-connector {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.revealed .scroll-connector {
  transform: scaleX(1);
}

/* Reduced motion override */
@media (prefers-reduced-motion: reduce) {
  .scroll-step,
  .scroll-stagger > *,
  .scroll-connector {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
    transition: none !important;
  }
}
```

- [ ] **Step 3: Import scroll-animations.css in globals.css**

Add at the end of `src/styles/globals.css`, before the closing reduced-motion block:

```css
@import './scroll-animations.css';
```

- [ ] **Step 4: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useScrollReveal.ts src/styles/scroll-animations.css src/styles/globals.css
git commit -m "feat: add scroll reveal hook and staggered step animation CSS"
```

---

## Task 12: Add Scroll Animations to ProcessTimeline

**Files:**
- Modify: `src/components/shared/sections/ProcessTimeline.tsx:1-82`

- [ ] **Step 1: Convert to client component and add scroll reveal**

The component needs `useScrollReveal` which is a client hook. Add `'use client'` directive and apply the stagger animation to the grid:

```typescript
'use client';

import { Clock, FileText, ArrowRight } from 'lucide-react';
import { Section, Container, StepBadge } from '@/components/shared/primitives';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// ... existing interfaces unchanged ...

export const ProcessTimeline = ({
  title = 'Our Implementation Process',
  subtitle,
  eyebrow,
  steps,
  tone = 'light',
  className,
}: ProcessTimelineProps) => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section tone={tone} size="md" className={className}>
      <Container>
        <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div
          ref={gridRef}
          className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 scroll-stagger"
        >
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="h-full bg-surface-white border border-border-light rounded-xl shadow-card-sm p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <StepBadge step={idx + 1} />
                  <div className="flex items-center text-xs md:text-sm text-text-muted">
                    <Clock className="h-4 w-4 mr-1 flex-shrink-0" aria-hidden="true" />
                    {step.duration}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-text-heading mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-text-body mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="flex items-start gap-2 text-xs md:text-sm pt-3 border-t border-border-light">
                  <FileText
                    className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-text-muted">{step.deliverable}</span>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-border-hover" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
```

- [ ] **Step 2: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds. ProcessTimeline now animates in on scroll.

- [ ] **Step 3: Commit**

```bash
git add src/components/shared/sections/ProcessTimeline.tsx
git commit -m "feat(ProcessTimeline): add scroll-triggered stagger animation"
```

---

## Task 13: Make DiscoveryBeforeAfter Interactive

**Files:**
- Modify: `src/components/signature/DiscoveryBeforeAfter.tsx:1-145`

- [ ] **Step 1: Add client-side interactivity**

Convert to client component. Add hover reveal and click-to-expand behavior to artifact cards:

```typescript
'use client';

import { useState } from 'react';
import { HelpCircle, FileText, Layers, CircleCheck, AlertTriangle } from 'lucide-react';
import { Section, Container, IconTile } from '@/components/shared/primitives';
import { cn } from '@/lib/utils';

interface Artifact {
  icon: typeof HelpCircle;
  label: string;
  format: string;
  description: string;
  preview: React.ReactNode;
}

const ARTIFACTS: Artifact[] = [
  {
    icon: HelpCircle,
    label: 'Problem Canvas',
    format: 'PDF · validated',
    description: 'Maps the problem space: who\'s affected, what they\'ve tried, what success looks like. Validated with 5+ stakeholder interviews.',
    preview: (
      <div className="grid grid-cols-2 gap-1.5 h-full p-2">
        <div className="bg-brand-500/20 rounded" />
        <div className="bg-brand-500/20 rounded" />
        <div className="bg-brand-500/20 rounded" />
        <div className="bg-brand-500/20 rounded" />
      </div>
    ),
  },
  {
    icon: Layers,
    label: 'Persona Board',
    format: 'Figma · 3 personas',
    description: 'Data-backed personas with jobs-to-be-done, pain points, and behavioral triggers. Not demographic fiction — real user patterns.',
    preview: (
      <div className="flex flex-col gap-1.5 p-3">
        <div className="h-1.5 bg-accent-400/40 rounded w-4/5" />
        <div className="h-1.5 bg-accent-400/40 rounded w-3/5" />
        <div className="h-1.5 bg-brand-400/60 rounded w-4/5" />
      </div>
    ),
  },
  {
    icon: FileText,
    label: 'Prioritized Backlog',
    format: 'Linear · MoSCoW',
    description: 'Every feature ranked by impact and effort using MoSCoW. Your engineering team knows exactly what to build first.',
    preview: (
      <div className="flex flex-col gap-1 p-2.5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 bg-brand-400/60 rounded"
            style={{ width: `${100 - i * 12}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: CircleCheck,
    label: 'Tech Spike Matrix',
    format: 'Markdown · tested',
    description: 'Key technical risks tested and documented. Each spike has a verdict: proven, risky, or blocked — with mitigation paths.',
    preview: (
      <div className="grid grid-cols-4 gap-1 p-2.5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-full ${
              i % 2 === 0 ? 'bg-brand-500' : 'bg-brand-500/50'
            }`}
          />
        ))}
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    label: 'Risk Register',
    format: 'Sheet · mitigated',
    description: 'Every identified risk with likelihood, impact, and a concrete mitigation plan. No surprises in sprint 3.',
    preview: (
      <div className="flex flex-col gap-1.5 p-2.5">
        {[
          'bg-brand-600',
          'bg-brand-500',
          'bg-brand-400',
          'bg-brand-400/60',
        ].map((color, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
            <span className="h-1 flex-1 bg-[color:var(--glass-bg)] rounded" />
          </div>
        ))}
      </div>
    ),
  },
];

export interface DiscoveryBeforeAfterProps {
  headline?: string;
  subhead?: string;
}

export const DiscoveryBeforeAfter = ({
  headline = 'Day 14 — Five artifacts, ready to act on',
  subhead = 'Every discovery sprint ends with concrete deliverables your team can ship against on Monday morning.',
}: DiscoveryBeforeAfterProps) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <Section tone="dark" size="md" withGrid>
      <Container>
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            What you walk out with
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
            {headline}
          </h2>
          <p className="text-base md:text-lg text-text-subtle leading-relaxed">{subhead}</p>
        </div>

        <div className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {ARTIFACTS.map((artifact, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setExpandedIdx(isExpanded ? null : idx);
                  }
                }}
                className={cn(
                  'text-left bg-[color:var(--glass-bg)] border rounded-xl p-4 md:p-5 transition-all duration-300 cursor-pointer',
                  isExpanded
                    ? 'border-brand-400/50 bg-brand-500/10 ring-1 ring-brand-400/20'
                    : 'border-[color:var(--glass-border)] hover:bg-[color:var(--glass-hover)] hover:border-brand-400/30'
                )}
                aria-expanded={isExpanded}
              >
                <IconTile icon={artifact.icon} size="sm" variant="glass" className="mb-3" />
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isExpanded ? 'h-0 opacity-0 mb-0' : 'h-16 md:h-20 opacity-100 mb-3'
                  )}
                  aria-hidden="true"
                >
                  <div className="h-full bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-md overflow-hidden">
                    {artifact.preview}
                  </div>
                </div>
                <div className={cn(
                  'overflow-hidden transition-all duration-300',
                  isExpanded ? 'max-h-40 opacity-100 mb-3' : 'max-h-0 opacity-0'
                )}>
                  <p className="text-sm text-text-subtle leading-relaxed">
                    {artifact.description}
                  </p>
                </div>
                <div className="text-sm md:text-base font-semibold text-text-light leading-tight mb-1">
                  {artifact.label}
                </div>
                <div className="text-xs text-text-subtle uppercase tracking-wide">
                  {artifact.format}
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-center text-xs text-text-subtle mt-6 opacity-60">
          Click any artifact to learn more
        </p>
      </Container>
    </Section>
  );
};
```

- [ ] **Step 2: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/signature/DiscoveryBeforeAfter.tsx
git commit -m "feat(DiscoveryBeforeAfter): add interactive click-to-expand artifact cards"
```

---

## Task 14: Make MvpDualTrackRoadmap Interactive

**Files:**
- Modify: `src/components/signature/MvpDualTrackRoadmap.tsx:1-169`

- [ ] **Step 1: Add client-side interactivity**

Convert to client component. Add hover/click behavior that highlights phases and shows expanded descriptions:

```typescript
'use client';

import { useState } from 'react';
import { Section, Container } from '@/components/shared/primitives';
import { cn } from '@/lib/utils';

interface RoadmapPhase {
  weekLabel: string;
  phaseTitle: string;
  engineeringWork: string[];
  demoLabel: string;
  demoName: string;
  demoDescription: string;
  isLaunch?: boolean;
}

const PHASES: RoadmapPhase[] = [
  {
    weekLabel: 'Week 1',
    phaseTitle: 'Kickoff',
    engineeringWork: [
      'Scope lock & success criteria',
      'CI/CD + infra baseline',
      'Sprint 0 walkthrough',
    ],
    demoLabel: 'Demo 1',
    demoName: 'Working shell deployed',
    demoDescription: 'Live URL, auth stub, deploy pipeline',
  },
  {
    weekLabel: 'Weeks 2–4',
    phaseTitle: 'Core Build',
    engineeringWork: [
      'Auth + user model',
      'Primary data flows',
      'Happy-path UI',
    ],
    demoLabel: 'Demos 2–4',
    demoName: 'End-to-end happy path',
    demoDescription: 'A user can sign up & complete the primary job',
  },
  {
    weekLabel: 'Weeks 5–8',
    phaseTitle: 'Real Users',
    engineeringWork: [
      'Closed beta cohort',
      'Feedback loop & issue triage',
      'Weekly iteration cycles',
    ],
    demoLabel: 'Demos 5–8',
    demoName: 'Real usage data',
    demoDescription: 'Metrics dashboard with actual cohort behaviour',
  },
  {
    weekLabel: 'Weeks 9–11',
    phaseTitle: 'Harden',
    engineeringWork: [
      'Performance + observability',
      'Security review',
      'Billing + onboarding',
    ],
    demoLabel: 'Demos 9–11',
    demoName: 'Prod-ready walkthrough',
    demoDescription: 'Runbook, SLOs, security & billing live',
  },
  {
    weekLabel: 'Week 12',
    phaseTitle: 'V1 Launch',
    engineeringWork: [
      'Public deploy',
      'Handover & training',
      'Post-launch metrics setup',
    ],
    demoLabel: 'Launch',
    demoName: 'Paying customers',
    demoDescription: 'V1 live, support playbook, metrics tracking',
    isLaunch: true,
  },
];

export const MvpDualTrackRoadmap = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <Section tone="dark" size="md" withGrid>
      <Container>
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            A roadmap that shows both tracks
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
            12 weeks. 12 demos. Real users by week 5.
          </h2>
          <p className="text-base md:text-lg text-text-subtle leading-relaxed">
            Top track is engineering&apos;s view. Bottom track is your view — working software,
            demos, real users — every phase.
          </p>
        </div>

        <div className="hidden md:flex items-center justify-between text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
          <span className="text-brand-400">↑ Engineering track</span>
          <span className="text-accent-400">↓ Your view (demos & deliverables)</span>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[4%] right-[4%] top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-brand-500/30 via-brand-500 to-accent-500 rounded-full"
          />

          <div className="grid gap-5 md:gap-4 grid-cols-1 md:grid-cols-5 relative">
            {PHASES.map((phase, idx) => {
              const isActive = activePhase === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  className={cn(
                    'flex flex-col text-left transition-all duration-300 cursor-pointer',
                    isActive ? 'scale-[1.03] z-10' : 'hover:scale-[1.01]',
                    activePhase !== null && !isActive && 'opacity-50'
                  )}
                  onClick={() => setActivePhase(isActive ? null : idx)}
                  aria-expanded={isActive}
                  aria-label={`Phase: ${phase.phaseTitle} — ${phase.weekLabel}`}
                >
                  <div className={cn(
                    'bg-[color:var(--glass-bg)] border border-b-0 rounded-t-xl p-4 md:p-5 transition-colors',
                    isActive
                      ? 'border-brand-400/50 bg-brand-500/10'
                      : 'border-[color:var(--glass-border)] hover:bg-[color:var(--glass-hover)]'
                  )}>
                    <div className="inline-block px-2 py-0.5 rounded-full bg-brand-500/25 text-brand-300 text-xs font-bold uppercase tracking-wide mb-2">
                      {phase.weekLabel}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-text-light mb-2 leading-tight">
                      {phase.phaseTitle}
                    </h3>
                    <ul className="space-y-1">
                      {phase.engineeringWork.map((work, workIdx) => (
                        <li
                          key={workIdx}
                          className="text-xs md:text-sm text-text-subtle leading-snug pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-brand-400 before:font-bold"
                        >
                          {work}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="h-6 flex items-center justify-center relative"
                    aria-hidden="true"
                  >
                    <div
                      className={cn(
                        'w-4 h-4 rounded-full border-4 border-surface-dark transition-all duration-300',
                        phase.isLaunch ? 'bg-accent-400' : 'bg-brand-500',
                        isActive && 'scale-150'
                      )}
                      style={{
                        boxShadow: isActive
                          ? '0 0 0 6px rgba(59,130,246,0.4), 0 0 20px rgba(59,130,246,0.9)'
                          : phase.isLaunch
                            ? '0 0 0 4px rgba(99,102,241,0.35), 0 0 16px rgba(99,102,241,0.8)'
                            : '0 0 0 3px rgba(59,130,246,0.2)',
                      }}
                    />
                  </div>

                  <div className={cn(
                    'bg-[color:var(--glass-bg)] border border-t-0 rounded-b-xl p-4 md:p-5 transition-colors',
                    isActive
                      ? 'border-accent-400/50 bg-accent-500/10'
                      : 'border-[color:var(--glass-border)] hover:bg-[color:var(--glass-hover)]'
                  )}>
                    <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent-400 mb-1">
                      <span aria-hidden="true">▶</span> {phase.demoLabel}
                    </div>
                    <div className="text-sm md:text-base font-bold text-text-light mb-1 leading-tight">
                      {phase.demoName}
                    </div>
                    <div className="text-xs md:text-sm text-text-subtle leading-snug">
                      {phase.demoDescription}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-center text-xs text-text-subtle mt-6 opacity-60">
          Click any phase to focus
        </p>
      </Container>
    </Section>
  );
};
```

- [ ] **Step 2: Verify the build compiles**

Run: `cd aivanceworks-website && npx next build 2>&1 | tail -5`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/signature/MvpDualTrackRoadmap.tsx
git commit -m "feat(MvpDualTrackRoadmap): add interactive phase focus on click"
```

---

## Task 15: Update Constitution and Memory

**Files:**
- Modify: `docs/design-system/services-solutions-constitution.md`
- Modify: `memory/todos/imagery_strategy.md`

- [ ] **Step 1: Update constitution §11 with the two-track imagery approach**

In Section 11 of the constitution (after §11.3), add a new subsection:

```markdown
### 11.5 Two-track imagery strategy (v1.1)

**Rationale:** Brainstormed and approved 2026-04-10. Solution pages sell domain expertise to industry buyers — photos build "they understand our world" trust. Service pages sell abstract processes — stock photos add nothing; illustrations and interactivity communicate the value better.

**Solution pages** (`/solutions/*`):
- **Hero:** Split layout — text left, Unsplash photo right (color-graded per §11.3)
- **Mid-page:** 2-3 `ImageFeature` sections with alternating text/image layout
- **Photo criteria:** §11.3 applies. Human faces preferred, industry-appropriate, diverse, no clichés.

**Service pages** (`/services/*`):
- **Hero:** Split layout — text left, inline SVG illustration right (themed per service)
- **Mid-page:** 3-5 spot SVG illustrations at key sections (replacing Lucide icons at anchor points)
- **Animations:** Scroll-triggered step reveals on ProcessTimeline and methodology sections
- **Signatures:** Interactive — click-to-expand (DiscoveryBeforeAfter), phase-focus (MvpDualTrackRoadmap)
- **Metrics:** Relocated from hero to MetricsStrip below hero when illustration is present

**Driven by pages:** all 5 pilot pages.
```

- [ ] **Step 2: Update §5 to add ImageFeature to component catalog**

Add `ImageFeature` to the shared component list in Section 5 with a one-line description.

- [ ] **Step 3: Resolve §16 item 5 (animation standards)**

Update open question #5 to note partial resolution:

```markdown
5. ~~**Animation standards.**~~ **Partially resolved (v1.1).** Scroll-triggered reveals use IntersectionObserver + CSS `@keyframes` with `prefers-reduced-motion` support. Interactive signature components use CSS transitions. The `useScrollReveal` hook and `scroll-animations.css` are the reference implementations. Full motion design language (page transitions, loading states) remains deferred.
```

- [ ] **Step 4: Bump changelog to v1.1**

Add to the changelog table:

```markdown
| **1.1** | 2026-04-10 | Two-track imagery strategy: photo-driven solutions, illustration-driven services. New `ImageFeature` section component. Interactive signature components. Scroll-triggered animations. Resolves open question #5 (animation standards, partial). |
```

- [ ] **Step 5: Update imagery_strategy memory**

Update `memory/todos/imagery_strategy.md` to reflect that imagery decisions have been made and implemented:

Mark it as resolved — the decisions are now codified in the constitution v1.1 and the spec.

- [ ] **Step 6: Commit**

```bash
git add docs/design-system/services-solutions-constitution.md memory/todos/imagery_strategy.md
git commit -m "docs: update constitution v1.1 — two-track imagery strategy, resolve animation standards"
```

---

## Deferred: Spot SVG Illustrations for Service Pages

Spec §2.2 calls for 3-5 spot SVG illustrations per service page replacing Lucide icons at key feature sections. These are **deferred to a follow-up plan** after the core imagery system ships and the hero illustrations have been visually validated. The structural system (types, components, templates) built in this plan fully supports adding them later — they'd be new components in `src/components/illustrations/` imported inline into the feature/benefit sections.

---

## Task 16: Visual QA — Build and Review All Pages

- [ ] **Step 1: Run full build**

```bash
cd aivanceworks-website && npx next build
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Start dev server and visually review each page**

```bash
cd aivanceworks-website && npx next dev
```

Check each page:
- `/services/product-discovery` — SVG illustration in hero, metrics in strip below, scroll animations on timeline, interactive signature
- `/services/mvp-development` — SVG illustration in hero, metrics in strip below, scroll animations on timeline, interactive roadmap
- `/solutions/patient-portals` — Photo in hero, ImageFeature sections mid-page, rest unchanged
- `/solutions/insurance-portals` — Photo in hero, ImageFeature sections mid-page
- `/solutions/e-commerce-websites` — Photo in hero, ImageFeature sections mid-page

- [ ] **Step 3: Check mobile responsiveness**

Resize browser to 375px width and verify:
- Hero stacks vertically (text on top, image/illustration below)
- ImageFeature stacks vertically (image on top, text below)
- Interactive signatures work with touch
- Scroll animations fire correctly

- [ ] **Step 4: Check accessibility**

- Tab through interactive signature components — focus visible?
- Screen reader announces expanded/collapsed state?
- `prefers-reduced-motion: reduce` disables all animations?

- [ ] **Step 5: Final commit if any fixes needed**

```bash
git add -A && git commit -m "fix: visual QA adjustments for imagery implementation"
```
