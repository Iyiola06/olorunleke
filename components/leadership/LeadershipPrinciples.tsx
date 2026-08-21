'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

const principles = [
  {
    title: "VISIONARY THINKING",
    desc: "Looking beyond immediate challenges to identify future possibilities."
  },
  {
    title: "STRATEGIC DECISION MAKING",
    desc: "Combining insight, analysis, and execution to make meaningful decisions."
  },
  {
    title: "RELATIONSHIP BUILDING",
    desc: "Creating partnerships based on trust, alignment, and shared objectives."
  },
  {
    title: "CONTINUOUS IMPROVEMENT",
    desc: "Learning, adapting, and evolving with changing environments."
  }
];

export function LeadershipPrinciples() {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <SectionReveal className="mb-24 flex flex-col items-center text-center">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Philosophy</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark leading-tight max-w-3xl">
            The Principles Behind <br className="hidden md:block"/>
            <span className="italic text-gold">The Leadership</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {principles.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="group relative w-full h-full bg-ivory/50 backdrop-blur-[30px] border border-white/60 rounded-[36px] p-10 md:p-12 flex flex-col transition-all duration-400 ease-out hover:-translate-y-[12px] hover:shadow-[0_30px_60px_rgba(200,169,106,0.1)] overflow-hidden">
                
                {/* Background reflection moves on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="font-sans text-sm md:text-base uppercase tracking-[0.2em] font-bold text-dark mb-6 group-hover:-translate-y-2 group-hover:text-gold transition-all duration-400">
                    {principle.title}
                  </h3>
                  
                  {/* Expanding gold line */}
                  <div className="w-12 h-[2px] bg-gold mb-8 origin-left transition-all duration-400 group-hover:w-24 group-hover:-translate-y-2" />
                  
                  <p className="font-serif text-2xl md:text-3xl text-muted leading-snug mt-auto group-hover:-translate-y-1 transition-transform duration-400">
                    {principle.desc}
                  </p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
