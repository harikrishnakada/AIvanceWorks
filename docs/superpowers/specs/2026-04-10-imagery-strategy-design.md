# Imagery Strategy for Services & Solutions Pilot Pages

**Created:** 2026-04-10
**Status:** Approved
**Scope:** 5 pilot pages — 2 services, 3 solutions

---

## Overview

This spec defines the per-page imagery strategy for the 5 pilot pages in the services/solutions design system. It establishes two distinct visual treatments: **photo-driven** for solution pages (industry trust) and **illustration-driven** for service pages (process clarity + interactivity). All decisions align with the constitution (§11) and extend it with new components and patterns.

---

## 1. Solution Pages — Photo-Driven

**Pages:** Patient Portals, Insurance Portals, E-commerce Websites

### 1.1 Hero Treatment — Full-Bleed Background Image in Box Card (REVISED)

> **Revised 2026-04-10:** Changed from split layout to full-bleed background. Removed CSS color filters.

- Hero renders inside a **box card** matching the homepage: `rounded-2xl lg:rounded-3xl`, `border border-white/[0.06]`, `shadow-brand-panel`, glow orbs, grid overlay.
- Photo covers the entire card as a **background image** at `opacity-40` using `fill` + `object-cover`.
- A **left-to-right gradient scrim** (`from-[var(--surface-dark-from)]/90 via-[var(--surface-dark-via)]/70 to-transparent`) ensures text readability on the left while showing the photo on the right.
- A **bottom fade** gradient blends the card into the next section.
- Content overlaid on the left side (`max-w-2xl`): badge, headline, subhead, CTAs, inline metrics.
- Metrics render **inline below CTAs** with a `border-t` divider — not in a separate MetricsCard.
- Photos display at **original colors** — no CSS filters (saturate, contrast, sepia, hue-rotate removed).
- Photo selection criteria per constitution §11.3:
  - Industry-appropriate scenes (clinical for healthcare, corporate for insurance, storefront/digital for e-commerce)
  - Human faces strongly preferred
  - Diversity in age, gender, ethnicity
  - No clichés (no handshakes, no blue-brain circuitry, no stacks of coins)

### 1.2 Mid-Page — ImageFeature Sections (2-3 per page)

- New `ImageFeature` component: text on one side, photo on the other
- Alternating layout: first instance text-left/image-right, second text-right/image-left, etc.
- Photos illustrate the specific feature described in the adjacent text
- Original photo colors — no CSS filters applied
- Images use `fill` + `object-cover` inside an `aspect-[3/2]` container for consistent sizing
- Next.js `<Image>` component with proper `sizes` and `alt` text per constitution §11.4

### 1.3 Photo Requirements Per Page

**Patient Portals (3-4 photos):**
- Hero: Nurse or clinician using a tablet/portal in a modern clinical setting
- Feature 1: Patient viewing lab results on a mobile device
- Feature 2: Doctor-patient interaction with technology present
- Feature 3 (optional): Secure messaging / telehealth session

**Insurance Portals (3-4 photos):**
- Hero: Insurance professional or advisor at a modern workstation
- Feature 1: Claims adjuster reviewing a digital dashboard
- Feature 2: Customer/agent meeting with laptop visible
- Feature 3 (optional): Team reviewing analytics/reports

**E-commerce Websites (3-4 photos):**
- Hero: E-commerce operation — warehouse, fulfillment, or storefront with digital overlay
- Feature 1: Shopper using mobile app or browsing a store
- Feature 2: Dashboard showing analytics/conversion data
- Feature 3 (optional): Team managing product catalog

### 1.4 Signature Components — No Changes

Existing signature components (PortalArchitectureMap, ClaimsFlowComparison, EcommerceAiShowcase) remain static diagram-based. No imagery additions.

---

## 2. Service Pages — Illustration + Interactivity Driven

**Pages:** Product Discovery, MVP Development

### 2.1 Hero Treatment — Split Layout (Text Left / SVG Illustration Right)

- Left column: badge, headline, subhead, CTAs (unchanged)
- Right column: abstract inline SVG illustration themed to the service
  - Product Discovery: stylized search/validation flow (magnifying glass → target → checkmark)
  - MVP Development: launch/iteration visual (rocket → branches → orbit)
- Metrics card **relocates** from hero to `MetricsStrip` section immediately below the hero
- SVG illustrations use `currentColor` and CSS vars per constitution §11.2
- Include `<title>` and `<desc>` for accessibility

### 2.2 Mid-Page — Spot SVG Illustrations (3-5 per page)

- Small themed SVG illustrations (~80-120px) placed beside key feature/benefit sections
- Replace Lucide icons at visually important moments (not every icon — just the ones anchoring major sections)
- Inline SVGs, `currentColor` fills, theme-aware
- Placement: inside FeatureGrid cards, BenefitsGrid items, or as standalone accents

### 2.3 Scroll-Triggered Animations

- ProcessTimeline and DiscoveryMethodology sections animate on scroll entry
- Steps fade/slide in sequentially with staggered delays
- Connector lines draw themselves (CSS `transform: scaleX()` animation)
- Icons pulse briefly on entry
- Implementation: IntersectionObserver + CSS `@keyframes`, leveraging existing `.reveal` utility in globals.css
- Respect `prefers-reduced-motion: reduce` — disable animations when set

### 2.4 Interactive Signature Components

