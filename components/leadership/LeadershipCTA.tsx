'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

export function LeadershipCTA() {
  return (
    <section className="relative py-40 md:py-56 px-6 bg-white overflow-hidden flex items-center justify-center">
      
      {/* Premium glow effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70vw] max-w-[900px] aspect-square bg-cream rounded-full blur-[150px] opacity-80" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        <SectionReveal>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-dark mb-8 leading-[1.1]">
            Leadership Creates A Legacy <br className="hidden md:block"/> 
            <span className="italic text-gold">Beyond The Present.</span>
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-muted font-light mb-14 max-w-2xl mx-auto leading-relaxed">
            Building meaningful relationships, creating value, and pursuing opportunities that stand the test of time.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans text-sm font-semibold tracking-widest uppercase bg-gold text-white rounded-full overflow-hidden hover:shadow-[0_20px_40px_rgba(200,169,106,0.25)] transition-all duration-500"
          >
            {/* Light sweep on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[sweep_1.5s_ease-in-out_infinite]" />
            <span className="relative z-10">Connect With Olorunleke</span>
          </motion.a>
        </SectionReveal>

      </div>
    </section>
  );
}
