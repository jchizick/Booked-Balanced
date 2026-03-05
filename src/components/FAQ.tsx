import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Who is this best suited for?',
    answer: "Established therapists who want a fully managed system. If you enjoy managing plugins and updating your own site, this likely isn't for you. We're for practitioners ready to operate like a true business owner."
  },
  {
    question: 'Do I keep my domain name?',
    answer: 'Yes. You always retain 100% ownership of your domain name. We simply connect it to the new infrastructure we build for you — transfer is seamless.'
  },
  {
    question: 'What if I already have a website?',
    answer: "Perfect. We'll migrate your existing content, update the design to our high-converting standards, and implement the proper booking infrastructure. We handle the entire transition seamlessly."
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. We operate on a month-to-month basis after the initial setup. We believe in earning your business every month through reliable service, not locking you into long-term contracts.'
  },
  {
    question: 'Do you handle SEO?',
    answer: 'We implement strong foundational local SEO — proper site structure, meta tags, mobile optimization, and fast loading speeds. For ongoing aggressive SEO campaigns, we can recommend specialized partners.'
  },
  {
    question: 'How long does setup take?',
    answer: 'Typically 2–3 weeks from our kickoff call to launch. We move efficiently so you can start benefiting from the new structure as soon as possible.'
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 px-6 md:px-8 bg-white/40" aria-labelledby="faq-heading">
      <div className="max-w-[760px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sage-600 bg-sage-500/8 px-4 py-2 rounded-full border border-sage-500/15 mb-5">
            Got Questions?
          </div>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Common Questions</h2>
          <p className="text-lg text-charcoal-light">Clear answers about how we operate.</p>
        </motion.div>

        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className={`soft-card overflow-hidden transition-all duration-200 ${isOpen ? 'soft-shadow-lg border-sage-300/30' : 'soft-shadow'}`}
                role="listitem"
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="cursor-pointer w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-inset rounded-t-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`font-semibold pr-4 transition-colors duration-200 ${isOpen ? 'text-sage-700' : 'text-charcoal'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-sage-500/15' : 'bg-oatmeal'}`}>
                    <ChevronDown
                      size={16}
                      className={`text-sage-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-[15px] text-charcoal-light leading-relaxed border-t border-sage-400/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