**DiscoveryBeforeAfter:**
- Each before/after item gets hover state revealing expanded detail
- Click/tap to toggle between before and after views
- Smooth transitions between states

**MvpDualTrackRoadmap:**
- Hoverable track items showing tooltips or expanded descriptions
- Clickable phase markers to highlight the current phase
- Visual connection lines animate on interaction

---

## 3. Component Changes

### 3.1 Modified: `Hero` Component (REVISED v1.2)

```typescript
// Added to HeroProps
heroImage?: { src: string; alt: string };
heroIllustration?: ReactNode;
```

**All heroes now render inside a box card** matching the homepage style (`rounded-2xl`, `border`, `shadow-brand-panel`, glow orbs, grid overlay).

- When `heroImage` is provided: photo renders as **full-bleed background** at `opacity-40` with gradient scrim. Content overlaid on left (`max-w-2xl`). Metrics inline below CTAs.
- When `heroIllustration` is provided: two-column grid (text left, illustration right) inside the box card. Metrics inline below CTAs.
- When neither: standard layout inside box card (single column or metrics card right column).
- The `Section` primitive is no longer used for the hero — the component manages its own box card wrapper directly.

### 3.2 New: `ImageFeature` Section Component

```typescript
interface ImageFeatureProps {
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean; // text-right/image-left when true
}
```

- Responsive: side-by-side on desktop, stacked on mobile (image on top)
- Image uses Next.js `<Image>` with `sizes="(max-width: 768px) 100vw, 50vw"`
- Part of the shared section library (`components/shared/sections/ImageFeature.tsx`)

### 3.3 Modified: Type Definitions

```typescript
// In BasePageData hero block
hero: {
  // ... existing fields
  heroImage?: { src: string; alt: string };
};

// In SolutionPageData
imageFeatures?: Array<{
  heading: string;
  description: string;
  image: { src: string; alt: string };
}>;

// ServicePageData — no image fields needed (illustrations are components, not data)
```

### 3.4 Modified: Templates

- `SolutionDetailTemplate`: pass `heroImage` to Hero, render `ImageFeature` sections from data (alternating `reverse` prop)
- `ServiceDetailTemplate`: pass `heroIllustration` to Hero, ensure MetricsStrip renders below hero when illustration is present

### 3.5 New: Service Hero Illustrations

- `components/signature/DiscoveryHeroIllustration.tsx` — inline SVG
- `components/signature/MvpHeroIllustration.tsx` — inline SVG

### 3.6 New: Spot Illustration SVGs

- `components/illustrations/` directory for reusable spot SVGs
- 3-5 per service page, imported inline
- Each uses `currentColor` and includes `<title>` + `<desc>`

---

## 4. Photo Sourcing Approach (REVISED v1.2)

- Source: Unsplash (free commercial use) per constitution §11.3
- **No CSS color filters** — photos display at original colors. The hero's `opacity-40` + gradient scrim handle integration with the dark card background.
- Store photos in `public/images/solutions/{slug}/` directory
- Naming: `hero.jpg`, `feature-1.jpg`, `feature-2.jpg`, `feature-3.jpg`
- Landscape orientation, minimum 1200px wide, JPEG format
- All photos optimized via Next.js `<Image>` component with proper `sizes` attribute
- Hero photos use `fill` + `object-cover` (full-bleed background). Feature photos use `fill` + `object-cover` inside `aspect-[3/2]` containers.

---

## 5. Accessibility

- All photos: meaningful `alt` text per constitution §11.4 (describes purpose, not literal visual content)
- SVG illustrations: `<title>` and `<desc>` elements, `role="img"`, `aria-label`
- Scroll animations: respect `prefers-reduced-motion: reduce`
- Interactive signatures: keyboard-navigable (Tab, Enter/Space), focus-visible states
- ImageFeature: stacks vertically on mobile, maintains reading order

---

## 6. Performance

- Hero images: `priority={true}` for LCP optimization
- Mid-page images: lazy loaded (Next.js default)
- SVG illustrations: inline (no network request), small footprint
- CSS animations: GPU-accelerated properties only (`transform`, `opacity`)
- Photo files: WebP via Next.js, proper `sizes` to avoid oversized downloads

---

## 7. Constitution Updates Required

Record the following in the constitution as a deviation (§12):

1. **§11 amendment:** Document the two-track imagery approach (photos for solutions, illustrations for services)
2. **§5 addition:** Add `ImageFeature` to the shared component library catalog
3. **§8 addition:** Note that service signature components are interactive
4. **§16 resolution:** Animation standards (item 5) are now partially resolved — scroll-triggered reveals use IntersectionObserver + CSS keyframes with `prefers-reduced-motion` respect
5. **Bump changelog** to v1.1

---

## 8. Summary Table (REVISED v1.2)

| | Solutions (3 pages) | Services (2 pages) |
|---|---|---|
| **Hero** | Full-bleed background photo in box card | SVG illustration (right column) in box card |
| **Metrics** | Inline below CTAs in hero | Inline below CTAs in hero |
| **Mid-page imagery** | 2-3 ImageFeature sections (original colors) | Spot SVG illustrations (deferred) |
| **Animations** | Standard `.reveal` | Scroll-triggered process reveals |
| **Signatures** | Static (existing) | Interactive (hover/click) |
| **Photos total** | 9 across 3 pages | 0 |
| **New components** | ImageFeature | Hero illustrations |
| **Hero style** | Box card (`rounded-2xl`, border, glow, grid) | Box card (same) |
