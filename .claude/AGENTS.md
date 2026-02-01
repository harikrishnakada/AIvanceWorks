# AIvanceWorks Agents

This directory contains **extended documentation** for specialized agents. The actual executable agents are in `.claude/agents/`.

| `agents/*.md` | **Specialized agent configurations** — Role-specific expertise, coding standards, and collaboration protocols. |

## Specialized Agents

| Location | Purpose |
|----------|---------|
| `.claude/agents/*.md` | **Official Claude Code agents** - automatically recognized and invocable |

## Available Agents

| Agent | Official | Documentation | Status |
|-------|----------|---------------|--------|
| **Frontend Engineer** | `.claude/agents/frontend-engineer.md` | `agents/frontend-engineer.md` | Active |
| **UI/UX Designer** | `.claude/agents/ui-ux-designer.md` | `agents/ui-ux-designer.md` | Active |
| **Content Generator** | `.claude/agents/content-generator.md` | `agents/content-generator.md` | Active |
| **SEO Optimizer** | `.claude/agents/seo-geo-aeo-content-optimizer.md` | - | Active |
| **Debugging Specialist** | `.claude/agents/debugging-specialist.md` | `agents/debugging-specialist.md` | Active |

## Agent Collaboration

Agents work together following a defined handoff protocol:

```
        ┌──────────────────┐         ┌──────────────────┐
        │   UI/UX Designer │←───────→│  Frontend Engine │
        │ (Visual Systems, │         │   (Implement.    │
        │ Interaction Patt)│         │     Technical)   │
        └──────────────────┘         └──────────────────┘
                                             │
                            ┌────────────────┼────────────────────────┐
                            ▼                ▼                        ▼
        ┌──────────────────┐   ┌──────────────────┐   ┌──────────────────────┐
        │ Content Generator│   │  SEO Optimizer   │   │ Debugging Specialist │
        │ (Blog, Services, │←→│ (Keyword Strategy│   │ (Bugs, Performance,  │
        │  Case Studies)   │   │  GEO/AEO Opt.)   │   │  Integrations)       │
        └──────────────────┘   └──────────────────┘   └──────────────────────┘
```

## Design Collaboration Workflow

For **UI/UX design tasks**, use the following workflow with the UI/UX Designer:

### Phase 1: Design Brief
**Goal**: Establish design direction and requirements

1. **Define scope**:
   - Which pages or components need design?
   - What are the user goals?
   - Any existing design system to follow?

2. **Provide context**:
   - User personas and use cases
   - Brand guidelines or direction
   - Accessibility requirements
   - Performance constraints

3. **Request design deliverables**:
   - Visual system (colors, typography, spacing)
   - Component designs with all states
   - Interaction specifications
   - Responsive behavior plan

### Phase 2: UI/UX Designer Creates Design System
**Goal**: Provide comprehensive design specifications

1. **Design system foundation**:
   - Color palette with tokens
   - Typography scale
   - Spacing system
   - Component library specifications

2. **Component specifications**:
   - All required states (default, hover, active, disabled, loading)
   - Responsive breakpoints
   - Interaction animations
   - Accessibility annotations

3. **Prepare handoff** to Frontend Engineer:
   ```markdown
   ## Design Specification Ready
   **Components**: [List of designed components]
   **Design System**: [Colors, typography, spacing defined]
   **States**: [All interaction states documented]
   **Accessibility**: [WCAG compliance notes]
   **Performance**: [Animation/effect considerations]
   **Implementation Notes**: [Tailwind classes, shadcn/ui components suggested]
   ```

### Phase 3: Frontend Engineer Implements
**Goal**: Build designs with technical precision

1. **Implementation**:
   - Use design tokens from design system
   - Implement all specified states
   - Ensure responsive behavior matches design
   - Optimize for performance

2. **Quality check**:
   - Visual fidelity to design
   - Keyboard navigation support
   - Color contrast verification
   - Animation performance

### Phase 4: Review & Refinement
**Goal**: Ensure implementation matches design intent

1. **Designer reviews implementation**:
   - Visual fidelity check
   - Interaction smoothness
   - Responsive behavior across breakpoints
   - Accessibility compliance

2. **Iterative refinement** if needed:
   - Provide feedback on implementation
   - Adjust design if technical constraints require
   - Final approval for deployment

---

## Content Collaboration Workflow

For **significant content pieces** (blog posts, service descriptions, case studies), use this iterative workflow:

### Phase 1: Content Generator Drafts Content
**Goal**: Create initial draft using Firecrawl research

1. **Research** with Firecrawl:
   - `firecrawl_search` — Find industry context and competitor content
   - `firecrawl_extract` — Gather company data and structured information
   - `firecrawl_scrape` — Fetch specific pages for reference

2. **Create draft** following brand voice and SEO basics:
   - Target keyword naturally integrated
   - Proper heading structure (H1 → H2 → H3)
   - AIvanceWorks company context included
   - ~1,200-1,700 words (blog) or appropriate length for content type
   - Case studies, metrics, examples included

