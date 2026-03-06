import NavBar from '@/component/NavBar';
import Benefits from '@/component/Benefits';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

const siteUrl = 'https://www.hunterfitness.co.uk';

export const metadata: Metadata = {
  title: 'Benefits',
  description:
    'Why train with Hunter Fitness: Free consultation, no lock-in contracts, private studio, flexible scheduling. Personal training benefits in Liverpool Street, London.',
  openGraph: {
    images: [{ url: `${siteUrl}/images/4.jpg`, width: 1200, height: 630, alt: 'Hunter Fitness training - strength and conditioning in the City of London' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteUrl}/images/4.jpg`],
  },
};

export default function BenefitsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <PersonalTrainerBadge />
      <NavBar />
      <div className="pt-20 md:pt-24">
        <Benefits />
      </div>
      <Footer />
    </main>
  );
}
