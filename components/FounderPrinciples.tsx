'use client';

import { motion } from 'motion/react';
import { SectionReveal } from './SectionReveal';

export function FounderPrinciples() {
  const principles = [
    { num: "01", title: "Think Long Term", desc: "Every decision should create sustainable value." },
    { num: "02", title: "Build With Integrity", desc: "Trust is the foundation of meaningful partnerships." },
    { num: "03", title: "Create Impact", desc: "Success is measured by the value created." }
  ];

  return (
    <section className="relative py-32 px-6 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Left column */}
        <div className="lg:col-span-5 sticky top-32">
          <SectionReveal>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Philosophy</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-dark">My Approach</h2>
          </SectionReveal>
        </div>

        {/* Right column */}
        <div className="lg:col-span-7 flex flex-col space-y-20">
          {principles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 pb-16 border-b border-dark/10 last:border-0"
            >
              <div className="font-sans text-[5rem] md:text-[7rem] font-light text-dark/10 leading-none group-hover:text-gold transition-colors duration-500">
                {p.num}
              </div>
              <div>
                <h3 className="font-serif text-3xl md:text-4xl text-dark mb-4">{p.title}</h3>
                <p className="font-sans font-light text-muted text-lg max-w-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
