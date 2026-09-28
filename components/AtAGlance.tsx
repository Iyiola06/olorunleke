import Link from 'next/link';
import { SectionReveal } from './SectionReveal';
import { PROFILE } from '@/lib/profile';
import { MINDFIRE_URL } from '@/lib/site';

const facts = [
  { label: 'Full Name', value: PROFILE.name },
  { label: 'Known As', value: PROFILE.knownAs },
  { label: 'Role', value: `${PROFILE.role}, ${PROFILE.company}` },
  { label: 'Background', value: PROFILE.background },
  { label: 'Expertise', value: PROFILE.services.join(' · ') },
  { label: 'Flagship Estate', value: `${PROFILE.flagship}, ${PROFILE.city}` },
  { label: 'Market', value: `${PROFILE.city}, ${PROFILE.country}` },
  { label: 'Off The Clock', value: 'Golf' },
];

export function AtAGlance() {
  return (
    <section aria-labelledby="at-a-glance" className="relative py-32 px-6 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

        <SectionReveal className="lg:col-span-4 lg:sticky lg:top-32">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">At A Glance</span>
          </div>
          <h2 id="at-a-glance" className="font-serif text-4xl md:text-5xl text-dark leading-tight mb-6">
            The Essentials
          </h2>
          <p className="font-sans font-light text-muted text-lg leading-relaxed mb-10 max-w-sm">
            {PROFILE.mission}
          </p>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 items-start">
            <Link
              href="/about"
              className="font-sans text-xs uppercase tracking-widest font-semibold text-dark border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Read the full story
            </Link>
            <a
              href={MINDFIRE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs uppercase tracking-widest font-semibold text-dark border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Visit mindfirehomes.com
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2} className="lg:col-span-8">
          <dl className="grid grid-cols-1 sm:grid-cols-2 bg-white/70 backdrop-blur-[30px] border border-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(24,24,24,0.04)]">
            {facts.map((fact) => (
              <div key={fact.label} className="p-8 md:p-10 border-b border-ivory sm:[&:nth-child(odd)]:border-r">
                <dt className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-gold mb-3">
                  {fact.label}
                </dt>
                <dd className="font-serif text-xl md:text-2xl text-dark leading-snug">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </SectionReveal>

      </div>
    </section>
  );
}
