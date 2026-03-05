import { motion } from 'motion/react';
import { CalendarCheck, BellRing, Smartphone, LayoutTemplate, Search, Wrench } from 'lucide-react';

const features = [
  {
    icon: <CalendarCheck size={22} className="text-sage-600" />,
    number: '01',
    title: 'Online Booking Setup',
    description: 'Frictionless scheduling for your clients. We integrate and configure the booking system so it works flawlessly from day one.'
  },
  {
    icon: <BellRing size={22} className="text-sage-600" />,
    number: '02',
    title: 'Automated Reminders',
    description: 'Drastically reduce no-shows with automated SMS and email reminders sent at exactly the right intervals.'
  },
  {
    icon: <Smartphone size={22} className="text-sage-600" />,
    number: '03',
    title: 'Mobile Optimization',
    description: 'Over 70% of bookings happen on phones. Your site will look and function perfectly on every device, every time.'
  },
  {
    icon: <LayoutTemplate size={22} className="text-sage-600" />,
    number: '04',
    title: 'Clean Professional Design',
    description: 'Aesthetic, minimal, and structured design that builds immediate trust with high-value clients on first glance.'
  },
  {
    icon: <Search size={22} className="text-sage-600" />,
    number: '05',
    title: 'SEO Foundations',
    description: 'Properly structured pages, meta tags, and local SEO so clients in your area can actually find you on Google.'
  },
  {
    icon: <Wrench size={22} className="text-sage-600" />,
    number: '06',
    title: 'Ongoing Tech Support',
    description: 'Need to update your hours or add a service? Just email us. We handle the updates while you work.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-28 px-6 md:px-8" aria-labelledby="features-heading">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sage-600 bg-sage-500/8 px-4 py-2 rounded-full border border-sage-500/15 mb-5">
            Fully Managed · Zero Tech Maintenance
          </div>
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-charcoal mb-5">
            What We Handle For You
          </h2>
          <p className="text-lg text-charcoal-light leading-relaxed">
            Everything required to run a professional digital presence, managed entirely by our team — so you never have to think about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="soft-card soft-shadow p-8 transition-all duration-300 cursor-pointer group hover:-translate-y-1.5 hover:shadow-[14px_14px_28px_rgba(0,0,0,0.06),-10px_-10px_22px_rgba(255,255,255,0.9)] hover:border-sage-300/40"
              tabIndex={0}
              role="article"
              aria-label={feature.title}
            >
              {/* Number + icon row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-sage-500/10 flex items-center justify-center border border-sage-400/15 group-hover:bg-sage-500/15 transition-colors duration-200">
                  {feature.icon}
                </div>
                <span className="text-3xl font-bold text-sage-400/30 font-serif leading-none select-none">
                  {feature.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-charcoal mb-3 font-serif">{feature.title}</h3>
              <p className="text-charcoal-light leading-relaxed text-[15px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
