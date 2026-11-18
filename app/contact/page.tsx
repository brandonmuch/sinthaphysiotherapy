import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-details-section">
        <div className="site-container contact-details-grid">
          <div className="contact-details-spacer" aria-hidden="true" />
          <div className="contact-info-card">
            <h1>Sintha Physiotherapy</h1>
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
            <p>Bookings via our contact form, WhatsApp, or phone call to schedule.</p>
            <div className="contact-info-card__hours">
              <strong>Hours</strong>
              <span>Monday – Sunday</span>
              <span>Closed Wednesday afternoons after 12:00</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="site-container contact-form-grid">
          <form
            className="contact-form"
            action="mailto:info@sinthaphysiotherapy.co.za"
            method="post"
            encType="text/plain"
          >
            <h2>Contact us</h2>
            <div className="contact-form__fields">
              <label>
                <span>First name</span>
                <input type="text" name="First name" placeholder="First name" autoComplete="given-name" required />
              </label>
              <label>
                <span>Last name</span>
                <input type="text" name="Last name" placeholder="Last name" autoComplete="family-name" required />
              </label>
              <label className="contact-form__label--full">
                <span>Email *</span>
                <input type="email" name="Email" placeholder="Email" autoComplete="email" required />
              </label>
              <label className="contact-form__label--full">
                <span>Message *</span>
                <textarea name="Message" placeholder="Message" rows={5} required />
              </label>
            </div>
            <button className="site-button contact-form__submit" type="submit">
              Submit
            </button>
          </form>

          <div className="contact-image">
            <div className="contact-image__portrait">
              <Image
                src="/images/Confident%20Portrait.jpeg"
                alt="A confident healthcare professional"
                width={720}
                height={920}
                sizes="(max-width: 760px) 85vw, 36vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-location-band" aria-label="Sintha Physiotherapy reception">
        <Image
          src="/images/224639_bfef82a022b94247bd1bc81fcd55f488~mv2.jpeg"
          alt="Reception area"
          width={1920}
          height={760}
          sizes="100vw"
        />
      </section>
    </div>
  );
}
