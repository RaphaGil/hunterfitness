'use client';

import { useState } from 'react';
import AnimateIn from './AnimateIn';

const faqs = [
  {
    question: 'Where is Hunter Fitness located?',
    answer: 'Hunter Fitness is based at The Andaz Hotel Health Club, 40 Liverpool Street, London EC2M 7QN, in the heart of the City of London.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve clients in the City of London and Liverpool Street area, including professionals working in the financial district.',
  },
  {
    question: 'Do you offer a free consultation?',
    answer: 'Yes, we offer a free consultation to discuss your goals and how we can help. Get in touch via email or phone to book.',
  },
  {
    question: 'What should I expect from my first session?',
    answer: 'Your first session will include an assessment of your fitness level, a discussion of your goals, and a tailored programme designed for your individual needs.',
  },
  {
    question: 'Do you work with clients who have medical conditions?',
    answer: 'Yes, we work closely with doctors, surgeons, and physiotherapists to help clients recover from conditions including lower back pain, high blood pressure, obesity, diabetes and many others.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AnimateIn>
      <section id="faq" className="py-20 md:py-28 px-6 bg-stone-950/50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-12 md:mb-16 animate-on-scroll">
            <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="mt-4 text-stone-400 text-lg md:text-xl max-w-xl mx-auto font-thin">
              Everything you need to know before getting started
            </p>
          </header>

          <div className="space-y-3 animate-on-scroll animate-on-scroll-delay-1">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-lg border border-stone-700/80 bg-stone-900/50 overflow-hidden hover:border-stone-600 transition-colors duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="font-semibold text-white text-base md:text-lg pr-4">{faq.question}</span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#facc15]/10 text-[#facc15] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                        <p className="text-stone-300 text-sm md:text-base leading-relaxed border-t border-stone-700/80 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}
