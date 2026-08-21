'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { PremiumButton } from './PremiumButton';
import { FloatingCard } from './FloatingCard';

import portraitImage from '../src/assets/images/premium_founder_portrait_1787319810973.jpg';

export function FounderHero() {
  const headingText = ["OLORUNLEKE", "OJUOLAPE"];
  
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 px-6 md:px-12 lg:px-0 lg:pt-0 overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-ivory pointer-events-none">
        <div className="absolute right-[20%] top-[30%] w-[500px] h-[500px] bg-white/50 rounded-full blur-[100px] opacity-70" />
        <div className="absolute right-[10%] top-[40%] w-[400px] h-[400px] bg-gold/15 rounded-full blur-[120px] opacity-15" />
      </div>

      <div className="relative z-10 w-full max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
        
        {/* Left Content (55%) */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center pt-10 lg:pt-0">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 flex items-center space-x-4"
          >
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-dark">
              Founder &bull; Entrepreneur &bull; Builder
            </span>
            <div className="w-12 h-[1px] bg-gold" />
          </motion.div>
          
          <h1 className="font-serif text-[4rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.9] tracking-tight text-dark mb-10">
            {headingText.map((line, lineIndex) => (
              <span key={lineIndex} className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.2,
                    delay: lineIndex * 0.15,
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
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted max-w-[450px] mb-12 font-sans font-light leading-relaxed"
          >
            Building meaningful ventures through vision, strategy, and disciplined execution.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <PremiumButton variant="primary">Explore My Journey</PremiumButton>
            <PremiumButton variant="secondary">View Ventures</PremiumButton>
          </motion.div>

        </div>

        {/* Right Content (45%) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-16 lg:mt-0 h-[500px] sm:h-[600px] w-full">
          
          <div className="relative w-full max-w-[400px] h-full mx-auto lg:mr-8">
            <motion.div
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/40 shadow-[0_30px_60px_rgba(24,24,24,0.12)] bg-white/20 backdrop-blur-sm p-2"
            >
              <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                <Image
                  src={portraitImage}
                  alt="Olorunleke Ojuolape - Founder & Entrepreneur"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </motion.div>

            {/* Floating Glass Cards */}
            <FloatingCard 
              title="Vision" 
              description="Creating opportunities through strategic thinking."
              className="-left-12 sm:-left-20 top-20"
              delay={0}
            />
            <FloatingCard 
              title="Focus" 
              description="Building sustainable value."
              className="-right-8 sm:-right-16 top-1/2 -translate-y-1/2"
              delay={2}
            />
            <FloatingCard 
              title="Legacy" 
              description="Impact beyond business."
              className="-left-8 sm:-left-12 bottom-12"
              delay={4}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
