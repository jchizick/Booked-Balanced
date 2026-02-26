export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 py-16 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-2">
          <div className="font-serif font-bold text-2xl tracking-tight text-white mb-4">
            Booked & Balanced
          </div>
          <p className="max-w-sm text-cream/60 leading-relaxed">
            Fully managed digital infrastructure for established massage therapists. We handle the tech so you can focus on the client.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Infrastructure Setup</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Website Management</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Booking Integration</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SEO Foundations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-white/10 text-sm text-cream/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Booked & Balanced. All rights reserved.</p>
        <p>Designed for operational clarity.</p>
      </div>
    </footer>
  );
}
