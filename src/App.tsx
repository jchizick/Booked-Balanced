/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemShift } from './components/ProblemShift';
import { Features } from './components/Features';
import { IdentityShift } from './components/IdentityShift';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-sage-500/30 selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <ProblemShift />
        <Features />
        <IdentityShift />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
