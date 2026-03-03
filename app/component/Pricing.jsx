'use client';

import Link from 'next/link';
import AnimateIn from './AnimateIn';

const sessionPacks = [
  { sessions: 1, total: 70, perSession: 70 },
  { sessions: 5, total: 325, perSession: 65 },
  { sessions: 10, total: 600, perSession: 60 },
  { sessions: 20, total: 1100, perSession: 55 },
];

const monthlyPlans = [
  { frequency: 'Once a week', price: 250 },
  { frequency: 'Twice a week', price: 475 },
];

export default function Pricing() {
  return (
    <AnimateIn>
      <section className="px-6 py-20 md:py-28 lg:py-32 max-w-5xl mx-auto" aria-labelledby="pricing-heading">
        <header className="text-center mb-14 md:mb-20">
          <p className="text-[#facc15] text-sm font-semibold tracking-widest uppercase animate-on-scroll">Pricing</p>
          <h1 id="pricing-heading" className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight animate-on-scroll animate-on-scroll-delay-1">
            INVEST IN YOUR FITNESS
          </h1>
          <div className="mt-4 w-16 h-1 bg-[#facc15] mx-auto rounded-full animate-on-scroll animate-on-scroll-delay-2" aria-hidden />
          <p className="mt-4 text-stone-400 max-w-xl mx-auto lg:text-lg font-thin animate-on-scroll animate-on-scroll-delay-2">
            All sessions are 1 hour. Choose the option that works best for you.
          </p>
        </header>

        {/* Session packs */}
        <div className="mb-16 md:mb-20 animate-on-scroll animate-on-scroll-delay-3">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">Session packs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sessionPacks.map((pack) => (
              <div
                key={pack.sessions}
                className="rounded-lg border border-stone-700/80 bg-stone-900/50 px-6 py-6 hover:border-[#facc15]/40 transition-colors"
              >
                <p className="text-stone-400 text-sm font-medium uppercase tracking-wider">
                  {pack.sessions === 1 ? 'Single session' : `${pack.sessions} sessions`}
                </p>
                <p className="mt-2 text-2xl md:text-3xl font-bold text-[#facc15]">£{pack.total}</p>
                {pack.sessions > 1 && (
                  <p className="mt-1 text-stone-500 text-sm">£{pack.perSession} per session</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Monthly standing order */}
        <div className="mb-16 md:mb-20 animate-on-scroll animate-on-scroll-delay-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">Monthly standing order</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {monthlyPlans.map((plan) => (
              <div
                key={plan.frequency}
                className="rounded-lg border border-stone-700/80 bg-stone-900/50 px-6 py-6 hover:border-[#facc15]/40 transition-colors"
              >
                <p className="text-stone-400 text-sm font-medium uppercase tracking-wider">{plan.frequency}</p>
                <p className="mt-2 text-2xl md:text-3xl font-bold text-[#facc15]">£{plan.price} per month</p>
              </div>
            ))}
          </div>
        </div>

        {/* Duo training */}
        <div className="mb-16 md:mb-20 rounded-lg border border-[#facc15]/20 bg-[#facc15]/5 px-6 py-6 animate-on-scroll animate-on-scroll-delay-5">
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#facc15]">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Share the cost
          </h2>
          <p className="text-stone-300 text-sm md:text-base">
            Train with a friend and share the cost of each session (2 people max). Available mid morning 9am to evening only.
          </p>
        </div>

        {/* Notes */}
        <div className="space-y-3 text-stone-500 text-sm md:text-base animate-on-scroll animate-on-scroll-delay-5">
          <p>Please note that all prices are subject to negotiation based on individual circumstances and availability.</p>
          <p>Sessions are subject to availability.</p>
        </div>

        {/* CTA */}
        <div className="mt-14 md:mt-16 text-center animate-on-scroll animate-on-scroll-delay-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#facc15] text-stone-900 font-semibold text-sm uppercase tracking-widest hover:bg-[#fde047] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc15] rounded-md"
          >
            Book a consultation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </AnimateIn>
  );
}
