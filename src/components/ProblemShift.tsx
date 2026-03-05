import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const before = [
  'Juggling 4 different software subscriptions',
  'Manually texting clients to remind them',
  'A website that looks like a template from 2015',
  'Worrying if your booking link actually works',
];

const after = [
  'One unified, fully-managed platform',
  'Automated SMS & email reminders',
  'A premium, conversion-optimized web presence',
  'Zero tech maintenance on your end',
];

export function ProblemShift() {
  return (
    <section className="py-28 px-6 md:px-8 bg-white/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sage-600 bg-sage-500/8 px-4 py-2 rounded-full border border-sage-500/15 mb-6">
              The Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              Stop Managing Your Website.
              <br />
              <span className="text-sage-600 italic">Start Managing Your Clients.</span>
            </h2>
            <p className="text-lg text-charcoal-light leading-relaxed mb-6">
              You didn't spend hundreds of hours mastering your craft just to spend your evenings fighting with WordPress plugins, fixing broken booking links, and apologizing for missed reminder emails.
            </p>
            <p className="text-lg text-charcoal-light leading-relaxed">
              DIY fatigue is real. And it's quietly capping your growth. We replace the scattered tools and tech overwhelm with a{' '}
              <span className="font-semibold text-charcoal">single, stable, professional infrastructure.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="soft-card soft-shadow-lg p-8 md:p-10 space-y-8">

              {/* Before */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-5 flex items-center gap-2">
                  <XCircle size={14} className="text-red-400/80" />
                  The Scattered Approach
                </h3>
                <ul className="space-y-3">
                  {before.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-charcoal-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 mt-2.5 shrink-0" />
                      <span className="text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-sage-400/20 to-transparent" />

              {/* After */}
              <div>
                <div className="inline-flex items-center gap-2 bg-sage-500/10 text-sage-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-sage-500/20 mb-5">
                  <CheckCircle2 size={13} className="text-sage-600" />
                  The Structured System
                </div>
                <ul className="space-y-3">
                  {after.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-sage-500/15 flex items-center justify-center mt-0.5 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-600 block" />
                      </div>
                      <span className="text-[15px] font-medium text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
