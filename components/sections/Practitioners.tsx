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
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">The Practitioners</p>
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal">Hands that listen.</h2>
          </div>
          <Link 
            href="/about" 
            className="text-xs uppercase tracking-[0.2em] border-b border-charcoal pb-1 hover:text-terracotta hover:border-terracotta transition-colors"
          >
            Read Full Bios
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
                <h3 className="font-serif text-3xl text-charcoal group-hover:text-terracotta transition-colors">
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