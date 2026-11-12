'use client';
import { cn } from '@/lib/utils';

export function GradientText({
  children, className, colors = ['#C4826A', '#8A9E8C', '#2A2724'],
}: { children: React.ReactNode; className?: string; colors?: string[] }) {
  return (
    <span
      className={cn('inline-block bg-clip-text text-transparent', className)}
      style={{
        backgroundImage: `linear-gradient(120deg, ${colors.join(', ')}, ${colors[0]})`,
        backgroundSize: '300% 100%',
        animation: 'gradient-move 8s ease infinite',
      }}
    >
      {children}
      <style jsx>{`
        @keyframes gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </span>
  );
}