import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  {
    title: 'Advanced respiratory care (ventilated patients)',
    id: 'advanced-respiratory-care',
    image: '/uploads/patient-elderly-recovery.jpg',
    alt: 'Respiratory care for an older patient',
    paragraphs: [
      'This service is focused on patients who require or have recently been on mechanical ventilation.',
      'Physiotherapists use airway clearance techniques to remove secretions from the lungs, improve lung expansion using breathing exercises or devices, and help wean patients off ventilators safely by gradually reintroducing active breathing efforts. These interventions help prevent secondary infections, reduce lung collapse, and speed up recovery while supporting better oxygen exchange.',
    ],
  },
  {
    title: 'Reintroduction of active breathing for ventilator weaning',
    id: 'ventilator-weaning',
    image: '/uploads/patient-teen-treatment.jpg',
    alt: 'A patient receiving respiratory support',
    paragraphs: [
      'This specialised physiotherapy service focuses on safely and gradually reintroducing active breathing in patients who are preparing to come off mechanical ventilation. Through guided respiratory exercises, positioning techniques, and airway clearance strategies, we work to strengthen the respiratory muscles, improve lung function, and support independent breathing.',
    ],
  },
  {
    title: 'Cardiac & cardiovascular rehabilitation',
    id: 'cardiac-cardiovascular-rehabilitation',
    image: '/uploads/patient-balance-exercise.jpg',
    alt: 'A patient working through a guided rehabilitation exercise',
    paragraphs: [
      'After a heart attack, surgery, or cardiovascular event, early movement is vital. Cardiac rehab includes gentle exercises to strengthen the heart, monitored activity programs, and breathing techniques.',
      'This type of therapy lowers the risk of complications, promotes circulation, and gradually rebuilds the patient’s endurance. Education and support for long-term heart health are also included.',
    ],
  },
  {
    title: 'Paediatric respiratory support',
    id: 'paediatric-respiratory-support',
    image: '/images/service-paediatric.jpg',
    alt: 'A child using a colourful respiratory breathing device',
    paragraphs: [
      'Children with conditions like asthma, cystic fibrosis, or post-surgical complications benefit from gentle but effective airway clearance and breathing retraining.',
      'Therapy is child-friendly, often involving play-based activities, and aims to keep lungs clear, improve breathing patterns, and reduce hospital stays.',
    ],
  },
  {
    title: 'Home visits',
    id: 'home-visits',
    image: '/uploads/physio-home-visit.jpg',
    alt: 'A home physiotherapy visit',
    paragraphs: [
      'Some patients require continued support at home due to mobility challenges, chronic illness, or post-hospital care. Home visits provide personalised physiotherapy in a familiar setting, ensuring consistency in rehab.',
      'Therapists bring the necessary equipment and tailor treatment to promote independence and confidence.',
    ],
  },
  {
    title: 'Neurological & vestibular rehabilitation',
    id: 'neurological-vestibular-rehabilitation',
    image: '/uploads/patient-walking-clinic.jpg',
    alt: 'A patient practising walking during rehabilitation',
    paragraphs: [
      'For patients who’ve had strokes, brain injuries, or balance disorders, this therapy focuses on restoring movement and coordination.',
      'Gait training helps people walk again, while balance therapy reduces fall risk. Vestibular rehab helps with dizziness or vertigo, and neuromuscular techniques support nerve recovery and functional independence.',
    ],
  },
  {
    title: 'Renal & metabolic care',
    id: 'renal-metabolic-care',
    image: '/images/u2428486467_realistic_image_of_a_plus-size_dark-skinned_India_3fb3a474-4aaf-4b02-bf3d-294e.jpeg',
    alt: 'A patient portrait used to represent whole-person care',
    paragraphs: [
      'For patients with kidney failure, diabetes, or complex metabolic disorders, physiotherapy can relieve fatigue, manage fluid retention, and improve strength.',
      'These individuals often struggle with reduced mobility, so therapy focuses on light movement, improving energy levels, and preventing complications like pressure sores or muscle wasting.',
    ],
  },
  {
    title: 'Postoperative recovery (all surgeries)',
    id: 'postoperative-recovery',
    image: '/uploads/patient-physio-session-a.jpg',
    alt: 'A patient practising supported walking after illness or surgery',
    paragraphs: [
      'After surgery, early mobilisation and targeted physiotherapy reduce complications like blood clots, pneumonia, and prolonged immobility.',
      'Therapy improves circulation, rebuilds strength, and supports a quicker and safer return to daily activities. Recovery plans are tailored to the type of surgery and the patient’s specific needs.',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F3EBF7] pb-28 pt-36 text-[#30133E]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <header className="max-w-4xl">
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-7xl">
            Our services
          </h1>
          <p className="copy-justified mt-7 max-w-3xl text-lg leading-8 text-[#30133E]/75">
            We offer a comprehensive range of specialised physiotherapy services designed to meet your unique needs, from ICU to home visits.
          </p>
        </header>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <article
              id={service.id}
              key={service.id}
              className="service-card flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-[#30133E]/[0.08] bg-white shadow-[0_12px_34px_-28px_rgba(48,19,62,0.55)]"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-[#E8D8F0]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="service-card-image object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold tracking-[0.12em] text-[#8B6A9A]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.025em] md:text-2xl">
                  {service.title}
                </h2>
                <div className="copy-justified mt-5 space-y-4 text-sm leading-7 text-[#30133E]/75">
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex min-h-11 items-center gap-2 self-start border-b border-[#30133E]/35 pb-1 text-sm font-semibold text-[#30133E] transition-colors hover:border-[#8B6A9A] hover:text-[#6B4B78]"
                >
                  Ask a physio <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-24 rounded-[1.5rem] bg-[#30133E] px-8 py-12 text-white md:px-12 md:py-16">
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
            Physiotherapy that moves you forward.
          </h2>
          <p className="copy-justified mt-5 max-w-2xl text-base leading-8 text-white/75">
            Where recovery begins with a breath and ends in strength.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-14 items-center rounded-full bg-[#DBC1E8] px-8 py-4 text-sm font-semibold text-[#30133E] transition-colors hover:bg-white"
          >
            Book an assessment <span aria-hidden="true" className="ml-3">↗</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
