'use client';

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function ContactHero() {
  const headingText = "Let's Build Something Meaningful.";
  const words = headingText.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-36 md:pt-40 lg:pt-44 pb-20 px-6 overflow-hidden bg-ivory">
      
      {/* Soft gradient backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-cream rounded-full blur-[100px] opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center justify-center space-x-4"
        >
          <div className="w-8 h-[1px] bg-gold" />
          <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-dark">
            CONTACT & PARTNERSHIPS
          </span>
          <div className="w-8 h-[1px] bg-gold" />
        </motion.div>
        
        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[1.05] tracking-tight text-dark mb-10 flex flex-wrap justify-center"
        >
          {words.map((word, i) => (
            <motion.span 
              key={i} 
              variants={item} 
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] mb-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted max-w-[650px] font-sans font-light leading-relaxed mb-12"
        >
          Whether exploring partnerships, business opportunities, collaborations, or strategic conversations, connect directly and begin a meaningful conversation.
        </motion.p>
        
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          href="https://wa.me/2347035647699?text=Hello%20Olorunleke,%20I%20would%20like%20to%20discuss%20a%20potential%20partnership%20opportunity."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          className="group relative inline-flex items-center justify-center space-x-3 px-10 py-5 font-sans text-sm font-semibold tracking-widest uppercase bg-dark text-white rounded-full overflow-hidden hover:shadow-[0_20px_40px_rgba(24,24,24,0.2)] transition-all duration-500"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[sweep_1.5s_ease-in-out_infinite]" />
          <MessageCircle className="relative z-10 w-5 h-5 text-white/90 group-hover:text-[#25D366] transition-colors duration-300" />
          <span className="relative z-10">Send A Message</span>
        </motion.a>

      </div>
    </section>
  );
}
