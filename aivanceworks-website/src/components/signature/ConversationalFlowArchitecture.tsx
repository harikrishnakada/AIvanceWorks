/**
 * ConversationalFlowArchitecture — signature section for Conversational AI page.
 *
 * Desktop: 6 horizontal architecture layers in a vertical stack, each
 *   expandable on click to reveal component details. Connected by flow
 *   indicators between layers showing conversation flow direction.
 * Mobile (< lg): layers stack vertically as full-width cards. Side
 *   annotations become inline labels above each card. Flow indicators
 *   simplify to vertical arrows between cards.
 *
 * Interactive: click any layer to focus it (dims others, expands detail).
 *   Matches GenAiPipelineArchitecture layer-focus pattern for consistency
 *   across the AI & ML service pillar.
 *
 * Visualization pattern: Hierarchical / architectural + data flow (catalog patterns 2+3).
 * Emotional argument: "A real conversational AI system isn't a chatbot widget —
 *   it's an architecture with channels, intent recognition, knowledge retrieval,
 *   dialogue management, guardrails, and human handoff, all orchestrated to
 *   actually resolve customer questions."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface ArchitectureLayer {
  id: string;
  title: string;
  subtitle: string;
  components: { name: string; detail: string }[];
  accent?: boolean;
}

const LAYERS: ArchitectureLayer[] = [
  {
    id: 'channels',
    title: 'Channels',
    subtitle: 'Web chat, mobile, Teams, Slack, voice',
    components: [
      { name: 'Web Chat Widget', detail: 'Embeddable chat component for your website — customizable appearance, typing indicators, and message history persistence' },
      { name: 'Mobile SDK', detail: 'Native and cross-platform mobile chat integration with push notifications and offline message queuing' },
      { name: 'Teams & Slack', detail: 'Bot framework integration for internal support — install once, available in every workspace channel' },
      { name: 'Voice Interface', detail: 'Speech-to-text and text-to-speech integration for phone and voice assistant channels' },
    ],
  },
  {
    id: 'intent',
    title: 'Intent & Context',
    subtitle: 'NLU, intent classification, session management',
    components: [
      { name: 'Intent Recognition', detail: 'LLM-powered understanding of what the user needs — beyond keyword matching to semantic comprehension of multi-sentence requests' },
      { name: 'Context Tracking', detail: 'Multi-turn conversation state management — remembers what was said, what was asked, and where the conversation is heading' },
      { name: 'Entity Extraction', detail: 'Pulls structured data from conversation — order numbers, dates, product names, account IDs — without asking the user to fill a form' },
    ],
  },
  {
    id: 'knowledge',
    title: 'Knowledge Retrieval',
    subtitle: 'RAG pipeline, knowledge base search, FAQ matching',
    accent: true,
    components: [
      { name: 'Knowledge Base Search', detail: 'Semantic search across your help articles, product docs, and FAQ content — finds the right answer by meaning, not keyword match' },
      { name: 'Document Retrieval', detail: 'RAG pipeline connecting the agent to your document corpus — ingestion, embedding, and retrieval optimized for conversational queries' },
      { name: 'Dynamic Content', detail: 'Real-time lookups against APIs, databases, and CRM records to answer account-specific and transactional questions' },
    ],
  },
  {
    id: 'dialogue',
    title: 'Dialogue Engine',
    subtitle: 'Conversation flow, response generation, LLM orchestration',
    components: [
      { name: 'Response Generation', detail: 'LLM-powered response synthesis grounded in retrieved knowledge — natural, conversational, and sourced from your content' },
      { name: 'Flow Management', detail: 'Conversation routing and branching logic — handles clarifying questions, multi-step workflows, and topic changes gracefully' },
      { name: 'Multi-Model Routing', detail: 'Route queries to the right model based on complexity and cost — simple FAQ lookups use lighter models, complex reasoning uses frontier models' },
    ],
  },
  {
    id: 'guardrails',
    title: 'Guardrails & Safety',
    subtitle: 'Content filtering, hallucination detection, response validation',
    accent: true,
    components: [
      { name: 'Content Safety', detail: 'Input and output filtering for inappropriate content, PII detection, and topic boundaries — enforced per deployment policy' },
      { name: 'Hallucination Control', detail: 'Confidence scoring on every response — answers grounded in retrieved sources, not generated from the model\'s training data' },
      { name: 'Response Validation', detail: 'Factual consistency checks against source documents before the response reaches the customer — catch errors before they cause harm' },
    ],
  },
  {
    id: 'handoff',
    title: 'Handoff & Analytics',
    subtitle: 'Human escalation, conversation intelligence, improvement loop',
    accent: true,
    components: [
      { name: 'Human Handoff', detail: 'Seamless escalation to live agents with full transcript, identified intent, and attempted resolution — customer never starts over' },
      { name: 'Conversation Analytics', detail: 'Resolution rates, handoff frequency, common intents, failed queries, and satisfaction scores — visible from day one' },
      { name: 'Improvement Loop', detail: 'Failed queries and low-confidence responses feed back into knowledge base updates and model tuning — the agent gets better with every conversation' },
    ],
  },
];

export const ConversationalFlowArchitecture = () => {
  const [focusedLayer, setFocusedLayer] = useState<string | null>(null);

  const handleLayerClick = (id: string) => {
    setFocusedLayer((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark" id="signature">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            Conversational Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Every layer a production chatbot needs
          </h2>
          <p className="text-text-light/70 max-w-2xl mx-auto text-base lg:text-lg">
            Not a chat widget bolted onto a FAQ page. A complete conversational
            system — from channel integration through intent recognition,
            knowledge retrieval, and dialogue management, with guardrails and
            human handoff at every layer.
          </p>
          <p className="text-text-light/40 text-sm mt-3">
            Click any layer to explore its components
          </p>
        </div>

        {/* Architecture stack */}
        <div className="relative max-w-3xl mx-auto space-y-3 lg:space-y-4">
          {LAYERS.map((layer, idx) => {
            const isFocused = focusedLayer === layer.id;
            const isDimmed = focusedLayer !== null && !isFocused;

            return (
              <div key={layer.id}>
                {/* Flow indicator between layers */}
                {idx > 0 && (
                  <div className="flex justify-center -mt-3 -mb-3 lg:-mt-4 lg:-mb-4 relative z-0">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-px h-3 lg:h-4 bg-brand-400/20" />
                      <svg width="8" height="6" viewBox="0 0 8 6" className="text-brand-400/30">
                        <path d="M0,0 L4,6 L8,0" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Layer card */}
                <button
                  type="button"
                  onClick={() => handleLayerClick(layer.id)}
                  aria-expanded={isFocused}
                  aria-label={`${layer.title} — ${isFocused ? 'click to collapse' : 'click to expand'}`}
                  className={cn(
                    'w-full text-left rounded-xl border transition-all duration-300 relative z-10',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                    layer.accent
                      ? 'border-accent-500/20 bg-accent-500/[0.06]'
                      : 'border-brand-400/15 bg-brand-500/[0.06]',
                    isFocused && 'ring-1 ring-brand-400/30 shadow-glow',
                    isFocused && layer.accent && 'ring-accent-400/30',
                    isDimmed && 'opacity-40',
                  )}
                >
                  {/* Layer header */}
                  <div className="px-5 py-4 lg:px-6 lg:py-5 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className={cn(
                            'inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold',
                            layer.accent
                              ? 'bg-accent-500/20 text-accent-400'
                              : 'bg-brand-500/20 text-brand-400',
                          )}
                        >
                          {idx + 1}
                        </span>
                        <h3 className="text-base lg:text-lg font-semibold text-text-light">
                          {layer.title}
                        </h3>
                      </div>
                      <p className="text-sm text-text-light/50 ml-10">
                        {layer.subtitle}
                      </p>
                    </div>

                    {/* Expand indicator */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className={cn(
                        'mt-1.5 shrink-0 transition-transform duration-200 text-text-light/30',
                        isFocused && 'rotate-180',
                      )}
                    >
                      <path d="M4,6 L8,10 L12,6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Expanded detail */}
                  {isFocused && (
                    <div className="px-5 pb-5 lg:px-6 lg:pb-6 border-t border-white/[0.06] pt-4">
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {layer.components.map((comp) => (
                          <div
                            key={comp.name}
                            className={cn(
                              'rounded-lg p-3 border',
                              layer.accent
                                ? 'bg-accent-500/[0.04] border-accent-500/10'
                                : 'bg-brand-500/[0.04] border-brand-400/10',
                            )}
                          >
                            <p className={cn(
                              'text-sm font-medium mb-1',
                              layer.accent ? 'text-accent-400' : 'text-brand-300',
                            )}>
                              {comp.name}
                            </p>
                            <p className="text-xs text-text-light/50 leading-relaxed">
                              {comp.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              </div>
            );
          })}

          {/* Side annotations — desktop only */}
          <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300/40"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Conversation Flow
            </p>
          </div>
          <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-300/40"
              style={{ writingMode: 'vertical-rl' }}
            >
              Guardrails
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
