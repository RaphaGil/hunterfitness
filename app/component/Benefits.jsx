'use client';

import AnimateIn from './AnimateIn';

const benefits = [
  {
    text: 'No monthly gym membership fees',
    icon: 'wallet',
  },
  {
    text: 'Private, well equipped training space',
    icon: 'lock',
  },
  {
    text: 'Luxurious changing facilities',
    icon: 'sparkle',
  },
  {
    text: 'Fun & encouraging sessions',
    icon: 'smile',
  },
  {
    text: 'Competitive & flexible payment terms',
    icon: 'flex',
  },
  {
    text: 'Functional strength training & weight loss',
    icon: 'fitness',
  },
  {
    text: 'Based next to Liverpool Street station',
    icon: 'location',
  },
];

const BenefitIcon = ({ type }) => {
  const icons = {
    wallet: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </svg>
    ),
    lock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    sparkle: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
    smile: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    ),
    flex: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 3v18" />
        <path d="m8 7 4-4 4 4" />
        <path d="m8 17 4 4 4-4" />
      </svg>
    ),
    fitness: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="m6.5 6.5 11 11" />
        <path d="m17.5 6.5-11 11" />
        <path d="M12 4v16" />
        <path d="M4 12h16" />
      </svg>
    ),
    location: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  };
  return icons[type] || null;
};

export default function Benefits() {
  return (
    <AnimateIn>
      <section id="benefits" className="py-16 md:py-24 px-6 bg-[#1a1a1a]" aria-labelledby="benefits-heading">
        <div className="max-w-6xl xl:max-w-7xl mx-auto">
          <header className="text-center mb-12 md:mb-16 animate-on-scroll">
            <h2 id="benefits-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              WHY TRAIN WITH US
            </h2>
            <p className="mt-4 text-stone-400 text-lg md:text-xl max-w-xl mx-auto font-thin">
              Everything you need to achieve your fitness goals
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 animate-on-scroll animate-on-scroll-delay-1">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-start gap-4 rounded-lg border border-stone-700/80 bg-stone-900/50 px-5 py-5 hover:border-[#facc15]/30 hover:bg-stone-900/70 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#facc15]/10 text-[#facc15] shrink-0" aria-hidden>
                  <BenefitIcon type={benefit.icon} />
                </span>
                <p className="text-stone-200 text-sm md:text-base font-medium leading-snug pt-2">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}
