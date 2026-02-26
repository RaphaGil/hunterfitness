import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hunterfitness.co.uk";
const ogImage = `${siteUrl}/images/matt2_960x540.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Personal Trainer in the City of Liverpool Street | Hunter Fitness",
    template: "%s | Hunter Fitness",
  },
  description:
    "Professional personal trainer in the City of Liverpool Street, London. Get 1-on-1 fitness coaching, bespoke training programmes, and expert guidance to achieve your health and fitness goals. Book your free consultation today.",
  keywords: [
    "personal trainer in the City of Liverpool Street",
    "personal trainer London",
    "fitness trainer Liverpool Street",
    "PT Liverpool Street",
    "gym trainer London",
    "personal training Liverpool Street",
    "personal training in city of london",
    "personal training in the city of london",
    "personal training in london",
    "Matthew Hunter personal trainer",
    "one to one training London",
  ],
  authors: [{ name: "Matthew Hunter", url: siteUrl }],
  creator: "Hunter Fitness",
  publisher: "Hunter Fitness",
  applicationName: "Hunter Fitness",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Hunter Fitness",
    title: "Personal Trainer in Liverpool Street | Hunter Fitness",
    description:
      "Professional personal trainer in Liverpool Street, London. Bespoke training programmes and expert fitness coaching to help you reach your goals.",
    images: [
      {
        url: ogImage,
        width: 960,
        height: 540,
        alt: "Matthew Hunter - Personal Trainer at Hunter Fitness, Liverpool Street London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer in Liverpool Street | Hunter Fitness",
    description:
      "Professional personal trainer in Liverpool Street, London. Bespoke training programmes and expert fitness coaching.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "health",
  other: {
    "geo.region": "GB-LND",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PersonalTrainer",
  "@id": `${siteUrl}/#organization`,
  name: "Hunter Fitness",
  description: "Professional personal trainer in the City of Liverpool Street, London. Bespoke training programmes and expert fitness coaching.",
  url: siteUrl,
  image: `${siteUrl}/images/hunterfitnesslogo.png`,
  logo: `${siteUrl}/images/hunterfitnesslogo.png`,
  telephone: "+442012345678",
  email: "hello@hunterfitness.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "The Andaz Hotel Health Club, 40 Liverpool Street",
    addressLocality: "London",
    postalCode: "EC2M 7QN",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5174,
    longitude: -0.0814,
  },
  areaServed: {
    "@type": "City",
    name: "London",
  },
  priceRange: "££",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
