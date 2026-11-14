import Image from 'next/image';
import Link from 'next/link';

const PILLARS = [
  {
    number: '1',
    title: 'Comprehensive rehabilitation',
    description:
      'From bouncing back after surgery to navigating life post-stroke or managing neurological conditions, we’re with you every step of the way. Our personalised rehab plans are built to ease pain, restore movement and boost strength, so you can feel confident in your body again.',
    image:
      '/images/u2428486467_Close-up_of_physiotherapy_tools_on_a_mat_or_woode_4cdd9653-899b-4c2e-8f1d-45ca.jpeg',
    alt: 'Physiotherapy tools arranged on an exercise mat',
  },
  {
    number: '2',
    title: 'Specialised respiratory support',
    description:
      'Struggling to catch your breath? With evidence-based respiratory physiotherapy, we help you breathe easier, manage chronic lung conditions and recover from post-operative or acute respiratory issues, one deep breath at a time.',
    image:
      '/images/u2428486467_Young_Coloured_South_African_woman_seated_calmly__1b852e40-efdd-48c9-9676-4899.jpeg',
    alt: 'A woman seated calmly in a quiet setting',
  },
  {
    number: '3',
    title: 'Holistic wellness',
    description:
      'Physiotherapy isn’t just for when things go wrong. It’s also about helping life go right. Whether you’re managing the natural effects of ageing or bouncing back from general weakness, we’re here to help you move well, stay strong and enjoy a better quality of life.',
    image:
      '/images/u2428486467_Middle-aged_Black_South_African_man_in_everyday_a_e9d82078-f7f4-4b7b-8b07-6d8b.jpeg',
    alt: 'A middle-aged man in a physiotherapy setting',
  },
];

const HOME_SERVICES = [
  {
    title: 'Inpatient & outpatient physiotherapy',
    description:
      'Personalised rehab plans for both hospital-based and outpatient clients, helping you recover from a wide range of physical conditions with expert, hands-on support.',
  },
  {
    title: 'Paediatric physiotherapy & respiratory care',
    description:
      'Gentle, child-centred therapy focused on respiratory support because little lungs and growing bodies deserve specialised care.',
  },
  {
    title: 'ICU & post-hospital rehabilitation',
    description:
      'Recovering after a critical illness? We’re here to help. From breathing support to rebuilding strength, we guide your journey back to independence.',
  },
  {
    title: 'Postoperative recovery',
    description:
      'Heal stronger and safer. Our targeted physiotherapy helps reduce complications, ease pain and restore mobility after surgery, getting you back on your feet.',
  },
  {
    title: 'Neurological & vestibular rehabilitation',
    description:
      'Support for stroke, Parkinson’s, balance issues and more. Our customised rehab plans help retrain your brain and body to move with greater control and confidence.',
  },
  {
    title: 'Chronic illness & frailty management',
    description:
      'Gentle, goal-based therapy for those living with long-term conditions or age-related challenges, helping you stay strong, steady and independent.',
  },
  {
    title: 'Home visits',
    description:
      'Can’t come to us? We’ll come to you. Enjoy expert physiotherapy in the comfort of your home, perfect for ongoing care or mobility challenges.',
  },
];

const SNAPSHOT = [
  'Inpatient & outpatient care',
  'Paediatric respiratory therapy',
  'ICU and post-ICU rehabilitation',
  'Postoperative recovery',
  'Home visits',
];

const FAQS = [
  {
    question: 'Do I need a referral to see a physiotherapist?',
    answer:
      'No referral is needed. Physiotherapists are first-line practitioners. You can book directly, or we also accept referrals from GPs and specialists.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'It depends on your condition. A tailored plan will be created after your assessment.',
  },
  {
    question: 'Do you charge medical aid rates?',
    answer:
      'Yes. For in-hospital treatment, we bill your medical aid directly. For in-room treatment, payment is made by EFT or cash and you can claim back with our statement.',
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can book via WhatsApp, phone call or our online booking form.',
  },
];

