import Hero from '@/component/Hero';
import NavBar from '@/component/NavBar';
import Banner from '@/component/Banner';
import About from '@/component/About';
import Information from '@/component/Information';
import Studio from '@/component/Studio';
import Target from '@/component/Target';
import Images from '@/component/Images';
import Services from '@/component/Services';
import Review from '@/component/Review';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';
import PersonalTrainerBadge from '@/component/PersonalTrainerBadge';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <PersonalTrainerBadge />
      <NavBar />
      <Hero />
      <Information />
      <About />
      <Banner />
      <Studio />
      <Target />
      <Images />
      <Services />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
}