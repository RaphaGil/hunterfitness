import NavBar from '@/component/NavBar';
import FAQ from '@/component/FAQ';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

const siteUrl = 'https://hunterfitness.co.uk';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Hunter Fitness personal training. Location, consultation, first session, and medical conditions. Liverpool Street, London.',
  openGraph: {
    images: [{ url: `${siteUrl}/images/9.jpg`, width: 1200, height: 630, alt: 'One-to-one personal training at Hunter Fitness London' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteUrl}/images/9.jpg`],
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <PersonalTrainerBadge />
      <NavBar />
      <div className="pt-20 md:pt-24">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
