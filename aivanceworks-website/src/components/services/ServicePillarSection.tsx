// src/components/services/ServicePillarSection.tsx
import type { LucideIcon } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export interface PillarLink {
  label: string;
  href: string;
  icon: string;
}

interface ServicePillarSectionProps {
  id: string;
  title: string;
  description: string;
  CategoryIcon: LucideIcon;
  links: readonly PillarLink[];
  builtOutSlugs: string[];
  iconMap: Record<string, LucideIcon>;
  descriptions: Record<string, string>;
  /** surface-white or surface-light for alternating sections */
  bg?: 'white' | 'gray';
}

export function ServicePillarSection({
  id,
  title,
  description,
  CategoryIcon,
  links,
  builtOutSlugs,
  iconMap,
  descriptions,
  bg = 'white',
}: ServicePillarSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-32 py-12 ${bg === 'gray' ? 'bg-surface-light' : 'bg-surface-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
            <CategoryIcon className="h-6 w-6 text-brand-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text-heading">{title}</h2>
            <p className="text-sm text-text-muted mt-0.5">{description}</p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((link) => {
            const slug = link.href.split('/').pop() ?? '';
            const isBuiltOut = builtOutSlugs.includes(slug);
            const Icon = iconMap[link.icon] ?? CategoryIcon;
            const desc =
              descriptions[slug] ??
              `${link.label} services for modern businesses.`;

            return (
              <ServiceCard
                key={link.href + link.label}
                label={link.label}
                description={desc}
                href={isBuiltOut ? link.href : undefined}
                icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
