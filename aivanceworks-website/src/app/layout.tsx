import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DeferredGoogleTagManager } from '@/components/analytics/DeferredGoogleTagManager';
import '@/styles/globals.css';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata: Metadata = constructMetadata({
  keywords: [
    'AI development',
    'software consulting',
    'Azure cloud services',
    'custom software development',
    'AI agents',
    'RAG frameworks',
    'machine learning',
    'startup software development',
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={process.env.NEXT_PUBLIC_THEME || 'black'} className={inter.variable}>
      <head>
        <JsonLd
          data={[generateOrganizationSchema(), generateWebSiteSchema()]}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]
            focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900
            focus:outline-none focus:ring-2 focus:ring-brand-600"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <DeferredGoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </body>
    </html>
  );
}
