'use client';

import Image from 'next/image';
import AnimateIn from './AnimateIn';

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Hunter+Fitness+The+Andaz+Hotel+Health+Club+40+Liverpool+Street+London+EC2M+7QN";

const facilities = [
  { name: 'State of the art gym equipment', icon: 'dumbbell' },
  { name: 'Body composition tracking', icon: 'chart' },
  { name: 'Luxurious showers and changing facilities', icon: 'shower' },
  { name: 'Functional training space', icon: 'space' },
  { name: 'Cardio equipment', icon: 'heart' },
  { name: 'Wi-Fi', icon: 'wifi' },
  { name: 'Showers', icon: 'shower' },
  { name: 'Lockers', icon: 'locker' },
  { name: 'Hair dryers', icon: 'hairdryer' },
];

const FacilityIcon = ({ type }) => {
  const icons = {
    dumbbell: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M6.5 6.5h11M6.5 6.5v11M6.5 17.5h11M17.5 6.5v11M4 12h3M17 12h3M12 4v3M12 17v3" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 5-5" />
      </svg>
    ),
    shower: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 6 6.5 3.5a1 1 0 0 1 0-2c3.5-1.5 6 2 6 2" />
        <path d="M4 12v10" />
        <path d="M12 4v16" />
        <path d="M20 12v10" />
        <path d="M2 22h20" />
      </svg>
    ),
    space: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="18" height="18" x="3" y="3" rx="2" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    wifi: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M5 13a10 10 0 0 1 14 0" />
        <path d="M8.5 16.429a5 5 0 0 1 7 0" />
        <path d="M12 19h.01" />
      </svg>
    ),
    locker: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="8" height="5" x="2" y="11" rx="1" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    hairdryer: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M2 12c2-2 4-2 6 0" />
        <path d="M8 12c2-2 4-2 6 0" />
        <path d="M14 12c2-2 4-2 6 0" />
      </svg>
    ),
  };
  return icons[type] || null;
};

export default function Studio() {
  return (
    <AnimateIn>
      <section id="studio" className="py-20 md:py-28 px-6 bg-stone-950/50" aria-labelledby="studio-heading">
        <div className="max-w-6xl xl:max-w-7xl mx-auto">
          <header className="text-center mb-12 md:mb-16 animate-on-scroll">
            <h2 id="studio-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              THE STUDIO
            </h2>
            <p className="mt-4 text-stone-400 text-lg md:text-xl max-w-2xl mx-auto font-thin">
              Train at a premium location in the heart of the City
            </p>
          </header>

          {/* Hero image with overlay */}
          <div className="relative w-full aspect-16/10 md:aspect-21/9 rounded-lg overflow-hidden mb-12 md:mb-16 animate-on-scroll group">
            <Image
              src="/images/studio.jpg"
              alt="Hunter Fitness studio at Andaz Hotel Health Club, Liverpool Street London"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1280px"
              priority={false}
            />
            <div className="absolute inset-0 bg-linear-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
           
          </div>

          {/* Location + Facilities grid */}
          <div className="grid md:grid-cols-5 gap-8 lg:gap-10 animate-on-scroll animate-on-scroll-delay-1">
            {/* Location card - spans 2 cols */}
            <div className="md:col-span-2">
              <div className="rounded-lg border border-stone-700/80 bg-stone-900/60 p-6 md:p-8 h-full flex flex-col hover:border-[#facc15]/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#facc15]/10 text-[#facc15]" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <h3 className="text-sm font-semibold tracking-widest text-[#facc15] uppercase">Location</h3>
                </div>
                <p className="text-white text-lg md:text-xl font-medium leading-snug mb-4">
                  Andaz Hotel · 40 Liverpool Street · London EC2M 7QN
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-[#facc15] font-medium hover:text-[#fde047] transition-colors group/link"
                >
                  Get directions
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Facilities - spans 3 cols */}
            <div className="md:col-span-3">
              <h3 className="text-sm font-semibold tracking-widest text-[#facc15] uppercase mb-5">Facilities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {facilities.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start gap-4 rounded-lg border border-stone-700/60 bg-stone-900/40 px-4 py-4 hover:border-stone-600 hover:bg-stone-900/60 transition-colors duration-300"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-md bg-[#facc15]/10 text-[#facc15] shrink-0 mt-0.5" aria-hidden>
                      <FacilityIcon type={item.icon} />
                    </span>
                    <p className="text-stone-200 text-sm md:text-base leading-relaxed pt-1">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </AnimateIn>
  );
}
