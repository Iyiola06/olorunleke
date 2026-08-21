'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

export function ManifestoSection() {
  const statement = "Great businesses are built through clarity of purpose, disciplined execution, and the ability to create lasting value.";
  const words = statement.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-40 md:py-56 px-6 bg-white overflow-hidden flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Subtle Glass Quotation Frame */}
        <div className="absolute inset-0 max-w-5xl mx-auto -my-16 bg-ivory/30 backdrop-blur-[10px] border border-white/60 rounded-[40px] pointer-events-none -z-10" />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.1] text-dark px-4 md:px-12"
        >
          {words.map((word, i) => (
            <motion.span 
              key={i} 
              variants={item} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
