import Image from 'next/image';
import { BlurText } from '@/components/ui/BlurText';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-details-section">
        <div className="site-container contact-details-grid">
          <div className="contact-map">
            <iframe
              title="Map to Sintha Physiotherapy at Life Fourways Hospital"
              src="https://maps.google.com/maps?q=Life%20Fourways%20Hospital%20Suite%20C28B%20Fourways%20Johannesburg%20South%20Africa&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="contact-map__link"
              href="https://www.google.com/maps/search/?api=1&query=Life+Fourways+Hospital+Suite+C28B+Fourways+Johannesburg+South+Africa"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-info-card">
            <h1><BlurText text="Sintha Physiotherapy" delay={65} /></h1>
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
            <h2><BlurText text="Contact us" delay={65} /></h2>
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
