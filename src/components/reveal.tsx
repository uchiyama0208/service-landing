'use client';

import { useEffect, useRef } from 'react';

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    node.style.opacity = '0';
    node.style.transform = 'translateY(16px)';
    node.style.animationDelay = `${delay}ms`;
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
