# Visual Design Reference Guide

> **Purpose:** Reference guide for all visual design decisions across AIvanceWorks service and solution pages. Based on competitive research across 20+ companies including Accenture, Deloitte Digital, Thoughtworks, Slalom, Toptal, Cognizant, Infosys, WP Engine, Vercel, Linear, Stripe, Figma, HashiCorp/Terraform, Netlify, Datadog, Cloudflare, Twilio, MongoDB, Notion, and Contentful (April 2026).

---

## 1. Our Visual Position

### Vision Statement

> **"Modern professional, not corporate. Technical, not generic. Distinctive, not eccentric."**

AIvanceWorks should feel like a company founded by engineers who care deeply about design -- the visual equivalent of Stripe's documentation meets Slalom's creative confidence. Not the sterile corporate look of Cognizant, not the minimal austerity of Vercel, but the considered, polished middle ground that says "we build excellent software and we pay attention to details."

### The Visual Design Spectrum

```
ENTERPRISE CONSERVATIVE                    MODERN BOLD                         CUTTING-EDGE
<─────────────────────────────────────────────────────────────────────────────────>

Infosys    Cognizant    Accenture    Toptal    Slalom    Stripe    Figma    Linear    Vercel
│          │            │            │         │         │         │        │         │
Stock      Editorial    Custom       Dark      Color     Product   Custom   Dark      Hyper-
photos     photos       line-art     heroes    blocking  mockups   illust.  glass     minimal
Blue/Navy  Dark navy    Purple/Blk   Blue/Wht  Coral+Bl  Light/Wht Multi    Mono      B&W
Minimal    Moderate     Bold         Moderate  Bold      Refined   Playful  Premium   Sparse
spacing    spacing      spacing      spacing   spacing   spacing   spacing  spacing   spacing
```

**AIvanceWorks sits between Slalom and Stripe.** Modern enough to signal technical competence, distinctive enough to avoid generic corporate, but not so cutting-edge that risk-averse enterprise buyers feel uncomfortable.

---

## 2. Color Schemes & Palettes

### What Top Companies Use

#### Enterprise Consultancies

