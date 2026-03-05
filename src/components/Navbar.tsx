import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50 progress-bar-sage"
        style={{ scaleX }}
      />

      <header
        className={`fixed z-40 transition-all duration-500 ${isScrolled
            ? 'top-3 left-4 right-4 md:left-6 md:right-6'
            : 'top-0 left-0 right-0'
          }`}
      >
        <div
          className={`max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-500 ${isScrolled
              ? 'bg-cream/92 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-3 rounded-2xl border border-white/60'
              : 'bg-transparent py-6'
            }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="cursor-pointer shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-200"
            aria-label="Booked & Balanced — back to top"
          >
            <img
              src="/images/logo.svg"
              alt="Booked & Balanced"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-charcoal-light hover:text-sage-700 transition-colors duration-200 relative group cursor-pointer"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sage-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="cursor-pointer text-sm font-semibold bg-sage-600 text-white px-5 py-2.5 rounded-xl hover:bg-sage-700 transition-all duration-200 sage-glow focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-charcoal hover:text-sage-600 transition-colors duration-200 cursor-pointer p-1.5 rounded-lg hover:bg-sage-500/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden mt-2 mx-4 bg-cream/95 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-4 px-6 flex flex-col gap-1"
            >
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer text-base font-medium text-charcoal-light hover:text-sage-700 py-3 border-b border-sage-400/10 last:border-0 transition-colors duration-150"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer mt-2 text-base font-semibold bg-sage-600 text-white px-5 py-3.5 rounded-xl text-center hover:bg-sage-700 transition-all duration-200"
              >
                Book a Call
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
