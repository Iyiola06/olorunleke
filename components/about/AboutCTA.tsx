'use client';

import { motion } from 'motion/react';
import { PremiumButton } from '../PremiumButton';
import { SectionReveal } from '../SectionReveal';

export function AboutCTA() {
  return (
    <section className="relative py-40 px-6 bg-white overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[400px] bg-ivory rounded-full blur-[120px] pointer-events-none opacity-60" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        <SectionReveal>
          <h2 className="font-serif text-5xl md:text-6xl text-dark mb-8 leading-tight">
            Welcome To My World. <br className="hidden md:block"/>
            <span className="italic text-gold">Welcome To Mindfire.</span>
          </h2>

          <p className="font-sans text-lg md:text-xl text-muted font-light mb-12 max-w-xl mx-auto leading-relaxed">
            This is more than my business. This is my memoir in motion.
          </p>

          <PremiumButton variant="secondary" href="/contact" className="px-10 py-5 text-sm bg-ivory/50">
            Start A Conversation
          </PremiumButton>
        </SectionReveal>
      </div>
    </section>
  );
}
