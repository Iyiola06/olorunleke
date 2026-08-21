'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

export function VisionCTA() {
  return (
    <section className="relative py-40 md:py-56 px-6 bg-ivory overflow-hidden flex items-center justify-center">
      
      {/* Premium glow effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] max-w-[1000px] aspect-[2/1] bg-white rounded-full blur-[120px] opacity-70" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        <SectionReveal>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-dark mb-8 leading-[1.1]">
            Shared Vision Creates <br className="hidden md:block"/> 
            <span className="italic text-gold">Greater Possibilities.</span>
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-muted font-light mb-14 max-w-2xl mx-auto leading-relaxed">
            Explore opportunities to collaborate, build, and create lasting value.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans text-sm font-semibold tracking-widest uppercase bg-white/60 backdrop-blur-xl border border-white/80 text-dark rounded-full overflow-hidden hover:bg-white hover:border-gold hover:shadow-[0_20px_40px_rgba(200,169,106,0.15)] transition-all duration-500"
          >
            {/* Gold light sweep on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:animate-[sweep_1.5s_ease-in-out_infinite]" />
            <span className="relative z-10">Begin A Conversation</span>
          </motion.a>
        </SectionReveal>

      </div>
    </section>
  );
}
