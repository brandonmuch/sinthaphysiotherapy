import Image from 'next/image';
import SpecularButton from '@/components/ui/SpecularButton';
import FluxLines from '@/components/ui/FluxLines';
import CircularGallery from '@/components/ui/CircularGallery';
import SinthaCard from '@/components/ui/SinthaCard';

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
    imageFrame: 'aspect-[3/2]',
    alt: 'A patient practising supported walking after illness or surgery',
    paragraphs: [
      'After surgery, early mobilisation and targeted physiotherapy reduce complications like blood clots, pneumonia, and prolonged immobility.',
      'Therapy improves circulation, rebuilds strength, and supports a quicker and safer return to daily activities. Recovery plans are tailored to the type of surgery and the patient’s specific needs.',
    ],
  },
];


const GALLERY_ITEMS = SERVICES.map(service => ({
  image: service.image,
  text: service.title,
  alt: service.alt,
  description: service.paragraphs.join(' '),
}));
export default function ServicesPage() {
  return (
    <div className="bg-white pb-28 pt-32 text-[#29262D]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <header className="max-w-4xl">
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-7xl">
            Our services
          </h1>
          <p className="copy-justified mt-7 max-w-3xl text-lg leading-8 text-[#29262D]/85">
            We offer a comprehensive range of specialised physiotherapy services designed to meet your unique needs, from ICU to home visits.
          </p>
        </header>

        <SinthaCard
          className="mt-14 -mx-6 md:-mx-10"
          backgroundColor="#30133E"
          borderRadius={28}
        >
          <section className="relative isolate overflow-hidden rounded-[28px] bg-[#30133E] px-6 py-12 md:px-10 md:py-16">
            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
              <FluxLines
                colors={['#DBC1E8', '#8B6A9A', '#FFFFFF']}
                speed={0.32}
                scale={1.55}
                turbulence={0.9}
                fluidity={0.1}
                glow={2}
                rimWidth={0.2}
                lineWidth={1}
                flowDirection="down"
                opacity={0.68}
                mouseInteraction
                mouseStrength={0.65}
                clickSwirl
                className="absolute inset-0"
                style={{ position: 'absolute', inset: 0 }}
              />
              <div className="absolute inset-0 bg-[#30133E]/48" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold tracking-[0.14em] text-[#DBC1E8]">Find the right support</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                  Explore our services.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 md:text-base">
                  Move through the gallery to discover the different ways we support recovery. Select any service card to open its image and read more about the care it includes.
                </p>
                <p className="mt-4 text-xs font-semibold tracking-[0.08em] text-white/75">
                  Drag or scroll to explore · Select a card to open · Press Escape to close
                </p>
              </div>

              <div className="relative mt-8 h-[460px] w-full overflow-hidden rounded-[24px] md:h-[600px]">
                <CircularGallery
                  items={GALLERY_ITEMS}
                  bend={3}
                  textColor="#FFFFFF"
                  borderRadius={0.05}
                  font={'600 24px "Open Sans"'}
                  itemSize={0.82}
                  itemAspect={0.82}
                  gap={0.24}
                  scrollSpeed={1.55}
                  scrollEase={0.05}
                  wave={0.72}
                  fadeEdges={0.12}
                  shadow={0.24}
                  grayscale={false}
                  showTitles
                  snap
                  openOnClick
                  intro
                />
              </div>
            </div>
          </section>
        </SinthaCard>

        <section className="mt-24 grid items-center gap-10 rounded-[28px] bg-[#F8F4FA] p-5 md:grid-cols-[0.95fr_1.05fr] md:gap-14 md:p-8">
          <SinthaCard className="h-full" backgroundColor="#FFFFFF" borderRadius={22}>
            <div className="relative overflow-hidden rounded-[22px] bg-white">
              <Image
                src="/uploads/patient-meditating-outdoors.jpg"
                alt="A woman taking a peaceful moment outdoors among soft lilac flowers"
                width={800}
                height={533}
                sizes="(max-width: 768px) 100vw, 42vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </SinthaCard>
          <div className="px-2 py-5 md:px-4">
            <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#8B6A9A]">A whole-person approach</p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#30133E] md:text-5xl">
              Physiotherapy that moves you forward.
            </h2>
            <p className="copy-justified mt-5 max-w-2xl text-base leading-8 text-[#29262D]/80">
              Where recovery begins with a breath and ends in strength.
            </p>
            <div className="mt-8">
              <SpecularButton size="md" radius={999} tint="#DBC1E8" tintOpacity={0.16} textColor="#FFFFFF" lineColor="#DBC1E8" baseColor="#30133E" intensity={0.82} idleIntensity={0.18} shineSize={10} shineFade={34} thickness={1.1} glow={0.3} followMouse href="/contact">
                Book an assessment <span aria-hidden="true">↗</span>
              </SpecularButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
