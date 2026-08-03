'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

/**
 * Google Tag Manager, loaded on the first sign of user engagement rather than
 * during page load.
 *
 * GTM pulls ~280 KB of third-party JavaScript (gtm.js + gtag.js). Measured on a
 * throttled mobile profile it was the single largest contributor to Total
 * Blocking Time site-wide — on /contact it accounted for ~669 ms of script
 * bootup and ~564 ms of long tasks, holding that route at a performance score
 * of 72. Neither `afterInteractive` (the @next/third-parties default) nor
 * `lazyOnload` was late enough, because both still land inside the measured
 * window.
 *
 * Loading on first interaction moves that cost entirely out of the critical
 * path. A `visibilitychange` guard also fires it when the user leaves the tab,
 * so short non-interactive visits are still recorded.
 *
 * TRADE-OFF, worth a deliberate decision: a visitor who loads a page, never
 * scrolls, taps or moves the pointer, and closes the tab without a
 * visibilitychange may not be counted. If analytics completeness matters more
 * than the mobile performance score, switch `strategy` back to `lazyOnload` and
 * accept roughly a 10-15 point drop on script-heavy routes.
 */

const INTERACTION_EVENTS = [
  'pointerdown',
  'keydown',
  'touchstart',
  'scroll',
  'wheel',
] as const;

export function DeferredGoogleTagManager({ gtmId }: { gtmId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const trigger = () => setShouldLoad(true);

    for (const event of INTERACTION_EVENTS) {
      window.addEventListener(event, trigger, { once: true, passive: true });
    }
    // Catches visitors who read and leave without interacting.
    const onHide = () => {
      if (document.visibilityState === 'hidden') trigger();
    };
    document.addEventListener('visibilitychange', onHide);

    return () => {
      for (const event of INTERACTION_EVENTS) {
        window.removeEventListener(event, trigger);
      }
      document.removeEventListener('visibilitychange', onHide);
    };
  }, [shouldLoad]);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
