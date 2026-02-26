import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Foundation",
    description: "For solo therapists needing reliable, hands-off infrastructure.",
    setupFee: "$499",
    monthly: "$99",
    features: [
      "Custom Professional Website",
      "Mobile & Speed Optimization",
      "Booking System Integration",
      "Basic SEO Setup",
      "Secure Hosting & SSL",
      "Email Support"
    ],
    highlighted: false
  },
  {
    name: "Growth Structure",
    description: "For busy practices requiring advanced automation and priority support.",
    setupFee: "$799",
    monthly: "$149",
    features: [
      "Everything in Foundation",
      "Automated SMS/Email Reminders",
      "Client Intake Form Integration",
      "Google Business Profile Optimization",
      "Monthly Analytics Report",
      "Priority Tech Support"
    ],
    highlighted: true
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-charcoal mb-4">Two Clear Paths. One Steady System.</h2>
          <p className="text-lg text-charcoal-light mb-8">
            No hidden fees. No surprise maintenance costs. Just steady infrastructure.
          </p>
          <p className="text-sm font-medium text-sage-600">
            Most therapists choose Growth Structure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`soft-card p-8 md:p-10 flex flex-col ${
                plan.highlighted 
                  ? 'border-sage-400/50 shadow-[12px_12px_24px_rgba(0,0,0,0.06),-12px_-12px_24px_rgba(255,255,255,0.9)] relative z-10 md:-mt-4 md:mb-4' 
                  : 'soft-shadow'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-charcoal mb-2 font-serif">{plan.name}</h3>
                <p className="text-charcoal-light h-12">{plan.description}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-sage-400/20">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-charcoal">{plan.monthly}</span>
                  <span className="text-charcoal-light">/mo</span>
                </div>
                <div className="text-sm text-sage-600 font-medium">
                  + {plan.setupFee} one-time setup
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={18} className="text-sage-500 mt-0.5 shrink-0" />
                    <span className="text-charcoal">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl font-medium text-center transition-all duration-200 soft-shadow-hover ${
                  plan.highlighted 
                    ? 'bg-sage-600 text-white hover:bg-sage-700' 
                    : 'bg-oatmeal text-charcoal hover:bg-oatmeal/80'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
