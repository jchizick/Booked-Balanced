import { motion } from 'motion/react';
import { CalendarCheck, BellRing, Smartphone, LayoutTemplate, Search, Wrench } from 'lucide-react';

const features = [
  {
    icon: <CalendarCheck size={24} className="text-sage-600" />,
    title: "Online Booking Setup",
    description: "Frictionless scheduling for your clients. We integrate and configure the booking system so it works flawlessly."
  },
  {
    icon: <BellRing size={24} className="text-sage-600" />,
    title: "Automated Reminders",
    description: "Drastically reduce no-shows with automated SMS and email reminders sent at the perfect intervals."
  },
  {
    icon: <Smartphone size={24} className="text-sage-600" />,
    title: "Mobile Optimization",
    description: "Over 70% of bookings happen on phones. Your site will look and function perfectly on every device."
  },
  {
    icon: <LayoutTemplate size={24} className="text-sage-600" />,
    title: "Clean Professional Design",
    description: "Aesthetic, minimal, and structured design that builds immediate trust with high-value clients."
  },
  {
    icon: <Search size={24} className="text-sage-600" />,
    title: "SEO Basics",
    description: "Properly structured pages, meta tags, and local SEO foundations so clients in your area can actually find you."
  },
  {
    icon: <Wrench size={24} className="text-sage-600" />,
    title: "Ongoing Tech Support",
    description: "Need to update your hours or add a service? Just email us. We handle the updates while you work."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-sm font-bold uppercase tracking-wider text-sage-600 mb-3">Fully Managed. Zero Tech Maintenance.</div>
          <h2 className="text-4xl font-bold text-charcoal mb-4">What We Handle For You</h2>
          <p className="text-lg text-charcoal-light">
            Everything required to run a professional digital presence, managed entirely by our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="soft-card soft-shadow p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_20px_rgba(0,0,0,0.04),-12px_-12px_20px_rgba(255,255,255,0.8)]"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-500/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3 font-serif">{feature.title}</h3>
              <p className="text-charcoal-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
