import Hero from '@/component/Hero';
import PricingCTA from '@/component/PricingCTA';
import NavBar from '@/component/NavBar';
import Banner from '@/component/Banner';
import Benefits from '@/component/Benefits';
import AboutTeaser from '@/component/AboutTeaser';
import Information from '@/component/Information';
import Studio from '@/component/Studio';
import Images from '@/component/Images';
import ServicesTeaser from '@/component/ServicesTeaser';
import Review from '@/component/Review';
import FAQ from '@/component/FAQ';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

const siteUrl = 'https://www.hunterfitness.co.uk';

const defaultImage = {
  url: `${siteUrl}/images/12.jpeg`,
  width: 1200,
  height: 630,
  alt: 'Hunter Fitness personal training - Matthew Hunter at Liverpool Street studio',
};

export const metadata: Metadata = {
  title: 'Personal Training - Liverpool Street',
  description:
    'Private City studio, 1 min from Liverpool St. Expert 1-on-1 PT. Free consult. Private personal training in the City. Studio near Bank & Moorgate. Private 1-on-1 Studio. Free First Consultation. Expert guidance to achieve your health and fitness goals. Book your free consultation today.',
  openGraph: {
    title: 'Personal Training - Liverpool Street',
    description:
      'Private City studio, 1 min from Liverpool St. Expert 1-on-1 PT. Free consult. Private personal training in the City. Studio near Bank & Moorgate. Private 1-on-1 Studio. Free First Consultation. Expert guidance to achieve your health and fitness goals. Book your free consultation today.',
    images: [defaultImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: [defaultImage.url],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <PersonalTrainerBadge />
      <NavBar />
      <Hero />
      <PricingCTA />
  
      <AboutTeaser />
      <Banner />
      <Benefits />
      <Information />
      <Studio />
      <Images />
      <ServicesTeaser />
      <Review />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}