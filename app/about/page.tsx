import NavBar from '@/component/NavBar';
import About from '@/component/About';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

const siteUrl = 'https://hunterfitness.co.uk';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Matthew Hunter - Personal Trainer in the City of London. Specialises in personal training for professionals with demanding careers. Learn about his background in athletics and tailored approach to helping clients achieve long-term fitness goals.',
  openGraph: {
    images: [{ url: `${siteUrl}/images/10.jpg`, width: 1200, height: 630, alt: 'Matthew Hunter - Personal Trainer at Hunter Fitness, Liverpool Street London' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteUrl}/images/10.jpg`],
  },
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
