'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MotionLink = motion.create(Link);

interface PremiumButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

export function PremiumButton({ children, variant = 'primary', className, onClick, href, external }: PremiumButtonProps) {
  const baseClasses = "group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 overflow-hidden rounded-full";

  const variants = {
    primary: "bg-white text-dark shadow-[0_4px_20px_rgba(200,169,106,0.05)] hover:shadow-[0_8px_30px_rgba(200,169,106,0.2)]",
    secondary: "bg-white/10 backdrop-blur-md border border-dark/20 text-dark hover:border-gold hover:bg-white/30",
  };

  const classes = cn(baseClasses, variants[variant], className);
  const hover = { whileHover: { y: -3 }, transition: { type: "spring" as const, stiffness: 400, damping: 25 } };

  const content = (
    <>
      <span className="relative z-10 flex items-center space-x-2">
        {children}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 z-0 bg-gradient-to-tr from-transparent via-gold/5 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </>
  );

  if (href && external) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...hover}>
        {content}
      </motion.a>
    );
  }

  if (href) {
    return (
      <MotionLink href={href} className={classes} {...hover}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button type="button" className={classes} onClick={onClick} {...hover}>
      {content}
    </motion.button>
  );
}
