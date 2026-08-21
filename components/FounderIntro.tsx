'use client';

import { motion } from 'motion/react';
import { SectionReveal } from './SectionReveal';
import { GlassCard } from './GlassCard';

export function FounderIntro() {
  const statement = "Great businesses are built by people who see opportunities before others do.";
  const words = statement.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const cards = [
    { title: "VISION", desc: "Seeing possibilities beyond the present." },
    { title: "EXECUTION", desc: "Turning strategy into measurable results." },
    { title: "LEGACY", desc: "Creating value that lasts." }
  ];

  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-[2.5rem] md:text-[4rem] leading-[1.1] text-dark max-w-4xl mb-16"
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={item} className="inline-block mr-[0.3em]">
              {word}
            </motion.span>
          ))}
        </motion.div>

        <SectionReveal delay={0.4} className="mb-24">
          <p className="font-sans font-light text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            As a founder and strategic business leader, Olorunleke Ojuolape focuses on building valuable ventures, creating opportunities, and delivering long-term impact across the real estate and investment sectors.
          </p>
        </SectionReveal>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <SectionReveal key={idx} delay={0.2 + idx * 0.2} className="h-full">
              <GlassCard hoverable={true} className="h-full flex flex-col items-center justify-center p-10 bg-ivory/50">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold mb-4">
                  {card.title}
                </span>
                <p className="font-serif text-xl text-dark text-center leading-snug">
                  {card.desc}
                </p>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
