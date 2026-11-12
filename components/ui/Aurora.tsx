'use client';
import { cn } from '@/lib/utils';

export function Aurora({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="absolute -left-1/3 top-0 h-[80vh] w-[80vw] rounded-full bg-sage/40 blur-[120px] animate-[aurora1_18s_ease-in-out_infinite]" />
      <div className="absolute -right-1/4 top-1/4 h-[60vh] w-[60vw] rounded-full bg-terracotta/30 blur-[120px] animate-[aurora2_22s_ease-in-out_infinite]" />
      <style jsx>{`
        @keyframes aurora1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(10%,8%) scale(1.15); } }
        @keyframes aurora2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-8%,-10%) scale(1.2); } }
      `}</style>
    </div>
  );
}