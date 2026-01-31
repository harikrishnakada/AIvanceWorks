# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Genesis** is the website project for **AIvanceWorks**, a US-focused software consultancy specializing in cloud, AI/ML, and end-to-end software development.

**Current State**: Moving to implementation phase. Documentation complete, ready to code.

## Key Documents

| Document | Purpose |
|----------|---------|
| `src/software-consulting-website-architecture.md` | **Master blueprint** — SEO/GEO/AEO strategy, tech stack, site map, schema markup, folder structure, and implementation prompts. **Reference this first** for any website work. |
| `src/company details/markup/*.md` | Company formation content (services, pricing, positioning, team, etc.) |

**Company Name**: AIvanceWorks — Replace `<COMPANY NAME>` placeholders in documentation with "AIvanceWorks" when generating code or copy.

## Planned Tech Stack

When implementing the website, follow the architecture doc. Summary:

- **Framework**: Next.js 15 (App Router), TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **CMS**: Sanity.io initially (with abstraction layer for future migration to Payload/MDX)
- **Hosting**: Vercel
- **Database**: Supabase (if needed)
- **Email**: Resend
- **Booking**: Cal.com
- **Analytics**: Vercel Analytics, GA4, Search Console, Microsoft Clarity

## Conventions

1. **SEO/GEO/AEO**: Every page needs unique meta tags, semantic HTML, and JSON-LD schema. Content should have clear answers in first 40-60 words.
2. **URLs**: Hyphenated, lowercase, descriptive with primary keyword.
3. **Code**: TypeScript throughout. Use patterns from the architecture doc (`constructMetadata`, dynamic sitemap, schema components in `src/lib/seo.ts`, `src/lib/schema.ts`).
4. **Content Source**: Pull website copy from `src/company details/markup/` files. Align with `10-website-content.md`.
5. **E-E-A-T**: Include author attribution, credentials, case metrics where specified.
6. **Design**: Avoid generic "AI slop" aesthetics. Create distinctive, professional styling.
7. **CMS Abstraction**: Always use `src/lib/content.ts` as the abstraction layer for fetching blog/services/case studies. Never import Sanity client directly in components or pages. This enables easy migration to Payload or MDX later.

## Implementation Quick Start

Follow these steps in order when building the website:

### 1. Project Setup
```bash
npx create-next-app@latest aivanceworks-website --typescript --tailwind --app --eslint
cd aivanceworks-website
npx shadcn-ui@latest init
```

### 2. Core Infrastructure (First)
- Set up `src/lib/seo.ts` with `constructMetadata()` function
- Set up `src/lib/schema.ts` with JSON-LD generators (Organization, WebSite, Service, Article, FAQ)
- Set up `src/lib/content.ts` as CMS abstraction layer
- Create `src/app/sitemap.ts` for dynamic sitemap
- Create `src/app/robots.ts` for search engine directives
- Configure `next.config.js` with image optimization and security headers

### 3. Layout Components
- Header with navigation (desktop + mobile menu)
- Footer with sitemap, newsletter signup, social links
- Main layout wrapper with proper semantic HTML

### 4. Homepage Sections
Build sections in this order:
1. Hero (headline, subheadline, dual CTA)
2. Services overview (6 cards)
3. Why Choose AIvanceWorks (differentiators)
4. Case studies preview (2-3 featured)
5. Testimonials carousel
6. FAQ with schema markup
7. Final CTA section

Include Organization and WebPage JSON-LD schema.

### 5. Service Pages
- Services listing page (`/services`)
- Category pages (`/services/[category]`)
- Detail pages (`/services/[category]/[slug]`)
- Include Service schema on each detail page
- Pull content from `02-services.md`

### 6. Blog System
- Blog listing page with pagination
- Post template with table of contents, author bio, related posts
- Article schema markup
- Category pages
- **Use abstraction layer** — all content fetched via `src/lib/content.ts`

### 7. Contact & Booking
- Contact form (React Hook Form + Zod validation)
- Booking page with Cal.com integration
- Email integration with Resend
- Success/error states
- ContactPoint schema markup

## Implementation Sequence Reference

See **Part 10** of the architecture doc for detailed prompts for each implementation step.

## Quick Reference During Coding

| Need | Location |
|------|----------|
| SEO metadata patterns | `src/lib/seo.ts` → `constructMetadata()` |
| Schema markup templates | `src/lib/schema.ts` |
| CMS abstraction (blog, services) | `src/lib/content.ts` |
| Folder structure | Architecture doc Part 7.1 |
| Quality checklist | Architecture doc Part 10.3 |
| Pre-launch checklist | Architecture doc Part 11.1 |
| Company content (services, pricing) | `src/company details/markup/*.md` |

## CMS Abstraction Layer

**Critical**: To keep CMS flexible for future migration, all content fetching MUST go through `src/lib/content.ts`:

```typescript
// ✅ Good - abstracted
import { getAllPosts, getPostBySlug } from '@/lib/content';

// ❌ Bad - direct Sanity import
import { sanityClient } from '@/lib/sanity';
```

The abstraction layer should expose these functions:
- `getAllPosts()`, `getPostBySlug(slug)`
- `getAllServices()`, `getServiceBySlug(slug)`
- `getAllCaseStudies()`, `getCaseStudyBySlug(slug)`
- `getAllAuthors()`, `getAuthorBySlug(slug)`

This way, switching from Sanity → Payload/MDX only requires updating `content.ts`, not every component.

## Content Index

- `00-index.md` — Index of all company docs
- `01-company.md` — Company overview, mission, vision, values
- `02-services.md` — Service offerings
- `03-technology.md` — Technology stack and expertise
- `04-pricing.md` — Pricing and engagement models
- `05-team.md` — Team structure
- `06-positioning.md` — Competitive positioning and ICP
- `07-engagement.md` — Delivery lifecycle and SLAs
- `08-qa-security.md` — QA, security, compliance
- `09-proposal.md` — Sales proposal template
- `10-website-content.md` — Website pages and SEO approach
- `11-marketing.md` — Marketing and lead generation
- `12-appendices.md` — Legal, SLAs, contact
