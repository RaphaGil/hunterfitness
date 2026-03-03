import NavBar from '@/component/NavBar';
import FAQ from '@/component/FAQ';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Hunter Fitness personal training. Location, consultation, first session, and medical conditions. Liverpool Street, London.',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <PersonalTrainerBadge />
      <NavBar />
      <div className="pt-20 md:pt-24">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
