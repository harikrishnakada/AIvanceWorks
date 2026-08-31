import Image from 'next/image';
import { Section, Container } from '@/components/shared/primitives';
import { cn } from '@/lib/utils';
import type { ImageFeatureData } from '@/types/pages';

export interface ImageFeatureProps {
  features: ImageFeatureData[];
  tone?: 'light' | 'warm';
  className?: string;
  /* Overrides the vertical gap BETWEEN the stacked feature rows. Defaults to the
     gap-16 md:gap-20 rhythm every solution page uses; the home page tightens it
     because this section sits between two already-dense sections there. */
  stackClassName?: string;
}

export const ImageFeature = ({
  features,
  tone = 'light',
  className,
  stackClassName,
}: ImageFeatureProps) => (
  <Section data-section="image-feature" tone={tone} size="md" className={className}>
    <Container>
      <div className={cn('flex flex-col gap-16 md:gap-20', stackClassName)}>
        {features.map((feature, idx) => {
          const reverse = idx % 2 !== 0;
          return (
            <div
              key={idx}
              className={cn(
                /* items-start, not items-center: the copy column is shorter than
                   the 3:2 image, and centring it left the heading floating below
                   the image's top edge. Top-aligned, the heading and the image
                   start on the same line. */
                'grid gap-8 md:gap-12 items-start',
                'md:grid-cols-2',
                reverse && 'md:[&>*:first-child]:order-2'
              )}
            >
              {/* md:pt-* is an optical offset, not alignment: the row is
                  items-start, so flush-top put the cap-height of the heading
                  slightly above the image's rounded top edge. Nudging the copy
                  down settles it against the image without giving up the
                  top-aligned read. Scoped to md+ — below that the columns stack
                  and the padding would only add a gap under the image. */}
              <div className="md:pt-4 lg:pt-6">
                <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-4 tracking-tight">
                  {feature.heading}
                </h3>
                <p className="text-lead text-text-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2]">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
