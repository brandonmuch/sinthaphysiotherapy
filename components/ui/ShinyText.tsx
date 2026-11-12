'use client';
import { cn } from '@/lib/utils';

export function ShinyText({ text, className, speed = 3 }: { text: string; className?: string; speed?: number }) {
  return (
    <span
      className={cn('inline-block bg-clip-text text-transparent', className)}
      style={{
        backgroundImage:
          'linear-gradient(120deg, currentColor 40%, rgba(255,255,255,0.9) 50%, currentColor 60%)',
        backgroundSize: '200% 100%',
        WebkitTextFillColor: 'transparent',
        animation: `shiny ${speed}s linear infinite`,
        color: 'var(--charcoal)',
      }}
    >
      {text}
      <style jsx>{`
        @keyframes shiny {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </span>
  );
}