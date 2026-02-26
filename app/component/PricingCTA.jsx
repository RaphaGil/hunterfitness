'use client';

import Link from 'next/link';
import AnimateIn from './AnimateIn';

export default function PricingCTA() {
  return (
    <AnimateIn>
      <section id="pricing" className="relative py-12 md:py-16 px-6 overflow-hidden" aria-label="Pricing and consultation">
        {/* Accent gradient background */}
        <div className="absolute inset-0 bg-linear-to-r from-[#facc15]/10 via-[#facc15]/5 to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-stone-900/50" aria-hidden />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#facc15]/40 to-transparent" aria-hidden />

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
            {/* Pricing */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 md:gap-12">
              <div className="flex items-baseline gap-2">
                <span className="text-stone-400 text-sm md:text-base font-medium uppercase tracking-wider">Sessions from</span>
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#facc15]">£55</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-stone-600" aria-hidden />
              <div className="flex items-baseline gap-2">
                <span className="text-stone-400 text-sm md:text-base font-medium uppercase tracking-wider">Monthly coaching from</span>
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#facc15]">£250</span>
              </div>
            </div>

            {/* CTA */}
            <div className="shrink-0 text-center md:text-right">
              <p className="text-stone-300 text-sm md:text-base mb-4">
                Book a consultation to find the right plan for you.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#facc15] text-stone-900 font-semibold text-sm uppercase tracking-widest hover:bg-[#fde047] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc15] rounded-sm"
              >
                Book a consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}
