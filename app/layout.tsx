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

const siteImages = [
  { url: `${siteUrl}/images/12.jpeg`, width: 1200, height: 630, alt: "Hunter Fitness personal training - Matthew Hunter at Liverpool Street studio" },
  { url: `${siteUrl}/images/2.jpg`, width: 1200, height: 630, alt: "Personal training session at Hunter Fitness, Liverpool Street London" },
  { url: `${siteUrl}/images/4.jpg`, width: 1200, height: 630, alt: "Hunter Fitness training - strength and conditioning in the City of London" },
  { url: `${siteUrl}/images/10.jpg`, width: 1200, height: 630, alt: "Matthew Hunter - Personal Trainer at Hunter Fitness, Liverpool Street" },
  { url: `${siteUrl}/images/studio.jpg`, width: 1200, height: 630, alt: "Hunter Fitness private studio at Liverpool Street, London" },
  { url: `${siteUrl}/images/9.jpg`, width: 1200, height: 630, alt: "One-to-one personal training at Hunter Fitness London" },
];

export const metadata: Metadata = {
  icons: {
    icon: '/images/logo.jpg',  // or .png
  },
  metadataBase: new URL(siteUrl),
  title: {
    default: "Personal Training - Liverpool Street",
    template: "%s | Hunter Fitness",
  },
  description:
    "Private City studio, 1 min from Liverpool St. Expert 1-on-1 PT. Free consult. Private personal training in the City. Studio near Bank & Moorgate. Private 1-on-1 Studio. Free First Consultation. Expert guidance to achieve your health and fitness goals. Book your free consultation today.",
  keywords: [
    "personal trainer in the City of Liverpool Street",
    "personal trainer London",
    "affordable personal training in London",
    "affordable personal trainer London",
    "fitness trainer Liverpool Street",
    "PT Liverpool Street",
    "gym trainer London",
    "personal training Liverpool Street",
    "personal training in city of london",
    "personal training in the city of london",
    "personal training in london",
    "Matthew Hunter personal trainer",
    "one to one training London",
    "gym near Liverpool Street station",
    "best gyms near Liverpool Street",
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
    title: "Personal Training - Liverpool Street",
    description:
      "Private City studio, 1 min from Liverpool St. Expert 1-on-1 PT. Free consult. Private personal training in the City. Studio near Bank & Moorgate. Private 1-on-1 Studio. Free First Consultation. Expert guidance to achieve your health and fitness goals. Book your free consultation today.",
    images: siteImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer in Liverpool Street | Hunter Fitness",
    description:
      "Professional personal trainer in Liverpool Street, London. Bespoke training programmes and expert fitness coaching.",
    images: siteImages.map((img) => img.url),
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

const address = {
  "@type": "PostalAddress",
  streetAddress: "40 Liverpool Street",
  addressLocality: "London",
  postalCode: "EC2M 7QN",
  addressCountry: "GB",
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: 51.5174,
  longitude: -0.0814,
};

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "19:30",
  },

];

