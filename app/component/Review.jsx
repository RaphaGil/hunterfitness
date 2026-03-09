'use client';

import { useState, useEffect } from 'react';
import AnimateIn from './AnimateIn';

const MOBILE_BREAKPOINT = 768;

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

function getDisplayedReviews(reviews, pageIndex, perPage) {
  const start = pageIndex * perPage;
  return Array.from({ length: perPage }, (_, i) => reviews[(start + i) % reviews.length]);
}

export default function Review() {
  const [activePage, setActivePage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const perPage = isMobile ? 1 : 2;
  const pageCount = Math.ceil(reviews.length / perPage);

  useEffect(() => {
    const id = setInterval(() => {
      setActivePage((p) => (p + 1) % pageCount);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [pageCount]);

  const displayedReviews = getDisplayedReviews(reviews, activePage, perPage);

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

          {/* One review on mobile, two on desktop; auto-rotating */}
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
            <div className="flex justify-center mt-8">
              <a
                href="https://share.google/7eVhz5x0h3uboZyWL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                View all Google reviews
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}
