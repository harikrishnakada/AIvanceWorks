import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema';

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
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd
          data={[generateOrganizationSchema(), generateWebSiteSchema()]}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
