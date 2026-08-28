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
                'grid gap-8 md:gap-12 items-center',
                'md:grid-cols-2',
                reverse && 'md:[&>*:first-child]:order-2'
              )}
            >
              <div>
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
