'use client';

import { useEffect, useRef } from 'react';

/**
 * Hook that adds scroll-triggered reveal animations to elements.
 * Applies the 'visible' class when elements with the 'reveal' class
 * enter the viewport.
 *
 * Uses IntersectionObserver for performance.
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Make all elements visible immediately
      const elements = containerRef.current
        ? containerRef.current.querySelectorAll('.reveal')
        : document.querySelectorAll('.reveal');
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const target = containerRef.current || document;
    const elements = target.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
