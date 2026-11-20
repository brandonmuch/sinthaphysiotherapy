'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type BlurTextProps = {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'characters';
  direction?: 'top' | 'bottom';
};

export function BlurText({
  text,
  delay = 85,
  className,
  animateBy = 'words',
  direction = 'top',
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : Array.from(text);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reduceMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <span ref={ref} className={cn('inline-flex flex-wrap', className)} aria-label={text}>
      {elements.map((element, index) => (
        <motion.span
          key={`${element}-${index}`}
          aria-hidden="true"
          initial={reduceMotion ? false : {
            filter: 'blur(7px)',
            opacity: 0,
            y: direction === 'top' ? -12 : 12,
          }}
          animate={reduceMotion || inView ? {
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
          } : undefined}
          transition={{
            duration: reduceMotion ? 0 : 0.62,
            delay: reduceMotion ? 0 : (index * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block whitespace-pre"
        >
          {element}{animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  );
}
