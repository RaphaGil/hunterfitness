import NavBar from '@/component/NavBar';
import Services from '@/component/Services';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

const siteUrl = 'https://hunterfitness.co.uk';

export const metadata: Metadata = {
  title: 'Personal Training Services',
  description:
    'Personal training services at Hunter Fitness: Strength, Core Training, Fat Loss, Circuit Training, Rehabilitation, and Sports Specific programmes. Bespoke fitness coaching in Liverpool Street, London.',
  openGraph: {
    images: [{ url: `${siteUrl}/images/4.jpg`, width: 1200, height: 630, alt: 'Hunter Fitness training - strength and conditioning in the City of London' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteUrl}/images/4.jpg`],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <PersonalTrainerBadge />
      <NavBar />
      <Services />
      <Footer />
    </main>
  );
}
