"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}

export default function ScrollFadeIn({
  children,
  className = "",
  delay = 0,
}: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `fade-up-delay-${delay}` : "";

  return (
    <div ref={ref} className={`fade-up ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
