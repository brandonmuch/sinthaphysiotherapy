export default function AboutPage() {
  const TEAM = [
    {
      name: 'Wezi Nyimba',
      role: 'Respiratory, Paediatrics, ICU Rehab',
      bio: 'Wezi brings a wealth of experience in advanced respiratory care, paediatric physiotherapy, and critical care rehabilitation. She is dedicated to helping patients regain their independence and breathe easier, utilizing evidence-based techniques tailored to each individual.',
    },
    {
      name: 'Posheletso Kekana',
      role: 'Trauma, Critical Care, Paediatrics',
      bio: 'Posheletso specialises in trauma and critical care, guiding patients through their most vulnerable moments with compassionate, expert care. Her paediatric focus ensures that the youngest patients receive gentle, effective treatment for optimal development.',
    },
  ];

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-6">Meet Our Team</h1>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta mb-4">Team Philosophy</h2>
          <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed font-light">
            We are a team of expert physiotherapists dedicated to providing comprehensive, compassionate care. We believe in treating the whole person, not just the condition, empowering you to move better and live better.
          </p>
        </div>

        {/* Team Grid - Text Only */}
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
          {TEAM.map((member) => (
            <div key={member.name} className="border-t border-charcoal/20 pt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-2">{member.role}</p>
              <h3 className="font-serif text-4xl text-charcoal mb-4">{member.name}</h3>
              <p className="text-charcoal/70 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}