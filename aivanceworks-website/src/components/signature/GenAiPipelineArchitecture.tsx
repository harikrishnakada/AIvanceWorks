/**
 * GenAiPipelineArchitecture — signature section for Generative AI page.
 *
 * Desktop: 6 horizontal pipeline stages in a vertical stack, each
 *   expandable on click to reveal component details. Connected by flow
 *   indicators between stages showing data flow direction.
 * Mobile (< lg): stages stack vertically as full-width cards. Side
 *   annotations become inline labels above each card. Flow indicators
 *   simplify to vertical arrows between cards.
 *
 * Interactive: click any stage to focus it (dims others, expands detail).
 *   Matches SaasArchitectureBlueprint layer-focus pattern.
 *
 * Visualization pattern: Hierarchical / architectural + data flow (catalog patterns 2+3).
 * Emotional argument: "Every production AI system has these layers —
 *   data, ingestion, knowledge, orchestration, generation, guardrails.
 *   We build all of them."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface PipelineStage {
  id: string;
  title: string;
  subtitle: string;
  components: { name: string; detail: string }[];
  accent?: boolean;
}

const STAGES: PipelineStage[] = [
  {
    id: 'sources',
    title: 'Data Sources',
    subtitle: 'Documents, databases, APIs, real-time streams',
    components: [
      { name: 'Document Connectors', detail: 'PDF, DOCX, Confluence, SharePoint, S3 — extraction and normalization from any document source' },
      { name: 'Database Connectors', detail: 'SQL, NoSQL, and data warehouse integration for structured knowledge' },
      { name: 'API & Event Streams', detail: 'REST, GraphQL, and event-driven connectors for real-time data ingestion' },
    ],
  },
  {
    id: 'ingestion',
    title: 'Ingestion & Embedding',
    subtitle: 'Chunking, embedding, and indexing pipeline',
    components: [
      { name: 'Semantic Chunking', detail: 'Context-aware document splitting optimized for retrieval precision — not naive fixed-size windows' },
      { name: 'Embedding Pipeline', detail: 'Batch and real-time embedding with model selection (OpenAI, Azure, open-source) and versioning' },
      { name: 'Index Management', detail: 'Incremental updates, deduplication, and metadata enrichment for vector and hybrid indexes' },
    ],
  },
  {
    id: 'knowledge',
    title: 'Knowledge Store',
    subtitle: 'Vector database, hybrid search, metadata',
    accent: true,
    components: [
      { name: 'Vector Database', detail: 'ChromaDB, Azure AI Search, or Pinecone — chosen based on scale, latency, and filtering needs' },
      { name: 'Hybrid Search', detail: 'Dense vector retrieval combined with sparse keyword search for comprehensive recall and precision' },
      { name: 'Metadata Filtering', detail: 'Tenant-scoped, permission-aware, and attribute-filtered retrieval for enterprise data access patterns' },
    ],
  },
  {
    id: 'orchestration',
    title: 'Orchestration',
    subtitle: 'Agent routing, tool calls, multi-step reasoning',
    components: [
      { name: 'Agent Framework', detail: 'LangChain, LangGraph, or Semantic Kernel — multi-step reasoning with tool use and human-in-the-loop' },
      { name: 'Model Router', detail: 'Query classification and routing to the right model based on complexity, cost, and latency targets' },
      { name: 'Tool Registry', detail: 'Declarative tool definitions for API calls, database queries, calculations, and external service integration' },
    ],
  },
  {
    id: 'generation',
    title: 'LLM Layer',
    subtitle: 'Model selection, prompts, response generation',
    accent: true,
    components: [
      { name: 'Multi-Model Support', detail: 'GPT-4, Claude, Llama, Mistral — swap or add models without re-architecting the pipeline' },
      { name: 'Prompt Engineering', detail: 'Structured prompt templates with few-shot examples, chain-of-thought, and system instructions' },
      { name: 'Response Synthesis', detail: 'Citation injection, source attribution, and structured output formatting for downstream consumption' },
    ],
  },
  {
    id: 'guardrails',
    title: 'Guardrails & Output',
    subtitle: 'Safety, evaluation, monitoring, production API',
    accent: true,
    components: [
      { name: 'Content Safety', detail: 'Input/output filtering, PII detection, and topic boundary enforcement per deployment policy' },
      { name: 'Evaluation Suite', detail: 'Retrieval quality scoring, hallucination detection, and answer relevance metrics — measured continuously' },
      { name: 'Observability', detail: 'Prompt traces, latency metrics, token cost tracking, and quality dashboards for production monitoring' },
    ],
  },
];

export const GenAiPipelineArchitecture = () => {
  const [focusedStage, setFocusedStage] = useState<string | null>(null);

  const handleStageClick = (id: string) => {
    setFocusedStage((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark" id="signature">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            Pipeline Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Every layer a production AI system needs
          </h2>
          <p className="text-text-light/70 max-w-2xl mx-auto text-base lg:text-lg">
            Not an LLM API call wrapped in a web app. A complete pipeline from
            your data sources through retrieval, orchestration, and generation —
            with guardrails and monitoring at every stage.
          </p>
          <p className="text-text-light/40 text-sm mt-3">
            Click any stage to explore its components
          </p>
        </div>

        {/* Pipeline stack */}
        <div className="relative max-w-3xl mx-auto space-y-3 lg:space-y-4">
          {STAGES.map((stage, idx) => {
            const isFocused = focusedStage === stage.id;
            const isDimmed = focusedStage !== null && !isFocused;

            return (
              <div key={stage.id}>
                {/* Flow indicator between stages */}
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

                {/* Stage card */}
                <button
                  type="button"
                  onClick={() => handleStageClick(stage.id)}
                  aria-expanded={isFocused}
                  aria-label={`${stage.title} — ${isFocused ? 'click to collapse' : 'click to expand'}`}
                  className={cn(
                    'w-full text-left rounded-xl border transition-all duration-300 relative z-10',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                    stage.accent
                      ? 'border-accent-500/20 bg-accent-500/[0.06]'
                      : 'border-brand-400/15 bg-brand-500/[0.06]',
                    isFocused && 'ring-1 ring-brand-400/30 shadow-glow',
                    isFocused && stage.accent && 'ring-accent-400/30',
                    isDimmed && 'opacity-40',
                  )}
                >
                  {/* Stage header */}
                  <div className="px-5 py-4 lg:px-6 lg:py-5 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className={cn(
                            'inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold',
                            stage.accent
                              ? 'bg-accent-500/20 text-accent-400'
                              : 'bg-brand-500/20 text-brand-400',
                          )}
                        >
                          {idx + 1}
                        </span>
                        <h3 className="text-base lg:text-lg font-semibold text-text-light">
                          {stage.title}
                        </h3>
                      </div>
                      <p className="text-sm text-text-light/50 ml-10">
                        {stage.subtitle}
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
                        {stage.components.map((comp) => (
                          <div
                            key={comp.name}
                            className={cn(
                              'rounded-lg p-3 border',
                              stage.accent
                                ? 'bg-accent-500/[0.04] border-accent-500/10'
                                : 'bg-brand-500/[0.04] border-brand-400/10',
                            )}
                          >
                            <p className={cn(
                              'text-sm font-medium mb-1',
                              stage.accent ? 'text-accent-400' : 'text-brand-300',
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
              Data Flow
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
