export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="display text-4xl md:text-5xl">Sintha Physiotherapy</p>
            <p className="mt-4 max-w-sm text-sm text-cream/60">
              HPCSA-registered specialised physiotherapy for children and adults,
              delivered from Fourways and in the comfort of your home.
            </p>
          </div>
          <div>
            <p className="section-label">Visit</p>
            <p className="mt-4 text-sm text-cream/80 leading-relaxed">
              Life Fourways Hospital<br />
              Cnr Cedar Road &amp; Cedar Avenue West<br />
              Fourways, Johannesburg, 2191
            </p>
          </div>
          <div>
            <p className="section-label">Contact</p>
            <p className="mt-4 text-sm text-cream/80 leading-relaxed">
              hello@sintha.co.za<br />
              +27 (0) 10 000 0000<br />
              Mon–Sat, by appointment
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sintha Physiotherapy. All rights reserved.</p>
          <p>Site by Brandon Muchenje</p>
        </div>
      </div>
    </footer>
  );
}