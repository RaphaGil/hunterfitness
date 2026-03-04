import Image from 'next/image';
import AnimateIn from './AnimateIn';

export default function About() {
  return (
    <AnimateIn>
      <section className="flex flex-col md:flex-row mt-8 md:mt-16" aria-labelledby="about-heading">
        <div className="mt-4 md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="space-y-4 max-w-xl animate-on-scroll">
          <h3 id="about-heading" className="text-sm font-semibold tracking-widest text-[#facc15] uppercase animate-hero-float">
            ABOUT ME
          </h3>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-hero-float" style={{ animationDelay: '0.3s' }}>Matthew Hunter</h2>
          <h4 className="text-xl md:text-2xl font-thin tracking-wide text-stone-200 animate-hero-float" style={{ animationDelay: '0.6s' }}>Personal Trainer City of London</h4>
          <p className="text-stone-300 text-lg leading-relaxed mt-8 font-normal">
            I specialise in personal training for individuals with demanding, high‑pressure careers, helping them prioritise their health and fitness amidst busy schedules. My approach provides structure, motivation, and accountability, ensuring that every session is purposeful and aligned with their goals. By tailoring programmes to suit their lifestyle, I support clients in achieving long‑term results while maintaining balance in both work and personal life.
          </p>
          <p className="text-stone-300 text-lg leading-relaxed mt-6 font-normal">
            Sport and fitness have always been my passion. I competed in athletics from a young age and ranked among the top 10 in England for my age group for several years. This love led me to pursue a career in fitness, motivated by the desire to inspire others to adopt a healthy lifestyle and achieve their fitness goals.
          </p>
          <p className="text-stone-300 text-lg leading-relaxed mt-6 font-normal">
            I&apos;m a highly motivated and dedicated fitness professional. I pride myself on my professional attitude and ability to tailor programmes or sessions to individual needs and wants, recognising that everyone is different in terms of fitness attitudes, goals, and interests.
          </p>
          <p className="text-stone-300 text-lg leading-relaxed mt-6 font-normal">
            My personal goal is to provide the most beneficial and rewarding training experience for each client, offering motivation, encouragement, and support to maximise results and enjoyment.
          </p>
          </div>
        </div>

        <div className="md:w-2/3 relative w-full aspect-3/4 sm:aspect-4/5 md:aspect-auto md:min-h-[700px] md:h-[80vh] overflow-hidden animate-from-right">
          <Image
            src="/images/10.jpg"
            alt="Matthew Hunter - Personal Trainer at Hunter Fitness, Liverpool Street London"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-contain object-center md:animate-float"
            aria-hidden
          />
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>
      </section>
    </AnimateIn>
  );
}