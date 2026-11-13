'use client';
import { CountUp } from '@/components/ui/CountUp';

const STATS = [
  { to: 500, suffix: '+', label: 'Patients Supported' },
  { to: 7, suffix: '', label: 'Specialisations' },
  { to: 5, suffix: '★', label: 'Average Rating' },
  { to: 4, suffix: '', label: 'Years of Practice' },
];

export function StatsStrip() {
  return (
    <section className="border-y border-charcoal/10 bg-cream py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-10">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="display text-6xl text-charcoal">
              <CountUp to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-xs tracking-[0.1em] text-charcoal/50">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}