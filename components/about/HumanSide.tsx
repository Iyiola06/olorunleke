'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionReveal } from '../SectionReveal';

const humanAspects = [
  {
    title: "Leadership",
    desc: "Guiding teams with clarity and purpose, fostering environments where excellence thrives naturally.",
    img: "/founder.jpg"
  },
  {
    title: "Relationships",
    desc: "Cultivating deep, lasting connections based on mutual respect, transparency, and shared values.",
    img: "/1.jpg"
  },
  {
    title: "Continuous Learning",
    desc: "Maintaining an unyielding curiosity, always seeking new perspectives to refine strategy and vision.",
    img: "/about.jpg"
  }
];

export function HumanSide() {
  return (
    <section className="relative py-32 px-6 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <SectionReveal className="mb-24">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">The Person</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            Behind The Founder
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {humanAspects.map((aspect, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative w-full aspect-[3/4] rounded-[32px] overflow-hidden mb-8 border border-white/40 shadow-[0_20px_40px_rgba(24,24,24,0.05)]">
                <Image
                  src={aspect.img}
                  alt={aspect.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-colors duration-500" />
              </div>
              
              <div className="flex flex-col px-4">
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-dark mb-4 group-hover:text-gold transition-colors">
                  {aspect.title}
                </h3>
                <p className="font-serif text-lg text-muted leading-snug">
                  {aspect.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
