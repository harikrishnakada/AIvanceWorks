import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {
  IndustriesSection,
  IndustriesSectionExpanding,
  IndustriesSectionShowcase,
  IndustriesSectionReveal,
} from '@/components/home';
import { getHomeIndustries } from '@/lib/content';
import type { HomeIndustry } from '@/data/home/industries';

// Internal comparison page — three Industries section variants stacked so we
// can pick one. Not linked in navigation; noindex. Delete once a variant ships.
export const metadata: Metadata = {
  title: 'Industries — Variant Preview',
  robots: { index: false, follow: false },
};

const variants: {
  id: string;
  label: string;
  note: string;
  render: (industries: HomeIndustry[]) => ReactNode;
}[] = [
  {
    id: 'ledger',
    label: 'Variant A — The Ledger',
    note: 'Current live version. Dark spotlight panel, alternating image plates, proof chips, clip-path wipe reveals. Message-first, nothing hidden behind hover.',
    render: () => <IndustriesSection />,
  },
  {
    id: 'expanding',
    label: 'Variant B — Expanding Panels (ELEKS-style)',
    note: 'A row of image panels; hover/focus expands one and reveals its message while the rest compress to vertical labels. Mobile: stacked image cards.',
    render: (industries) => <IndustriesSectionExpanding industries={industries} />,
  },
  {
    id: 'showcase',
    label: 'Variant C — Bento Spotlight',
    note: 'All five industries visible at once in an asymmetric bento grid. Hover or focus a tile to spotlight it — the image pushes in, the scrim deepens, and the full detail slides up while the siblings dim. On mobile, every tile shows its detail by default.',
    render: (industries) => <IndustriesSectionShowcase industries={industries} />,
  },
  {
    id: 'reveal',
    label: 'Variant D — Reveal Cards (Accenture-style)',
    note: 'Image + title always visible; on hover / focus a solid brand-colored panel wipes up over the image, exposing the description, proof chips, and a circular ">" arrow. The Accenture reveal. Crossfades under reduced-motion; static always-open cards on touch / mobile.',
    render: (industries) => <IndustriesSectionReveal industries={industries} />,
  },
];

export default async function IndustriesPreviewPage() {
  const industries = await getHomeIndustries();

  return (
    <main className="py-8">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mb-8">
        <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-600 mb-1">
          Internal preview
        </p>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900">
          Industries Section — 3 Variants
        </h1>
        <p className="text-sm text-gray-500 mt-1 max-w-2xl">
          Scroll through each option. Tell me which one to keep and I&apos;ll wire it into the
          homepage and remove the others.
        </p>
      </div>

      {variants.map(({ id, label, note, render }) => (
        <section key={id} className="mb-16">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mb-4">
            <div className="border-t-2 border-gray-900 pt-3">
              <h2 className="text-lg font-black text-gray-900">{label}</h2>
              <p className="text-sm text-gray-500 mt-0.5 max-w-3xl">{note}</p>
            </div>
          </div>
          {render(industries)}
        </section>
      ))}
    </main>
  );
}
