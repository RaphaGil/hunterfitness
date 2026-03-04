'use client';

import Link from 'next/link';
import AnimateIn from './AnimateIn';

export default function PricingCTA() {
  return (
    <AnimateIn>
      <section id="pricing" className="relative py-10 md:py-16 px-4 sm:px-6 overflow-hidden" aria-label="Pricing and consultation">
        {/* Accent gradient background */}
        <div className="absolute inset-0 bg-linear-to-r from-[#facc15]/10 via-[#facc15]/5 to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-stone-900/50" aria-hidden />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#facc15]/40 to-transparent" aria-hidden />

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Pricing - side by side at all sizes */}
            <div className="flex flex-row items-center gap-4 sm:gap-6 md:gap-12 justify-center">
              <div className="flex flex-col items-start gap-1 py-3 px-4 sm:py-4 sm:px-5 rounded-xl bg-stone-900/60 min-w-0">
                <span className="text-stone-400 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider">Sessions from</span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#facc15]">£55</span>
              </div>
              <div className="w-px h-8 sm:h-10 md:h-12 bg-stone-600 shrink-0" aria-hidden />
              <div className="flex flex-col items-start gap-1 py-3 px-4 sm:py-4 sm:px-5 rounded-xl bg-stone-900/60 min-w-0">
                <span className="text-stone-400 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider">Monthly coaching from</span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#facc15]">£250</span>
              </div>
            </div>

            {/* CTA */}
            <div className="shrink-0 text-center lg:text-right w-full sm:w-auto max-w-sm sm:max-w-none">
              <p className="text-stone-300 text-sm md:text-base mb-3 md:mb-4">
                Book a consultation to find the right plan for you. <Link href="/personal-training-prices" className="text-[#facc15] hover:text-[#fde047] transition-colors underline underline-offset-2">See full pricing</Link>
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-6 py-4 sm:px-8 bg-[#facc15] text-stone-900 font-semibold text-sm uppercase tracking-widest hover:bg-[#fde047] active:bg-[#fde047] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc15] rounded-lg touch-manipulation"
              >
                Book a consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <p className="relative text-center lg:text-left mt-4 sm:mt-6 text-stone-500 text-xs sm:text-sm">
            Please note that all prices are subject to negotiation based on individual circumstances and availability.
          </p>
        </div>
      </section>
    </AnimateIn>
  );
}
