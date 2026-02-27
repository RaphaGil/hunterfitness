import Image from 'next/image';
import AnimateIn from './AnimateIn';

export default function About() {
  return (
    <AnimateIn>
      <section className="flex flex-col md:flex-row mt-8 md:mt-16" aria-labelledby="about-heading">
        <div className="mt-4 md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="space-y-4 max-w-xl animate-on-scroll">
          <h3 id="about-heading" className="text-sm font-semibold tracking-widest text-[#facc15] uppercase animate-hero-float">
            ABOUT ME
          </h3>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-hero-float" style={{ animationDelay: '0.3s' }}>Matthew Hunter</h2>
          <h4 className="text-xl md:text-2xl font-thin tracking-wide text-stone-200 animate-hero-float" style={{ animationDelay: '0.6s' }}>Personal Trainer City of London</h4>
          <p className="text-stone-300 text-lg leading-relaxed mt-8 font-normal">
            Sport and fitness has always been my great passion, having competed in athletics 
            from a very young age and ranking among the top 10 in England for my age group for a 
            number of years. It was this love of athletics, which prompted my desire to establish a 
            career in fitness, with the aim of motivating and inspiring others to attain a healthy 
            lifestyle and achieve their fitness goals.
            <br />
            <br />
            I am highly motivated and dedicated fitness Professional. I pride myself on my professional attitude and ability to tailor a programme or session to my clients’ individual needs and wants, recognising that everyone is different and therefore has vastly different attitudes, goals and interests when it comes to fitness and training. 
            <br/>
            <br/>
            My personal goal is to constantly strive to achieve the most beneficial and rewarding training experience for each of his clients, while offering motivation, encouragement and support in order to maximise results and enjoyment..
          </p>
          </div>
        </div>

        <div className="md:w-2/3 relative w-full aspect-3/4 sm:aspect-4/5 md:aspect-auto md:min-h-[700px] md:h-[80vh] overflow-hidden animate-from-right">
          <Image
            src="/images/10.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover object-center md:animate-float"
            aria-hidden
          />
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>
      </section>
    </AnimateIn>
  );
}