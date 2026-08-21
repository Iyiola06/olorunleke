'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

const values = [
  {
    num: "01",
    title: "VISION",
    desc: "Seeing possibilities beyond immediate challenges."
  },
  {
    num: "02",
    title: "INTEGRITY",
    desc: "Building trust through transparency and consistency."
  },
  {
    num: "03",
    title: "EXCELLENCE",
    desc: "Pursuing quality in every decision and execution."
  },
  {
    num: "04",
    title: "IMPACT",
    desc: "Creating value that extends beyond business."
  }
];

export function ValuesSystem() {
  return (
    <section className="relative py-32 px-6 bg-ivory overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px] pointer-events-none opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        <SectionReveal className="text-center mb-24">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Core Values</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            The Foundation of Practice
          </h2>
        </SectionReveal>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="group relative w-full h-full bg-white/65 backdrop-blur-[30px] border border-white/50 rounded-[32px] p-10 md:p-12 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(200,169,106,0.15)]">
                
                {/* Gold accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform origin-left scale-x-0 group-hover:scale-x-100" />
                
                <div className="flex flex-col h-full">
                  <div className="flex items-end justify-between mb-8">
                    <h3 className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-dark group-hover:text-gold transition-colors duration-300">
                      {val.title}
                    </h3>
                    <span className="font-serif text-3xl text-gold/30 group-hover:text-gold/60 transition-colors duration-300">
                      {val.num}
                    </span>
                  </div>
                  
                  <p className="font-serif text-2xl text-dark leading-snug mt-auto">
                    {val.desc}
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
