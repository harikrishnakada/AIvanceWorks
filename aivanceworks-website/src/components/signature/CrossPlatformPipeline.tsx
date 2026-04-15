/**
 * CrossPlatformPipeline — signature section for the Mobile App Development page.
 *
 * Visual concept: A horizontal pipeline showing how a shared codebase flows through
 * three layers (Shared Logic → Platform Bridge → Store Output) to produce both
 * iOS and Android apps. Each layer has cards showing what belongs to it.
 * The pipeline visually demonstrates the "one team, both platforms" promise.
 *
 * Visualization pattern: Hierarchical/Flow hybrid (constitution §8.3 patterns 2+3).
 * Emotional argument: "One shared codebase, one engineering team — your app reaches
 * both platforms without duplication, fragmentation, or double maintenance."
 *
 * Mobile layout:
 *   - Desktop (lg+): 3-column horizontal pipeline with connecting arrows.
 *   - Tablet (md): 3 columns, tighter spacing, connecting arrows preserved.
 *   - Mobile (<md): cards stack vertically with a connecting vertical line.
 *     Each layer card shows its label and contents. Horizontal arrows
 *     are replaced by vertical chevrons.
 *
 * Color strategy: all fills/strokes use token-backed Tailwind classes.
 * No hardcoded hex values. Respects prefers-reduced-motion.
 */

'use client';

import { Code2, Layers, Smartphone, Apple, ArrowRight, ChevronDown } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface LayerData {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  items: string[];
  accent: 'brand' | 'accent' | 'mixed';
}

const layers: LayerData[] = [
  {
    icon: <Code2 className="h-6 w-6" />,
    label: 'Shared Layer',
    title: 'Your Business Logic',
    description: 'Written once, runs everywhere. The core of your app lives in a single codebase.',
    items: [
      'Business logic & state management',
      'API integration & data models',
      'Authentication & authorization',
      'Navigation & routing',
      'Shared UI components',
    ],
    accent: 'brand',
  },
  {
    icon: <Layers className="h-6 w-6" />,
    label: 'Platform Bridge',
    title: 'Native Access',
    description: 'Platform-specific APIs accessed through a thin abstraction — camera, GPS, biometrics, push.',
    items: [
      'Camera, GPS, and sensors',
      'Biometric authentication',
      'Push notification services',
      'File system and storage',
      'Platform-specific UI polish',
    ],
    accent: 'mixed',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    label: 'Store Output',
    title: 'Both App Stores',
    description: 'One CI/CD pipeline builds, signs, and submits to both stores in a single release.',
    items: [
      'Apple App Store submission',
      'Google Play Store submission',
      'Automated build and signing',
      'Screenshot and metadata generation',
      'Staged rollout and versioning',
    ],
    accent: 'accent',
  },
];

function LayerCard({ layer, index }: { layer: LayerData; index: number }) {
  const isMiddle = index === 1;

  const accentClasses = {
    brand: {
      iconBg: 'bg-brand-500/20 text-brand-300',
      badge: 'text-brand-400',
      dot: 'bg-brand-400',
      border: 'border-brand-500/25',
      cardBg: 'bg-surface-elevated',
    },
    mixed: {
      iconBg: 'bg-brand-500/15 text-brand-300',
      badge: 'text-brand-400',
      dot: 'bg-brand-400/80',
      border: 'border-brand-500/20 border-accent-500/20',
      cardBg: 'bg-brand-500/[0.04]',
    },
    accent: {
      iconBg: 'bg-accent-500/20 text-accent-400',
      badge: 'text-accent-400',
      dot: 'bg-accent-400',
      border: 'border-accent-500/25',
      cardBg: 'bg-surface-elevated',
    },
  };

  const classes = accentClasses[layer.accent];

  return (
    <div
      className={`relative flex flex-col rounded-xl border p-6 transition-all ${classes.border} ${
        isMiddle ? 'shadow-brand-panel ' + classes.cardBg : classes.cardBg
      }`}
    >
      {/* Layer badge */}
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${classes.iconBg}`}>
          {layer.icon}
        </div>
        <div>
          <span className={`text-xs font-semibold uppercase tracking-wider ${classes.badge}`}>
            {layer.label}
          </span>
          <h3 className="text-lg font-bold text-text-light">{layer.title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-text-light/80">
        {layer.description}
      </p>

      {/* Items */}
      <ul className="mt-auto space-y-1.5">
        {layer.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-text-light/70">
            <span className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${classes.dot}`} />
            {item}
          </li>
        ))}
      </ul>

      {/* Output badges for Store Output layer */}
      {index === 2 && (
        <div className="mt-4 flex gap-2">
          <div className="flex items-center gap-1.5 rounded-md bg-brand-500/10 px-2.5 py-1">
            <Apple className="h-3 w-3 text-brand-300" />
            <span className="text-xs font-medium text-brand-300">iOS</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-md bg-accent-500/10 px-2.5 py-1">
            <Smartphone className="h-3 w-3 text-accent-400" />
            <span className="text-xs font-medium text-accent-400">Android</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function CrossPlatformPipeline() {
  return (
    <Section tone="dark" withGrid size="lg">
      <Container>
        {/* Section header */}
        <div className="mb-10 text-center md:mb-14">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-brand-400 sm:text-sm">
            Cross-Platform Architecture
          </span>
          <h2 className="mb-3 text-2xl font-bold text-text-light sm:text-3xl md:text-4xl">
            One codebase, both platforms
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-text-light/70 sm:text-base">
            Your mobile app flows through three layers — shared business logic, a thin
            platform bridge, and a unified deployment pipeline that ships to both stores
            from a single release.
          </p>
        </div>

        {/* Desktop: horizontal 3-column pipeline with connecting arrows */}
        <div className="hidden md:block">
          <div className="mx-auto grid max-w-5xl grid-cols-3 items-stretch gap-4 lg:gap-6">
            {layers.map((layer, i) => (
              <div key={layer.label} className="relative h-full">
                <LayerCard layer={layer} index={i} />

                {/* Connecting arrow to next card */}
                {i < layers.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 flex -translate-y-1/2 lg:-right-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-brand-500/30 bg-surface-elevated lg:h-7 lg:w-7">
                      <ArrowRight className="h-3 w-3 text-brand-400 lg:h-3.5 lg:w-3.5" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom summary bar */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand-400" />
              <span className="text-xs font-medium text-text-light/70">Shared across platforms</span>
            </div>
            <div className="hidden h-4 w-px bg-border-dark md:block" />
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand-400/50" />
              <span className="text-xs font-medium text-text-light/70">Platform-specific (thin layer)</span>
            </div>
            <div className="hidden h-4 w-px bg-border-dark md:block" />
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent-400" />
              <span className="text-xs font-medium text-text-light/70">Automated deployment</span>
            </div>
          </div>
        </div>

        {/* Mobile: vertical stack with connecting line */}
        <div className="md:hidden">
          <div className="relative space-y-6 pl-10">
            {/* Vertical connecting line */}
            <div className="absolute bottom-6 left-4 top-6 w-0.5 bg-gradient-to-b from-brand-500 via-brand-400 to-accent-400/40" />

            {layers.map((layer, i) => (
              <div key={layer.label} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-10 top-6 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-brand-400 bg-surface-elevated">
                  <span className="text-[11px] font-bold text-brand-300">{i + 1}</span>
                </div>

                <LayerCard layer={layer} index={i} />

                {/* Arrow between cards */}
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ChevronDown className="h-4 w-4 text-brand-400/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export type CrossPlatformPipelineProps = Record<string, never>;
