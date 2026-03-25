import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import '@/styles/globals.css';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-jakarta',
});

const jetbrains = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = constructMetadata({
  keywords: [
    'AI development',
    'software development',
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
    <html lang="en" data-theme="mamba" className={`${jakarta.variable} ${jetbrains.variable}`}>
       {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <JsonLd
          data={[generateOrganizationSchema(), generateWebSiteSchema()]}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
