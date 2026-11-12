'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function Magnet({
  children, padding = 80, strength = 3,
}: { children: React.ReactNode; padding?: number; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const enter = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const rad = Math.max(r.width, r.height) / 2 + padding;
      if (dist < rad) {
        gsap.to(el, { x: dx / strength, y: dy / strength, duration: 0.5, ease: 'power2.out' });
      }
    };
    const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    window.addEventListener('mousemove', enter);
    el.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', enter);
      el.removeEventListener('mouseleave', leave);
    };
  }, [padding, strength]);

  return <div ref={ref} className="inline-block will-change-transform">{children}</div>;
}