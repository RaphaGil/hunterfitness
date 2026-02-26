'use client';

import AnimateIn from './AnimateIn';

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Hunter+Fitness+The+Andaz+Hotel+Health+Club+40+Liverpool+Street+London+EC2M+7QN";

const facilities = [
  'Showers & changing facilities',
  'State of the art gym equipment',
  'Body composition tracking',
];

export default function Studio() {
  return (
    <AnimateIn>
      <section id="studio" className="py-20 md:py-28 px-6 bg-stone-950/50" aria-labelledby="studio-heading">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12 md:mb-16 animate-on-scroll">
            <h2 id="studio-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              THE STUDIO
            </h2>
            <p className="mt-4 text-stone-400 text-lg md:text-xl max-w-2xl mx-auto font-thin">
              Train at a premium location in the heart of the City
            </p>
          </header>

          <div className="space-y-10 md:space-y-12 animate-on-scroll animate-on-scroll-delay-1">
            {/* Location */}
            <div className="rounded-sm border border-stone-700 bg-stone-900/80 p-6 md:p-8">
              <h3 className="text-sm font-semibold tracking-widest text-[#facc15] uppercase mb-3">
                Location
              </h3>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-medium text-white hover:text-[#facc15] transition-colors"
              >
                Andaz Hotel · 40 Liverpool Street · London EC2M 7QN
              </a>
              <p className="mt-2 text-stone-400 text-sm">
                The Andaz Hotel Health Club, Liverpool Street
              </p>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-[#facc15] uppercase mb-4">
                Facilities
              </h3>
              <ul className="space-y-3">
                {facilities.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialisation */}
            <div className="rounded-sm border-l-4 border-l-[#facc15] bg-stone-900/60 p-6 md:p-8">
              <p className="text-stone-200 text-base md:text-lg leading-relaxed">
                I specialise in personal training for individuals with demanding, high‑pressure careers, helping them prioritise their health and fitness amidst busy schedules. My approach provides structure, motivation, and accountability, ensuring that every session is purposeful and aligned with their goals. By tailoring programmes to suit their lifestyle, I support clients in achieving long‑term results while maintaining balance in both work and personal life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}
