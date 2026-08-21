'use client';

import { motion } from 'motion/react';
import { PremiumButton } from './PremiumButton';

export function PremiumCTA() {
  return (
    <section className="relative py-40 px-6 bg-ivory overflow-hidden flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-4xl bg-white/70 backdrop-blur-[30px] border border-white p-16 md:p-24 text-center rounded-[40px] shadow-[0_20px_60px_rgba(24,24,24,0.05)]"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/60 to-white/10 rounded-[40px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-6xl text-dark mb-6 leading-tight">
            Let&apos;s Build Something <br className="hidden md:block"/> 
            <span className="italic text-gold">Meaningful.</span>
          </h2>
          
          <p className="font-sans text-lg text-muted font-light mb-12 max-w-md mx-auto">
            For partnerships, investments, and strategic conversations.
          </p>

          <PremiumButton variant="primary" className="px-12 py-5 text-sm">
            Start A Conversation
          </PremiumButton>
        </div>
      </motion.div>
    </section>
  );
}
