import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function IdentityShift() {
  return (
    <section className="py-32 px-6 md:px-8 bg-sage-800 text-cream relative overflow-hidden" aria-label="Identity statement">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.8) 1.5px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Radial ambient glow from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(156,174,169,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sage-300/70 border border-sage-400/20 px-4 py-2 rounded-full mb-10">
            A Mindset Shift
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-cream">
            You're Not a DIYer.
            <br />
            <span className="text-sage-300 italic">You're a Practice Owner.</span>
          </h2>

          <p className="text-xl md:text-2xl text-cream/75 mb-14 font-serif italic leading-relaxed max-w-[620px] mx-auto">
            Structure creates freedom. When your infrastructure is solid, you have the mental space to focus entirely on the person on the table.
          </p>

          <a
            href="#pricing"
            className="cursor-pointer inline-flex justify-center items-center gap-2.5 bg-cream text-sage-800 px-9 py-4.5 rounded-xl font-semibold text-[15px] hover:bg-white transition-all duration-200 shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-sage-800"
          >
            Step Into Structure <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
