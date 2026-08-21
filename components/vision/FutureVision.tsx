'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionReveal } from '../SectionReveal';
import futureImage from '../../src/assets/images/future_architecture_vision_1787321525325.jpg';

export function FutureVision() {
  return (
    <section className="relative py-32 px-6 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <SectionReveal className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Future Outlook</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
        </SectionReveal>

        <div className="relative w-full aspect-[4/5] md:aspect-[21/9] rounded-[40px] overflow-hidden">
          
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.08 }}
            viewport={{ once: false, margin: "200px" }}
            transition={{ duration: 20, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={futureImage}
              alt="Future Vision Architecture"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>

          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-dark/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent" />

          {/* Glass Panel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute bottom-8 md:bottom-16 left-6 md:left-16 right-6 md:right-auto md:w-[600px] bg-white/20 backdrop-blur-[30px] border border-white/40 p-8 md:p-12 rounded-[32px] shadow-[0_20px_50px_rgba(24,24,24,0.15)]"
          >
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight text-white drop-shadow-sm">
              Building ecosystems where people, ideas, and opportunities can thrive.
            </p>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
