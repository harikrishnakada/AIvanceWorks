'use client';

import Link from 'next/link';
import { useId } from 'react';
import { SITE_CONFIG } from '@/lib/constants';

interface LogoProps {
  /** Wrap in a homepage link. Default: true */
  asLink?: boolean;
  className?: string;
}

export function Logo({ asLink = true, className }: LogoProps) {
  const id = useId().replace(/:/g, '-');
  const gradBg = `logo-bg-${id}`;
  const gradShine = `logo-shine-${id}`;

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
        <text x="13" y="28" fill="white" fontSize="20" fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5">C</text>
        <text x="27" y="22" fill="white" fontSize="11" fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif" fillOpacity="0.85">10</text>
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none gap-[4px] md:gap-[4px] lg:gap-[5px]">
        <span className="text-[32px] md:text-[28px] lg:text-[32px] font-black tracking-tight text-gray-900">
          {primaryName}
        </span>
        {secondaryName && (
          <span className="text-[11px] md:text-[10px] lg:text-[11px] font-semibold tracking-[0.22em] md:tracking-[0.28em] text-gray-400 uppercase">
            {secondaryName}
          </span>
        )}
      </div>
    </div>
  );

  if (!asLink) return mark;

  return (
    <Link href="/" aria-label={`${SITE_CONFIG.name} homepage`}>
      {mark}
    </Link>
  );
}