const jsonLdSchemas = [
  // LocalBusiness schema
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "Hunter Fitness",
    description:
      "Professional personal trainer in the City of Liverpool Street, London. Bespoke training programmes and expert fitness coaching.",
    url: siteUrl,
    image: [
      `${siteUrl}/images/hunterfitnesslogo.png`,
      `${siteUrl}/images/12.jpeg`,
      `${siteUrl}/images/2.jpg`,
      `${siteUrl}/images/4.jpg`,
      `${siteUrl}/images/10.jpg`,
      `${siteUrl}/images/studio.jpg`,
      `${siteUrl}/images/9.jpg`,
    ],
    logo: `${siteUrl}/images/hunterfitnesslogo.png`,
    telephone: "+442012345678",
    email: "matt@hunterfitness.com",
    address,
    geo,
    openingHoursSpecification,
    areaServed: { "@type": "City", name: "London" },
    priceRange: "££",
    sameAs: ["https://twitter.com/HunterFitness"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Personal Training Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strength" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Core Training" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fat / Weight Loss" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Circuit Training" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rehabilitation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sports Specific" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
      reviewCount: 4,
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "John O" },
        reviewBody:
          "I have been training with Matt for over two years. I had not done any serious exercise for over twenty years and, at first, was reluctant to start. I now see Matt twice a week and over the two years I have managed to lose over two stone in weight which was not a particular goal but has happened as a bi-product of the new exercise regime. I now see myself as reasonably fit and for more supple than I ever was. I certainly have far more energy and sleep really well. Matt is very professional yet personable and tailors the sessions to individual needs. I would highly recommend him to anyone who exercises and needs help or encouragement or a complete beginner",
        datePublished: "2023-01-01",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "James M" },
        reviewBody:
          "Having started a new job I also wanted to start a new approach to my fitness and was lucky enough to be given Matt's details by my gym. Through a combination of resistance, cardio and circuit training my level of fitness has greatly improved and I have managed to break-out of just doing the same old routine. Matt has helped me achieve goals, including running the London Marathon in 2007, and his approach of pushing you without being aggressive and, when needed, with humour, works extremely well.",
        datePublished: "2023-01-01",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Anonymous" },
        reviewBody:
          "I have trained regularly with Matt for over three years. With a sedentary job and a history of zero exercise, I had allowed my weight/fitness to go unchecked over many years. In my first session with Matt, my heart-rate skyrocketed just walking on the treadmill, certainly jogging any distance seemed unthinkable. In the early days Matt proved adept at assessing what I was capable of and what I felt comfortable doing and encouraged me to push myself.",
        datePublished: "2022-01-01",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sergey K" },
        reviewBody:
          "Matthew has been a perfect motivator for my personal fitness program since I started my training sessions with him three years ago. He has real knowledge that has helped me build strength and endurance — and just feel great. He knows when to push for that extra rep and when to vary the exercise programme. In addition he is a friendly person and has a good sense of humor, so all this makes going to train with him a pleasure.",
        datePublished: "2022-01-01",
      },
    ],
  },
  // Person schema (Matthew Hunter)
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Matthew Hunter",
    jobTitle: "Personal Trainer",
    description:
      "Personal Trainer in the City of London. Specialises in personal training for individuals with demanding, high-pressure careers, providing structure, motivation, and accountability to help clients achieve long-term results while maintaining balance in work and personal life.",
    url: siteUrl,
    image: [
      `${siteUrl}/images/12.jpeg`,
      `${siteUrl}/images/10.jpg`,
      `${siteUrl}/images/2.jpg`,
      `${siteUrl}/images/4.jpg`,
    ],
    worksFor: { "@id": `${siteUrl}/#organization` },
    knowsAbout: [
      "Strength and Conditioning",
      "Core Training",
      "Weight Loss",
      "Circuit Training",
      "Rehabilitation",
      "Sports Specific Training",
    ],
  },
  // Service schemas
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#services`,
    serviceType: "Personal Training",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "City", name: "London" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fitness Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Strength",
            description: "Functional and Integrated Strength and Conditioning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Core Training",
            description:
              "A program that includes balance & stability, abdominal and lower back work, and all the muscles of the trunk",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fat / Weight Loss",
            description:
              "Personal approach to weight management with dietary advice for gain or loss as part of a full conditioning program",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Circuit Training",
            description: "Increase strength and aerobic fitness and burn lots of calories using multiple exercises",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rehabilitation",
            description:
              "Working with doctors, surgeons, and physiotherapists to help recover from medical conditions including lower back pain, high blood pressure, obesity, diabetes and more",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sports Specific",
            description:
              "Individually designed programmes for marathons, triathlons, football, rugby or combat sports",
          },
        },
      ],
    },
  },
  // FAQ schema
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Hunter Fitness located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hunter Fitness is based at 40 Liverpool Street, London EC2M 7QN, in the heart of the City of London.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We primarily serve clients in the City of London and Liverpool Street area, including professionals working in the financial district.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer a free consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer a free consultation to discuss your goals and how we can help. Get in touch via email or phone to book.",
        },
      },
      {
        "@type": "Question",
        name: "What should I expect from my first session?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your first session will include an assessment of your fitness level, a discussion of your goals, and a tailored programme designed for your individual needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with clients who have medical conditions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we work closely with doctors, surgeons, and physiotherapists to help clients recover from conditions including lower back pain, high blood pressure, obesity, diabetes and many others.",
        },
      },
    ],
  },
];

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
        />
        {children}
      </body>
    </html>
  );
}
