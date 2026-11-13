const WHATSAPP_LINK = 'https://wa.me/27670721908?text=Hello%20Sintha%20Physiotherapy%2C%20I%20would%20like%20to%20make%20a%20booking.';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F3EBF7] px-6 pb-24 pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.08em] text-[#6B4B78]">Appointments & enquiries</p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-[#30133E] md:text-7xl">
            Let’s get you moving.
          </h1>
          <p className="copy-justified mt-7 max-w-2xl text-lg leading-8 text-[#30133E]/75">
            Tell us what support you need and our team will help you take the next step. All sessions are by appointment.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <section className="rounded-[1.75rem] bg-[#30133E] p-8 text-white md:p-10">
            <p className="text-xs font-semibold tracking-[0.08em] text-[#DBC1E8]">Fastest way to book</p>
            <h2 className="mt-5 text-3xl font-semibold">Message us on WhatsApp.</h2>
            <p className="copy-justified mt-4 leading-7 text-white/75">Send a message with a little about the type of physiotherapy support you are looking for.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-14 items-center rounded-full bg-[#DBC1E8] px-7 py-4 text-sm font-semibold text-[#30133E] transition hover:bg-white">
              Start a WhatsApp chat <span aria-hidden="true" className="ml-3 text-lg">↗</span>
            </a>
          </section>

          <section className="rounded-[1.75rem] bg-white p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6A9A]">Prefer to call?</p>
            <h2 className="mt-5 text-3xl font-semibold text-[#30133E]">Speak to our team.</h2>
            <p className="copy-justified mt-4 leading-7 text-[#30133E]/70">Call us directly to enquire about availability or the right service for your needs.</p>
            <a href="tel:+27670721908" className="mt-8 inline-flex min-h-14 items-center rounded-full border border-[#30133E]/20 px-7 py-4 text-sm font-semibold text-[#30133E] transition hover:border-[#30133E] hover:bg-[#F3EBF7]">
              067 072 1908
            </a>
            <a href="mailto:info@sinthaphysiotherapy.co.za" className="mt-5 block text-sm font-medium text-[#6B4B78] underline-offset-4 hover:underline">
              info@sinthaphysiotherapy.co.za
            </a>
          </section>
        </div>

        <section className="mt-10 rounded-[1.75rem] border border-[#30133E]/10 bg-white/70 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-[#30133E]">Find us</h2>
              <p className="mt-3 leading-7 text-[#30133E]/70">
                Life Fourways Hospital, Suite C28B<br />
                Corner Cedar Avenue and Cedar Road<br />
                Fourways, Johannesburg, 2055
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Life+Fourways+Hospital+Suite+C28B+Fourways+Johannesburg"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-[#6B4B78] underline-offset-4 hover:underline"
              >
                Get directions ↗
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#30133E]">Hours</h2>
              <p className="mt-3 leading-7 text-[#30133E]/70">Monday to Sunday<br />Closed Wednesday afternoons after 12:00</p>
              <p className="mt-3 text-sm text-[#30133E]/55">Walk-ins are subject to availability. Contact us to arrange an appointment.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
