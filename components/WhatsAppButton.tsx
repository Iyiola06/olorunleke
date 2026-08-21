'use client';

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.a
      href="https://wa.me/2347035647699?text=Hello%20Olorunleke,%20I%20would%20like%20to%20connect%20and%20explore%20opportunities."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Olorunleke on WhatsApp"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: '0 20px 40px rgba(37, 211, 102, 0.2), 0 0 0 1px rgba(200, 169, 106, 0.8)'
      }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center space-x-3 bg-white/70 backdrop-blur-xl border border-gold/50 px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(24,24,24,0.1)] group transition-colors duration-500 hover:bg-white"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
        className="relative flex items-center justify-center text-[#25D366]"
      >
        <MessageCircle size={22} className="stroke-[2.5]" />
      </motion.div>
      <span className="font-sans text-sm uppercase tracking-widest font-bold text-dark">
        Message Olorunleke
      </span>
    </motion.a>
  );
}
