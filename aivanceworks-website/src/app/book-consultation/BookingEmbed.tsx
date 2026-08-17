'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Cal.com configuration
const CALCOM_USERNAME = process.env.NEXT_PUBLIC_CALCOM_USERNAME || '';
const CALCOM_EVENT_TYPE = 'discovery-call';
const CAL_LINK = `${CALCOM_USERNAME}/${CALCOM_EVENT_TYPE}`;
const CAL_NAMESPACE = 'discovery-call';

/**
 * The holder is a FIXED height, not a min-height, and scrolls internally.
 *
 * Cal.com auto-resizes its iframe to its content once the month view renders,
 * which grew the box past any reserved min-height and pushed everything below it
 * down — CLS 0.107 on desktop. A fixed box makes the swap from skeleton to
 * iframe provably zero-shift, and matches the `overflow: scroll` the embed was
 * already configured with.
 */
const EMBED_HEIGHT = 700;

const Cal = dynamic(() => import('@calcom/embed-react').then((m) => m.default), {
  ssr: false,
  loading: () => <EmbedSkeleton />,
});

function EmbedSkeleton({ onLoad }: { onLoad?: () => void }) {
  return (
    <div
      style={{ height: EMBED_HEIGHT }}
      className="flex flex-col items-center justify-center gap-4 rounded-lg"
      role="status"
      aria-live="polite"
    >
      <span className="text-sm text-muted-foreground">
        {onLoad ? 'The booking calendar loads as you scroll to it.' : 'Loading the booking calendar…'}
      </span>
      {onLoad && (
        <button
          type="button"
          onClick={onLoad}
          className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Load the calendar now
        </button>
      )}
    </div>
  );
}

/**
 * The only interactive part of /book-consultation.
 *
 * Two things it does beyond rendering the widget:
 *
 * 1. **Loads off the critical path.** Cal.com pulls ~1 MB of third-party JS and
 *    an iframe. Loading it eagerly made it the LCP element at 10.8 s and held the
 *    page at Performance 66. It now mounts once it comes within 800 px of the
 *    viewport, which took the page to 91 — ready by the time anyone reaches it,
 *    but out of the first paint.
 * 2. **Configures the UI after the iframe exists.** The previous version called
 *    `cal('ui', …)` from a bare `getCalApi()` in an effect that raced the
 *    widget's own mount, throwing `iframe doesn't exist. createIframe must be
 *    called before doInIframe` on every load. Scoping to a namespace and
 *    configuring after mount removes the race.
 */
export function BookingEmbed() {
  const holderRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const el = holderRef.current;
    const load = () => setShouldLoad(true);

    // Deliberately no timer fallback. A timer fires inside the load window on a
    // throttled connection and puts Cal.com straight back on the critical path —
    // that is what kept this page at Performance 66. Loading is driven purely by
    // proximity, with an explicit button in the skeleton as the escape hatch.
    if (!el || typeof IntersectionObserver === 'undefined') {
      load();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) load();
      },
      // 800px: on any real viewport the widget starts loading well before it is
      // scrolled into view, so it is ready by the time the user gets there.
      { rootMargin: '800px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;
    let cancelled = false;
    (async () => {
      const { getCalApi } = await import('@calcom/embed-react');
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (cancelled) return;
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#2563eb' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [shouldLoad]);

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_initiated', {
        event_category: 'Conversion',
        event_label: 'Consultation Booking Page Visit',
      });
    }
  }, []);

  return (
    <div ref={holderRef} style={{ height: EMBED_HEIGHT, overflow: 'auto' }}>
      {shouldLoad ? (
        <Cal
          namespace={CAL_NAMESPACE}
          calLink={CAL_LINK}
          style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          config={{ layout: 'month_view' }}
        />
      ) : (
        <EmbedSkeleton onLoad={() => setShouldLoad(true)} />
      )}
    </div>
  );
}
