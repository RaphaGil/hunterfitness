'use client';

import Image from 'next/image';
import AnimateIn from './AnimateIn';

const services = [
  {
    title: 'Strength',
    description: 'Functional and Integrated Strength and Conditioning',
    image: '/images/strength.jpg',
  },
  {
    title: 'Core Training',
    description: 'Balance & stability, abdominal and lower back work, and all the muscles of the trunk',
    image: '/images/12.jpeg',
  },
  {
    title: 'Fat / Weight Loss',
    description: 'Personal approach to weight management with dietary advice for gain or loss as part of a full conditioning program.',
    image: '/images/14.jpg',
  },
  {
    title: 'Circuit Training',
    description: 'Increase strength and aerobic fitness and burn lots of calories in one workout using multiple exercises',
    image: '/images/circuit.jpg',
  },
  {
    title: 'Rehabilitation',
    description: 'Working with doctors and physiotherapists to help you recover from medical conditions including lower back pain, high blood pressure, obesity and diabetes.',
    image: '/images/15.jpg',
  },
  {
    title: 'Sports Specific',
    description: 'Individually designed programmes for marathons, triathlons, football, rugby or combat sports',
    image: '/images/16.jpg',
  },
];

const delayClasses = ['animate-on-scroll-delay-1', 'animate-on-scroll-delay-2', 'animate-on-scroll-delay-3', 'animate-on-scroll-delay-4', 'animate-on-scroll-delay-5', 'animate-on-scroll-delay-5'];

export default function Services() {
  return (
    <AnimateIn>
      <section className="px-6 py-16 md:py-24 lg:py-28 max-w-6xl xl:max-w-7xl mx-auto" aria-labelledby="services-heading">
        <h1 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight animate-on-scroll">
          YOUR FITNESS JOURNEY STARTS HERE
        </h1>
        <p className="mt-2 text-stone-300 max-w-xl lg:text-lg font-thin animate-on-scroll animate-on-scroll-delay-1">Browse our services below.</p>

        <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative flex flex-col overflow-hidden rounded-lg border border-stone-700/80 bg-stone-900/60 hover:border-[#facc15]/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 animate-on-scroll ${delayClasses[index]}`}
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{service.title}</h2>
                  <div className="w-10 h-0.5 bg-[#facc15] mt-2" aria-hidden />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 md:p-6">
                <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AnimateIn>
  );
}
