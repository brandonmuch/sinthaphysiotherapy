'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Marquee({
  children, reverse = false, speed = 40, className,
}: { children: React.ReactNode; reverse?: boolean; speed?: number; className?: string }) {
  return (
    <div className={cn('flex w-full overflow-hidden', className)}>
      <motion.div
        className="flex shrink-0 gap-8 pr-8"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}