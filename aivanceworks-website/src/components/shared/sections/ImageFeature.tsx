import Image from 'next/image';
import { Section, Container } from '@/components/shared/primitives';
import { cn } from '@/lib/utils';
import type { ImageFeatureData } from '@/types/pages';

export interface ImageFeatureProps {
  features: ImageFeatureData[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const ImageFeature = ({
  features,
  tone = 'light',
  className,
}: ImageFeatureProps) => (
  <Section data-section="image-feature" tone={tone} size="md" className={className}>
    <Container>
      <div className="flex flex-col gap-16 md:gap-20">
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
                <p className="text-base md:text-lg text-text-body leading-relaxed">
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
