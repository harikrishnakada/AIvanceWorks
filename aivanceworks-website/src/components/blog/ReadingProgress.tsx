'use client';

import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // Get scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Get total scrollable height
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      // Calculate percentage
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      setProgress(scrollPercentage);
    };

    // Update on scroll
    window.addEventListener('scroll', updateProgress, { passive: true });

    // Initial update
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />
    </div>
  );
}
