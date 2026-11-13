import Image from 'next/image';
import SpecularButton from '@/components/ui/SpecularButton';
import SinthaCard from '@/components/ui/SinthaCard';

const WHATSAPP_LINK =
  'https://wa.me/27670721908?text=Hello%20Sintha%20Physiotherapy%2C%20I%20would%20like%20to%20make%20a%20booking.';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white px-6 pb-24 pt-32 text-[#29262D] md:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#30133E] md:text-7xl">
              Let’s get you moving.
            </h1>
            <p className="copy-justified mt-7 max-w-xl text-base leading-8 text-[#29262D]/85 md:text-lg">
              Tell us what support you need and our team will help you take the next step. All sessions are by appointment.
            </p>
            <p className="mt-6 max-w-xl rounded-2xl border border-[#6B4B78]/25 bg-[#F3EBF7] px-5 py-4 text-sm leading-6 text-[#29262D]">
              Contact us on WhatsApp or phone to enquire about an appointment. Our team will speak with you directly, discuss your needs and explain the next steps, including any consent forms to complete before treatment.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <SpecularButton
                size="md"
                radius={999}
                tint="#DBC1E8"
                tintOpacity={0.16}
                textColor="#FFFFFF"
                lineColor="#DBC1E8"
                baseColor="#30133E"
                intensity={0.82}
                idleIntensity={0.18}
                shineSize={10}
                shineFade={34}
                thickness={1.1}
                glow={0.34}
                followMouse
                proximity={180}
                href={WHATSAPP_LINK}
                external
              >
                WhatsApp us <span aria-hidden="true">↗</span>
              </SpecularButton>
              <SpecularButton
                size="md"
                radius={999}
                tint="#DBC1E8"
                tintOpacity={0.12}
                textColor="#FFFFFF"
                lineColor="#DBC1E8"
                baseColor="#30133E"
                intensity={0.72}
                idleIntensity={0.14}
                shineSize={10}
                shineFade={34}
                thickness={1.1}
                glow={0.22}
                followMouse
                proximity={160}
                href="tel:+27670721908"
              >
                Call 067 072 1908
              </SpecularButton>
            </div>
          </div>

          <SinthaCard className="mx-auto w-full max-w-[480px]" backgroundColor="#F3EBF7" borderRadius={28}>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[28px] bg-[#F3EBF7]">
            <Image
              src="/uploads/patient-elderly-recovery.jpg"
              alt="A physiotherapist supporting an older patient during respiratory care"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-[#30133E]/95 p-5 text-white shadow-lg backdrop-blur-md">
              <p className="text-xs font-semibold tracking-[0.1em] text-white">Sintha Physiotherapy</p>
              <p className="mt-2 text-lg font-semibold leading-snug text-white">
                Personalised care for children and adults.
              </p>
            </div>
            </div>
          </SinthaCard>
        </section>

        <section className="mt-16 grid gap-5 md:grid-cols-2">
          <SinthaCard className="h-full" backgroundColor="#F3EBF7">
            <article className="contact-card h-full rounded-[26px] border border-[#30133E]/10 bg-[#F3EBF7] p-8 md:p-10">
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#30133E]">Message us on WhatsApp.</h2>
            <p className="copy-justified mt-4 max-w-lg text-base leading-7 text-[#29262D]/80">
              Send a message with a little about the type of physiotherapy support you are looking for.
            </p>
            <SpecularButton
              className="mt-8"
              size="md"
              radius={999}
              tint="#DBC1E8"
              tintOpacity={0.14}
              textColor="#FFFFFF"
              lineColor="#DBC1E8"
              baseColor="#30133E"
              intensity={0.8}
              idleIntensity={0.16}
              shineSize={10}
              shineFade={34}
              thickness={1.1}
              glow={0.28}
              followMouse
              href={WHATSAPP_LINK}
              external
            >
              Start a WhatsApp chat <span aria-hidden="true">↗</span>
            </SpecularButton>
            </article>
          </SinthaCard>

          <SinthaCard className="h-full" backgroundColor="#F3EBF7">
            <article className="contact-card rounded-[26px] border border-[#30133E]/10 bg-[#F3EBF7] p-8 shadow-[0_16px_44px_-38px_rgba(48,19,62,0.55)] md:p-10">
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#30133E]">Speak to our team.</h2>
            <p className="copy-justified mt-4 max-w-lg text-base leading-7 text-[#29262D]/80">
              Call us directly to enquire about availability or the right service for your needs.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <a href="tel:+27670721908" className="text-lg font-semibold text-[#30133E] underline decoration-[#8B6A9A]/50 underline-offset-4 hover:text-[#6B4B78]">
                067 072 1908
              </a>
              <a href="mailto:info@sinthaphysiotherapy.co.za" className="text-sm font-medium text-[#6B4B78] underline decoration-[#8B6A9A]/40 underline-offset-4 hover:text-[#30133E]">
                info@sinthaphysiotherapy.co.za
              </a>
            </div>
            </article>
          </SinthaCard>
        </section>

        <section className="mt-16 grid items-stretch gap-7 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            <SinthaCard className="h-full" backgroundColor="#FFFFFF" borderRadius={26}>
              <article className="h-full rounded-[26px] border border-[#30133E]/10 bg-white p-7 md:p-8">
              <h2 className="text-2xl font-semibold text-[#30133E]">Find us.</h2>
              <p className="mt-4 text-sm leading-7 text-[#29262D]/85">
                Life Fourways Hospital, Suite C28B<br />
                Corner Cedar Avenue and Cedar Road<br />
                Fourways, Johannesburg, 2055
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Life+Fourways+Hospital+Suite+C28B+Fourways+Johannesburg"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-semibold text-[#30133E] underline decoration-[#8B6A9A]/50 underline-offset-4 hover:text-[#6B4B78]"
              >
                Get directions ↗
              </a>
              </article>
            </SinthaCard>

            <SinthaCard className="h-full" backgroundColor="#F8F4FA" borderRadius={26}>
              <article className="h-full rounded-[26px] border border-[#30133E]/10 bg-[#F8F4FA] p-7 md:p-8">
              <h2 className="mt-4 text-2xl font-semibold text-[#30133E]">Hours.</h2>
              <p className="mt-4 text-sm leading-7 text-[#29262D]/85">
                Monday to Sunday<br />
                Closed Wednesday afternoons after 12:00
              </p>
              <p className="mt-4 text-xs leading-6 text-[#29262D]/65">
                Walk-ins are subject to availability. Contact us to arrange an appointment.
              </p>
              </article>
            </SinthaCard>
          </div>

          <SinthaCard className="min-h-[320px]" backgroundColor="#F3EBF7" borderRadius={26}>
            <div className="relative min-h-[320px] overflow-hidden rounded-[26px] bg-[#F3EBF7]">
            <Image
              src="/images/224639_bfef82a022b94247bd1bc81fcd55f488~mv2.jpeg"
              alt="A calm, welcoming reception area"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[center_50%]"
            />
            </div>
          </SinthaCard>
        </section>

        <section className="mt-16 rounded-[28px] bg-[#30133E] px-8 py-12 text-center md:px-12 md:py-16">
          <blockquote className="mx-auto max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-5xl">
            “Compassion in every breath, care in every movement.”
          </blockquote>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white">
            We’re here to help you take the next step towards feeling stronger and moving with confidence.
          </p>
          <div className="mt-8">
            <SpecularButton
              size="md"
              radius={999}
              tint="#DBC1E8"
              tintOpacity={0.15}
              textColor="#FFFFFF"
              lineColor="#DBC1E8"
              baseColor="#3D2548"
              intensity={0.82}
              idleIntensity={0.18}
              shineSize={10}
              shineFade={34}
              thickness={1.1}
              glow={0.34}
              followMouse
              href={WHATSAPP_LINK}
              external
            >
              Book an assessment <span aria-hidden="true">↗</span>
            </SpecularButton>
          </div>
        </section>
      </div>
    </div>
  );
}
