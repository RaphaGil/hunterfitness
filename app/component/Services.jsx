'use client';

import Image from 'next/image';
import AnimateIn from './AnimateIn';

const services = [
  {
    title: 'Strength',
    description: 'Functional and Integrated Strength and Conditioning',
    image: '/images/13.jpg',
  },
  {
    title: 'Core Training',
    description: 'A program that includes balance & stability, abdominal and lower back work, and all the muscles of the trunk',
    image: '/images/12.jpeg',
  },
  {
    title: 'Fat / Weight Loss',
    description: 'Dealing with the ever-present anxieties associated with bodyweight culture in our society is a particular concern. Matt will devote much effort to devising personal approach to individual decision-making in this area. Dietary advice for weight management covering gain or loss is part of a full conditioning program',
    image: '/images/14.jpg',
  },
  {
    title: 'Circuit Training',
    description: 'Increase your strength and aerobic fitness and burn lots of calories in one workout using multiply exercises',
    image: '/images/circuit.jpg',
  },
  {
    title: 'Rehabilitation',
    description: 'Matt can work closely with doctors, surgeons, and physiotherapists to help you recover from any type of medical condition. He has great experience working with people with lower back pain, high blood pressure, obesity, diabetes and many other medical conditions.',
    image: '/images/15.jpg',
  },
  {
    title: 'Sports Specific',
    description: 'Individually designed programmes for individuals who are preparing for sporting events such as marathons, triathlons, football, rugby or combat sports',
    image: '/images/16.jpg',
  },
];

const delayClasses = ['animate-on-scroll-delay-1', 'animate-on-scroll-delay-2', 'animate-on-scroll-delay-3', 'animate-on-scroll-delay-4', 'animate-on-scroll-delay-5', 'animate-on-scroll-delay-5'];

export default function Services() {
  return (
    <AnimateIn>
      <section className="px-6 py-16 md:py-24 lg:py-28 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto" aria-labelledby="services-heading">
        <h1 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight animate-on-scroll">
          YOUR FITNESS JOURNEY STARTS HERE
        </h1>
        <p className="mt-2 text-stone-300 max-w-xl lg:text-lg font-thin animate-on-scroll animate-on-scroll-delay-1">Browse our services below.</p>

        <div className="mt-12 md:mt-16 lg:mt-20 space-y-0">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={service.title}
                className={`group flex flex-col md:flex-row md:items-stretch gap-0 md:gap-0 overflow-hidden border-b border-stone-800 last:border-b-0 animate-on-scroll ${delayClasses[index]}`}
              >
                {/* Image side */}
                <div className={`relative w-full md:w-2/5 aspect-4/3 md:aspect-auto md:min-h-[280px] lg:min-h-[340px] xl:min-h-[400px] shrink-0 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 560px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 via-transparent to-transparent md:hidden" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
                    <h2 className="text-xl font-bold text-white drop-shadow-lg">{service.title}</h2>
                  </div>
                </div>

                {/* Content side */}
                <div className={`flex flex-col justify-center p-6 md:p-10 lg:p-12 xl:p-16 bg-stone-900/50 md:bg-transparent ${isEven ? 'md:order-1 md:pr-12 lg:pr-16 xl:pr-20 md:pl-0' : 'md:order-2 md:pl-12 lg:pl-16 xl:pl-20 md:pr-0'}`}>
                  <h2 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3 lg:mb-4">
                    {service.title}
                  </h2>
                  <div className="hidden md:block w-12 lg:w-16 h-0.5 bg-[#facc15] mb-4 lg:mb-5" aria-hidden />
                  <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </AnimateIn>
  );
}
