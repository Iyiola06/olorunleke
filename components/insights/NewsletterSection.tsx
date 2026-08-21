'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

export function NewsletterSection() {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-cream overflow-hidden flex items-center justify-center">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="w-[60vw] max-w-[800px] h-[60vw] max-h-[800px] bg-white rounded-full blur-[100px] opacity-80" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/40 backdrop-blur-[35px] border border-white/60 rounded-[40px] p-10 md:p-16 shadow-[0_20px_50px_rgba(24,24,24,0.03)] flex flex-col items-center text-center"
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Connect</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-dark mb-6 leading-tight">
            Stay Connected With My Insights
          </h2>
          
          <p className="font-sans text-sm md:text-base text-muted font-light leading-relaxed mb-12 max-w-lg">
            Receive thoughts, perspectives, and updates on leadership, business, and opportunities.
          </p>
          
          <form className="w-full max-w-md flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full px-6 py-4 bg-white/60 backdrop-blur-md border border-white/80 rounded-full font-sans text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all duration-300"
              required
            />
            <button 
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-dark text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-gold transition-colors duration-300 flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
          
        </motion.div>
      </div>
    </section>
  );
}
