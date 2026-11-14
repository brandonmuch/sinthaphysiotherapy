import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_LINK =
  'https://wa.me/27670721908?text=Hello%20Sintha%20Physiotherapy%2C%20I%20would%20like%20to%20make%20a%20booking.';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="interior-hero">
        <div className="site-container interior-hero__inner">
          <h1>Contact us</h1>
        </div>
      </section>

      <section className="contact-details-section">
        <div className="site-container contact-details-grid">
          <div>
            <h2>Sintha Physiotherapy</h2>
            <p>
              <strong>Address</strong>
              <br />
              Life Fourways Hospital, Suite C28B
              <br />
              Corner Cedar Avenue &amp; Cedar Road, Fourways
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              <a href="tel:+27670721908">067 072 1908</a>
            </p>
            <p>All sessions are by appointment. Walk-ins are welcome, subject to availability.</p>
            <p>
              Bookings can be made via our contact form, WhatsApp or a phone call.
            </p>
          </div>

          <div>
            <h2>Hours</h2>
            <p>Monday – Sunday</p>
            <p>Closed Wednesday afternoons after 12:00</p>
            <a className="site-button" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="site-container contact-form-grid">
          <div className="contact-form">
            <h2>Contact us</h2>
            <p>
              Send us a message and our team will get back to you. For appointment requests, you
              can also contact us directly on WhatsApp or by phone.
            </p>

            <form action="mailto:info@sinthaphysiotherapy.co.za" method="post" encType="text/plain">
              <div className="contact-form__fields">
                <label>
                  First name
                  <input type="text" name="First name" autoComplete="given-name" required />
                </label>
                <label>
                  Last name
                  <input type="text" name="Last name" autoComplete="family-name" required />
                </label>
                <label className="contact-form__label--full">
                  Email
                  <input type="email" name="Email" autoComplete="email" required />
                </label>
                <label className="contact-form__label--full">
                  Message
                  <textarea name="Message" rows={6} required />
                </label>
              </div>
              <button className="site-button contact-form__submit" type="submit">
                Submit
              </button>
            </form>
          </div>

          <div className="contact-image">
            <div className="contact-image__portrait">
              <Image
                src="/images/Confident%20Portrait.jpeg"
                alt="A confident healthcare professional"
                width={720}
                height={920}
                sizes="(max-width: 760px) 52vw, 32vw"
              />
            </div>
            <div className="contact-image__reception">
              <Image
                src="/images/224639_bfef82a022b94247bd1bc81fcd55f488~mv2.jpeg"
                alt="Reception area at a healthcare practice"
                width={760}
                height={440}
                sizes="(max-width: 760px) 42vw, 28vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="blog-invite">
        <div className="site-container blog-invite__layout">
          <h2>We’re here to help you move forward.</h2>
          <Link className="site-button" href="/services">
            Explore our services
          </Link>
        </div>
      </section>
    </div>
  );
}
