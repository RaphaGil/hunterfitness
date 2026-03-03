import NavBar from '@/component/NavBar';
import Services from '@/component/Services';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Training Services',
  description:
    'Personal training services at Hunter Fitness: Strength, Core Training, Fat Loss, Circuit Training, Rehabilitation, and Sports Specific programmes. Bespoke fitness coaching in Liverpool Street, London.',
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
