'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionReveal } from '../SectionReveal';
import showcaseImage from '../../src/assets/images/luxury_office_space_1787322063551.jpg';

export function VentureShowcase() {
  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <SectionReveal className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Featured</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            Venture Showcase
          </h2>
        </SectionReveal>

        <div className="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] rounded-[40px] overflow-hidden group">
          
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.08 }}
            viewport={{ once: false, margin: "100px" }}
            transition={{ duration: 15, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={showcaseImage}
              alt="Featured Venture Showcase"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>

          {/* Cinematic lighting overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

          {/* Overlay Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:w-[500px] md:right-auto bg-white/10 backdrop-blur-[40px] border border-white/30 p-8 md:p-10 rounded-[32px] shadow-[0_20px_50px_rgba(24,24,24,0.2)] flex flex-col"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold text-gold/80 mb-3">
              Real Estate Development
            </span>
            
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Mindfire Homes
            </h3>
            
            <p className="font-sans text-sm md:text-base text-white/70 font-light leading-relaxed mb-8">
              Founder and CEO of MindfireHomes.com, leading the strategic vision and execution of premier real estate developments and sustainable value creation.
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/20">
              <span className="font-sans text-xs text-white/50 tracking-widest uppercase">Role: Founder & CEO</span>
              
              <button className="text-white hover:text-gold transition-colors duration-300 font-sans text-xs uppercase tracking-widest font-semibold flex items-center space-x-2">
                <span>Explore Details</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
