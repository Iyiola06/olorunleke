'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

const models = [
  {
    num: "01",
    title: "Opportunity",
    desc: "Seeing possibilities before others."
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Creating clear paths forward."
  },
  {
    num: "03",
    title: "Execution",
    desc: "Turning ideas into reality."
  },
  {
    num: "04",
    title: "Reflection",
    desc: "Learning and improving continuously."
  }
];

export function ThoughtFramework() {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <SectionReveal className="mb-24 flex flex-col items-center text-center">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Mental Models</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-dark">
            How I Think
          </h2>
        </SectionReveal>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-24 gap-x-12 lg:gap-x-24">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 2) * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <span className="font-serif text-7xl md:text-8xl text-ivory drop-shadow-sm font-light mb-2 select-none">
                {model.num}
              </span>
              <div className="pl-4 md:pl-8 -mt-8 relative z-10 border-l-2 border-gold/30 pt-4">
                <h3 className="font-serif text-3xl md:text-4xl text-dark mb-4">
                  {model.title}
                </h3>
                <p className="font-sans text-lg text-muted font-light">
                  {model.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
