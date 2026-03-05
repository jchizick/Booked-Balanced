import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="contact" className="py-32 px-6 md:px-8 relative overflow-hidden" aria-label="Contact call to action">
      {/* Subtle sage tinted background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-sage-500/8 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[820px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.65 }}
        >
          <div className="soft-card soft-shadow-lg p-10 md:p-16 text-center border-sage-300/30 relative overflow-hidden">
            {/* Inner ambient glow */}
            <div
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top, rgba(124,137,115,0.1) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sage-500/12 border border-sage-400/20 mb-7 relative z-10">
              <Phone size={22} className="text-sage-600" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-5 leading-tight relative z-10">
              Let's Put Your Practice
              <br />
              <span className="italic text-sage-700">On Solid Structure.</span>
            </h2>
            <p className="text-lg md:text-xl text-charcoal-light mb-10 leading-relaxed max-w-[520px] mx-auto relative z-10">
              Book a free 20-minute clarity call to see if we're the right fit for your practice.
              No pressure — just a straightforward conversation about your current setup.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="mailto:hello@bookedandbalanced.com"
                className="cursor-pointer inline-flex justify-center items-center gap-2.5 bg-sage-600 text-white px-10 py-5 rounded-xl font-semibold text-base hover:bg-sage-700 transition-all duration-200 soft-shadow sage-glow focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
              >
                Book a Clarity Call <ArrowRight size={18} />
              </a>
              <a
                href="#pricing"
                className="cursor-pointer inline-flex justify-center items-center gap-2 bg-oatmeal text-charcoal px-8 py-5 rounded-xl font-semibold text-base hover:bg-oatmeal-dark transition-all duration-200 soft-shadow-hover focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
              >
                Review Plans First
              </a>
            </div>

            <p className="mt-7 text-sm text-charcoal-muted relative z-10">
              Typically responds within 1 business day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
