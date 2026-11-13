'use client';

import { FadeIn } from '@/components/ui/FadeIn';

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
  {
    name: 'Pumelela Noah',
    qualifications: ['BSc Physiotherapy (UCT)'],
    specialties: 'Neuro Rehab, Trauma and ICU Rehab',
    biography: 'Where expertise meets heart! With a solid background in human anatomy, biomechanics, and rehab techniques, Pumelela brings a rare blend of clinical know-how and genuine care to every patient she treats. Whether it’s complex neurological cases, trauma recovery, or age-related conditions, she’s seen it all –and handled it with confidence and compassion. She’s not just skilled, she’s a great listener too, working closely with patients to create personalised plans that actually work. Her passion? Helping people get back to doing what they love and living life to the fullest.',
  },
  {
    name: 'Keisha May',
    qualifications: ['BSc Physiotherapy (Wits)', 'MSc Public Health Candidate (Wits)'],
    specialties: 'Orthopaedics, Cardiothoracic Rehab',
    biography: 'Keshia is your go-to for all things, movement and recovery, with nearly 9 years of clinical know-how and a passion for helping people feel strong and capable again. Whether she’s easing post-op pain, guiding someone through a cardiac rehab journey, or helping manage long-term aches and niggles, Keshia blends hands-on therapy, education, and science-backed movement to get results. She’s big on empowering her patients, because recovery is a team sport, and she’s right there cheering you on every step of the way.',
  },
];

const AFFILIATED_PROFESSIONALS = [
  {
    name: 'Dr Lebogang Moja',
    role: 'Specialist Physician',
    location: 'Life Fourways Hospital Suite D44',
    phone: '011 875 1950',
  },
  {
    name: 'Dr Itumeleng Mogolane',
    role: 'Specialist Physician',
    location: 'Life Fourways Hospital Suite C27',
    phone: '011 875 1620',
  },
  {
    name: 'Dr Sam Kyei',
    role: 'Specialist Paediatrician',
    location: 'The Children’s Therapy Centre',
    phone: '067 379 1469',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F3EBF7] pb-28 pt-36 text-[#30133E]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="grid gap-10 border-b border-[#30133E]/15 pb-16 md:grid-cols-[1.1fr_.9fr] md:items-end md:gap-20">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.05em] md:text-7xl">
              Meet our team of expert physiotherapists
            </h1>
            <div className="copy-justified space-y-5 text-base leading-8 text-[#30133E]/75 md:text-lg">
              <p>We believe in meeting each patient where they are, physically, emotionally, and functionally. Breathing is not just a mechanical act; it’s deeply connected to how we move, feel, and heal. Our approach is holistic, hands-on, and person-centred, with a strong emphasis on early intervention, education, and empowering patients to take an active role in their recovery.</p>
              <p>We are dedicated to providing comprehensive, compassionate care. We believe in treating the whole person, not just the condition, empowering you to move better and live better through evidence-based practice.</p>
              <p>Our team brings a wealth of experience across critical care, paediatrics, respiratory, and trauma rehabilitation.</p>
            </div>
          </div>
        </FadeIn>

        <section className="mt-16">
          {PRACTITIONERS.map((person, index) => (
            <FadeIn key={person.name} delay={index * 0.08}>
              <article className="grid gap-7 border-b border-[#30133E]/15 py-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-14">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6A9A]">0{index + 1}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] md:text-4xl">{person.name}</h2>
                  <div className="mt-5 space-y-1 text-sm leading-6 text-[#30133E]/70">
                    {person.qualifications.map(item => <p key={item}>{item}</p>)}
                  </div>
                  <p className="mt-5 text-xs font-semibold leading-6 tracking-[0.08em] text-[#6B4B78]">Specialties: {person.specialties}</p>
                </div>
                <p className="copy-justified max-w-3xl text-lg leading-8 text-[#30133E]/80">{person.biography}</p>
              </article>
            </FadeIn>
          ))}
        </section>

        <section className="mt-24">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Affiliated Professionals</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {AFFILIATED_PROFESSIONALS.map((professional) => (
              <article key={professional.name} className="border-t border-[#30133E]/20 py-6">
                <h3 className="text-xl font-semibold">{professional.name}</h3>
                <p className="mt-2 text-sm text-[#6B4B78]">{professional.role}</p>
                <p className="mt-4 text-sm leading-6 text-[#30133E]/70">{professional.location}</p>
                <a href={`tel:${professional.phone.replaceAll(' ', '')}`} className="mt-3 inline-block text-sm font-semibold text-[#30133E] underline-offset-4 hover:underline">{professional.phone}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 bg-[#30133E] px-8 py-12 text-white md:px-12 md:py-16">
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
            Compassion in every breath, care in every movement
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/75">
            Our team is here to support your health, healing and well-being.
          </p>
          <a href="https://wa.me/27670721908" target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-14 items-center rounded-full bg-[#DBC1E8] px-8 py-4 text-sm font-semibold text-[#30133E] hover:bg-white">
            Contact us <span aria-hidden="true" className="ml-3">↗</span>
          </a>
        </section>
      </div>
    </div>
  );
}
