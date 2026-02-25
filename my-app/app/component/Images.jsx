import Link from 'next/link';
import Image from 'next/image';
import AnimateIn from './AnimateIn';

export default function Images() {
  return (
    <AnimateIn>
      <section className="py-16 md:py-20 px-4 md:px-6" aria-labelledby="start-training-heading">
        <div className="relative grid max-w-7xl grid-cols-1 md:grid-cols-3 gap-0  mx-auto overflow-hidden rounded-sm shadow-2xl border border-stone-700 h-[500px] md:h-[70vh] min-h-[420px]">
        {/* Left – normal image background */}
        <div className="relative w-full h-full min-h-[320px]">
          <Image
            src="/images/9.jpg"
            alt="Training"
            fill
            style={{ objectFit: 'cover' }}
            className="object-cover"
          />
        </div>
        {/* Center – fixed image background */}
        <div
          className="relative w-full h-full min-h-[320px] bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/12.jpeg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Right – normal image background */}
        <div className="relative w-full h-full min-h-[320px]">
          <Image
            src="/images/10.jpg"
            alt="Training"
            fill
            style={{ objectFit: 'cover' }}
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-stone-900/55 animate-on-scroll">
          <h1 id="start-training-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            START TRAINING TODAY
          </h1>
          <p className="text-lg md:text-xl text-white max-w-xl mb-6 md:mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] font-thin">
            Call Hunter Fitness today & begin the change you deserve.
          </p>
          <Link
            href="/contact"
            className="inline-block border-b border-white pb-1 text-white transition-colors duration-200 hover:border-[#3b82f6] hover:text-[#3b82f6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
          >
            LET&apos;S START
          </Link>
        </div>
      </div>
    </section>
    </AnimateIn>
  );
}