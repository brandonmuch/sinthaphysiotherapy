const SERVICES = [
  { title: 'Advanced Respiratory Care', desc: 'Specialised care for complex respiratory conditions, including ventilator weaning.' },
  { title: 'Cardiac & Cardiovascular Rehabilitation', desc: 'Guided exercise and education to help you recover from cardiac events and improve heart health.' },
  { title: 'Renal & Metabolic Care', desc: 'Physiotherapy support for patients managing renal and metabolic conditions.' },
  { title: 'ICU & Post-Hospital Rehab', desc: 'Critical care physiotherapy and rehabilitation to restore function after severe illness.' },
  { title: 'Neurological Rehabilitation', desc: 'Specialised therapy for stroke, MS, Parkinson\'s, and other neurological conditions.' },
  { title: 'Paediatric Physiotherapy', desc: 'Gentle, effective therapy for children from infancy through adolescence.' },
  { title: 'Orthopaedic & Trauma Rehab', desc: 'Recovery from fractures, joint replacements, and traumatic injuries.' },
  { title: 'Vestibular & Balance Therapy', desc: 'Treatment for dizziness, vertigo, and balance disorders.' },
  { title: 'Home Visits', desc: 'Bringing expert physiotherapy to the comfort of your own home.' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h1 className="font-serif text-6xl text-charcoal mb-6">Our Services</h1>
        <p className="text-lg text-charcoal/70 max-w-2xl mb-16">
          We offer a comprehensive range of specialised physiotherapy services designed to meet your unique needs.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div key={service.title} className="bg-white p-8 rounded-2xl border border-charcoal/10 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-terracotta font-mono text-sm mb-4 block">0{i + 1}</span>
              <h2 className="font-serif text-2xl text-charcoal mb-3">{service.title}</h2>
              <p className="text-charcoal/70 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}