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
| **SEO Optimizer** | `.claude/agents/seo-geo-aeo-content-optimizer.md` | - | Active |

## Agent Collaboration

Agents work together following a defined handoff protocol:

```
                      ┌─────────────────┐
                      │    Frontend     │
                      │    Engineer     │
                      └─────────────────┘
                                │                       
                                ┼
                                ▼
                    ┌─────────────────────┐
                    │   SEO Specialist    │
                    │   Content Writer    │
                    └─────────────────────┘
```

### When Agents Request Help

**Frontend → SEO/GEO/AEOContent**
- Copy and messaging
- Meta descriptions
- Keyword optimization

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