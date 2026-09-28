import Link from 'next/link';
import { CONTACT_EMAIL, INSTAGRAM_URL, LINKEDIN_URL, MINDFIRE_URL } from '@/lib/site';

const pages = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Vision', href: '/vision' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Contact', href: '/contact' },
];

const linkClass = "font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors";

export function Footer() {
  return (
    <footer className="bg-white px-6 py-12 md:py-16 border-t border-ivory">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-dark mb-2">
            Olorunleke Ojuolape
          </span>
          <span className="font-sans text-xs text-muted tracking-widest uppercase">
            Geologist &bull; MD/CEO,{' '}
            <a href={MINDFIRE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              Mindfire Homes and Investments
            </a>
          </span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {pages.map((page) => (
            <Link key={page.href} href={page.href} className={linkClass}>
              {page.name}
            </Link>
          ))}
        </nav>

        <div className="flex space-x-8">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Instagram
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
            Email
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-ivory flex flex-col md:flex-row justify-between items-center text-[10px] text-muted tracking-widest uppercase font-medium">
        <p>&copy; {new Date().getFullYear()} Olorunleke Ojuolape. All rights reserved.</p>
        <p className="mt-4 md:mt-0">From the earth to estates.</p>
      </div>
    </footer>
  );
}
