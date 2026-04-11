# Constitution — Open Questions and Deferred Decisions

> Extracted from Services & Solutions Design Constitution §16.
> These are explicitly unresolved decisions. They cannot guide current page creation work.
> When a question is resolved, record the resolution here and update the core constitution.

**Last updated:** 2026-04-10
**Source:** Constitution v1.5, Section 16

---

## 16. Open questions and deferred decisions

These are things the v1.0 constitution does not resolve. They are here so future work knows what to revisit.

1. **Sanity / CMS integration.** The pilot uses flat TypeScript files for data. When CMS adoption happens, the data schemas in [Section 7](../services-solutions-constitution.md#7-data-schema) need to be mapped to Sanity document types (or Payload collections). The `src/lib/content.ts` abstraction layer mediates the switch. Deferred until post-pilot.
2. **Case study library.** `CaseStudySpotlight` is defined but there is no content library yet. Deferred until at least 2 verified cases exist.
3. **Internationalization.** All copy is en-US. i18n would affect the data schema (all strings become localized records). Deferred indefinitely — no current business need.
4. **Dark-mode by user preference.** The theme-switch system supports multiple themes but the pilot only exposes `blue`. If a user-facing dark mode is added, `tone="dark"` sections will need to re-check contrast against the dark-mode palette.
5. **Animation standards (partially resolved v1.1).** Scroll-triggered reveals use `useScrollReveal` hook + `scroll-animations.css` with IntersectionObserver and CSS `@keyframes`. `prefers-reduced-motion` respected. Interactive signature components use CSS transitions. Full motion design language (page transitions, loading states) remains deferred.
6. **SEO page schema variants.** `src/lib/schema.ts` needs extensions for `Service` and `Product` schema JSON-LD variants that the solution pages use. Deferred to the pilot implementation.
7. **Lead-magnet / content-upgrade slots.** Sections like "Download the HIPAA portal checklist" are hinted at in the marketing brief but not in the pilot. Future sections: `LeadMagnetBlock`, `DownloadCTA`.
8. **A/B testing of composition.** No framework for testing alternate compositions yet. Deferred until traffic justifies it.
9. **Mobile navigation of a signature section.** Some signature sections (e.g., `ClaimsFlowComparison` on ≤ 375px) may benefit from a horizontal carousel. UX pattern not yet decided.
10. **Post-pilot audit cadence.** How often to audit the constitution for drift (quarterly? per-quarter-of-growth?). Deferred.
