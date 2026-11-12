'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function CircularText({
  text, className, radius = 60, duration = 20,
}: { text: string; className?: string; radius?: number; duration?: number }) {
  const chars = text.split('');
  const step = 360 / chars.length;

  return (
    <motion.div
      className={cn('relative', className)}
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {chars.map((c, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 origin-[0_0] font-mono"
          style={{ transform: `rotate(${i * step}deg) translateY(-${radius}px)`, transformOrigin: '0 0' }}
        >
          {c}
        </span>
      ))}
    </motion.div>
  );
}