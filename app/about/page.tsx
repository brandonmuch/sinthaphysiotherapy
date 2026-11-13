import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import SpecularButton from '@/components/ui/SpecularButton';

const PRACTITIONERS = [
  {
    name: 'Wezi Nyimba',
    qualifications: ['BSc Physiotherapy (UCT)', 'MSc Physiotherapy Candidate (Wits)'],
    specialties: 'Respiratory, Paediatrics, ICU Rehab, Geriatrics',
    biography: 'Meet Wezi, a powerhouse of calm in the chaos of coughs, wheezes, and tricky recoveries. With over 8 years of experience, she brings expert care to both little lungs and older chests, specialising in complex respiratory conditions like RSV, pneumonia, and asthma. From tiny tots in paediatric ICU to frail seniors needing a gentler touch, Wezi’s all about restoring breath, mobility, and quality of life. Her secret? A holistic, heart-centred approach that treats the person, not just the condition.',
  },
  {
    name: 'Posheletso Kekana',
    qualifications: ['BSc Physiotherapy (UP)', 'MSc Physiotherapy Candidate (Wits)'],
    specialties: 'Trauma and Critical Care, Post Trauma Rehab, Paediatrics',
    biography: 'A passionate physio and movement motivator! With a degree from the University of Pretoria and 8 years of hands-on experience in trauma and critical care (for both little ones and grown-ups), Posheletso brings calm, confidence, and care to every session. She’s all about personalised treatment plans that get people moving better and feeling stronger. Now, she’s expanding her focus into musculoskeletal rehab, home-based care, and preventative treatments – helping people live their best lives, right where they are. She also possesses advanced skills in dry needling and kinesiology taping.',
  },
];

const AFFILIATED_PROFESSIONALS = [
  { name: 'Dr Lebogang Moja', role: 'Specialist Physician', location: 'Life Fourways Hospital Suite D44', phone: '011 875 1950' },
  { name: 'Dr Itumeleng Mogolane', role: 'Specialist Physician', location: 'Life Fourways Hospital Suite C27', phone: '011 875 1620' },
  { name: 'Dr Sam Kyei', role: 'Specialist Paediatrician', location: 'The Children’s Therapy Centre', phone: '067 379 1469' },
];

