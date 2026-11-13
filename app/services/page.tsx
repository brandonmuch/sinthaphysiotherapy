import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  { title: 'Advanced Respiratory Care', img: 'service-respiratory.jpg', desc: 'Specialised care for complex respiratory conditions, including ventilator weaning and secretion clearance.' },
  { title: 'Cardiac & Cardiovascular Rehab', img: 'service-cardio.jpg', desc: 'Guided exercise and education to help you recover from cardiac events and improve heart health.' },
  { title: 'Renal & Metabolic Care', img: 'service-rehab.jpg', desc: 'Physiotherapy support for patients managing renal and metabolic conditions to maintain strength and mobility.' },
  { title: 'ICU & Post-Hospital Rehab', img: 'service-icu.jpg', desc: 'Critical care physiotherapy and rehabilitation to restore function after severe illness or surgery.' },
  { title: 'Neurological Rehab', img: 'service-neuro.jpg', desc: 'Specialised therapy for stroke, MS, Parkinson\'s, and other neurological conditions to improve balance and gait.' },
  { title: 'Paediatric Physiotherapy', img: 'service-paediatric.jpg', desc: 'Gentle, effective therapy for children from infancy through adolescence, supporting development and function.' },
  { title: 'Orthopaedic & Trauma Rehab', img: 'service-rehab.jpg', desc: 'Recovery from fractures, joint replacements, and traumatic injuries to get you moving again.' },
  { title: 'Vestibular & Balance Therapy', img: 'service-neuro.jpg', desc: 'Treatment for dizziness, vertigo, and balance disorders to prevent falls and improve confidence.' },
  { title: 'Home Visits', img: 'service-home.jpg', desc: 'Bringing expert physiotherapy to the comfort of your own home for those who cannot travel.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-lilac-light pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-purple mb-6">Our Services</h1>
          <p className="text-lg text-purple/80 leading-relaxed">
            We offer a comprehensive range of specialised physiotherapy services designed to meet your unique needs, from ICU to home visits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-64">
                <Image src={`/images/${service.img}`} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-purple mb-3">{service.title}</h2>
                <p className="text-purple/70 leading-relaxed flex-1">{service.desc}</p>
                <Link href="/contact" className="inline-block mt-6 text-sm font-semibold text-purple hover:text-black">
                  Book Service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}