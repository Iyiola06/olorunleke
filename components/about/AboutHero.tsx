'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import portraitImage from '../../src/assets/images/premium_founder_profile_1787320535739.jpg';

export function AboutHero() {
  const headingText = "The Journey Behind The Vision".split(" ");

  return (
    <section className="relative min-h-[85vh] flex items-center pt-36 md:pt-40 lg:pt-44 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-ivory pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex items-center space-x-4"
          >
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-dark">
              ABOUT THE FOUNDER
            </span>
          </motion.div>
          
          <h1 className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] text-dark mb-8 max-w-[700px]">
            {headingText.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-2">
                <motion.span
                  initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-muted max-w-[600px] font-sans font-light leading-relaxed"
          >
            Every meaningful achievement begins with a vision, strengthened by discipline and transformed through action.
          </motion.p>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[480px] aspect-[3/4] rounded-[32px] p-2 bg-white/30 backdrop-blur-sm border border-white/50 shadow-[0_40px_80px_rgba(24,24,24,0.08)]"
          >
            <div className="relative w-full h-full rounded-[24px] overflow-hidden">
              <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay z-10 pointer-events-none" />
              <Image
                src="/about.jpg"
                alt="Olorunleke Ojuolape - Founder Profile"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
            
            {/* Floating Glass Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 md:-left-12 bottom-12 z-20 bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(24,24,24,0.1)] rounded-full px-6 py-3 flex items-center space-x-3"
            >
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-dark">
                Founder Profile
              </span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
