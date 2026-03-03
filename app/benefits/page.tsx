import NavBar from '@/component/NavBar';
import Benefits from '@/component/Benefits';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Benefits',
  description:
    'Why train with Hunter Fitness: Free consultation, no lock-in contracts, private studio, flexible scheduling. Personal training benefits in Liverpool Street, London.',
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
