'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

const promises = [
  { num: "01", title: "Clean, Verifiable Titles", desc: "Every plot is backed by documentation you can check." },
  { num: "02", title: "Strategic Locations", desc: "Location is never accidental. We buy where value grows." },
  { num: "03", title: "Real Appreciation", desc: "Land chosen for its long-term potential, not just today's price." },
  { num: "04", title: "Designed Communities", desc: "Estates planned for how people actually want to live." }
];

export function MindfirePromise() {
  return (
    <section className="relative py-32 px-6 bg-ivory overflow-hidden">

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col">

        <SectionReveal className="mb-20">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">The Mindfire Promise</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark leading-tight">
            No Stories. No Stress. <span className="italic text-gold">Just Value.</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((promise, idx) => (
            <motion.div
              key={promise.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/50 backdrop-blur-[20px] border border-white/60 p-8 rounded-[32px] flex flex-col items-start shadow-[0_10px_30px_rgba(24,24,24,0.02)]"
            >
              <span className="font-sans text-4xl font-light text-gold/50 mb-6">{promise.num}</span>
              <h3 className="font-serif text-2xl text-dark mb-4 leading-snug">{promise.title}</h3>
              <div className="w-8 h-[1px] bg-gold/50 mb-4" />
              <p className="font-sans text-sm text-muted font-light leading-relaxed">{promise.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
