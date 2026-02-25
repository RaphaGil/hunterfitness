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

export const metadata: Metadata = {
  title: {
    default: "Personal Trainer in Liverpool Street | Hunter Fitness",
    template: "%s | Hunter Fitness",
  },
  description:
    "Professional personal trainer in Liverpool Street, London. Get 1-on-1 fitness coaching, bespoke training programmes, and expert guidance to achieve your health and fitness goals. Book your free consultation today.",
  keywords: [
    "personal trainer Liverpool Street",
    "personal trainer London",
    "fitness trainer Liverpool Street",
    "PT Liverpool Street",
    "gym trainer London",
    "personal training Liverpool Street",
  ],
  authors: [{ name: "Hunter Fitness" }],
  creator: "Hunter Fitness",
  openGraph: {
    title: "Personal Trainer in Liverpool Street | Hunter Fitness",
    description:
      "Professional personal trainer in Liverpool Street, London. Bespoke training programmes and expert fitness coaching to help you reach your goals.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer in Liverpool Street | Hunter Fitness",
    description:
      "Professional personal trainer in Liverpool Street, London. Bespoke training programmes and expert fitness coaching.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://hunterfitness.co.uk"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
