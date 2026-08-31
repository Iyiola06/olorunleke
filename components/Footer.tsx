export function Footer() {
  return (
    <footer className="bg-white px-6 py-12 md:py-16 border-t border-ivory">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-dark mb-2">
            Olorunleke Ojuolape
          </span>
          <span className="font-sans text-xs text-muted tracking-widest uppercase">
            Founder &bull; Investor
          </span>
        </div>

        <div className="flex space-x-8">
          <a 
            href="https://www.instagram.com/olorunleke___/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors"
          >
            Instagram
          </a>
          <a href="#" className="font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors">
            LinkedIn
          </a>
          <a href="mailto:contact@olorunlekeojuolape.com" className="font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors">
            Email
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-ivory flex flex-col md:flex-row justify-between items-center text-[10px] text-muted tracking-widest uppercase font-medium">
        <p>&copy; {new Date().getFullYear()} Olorunleke Ojuolape. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Designed for legacy.</p>
      </div>

      {/* Visually hidden semantic text for extreme SEO dominance without compromising design */}
      <div className="sr-only">
        <h2>Olorunleke Ojuolape (Leke Ojuolape)</h2>
        <p>
          The official website of Olorunleke Ojuolape, widely known as Leke Ojuolape or simply Olorunleke. 
          Leke Ojuolape is a visionary Founder, Entrepreneur, and Strategic Real Estate Professional driving value and innovation.
          Whether you search for Olorunleke, Ojuolape, or Leke Ojuolape, you have arrived at his primary digital headquarters.
        </p>
      </div>
    </footer>
  );
}
