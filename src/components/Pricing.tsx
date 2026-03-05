import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Foundation',
    tagline: 'For solo therapists needing reliable, hands-off infrastructure.',
    setupFee: '$499',
    monthly: '$99',
    features: [
      'Custom Professional Website',
      'Mobile & Speed Optimization',
      'Booking System Integration',
      'Basic SEO Setup',
      'Secure Hosting & SSL',
      'Email Support',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Growth Structure',
    tagline: 'For busy practices requiring advanced automation and priority support.',
    setupFee: '$799',
    monthly: '$149',
    features: [
      'Everything in Foundation',
      'Automated SMS/Email Reminders',
      'Client Intake Form Integration',
      'Google Business Profile Optimization',
      'Monthly Analytics Report',
      'Priority Tech Support',
    ],
    highlighted: true,
    cta: 'Get Started — Best Value',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 md:px-8" aria-labelledby="pricing-heading">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sage-600 bg-sage-500/8 px-4 py-2 rounded-full border border-sage-500/15 mb-5">
            Simple Pricing
          </div>
          <h2 id="pricing-heading" className="text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Two Clear Paths.{' '}
            <span className="italic">One Steady System.</span>
          </h2>
          <p className="text-lg text-charcoal-light">
            No hidden fees. No surprise maintenance costs. Just steady infrastructure that earns its keep every month.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-[860px] mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`soft-card flex flex-col relative ${plan.highlighted
                ? 'border-sage-400/40 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-10px_-10px_24px_rgba(255,255,255,0.9)] md:-mt-3 md:-mb-3'
                : 'soft-shadow'
                }`}
            >
              {/* Most Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 bg-sage-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    <Zap size={11} className="fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`p-8 md:p-10 flex flex-col flex-1 ${plan.highlighted ? 'pt-10' : ''}`}>
                {/* Plan header */}
                <div className="mb-7">
                  <h3 className="text-2xl font-normal text-charcoal mb-2 font-serif">{plan.name}</h3>
                  <p className="text-charcoal-light text-[15px] leading-snug">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-7 pb-7 border-b border-sage-400/15">
                  <div className="flex items-baseline gap-1 mb-1.5">
                    <span className="text-5xl font-normal text-charcoal font-serif">{plan.monthly}</span>
                    <span className="text-charcoal-light font-medium">/mo</span>
                  </div>
                  <div className="text-sm text-sage-600 font-semibold">
                    + {plan.setupFee} one-time setup fee
                  </div>
                </div>

                {/* Feature list */}
                <ul className="space-y-3.5 mb-10 flex-1" role="list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlighted ? 'bg-sage-500/15' : 'bg-oatmeal'}`}>
                        <Check size={12} className="text-sage-600" strokeWidth={2.5} />
                      </div>
                      <span className="text-charcoal text-[15px] leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`cursor-pointer w-full py-4 rounded-xl font-semibold text-center transition-all duration-200 focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 ${plan.highlighted
                    ? 'bg-sage-600 text-white hover:bg-sage-700 sage-glow soft-shadow'
                    : 'bg-oatmeal text-charcoal hover:bg-oatmeal-dark soft-shadow-hover'
                    }`}
                >
                  {plan.cta}
                </a>

                {plan.highlighted && (
                  <p className="text-center text-xs text-charcoal-muted mt-4">
                    Most therapists choose this plan
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money-back note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-charcoal-muted mt-10"
        >
          Month-to-month. Cancel anytime. No long-term contracts.
        </motion.p>
      </div>
    </section>
  );
}
