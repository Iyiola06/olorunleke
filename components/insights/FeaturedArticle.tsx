'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import featuredImage from '../../src/assets/images/featured_article_insight_1787331913095.jpg';
import { SectionReveal } from '../SectionReveal';
import Link from 'next/link';

export function FeaturedArticle() {
  return (
    <section className="relative py-20 px-6 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <SectionReveal className="mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Featured Insight</span>
          </div>
        </SectionReveal>

        <div className="relative w-full aspect-[4/5] md:aspect-[16/9] rounded-[40px] overflow-hidden group">
          
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.05 }}
            viewport={{ once: false, margin: "100px" }}
            transition={{ duration: 15, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={featuredImage}
              alt="Featured Insight"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent pointer-events-none" />

          {/* Glass Overlay Panel */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:w-[600px] md:right-auto bg-white/10 backdrop-blur-[40px] border border-white/30 p-8 md:p-12 rounded-[32px] shadow-[0_20px_50px_rgba(24,24,24,0.2)] flex flex-col"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold text-gold/80 mb-4">
              Strategy & Leadership
            </span>
            
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
              The Architecture of Long-Term Value Creation
            </h2>
            
            <p className="font-sans text-sm md:text-base text-white/70 font-light leading-relaxed mb-10 max-w-lg">
              Why sustainable businesses require a delicate balance between immediate execution and generational foresight. An exploration into strategic patience.
            </p>
            
            <Link 
              href="#"
              className="inline-flex items-center space-x-3 text-white hover:text-gold transition-colors duration-300 font-sans text-xs uppercase tracking-widest font-semibold group/link"
            >
              <span>Read Article</span>
              <div className="w-8 h-[1px] bg-white/40 group-hover/link:bg-gold group-hover/link:translate-x-2 transition-all duration-300" />
            </Link>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
