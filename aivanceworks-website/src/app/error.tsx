'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-surface-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-destructive mb-4">Error</h1>
        <h2 className="text-3xl font-semibold text-text-light mb-4">Something went wrong!</h2>
        <p className="text-muted-foreground mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-accent-foreground bg-accent hover:bg-accent-hover rounded-[10px] transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
