# Digital Banking & Wallets — Subject Matter Reference

> **Purpose:** Domain-knowledge reference for Claude Code when generating content, copy, page structure, IA, and messaging for the **Digital Banking & Wallets** section of the website.
> **Scope:** Subject matter expertise only. No implementation details, no tech stack, no code patterns, no design tokens.
> **Use:** Treat every section below as authoritative. When generating any output for this section of the site, content must reflect this terminology, positioning, and ecosystem framing.

---

## 1. Who we are in this market

We are a **software engineering services firm**, not a regulated financial institution. Every piece of content must respect this distinction.

Our clients are the regulated entities or operators:
- Banks, credit unions, EMIs, and money transmitters
- Fintechs operating under a sponsor-bank relationship
- Non-financial brands embedding finance through a BaaS provider
- Vertical SaaS companies adding financial products to their platforms

We do not hold a banking license, do not act as a sponsor bank, do not issue cards as principal, do not hold customer funds, and do not own the customer relationship. The license, the sponsor bank, the regulatory exposure, and the customer trust all belong to our client. We bring engineering and domain competence.

**Acceptable framing patterns:** "we build / engineer / integrate / deliver / modernize platforms for licensed institutions and fintech operators."
**Forbidden framing:** any phrasing that implies we offer banking services, hold deposits, issue cards, or carry regulatory authority.

---

## 2. The three offerings under Digital Banking & Wallets

The section contains exactly three offerings.

### 2.1 Digital Wallet Platform Development

Wallets are the most accessible entry point for non-bank operators. Four operational types must be distinguished in any content where wallet variants are discussed:

- **Closed-loop wallet** — stored value redeemable only within a single ecosystem. Lower regulatory burden in most US states. Common use cases: healthcare patient-pay, employer-funded benefits, retail loyalty, gift programs, gaming credits.
- **Semi-closed wallet** — stored value redeemable across a defined merchant network. Heavier KYC/AML obligations as scale and velocity increase.
- **Open-loop wallet** — connected to payment rails, card-funded and withdrawable. Generally requires sponsor-bank coverage or a money-transmitter license held by the operator.
- **Embedded wallet** — wallet capability sitting inside a non-financial product such as a marketplace, healthcare platform, or gig app. Operator-side capability rather than a consumer-facing brand.

Capabilities buyers expect as table-stakes: identity-verified onboarding, P2P transfers, top-ups, bill pay, QR and NFC payments, mobile-pay tokenization (Apple Pay, Google Pay), transaction history with categorization, virtual card issuance, and multi-currency where applicable. The operator-side back-office must support compliance, customer support, finance, and fraud roles as distinct workspaces.

**Why this is the easiest startup-feasible offering:** closed-loop and semi-closed wallets in particular have lower regulatory friction, shorter time-to-launch, and clear US demand across healthcare, payroll, gig platforms, loyalty, and marketplace seller wallets.

### 2.2 Neobank Platform Engineering

Neobanks in 2026 are not built from scratch. The standard production pattern is a stack of vendors, each handling a specific layer:

- A **sponsor bank** provides the regulated infrastructure and FDIC coverage.
- A **BaaS provider** supplies APIs over that infrastructure.
- A **card issuing platform** handles the card program.
- A **core banking platform** handles the ledger and accounting.
- **Identity and KYC vendors** handle onboarding and ongoing diligence.
- The **operator** builds the customer experience, product logic, and brand.

We position as the engineering team that integrates and extends those layers into a coherent, production-grade product. We deliberately do not own the core or the card processor — we orchestrate them on the operator's behalf. Content should never imply that we are building a bank from scratch.

**Typical buyer:** a fintech operator, a vertical-SaaS company adding a banking product, or a regional financial institution modernizing its retail offering.

### 2.3 Embedded Finance & BaaS Integration

The highest-growth segment of fintech and the one most aligned with our healthcare and vertical-SaaS verticals. Embedded finance lets a non-financial brand offer accounts, cards, payments, lending, or insurance inside its existing customer experience without becoming a bank.

The work is integration engineering: API orchestration between the brand's product, the BaaS provider, and the sponsor bank; ledger design and reconciliation between platform-side truth and partner-bank truth; KYC and KYB orchestration across multiple vendors; card issuance flows; dispute and chargeback handling; 1099 and tax reporting; and program-manager tooling.

The buyer's mental model: *"I want to add financial features to my existing product without becoming a regulated entity or rebuilding my infrastructure."* We solve the implementation half of that ambition.

---

## 3. The fintech ecosystem to reference by name

When writing copy or proof points, name credible ecosystem players to signal competence. Use only names from this list — do not hallucinate vendors.

- **Core banking platforms:** Mambu, Thought Machine, Finxact, sdk.finance, Temenos
- **BaaS providers (US):** Unit, Treasury Prime, Synctera, Column, Stripe
- **US sponsor banks commonly referenced in fintech:** Lead Bank, Cross River, Column, Sutton Bank, Pacific West Bank
- **Card issuing platforms:** Marqeta, Galileo, Lithic, Stripe Issuing
- **Identity and KYC:** Alloy, Persona, Socure, Sumsub, Trulioo
- **AML and transaction monitoring:** Hummingbird, Unit21, Sardine, Feedzai
- **Payment rails:** ACH, FedNow, RTP, Visa Direct, Mastercard Send, Wires (Fedwire / CHIPS)

Buyers expect us to know these names, the differences between them, and which combinations fit which use cases. Content that mixes up the categories (e.g., calling Marqeta a sponsor bank, or Alloy a core platform) destroys credibility instantly.

---