| Company | Primary | Approach | Hero BG | Ratio (Dark/Light/Accent) |
|---------|---------|----------|---------|--------------------------|
| Accenture | Deep purple (#A100FF) | Purple on near-black, vivid CTAs | Black/dark | 60/30/10 |
| Deloitte | Black + green dot | Black hero, clean white body | Half-dark | 40/55/5 |
| Cognizant | Deep navy (#002855) | Navy hero, navy feature sections, lighter blue CTAs | Dark navy | 50/40/10 |
| Infosys | Medium blue | Dark slate hero, restrained palette | Dark slate | 35/60/5 |

**Pattern:** Dark hero sections (black, deep navy, deep purple) with white text and a single bright accent for CTAs. 2-3 colors total. Gradients minimal to none.

#### Modern Tech Companies

| Company | Primary | Approach | Hero BG | Ratio (Dark/Light/Accent) |
|---------|---------|----------|---------|--------------------------|
| Stripe | Deep navy (#0a2540) | Light/airy, off-white bg (#f6f9fc), product accent rotates | White/off-white | 5/90/5 |
| Vercel | Black | Hyper-clean, almost brutalist. B&W with occasional gradient | White | 10/88/2 |
| Linear | Dark charcoal (#111) | Full dark mode, monochrome, glass-morphism | Near-black | 90/5/5 |
| Figma | Multicolor via illustration | White bg, bold geometric illustrations provide all color | White | 5/80/15 |

**Pattern:** Much lighter palettes (Stripe, Vercel) or full dark mode (Linear). Rely on typography and whitespace over color. One accent at a time, often rotating per section.

#### Mid-Market / Creative Tech

| Company | Primary | Approach | Hero BG | Notable |
|---------|---------|----------|---------|---------|
| Slalom | Bright blue (#0039A6) | White bg, coral pink + blue color blocks | White | Color blocking instead of dark sections |
| Netlify | Teal/cyan (#00AD9F) | White bg, teal accents throughout | White | Developer-focused, clean |
| Notion | Blue (#2F80ED) | Off-white/cream bg, warm and approachable | Off-white | Product UI as hero visual |

### Recommended Palette Structure for AIvanceWorks

```
ROLE               TOKEN           PURPOSE                         USAGE %
────────────────────────────────────────────────────────────────────────────
Primary Brand      brand-600       CTAs, links, icon accents        5-10%
Dark Surface       surface-dark    Hero, signature sections         15-20%
Light Surface      surface-white   Main content sections            40-50%
Warm Surface       surface-warm    Alternation rhythm               15-20%
Accent             accent-500      Secondary emphasis, gradient     2-5%
Text Heading       text-heading    Dark headings on light bg        N/A
Text Body          text-body       Body prose                       N/A
Text Muted         text-muted      Metadata, captions               N/A
```

**Total active colors on any given page:** 5-7 (brand + surface dark + 2 surface lights + accent + text shades). This matches what Stripe uses (deep navy + product accent + white + off-white + grey text).

**Key rules:**
- Maximum 2 gradients per page: hero/signature and CTA
- No gradient overload (hero gradient + section gradient + CTA gradient + card gradients = bad)
- Dark sections reserved for 2-3 emphasis moments (hero, signature, CTA), not 50%+ of page

---

## 3. Section Tone Alternation

### Industry Patterns

**Enterprise (Accenture):** Heavy dark approach
```
dark -> dark -> light -> dark -> light -> dark -> light
```

**Modern tech (Stripe):** All-light approach
```
light -> light -> light -> light -> light -> light
(subtle bg variation: #fff -> #f6f9fc -> #fff -> #f6f9fc)
```

**AIvanceWorks:** Between both -- dark for emphasis, light for majority
```
dark -> light -> warm -> dark -> light -> warm -> light -> accent
```

### Recommended Default Rhythm

```
Section 1:  DARK    Hero - bg-surface-dark, gradient overlay, white text
Section 2:  LIGHT   MetricsStrip - bg-surface-white, brand-colored stats
Section 3:  WARM    Features - bg-surface-warm, white cards
Section 4:  DARK    Signature - bg-surface-dark, custom visual
Section 5:  LIGHT   Benefits - bg-surface-white
Section 6:  WARM    Process/Engagement - bg-surface-warm
Section 7:  LIGHT   RelatedPages/FAQ - bg-surface-white
Section 8:  ACCENT  CTA - brand gradient, white text
```

This uses dark sections for emphasis (like enterprise) but keeps most of the page light and airy (like modern tech).

---

## 4. Layout Patterns

### Grid Systems by Company

| Company | Grid | Max-width | Hero Layout | Card Grid |
|---------|------|-----------|-------------|-----------|
| Stripe | 12-column | ~1080-1200px | 50/50 split (text L, mockup R) | 2-3 col |
| Vercel | Narrow | ~900-1000px | Centered text | Linear scroll |
| Linear | Full-width dark | ~1200px | Centered large text | Icon tile grid |
| Accenture | Full-bleed + contained | ~1200px | Asymmetric (image 40%, text 60%) | 2-3 col cards |
| Slalom | Contained | ~1100px | Two-column (title L, desc R) | Horizontal nav |
| Figma | Standard | ~1200px | 50/50 split (text L, illustration R) | Card grid |

### Recommended Layout Grid

```
PROPERTY             VALUE                    REFERENCE
──────────────────────────────────────────────────────────────────
Max content width    1280px (max-w-7xl)       Stripe uses ~1200px
Container padding    px-4 sm:px-6 lg:px-8     Standard responsive
Section padding      py-16 sm:py-20 lg:py-24  ~64-96px vertical
Hero padding         py-20 sm:py-24 lg:py-32  ~80-128px vertical
Column grid          12-column (CSS Grid)     Stripe, Accenture
Card grid            2-col or 3-col           Responsive
Card gap             gap-6 lg:gap-8           24-32px
Hero split           55% text / 45% visual    Stripe, Figma pattern
```

### Section Spacing

| Tier | Spacing | Used By |
|------|---------|---------|
| Enterprise | 60-80px (py-16 to py-20) | Accenture, Cognizant |
| Modern tech | 80-120px+ (py-20 to py-30) | Stripe, Vercel, Linear |
| Mid-market | 64-96px (py-16 to py-24) | Slalom, Netlify |

**Our standard:** 64-96px (py-16 to py-24), leaning generous. Modern design demands generous vertical rhythm.

### Hero Layout Patterns

| Pattern | Used By | Best For |
|---------|---------|----------|
| Split 50/50 (text L, visual R) | Stripe, Figma | Service pages with illustration |
| Full-bleed dark with overlaid text | Cognizant, Toptal | Solution pages with photography |
| Centered text, visual below | Vercel, Linear | Minimal/product-focused |
| Two-column text (title L, desc R) | Slalom | Clean, typography-focused |
| Asymmetric (image L, text R) | Accenture | Editorial feel |

**Our approach:** Box card hero (inset with rounded corners) aligns with Notion/Vercel aesthetic -- modern rather than corporate. Service pages use illustration in right column; solution pages use full-bleed photography with gradient scrim.

### Full-Bleed vs. Contained

- **Enterprise:** Full-bleed hero, contained body, alternating full-bleed dark sections
- **Modern tech:** More contained throughout, occasional wider breakouts for logos/testimonials
- **Our approach:** Inset card hero (constitution), contained body, strategic full-bleed for dark sections

---

## 5. Image Usage & Placement

### By Company Type

#### Enterprise Consultancies (Photography-Heavy)

- **Accenture:** Custom/high-quality stock of professionals, technology environments. AI page uses custom line-art illustrations (white on dark) -- distinctive, avoids stock cliches.
- **Cognizant:** Editorial-quality photography (engineers with robots, people at workstations). Abstract neural-network light patterns for AI.
- **Deloitte Digital:** Paint-splatter artistic hero imagery (creative subsidiary).
- **Infosys:** Journalistic/editorial photography. More news-like than design-forward.

**Key rule:** Enterprise firms NEVER use unedited stock photos. They either commission custom photography or heavily color-grade stock images.

#### Modern Tech Companies (Product Screenshot-Dominant)

- **Stripe:** Realistic, interactive-looking product UI mockups instead of photography. No people photos.
- **Vercel:** Minimal imagery -- subtle gradient graphics and logo walls. No people photos.
- **Linear:** Product screenshots with dark mode styling matching site aesthetic. No people photos.

**Key rule:** Tech companies show what they make, not who they are.

### Image Styles

| Element | Enterprise | Modern Tech | Our Approach |
|---------|-----------|-------------|--------------|
| Corners | Sharp or full-bleed | Rounded (12-16px) | Rounded (constitution) |
| Shadows | Rare | Subtle box-shadows | shadow-card system |
| Overlays | Dark gradient on photos | Rarely | Gradient scrim on solution heroes |
| Filters | Color grading | None | Original colors (per imagery strategy) |

### Recommended Image Strategy

**SERVICE pages (/services/*):**
- Hero: Inline SVG illustration (right column) -- abstract, themed to service
- Mid-page: Lucide icon tiles in feature cards, 2-3 custom SVG spot illustrations
- Process sections: Animated timeline with step reveals
- NO photography on service pages (per constitution)
- Style: Line-art or geometric, single-color using CSS vars

**SOLUTION pages (/solutions/*):**
- Hero: Industry photography as background with gradient scrim
- Mid-page: 2-3 ImageFeature alternating layouts with real photography
- Signature: Custom diagram/visualization (no photography)
- Photo criteria: Human faces, diverse, industry-appropriate, no cliches
- All photos: Same color grading treatment for visual cohesion

---

## 6. Illustrations & SVGs

### What Top Companies Do

| Company | Illustration Style | Used For |
|---------|-------------------|----------|
| Accenture | White line-art on dark backgrounds | AI/service heroes -- distinctive |
| Figma | Bold geometric, Bauhaus-influenced, multicolor | Hero visuals -- highly custom |
| Slalom | Simple colored blocks with typography | Accent elements |
| Stripe | Custom single-color outlined SVG icons | Feature sections, flow diagrams |
| Linear | Monochrome icon tiles with glass-morphism | Features grid |
| Cloudflare | Orange flat illustrations (dated) | Hero -- feels 2018-era |

### How to Illustrate Abstract Concepts

| Concept | Bad (Cliche) | Good (Observed) |
|---------|-------------|-----------------|
| AI / ML | Blue brain, circuit board, robot face | Accenture: minimal line-art of people with data streams |
| Cloud | Cartoon cloud with icons | Cloudflare: laptop with service icons orbiting |
| Data | Binary code rainfall | Stripe: actual data tables and dashboards |
| Security | Padlock, shield | Linear: subtle lock icon in monochrome tile |

### SVG & Icon Patterns

- **Stripe:** Custom-designed, single-color, outlined icons. Also SVG-based diagrams for payment flows.
- **Linear:** Grid of monochrome icon tiles (SVG icons in dark glass-morphism squares). Extremely polished.
- **Netlify:** Custom SVG icons, outlined style with teal accent color.

### Decorative / Background Elements

| Company | Pattern | Visibility |
|---------|---------|-----------|
| Linear | Subtle grid overlay on dark backgrounds | Barely visible |
| Stripe | Faint engineering-paper grid lines (lavender/grey) | Very subtle |
| Vercel | Thin crosshair markers at grid intersections | Barely visible |
| Accenture | Subtle grid overlay on dark hero sections | Subtle |

**Rule:** Extremely subtle background textures (grids, dots, faint lines) that provide visual interest without competing with content. No heavy background patterns.

---

## 7. Video Usage

Video on service/solution detail pages is **remarkably rare** across all companies researched.

| Company | Video on Service Pages? | Notes |
|---------|------------------------|-------|
| Stripe | No | Product mockups serve same purpose |
| Vercel | No | -- |
| Linear | No | Animated product screenshots instead |
| Accenture | No | -- |
| Cognizant | No | -- |
| Twilio | No | AI chat interface instead |

**When video IS used (industry-wide):**
- Testimonial videos on case study pages (not service pages)
- Short ambient background loops on homepages (not service pages)
- Product demos on dedicated demo pages

**Our recommendation:** Skip video on service/solution pages. Reserve for homepage (ambient) or case study pages (testimonials). The constitution's data-driven sections, illustrations, and photography approach is industry-aligned.

---

## 8. Animation & Motion

### By Company Type

#### Enterprise Consultancies (Minimal)
Accenture and Cognizant use simple fade-in-on-scroll. No parallax. No dramatic entrances. "Animations should not be noticed."

#### Modern Tech Companies (Subtle & Polished)
- **Stripe:** Smooth hover effects (slight lift with shadow), gentle scroll fade-ups, interactive product mockup state changes. No parallax.
- **Vercel:** Minimal. Subtle color shift in gradient graphic on scroll. Enterprise page has no visible animations.
- **Linear:** More expressive -- features grid has subtle depth shift, product screenshots may animate on scroll. Still restrained.

### Animation Patterns Observed

| Pattern | Where Used | How |
|---------|-----------|-----|
| Fade-in on scroll | Universal | IntersectionObserver + opacity transition |
| Staggered card entrance | Stripe, Linear | Sequential delay (50-100ms per card) |
| Hover lift on cards | Stripe, Notion | translateY(-2px) + shadow enhancement |
| Active tab underline slide | Stripe, Netlify | CSS transform on underline element |
| Subtle parallax | Rare | Only homepages, never service pages |
| Background gradient shift | Vercel home only | Very subtle, scroll-linked |

### Recommended Animation Approach

```
ELEMENT              ANIMATION           TIMING         TRIGGER
──────────────────────────────────────────────────────────────────
Section content      Fade-up             300ms ease     Scroll enter (IO)
Feature cards        Stagger fade-up     200ms + 75ms   Scroll enter (IO)
                                         delay per card
Process steps        Sequential reveal   300ms + 100ms  Scroll enter (IO)
                                         delay per step
Cards hover          Lift + shadow       200ms ease     Hover
CTA buttons          Scale(1.02)         150ms ease     Hover
Signature diagram    Custom per-page     500-800ms      Scroll enter (IO)
Connector lines      scaleX draw         400ms ease     Scroll enter (IO)
```

### Animation Rules

1. Always respect `prefers-reduced-motion` (disable all scroll animations)
2. No parallax on service/solution pages
3. No auto-playing video
4. Animations should feel like they "settle into place," not fly in from offscreen
5. Maximum total animation time for a section: 800ms including staggers
6. No dramatic or attention-grabbing animations -- the trend is subtle "alive" feeling

---

## 9. Typography & Visual Hierarchy

### Font Choices by Company

| Company | Heading Font | Body Font | Style |
|---------|-------------|-----------|-------|
| Stripe | Custom sans-serif (slightly condensed) | System/custom sans | Clean, professional |
| Vercel | Geist / Inter (bold) | Geist / Inter | Stark, modern |
| Linear | Custom sans-serif | Inter/system | Elegant, spacious |
| Accenture | Graphik (custom licensed) | Graphik | Corporate, clean |
| Slalom | Custom serif for headings | Sans-serif for body | Distinctive mixed |
| Figma | Custom geometric sans | System sans | Playful, modern |

**Dominant pattern:** Sans-serif everywhere. No enterprise or modern tech company uses serif as primary. Slalom's light serif for headings is a notable exception that gives creative distinctiveness.

### Font Sizes

| Element | Enterprise Range | Modern Tech Range | Our Recommended |
|---------|-----------------|-------------------|-----------------|
| Hero headline | 40-56px | 48-72px | 48-64px |
| Section title | 28-36px | 32-48px | 32-40px |
| Subsection title | 20-24px | 24-32px | 24-28px |
| Body text | 16-18px | 16-18px | 16-18px |
| Meta/caption | 12-14px | 12-14px | 13-14px |

**Key observations:**
- Modern tech uses larger headlines than enterprise
- Body text is universally 16-18px (never go below 16px)
- Most pages use 3 weights maximum: Regular (400), Semi-Bold (600), Bold (700)

### Visual Hierarchy Pattern (Best-in-Class: Stripe)

This is the single most common hierarchy pattern across all researched sites:

```
1. Small colored label / eyebrow ("Billing" in green)
2. Large bold section headline
3. Medium grey body paragraph
4. Product visual / card grid below
5. Clear separation between text block and visual block
```

This eyebrow > headline > description > content pattern appears in Stripe, Netlify, Contentful, Vercel, and MongoDB.

---

## 10. Dark Mode & Theme Variations

### Full Site Dark Mode

| Company | Dark Mode? | Notes |
|---------|-----------|-------|
| Linear | Default dark | The brand IS dark. No toggle visible. |
| Vercel | Toggle available | Light mode default |
| Stripe | Light only | No dark mode on marketing pages |
| All enterprise consultancies | Light only | No dark mode toggle |

### Section-Level Dark/Light Alternation

| Company | Pattern |
|---------|---------|
| Accenture | Dark hero -> alternating dark/light. Very dark (#000) vs. pure white. |
| Cognizant | Dark navy hero -> white -> navy -> white -> navy CTA. Clear rhythm. |
| Stripe | Light throughout. Subtle bg alternation (white to barely-off-white). NO mid-page dark. |
| Slalom | White -> white -> coral/blue color block -> white. Color blocks replace dark sections. |
| Twilio | Dark hero -> dark sections -> lighter below. Traditional enterprise alternation. |

**Key finding:** Enterprise dark/light alternation creates good rhythm. Modern tech all-light is cleaner but can feel monotonous. Our constitution's 4-tone system (dark, light, warm, accent) provides enterprise rhythm with modern subtlety -- well-aligned with best practice.

---

## 11. What Works Best (Specific Examples)

### Best Visual Design Practices

**Stripe (payments page)** -- Best-in-class page structure. Product mockups more effective than photography for selling technical products. Subtle grid background is distinctive without distracting. Horizontal logo wall provides instant credibility.

**Linear (features page)** -- Icon grid hero is memorable and unique. Dark mode done perfectly. Monochrome palette creates luxury feel.

**Slalom (AI page)** -- Exceptionally clean. Coral pink + blue color block is instantly recognizable. Breaks from navy/blue consultancy default. Generous white space.

**Accenture (AI page)** -- Custom line-art illustrations on dark hero avoid every AI cliche. White line-art on black is sophisticated. Purple accent is strong and recognizable.

**Figma (enterprise page)** -- Bold custom illustrations make the page instantly recognizable. Best implementation of split hero (text left, illustration right).

### Weak Visual Design Practices

**Infosys (services page)** -- Feels like a news site, not a services page. Hero leads with press release headline. Cookie banner dominates viewport.

**Toptal (services/AI)** -- Crowded hero with overlapping headshot circles. Multiple navigation bars create visual noise.

**Cloudflare (developer platform)** -- Orange flat illustrations feel dated (2018-era). Not distinctive in the tech space.

**Datadog (product)** -- Hexagonal honeycomb background makes hero feel busy. Multiple CTAs without clear hierarchy.

---

## 12. Anti-Patterns to Avoid

| # | Anti-Pattern | Why It Fails | Observed At |
|---|-------------|-------------|-------------|
| 1 | **Stock photo dumps** -- 4-5 unrelated, ungraded stock photos with different color temperatures | Every image should feel like the same photo shoot | Toptal |
| 2 | **Blue-brain AI imagery** -- circuit boards, glowing neural networks, robot faces | Cliche, signals lazy design | Cognizant (partially) |
| 3 | **Too many navigation bars** -- 3-4 levels visible simultaneously | Maximum 2 nav levels visible at once | Toptal |
| 4 | **Cookie banners eating the viewport** -- 30-40% of initial viewport | Design as small, dismissible bar | Infosys, Cognizant |
| 5 | **Dense cluttered hero** -- headline + subheadline + pattern + mascot + two CTAs | Hero should have ONE focal point | Datadog |
| 6 | **"We do everything" service grids** -- 20+ service cards with generic icons | Each page should feel crafted, not templated | Deloitte (borderline) |
| 7 | **Gradient overload** -- multiple gradients on same page | Maximum 2 gradients per page | -- |
| 8 | **Generic flat illustrations** -- "person at laptop with floating icons" (2018 style) | If using illustrations, make them ownable | Cloudflare |
| 9 | **Inconsistent card styles** -- mixing shadowed, bordered, and borderless cards on same page | Pick ONE card treatment, use consistently | -- |
| 10 | **Dark sections for everything** -- 50%+ dark backgrounds | Heavy, oppressive feel. Dark for 2-3 emphasis moments only. | Some enterprise sites |
| 11 | **Tiny body text** -- 14px body to fit more content | Stay at 16-18px minimum for readability and trust | Some consultancy sites |
| 12 | **Missing whitespace** -- py-8 or py-10 between sections | Modern design demands py-16 to py-24 minimum | Some enterprise sites |

---

## 13. Quick Decision Guide

When making a visual design decision, reference this:

| Decision | Go With | Not This |
|----------|---------|----------|
| Hero background | Service: dark with illustration. Solution: photo with gradient scrim | Generic stock photo, no treatment |
| Section backgrounds | Alternate dark/light/warm per constitution rhythm | All-dark or all-white monotony |
| Card treatment | `shadow-card` + `border-border-light`, consistent everywhere | Mixed shadow/border/borderless |
| Image treatment | Solutions: color-graded photography. Services: SVG illustrations | Ungraded stock photos, blue-brain AI |
| Icon style | Lucide outlined, single brand color, in IconTile | Multiple icon styles, filled + outlined mix |
| Animation | Fade-up on scroll, staggered cards, 300ms ease | Parallax, fly-in, dramatic entrances |
| Typography | 3 weights max. 16-18px body. 48-64px hero headline | Tiny text, too many weights, inconsistent sizes |
| Whitespace | Generous (py-16 to py-24 sections, gap-6 to gap-8 cards) | Tight stacking (py-8), cramped cards |
| Gradients | Max 2 per page (hero/signature + CTA) | Gradients on every section |
| Dark mode | Not needed for launch. Section-level dark/light is sufficient. | Full dark mode toggle (complexity for no buyer benefit) |

---

## 14. Research Sources

Analysis based on direct examination of live pages (April 2026):

**Enterprise consultancies:**
- [Accenture Cloud Services](https://www.accenture.com/us-en/services/cloud)
- [Accenture Data & AI](https://www.accenture.com/us-en/services/data-ai)
- [Deloitte Digital](https://www.deloittedigital.com)
- [Deloitte Services](https://www.deloitte.com/global/en/services.html)
- [Cognizant AI Services](https://www.cognizant.com/us/en/services/ai)
- [Infosys Services](https://www.infosys.com/services.html)

**Modern tech companies:**
- [Stripe Payments](https://stripe.com/payments)
- [Stripe Billing](https://stripe.com/billing)
- [Vercel Home](https://vercel.com)
- [Vercel Enterprise](https://vercel.com/enterprise)
- [Linear Home](https://linear.app)
- [Linear Features](https://linear.app/features)

**Mid-market / creative tech:**
- [Slalom Services](https://www.slalom.com/us/en/services)
- [Slalom AI](https://www.slalom.com/us/en/services/artificial-intelligence)
- [Figma Enterprise](https://www.figma.com/enterprise/)
- [Netlify Platform](https://www.netlify.com/platform/)
- [Notion Product](https://www.notion.com/product)

**Additional references:**
- [WP Engine Enterprise](https://wpengine.com/enterprise/)
- [HashiCorp/Terraform](https://www.hashicorp.com)
- [Datadog Product](https://www.datadoghq.com/product/)
- [Cloudflare Developer Platform](https://www.cloudflare.com/developer-platform/)
- [Twilio Products](https://www.twilio.com)
- [MongoDB](https://www.mongodb.com)
- [Contentful](https://www.contentful.com)
