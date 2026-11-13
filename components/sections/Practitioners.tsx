import Link from 'next/link';

const PRACTITIONERS = [
  { name: 'Wezi Nyimba', role: 'Respiratory, Paediatrics, ICU Rehab' },
  { name: 'Posheletso Kekana', role: 'Trauma, Critical Care, Paediatrics' },
];

export function Practitioners() {
  return (
    <section id="practitioners" className="bg-cream py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="font-sans text-4xl font-semibold tracking-tight text-charcoal md:text-5xl">The people behind your care.</h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-charcoal/80 md:text-base">
              Our clinicians bring experience across specialist physiotherapy services, with care shaped around each person’s needs and goals.
            </p>
          </div>
          <Link 
            href="/about" 
            className="text-sm font-semibold border-b border-charcoal pb-1 hover:text-terracotta hover:border-terracotta transition-colors"
          >
            Read full bios
          </Link>
        </div>

        {/* Changed to max-w-4xl so the two items don't stretch too wide */}
        <div className="grid md:grid-cols-2 gap-x-16 max-w-4xl">
          {PRACTITIONERS.map((p) => (
            <div 
              key={p.name} 
              className="group border-t border-charcoal/20 py-8 flex items-center justify-between hover:bg-charcoal/[0.02] transition-colors px-4 -mx-4"
            >
              <div>
                <h3 className="font-sans text-2xl font-semibold text-charcoal group-hover:text-terracotta transition-colors md:text-3xl">
                  {p.name}
                </h3>
                <p className="text-sm text-charcoal/60 mt-2">{p.role}</p>
              </div>
              <span className="text-2xl text-charcoal/30 group-hover:text-terracotta group-hover:translate-x-2 transition-all">
                →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}