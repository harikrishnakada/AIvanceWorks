// src/components/services/ServiceCard.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  label: string;
  description: string;
  /** Omit for services without a built-out page */
  href?: string;
  icon: LucideIcon;
}

export function ServiceCard({ label, description, href, icon: Icon }: ServiceCardProps) {
  const inner = (
    <div
      className={`group h-full rounded-xl border bg-surface-white p-5 transition-all duration-200 ${
        href
          ? 'border-border-light hover:border-brand-300 hover:shadow-md cursor-pointer'
          : 'border-border-light opacity-80'
      }`}
    >
      <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center mb-3">
        <Icon className="h-[18px] w-[18px] text-brand-600" />
      </div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-text-heading text-sm leading-snug">{label}</h3>
        {href && (
          <ArrowRight className="h-4 w-4 flex-shrink-0 text-text-subtle opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-500 transition-all duration-150 mt-0.5" />
        )}
      </div>
      <p className="mt-1.5 text-xs text-text-muted leading-relaxed">{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{inner}</Link>;
  }
  return <div className="h-full">{inner}</div>;
}
