import Image from 'next/image';
import { BlurText } from '@/components/ui/BlurText';

const WHATSAPP_LINK =
  'https://wa.me/27670721908?text=Hello%20Sintha%20Physiotherapy%2C%20I%20would%20like%20to%20ask%20about%20a%20physiotherapy%20service.';

const SERVICES = [
  {
    title: 'Advanced respiratory care (ventilated patients)',
    image: '/uploads/patient-elderly-recovery.jpg',
    alt: 'A physiotherapist supporting an older patient in hospital',
    paragraphs: [
      'This service is focused on patients who require or have recently been on mechanical ventilation.',
      'Physiotherapists use airway clearance techniques to remove secretions from the lungs, improve lung expansion using breathing exercises or devices, and help wean patients off ventilators safely by gradually reintroducing active breathing efforts. These interventions help prevent secondary infections, reduce lung collapse, and speed up recovery while supporting better oxygen exchange.',
    ],
  },
  {
    title: 'Reintroduction of active breathing for ventilator weaning',
    image: '/images/u2428486467_Conscious_Coloured_South_African_teenage_patient__5d6fac94-26cb-4951-8920-9984.jpeg',
    alt: 'A patient resting during respiratory treatment',
    paragraphs: [
      'This specialised physiotherapy service focuses on safely and gradually reintroducing active breathing in patients who are preparing to come off mechanical ventilation. Through guided respiratory exercises, positioning techniques, and airway clearance strategies, we work to strengthen the respiratory muscles, improve lung function, and support independent breathing.',
    ],
  },
  {
    title: 'Cardiac & cardiovascular rehabilitation',
    image: '/uploads/portrait-man-a.jpg',
    alt: 'A patient preparing for a rehabilitation session',
    paragraphs: [
      'After a heart attack, surgery, or cardiovascular event, early movement is vital. Cardiac rehab includes gentle exercises to strengthen the heart, monitored activity programmes, and breathing techniques.',
      'This type of therapy lowers the risk of complications, promotes circulation, and gradually rebuilds the patient’s endurance. Education and support for long-term heart health are also included.',
    ],
  },
  {
    title: 'Paediatric respiratory support',
    image: '/uploads/patient-child-breathing.jpg',
    alt: 'A child using a colourful breathing device during physiotherapy',
    paragraphs: [
      'Children with conditions like asthma, cystic fibrosis, or post-surgical complications benefit from gentle but effective airway clearance and breathing retraining.',
      'Therapy is child-friendly, often involving play-based activities, and aims to keep lungs clear, improve breathing patterns, and reduce hospital stays.',
    ],
  },
  {
    title: 'Home visits',
    image: '/uploads/physio-home-visit.jpg',
    alt: 'A physiotherapist assisting a patient at home',
    paragraphs: [
      'Some patients require continued support at home due to mobility challenges, chronic illness, or post-hospital care. Home visits provide personalised physiotherapy in a familiar setting, ensuring consistency in rehab.',
      'Therapists bring the necessary equipment and tailor treatment to promote independence and confidence.',
    ],
  },
  {
    title: 'Neurological & vestibular rehabilitation',
    image: '/uploads/patient-balance-exercise.jpg',
    alt: 'A patient working through a guided balance exercise',
    paragraphs: [
      'For patients who’ve had strokes, brain injuries, or balance disorders, this therapy focuses on restoring movement and coordination.',
      'Gait training helps people walk again, while balance therapy reduces fall risk. Vestibular rehab helps with dizziness or vertigo, and neuromuscular techniques support nerve recovery and functional independence.',
    ],
  },
  {
    title: 'Renal & metabolic care',
    image:
      '/images/u2428486467_realistic_image_of_a_plus-size_dark-skinned_India_3fb3a474-4aaf-4b02-bf3d-294e.jpeg',
    alt: 'A patient receiving support during a physiotherapy session',
    paragraphs: [
      'For patients with kidney failure, diabetes, or complex metabolic disorders, physiotherapy can relieve fatigue, manage fluid retention, and improve strength.',
      'These individuals often struggle with reduced mobility, so therapy focuses on light movement, improving energy levels, and preventing complications like pressure sores or muscle wasting.',
    ],
  },
  {
    title: 'Postoperative recovery (all surgeries)',
    image: '/uploads/patient-walking-clinic.jpg',
    alt: 'A patient walking in a physiotherapy clinic',
    paragraphs: [
      'After surgery, early mobilisation and targeted physiotherapy reduce complications like blood clots, pneumonia, and prolonged immobility.',
      'Therapy improves circulation, rebuilds strength, and supports a quicker and safer return to daily activities. Recovery plans are tailored to the type of surgery and the patient’s specific needs.',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="site-container services-hero__inner">
          <h1><BlurText text="Our Services" delay={70} /></h1>
          <p>Physiotherapy that moves you forward.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="site-container site-container--wide">
          <div className="service-grid">
            {SERVICES.map((service) => (
              <article className="service-pair" key={service.title}>
                <div className="service-pair__image">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={720}
                    height={960}
                    sizes="(max-width: 760px) 42vw, 24vw"
                  />
                </div>
                <div className="service-pair__content">
                  <h2>{service.title}</h2>
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <a
                    className="service-card__link"
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ask a Physio
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-closing">
        <div className="site-container services-closing__layout">
          <h2>Where recovery begins with a breath and ends in strength.</h2>
        </div>
      </section>
    </div>
  );
}
