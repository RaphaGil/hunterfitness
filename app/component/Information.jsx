'use client';

import { useState, useEffect, useRef } from 'react';

function useCountUp(end, duration = 2000, startOnView = true, start = 0) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const ref = useRef(null);

  useEffect(() => {
    if (startOnView && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) setHasStarted(true);
        },
        { threshold: 0.2 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + easeOut * (end - start)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, hasStarted, start]);

  return [count, ref];
}

export default function Information() {
  const [sinceCount, sinceRef] = useCountUp(2006, 1800, true, 2000);
  const [yearsCount, yearsRef] = useCountUp(23, 1800, true);
  const [clientsCount, clientsRef] = useCountUp(100, 2200, true);

  return (
    <section className="py-14 md:py-32 px-6 bg-[#1a1a1a]" aria-label="Stats">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 md:gap-12 text-center">
        <div ref={sinceRef} className="animate-fade-in-up">
          <p className="text-3xl md:text-5xl font-light text-white tabular-nums">{sinceCount}</p>
          <p className="mt-1 text-md uppercase tracking-widest text-stone-500">Since</p>
          <p className="mt-1.5 text-[14px] text-[#facc15] tracking-wide">Trusted in fitness</p>
        </div>
        <div ref={yearsRef} className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-3xl md:text-5xl font-light text-white tabular-nums">{yearsCount}</p>
          <p className="mt-1 text-md uppercase tracking-widest text-stone-500">Years</p>
          <p className="mt-1.5 text-[14px] text-[#facc15] tracking-wide">Expert coaching</p>
        </div>
        <div ref={clientsRef} className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-3xl md:text-5xl font-light text-white tabular-nums">{clientsCount.toLocaleString()}</p>
          <p className="mt-1 text-md uppercase tracking-widest text-stone-500">+ Clients</p>
          <p className="mt-1.5 text-[14px] text-[#facc15] tracking-wide">Results delivered</p>
        </div>
      </div>
    </section>
  );
}
