'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimateIn from './AnimateIn';

export default function AboutTeaser() {
  return (
    <AnimateIn>
      <section className="flex flex-col md:flex-row mt-8 md:mt-16" aria-labelledby="about-teaser-heading">
        <div className="mt-4 md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="space-y-4 max-w-xl animate-on-scroll">
            <h3 id="about-teaser-heading" className="text-sm font-semibold tracking-widest text-[#facc15] uppercase animate-hero-float">
              ABOUT ME
            </h3>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-hero-float" style={{ animationDelay: '0.3s' }}>
              Matthew Hunter
            </h2>
            <h4 className="text-xl md:text-2xl font-thin tracking-wide text-stone-200 animate-hero-float" style={{ animationDelay: '0.6s' }}>
              Personal Trainer City of London
            </h4>
            <p className="text-stone-300 text-lg leading-relaxed mt-8 font-normal">
              I specialise in personal training for individuals with demanding, high‑pressure careers, helping them prioritise their health and fitness amidst busy schedules. My approach provides structure, motivation, and accountability, ensuring that every session is purposeful and aligned with their goals.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-6 text-[#facc15] font-medium hover:text-[#fde047] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc15]"
            >
              Learn more about me
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="md:w-2/3 relative w-full aspect-3/4 sm:aspect-4/5 md:aspect-auto md:min-h-[500px] md:h-[60vh] overflow-hidden animate-from-right">
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
