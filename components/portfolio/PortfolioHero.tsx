'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function PortfolioHero() {
  const headingText = ["Igniting A New", "Standard Of Living"];

  return (
    <section className="relative min-h-[85vh] flex items-center pt-36 md:pt-40 lg:pt-44 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden bg-cream">
      
      <div className="absolute inset-0 z-0 bg-cream" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Content */}
        <div className="flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex items-center space-x-4"
          >
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-dark">
              VENTURES &amp; PORTFOLIO
            </span>
          </motion.div>
          
          <h1 className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] tracking-tight text-dark mb-8">
            {headingText.map((line, lineIndex) => (
              <span key={lineIndex} className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
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
            className="text-lg md:text-xl text-muted max-w-[540px] font-sans font-light leading-relaxed"
          >
            Mindfire Homes and Investments, led by Olorunleke Ojuolape as MD/CEO, builds on three promises: clean, verifiable titles; strategic locations with real appreciation potential; and communities designed for how people actually want to live.
          </motion.p>
        </div>

        {/* Right: Project Michika on site */}
        <div className="hidden lg:block relative h-[600px] w-full rounded-[40px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/michika-aerial.jpg"
              alt="Aerial view of Project Michika under construction in Durumi, Abuja"
              fill
              className="object-cover object-[center_75%]"
              sizes="50vw"
              priority
            />
            {/* Elegant overlay to blend the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-dark/10 via-transparent to-dark/5" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[40px]" />
            <div className="absolute bottom-6 left-6 bg-white/15 backdrop-blur-xl border border-white/30 rounded-full px-5 py-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-white">
                Project Michika · Durumi, Abuja · Under construction
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
