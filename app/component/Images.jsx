import Link from 'next/link';
import Image from 'next/image';
import AnimateIn from './AnimateIn';

export default function Images() {
  return (
    <AnimateIn>
      <section className="py-16 md:py-20 px-4 md:px-6" aria-labelledby="start-training-heading">
        <div className="relative grid max-w-7xl grid-cols-1 md:grid-cols-3 gap-0 mx-auto overflow-hidden rounded-xl shadow-2xl shadow-black/40 border border-stone-700/80 h-[400px] sm:h-[500px] md:h-[70vh] min-h-[320px] md:min-h-[420px]">
        {/* Left – hidden on mobile */}
        <div className="relative w-full h-full min-h-[200px] md:min-h-[320px] hidden md:block">
          <Image
            src="/images/9.jpg"
            alt="Training"
            fill
            sizes="(max-width: 768px) 0, 33vw"
            className="object-cover"
          />
        </div>
        {/* Center – single image on mobile (fixed bg broken on small screens), parallax on desktop */}
        <div className="relative w-full h-full min-h-[200px] md:min-h-[320px]">
          <Image
            src="/images/12.jpeg"
            alt="Training"
            fill
            sizes="(max-width: 768px) 100vw, 34vw"
            className="object-cover md:hidden"
          />
          <div
            className="hidden md:block absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/12.jpeg)',
              backgroundAttachment: 'fixed',
            }}
            aria-hidden
          />
        </div>
        {/* Right – hidden on mobile */}
        <div className="relative w-full h-full min-h-[200px] md:min-h-[320px] hidden md:block">
          <Image
            src="/images/studio.jpg"
            alt="Training"
            fill
            sizes="(max-width: 768px) 0, 33vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-stone-900/55 animate-on-scroll">
          <h1 id="start-training-heading" className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            START TRAINING TODAY
          </h1>
          <p className="text-lg md:text-xl text-white max-w-xl mb-6 md:mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] font-thin">
            Call Hunter Fitness today & begin the change you deserve.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#facc15] hover:border-[#facc15] hover:text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15] focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
          >
            LET&apos;S START
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
    </AnimateIn>
  );
}