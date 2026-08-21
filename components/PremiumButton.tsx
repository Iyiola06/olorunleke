'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PremiumButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function PremiumButton({ children, variant = 'primary', className, onClick }: PremiumButtonProps) {
  const baseClasses = "group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-white text-dark shadow-[0_4px_20px_rgba(200,169,106,0.05)] hover:shadow-[0_8px_30px_rgba(200,169,106,0.2)]",
    secondary: "bg-white/10 backdrop-blur-md border border-dark/20 text-dark hover:border-gold hover:bg-white/30",
  };

  return (
    <motion.button
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(baseClasses, variants[variant], variant === 'primary' ? 'rounded-full' : 'rounded-full', className)}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center space-x-2">
        {children}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 z-0 bg-gradient-to-tr from-transparent via-gold/5 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </motion.button>
  );
}
