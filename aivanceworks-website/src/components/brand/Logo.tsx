// Server component. This renders in the Header and Footer on every route, so
// keeping it off the client saves it from the bundle and the hydration pass.
// `useId()` was the only thing forcing 'use client'; callers now pass an
// `idPrefix` to keep the SVG gradient ids unique between instances.
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

interface LogoProps {
  /** Wrap in a homepage link. Default: true */
  asLink?: boolean;
  className?: string;
  /**
   * Disambiguates the SVG gradient ids when more than one Logo is on the page.
   * Duplicate ids make later instances reference the first one's gradients.
   */
  idPrefix?: string;
}

export function Logo({ asLink = true, className, idPrefix = 'logo' }: LogoProps) {
  const gradBg = `${idPrefix}-bg`;
  const gradShine = `${idPrefix}-shine`;

  // Wordmark is derived from SITE_CONFIG.name, which is env-driven. The first
  // word is the primary mark and any remainder becomes the tracked-out subtitle,
  // so "DS Software" renders as "DS" over "SOFTWARE" and a single-word brand
  // renders alone. This used to be overwritten with a hardcoded "DevSolve"
  // immediately after being computed, so the logo ignored the configured brand.
  const [primaryName, ...rest] = SITE_CONFIG.name.split(' ');
  const secondaryName = rest.join(' ');

  const mark = (
    <div className={`flex items-center gap-3 md:gap-3 lg:gap-3.5 group ${className ?? ''}`}>
      {/* Icon mark — sized via CSS only so Tailwind breakpoints apply */}
      <svg
        className="flex-shrink-0 w-16 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 42 42" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradBg} x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id={gradShine} x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0.25" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="42" height="42" rx="11" fill={`url(#${gradBg})`} />
        <rect width="42" height="42" rx="11" fill={`url(#${gradShine})`} />
        <rect
          x="11" y="11" width="20" height="20" rx="4"
          fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.3"
          transform="rotate(45 21 21)"
        />
        {/* Abbreviation comes from NEXT_PUBLIC_BRAND_PREFIX, not a literal. */}
        <text x="2" y="27" fill="white" fontSize="18" fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5">
          {SITE_CONFIG.abbreviation}
        </text>
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none gap-[4px] md:gap-[4px] lg:gap-[5px]">
        <span className="text-[32px] md:text-[28px] lg:text-[32px] font-black tracking-tight text-gray-900">
          {primaryName}
        </span>
        {/* gray-400 (#99a1af) is 2.6:1 on white and fails at this size. This was
            latent: the subtitle was blanked out by the old hardcoded wordmark, so
            it never rendered. gray-600 is ~7:1. */}
        {secondaryName && (
          <span className="text-[11px] md:text-[10px] lg:text-[11px] font-semibold tracking-[0.22em] md:tracking-[0.28em] text-gray-600 uppercase">
            {secondaryName}
          </span>
        )}
      </div>
    </div>
  );

  if (!asLink) return mark;

  return (
    // No aria-label: an explicit one overrode the visible wordmark and tripped
    // axe's label-content-name-mismatch. The link's accessible name now comes
    // from the rendered wordmark itself, with "homepage" added for context.
    <Link href="/">
      {mark}
      <span className="sr-only">homepage</span>
    </Link>
  );
}
