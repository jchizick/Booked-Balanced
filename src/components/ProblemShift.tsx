import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export function ProblemShift() {
  return (
    <section className="py-24 px-6 md:px-8 bg-white/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              Stop Managing Your Website.<br />
              <span className="text-sage-600">Start Managing Your Clients.</span>
            </h2>
            <p className="text-lg text-charcoal-light leading-relaxed mb-8">
              You didn't spend hundreds of hours mastering your craft just to spend your evenings fighting with WordPress plugins, fixing broken booking links, and apologizing for missed reminder emails. DIY fatigue is real. And it’s quietly capping your growth.
            </p>
            <p className="text-lg text-charcoal-light leading-relaxed">
              We replace the scattered tools and tech overwhelm with a single, stable, professional infrastructure. You show up and do the work. We handle the rest.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="soft-card soft-shadow p-8 md:p-10">
              <div className="grid gap-10">
                
                {/* Before */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-light/50 mb-4 flex items-center gap-2">
                    <XCircle size={14} className="text-red-400/70" /> The Scattered Approach
                  </h3>
                  <ul className="space-y-3">
                    {['Juggling 4 different software subscriptions', 'Manually texting clients to remind them', 'A website that looks like a template from 2015', 'Worrying if your booking link actually works'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-sage-400/20 to-transparent"></div>

                {/* After */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-sage-700 mb-4 flex items-center gap-2 bg-sage-500/10 inline-flex px-3 py-1.5 rounded-lg border border-sage-500/20">
                    <CheckCircle2 size={18} className="text-sage-600" /> The Structured System
                  </h3>
                  <ul className="space-y-3">
                    {['One unified, fully-managed platform', 'Automated SMS & email reminders', 'A premium, conversion-optimized web presence', 'Zero tech maintenance on your end'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-500 mt-2 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
