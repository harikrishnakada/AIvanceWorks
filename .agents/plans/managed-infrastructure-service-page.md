# Plan: Managed Infrastructure Services — Service Page
Created: 2026-06-01

## Overview
Build a new **service** page (not a solution) for "Managed Infrastructure Services" under the
"Infrastructure Management" pillar. The offering is **ongoing day-2 cloud operations** —
24/7 monitoring, incident response/on-call, patching, scaling, cost optimization, and
backup/DR/security hygiene — run inside the client's own cloud accounts.

Built per `docs/design-system/services-solutions-constitution.md` (the services content model:
`src/data/services/<slug>.ts` → `SERVICE_PAGE_MODULES` → `/services/[slug]` dynamic route +
`ServiceDetailTemplate`). Brand is `C10 Software` (never hardcode; data files carry no brand name).

Decisions from the user (2026-06-01):
- Page type: **Service** (`src/data/services/`, `/services/[slug]`).
- Offering: **Managed Infrastructure (ongoing ops)** — NOT literal IaaS provisioning.
- Scope: **stop at a clean build** on branch `users/harik/services-solutions`. **Do NOT run `vercel --prod`.**
- Per user memory: **no git commits** unless explicitly instructed — leave changes in the working tree.

## Design (orchestrator-decided)
- **Slug:** `managed-infrastructure` · **canonicalPath:** `/services/managed-infrastructure` · **category:** `infrastructure`
- **Archetype:** B (Technical service), reliability/operations-trust lean. Cherry-picks: `roleBoundary` for the
  ownership/black-box trust issue; cyclical-loop signature instead of a build `processTimeline`.
- **Primary buyer:** VP of Engineering / Head of Infrastructure / CTO at a mid-market company or funded startup
  running production cloud infra without a 24/7 SRE/ops team. Measured on uptime/SLA, incident MTTR, cloud spend,
  and freeing engineers from firefighting.
- **Top 3 buyer questions:** (1) Who responds when it breaks at 2am, and how fast? (2) Do I keep visibility/control
  or get a black box? (3) What exactly is covered and how does it differ from hiring an SRE?
- **Key trust issue:** opaque managed-services vendors → slow ticket queues, offshore L1, lock-in, lost visibility.
  Answered via: we operate **in your cloud/your accounts**, documented runbooks, named engineers, defined SLAs,
  clean exit/handoff — surfaced in `metricsStrip`, the signature perimeter, and `roleBoundary`.
- **Differentiator vs `cloud-infrastructure`:** that page builds infra; this one operates it (day-2).

### Composition (10 sections, at ceiling — justified, mirrors sibling `cloud-infrastructure`)
Tone rhythm validated: hero(dark) → metricsStrip(light) → featureGrid(warm) → signature(dark) →
roleBoundary(light) → techStackBlock(warm) → engagementModels(light) → relatedPages(warm) → faq(light) → ctaBlock(accent).
Two darks (hero + signature), no adjacent darks, CTA accent, alternating light/warm. ✓

1. `hero` — headline ≤12 words/70 chars; metrics render below hero (service pattern, §11.5).
2. `metricsStrip` — capability-framed operating posture (24/7, Your Cloud, SLA-Backed, Full Lifecycle). No fabricated stats.
3. `featureGrid` — 6 coverage areas: monitoring/alerting, incident response & on-call, patching/maintenance,
   scaling/capacity, cost monitoring/optimization, backup+DR+security hygiene.
4. `signature` — `ManagedOpsLifecycle` continuous loop (Monitor→Detect→Respond→Remediate→Optimize) + severity/response strip.
5. `roleBoundary` — "You own the cloud. We run the operations." Directly kills the black-box/lock-in fear.
6. `techStackBlock` — capabilities (CheckList, 8–10) + technologies (ChipRow, 8–12), greenfield-honest ("tools we operate with").
7. `engagementModels` — 3 tiers: Monitoring & Incident Response / Fully Managed Operations (featured) / Co-Managed (embedded SRE).
8. `relatedPages` — 3 journey-aware cross-links (service mix): cloud-infrastructure, finops, devops.
9. `faq` — 5–6, includes "How do you take over our running infra without downtime?" (transition fear) + a lock-in/exit answer.
10. `ctaBlock` — accent.

### New components (Component Reuse Rule: checked, justified)
- `ManagedOpsLifecycle` (signature) — cyclical ops loop. `InfraOpsControlPlane` is a linear 4-quadrant *build*
  lifecycle, not a continuous ops loop with SLAs → new component warranted (single-use, §8.4).
- `ManagedInfraHeroIllustration` (hero SVG) — abstract always-on monitoring/ops loop.

## Implementation Steps
1. Create `src/data/services/managed-infrastructure.ts` (`ServicePageData`, named + default export), following
   `cloud-infrastructure.ts` patterns. Apply audience test (§9.5) + self-challenge (§9.6) during authoring.
   Populate `_unverified` for all illustrative prices/durations.
2. Create `src/components/signature/ManagedOpsLifecycle.tsx` and `ManagedInfraHeroIllustration.tsx` — token-only
   colors (no raw Tailwind shades/hex), `<title>`+`<desc>`, documented mobile-collapse comment header (§10.7), responsive.
3. Export both from `src/components/signature/index.ts`.
4. Register in `/services/[slug]/page.tsx`: `ManagedOpsLifecycle` → `SIGNATURE_COMPONENTS`,
   `ManagedInfraHeroIllustration` → `HERO_ILLUSTRATION_COMPONENTS`, plus the two imports.
5. Add `'managed-infrastructure'` to `SERVICE_PAGE_MODULES` in `src/lib/content.ts`.
6. Add nav entry to the "Infrastructure Management" column in `src/lib/constants.ts`
   (`{ label: 'Managed Infrastructure Services', href: '/services/managed-infrastructure', icon: 'ServerCog' }`).
7. Add reverse cross-link to `managed-infrastructure` in `cloud-infrastructure.ts` `relatedPages`
   (build→operate journey). finops/devops reverse links optional if low-risk.
8. Verify: `npx tsc --noEmit` clean; `npm run build` clean. Token-hygiene + content-integrity greps clean.

## Files to Create/Modify
- CREATE `aivanceworks-website/src/data/services/managed-infrastructure.ts`
- CREATE `aivanceworks-website/src/components/signature/ManagedOpsLifecycle.tsx`
- CREATE `aivanceworks-website/src/components/signature/ManagedInfraHeroIllustration.tsx`
- MODIFY `aivanceworks-website/src/components/signature/index.ts`
- MODIFY `aivanceworks-website/src/app/services/[slug]/page.tsx`
- MODIFY `aivanceworks-website/src/lib/content.ts`
- MODIFY `aivanceworks-website/src/lib/constants.ts`
- MODIFY `aivanceworks-website/src/data/services/cloud-infrastructure.ts` (reverse cross-link)

## Dependencies
None new. Uses existing `lucide-react`, Tailwind tokens, `ServiceDetailTemplate`, shared sections.

## Notes
- Execution method: subagent-driven-development. One implementer (frontend-engineer) builds the full vertical
  slice; then spec-compliance review, then code-quality review, with fix loops. Treated as one cohesive task
  because data file + signature + wiring are tightly coupled.
- Constitution deviation: none expected (composition fits Archetype B + existing template). If `roleBoundary` on a
  service is considered novel, note it — but v2.1 already generalized cross-template sections and the type/template
  both support it, so no constitution edit required.
- No `imageFeatures` (service page uses SVG hero illustration, not photos, per §11.5).