3. **Prepare handoff** to SEO Optimizer:
   ```markdown
   ## Draft Ready for Optimization
   **Content Type**: [Blog post / Service page / Case study]
   **Target Keyword**: [Primary keyword]
   **Intended Audience**: [Target persona]
   **Draft Location**: [File path or link]
   **Key Sections**: [Brief outline]
   ```

### Phase 2: SEO Optimizer Analyzes & Recommends
**Goal**: Provide comprehensive improvement recommendations

The SEO Optimizer:
1. **Analyzes the draft** across SEO/GEO/AEO dimensions
2. **Generates optimization report** with:
   - SEO Score (keyword placement, structure, E-E-A-T)
   - GEO Score (statistics density, citations, fact-richness)
   - AEO Score (featured snippet readiness, FAQ completeness)
   - Specific, actionable recommendations (not just scores)
3. **Prioritizes quick wins** that improve all three optimization types
4. **Provides before/after examples** for major changes

Example recommendations structure:
```markdown
## Quick Wins (Priority Order)

### Priority 1: Add Statistics Throughout [HIGH IMPACT]
- **Where**: Section 2, paragraph 3
- **Add**: "According to Gartner 2025 report, 73% of enterprises..."
- **Why**: Improves GEO (AI citations) and AEO (answer engines)

### Priority 2: Convert "Benefits" Header to Question [HIGH IMPACT]
- **Current**: "## Benefits of Cloud Migration"
- **Recommended**: "## What Are the Key Benefits of Cloud Migration?"
- **Why**: Improves AEO (featured snippets) and search intent matching

### Priority 3: Add FAQ Section [MEDIUM IMPACT]
- Suggested 4 FAQ pairs with questions and answers
- Includes schema markup template
```

### Phase 3: Content Generator Revises Based on Feedback
**Goal**: Incorporate recommendations and improve content

1. **Review optimization report** from SEO Optimizer
2. **Apply quick wins first** (highest impact changes)
3. **Revise content** systematically:
   - Add statistics and sources
   - Improve keyword placement
   - Restructure headers for search intent
   - Enhance E-E-A-T signals
   - Add FAQ section
4. **Prepare updated draft** with notes on changes made
5. **Optional**: Request second review if major revisions made

### Phase 4: Final Review (Optional Second Pass)
**Goal**: Ensure quality before publishing

**When to do a second pass**:
- If major structural changes were made
- If significant new sections were added
- If this is a flagship/high-priority piece

**Process**:
1. SEO Optimizer does final optimization audit
2. Content Generator makes final tweaks
3. Ready for implementation/publishing

---

### When Agents Request Help

**UI/UX Designer → Frontend Engineer**
- Design specifications and component specs
- Visual system documentation (colors, typography, spacing)
- Interaction and animation specifications
- Accessibility requirements and guidelines
- Implementation guidance and Tailwind class suggestions

**Frontend Engineer → UI/UX Designer**
- Technical constraints and feasibility feedback
- Performance concerns with proposed effects
- Browser compatibility questions
- Implementation review and visual fidelity verification

**Frontend Engineer → Content Generator**
- Copy and messaging for UI elements
- Service descriptions for component display
- Testimonial and case study text

**Content Generator → SEO Optimizer** (Iterative)
- **Phase 1 Handoff**: Initial draft review and recommendations
- **Phase 3 Revision**: Content incorporation review (optional)
- Keyword strategy validation
- GEO/AEO optimization checks
- Content audit before publication

**UI/UX Designer → Frontend Engineer → Content Generator**
- Design layout guidance for content presentation
- Typography guidance for readability
- Visual hierarchy recommendations for scannability
- Form and conversion design patterns

**Frontend → SEO/GEO/AEO Content**
- Copy optimization for UI messaging
- Meta description generation
- Schema markup implementation guidance

**Any Agent → Debugging Specialist**
- "There's a hydration mismatch in this component"
- "Performance is slow on production, need profiling"
- "API integration with Cal.com is failing intermittently"
- "Build is failing with dependency conflict"
- "CORS error when calling external API"
- "Page works in development but fails in production"

**Debugging Specialist → Other Agents**
- Frontend Engineer (if fix requires component restructuring)
- Content Generator (if error messages need improvement)
- SEO Optimizer (if performance impacts Core Web Vitals)

## Usage with Claude Code

When invoking an agent, reference their configuration:

```
Read the agent configuration at agents/frontend-engineer.md
and complete the following task: [task description]
```

Or use the Task tool to spawn a specialized agent:

```typescript
// Frontend tasks
Task({ subagent_type: "Explore", prompt: "Review .claude\\agents\\*.md guidelines and..." })
```

## Creating New Agents

To add a new specialized agent:

1. Create `.claude/agents/[role]-[specialty].md`
2. Include these sections:
   - Identity & Expertise
   - Core Competencies
   - Project Context
   - Coding Standards
   - Collaboration Protocol
   - Quality Checklist
   - Quick Reference

3. Update this AGENTS.MD with the new agent

4. Define handoff protocols with existing agents

## Agent Principles

All agents share these core values:

1. **Quality First** - Never compromise on code quality or user experience or security
2. **Clear Communication** - Precise handoffs between agents
3. **Documentation** - Document decisions and patterns
4. **Incremental Delivery** - Ship working software frequently
5. **Continuous Learning** - Adopt best practices and new patterns