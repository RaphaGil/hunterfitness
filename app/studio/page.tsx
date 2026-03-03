import NavBar from '@/component/NavBar';
import Studio from '@/component/Studio';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'Hunter Fitness studio at The Andaz Hotel Health Club, Liverpool Street. State of the art gym equipment, luxurious facilities, and private training space in the City of London.',
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
