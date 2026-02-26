import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-8 max-w-[1200px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-12 inline-block"
      >
        <span className="text-sm font-medium text-sage-700 bg-sage-500/10 px-4 py-2 rounded-full border border-sage-500/20">
          Trusted by 120+ established therapists nationwide.
        </span>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-charcoal mb-6">
            Your Schedule Is Full.<br />
            Your Inbox Is Clear.<br />
            <span className="text-sage-600">Your Tech Is Handled.</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal-light mb-10 leading-relaxed font-sans">
            Professional digital infrastructure for established massage therapists. You run the practice. We handle the tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center gap-2 bg-sage-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-sage-700 transition-all duration-200 soft-shadow-hover"
            >
              Book a Clarity Call <ArrowRight size={18} />
            </a>
            <a 
              href="#pricing" 
              className="inline-flex justify-center items-center gap-2 bg-oatmeal text-charcoal px-8 py-4 rounded-xl font-medium hover:bg-oatmeal/80 transition-all duration-200 soft-shadow-hover"
            >
              See Plans
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <div className="aspect-[4/3] bg-oatmeal/30 rounded-2xl p-4 md:p-8 soft-shadow border border-white/50 relative overflow-hidden">
            {/* Abstract representation of a clean calendar/dashboard */}
            <div className="w-full h-full bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="h-12 border-b border-gray-100 flex items-center px-6 gap-4">
                <div className="w-3 h-3 rounded-full bg-red-400/20"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-400/20"></div>
                <div className="ml-auto w-24 h-4 bg-gray-100 rounded-full"></div>
              </div>
              <div className="flex-1 p-6 flex gap-6">
                <div className="w-48 hidden sm:flex flex-col gap-4 border-r border-gray-50 pr-6">
                  <div className="h-8 bg-sage-500/10 rounded-lg w-full"></div>
                  <div className="h-8 bg-gray-50 rounded-lg w-3/4"></div>
                  <div className="h-8 bg-gray-50 rounded-lg w-5/6"></div>
                  <div className="h-8 bg-gray-50 rounded-lg w-full"></div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-6 bg-gray-100 rounded-md w-32"></div>
                    <div className="h-6 bg-gray-100 rounded-md w-20"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 flex-1">
                    <div className="col-span-1 bg-sage-500/5 rounded-lg border border-sage-500/10 p-3">
                      <div className="h-3 bg-sage-500/20 rounded w-1/2 mb-2"></div>
                      <div className="h-3 bg-sage-500/20 rounded w-3/4"></div>
                    </div>
                    <div className="col-span-2 bg-gray-50 rounded-lg p-3">
                      <div className="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="col-span-2 bg-sage-500/10 rounded-lg border border-sage-500/20 p-3">
                      <div className="h-3 bg-sage-500/30 rounded w-1/4 mb-2"></div>
                      <div className="h-3 bg-sage-500/30 rounded w-2/3"></div>
                    </div>
                    <div className="col-span-1 bg-gray-50 rounded-lg p-3">
                      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
