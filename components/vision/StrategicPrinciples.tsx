'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

const pillars = [
  {
    num: "01",
    title: "VISION BEFORE ACTION",
    desc: "Understanding the destination before deciding the path."
  },
  {
    num: "02",
    title: "VALUE CREATION",
    desc: "Building solutions that generate meaningful outcomes."
  },
  {
    num: "03",
    title: "STRATEGIC EXECUTION",
    desc: "Turning ideas into measurable progress."
  },
  {
    num: "04",
    title: "LONG-TERM THINKING",
    desc: "Creating foundations designed to endure."
  }
];

export function StrategicPrinciples() {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-ivory overflow-hidden">
      
      {/* Soft background light */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[150px] opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col">
        
        <SectionReveal className="mb-24 flex flex-col items-start md:items-center md:text-center">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold hidden md:block" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Strategic Pillars</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            Guiding Principles
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <div className="group relative w-full h-full bg-white/60 backdrop-blur-[35px] border border-white/45 rounded-[36px] p-10 flex flex-col transition-all duration-400 ease-out hover:-translate-y-[15px] hover:scale-[1.02] hover:border-gold/40 hover:shadow-[0_30px_60px_rgba(200,169,106,0.12)]">
                
                <div className="font-sans text-5xl font-light text-dark/10 mb-6 group-hover:text-gold/20 transition-colors duration-400">
                  {pillar.num}
                </div>
                
                <div className="w-8 h-[2px] bg-gold mb-6 origin-left transition-all duration-400 group-hover:w-16" />
                
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-dark mb-4 leading-relaxed group-hover:text-gold transition-colors duration-400">
                  {pillar.title}
                </h3>
                
                <p className="font-serif text-xl text-muted leading-snug mt-auto">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
