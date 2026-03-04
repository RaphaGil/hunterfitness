import NavBar from '@/component/NavBar';
import Pricing from '@/component/Pricing';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Training Prices',
  description:
    'Affordable personal training in London at Hunter Fitness, Liverpool Street. Session packs from £55, monthly plans from £250. Single sessions, 5, 10, 20 session packs. Book a free consultation.',
  keywords: [
    'affordable personal training London',
    'affordable personal trainer London',
    'personal training prices Liverpool Street',
    'cheap personal trainer London',
  ],
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <PersonalTrainerBadge />
      <NavBar />
      <Pricing />
      <Footer />
    </main>
  );
}
