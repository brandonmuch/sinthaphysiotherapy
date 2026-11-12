'use client';
import { cn } from '@/lib/utils';

export function ShimmerButton({
  children, href, className,
}: { children: React.ReactNode; href?: string; className?: string }) {
  const Inner = (
    <span
      className={cn(
        'relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-charcoal px-6 py-3 text-xs uppercase tracking-[0.2em] text-cream',
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
        style={{ animation: 'shimmer-slide 3s infinite' }}
      />
      <style jsx>{`
        @keyframes shimmer-slide {
          0% { transform: translateX(-100%); }
          60%, 100% { transform: translateX(200%); }
        }
      `}</style>
    </span>
  );
  return href ? <a href={href} target="_blank" rel="noopener">{Inner}</a> : Inner;
}