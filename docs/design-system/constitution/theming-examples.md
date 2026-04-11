# Constitution — Theming Side-by-Side Examples

> Extracted from Services & Solutions Design Constitution §3.4.
> Learning aid showing forbidden patterns vs. correct token usage.
> The enforceable rules are in `../services-solutions-constitution.md` §3.2-3.3.
> The `scripts/token-hygiene.sh` lint script automates enforcement.

**Last updated:** 2026-04-10
**Source:** Constitution v1.5, Section 3.4

---

### 3.4 Side-by-side examples

**FORBIDDEN** (current `SolutionBenefits.tsx`):

```tsx
<section className="py-8 lg:py-12 bg-gray-50">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
  <p className="text-lg text-gray-600">{subtitle}</p>
  <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-300">
    <div className="w-12 h-12 rounded-xl bg-blue-50">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
    <span className="text-2xl font-bold text-blue-600">{benefit.stat}</span>
  </div>
</section>
```

**REQUIRED** (refactored using tokens):

```tsx
<Section tone="warm">
  <Container>
    <h2 className="text-3xl font-bold text-text-heading mb-4">{title}</h2>
    <p className="text-lg text-text-body">{subtitle}</p>
    <div className="bg-surface-white rounded-xl border border-border-light hover:border-brand-300 shadow-card-sm">
      <div className="w-12 h-12 rounded-xl bg-brand-50">
        <Icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-text-heading">{benefit.title}</h3>
      <span className="text-2xl font-bold text-brand-600">{benefit.stat}</span>
    </div>
  </Container>
</Section>
```

**FORBIDDEN** (current `SolutionCTA.tsx`):

```tsx
<section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
  <p className="text-lg text-blue-100">{description}</p>
  <Button className="bg-white text-blue-700 hover:bg-gray-100">...</Button>
</section>
```

**REQUIRED** (refactored):

```tsx
<Section tone="accent">
  <Container>
    <p className="text-lg text-text-light/90">{description}</p>
    <Button className="bg-surface-white text-brand-700 hover:bg-surface-warm">...</Button>
  </Container>
</Section>
```

**FORBIDDEN** (current `SolutionHero.tsx`):

```tsx
<nav className="bg-gray-50 border-b border-gray-200">...</nav>
<section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
  <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 text-blue-300">
    <Link href={badgeHref} className="hover:text-blue-200">{badge}</Link>
  </div>
  <div className="bg-gradient-to-br from-blue-500 to-indigo-600">...</div>
</section>
```

**REQUIRED:**

```tsx
<Breadcrumbs tone="light" />
<Section tone="dark">
  <Container>
    <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 text-brand-300">
      <Link href={badgeHref} className="hover:text-brand-200">{badge}</Link>
    </div>
    <div className="bg-gradient-to-br from-brand-500 to-accent-600">...</div>
  </Container>
</Section>
```
