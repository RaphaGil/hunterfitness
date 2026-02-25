'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimateIn({ children, className = '', rootMargin = '0px 0px -60px 0px', threshold = 0.1 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} data-animate className={inView ? 'in-view ' + className : className}>
      {children}
    </div>
  );
}
