# AIvanceWorks Website

AI-first software consulting website built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Code Quality**: ESLint + Prettier
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format
```

## Project Structure

```
aivanceworks-website/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── layout/      # Layout components
│   │   ├── sections/    # Homepage sections
│   │   └── seo/         # SEO components
│   ├── lib/             # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── types/           # TypeScript types
│   └── styles/          # Global styles
├── public/              # Static assets
└── ...config files
```

## SEO/GEO/AEO Optimization

This website is optimized for:
- **SEO**: Traditional search engine optimization
- **GEO**: Generative Engine Optimization (AI citations)
- **AEO**: Answer Engine Optimization (featured snippets)

### Key Features

- JSON-LD schema markup (Organization, WebSite, Article, Service, FAQ)
- Optimized meta tags and Open Graph
- Dynamic sitemap generation
- Robots.txt with AI crawler support
- Core Web Vitals optimization
- Semantic HTML structure

## Development Guidelines

1. **SEO**: Every page needs unique meta tags and schema markup
2. **URLs**: Use hyphenated, lowercase, descriptive URLs
3. **Content**: Include statistics, quotes, and clear answers in first 60 words
4. **E-E-A-T**: Add author attribution and credentials
5. **Performance**: Optimize images, use next/image, lazy load components

## Adding New Pages

1. Create page in `src/app/[route]/page.tsx`
2. Add metadata using `constructMetadata()` from `@/lib/seo`
3. Include relevant JSON-LD schema using components from `@/lib/schema`
4. Update sitemap in `src/app/sitemap.ts`
5. Add navigation links if needed

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://aivanceworks.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Manual Build

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Project Architecture](../src/software-consulting-website-architecture.md)

## License

Private - AIvanceWorks LLC
