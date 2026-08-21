'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

const principles = ["Trust", "Alignment", "Execution"];

export function PartnershipPhilosophy() {
  const statement = "Strong partnerships transform individual ideas into collective achievements.";
  const words = statement.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <section className="relative py-40 md:py-48 px-6 bg-white overflow-hidden flex flex-col items-center">
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] text-dark mb-24 max-w-5xl"
        >
          {words.map((word, i) => (
            <motion.span 
              key={i} 
              variants={item} 
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 w-full max-w-4xl">
          {principles.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="w-1 h-12 bg-gold/30 mb-6" />
              <h3 className="font-serif text-3xl md:text-4xl text-dark">
                {principle}
              </h3>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
