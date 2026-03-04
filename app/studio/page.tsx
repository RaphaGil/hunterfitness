import NavBar from '@/component/NavBar';
import Studio from '@/component/Studio';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

const siteUrl = 'https://hunterfitness.co.uk';

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'Hunter Fitness studio at Liverpool Street, London. State of the art gym equipment, luxurious facilities, and private training space in the City of London.',
  openGraph: {
    images: [{ url: `${siteUrl}/images/studio.jpg`, width: 1200, height: 630, alt: 'Hunter Fitness private studio at Liverpool Street, London' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteUrl}/images/studio.jpg`],
  },
};

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <PersonalTrainerBadge />
      <NavBar />
      <div className="pt-20 md:pt-24">
        <Studio />
      </div>
      <Footer />
    </main>
  );
}
