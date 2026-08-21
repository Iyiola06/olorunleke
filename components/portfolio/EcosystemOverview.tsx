'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

const ecosystemCards = [
  {
    num: "01",
    title: "REAL ESTATE",
    desc: "Creating value through property, development, and strategic opportunities."
  },
  {
    num: "02",
    title: "ENTREPRENEURSHIP",
    desc: "Building solutions around identified market opportunities."
  },
  {
    num: "03",
    title: "PARTNERSHIPS",
    desc: "Collaborating with people and organisations aligned with growth."
  },
  {
    num: "04",
    title: "INVESTMENTS",
    desc: "Supporting ideas and ventures with long-term potential."
  }
];

export function EcosystemOverview() {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-ivory overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[100px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <SectionReveal className="mb-24 md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Overview</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-dark leading-tight mb-6">
              The Ecosystem
            </h2>
            <p className="font-sans text-lg text-muted font-light leading-relaxed">
              A collection of initiatives, partnerships, and opportunities focused on creating meaningful impact.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ecosystemCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <div className="group relative w-full h-full bg-white/65 backdrop-blur-[30px] border border-white/45 rounded-[40px] p-10 md:p-12 flex flex-col transition-all duration-500 hover:-translate-y-[15px] hover:shadow-[0_40px_80px_rgba(200,169,106,0.1)] overflow-hidden">
                
                {/* Glass reflection sweep */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[sweep_1.5s_ease-in-out]" />
                
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform origin-left scale-x-0 group-hover:scale-x-100" />
                
                <div className="flex items-start justify-between mb-16">
                  <span className="font-sans text-6xl font-light text-dark/10 group-hover:text-gold/20 transition-colors duration-500">
                    {card.num}
                  </span>
                  
                  <div className="w-10 h-10 rounded-full border border-dark/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors duration-500">
                    <svg className="w-4 h-4 text-dark/40 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="font-sans text-sm uppercase tracking-[0.2em] font-bold text-dark mb-4 group-hover:text-gold transition-colors duration-500">
                  {card.title}
                </h3>
                
                <p className="font-serif text-2xl text-dark leading-snug mt-auto max-w-[90%]">
                  {card.desc}
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
