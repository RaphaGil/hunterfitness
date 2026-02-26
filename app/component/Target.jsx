import Image from 'next/image';
import AnimateIn from './AnimateIn';

const plans = [
  {
    title: 'One-on-one',
    description: 'Personal attention',
    paragraph: 'I offer a wide range of plans to suit most people\'s needs. Our trainers will tailor a training program to suit your individual requirements, either on a one-on-one basis, or a small group session, if you prefer to train with friends.',
    img: '/images/oneonone.jpg',
  },
  {
    title: 'Small groups',
    description: 'Train with friends',
    paragraph: 'I understand that everyone is different, so we don\'t have a \'one size fits all\' approach. If you prefer to train outside a gym, we can arrange for an instructor to come to your home, subject of course to equipment and space requirements.',
    img: '/images/smallgroups.jpg',
  },
  {
    title: 'At home',
    description: 'We come to you',
    paragraph: 'So whether you\'re new to exercise, or a more serious athlete or fitness buff, your program will be specifically designed for you. I have a wealth of experience in all fields of fitness and the psychology of fitness, so we\'ll keep reinventing the wheel in order to maximize your results and ensure you get the most out of your sessions.',
    img: '/images/home.jpg',
  },
];

export default function Target() {
  return (
    <AnimateIn>
      <section className="py-20 md:py-28 px-6 bg-stone-950/50" aria-labelledby="target-heading">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16 animate-on-scroll">
            <h2 id="target-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            TARGETED INDIVIDUAL PLANS
          </h2>
          <p className="mt-4 text-whitetext-lg md:text-xl max-w-2xl mx-auto font-thin">
            Tailored programs that fit your life
          </p>
        </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" role="list">
            {plans.map((plan, index) => (
              <article
                key={plan.title}
                role="listitem"
                className={`group relative bg-stone-900 rounded-sm border border-stone-700 hover:border-[#facc15]/60 transition-all duration-300 flex flex-col overflow-hidden focus-within:ring-2 focus-within:ring-[#facc15] focus-within:ring-offset-2 focus-within:ring-offset-[#1a1a1a] animate-on-scroll ${['animate-on-scroll-delay-1', 'animate-on-scroll-delay-2', 'animate-on-scroll-delay-3'][index]}`}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={plan.img}
                  alt={plan.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-semibold tracking-widest text-[#facc15] uppercase opacity-90">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-1">
                    {plan.title}
                  </h3>
                  <p className="text-stone-300 text-sm mt-0.5 font-medium">
                    {plan.description}
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                  {plan.paragraph}
                </p>
              </div>
            </article>
            ))}
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}
