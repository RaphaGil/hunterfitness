'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimateIn from './AnimateIn';

const services = [
  {
    title: 'Strength',
    description: 'Functional and Integrated Strength and Conditioning',
  },
  {
    title: 'Core Training',
    description: 'Balance & stability, abdominal and lower back work, and all the muscles of the trunk',
  },
  {
    title: 'Fat / Weight Loss',
    description: 'Personal approach to weight management with dietary advice for gain or loss as part of a full conditioning program.',
  },
  {
    title: 'Circuit Training',
    description: 'Increase strength and aerobic fitness and burn lots of calories in one workout using multiple exercises',
  },
  {
    title: 'Rehabilitation',
    description: 'Working with doctors and physiotherapists to help you recover from medical conditions including lower back pain, high blood pressure, obesity and diabetes.',
  },
  {
    title: 'Sports Specific',
    description: 'Individually designed programmes for marathons, triathlons, football, rugby or combat sports',
  },
];

const delayClasses = ['animate-on-scroll-delay-1', 'animate-on-scroll-delay-2', 'animate-on-scroll-delay-3', 'animate-on-scroll-delay-4', 'animate-on-scroll-delay-5', 'animate-on-scroll-delay-5'];

export default function Services() {
  return (
    <AnimateIn>
      <section className="px-6 py-16 md:py-24 lg:py-28 max-w-6xl xl:max-w-7xl mx-auto" aria-labelledby="services-heading">
        <header className="text-center mb-14 md:mb-16 lg:mb-20">
          <p className="text-[#facc15] text-sm font-semibold tracking-widest uppercase animate-on-scroll">What we offer</p>
          <h1 id="services-heading" className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight animate-on-scroll animate-on-scroll-delay-1">
            YOUR FITNESS JOURNEY STARTS HERE
          </h1>
          <div className="mt-4 w-16 h-1 bg-[#facc15] mx-auto rounded-full animate-on-scroll animate-on-scroll-delay-2" aria-hidden />
          <p className="mt-4 text-stone-400 max-w-xl mx-auto lg:text-lg font-thin animate-on-scroll animate-on-scroll-delay-2">
            Browse our services below.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
          {/* Image on the left */}
          <div className="order-1 flex items-center justify-center lg:justify-start px-4 lg:px-0 shrink-0 relative">
            {/* Yellow square behind image - minimalist */}
            <div
              className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-full h-full min-h-[280px] lg:min-h-[560px] bg-[#facc15]/10 rounded-md animate-on-scroll z-0"
              style={{ transform: 'rotate(3deg)' }}
              aria-hidden
            />
            <div className="relative w-full aspect-4/3 lg:w-[420px] xl:w-[500px] lg:aspect-auto lg:min-h-[560px] rounded-md overflow-hidden animate-on-scroll ring-2 ring-stone-700/60 ring-offset-4 ring-offset-[#1a1a1a] shadow-2xl shadow-black/40 z-10">
              <Image
                src="/images/4.jpg"
                alt="Hunter Fitness training"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" aria-hidden />
            </div>
          </div>

          {/* Topics on the right - two columns */}
          <div className="order-2 flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {services.slice(0, 3).map((service, index) => (
              <article
                key={service.title}
                className={`group rounded-md border border-stone-700/80 bg-stone-900/50 p-6 md:p-7 hover:border-[#facc15]/50 hover:bg-stone-900/70 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 animate-on-scroll ${delayClasses[index]}`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-md bg-[#facc15]/10 text-[#facc15] shrink-0 font-bold text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#facc15] transition-colors duration-200">{service.title}</h2>
                    <div className="w-12 h-0.5 bg-[#facc15]/60 mb-4" aria-hidden />
                    <p className="text-stone-300 text-sm md:text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </article>
            ))}
            </div>
            <div className="space-y-6">
            {services.slice(3, 6).map((service, index) => (
              <article
                key={service.title}
                className={`group rounded-md border border-stone-700/80 bg-stone-900/50 p-6 md:p-7 hover:border-[#facc15]/50 hover:bg-stone-900/70 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 animate-on-scroll ${delayClasses[index + 3]}`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-md bg-[#facc15]/10 text-[#facc15] shrink-0 font-bold text-sm">
                    {index + 4}
                  </span>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#facc15] transition-colors duration-200">{service.title}</h2>
                    <div className="w-12 h-0.5 bg-[#facc15]/60 mb-4" aria-hidden />
                    <p className="text-stone-300 text-sm md:text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </article>
            ))}
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-16 text-center animate-on-scroll animate-on-scroll-delay-5">
          <Link
            href="#contact"
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
