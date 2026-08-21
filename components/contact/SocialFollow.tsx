'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function SocialFollow() {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-cream overflow-hidden flex flex-col items-center">
      
      {/* Soft Glow */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] bg-white rounded-full blur-[100px] opacity-70" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl md:text-5xl text-dark mb-16"
        >
          Follow The Journey
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          <SocialPill name="LinkedIn" href="#" delay={0.1} />
          <SocialPill name="Instagram" href="https://www.instagram.com/olorunleke___/" external delay={0.2} />
          <SocialPill name="Twitter/X" href="#" delay={0.3} />
        </div>

      </div>
    </section>
  );
}

function SocialPill({ name, href, delay, external }: { name: string, href: string, delay: number, external?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <a 
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/40 backdrop-blur-md border border-white/80 rounded-full hover:bg-white hover:scale-105 transition-all duration-400 shadow-[0_10px_30px_rgba(24,24,24,0.02)] hover:shadow-[0_20px_40px_rgba(200,169,106,0.1)] overflow-hidden"
      >
        <span className="font-sans text-sm tracking-widest uppercase font-semibold text-dark relative z-10">
          {name}
        </span>
        {/* Underline animation */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center" />
      </a>
    </motion.div>
  );
}
