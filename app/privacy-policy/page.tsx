import Link from 'next/link';

export const metadata = {
  title: 'Privacy policy | Sintha Physiotherapy',
  description: 'How Sintha Physiotherapy handles information connected with this website and direct enquiries.',
};

export default function PrivacyPolicyPage() {
  return (
    <article className="min-h-screen bg-white px-6 pb-24 pt-32 text-[#29262D] md:px-10 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center text-sm font-semibold text-[#6B4B78] underline underline-offset-4 hover:text-[#30133E]">
          Back to home
        </Link>
        <header className="mt-9">
          <h1 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#30133E] sm:text-5xl md:text-6xl">
            Privacy policy
          </h1>
          <p className="mt-5 text-sm leading-7 text-[#6B4B78]">
            Last updated: 14 November 2026
          </p>
          <p className="mt-6 text-base leading-8 text-[#45404A]">
            This notice explains how Wezi Nyimba Physiotherapists Inc. approaches personal information connected with the Sintha Physiotherapy website. It is written for this informational website and should be read alongside any privacy information the practice provides when you contact it or receive care.
          </p>
        </header>

        <div className="privacy-policy-copy mt-10">
          <section>
            <h2>Who is responsible for your information?</h2>
            <p>
              The responsible practice is Wezi Nyimba Physiotherapists Inc., trading as Sintha Physiotherapy. You can contact the practice at info@sinthaphysiotherapy.co.za or on 067 072 1908.
            </p>
          </section>

          <section>
            <h2>What this website does</h2>
            <p>
              This website provides information about the practice, its services and ways to get in touch. It does not provide an online patient portal, online appointment booking form or online payment facility. The website does not ask visitors to enter medical histories, diagnoses or treatment records.
            </p>
            <p>
              Please do not send detailed medical information about yourself or another person through a general website enquiry. Contact the practice directly to discuss the appropriate way to share information needed for an appointment or care.
            </p>
          </section>

          <section>
            <h2>Information that may be processed</h2>
            <p>
              If you choose to contact the practice by telephone, email or WhatsApp, the practice will receive the contact details and message information you choose to provide. Information shared through those channels is handled as part of the practice’s direct communication with you and is not collected by an online booking system on this website.
            </p>
            <p>
              When you visit a website, its hosting and security services may process technical connection information, such as an IP address, browser or device details, and the pages or resources requested. This can be used to deliver, maintain and protect the website.
            </p>
          </section>

          <section>
            <h2>Why information is used</h2>
            <p>
              Information may be used to respond to an enquiry you initiate, provide information you request, maintain the website, and help protect it against misuse or technical threats. Information shared directly with the practice in connection with assessment or treatment is handled separately from this website in the context of the practice’s professional services.
            </p>
          </section>

          <section>
            <h2>Links to other services</h2>
            <p>
              Links on this website may open services operated by other organisations, including WhatsApp and Google Maps. When you follow an external link, that service’s own privacy information and terms apply. The practice does not control how an external service handles information you provide to it.
            </p>
          </section>

          <section>
            <h2>Retention and safeguards</h2>
            <p>
              Information should be kept only for as long as it is needed for the purpose for which it was collected, or as required by applicable professional or legal obligations. The safeguards and retention arrangements of external communications and hosting providers may also apply.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              The Protection of Personal Information Act (POPIA) gives people rights in relation to their personal information, subject to the Act’s conditions and limitations. These may include asking whether information is held, requesting access or correction, and raising an objection or complaint where the law allows.
            </p>
            <p>
              For a privacy-related request, contact the practice using the details above and ask for your request to be directed to the person responsible for information protection. You may also contact the Information Regulator of South Africa.
            </p>
          </section>

          <section id="cookies">
            <h2>Cookies and browser storage</h2>
            <p>
              The website does not currently have analytics or advertising cookies enabled. The cookie-preference panel stores your choice in this browser’s local storage so that the panel does not need to appear on every visit. This preference is browser storage rather than an analytics or advertising cookie.
            </p>
            <p>
              Hosting or security services may use strictly necessary technical technologies to deliver or protect the website. If optional analytics or advertising tools are introduced, they should remain disabled unless you choose to allow them. You can reopen the preference panel using the Cookie settings control at the bottom of the website.
            </p>
          </section>

          <section>
            <h2>Changes to this notice</h2>
            <p>
              This notice may be updated when the website or the way it is used changes. The date at the top of the page indicates when it was last updated.
            </p>
          </section>
        </div>

        <div className="mt-12 rounded-2xl bg-[#F3EBF7] p-6 sm:p-8">
          <p className="text-sm leading-7 text-[#45404A]">
            Questions about this notice can be sent to info@sinthaphysiotherapy.co.za or raised by telephone on 067 072 1908.
          </p>
        </div>
      </div>
    </article>
  );
}
