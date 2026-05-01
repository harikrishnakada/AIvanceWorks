/**
 * RoleBoundary — single-use late-page section for Digital Banking & Wallets.
 *
 * Carries an explicit, plain-language role-and-scope-boundary statement
 * positioned late on the page so it reads as honest disclosure to a buyer
 * who's already favorably disposed — not a defensive disclaimer up front.
 *
 * Heading is positively framed ("Where AIvanceWorks fits") so the bullets
 * underneath can be plain negatives ("we do not hold licenses... we do
 * not act as sponsor bank...") without the section as a whole reading
 * defensively.
 *
 * Visual: deliberately simple — no icon grid, no chart, no card stack.
 * Confidence is the design move; visual restraint signals it.
 *
 * Mobile (< md): two-column intro + bullets layout collapses to single-column.
 * Bullets always reflow into a single column on mobile for scannability.
 *
 * Theming: tone="warm" by default (overridable). All colors token-backed
 * via text-text-*, text-brand-*, border-border-* classes. Flipping
 * data-theme re-skins cleanly.
 */

import { MinusCircle } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

export interface RoleBoundaryProps {
  eyebrow?: string;
  heading: string;
  intro: string;
  bullets: string[];
  collaboration: string;
  tone?: 'warm' | 'light';
  className?: string;
}

export const RoleBoundary = ({
  eyebrow,
  heading,
  intro,
  bullets,
  collaboration,
  tone = 'warm',
  className,
}: RoleBoundaryProps) => (
  <Section
    data-section="role-boundary"
    tone={tone}
    size="md"
    className={className}
  >
    <Container>
      <div className="grid gap-10 md:gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* Left column — heading + intro + collaboration */}
        <div className="max-w-prose">
          {eyebrow && (
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading tracking-tight mb-5 leading-tight">
            {heading}
          </h2>
          <p className="text-base md:text-lg text-text-body leading-relaxed mb-6">
            {intro}
          </p>
          <p className="text-sm md:text-base text-text-muted leading-relaxed border-l-2 border-brand-500/40 pl-4">
            {collaboration}
          </p>
        </div>

        {/* Right column — bulleted scope-boundary list */}
        <ul className="space-y-3 md:space-y-4 pt-2">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <MinusCircle
                className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-sm md:text-base text-text-body leading-relaxed">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </Section>
);
