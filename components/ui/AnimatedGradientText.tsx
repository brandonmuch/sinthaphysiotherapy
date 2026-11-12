'use client';
import { cn } from '@/lib/utils';

export function AnimatedGradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn('inline-block bg-clip-text text-transparent', className)}
      style={{
        backgroundImage: 'linear-gradient(90deg, #C4826A, #8A9E8C, #C4826A)',
        backgroundSize: '200% 100%',
        animation: 'agtext 6s linear infinite',
      }}
    >
      {children}
      <style jsx>{`
        @keyframes agtext { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
      `}</style>
    </span>
  );
}