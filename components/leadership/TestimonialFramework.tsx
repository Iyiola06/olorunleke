'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

export function TestimonialFramework() {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-cream overflow-hidden flex items-center justify-center">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="w-[60vw] max-w-[800px] h-[60vw] max-h-[800px] bg-white rounded-full blur-[100px] opacity-80" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        
        <SectionReveal className="mb-16 flex justify-center">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Perspective</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
        </SectionReveal>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/40 backdrop-blur-[35px] border border-white/60 rounded-[40px] p-12 md:p-20 shadow-[0_20px_50px_rgba(24,24,24,0.03)] flex flex-col items-center text-center relative"
        >
          {/* Large decorative quote mark */}
          <div className="absolute top-10 left-10 md:top-16 md:left-16 font-serif text-[6rem] md:text-[8rem] text-gold/20 leading-none select-none">
            &ldquo;
          </div>
          
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark leading-[1.3] mb-16 relative z-10 max-w-4xl pt-8">
            Success in real estate is built on a foundation of unyielding integrity, strategic foresight, and a commitment to creating lasting value for communities.
          </p>

          <div className="flex flex-col items-center">
            
            <h4 className="font-sans text-sm uppercase tracking-[0.15em] font-bold text-dark mb-2">
              Olorunleke Ojuolape
            </h4>
            <p className="font-sans text-sm text-muted font-light">
              Founder & CEO <span className="mx-2 text-gold/50">|</span> Mindfire Homes
            </p>
          </div>
          
        </motion.div>
        
      </div>
    </section>
  );
}
