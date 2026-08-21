'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

const impacts = [
  {
    title: "Business Impact",
    desc: "Creating sustainable opportunities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "People Impact",
    desc: "Building relationships and developing others.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Industry Impact",
    desc: "Contributing ideas and solutions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Future Impact",
    desc: "Preparing for long-term growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export function ImpactGrid() {
  return (
    <section className="relative py-32 md:py-40 px-6 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <SectionReveal className="mb-20 text-center flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Value Creation</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            Creating Meaningful Impact
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {impacts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-ivory p-10 md:p-14 flex flex-col items-start justify-center group hover:border-gold/30 transition-colors duration-400 rounded-none"
            >
              <div className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center text-dark/40 mb-8 group-hover:text-gold group-hover:border-gold/40 transition-colors duration-400">
                {item.icon}
              </div>
              <h3 className="font-serif text-3xl text-dark mb-4 group-hover:text-gold transition-colors duration-400">
                {item.title}
              </h3>
              <p className="font-sans text-lg text-muted font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
