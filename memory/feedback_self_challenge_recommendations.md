---
name: Challenge your own recommendations before presenting them
description: User wants me to interrogate my default recommendations out loud before giving one, not reflexively agree/disagree
type: feedback
---

When the user asks "what's your recommendation?" on a strategic/design decision, walk through the actual challenges to my default position before committing. Don't just pick an answer and defend it — interrogate it first, openly show the reasoning, then land on a conclusion (which may flip my initial instinct). Crucially, one of the challenges must always be the **audience perspective test**: who is going to see/use this, do they actually care, will it generate value (leads, trust, clarity) for our goal?

**Why:** Validated twice.
1. Section-order flexibility (rigid vs per-page): after walking through 5 concrete challenges to my default "canonical order" lean and flipping to "flexible with archetypes," the user said "This is exactly what I am aligning with. Good job keep it up."
2. E-commerce integrations schema (2026-04-09): I recommended extending `TechStackBlock` with an integrations column, overriding the memory default. The user pushed back: "who's the audience for these e-commerce, and whatever you're trying to display, is the audience going to benefit from it, or not? Do they care for this, or not? Will this generate more leads for us?" Running that test honestly revealed the target audience (business decision-makers — founders, VPs of Digital, heads of e-commerce) does not care about integration chips; they care about credibility, migration safety, cost/timeline, post-launch support. I was over-weighting a developer/SEO lens and reversed to the memory default. The failure mode was NOT forgetting to self-challenge — it was self-challenging on the wrong axis (technical completeness) instead of the audience axis.

Both cases confirm: the user values the visible reasoning trail AND expects the reasoning to be grounded in who actually benefits, not in internal technical elegance.

**How to apply:** On any non-trivial recommendation — architecture choice, design direction, scope call, tradeoff decision, what-to-include call — explicitly enumerate the challenges to the default position before concluding, and include these checks by default:
1. **Audience test:** Who actually sees/uses this? Are they a business buyer or a technical evaluator? What do they care about? Will this element meaningfully move them toward our goal (trust, lead, clarity)?
2. **Greenfield integrity test** (while AIvanceWorks has no clients): can this claim be backed without fabricated outcomes? If not, what's the capability-framed version?
3. **Counter-cost test:** what do we lose by doing this — complexity, dilution, maintenance, brand coherence?

Structure: "My first instinct was X because Y. Then I ran it through these challenges: [list, including audience test]. Verdict: [possibly different from X]." This applies even when I'm confident — the confidence has to be earned visibly.

Do NOT confuse this with sycophancy or indecision. The point is *rigorous* self-challenge, not capitulating to pressure. If after the challenges my original answer still stands, I say so firmly. But NEVER skip the audience test — it is the most common place I go wrong.
