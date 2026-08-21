'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import portraitImage from '../../src/assets/images/leadership_executive_portrait_1787322393865.jpg';

export function LeadershipHero() {
  const headingLines = ["Leading With Vision.", "Building With Purpose."];

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-ivory to-cream">
      
      {/* Architectural shadow overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[40vw] h-full bg-gradient-to-r from-dark/5 to-transparent skew-x-12 origin-top-left -translate-x-1/2" />
        <div className="absolute top-0 right-20 w-[20vw] h-full bg-gradient-to-l from-dark/5 to-transparent -skew-x-12 origin-top-right translate-x-1/4" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-20 lg:mt-0">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex items-center space-x-4"
          >
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-dark">
              LEADERSHIP & TRUST
            </span>
          </motion.div>
          
          <h1 className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.05] tracking-tight text-dark mb-8">
            {headingLines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted max-w-[550px] font-sans font-light leading-relaxed"
          >
            True leadership combines strategic thinking, disciplined execution, and the ability to inspire meaningful progress.
          </motion.p>
        </div>

        {/* Right Content - Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[460px] aspect-[4/5] rounded-[40px] p-2 bg-white/30 backdrop-blur-md border border-white/60 shadow-[0_40px_80px_rgba(24,24,24,0.06)] overflow-hidden group"
          >
            <div className="relative w-full h-full rounded-[32px] overflow-hidden">
              {/* Soft reflection sweep */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[sweep_2s_ease-in-out] z-20 pointer-events-none" />
              
              <Image
                src="/1.jpg"
                alt="Executive Portrait - Olorunleke Ojuolape"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
              
              <div className="absolute inset-0 bg-dark/5 mix-blend-overlay pointer-events-none" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
