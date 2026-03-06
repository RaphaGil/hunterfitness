import NavBar from '@/component/NavBar';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

const siteUrl = 'https://www.hunterfitness.co.uk';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Hunter Fitness - Personal trainer in Liverpool Street, London. Email, phone, and location at 40 Liverpool Street. Book your free consultation.',
  openGraph: {
    images: [{ url: `${siteUrl}/images/2.jpg`, width: 1200, height: 630, alt: 'Personal training session at Hunter Fitness, Liverpool Street London' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteUrl}/images/2.jpg`],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <PersonalTrainerBadge />
      <NavBar />
      <div className="pt-20 md:pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
