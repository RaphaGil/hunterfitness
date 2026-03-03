import NavBar from '@/component/NavBar';
import About from '@/component/About';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Matthew Hunter - Personal Trainer in the City of London. Learn about his background in athletics, bespoke training approach, and dedication to helping clients achieve their fitness goals.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <PersonalTrainerBadge />
      <NavBar />
      <div className="pt-20 md:pt-24">
        <About />
      </div>
      <Footer />
    </main>
  );
}
