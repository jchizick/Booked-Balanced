export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream/80 relative overflow-hidden" aria-label="Site footer">
      {/* Subtle top edge gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(156,174,169,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-14">

          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="font-serif font-normal text-2xl tracking-tight text-white mb-4">
              Booked &amp; Balanced
            </div>
            <p className="max-w-sm text-cream/55 leading-relaxed text-[15px] mb-6">
              Fully managed digital infrastructure for established massage therapists. We handle the tech so you can focus on the client.
            </p>
            <a
              href="mailto:hello@bookedandbalanced.com"
              className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-sage-300 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-sage-400 rounded"
            >
              hello@bookedandbalanced.com
            </a>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-3" role="list">
              {['Infrastructure Setup', 'Website Management', 'Booking Integration', 'SEO Foundations'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="cursor-pointer text-[15px] text-cream/55 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-sage-400 rounded"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-3" role="list">
              {[
                { label: 'About Us', href: '#' },
                { label: 'Contact', href: '#contact' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="cursor-pointer text-[15px] text-cream/55 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-sage-400 rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/35">
          <p>© {year} Booked &amp; Balanced. All rights reserved.</p>
          <p>Designed for operational clarity.</p>
        </div>
      </div>
    </footer>
  );
}
