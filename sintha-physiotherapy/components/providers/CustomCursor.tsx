'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e: MouseEvent) => {
      gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0.08, ease: 'power2.out' });
      gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power3.out' });
    };
    const grow = () => gsap.to(ring.current, { scale: 1.8, borderColor: 'rgba(196,130,106,0.9)' });
    const shrink = () => gsap.to(ring.current, { scale: 1, borderColor: 'rgba(196,130,106,0.4)' });

    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-terracotta mix-blend-difference hidden md:block"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -ml-5 -mt-5 h-10 w-10 rounded-full border border-terracotta/40 hidden md:block"
      />
    </>
  );
}