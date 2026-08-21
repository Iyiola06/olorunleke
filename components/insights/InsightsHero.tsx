'use client';

import { motion } from 'motion/react';

export function InsightsHero() {
  const headingText = "Ideas That Shape The Future";
  const words = headingText.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center px-6 overflow-hidden bg-ivory">
      
      {/* Soft gradient backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-cream rounded-full blur-[100px] opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-20 lg:mt-0">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center justify-center space-x-4"
        >
          <div className="w-8 h-[1px] bg-gold" />
          <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-dark">
            FOUNDER INSIGHTS
          </span>
          <div className="w-8 h-[1px] bg-gold" />
        </motion.div>
        
        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[1.05] tracking-tight text-dark mb-10 flex flex-wrap justify-center"
        >
          {words.map((word, i) => (
            <motion.span 
              key={i} 
              variants={item} 
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] mb-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted max-w-[600px] font-sans font-light leading-relaxed"
        >
          Perspectives on leadership, entrepreneurship, innovation, and creating meaningful value.
        </motion.p>
        
      </div>
    </section>
  );
}
