import Hero from '@/component/Hero';
import PricingCTA from '@/component/PricingCTA';
import NavBar from '@/component/NavBar';
import Banner from '@/component/Banner';
import Benefits from '@/component/Benefits';
import AboutTeaser from '@/component/AboutTeaser';
import Information from '@/component/Information';
import Studio from '@/component/Studio';
import Images from '@/component/Images';
import ServicesTeaser from '@/component/ServicesTeaser';
import Review from '@/component/Review';
import FAQ from '@/component/FAQ';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <PersonalTrainerBadge />
      <NavBar />
      <Hero />
      <PricingCTA />
  
      <AboutTeaser />
      <Banner />
      <Benefits />
      <Information />
      <Studio />
      <Images />
      <ServicesTeaser />
      <Review />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}