'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionReveal } from '../SectionReveal';

const humanAspects = [
  {
    title: "On The Golf Course",
    desc: "Quiet, strategic and unforgiving of shortcuts, just like geology and real estate. The long game on the course is the long game in business.",
    img: "/images/leke-golf-putt.jpg"
  },
  {
    title: "Many Hats",
    desc: "Strategist, negotiator, leader, visionary. Different roles, one standard: value that holds.",
    img: "/images/leke-agbada-portrait.jpg"
  },
  {
    title: "Student Of The Earth",
    desc: "Still the student who believes land can change lives, and that every family deserves a better life than the one before.",
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
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-[3/4] rounded-[32px] overflow-hidden mb-8 border border-white/40 shadow-[0_20px_40px_rgba(24,24,24,0.05)]">
                <Image
                  src={aspect.img}
                  alt={`Olorunleke Ojuolape: ${aspect.title}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
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
