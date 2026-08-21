'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FloatingCardProps {
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function FloatingCard({ title, description, className, delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay 
      }}
      className={`absolute bg-white/55 backdrop-blur-[25px] border border-white/40 shadow-[0_8px_32px_rgba(24,24,24,0.06)] rounded-2xl p-5 w-48 z-20 ${className}`}
    >
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1">{title}</span>
        <span className="text-sm font-serif leading-snug text-dark">{description}</span>
      </div>
    </motion.div>
  );
}
