'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

export function QuoteSection() {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-white overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ivory rounded-full blur-[100px] pointer-events-none opacity-50" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[8rem] md:text-[12rem] leading-none text-gold/20 mb-8 select-none"
        >
          &ldquo;
        </motion.div>
        
        <SectionReveal delay={0.2}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark leading-snug max-w-4xl mx-auto -mt-20">
            Success is not only measured by what you build, but by the <span className="italic text-gold">value you create for others.</span>
          </h2>
        </SectionReveal>
        
      </div>
    </section>
  );
}
