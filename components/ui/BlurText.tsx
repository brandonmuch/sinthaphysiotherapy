'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export function BlurText({
  text, delay = 100, className, animateBy = 'words', direction = 'top',
}: { text: string; delay?: number; className?: string; animateBy?: 'words' | 'characters'; direction?: 'top' | 'bottom' }) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <span ref={ref} className={cn('inline-flex flex-wrap', className)}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(12px)', opacity: 0, y: direction === 'top' ? -24 : 24 }}
          animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: (i * delay) / 1000, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-pre"
        >
          {el}{animateBy === 'words' && i < elements.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  );
}