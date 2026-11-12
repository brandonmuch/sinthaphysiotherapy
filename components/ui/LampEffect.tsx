'use client';
export function LampEffect({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[45vh] w-[50vw] -translate-x-1/2">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(196,130,106,0.5),transparent_60%)] blur-2xl" />
        <div className="absolute left-1/2 top-0 h-full w-[120px] -translate-x-1/2 bg-gradient-to-b from-terracotta/60 to-transparent blur-3xl" />
      </div>
      {children}
    </div>
  );
}