import { motion, useScroll, useSpring } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sage-500 origin-left z-50"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between">
          <div className="font-serif font-bold text-2xl tracking-tight text-charcoal">
            Booked & Balanced
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-charcoal-light hover:text-sage-600 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-charcoal-light hover:text-sage-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-charcoal-light hover:text-sage-600 transition-colors">FAQ</a>
            <a 
              href="#contact" 
              className="text-sm font-medium bg-sage-600 text-white px-5 py-2.5 rounded-xl hover:bg-sage-700 transition-all duration-200 soft-shadow-hover"
            >
              Book a Call
            </a>
          </nav>

          <button 
            className="md:hidden text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-t border-sage-400/20 shadow-lg py-4 px-6 flex flex-col gap-4">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-charcoal-light">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-charcoal-light">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-charcoal-light">FAQ</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium bg-sage-600 text-white px-5 py-3 rounded-xl text-center"
            >
              Book a Call
            </a>
          </div>
        )}
      </header>
    </>
  );
}
