'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

export function VisionHero() {
  const headingText = ["Building Today.", "Creating Tomorrow."];

  return (
    <section className="relative h-[90vh] min-h-[700px] flex flex-col items-center justify-center px-6 overflow-hidden bg-ivory">
      
      {/* Subtle Animated Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[80vw] max-w-[800px] aspect-square rounded-full bg-white/60 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[60vw] max-w-[600px] aspect-square rounded-full bg-gold/20 blur-[150px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center space-x-4"
        >
          <div className="w-8 h-[1px] bg-gold/50" />
          <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-dark">
            VISION & PHILOSOPHY
          </span>
          <div className="w-8 h-[1px] bg-gold/50" />
        </motion.div>
        
        <h1 className="font-serif text-[4rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.95] tracking-tight text-dark mb-10">
          {headingText.map((line, lineIndex) => (
            <span key={lineIndex} className="block overflow-hidden pb-3">
              <motion.span
                initial={{ opacity: 0, y: 70, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.4,
                  delay: lineIndex * 0.2,
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
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted max-w-[550px] font-sans font-light leading-relaxed"
        >
          A founder&apos;s vision is not only about where you are today, but the future you have the courage to create.
        </motion.p>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] font-medium text-muted mb-4">Discover</span>
        <div className="w-[1px] h-24 bg-dark/10 overflow-hidden relative">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-gold"
          />
        </div>
      </motion.div>

    </section>
  );
}
