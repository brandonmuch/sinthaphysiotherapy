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
      <section className="home-hero home-hero--original">
        <div className="site-container home-hero__layout">
          <div className="home-hero__copy">
            <h1>Empower Movement. Enhance Life.</h1>
            <h2>Specialised Physiotherapy for Children and Adults</h2>
            <p>Specialised Physiotherapy for Children and Adults</p>
          </div>
          <div className="home-hero__media" aria-hidden="true">
            <div className="home-hero__image-main">
              <Image
                src="/images/u2428486467_dark-skinned_Black_female_physiotherapist_wearing_129f260b-d7a4-4b95-afb1-2559.png"
                alt=""
                fill
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div className="site-container home-intro__layout">
          <div className="home-intro__copy">
            <h2>At Sintha Physiotherapy, we’re all about helping you feel good and move even better!</h2>
            <p>
              We take a holistic, whole-person approach to your health, healing, and well-being.
              While we’re known for our expert care in respiratory physiotherapy, our services go
              way beyond just helping you breathe easier. Whether you’re bouncing back after
              surgery, navigating life after a stroke, caring for a little one with health
              challenges, or adjusting to the natural changes that come with age, we’re here for you.
            </p>
            <p>
              From neurological to vestibular conditions, or simply feeling a bit weaker than
              usual, our experienced team is ready to support and empower you every step of the
              way. With tailored physiotherapy plans designed just for you, we’ll help you move
              with more confidence, breathe with ease and get back to doing the things you love.
            </p>
            <Link className="site-button" href="/about">
              Who we are
            </Link>
          </div>

          <div className="intro-collage" aria-label="Physiotherapy care for children and adults">
            <div className="intro-collage__large">
              <Image
                src="/uploads/patient-elderly-recovery.jpg"
                alt="A healthcare professional standing behind an elderly woman"
                fill
                sizes="(max-width: 760px) 90vw, 34vw"
              />
            </div>
            <div className="intro-collage__small">
              <Image
                src="/uploads/patient-paediatric-parent.jpg"
                alt="A woman holding a baby while talking to a healthcare professional"
                fill
                sizes="(max-width: 760px) 45vw, 17vw"
              />
            </div>
            <div className="intro-collage__small">
              <Image
                src="/uploads/portrait-woman-a.jpg"
                alt="A smiling woman"
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
            <h2>Let’s get you living life to the fullest — one step, stretch, and breath at a time.</h2>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="site-container">
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
              <h2>Quick service snapshot</h2>
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
          <div className="home-services__grid">
            {HOME_SERVICES.map((service) => (
              <article className="home-service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="site-container home-cta__layout">
          <div>
            <h2>Breathe easier. Move stronger. Heal fully.</h2>
          </div>
          <a className="site-button" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Contact us today
          </a>
        </div>
      </section>

      <section className="faq-section">
        <div className="site-container faq-section__layout">
          <div>
            <h2>Frequently asked questions</h2>
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
