import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-surface-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-text-light mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-accent-foreground bg-accent hover:bg-accent-hover rounded-[10px] transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
