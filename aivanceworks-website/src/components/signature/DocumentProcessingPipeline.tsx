/**
 * DocumentProcessingPipeline — signature section for the NLP & Document AI service page.
 *
 * Desktop (lg+): 4 horizontal pipeline stages rendered as cards in a 4-column grid,
 *   separated by horizontal flow arrows pointing right. Click any stage to expand it
 *   in-place, revealing 3 component detail cards. A second click collapses it.
 *   Only one stage can be expanded at a time; others are dimmed when one is active.
 *
 * Tablet (md): 2 × 2 grid. Horizontal arrows appear within each row; a vertical
 *   down-arrow sits between the two rows.
 *
 * Mobile (< lg): Stages stack as full-width cards in a single column. Horizontal
 *   arrows are hidden; a vertical down-arrow appears between consecutive cards.
 *
 * Interaction pattern mirrors GenAiPipelineArchitecture (click-to-focus / dim-others).
 *
 * Token rules: NO raw Tailwind color utilities. Every color comes from design-system
 * tokens (bg-surface-*, text-text-*, border-border-*, bg-brand-*, text-brand-*,
 * bg-accent-*, text-accent-*, from-surface-dark-*, etc.).
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface PipelineStage {
  id: string;
  index: number;
  title: string;
  subtitle: string;
  accent: boolean;
  components: { name: string; detail: string }[];
}

const STAGES: PipelineStage[] = [
  {
    id: 'intake',
    index: 1,
    title: 'Document Intake',
    subtitle: 'PDFs, scans, emails, forms, images',
    accent: false,
    components: [
      {
        name: 'Multi-Format Connectors',
        detail:
          'Ingest PDF, TIFF, PNG, DOCX, EML, and web forms from S3, SharePoint, email servers, or direct API upload — single unified queue regardless of source.',
      },
      {
        name: 'Preprocessing & Normalization',
        detail:
          'Deskew, denoise, contrast-correct, and re-orient scanned pages before any ML model sees the document. Garbage in is caught here, not downstream.',
      },
      {
        name: 'Quality Assessment',
        detail:
          'Automated blur, resolution, and completeness scoring. Low-confidence documents are flagged for human review before entering the extraction stage.',
      },
    ],
  },
  {
    id: 'extraction',
    index: 2,
    title: 'Extraction & Recognition',
    subtitle: 'OCR, layout analysis, field extraction',
    accent: false,
    components: [
      {
        name: 'Document Intelligence (OCR + Layout)',
        detail:
          'Azure Document Intelligence or AWS Textract with layout-aware models that understand columns, headers, footers, and multi-column tables — not just raw text streams.',
      },
      {
        name: 'Field Extraction (Tables, Key-Value, Entities)',
        detail:
          'Named-entity recognition, key-value pair detection, and structured table parsing trained on domain-specific document types for your industry.',
      },
      {
        name: 'Handwriting Recognition',
        detail:
          'HTR models fine-tuned on clinical notes, legal annotations, and financial forms where handwritten fields mix with printed content on the same page.',
      },
    ],
  },
  {
    id: 'classification',
    index: 3,
    title: 'Classification & Validation',
    subtitle: 'Routing, confidence scoring, human review',
    accent: true,
    components: [
      {
        name: 'Document Classifier',
        detail:
          'Multi-label classification routes each document to the correct schema, workflow, and downstream system — invoices, contracts, clinical records, and forms each follow their own path.',
      },
      {
        name: 'Confidence Scoring',
        detail:
          'Per-field confidence scores with configurable thresholds. High-confidence extractions flow automatically; borderline fields surface directly to the review queue.',
      },
      {
        name: 'Human-in-the-Loop Review Queue',
        detail:
          'Browser-based review interface where operators correct low-confidence fields and confirm classifications. Every correction retrains the extraction models over time.',
      },
    ],
  },
  {
    id: 'output',
    index: 4,
    title: 'Structured Output',
    subtitle: 'JSON, search index, API, system integration',
    accent: true,
    components: [
      {
        name: 'Schema Mapping',
        detail:
          'Extracted fields are normalized and mapped to your target data model — flat JSON, nested objects, or relational rows — with versioned schema contracts for downstream consumers.',
      },
      {
        name: 'Search Index (Semantic + Keyword)',
        detail:
          'Documents and their extracted fields are indexed for both vector-similarity search and BM25 keyword retrieval, enabling intelligent document discovery at scale.',
      },
      {
        name: 'System Connectors (ERP, CRM, Workflow)',
        detail:
          'Structured data is pushed to Salesforce, SAP, ServiceNow, or any REST/webhook destination. Failed deliveries are queued, retried, and alerted on — no silent drops.',
      },
    ],
  },
];

// ─── Horizontal flow arrow (desktop, between stage columns) ──────────────────
const HorizontalArrow = () => (
  <div
    aria-hidden="true"
    className="hidden lg:flex flex-col items-center justify-center shrink-0 w-8"
  >
    <svg
      width="32"
      height="16"
      viewBox="0 0 32 16"
      fill="none"
      className="text-brand-400/40"
    >
      <title>Flow arrow</title>
      <desc>Horizontal arrow indicating left-to-right data flow</desc>
      <line x1="0" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 4 L28 8 L20 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// ─── Vertical flow arrow (mobile/tablet, between stacked rows) ───────────────
const VerticalArrow = () => (
  <div
    aria-hidden="true"
    className="flex lg:hidden justify-center py-1"
  >
    <svg
      width="16"
      height="32"
      viewBox="0 0 16 32"
      fill="none"
      className="text-brand-400/40"
    >
      <title>Flow arrow</title>
      <desc>Vertical arrow indicating top-to-bottom data flow</desc>
      <line x1="8" y1="0" x2="8" y2="24" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 20 L8 28 L12 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// ─── Single pipeline stage card ───────────────────────────────────────────────
interface StageCardProps {
  stage: PipelineStage;
  isFocused: boolean;
  isDimmed: boolean;
  onClick: (id: string) => void;
}

const StageCard = ({ stage, isFocused, isDimmed, onClick }: StageCardProps) => (
  <button
    type="button"
    onClick={() => onClick(stage.id)}
    aria-expanded={isFocused}
    aria-label={`${stage.title} — ${isFocused ? 'click to collapse' : 'click to expand'}`}
    className={cn(
      'w-full text-left rounded-xl border transition-all duration-300 relative',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
      // Default idle state
      !isFocused && !isDimmed && 'bg-glass-bg border-glass-border backdrop-blur-sm',
      // Active / expanded
      isFocused &&
        'bg-surface-elevated border-brand-400 shadow-[0_0_24px_-4px_var(--color-brand-400)]',
      // Dimmed (another stage is open)
      isDimmed && 'bg-glass-bg border-glass-border backdrop-blur-sm opacity-40',
      // Motion
      'motion-safe:transition-[border-color,box-shadow,opacity]',
    )}
  >
    {/* ── Card header ───────────────────────────────────────────────────── */}
    <div className="px-5 py-4 lg:px-5 lg:py-5 flex items-start justify-between gap-3">
      <div className="flex-1 min-w-0">
        {/* Stage number badge + title */}
        <div className="flex items-center gap-2.5 mb-1.5">
          <span
            className={cn(
              'inline-flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold shrink-0',
              stage.accent
                ? 'bg-accent-500/20 text-accent-400'
                : 'bg-brand-500/20 text-brand-400',
            )}
          >
            {stage.index}
          </span>
          <h3 className="text-sm lg:text-base font-semibold text-text-light leading-snug">
            {stage.title}
          </h3>
        </div>
        {/* Subtitle */}
        <p className="text-xs text-text-light/50 ml-[34px] leading-relaxed">
          {stage.subtitle}
        </p>
      </div>

      {/* Chevron */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        className={cn(
          'mt-1.5 shrink-0 text-text-light/30 transition-transform duration-200',
          isFocused && 'rotate-180',
          'motion-reduce:transition-none',
        )}
      >
        <path
          d="M3 5 L7 9 L11 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* ── Expanded component grid ────────────────────────────────────────── */}
    {isFocused && (
      <div
        className={cn(
          'px-5 pb-5 lg:px-5 lg:pb-5 pt-3',
          'border-t border-border-dark',
        )}
      >
        <div className="grid gap-2.5 sm:grid-cols-1 lg:grid-cols-3">
          {stage.components.map((comp) => (
            <div
              key={comp.name}
              className={cn(
                'rounded-lg p-3 border',
                stage.accent
                  ? 'bg-accent-500/[0.06] border-accent-500/15'
                  : 'bg-brand-500/[0.06] border-brand-400/15',
              )}
            >
              <p
                className={cn(
                  'text-xs font-semibold mb-1.5 leading-snug',
                  stage.accent ? 'text-accent-300' : 'text-brand-300',
                )}
              >
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
);

// ─── Main export ──────────────────────────────────────────────────────────────
export const DocumentProcessingPipeline = () => {
  const [focusedStage, setFocusedStage] = useState<string | null>(null);

  const handleStageClick = (id: string) => {
    setFocusedStage((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark" id="signature">
      <Container>
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-300 mb-3">
            The Pipeline
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-light mb-4">
            From messy documents to structured data
          </h2>
          <p className="text-text-light/60 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Every document that enters the system is preprocessed, extracted,
            classified, validated, and delivered as clean structured data — from
            any source, at any scale. This is a system, not just OCR.
          </p>
          <p className="text-text-light/35 text-sm mt-3">
            Click any stage to explore its components
          </p>
        </div>

        {/* ── Pipeline: desktop (lg+) 4-column row with arrows ─────────────── */}
        {/* Mobile / tablet: single column stack with vertical arrows ───────── */}

        {/* Mobile/tablet layout — single column */}
        <div className="lg:hidden max-w-xl mx-auto">
          {STAGES.map((stage, idx) => (
            <div key={stage.id}>
              {idx > 0 && <VerticalArrow />}
              <StageCard
                stage={stage}
                isFocused={focusedStage === stage.id}
                isDimmed={focusedStage !== null && focusedStage !== stage.id}
                onClick={handleStageClick}
              />
            </div>
          ))}
        </div>

        {/* Desktop layout — 4 columns with horizontal arrows */}
        <div className="hidden lg:flex items-start gap-0">
          {STAGES.map((stage, idx) => (
            <div key={stage.id} className="flex items-start gap-0 flex-1 min-w-0">
              {idx > 0 && (
                <HorizontalArrow />
              )}
              <div className="flex-1 min-w-0">
                <StageCard
                  stage={stage}
                  isFocused={focusedStage === stage.id}
                  isDimmed={focusedStage !== null && focusedStage !== stage.id}
                  onClick={handleStageClick}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Flow label – desktop only ─────────────────────────────────── */}
        <div className="hidden lg:flex justify-between mt-4 px-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300/35">
            Raw Input
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-300/35">
            Structured Output
          </p>
        </div>
      </Container>
    </Section>
  );
};
