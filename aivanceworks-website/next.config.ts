import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React strict mode for better development
  reactStrictMode: true,

  // 94 files import from 'lucide-react' but only 66 distinct icons are used.
  // Without this, Turbopack ships the whole icon barrel — a 626 KB chunk that
  // Lighthouse measures as 99.9% unused.
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // Tried experimental.inlineCss to remove the 28 KB render-blocking
    // stylesheet request. Measured WORSE on mobile (perf 88 vs 90): the CSS is
    // cacheable and shared across routes, so inlining it into every HTML
    // response costs more than the round trip it saves. Left off deliberately.
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    // `quality` values used anywhere in the app must be declared here.
    qualities: [50, 70, 75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // For mock blog data (temporary)
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            // Content-Security-Policy. Notes on the loose directives, so nobody
            // tightens them without knowing what breaks:
            //
            // - 'unsafe-inline' + 'unsafe-eval' in script-src: Google Tag
            //   Manager injects inline snippets and evaluates container code.
            //   Removing either breaks GTM. A nonce-based policy is not possible
            //   here because every route is statically prerendered (no per-request
            //   nonce to inject).
            // - 'unsafe-inline' in style-src: React/Next set inline styles on
            //   next/image `fill` elements and on the carousel transforms.
            // - frame-src: Cal.com renders the booking widget in an iframe.
            // - img-src data:/blob: covers next/image placeholders and SVG icons.
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://app.cal.com https://cal.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://cdn.sanity.io https://images.unsplash.com https://*.google-analytics.com https://*.googletagmanager.com",
              "font-src 'self' data:",
              "connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.analytics.google.com https://app.cal.com https://cal.com",
              "frame-src 'self' https://app.cal.com https://cal.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              'upgrade-insecure-requests',
            ].join('; '),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect www to non-www (uncomment and adjust as needed)
      // {
      //   source: '/:path*',
      //   has: [{ type: 'host', value: 'www.bluecloversoftware.com' }],
      //   destination: 'https://bluecloversoftware.com/:path*',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
