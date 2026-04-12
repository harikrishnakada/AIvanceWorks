/**
 * ComputerVisionPipeline — signature section for the Computer Vision service page.
 *
 * Visual argument: "A production computer vision system has 4 engineered stages —
 * we build all of them, not just the model."
 *
 * Desktop (lg+): 4 horizontal pipeline stages rendered as cards in a 4-column grid,
 *   separated by horizontal flow arrows pointing right. Click any stage to expand it
 *   in-place, revealing 3 component detail cards. A second click collapses it.
 *   Only one stage can be expanded at a time; others are dimmed when one is active.
 *
 * Tablet (md): 2 × 2 grid. Horizontal arrows appear within each row; a vertical
 *   down-arrow sits between the two rows.
 *
 * Mobile (< md): Stages stack as full-width cards in a single column. Horizontal
 *   arrows are hidden; a vertical down-arrow appears between consecutive cards.
 *
 * Interaction pattern mirrors DocumentProcessingPipeline (click-to-focus / dim-others).
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
    id: 'capture',
    index: 1,
    title: 'Capture & Pre-Process',
    subtitle: 'Cameras, video streams, image APIs',
    accent: false,
    components: [
      {
        name: 'Multi-Source Image Ingestion',
        detail:
          'Connect to IP cameras, RTSP streams, S3 buckets, REST APIs, or batch image uploads — unified ingestion queue regardless of source format (JPEG, PNG, TIFF, MP4 frame extraction).',
      },
      {
        name: 'Image Quality Gate',
        detail:
          'Automated blur detection, exposure scoring, and resolution validation before any model sees the image. Low-quality frames are flagged or discarded rather than producing low-confidence garbage outputs.',
      },
      {
        name: 'Normalization & Augmentation',
        detail:
          'Deskew, contrast correction, color space conversion, and resize to model input dimensions. Test-time augmentation for improved robustness on edge-case lighting and angles your model was not trained on.',
      },
    ],
  },
  {
    id: 'inference',
    index: 2,
    title: 'Inference',
    subtitle: 'Model dispatch, edge/cloud routing',
    accent: false,
    components: [
      {
        name: 'Custom Model Execution',
        detail:
          'Your domain-specific model — trained on your image corpus, optimized with ONNX, and deployed via PyTorch or TensorFlow serving. Not a generic off-the-shelf model calibrated for someone else\'s defects.',
      },
      {
        name: 'Edge / Cloud Dispatch',
        detail:
          'Route inference to edge hardware (IoT devices, industrial cameras) for low-latency on-device processing, or to Azure cloud for compute-intensive tasks — configurable per use case and SLA requirement.',
      },
      {
        name: 'Ensemble & Confidence Averaging',
        detail:
          'For high-stakes classifications, run multiple model checkpoints or architectures and average their confidence scores. Reduces single-model variance and catches cases where one model is uncertain.',
      },
    ],
  },
  {
    id: 'postprocess',
    index: 3,
    title: 'Post-Processing',
    subtitle: 'Scoring, filtering, annotation',
    accent: true,
    components: [
      {
        name: 'Confidence Thresholding',
        detail:
          'Per-class configurable confidence gates. Detections below threshold are routed to a human review queue rather than silently dropped or passed downstream with bad data attached.',
      },
      {
        name: 'Non-Max Suppression & Deduplication',
        detail:
          'For object detection: overlapping bounding boxes resolved using IoU-based non-max suppression. Tracking across frames deduplicates the same object detected in consecutive video frames.',
      },
      {
        name: 'Annotation & Metadata Enrichment',
        detail:
          'Output structured records: bounding coordinates, class labels, confidence scores, timestamps, source camera ID, and any domain-specific metadata your downstream system needs.',
      },
    ],
  },
  {
    id: 'integrate',
    index: 4,
    title: 'Integrate & Learn',
    subtitle: 'API delivery, review queue, retraining',
    accent: false,
    components: [
      {
        name: 'Results API & Event Delivery',
        detail:
          'Detection results delivered via REST API, webhooks, Azure Event Hub, or direct database writes — formatted to match your downstream system schema (ERP, WMS, QMS, or custom).',
      },
      {
        name: 'Human Review Queue',
        detail:
          'Low-confidence detections routed to a review interface where your team confirms or corrects the model\'s output. Corrections are logged against the original image, not discarded.',
      },
      {
        name: 'Retraining Pipeline',
        detail:
          'Human corrections and confirmed edge cases feed automatically into the retraining pipeline on a scheduled cycle. Model accuracy grows with usage rather than degrading as your environment changes.',
      },
    ],
  },
];

export function ComputerVisionPipeline() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  const toggle = (id: string) => setActiveStage((prev) => (prev === id ? null : id));

  return (
    <Section tone="dark" withGrid>
      <Container>
        {/* ─── Section header ─── */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300 mb-3">
            The Full Pipeline
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-4">
            Four stages. Every one engineered.
          </h2>
          <p className="text-text-light/70 max-w-2xl mx-auto text-base sm:text-lg">
            Most computer vision vendors deliver the model. A production system requires four
            engineered stages — from raw pixel to structured business decision. Click any stage to
            see what&apos;s inside.
          </p>
        </div>

        {/* ─── Pipeline grid ─── */}
        {/* Desktop: 4-col row. Tablet (md): 2×2 grid. Mobile: single column. */}
        <div className="relative">
          {/* Stage grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
            {STAGES.map((stage, i) => {
              const isActive = activeStage === stage.id;
              const hasActiveOther = activeStage !== null && !isActive;

              return (
                <div key={stage.id} className="relative">
                  {/* ─── Horizontal arrow between stages (lg only) ─── */}
                  {i < STAGES.length - 1 && (
                    <div
                      className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center"
                      aria-hidden="true"
                    >
                      <div className="w-4 h-px bg-brand-400/40" />
                      <svg
                        width="6"
                        height="9"
                        viewBox="0 0 6 9"
                        fill="none"
                        className="text-brand-400/40"
                      >
                        <path d="M1 1L5 4.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  {/* ─── Down arrow between rows on tablet (md only, after item 1) ─── */}
                  {i === 1 && (
                    <div
                      className="hidden md:flex lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 flex-col items-center"
                      aria-hidden="true"
                    >
                      <div className="h-3 w-px bg-brand-400/30" />
                      <svg width="9" height="6" viewBox="0 0 9 6" fill="none" className="text-brand-400/30">
                        <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  {/* ─── Down arrow on mobile (between all stages) ─── */}
                  {i < STAGES.length - 1 && (
                    <div
                      className="flex md:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 flex-col items-center z-10"
                      aria-hidden="true"
                    >
                      <div className="h-3 w-px bg-brand-400/30" />
                      <svg width="9" height="6" viewBox="0 0 9 6" fill="none" className="text-brand-400/30">
                        <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  {/* ─── Stage card ─── */}
                  <button
                    onClick={() => toggle(stage.id)}
                    aria-expanded={isActive}
                    aria-controls={`cv-stage-detail-${stage.id}`}
                    className={cn(
                      'w-full text-left rounded-xl border p-5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 focus-visible:ring-offset-surface-dark',
                      isActive
                        ? 'bg-surface-elevated border-brand-400/60 shadow-brand-panel'
                        : 'bg-glass-bg border-glass-border hover:border-brand-400/40 hover:bg-surface-elevated/80',
                      hasActiveOther && 'opacity-50',
                    )}
                  >
                    {/* Step badge + accent indicator */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={cn(
                          'inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0',
                          stage.accent
                            ? 'bg-accent-500 text-white'
                            : 'bg-brand-600 text-white',
                        )}
                      >
                        {stage.index}
                      </span>
                      {stage.accent && (
                        <span className="text-xs font-semibold text-accent-400 uppercase tracking-wider">
                          Core
                        </span>
                      )}
                    </div>

                    {/* Title & subtitle */}
                    <h3 className="text-sm font-bold text-text-light mb-1 leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-text-light/55 leading-relaxed">
                      {stage.subtitle}
                    </p>

                    {/* Expand indicator */}
                    <div className="mt-4 flex items-center gap-1.5">
                      <span className="text-xs font-medium text-brand-300">
                        {isActive ? 'Close' : 'What\'s inside'}
                      </span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className={cn('text-brand-300 transition-transform duration-200', isActive && 'rotate-180')}
                      >
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>

                  {/* ─── Expanded detail panel ─── */}
                  <div
                    id={`cv-stage-detail-${stage.id}`}
                    role="region"
                    aria-label={`${stage.title} components`}
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isActive ? 'max-h-[600px] opacity-100 mt-3' : 'max-h-0 opacity-0',
                    )}
                  >
                    <div className="grid gap-2">
                      {stage.components.map((comp) => (
                        <div
                          key={comp.name}
                          className="rounded-lg bg-surface-dark border border-border-dark p-4"
                        >
                          <p className="text-xs font-bold text-brand-300 mb-1.5">{comp.name}</p>
                          <p className="text-xs text-text-light/65 leading-relaxed">{comp.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Pipeline caption ─── */}
        <p className="text-center text-xs text-text-light/40 mt-8 max-w-xl mx-auto">
          Production computer vision requires all four stages to be production-grade. A high-accuracy
          model with a weak integration layer produces unreliable business outcomes.
        </p>
      </Container>
    </Section>
  );
}
