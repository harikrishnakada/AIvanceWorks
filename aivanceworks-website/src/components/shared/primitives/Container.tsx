import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

export type ContainerWidth = 'narrow' | 'default' | 'wide';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidth;
  children: ReactNode;
}

const WIDTH_CLASSES: Record<ContainerWidth, string> = {
  narrow: 'max-w-4xl',
  default: 'max-w-7xl',
  wide: 'max-w-[88rem]',
};

export const Container = ({
  width = 'default',
  className,
  children,
  ...rest
}: ContainerProps) => (
  <div
    className={cn('mx-auto px-4 sm:px-6 lg:px-8', WIDTH_CLASSES[width], className)}
    {...rest}
  >
    {children}
  </div>
);
