'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

const pillars = ["Integrity", "Transparency", "Reliability"];

export function TrustSection() {
  const quote = "Trust is earned through consistency, integrity, and the ability to deliver on commitments.";
  const words = quote.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section className="relative py-32 md:py-48 px-6 bg-white overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-ivory rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left: Quote */}
        <div className="flex flex-col pr-0 lg:pr-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.2] text-dark"
          >
            <span className="text-gold/40 text-7xl leading-none absolute -top-8 -left-6 md:-left-8 font-serif">&ldquo;</span>
            {words.map((word, i) => (
              <motion.span 
                key={i} 
                variants={item} 
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <span className="text-gold/40 font-serif inline-block ml-2">&rdquo;</span>
          </motion.div>
        </div>

        {/* Right: Pillars */}
        <div className="flex flex-col space-y-6 md:space-y-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 + (idx * 0.15), ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-ivory/40 backdrop-blur-md border border-white/80 p-8 md:p-10 rounded-[24px] shadow-[0_10px_30px_rgba(24,24,24,0.02)] flex items-center group hover:bg-white transition-colors duration-400"
            >
              <div className="w-12 h-[1px] bg-gold mr-6 origin-left transition-all duration-400 group-hover:w-20" />
              <h3 className="font-serif text-3xl md:text-4xl text-dark">
                {pillar}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
