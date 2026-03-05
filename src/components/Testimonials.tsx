import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I used to spend my Sunday evenings updating my website and trying to figure out why my booking widget broke. Since moving to Booked & Balanced, I haven't touched a single setting. My schedule is full and I actually have my weekends back.",
    name: 'Sarah Jenkins',
    details: 'LMT · 8 years in practice',
    location: 'Portland, OR',
    metric: 'Saved 6+ hours per week',
    stars: 5,
    initials: 'SJ',
  },
  {
    quote: "The transition was seamless. They took my messy Wix site and turned it into a professional, fast-loading system that actually converts visitors into clients. The automated reminders alone have saved me hundreds of dollars in no-shows.",
    name: 'Marcus Thorne',
    details: 'Sports Massage Therapist · 12 years in practice',
    location: 'Austin, TX',
    metric: 'Reduced no-shows by 35%',
    stars: 5,
    initials: 'MT',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-28 px-6 md:px-8" aria-labelledby="testimonials-heading">
      {/* Soft tinted background band */}
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sage-600 bg-sage-500/8 px-4 py-2 rounded-full border border-sage-500/15 mb-5">
            Social Proof
          </div>
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            The Steady Choice
          </h2>
          <p className="text-lg text-charcoal-light">
            Trusted by established therapists nationwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="soft-card soft-shadow p-8 md:p-10 flex flex-col"
            >
              {/* Stars + metric */}
              <div className="flex items-center justify-between mb-6">
                <StarRating count={t.stars} />
                <div className="inline-block bg-sage-500/10 text-sage-700 text-xs font-bold px-3 py-1.5 rounded-md border border-sage-500/20">
                  {t.metric}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 mb-8">
                <p className="text-[1.05rem] text-charcoal leading-relaxed font-serif italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-6 border-t border-sage-400/15">
                <div
                  className="w-11 h-11 rounded-full bg-sage-400/20 flex items-center justify-center text-sage-800 font-bold font-serif text-base shrink-0 border border-sage-400/20"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-charcoal text-[15px]">{t.name}</div>
                  <div className="text-sm text-charcoal-light leading-snug">{t.details}</div>
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
