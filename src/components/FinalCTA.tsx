import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section id="contact" className="py-32 px-6 md:px-8 bg-cream">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="soft-card soft-shadow p-10 md:p-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Let’s Put Your Practice<br />On Structure.
          </h2>
          <p className="text-xl text-charcoal-light mb-10">
            Book a 20-minute clarity call to see if we're the right fit for your practice. No pressure, just a conversation about your current setup.
          </p>
          <a 
            href="mailto:hello@bookedandbalanced.com" 
            className="inline-flex justify-center items-center bg-sage-600 text-white px-10 py-5 rounded-xl font-medium text-lg hover:bg-sage-700 transition-all duration-200 soft-shadow-hover"
          >
            Book a Clarity Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
