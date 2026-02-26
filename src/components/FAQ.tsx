import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Who is this best suited for?",
    answer: "Established therapists who want a fully managed system. If you enjoy managing plugins and updating your own site, this likely isn’t for you."
  },
  {
    question: "Do I keep my domain name?",
    answer: "Yes. You always retain 100% ownership of your domain name. We simply connect it to the new infrastructure we build for you."
  },
  {
    question: "What if I already have a website?",
    answer: "Perfect. We'll migrate your existing content, update the design to our high-converting standards, and implement the proper booking infrastructure. We handle the entire transition seamlessly."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. We operate on a month-to-month basis after the initial setup. We believe in earning your business every month through reliable service, not locking you into long-term contracts."
  },
  {
    question: "Do you handle SEO?",
    answer: "We implement strong foundational local SEO. This includes proper site structure, meta tags, mobile optimization, and fast loading speeds. For ongoing, aggressive SEO campaigns, we can recommend specialized partners."
  },
  {
    question: "How long does setup take?",
    answer: "Typically 2-3 weeks from our kickoff call to launch. We move efficiently so you can start benefiting from the new structure as soon as possible."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 md:px-8 bg-white/50">
      <div className="max-w-[800px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-charcoal mb-4">Common Questions</h2>
          <p className="text-lg text-charcoal-light">Clear answers about how we operate.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="soft-card soft-shadow overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-charcoal pr-4">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-sage-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-charcoal-light leading-relaxed">
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