export default function AboutPage() {
  return (
    <div className="bg-white pb-28 pt-32 text-[#29262D]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <section className="grid items-center gap-10 overflow-hidden rounded-[32px] bg-[#F3EBF7] p-6 md:grid-cols-[0.95fr_1.05fr] md:gap-16 md:p-10">
            <div>
              <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[#8B6A9A]">About Sintha</p>
              <h1 className="max-w-2xl text-5xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#30133E] md:text-7xl">
                Meet our team of expert physiotherapists
              </h1>
              <p className="copy-justified mt-7 max-w-xl text-base leading-8 text-[#29262D]/85 md:text-lg">
                We are dedicated to providing comprehensive, compassionate care. We believe in treating the whole person, not just the condition, empowering you to move better and live better through evidence-based practice.
              </p>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] bg-[#F3EBF7]">
              <Image
                src="/uploads/patient-grandfather-grandson.jpg"
                alt="A grandfather and grandson spending time together at home"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[center_38%]"
              />
            </div>
          </section>
        </FadeIn>

        <section className="mt-10 grid items-center gap-10 overflow-hidden rounded-[32px] bg-white py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-12">
          <FadeIn>
            <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] bg-[#F3EBF7]">
              <Image
                src="/uploads/patient-physio-session-a.jpg"
                alt="A physiotherapist supporting an older woman during a walking exercise"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-[center_22%]"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div>
              <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[#8B6A9A]">Our team philosophy</p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#30133E] md:text-5xl">
                Care that sees the whole person.
              </h2>
              <div className="copy-justified mt-7 space-y-5 text-base leading-8 text-[#29262D]/85">
                <p>
                  We believe in meeting each patient where they are, physically, emotionally, and functionally. Breathing is not just a mechanical act; it’s deeply connected to how we move, feel, and heal. Our approach is holistic, hands-on, and person-centred, with a strong emphasis on early intervention, education, and empowering patients to take an active role in their recovery.
                </p>
                <p>
                  Our team brings a wealth of experience across critical care, paediatrics, respiratory, and trauma rehabilitation.
                </p>
              </div>
              <blockquote className="mt-9 rounded-[24px] bg-[#F3EBF7] px-7 py-8">
                <p className="text-2xl font-semibold leading-snug tracking-[-0.025em] text-[#30133E] md:text-3xl">
                  “Compassion in every breath, care in every movement.”
                </p>
              </blockquote>
            </div>
          </FadeIn>
        </section>

        <section className="mt-10 rounded-[32px] bg-[#30133E] px-6 py-16 text-white md:px-10 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-white">The practitioners</p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">The people behind your care.</h2>
            </div>
            <p className="copy-justified max-w-xl text-sm leading-7 text-white/90">
              Our clinicians bring experience across specialist physiotherapy services, with care shaped around each person’s needs and goals.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {PRACTITIONERS.map((person, index) => (
              <FadeIn key={person.name} delay={index * 0.06}>
                <article className="about-feature-card h-full rounded-[24px] border border-[#30133E]/[0.08] bg-[#F3EBF7] p-7 md:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#30133E] md:text-3xl">{person.name}</h3>
                    </div>
                  </div>
                  <div className="mt-5 space-y-1 text-sm leading-6 text-[#29262D]/75">
                    {person.qualifications.map(item => <p key={item}>{item}</p>)}
                  </div>
                  <p className="mt-5 rounded-xl bg-white px-4 py-3 text-xs font-semibold leading-6 text-[#6B4B78]">
                    {person.specialties}
                  </p>
                  <p className="copy-justified mt-5 text-sm leading-7 text-[#29262D]/85">{person.biography}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-[#30133E]/10 pt-16 md:mt-24 md:pt-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#8B6A9A]">Our wider network</p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#30133E] md:text-5xl">Affiliated professionals</h2>
            <p className="copy-justified mt-5 text-base leading-8 text-[#29262D]/80">
              We work alongside affiliated medical professionals to support coordinated care.
            </p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {AFFILIATED_PROFESSIONALS.map(professional => (
              <article key={professional.name} className="rounded-[22px] bg-[#F3EBF7] p-7 shadow-[0_14px_38px_-32px_rgba(48,19,62,0.6)]">
                <h3 className="text-xl font-semibold text-[#30133E]">{professional.name}</h3>
                <p className="mt-2 text-sm font-medium text-[#6B4B78]">{professional.role}</p>
                <p className="mt-4 text-sm leading-6 text-[#29262D]/75">{professional.location}</p>
                <a href={`tel:${professional.phone.replaceAll(' ', '')}`} className="mt-4 inline-flex text-sm font-semibold text-[#30133E] underline decoration-[#8B6A9A]/60 underline-offset-4 hover:text-[#6B4B78]">
                  {professional.phone}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[28px] bg-[#30133E] px-8 py-12 text-white md:mt-24 md:px-12 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-white">Move forward with confidence</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                Your health, healing and well-being matter.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white">
                Our team is here to support your next step.
              </p>
            </div>
            <SpecularButton
              size="md"
              radius={999}
              tint="#DBC1E8"
              tintOpacity={0.16}
              textColor="#FFFFFF"
              lineColor="#DBC1E8"
              baseColor="#3D2548"
              intensity={0.82}
              idleIntensity={0.18}
              shineSize={10}
              shineFade={34}
              thickness={1.1}
              glow={0.36}
              followMouse
              proximity={180}
              href="https://wa.me/27670721908"
              external
            >
              Contact us <span aria-hidden="true">↗</span>
            </SpecularButton>
          </div>
        </section>
      </div>
    </div>
  );
}
