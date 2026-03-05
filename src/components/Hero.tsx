import { motion } from 'motion/react';
import { ArrowRight, CalendarCheck, BellRing, Shield } from 'lucide-react';

const stats = [
  { value: '120+', label: 'Therapists Served', icon: <Shield size={14} className="text-sage-600" /> },
  { value: '35%', label: 'Avg. No-Show Reduction', icon: <BellRing size={14} className="text-sage-600" /> },
  { value: '6 hrs', label: 'Saved Per Week', icon: <CalendarCheck size={14} className="text-sage-600" /> },
];

export function Hero() {
  return (
    <section
      className="pt-36 pb-20 md:pt-52 md:pb-32 px-6 md:px-8 max-w-[1200px] mx-auto"
      aria-label="Hero section"
    >
      {/* Trust badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="mb-10 md:mb-14 inline-flex items-center gap-2"
      >
        <span className="text-sm font-semibold text-sage-700 bg-sage-500/10 px-4 py-2 rounded-full border border-sage-500/20 leading-none">
          ✦ Trusted by 120+ established therapists nationwide
        </span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-xl"
        >
          <h1 className="text-[3.25rem] md:text-[4rem] lg:text-[4.5rem] font-bold leading-[1.08] text-charcoal mb-7 tracking-tight">
            Your Schedule Is Full.
            <br />
            Your Inbox Is Clear.
            <br />
            <span className="text-sage-600 italic">Your Tech Is Handled.</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal-light mb-10 leading-relaxed font-sans max-w-[480px]">
            Professional digital infrastructure for established massage therapists.
            You run the practice.{' '}
            <span className="font-semibold text-charcoal">We handle the tech.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="cursor-pointer inline-flex justify-center items-center gap-2.5 bg-sage-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sage-700 transition-all duration-200 soft-shadow sage-glow focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
            >
              Book a Clarity Call <ArrowRight size={18} />
            </a>
            <a
              href="#pricing"
              className="cursor-pointer inline-flex justify-center items-center gap-2 bg-oatmeal text-charcoal px-8 py-4 rounded-xl font-semibold hover:bg-oatmeal-dark transition-all duration-200 soft-shadow-hover focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
            >
              See Plans
            </a>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="stat-card px-4 py-2.5 flex items-center gap-2.5"
              >
                {stat.icon}
                <span className="text-sm font-bold text-charcoal">{stat.value}</span>
                <span className="text-xs text-charcoal-muted">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          {/* Floating ambient glow */}
          <div className="absolute -inset-6 bg-sage-500/8 rounded-3xl blur-2xl pointer-events-none" />

          <div className="relative aspect-[4/3] bg-oatmeal/40 rounded-2xl p-4 md:p-6 soft-shadow-lg border border-white/60 overflow-hidden">
            {/* Mockup inner window */}
            <div className="w-full h-full bg-white rounded-xl shadow-inner overflow-hidden flex flex-col">
              {/* Window chrome */}
              <div className="h-11 border-b border-gray-100 flex items-center px-5 gap-3 bg-gray-50/80 shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-300/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-300/60" />
                  <div className="w-3 h-3 rounded-full bg-green-300/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-5 bg-gray-100 rounded-md w-36 mx-auto" />
                </div>
                <div className="w-6 h-6 rounded-md bg-sage-500/15" />
              </div>

              <div className="flex-1 flex gap-0 overflow-hidden">
                {/* Sidebar */}
                <div className="w-[120px] shrink-0 bg-gray-50/70 border-r border-gray-100 p-3 flex flex-col gap-2 hidden sm:flex">
                  <div className="h-7 bg-sage-500/12 rounded-lg border border-sage-500/10" />
                  {[72, 85, 64, 90].map((w, i) => (
                    <div key={i} className="h-6 bg-gray-100/80 rounded-md" style={{ width: `${w}%` }} />
                  ))}
                  <div className="mt-auto h-px bg-gray-100" />
                  <div className="h-7 bg-oatmeal rounded-lg" />
                </div>

                {/* Main content area */}
                <div className="flex-1 p-4 flex flex-col gap-4">
                  {/* Header row */}
                  <div className="flex items-center justify-between">
                    <div className="h-5 bg-gray-800/10 rounded w-28" />
                    <div className="h-7 bg-sage-500/15 rounded-lg w-20 border border-sage-500/10" />
                  </div>

                  {/* Metric cards row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { color: 'bg-sage-500/10', border: 'border-sage-400/20', bar: 'bg-sage-500/25', label: 'bg-sage-500/20' },
                      { color: 'bg-blue-50', border: 'border-blue-100', bar: 'bg-blue-200/60', label: 'bg-blue-100' },
                      { color: 'bg-amber-50', border: 'border-amber-100', bar: 'bg-amber-200/60', label: 'bg-amber-100' },
                    ].map((c, i) => (
                      <div key={i} className={`${c.color} rounded-lg border ${c.border} p-2.5`}>
                        <div className={`h-2 ${c.label} rounded-full w-2/3 mb-2`} />
                        <div className={`h-4 ${c.bar} rounded w-1/2`} />
                      </div>
                    ))}
                  </div>

                  {/* Calendar grid */}
                  <div className="flex-1 bg-gray-50/70 rounded-lg p-3 grid grid-rows-4 gap-1.5">
                    {[
                      [true, false, true, true, false],
                      [false, true, false, true, true],
                      [true, true, false, false, true],
                      [false, false, true, true, false],
                    ].map((row, ri) => (
                      <div key={ri} className="grid grid-cols-5 gap-1.5 h-full">
                        {row.map((filled, ci) => (
                          <div
                            key={ci}
                            className={`rounded-md ${filled ? 'bg-sage-500/20 border border-sage-400/20' : 'bg-white border border-gray-100'}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating notification badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute -bottom-4 -left-4 stat-card px-4 py-3 flex items-center gap-3 shadow-lg"
          >
            <div className="w-9 h-9 rounded-full bg-sage-500/15 flex items-center justify-center shrink-0">
              <BellRing size={16} className="text-sage-600" />
            </div>
            <div>
              <div className="text-xs font-bold text-charcoal leading-none mb-0.5">Reminder Sent</div>
              <div className="text-[10px] text-charcoal-muted">Sarah's 2pm appointment</div>
            </div>
          </motion.div>

          {/* Floating booking badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="absolute -top-4 -right-4 stat-card px-4 py-3 flex items-center gap-3 shadow-lg"
          >
            <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center shrink-0">
              <CalendarCheck size={16} className="text-green-600" />
            </div>
            <div>
              <div className="text-xs font-bold text-charcoal leading-none mb-0.5">New Booking</div>
              <div className="text-[10px] text-charcoal-muted">Confirmed · Deep Tissue</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
