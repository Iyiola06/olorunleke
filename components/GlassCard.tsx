'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverable?: boolean;
}

export function GlassCard({ children, className, delay = 0, hoverable = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverable ? { y: -10, scale: 1.01 } : {}}
      className={cn(
        "bg-white/55 backdrop-blur-[25px] border border-white/40 shadow-[0_8px_32px_rgba(24,24,24,0.04)] rounded-[32px] overflow-hidden transition-all duration-500",
        hoverable && "hover:shadow-[0_16px_40px_rgba(200,169,106,0.1)] hover:border-white/60",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
