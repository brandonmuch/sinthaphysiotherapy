import Image from 'next/image';
import { BlurText } from '@/components/ui/BlurText';

const PRACTITIONERS = [
  {
    name: 'Wezi Nyimba',
    qualifications: ['BSc Physiotherapy (UCT)', 'MSc Physiotherapy Candidate (Wits)'],
    specialties: 'Respiratory, Paediatrics, ICU Rehab, Geriatrics',
    biography: [
      'Meet Wezi, a powerhouse of calm in the chaos of coughs, wheezes, and tricky recoveries. With over 8 years of experience, she brings expert care to both little lungs and older chests, specialising in complex respiratory conditions like RSV, pneumonia, and asthma.',
      'From tiny tots in paediatric ICU to frail seniors needing a gentler touch, Wezi is all about restoring breath, mobility, and quality of life. Her secret? A holistic, heart-centred approach that treats the person, not just the condition.',
    ],
  },
  {
    name: 'Posheletso Kekana',
    qualifications: ['BSc Physiotherapy (UP)', 'MSc Physiotherapy Candidate (Wits)'],
    specialties: 'Trauma and Critical Care, Post Trauma Rehab, Paediatrics',
    biography: [
      'A passionate physio and movement motivator! With a degree from the University of Pretoria and 8 years of hands-on experience in trauma and critical care, for both little ones and grown-ups, Posheletso brings calm, confidence, and care to every session. She is all about personalised treatment plans that get people moving better and feeling stronger.',
      'Now, she is expanding her focus into musculoskeletal rehab, home-based care, and preventative treatments, helping people live their best lives, right where they are. She also possesses advanced skills in dry needling and kinesiology taping.',
    ],
  },
  {
    name: 'Pumelela Noah',
    qualifications: ['BSc Physiotherapy (UCT)'],
    specialties: 'Neuro Rehab, Trauma and ICU Rehab',
    biography: [
      'Where expertise meets heart. With a solid background in human anatomy, biomechanics and rehabilitation techniques, Pumelela brings clinical know-how and genuine care to every patient she treats.',
      'She works with neurological cases, trauma recovery and age-related conditions, creating personalised plans to help people return to the activities they enjoy and live life to the fullest.',
    ],
  },
  {
    name: 'Keisha May',
    qualifications: ['BSc Physiotherapy (Wits)', 'MSc Public Health Candidate (Wits)'],
    specialties: 'Orthopaedics, Cardiothoracic Rehab',
    biography: [
      'Keisha brings nearly nine years of clinical experience and a passion for helping people feel strong and capable again.',
      'From easing post-operative pain to guiding cardiac rehabilitation and supporting people with long-term aches, she blends hands-on therapy, education and science-backed movement.',
    ],
  },
];

const AFFILIATED_PROFESSIONALS = [
  {
    name: 'Dr Lebogang Moja',
    role: 'Specialist Physician',
    location: 'Life Fourways Hospital, Suite D44',
    phone: '011 875 1950',
  },
  {
    name: 'Dr Itumeleng Mogolane',
    role: 'Specialist Physician',
    location: 'Life Fourways Hospital, Suite C27',
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
    <div className="about-page">
      <section className="about-hero">
        <div className="site-container about-hero__inner">
          <h1><BlurText text="About Us" delay={70} /></h1>
          <p>Meet our team of expert physiotherapists</p>
        </div>
      </section>

      <section className="team-section">
        <div className="site-container site-container--wide">
          <div className="team-grid">
            {PRACTITIONERS.map((practitioner) => (
              <article className="team-card" key={practitioner.name}>
                <div className="team-card__copy">
                  <h2>{practitioner.name}</h2>
                  <div className="team-card__qualifications">
                    {practitioner.qualifications.map((qualification) => (
                      <div key={qualification}>{qualification}</div>
                    ))}
                  </div>
                  <p className="team-card__specialties">
                    <strong>Specialties:</strong> {practitioner.specialties}
                  </p>
                  {practitioner.biography.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="affiliated-section">
        <div className="site-container affiliated-section__layout">
          <div className="affiliated-section__heading">
            <h2>Affiliated Professionals</h2>
          </div>
          <div className="affiliated-grid">
            {AFFILIATED_PROFESSIONALS.map((professional) => (
              <article className="affiliated-card" key={professional.name}>
                <h3>{professional.name}</h3>
                <p>{professional.role}</p>
                <p>{professional.location}</p>
                <a href={`tel:${professional.phone.replaceAll(' ', '')}`}>
                  {professional.phone}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="site-container philosophy-section__layout">
          <h2>Our team philosophy</h2>
          <p>
            We believe in meeting each patient where they are, physically, emotionally, and
            functionally. Breathing is not just a mechanical act; it’s deeply connected to how we
            move, feel, and heal. Our approach is holistic, hands-on, and person-centred, with a
            strong emphasis on early intervention, education, and empowering patients to take an
            active role in their recovery.
          </p>
        </div>
      </section>

      <section className="about-life-image" aria-label="Everyday moments that matter">
        <div className="site-container">
          <Image
            src="/uploads/patient-grandfather-grandson.jpg"
            alt="A grandfather and grandson playing together on a couch"
            width={1440}
            height={960}
            sizes="(max-width: 760px) 100vw, 90vw"
          />
        </div>
      </section>
      <section className="about-closing">
        <div className="site-container">
          <h2>Compassion in every breath, care in every movement.</h2>
        </div>
      </section>
    </div>
  );
}
