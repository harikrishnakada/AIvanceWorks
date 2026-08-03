'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseCarouselAutoplayOptions {
  /** Advance callback. Should be referentially stable (wrap in useCallback). */
  onTick: () => void;
  /** Interval between advances, in ms. */
  intervalMs: number;
  /**
   * Set false to disable autoplay entirely for the current layout — e.g. a
   * carousel that is `lg:hidden` should not run a timer on desktop.
   * Default: true.
   */
  enabled?: boolean;
}

/**
 * Autoplay timer for the homepage carousels.
 *
 * Three things it guarantees that a bare `setInterval` did not:
 *
 * 1. **Off-screen carousels do not tick.** Every advance sets React state, which
 *    re-renders the section and its images. Four homepage carousels ticking
 *    while the user reads the hero was pure main-thread cost with nothing
 *    visible to show for it.
 * 2. **`prefers-reduced-motion` is respected.** WCAG 2.3.3; also stops the timer
 *    for users who have asked for no motion.
 * 3. **Tab-hidden pages do not tick.** Background tabs get throttled anyway, but
 *    stopping cleanly avoids a burst of queued advances on return.
 *
 * It also exposes `isPaused` / `setPaused` so callers can render an explicit
 * pause control (WCAG 2.2.2, which requires a mechanism to stop moving content).
 */
export function useCarouselAutoplay<T extends HTMLElement>({
  onTick,
  intervalMs,
  enabled = true,
}: UseCarouselAutoplayOptions) {
  /** Attach to the element that must be on screen for autoplay to run. */
  const containerRef = useRef<T | null>(null);
  const [isPaused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const onVisibility = () => setIsTabVisible(!document.hidden);
    onVisibility();
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      // No observer (very old browser / jsdom): fall back to always-on so the
      // carousel still advances rather than silently freezing.
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '0px', threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isRunning =
    enabled && isVisible && isTabVisible && !isPaused && !prefersReducedMotion;

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(onTick, intervalMs);
    return () => clearInterval(id);
  }, [isRunning, onTick, intervalMs]);

  /** Call from prev/next/dot handlers: manual interaction stops autoplay. */
  const pause = useCallback(() => setPaused(true), []);

  return {
    containerRef,
    /** True when the user (or reduced-motion) has stopped autoplay. */
    isPaused: isPaused || prefersReducedMotion,
    /** True when the timer is actually ticking right now. */
    isRunning,
    setPaused,
    pause,
    /** Hide the pause control when motion is off at the OS level. */
    prefersReducedMotion,
  };
}
