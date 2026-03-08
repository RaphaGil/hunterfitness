# Hunter Fitness

Personal trainer website for Matthew Hunter — Liverpool Street, London.

**Repository:** [https://github.com/RaphaGil/hunterfitness](https://github.com/RaphaGil/hunterfitness)

---

## SEO

The site is built with SEO in mind. Implemented work includes:

### Metadata
- **Root layout** (`app/layout.tsx`): `metadataBase`, title template (`%s | Hunter Fitness`), meta description, keywords, authors, creator, publisher
- **Per-page metadata**: Each route exports its own `title`, `description`, `openGraph`, and `twitter` metadata
- **Open Graph**: Images with dimensions and alt text, locale `en_GB`, site name
- **Twitter Cards**: `summary_large_image` with title, description, and images
- **Robots**: `index: true`, `follow: true` for Google and other crawlers
- **Canonical URLs**: `alternates.canonical` for the homepage
- **Geo**: `geo.region: GB-LND` for local targeting

### Sitemap & Crawlers
- **Dynamic sitemap** (`app/sitemap.ts`): XML sitemap with all pages, `lastModified`, `changeFrequency`, `priority`, and image URLs
- **robots.txt** (`app/robots.ts`): Allows all user agents, disallows `/api/`, references sitemap URL

### Structured Data (JSON-LD)
- **Organization**: Logo, name, URL for search branding
- **LocalBusiness**: Address, geo, opening hours, telephone, email, images, services, offer catalog, aggregate ratings, reviews
- **Person**: Matthew Hunter profile (job title, skills, works for)
- **Service**: Offer catalog for all training services
- **FAQPage**: FAQ schema for rich results in search

### Pages
- Home, Personal Training Services, Personal Training Prices, About, Studio, Benefits, FAQ, Contact

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
