import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "I used to spend my Sunday evenings updating my website and trying to figure out why my booking widget broke. Since moving to Booked & Balanced, I haven't touched a single setting. My schedule is full and I actually have my weekends back.",
    name: "Sarah Jenkins",
    details: "LMT, 8 years in practice",
    location: "Portland, OR",
    metric: "Saved 6+ hours per week"
  },
  {
    quote: "The transition was seamless. They took my messy Wix site and turned it into a professional, fast-loading system that actually converts visitors into clients. The automated reminders alone have saved me hundreds of dollars in no-shows.",
    name: "Marcus Thorne",
    details: "Sports Massage Therapist, 12 years in practice",
    location: "Austin, TX",
    metric: "Reduced no-shows by 35%"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-8 bg-oatmeal/30">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-charcoal mb-4">The Steady Choice</h2>
          <p className="text-lg text-charcoal-light">Trusted by established therapists nationwide.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="soft-card soft-shadow p-8 md:p-10 flex flex-col"
            >
              <div className="flex-1">
                {t.metric && (
                  <div className="inline-block bg-sage-500/10 text-sage-700 text-sm font-bold px-3 py-1 rounded-md mb-6 border border-sage-500/20">
                    {t.metric}
                  </div>
                )}
                <p className="text-lg text-charcoal leading-relaxed mb-8 font-serif italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sage-400/30 flex items-center justify-center text-sage-700 font-bold font-serif text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-charcoal">{t.name}</div>
                  <div className="text-sm text-charcoal-light">{t.details}</div>
                  <div className="text-xs text-sage-600 font-medium mt-0.5">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
