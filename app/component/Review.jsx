'use client';

import { useState, useEffect } from 'react';
import AnimateIn from './AnimateIn';

const reviews = [
  {
    quote: 'I have been training with Matt for over two years. I had not done any serious exercise for over twenty years and, at first, was reluctant to start. I now see Matt twice a week and over the two years I have managed to lose over two stone in weight which was not a particular goal but has happened as a bi-product of the new exercise regime. I now see myself as reasonably fit and for more supple than I ever was. I certainly have far more energy and sleep really well. Matt is very professional yet personable and tailors the sessions to individual needs. I would highly recommend him to anyone who exercises and needs help or encouragement or a complete beginner',
    name: 'John O, Chief Financial Officer.',
    detail: 'Client since 2021',
  },
  {
    quote: 'Having started a new job I also wanted to start a new approach to my fitness and was lucky enough to be given Matt’s details by my gym. Through a combination of resistance, cardio and circuit training my level of fitness has greatly improved and I have managed to “break-out” of just doing the same old routine. Matt has helped me achieve goals, including running the London Marathon in 2007, and his approach of pushing you without being aggressive and, when needed, with humour, works extremely well.',
    name: 'James M, Solicitor',
    detail: 'City professional',
  },
  {
    quote: 'I have trained regularly with Matt for over three years. With a sedentary job and a history of zero exercise, I had allowed my weight/fitness to go unchecked over many years. In my first session with Matt, my heart-rate skyrocketed just walking on the treadmill, certainly jogging any distance seemed unthinkable. In the early days Matt proved adept at assessing what I was capable of and what I felt comfortable doing and encouraged me to push myself. Once I started to see improvement and had a bit more enthusiasm we picked up the pace. To the astonishment of myself and anyone that knew me, with Matt’s encouragement I had started jogging regularly and have now completed a number of 5k charity runs, with the new aim now of getting to 10K. I have also lost a noticeable amount of weight. I haven’t always been consistent in my efforts but Matt has been completely committed to keeping me motivated and moving. I can honestly say that the weekly sessions with Matt have kept me on track and I have exceeded my expectations by a long way.',
    name: '.',
    detail: 'Client since 2019',
  },
  {
    quote: 'Matthew has been a perfect motivator for my personal fitness program since I started my training sessions with him three years ago. He has real knowledge that has helped me build strength and endurance — and just feel great. He knows when to push for that extra rep and when to vary the exercise programme. In addition he is a friendly person and has a good sense of humor, so all this makes going to train with him a pleasure.',
    name: 'Sergey K, Group Chairman',
    detail: 'Client since 2019',
  },
  {
    quote: 'After a short time training with Matt, I have achieved results that I just couldn’t realize on my own even after years going to the gym. Matt discussed my goals with me and then provided the right motivation and focus for all our sessions. Even though he pushes me to my limit each time, he makes the session varied and fun and is always encouraging. The results, of course, make it all worthwhile.',
    name: 'Sergey K, Group Chairman',
    detail: 'Client since 2019',
  },
];

const ROTATE_INTERVAL_MS = 7000;
const REVIEWS_PER_PAGE = 2;
const pageCount = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

function getReviewIndices(pageIndex) {
  const start = pageIndex * REVIEWS_PER_PAGE;
  return [
    reviews[start],
    reviews[(start + 1) % reviews.length],
  ];
}

export default function Review() {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActivePage((p) => (p + 1) % pageCount);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const displayedReviews = getReviewIndices(activePage);

  return (
    <AnimateIn>
      <section className="py-20 md:py-28 px-6" aria-labelledby="reviews-heading">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-14 animate-on-scroll">
            <h2 id="reviews-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="mt-4 text-white text-lg md:text-xl max-w-2xl mx-auto font-thin">
              Real results from real people
            </p>
          </header>

          {/* Two reviews at a time, auto-rotating */}
          <div className="animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {displayedReviews.map((review, i) => (
                <blockquote
                  key={review.name + activePage + i}
                  className="flex flex-col rounded-sm border border-stone-700 border-l-4 border-l-[#facc15] bg-stone-900/80 p-6 md:p-8 hover:border-[#facc15]/50 transition-colors duration-300 min-h-[200px] md:min-h-[240px]"
                >
                  <p className="text-stone-200 text-base md:text-lg leading-relaxed flex-1">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <footer className="mt-6 pt-4 border-t border-stone-700">
                    <cite className="not-italic font-semibold text-white">
                      {review.name}
                    </cite>
                    <p className="text-[#facc15]/90 text-sm mt-0.5">{review.detail}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6" aria-label="Review progress">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActivePage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === activePage ? 'w-6 bg-[#facc15]' : 'w-2 bg-stone-600'}`}
                  aria-label={`Go to reviews ${index + 1}`}
                  aria-current={index === activePage ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}
