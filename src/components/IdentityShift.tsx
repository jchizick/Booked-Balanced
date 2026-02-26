import { motion } from 'motion/react';

export function IdentityShift() {
  return (
    <section className="py-32 px-6 md:px-8 bg-sage-700 text-cream relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            You’re Not a DIYer.<br />
            <span className="text-sage-400">You’re a Practice Owner.</span>
          </h2>
          <p className="text-xl md:text-2xl text-cream/80 mb-12 font-serif italic">
            Structure creates freedom. When your infrastructure is solid, you have the mental space to focus entirely on the person on the table.
          </p>
          <a 
            href="#pricing" 
            className="inline-flex justify-center items-center bg-cream text-sage-800 px-8 py-4 rounded-xl font-medium hover:bg-white transition-all duration-200 shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
          >
            Step Into Structure
          </a>
        </motion.div>
      </div>
    </section>
  );
}