const WHATSAPP_LINK =
  'https://wa.me/27670721908?text=Hello%20Sintha%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20assessment.';

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="site-container home-hero__layout">
          <div className="home-hero__copy">
            <p className="section-kicker">Sintha Physiotherapy</p>
            <h1>Empower movement. Enhance life.</h1>
            <h2>Specialised physiotherapy for children and adults</h2>
            <p>
              At Sintha Physiotherapy, we’re all about helping you feel good and move even better.
              We take a holistic, whole-person approach to your health, healing and well-being.
            </p>
            <div className="home-hero__actions">
              <a className="site-button" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Book an Assessment
              </a>
              <Link className="site-button site-button--outline" href="/services">
                View our services
              </Link>
            </div>
          </div>

          <div className="home-hero__media" aria-label="Sintha Physiotherapy team and patient care">
            <div className="home-hero__image-main">
              <Image
                src="/images/u2428486467_dark-skinned_Black_female_physiotherapist_wearing_129f260b-d7a4-4b95-afb1-2559.png"
                alt="A physiotherapist ready to support a patient"
                fill
                priority
                sizes="(max-width: 760px) 78vw, 38vw"
              />
            </div>
            <div className="home-hero__image-small">
              <Image
                src="/uploads/patient-child-breathing.jpg"
                alt="A child using a breathing device during physiotherapy"
                fill
                sizes="(max-width: 760px) 46vw, 18vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div className="site-container home-intro__layout">
          <div className="home-intro__copy">
            <p className="section-kicker">Care for the whole person</p>
            <h2>Specialised care that looks beyond the condition</h2>
            <p>
              While we’re known for our expert care in respiratory physiotherapy, our services go
              way beyond helping you breathe easier. Whether you’re bouncing back after surgery,
              navigating life after a stroke, caring for a little one with health challenges or
              adjusting to the natural changes that come with age, we’re here for you.
            </p>
            <p>
              From neurological to vestibular conditions, or simply feeling a bit weaker than
              usual, our experienced team is ready to support and empower you every step of the
              way. With tailored physiotherapy plans designed just for you, we’ll help you move
              with more confidence, breathe with ease and get back to doing the things you love.
            </p>
          </div>

          <div className="intro-collage" aria-label="Physiotherapy care for children and adults">
            <div className="intro-collage__large">
              <Image
                src="/uploads/patient-paediatric-parent.jpg"
                alt="A parent and child meeting with a healthcare professional"
                fill
                sizes="(max-width: 760px) 90vw, 34vw"
              />
            </div>
            <div className="intro-collage__small">
              <Image
                src="/uploads/patient-elderly-recovery.jpg"
                alt="A physiotherapist supporting an older patient"
                fill
                sizes="(max-width: 760px) 45vw, 17vw"
              />
            </div>
            <div className="intro-collage__small">
              <Image
                src="/uploads/patient-grandfather-grandson.jpg"
                alt="A grandfather and grandson spending time together"
                fill
                sizes="(max-width: 760px) 45vw, 17vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="who-section">
        <div className="site-container who-section__layout">
          <div className="who-section__copy">
            <p className="section-kicker" style={{ color: '#30133F' }}>
              Who we are
            </p>
            <h2>Let’s get you living life to the fullest — one step, stretch, and breath at a time.</h2>
            <Link className="site-button site-button--light" href="/about">
              Who we are
            </Link>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="site-container">
          <div className="pillars-section__heading">
            <p className="section-kicker">Our approach</p>
            <h2>Physiotherapy for everyday life</h2>
            <p>
              Let’s get you living life to the fullest, with care that supports movement, breathing
              and well-being.
            </p>
          </div>
          <div className="pillar-grid">
            {PILLARS.map((pillar) => (
              <article className="pillar-card" key={pillar.number}>
                <div className="pillar-card__image">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    width={720}
                    height={500}
                    sizes="(max-width: 760px) 90vw, 30vw"
                  />
                </div>
                <div className="pillar-card__copy">
                  <h3>
                    {pillar.number}. {pillar.title}
                  </h3>
                  <p>{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="snapshot-section">
        <div className="site-container">
          <div className="snapshot-section__top">
            <div>
              <p className="section-kicker">Quick service snapshot</p>
              <h2>Support through every stage of recovery</h2>
            </div>
            <Link className="site-button site-button--outline" href="/services">
              View our services today
            </Link>
          </div>
          <ul className="snapshot-list">
            {SNAPSHOT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-services">
        <div className="site-container">
          <div className="home-services__heading">
            <p className="section-kicker">How we can help</p>
            <h2>Physiotherapy tailored to your needs</h2>
          </div>
          <div className="home-services__grid">
            {HOME_SERVICES.map((service) => (
              <article className="home-service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 34 }}>
            <Link className="site-button" href="/services">
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="site-container home-cta__layout">
          <div>
            <p className="section-kicker" style={{ color: '#DBC1E8' }}>
              Personalised physiotherapy
            </p>
            <h2>Breathe easier. Move stronger. Heal fully.</h2>
            <p>
              Our team is here to support your recovery with hands-on care and a plan shaped around
              you.
            </p>
          </div>
          <a className="site-button site-button--light" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Contact us today
          </a>
        </div>
      </section>

      <section className="faq-section">
        <div className="site-container faq-section__layout">
          <div>
            <p className="section-kicker">Questions and answers</p>
            <h2>Frequently asked questions</h2>
            <p className="section-intro">
              A few helpful details before your first appointment.
            </p>
          </div>
          <div className="faq-list">
            {FAQS.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-invite">
        <div className="site-container blog-invite__layout">
          <div>
            <p className="section-kicker">Sintha Physiotherapy</p>
            <h2>Your recovery, your pace, our care.</h2>
          </div>
          <Link className="site-button" href="/blog">
            View our blog
          </Link>
        </div>
      </section>
    </div>
  );
}
