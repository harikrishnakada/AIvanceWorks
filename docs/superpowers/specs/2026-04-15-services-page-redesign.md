# Spec: Services Page Redesign
Created: 2026-04-15

## Overview

Rebuild `/services` to surface every individual service from the navbar mega-menu, grouped by pillar. The current page shows 7 generic category cards from `getAllServiceCategories()`; this redesign replaces the category grid with structured pillar sections that mirror the navbar's grouping, giving users a complete, scannable index of all services.

## Goals

- Show all services already present in `NAVIGATION.servicesMenu` and `NAVIGATION.aiMlMenu` from `src/lib/constants.ts`
- Match the current website theme (white/gray body, `brand-600` blue accents, dark gradient hero)
- Fully responsive: 3-col → 2-col → 1-col grid
- Link to existing built-out service pages; surface remaining services as non-linked cards
- Preserve the "Why Choose Us" and CTA sections (already well-built)

## Data Sources

All service data comes from `NAVIGATION` in `@/lib/constants.ts` — no new data files needed.

Built-out service page slugs are keyed in `SERVICE_PAGE_MODULES` in `@/lib/content.ts`. A card links to `/services/<slug>` only if that slug exists in `SERVICE_PAGE_MODULES`.

```
SERVICE_PAGE_MODULES slugs (as of 2026-04-15):
product-discovery, mvp-development, saas-development, cloud-strategy, finops,
startup-development, mobile-development, web-app-development, application-modernization,
custom-software-development, ui-ux-design, quality-engineering, architecture-advisory,
generative-ai, cloud-migration, cloud-infrastructure, nlp-document-ai, conversational-ai,
computer-vision, devops, intelligent-automation, security-compliance,
ai-strategy-consulting, it-consulting
```

## Page Structure

### 1. Hero Section (preserve, minor tweak)

Existing dark-gradient hero. Add a one-line "jump to" anchor strip immediately below the CTA buttons:

```
Jump to: [AI Solutions] · [Software Engineering] · [Infrastructure] · [Technologies]
```

Rendered as inline anchor links styled as small muted text with `·` separators. No new component needed — inline in the hero JSX.

### 2. Pillar Nav Strip (new)

A horizontally scrollable pill row immediately below the hero. Sticks to top of viewport during scroll (below the fixed header, so `top-20`).

```
[AI Solutions]  [Software Engineering]  [Infrastructure]  [Technologies]
```

- Each pill is an `<a href="#pillar-id">` anchor
- Active state: `bg-brand-600 text-white` when section is in viewport (via `IntersectionObserver` with `threshold: 0.3`)
- Mobile: `overflow-x-auto flex gap-2 flex-nowrap` — scrollable strip, no wrap
- Desktop: centered, `flex gap-3`
- Background: `bg-white border-b border-gray-100 shadow-sm`

This is a `'use client'` component: `ServicesNavStrip.tsx` in `src/components/services/`.

### 3. Services by Pillar Sections (new)

Four `<section>` blocks with matching `id` attributes. Order:

1. `id="ai-solutions"` — AI Solutions (from `NAVIGATION.aiMlMenu`)
2. `id="software-engineering"` — Software Engineering (from `NAVIGATION.servicesMenu[0]`)
3. `id="infrastructure"` — Infrastructure (from `NAVIGATION.servicesMenu[1]`)
4. `id="technologies"` — Technologies (from `NAVIGATION.servicesMenu[2]`)

Each section:

```
[Icon] Section Title          ← same icon as mega-menu column header
      Section description     ← same description text as mega-menu
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[card] [card] [card]
[card] [card] [card]
...
```

**Section header**: `bg-gray-50` strip, `py-12`, icon in `bg-brand-50` tile, title `text-3xl font-bold`, description `text-gray-500`.

**Service card anatomy**:
- Icon (from `link.icon` in nav)
- Label (`font-semibold text-gray-900`)
- Short description — derived from the page data if the slug is built-out, otherwise a one-liner from the nav label + pillar context
- If built-out: entire card is a `<Link>` with `ArrowRight` on hover
- If not built-out: card is non-clickable, no arrow, subtle `opacity-90`
- Card border: `border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all`
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`

**Technologies section** differs: shows tech stack chips (pill badges) in a `flex flex-wrap gap-3` layout instead of cards, since these are not individual service pages. Each chip links to its `href` from the nav (its parent service page).

### 4. Why Choose Us Section (preserve as-is)

No changes. The existing 3-point numbered list + "Start Your Project" card is retained exactly.

### 5. CTA Section (preserve as-is)

No changes. The blue gradient CTA strip is retained exactly.

## Components

| Component | Path | Type |
|-----------|------|------|
| `ServicesNavStrip` | `src/components/services/ServicesNavStrip.tsx` | `'use client'` |
| `ServicePillarSection` | `src/components/services/ServicePillarSection.tsx` | Server |
| `ServiceCard` | `src/components/services/ServiceCard.tsx` | Server |
| Updated `ServicesPage` | `src/app/services/page.tsx` | Server |

## Short descriptions for non-built-out cards

For cards whose slugs are not yet in `SERVICE_PAGE_MODULES`, use a static lookup object in the page file (not a separate data file — YAGNI). Exactly 2 cards need this.

Slugs NOT in SERVICE_PAGE_MODULES (from nav):
- `platform-engineering` (Infrastructure column)
- `data-engineering` (Infrastructure column)

These two get static one-liner descriptions in the page file.

## Responsive Behaviour

| Breakpoint | Service grid | Nav strip |
|------------|-------------|-----------|
| Mobile (<640px) | 1 col | Scrollable horizontal strip |
| Tablet (640–1023px) | 2 col | Scrollable horizontal strip |
| Desktop (≥1024px) | 3 col | Centered row |

## What Is NOT Changing

- Hero section content (headline, description, CTAs)
- "Why Choose Us" section
- CTA section
- Metadata / JSON-LD schema
- `getAllServiceCategories()` data (still used by other pages/components)
- Header, footer, layout

## Acceptance Criteria

- [ ] All 26 nav services (6 AI + 12 Software Eng + 8 Infrastructure) are visible on the page
- [ ] Technologies column is rendered as chip/badge layout
- [ ] Cards with built-out pages are clickable links
- [ ] Cards without built-out pages render but are not linked
- [ ] Pillar nav strip scrolls smoothly to each section
- [ ] Active pill updates as user scrolls
- [ ] Page is responsive at 375px, 768px, and 1440px
- [ ] No TypeScript errors
- [ ] Brand name sourced from `SITE_CONFIG.name`, not hardcoded
