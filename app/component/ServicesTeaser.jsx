'use client';

import Link from 'next/link';
import AnimateIn from './AnimateIn';

export default function ServicesTeaser() {
  return (
    <AnimateIn>
      <section className="px-6 py-16 md:py-24 lg:py-28 max-w-6xl xl:max-w-7xl mx-auto" aria-labelledby="services-teaser-heading">
        <div className="text-center">
          <p className="text-[#facc15] text-sm font-semibold tracking-widest uppercase animate-on-scroll">What we offer</p>
          <h2 id="services-teaser-heading" className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight animate-on-scroll animate-on-scroll-delay-1">
            YOUR FITNESS JOURNEY STARTS HERE
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#facc15] mx-auto rounded-full animate-on-scroll animate-on-scroll-delay-2" aria-hidden />
          <p className="mt-4 text-stone-400 max-w-xl mx-auto lg:text-lg font-thin animate-on-scroll animate-on-scroll-delay-2">
            Strength, Core Training, Fat Loss, Circuit Training, Rehabilitation, and Sports Specific programmes. Bespoke coaching tailored to you.
          </p>
          <div className="mt-10 animate-on-scroll animate-on-scroll-delay-3">
            <Link
              href="/personal-training-services"
              className="btn-primary"
            >
              View all services
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}
