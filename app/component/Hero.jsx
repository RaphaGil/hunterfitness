"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const goals = ['Improving Health', 'Feeling Better', 'Gaining Strength', 'Losing Weight', 'Increasing Flexibility', 'Building Muscle', 'Injury Prevention'];

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Hunter+Fitness+40+Liverpool+Street+London+EC2M+7QN";

const TYPE_MS = 70;
const PAUSE_MS = 2200;

export default function Hero() {
  const [currentGoal, setCurrentGoal] = useState(0);
  const [typedText, setTypedText] = useState('');
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const word = goals[currentGoal];
    setTypedText('');

    const clearAll = () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current = [];
    };

    for (let i = 0; i <= word.length; i++) {
      const id = setTimeout(() => {
        setTypedText(word.slice(0, i));
      }, i * TYPE_MS);
      timeoutsRef.current.push(id);
    }

    const id = setTimeout(() => {
      setCurrentGoal((prev) => (prev + 1) % goals.length);
    }, word.length * TYPE_MS + PAUSE_MS);
    timeoutsRef.current.push(id);

    return clearAll;
  }, [currentGoal]);

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden" aria-label="Hero">
      {/* Responsive hero image - optimized via Next.js Image, contained to hero section */}
      <div className="absolute inset-0">
        <Image
          src="/images/7.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-20 pb-24 md:px-12">
        <div className="mx-auto w-full max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight animate-fade-in-up">
            PERSONALIZED FITNESS FOR
          </h1>
          <p
            className="mt-4 text-[#facc15] text-2xl sm:text-3xl md:text-4xl font-extralight min-h-[1.2em] animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            {typedText}
            <span className="inline-block w-0.5 h-[0.9em] bg-[#facc15] ml-0.5 align-middle animate-pulse" aria-hidden />
          </p>
        
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link href="/contact" className="btn-primary">
              Start here
            </Link>
          
          </div>
        </div>
      </div>

      {/* <a
        href="/contact"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a> */}

      <div className="absolute right-6 bottom-6 left-6 md:left-auto md:right-6 md:max-w-[280px] z-10 text-right">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 text-md tracking-wide hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          40 Liverpool St · London EC2M 7QN
        </a>
      </div>
    </section>
  );
}
