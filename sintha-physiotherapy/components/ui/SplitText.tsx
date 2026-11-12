'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { cn } from '@/lib/utils';

export function SplitText({ text, className, delay = 0.03 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const chars = el.querySelectorAll<HTMLElement>('.split-char');
      gsap.fromTo(chars,
        { opacity: 0, yPercent: 110, rotateX: -40 },
        {
          opacity: 1, yPercent: 0, rotateX: 0, duration: 0.9, stagger: delay, ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [delay]);

  return (
    <h2 ref={ref} className={cn(className)} aria-label={text}>
      {text.split(' ').map((word, wi, arr) => (
        <span key={wi} className="inline-block overflow-hidden align-bottom whitespace-nowrap">
          {word.split('').map((c, ci) => (
            <span key={ci} className="split-char inline-block will-change-transform">{c}</span>
          ))}
          {wi < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </h2>
  );
}