## 4. Verticals and buyer personas

We lead with **healthcare** and **fintech / vertical SaaS** as verticals on this page. Other verticals are out of scope for the Digital Banking & Wallets section.

### Healthcare buyers and use cases
- Health systems and provider networks deploying patient-pay wallets
- HSA and FSA platforms requiring spend-rule enforcement
- Practice management and revenue-cycle SaaS adding embedded accounts
- Patient financing and BNPL flows for elective or out-of-pocket care
- Provider payouts: physician group disbursements, ambulatory networks, telehealth platforms

### Fintech and vertical-SaaS buyers and use cases
- Vertical SaaS companies adding treasury, accounts, or cards (Toast Capital and Shopify Balance are the canonical patterns)
- Marketplaces needing seller wallets, split payments, and instant payouts
- B2B platforms adding embedded lending or BNPL
- Existing fintechs outgrowing their initial BaaS provider or core platform
- Community banks and credit unions modernizing their retail digital offering

### Buyer titles we sell to
Founder / CEO at fintech operators; CTO and VP Engineering at vertical SaaS companies; Head of Embedded Finance at non-financial brands; Chief Digital Officer at community banks and credit unions; Head of Product at fintech platforms.

---

## 5. Pain points buyers come to us with

Content should speak to recognizable, specific pains. The following list is drawn from real buyer language in this segment:

- "We chose a BaaS provider but our integration is fragile, our reconciliation is broken, and our compliance team has no tooling."
- "We want to ship a wallet or banking product inside our existing SaaS but our team has no fintech depth."
- "Our sponsor bank is increasing oversight and we need to mature our compliance operations."
- "We're stuck between buying a generic platform and building from scratch — neither fits."
- "We've outgrown our first BaaS provider and need to migrate without breaking the customer experience."
- "Our reconciliation between our internal ledger and the partner bank breaks every month-end and our finance team is doing it by hand."

Avoid generic pains ("digital transformation," "going to the cloud") — those signal we don't understand the segment.

---

## 6. Value propositions, ranked

In any messaging where we have to pick the strongest claim, this is the order:

1. **Deep integration competence across the BaaS, core, KYC, and card-issuer ecosystem** — the credibility play and our primary differentiator. Lead with this whenever space allows.
2. **Healthcare and vertical-SaaS domain fluency** — the vertical fit that distinguishes us from generalist services firms.
3. **Speed-to-launch through proven core platforms rather than greenfield builds** — the practical reassurance that buyers will not be paying us to reinvent infrastructure.
4. **Production-grade engineering discipline** — compliance-aware, audit-ready, designed for the regulatory scrutiny these systems actually receive.

---

## 7. Language to use and language to avoid

### Use
- "We build / engineer / integrate / deliver / modernize..."
- "...for licensed institutions and embedded finance operators"
- "On a proven core" or "on top of [named platform]"
- "Production-grade systems, not prototypes"
- "Compliance-aware engineering"
- "Audit-ready"
- "Integration-first" or "ecosystem-fluent"

### Avoid
- "We offer banking services" — we do not.
- "We provide accounts / cards / loans" — we build them, we do not provide them.
- "Bank-grade" without qualification.
- "Revolutionary," "disruptive," "game-changing" — these are credibility-destroying words for enterprise fintech buyers.
- Any promise of regulatory outcomes ("we'll get you approved," "guaranteed compliance," "we handle your license").
- Statistics without sources. If a number cannot be attributed, do not use it.

---

## 8. Out of scope (state explicitly when relevant)

Content should be willing to say what we do NOT do, where it strengthens credibility:

- We do not hold or apply for banking licenses, money transmitter licenses, or EMI licenses.
- We do not act as sponsor bank, BaaS provider, card issuer, or processor.
- We do not provide regulatory or legal advice; clients retain their own counsel and compliance officers.
- We do not own the customer relationship or hold customer funds.
- We do not perform underwriting decisions on a balance-sheet basis.
- We do not provide audit, attestation, or certification services (PCI-DSS, SOC 2, HITRUST). We engineer to those standards and work alongside the client's audit firm.

Saying these things plainly is a trust signal in fintech. Vague positioning is a red flag.

---

## 9. Strategic posture toward platform partners

Where credibility benefits, content may reference our integration competence with named core platforms (Mambu, Thought Machine, Finxact, sdk.finance) and BaaS providers (Unit, Treasury Prime, Synctera, Column).

Treat these as ecosystem we work *with*, not as formal partnerships unless leadership has explicitly confirmed a partner relationship. Do not generate logos, partner badges, or "certified partner" claims without confirmation.

---

## 10. Section IA recommendation (for use when generating page structure)

When generating the page structure for Digital Banking & Wallets, the recommended information architecture is:

- **Hero:** one-line positioning that names the three offerings and our integration-first differentiator.
- **Three primary offering tiles:** Digital Wallets, Neobank Platforms, Embedded Finance & BaaS Integration. Equal weight, consistent rhythm.
- **Verticals served:** healthcare first, fintech / vertical SaaS second.
- **Ecosystem and integrations:** a single section naming the platforms, BaaS providers, KYC vendors, and card issuers we work with.
- **What we don't do:** a short, plain-language section reinforcing our role boundary. This is a credibility signal, not a disclaimer.
- **Engagement model and next step CTA.**

Each offering tile should follow the same rhythm: what it is, who it's for, what we deliver, and a one-line proof point. Consistency across the three matters more than length.

---

*End of reference. This document is the source of truth for terminology, positioning, and domain framing for the Digital Banking & Wallets section. When in doubt, prefer the wording in this document over inventing alternatives.*
