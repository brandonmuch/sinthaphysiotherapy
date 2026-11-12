'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function FadeContent({
  children, className, delay = 0, blur = true,
}: { children: React.ReactNode; className?: string; delay?: number; blur?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: blur ? 'blur(10px)' : 'none' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}