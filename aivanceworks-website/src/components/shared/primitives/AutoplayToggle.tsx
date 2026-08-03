'use client';

import { Pause, Play } from 'lucide-react';

export interface AutoplayToggleProps {
  /** True when autoplay is currently stopped. */
  isPaused: boolean;
  onToggle: (paused: boolean) => void;
  /** What is moving, e.g. "services carousel". Used in the accessible name. */
  label: string;
  /** Extra classes for the button, so each section can match its own tone. */
  className?: string;
}

/**
 * Explicit stop/start control for auto-advancing content.
 *
 * WCAG 2.2.2 (Pause, Stop, Hide) requires a mechanism to pause any motion that
 * starts automatically and runs for more than five seconds. Lighthouse does not
 * audit this, so it stayed broken while the score read 100 — the homepage
 * carousels advanced with no way to stop them.
 */
export function AutoplayToggle({ isPaused, onToggle, label, className }: AutoplayToggleProps) {
  const Icon = isPaused ? Play : Pause;
  return (
    <button
      type="button"
      onClick={() => onToggle(!isPaused)}
      // 24px minimum hit area — target-size (WCAG 2.5.8).
      className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors ${className ?? 'text-gray-400 hover:text-brand-600'}`}
      aria-label={isPaused ? `Start ${label}` : `Pause ${label}`}
      aria-pressed={isPaused}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
    </button>
  );
}
