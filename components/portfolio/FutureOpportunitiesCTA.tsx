'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import futureBg from '../../src/assets/images/luxury_future_opportunities_1787322089218.jpg';

export function FutureOpportunitiesCTA() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={futureBg}
          alt="Future Opportunities Architecture"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center">
        
        {/* Glass Overlay Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/10 backdrop-blur-[35px] border border-white/30 rounded-[40px] p-10 md:p-16 lg:p-20 max-w-4xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col items-center"
        >
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">The Next Phase</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
            Exploring The Next <span className="italic text-gold/90">Opportunity</span>
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Open to strategic collaborations, partnerships, and conversations that create meaningful value.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-sans text-sm font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-md border border-white/40 text-white rounded-full overflow-hidden hover:bg-white/30 hover:border-gold hover:shadow-[0_20px_40px_rgba(200,169,106,0.2)] transition-all duration-500"
          >
            {/* Gold light sweep on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/30 to-transparent group-hover:animate-[sweep_1.5s_ease-in-out_infinite]" />
            <span className="relative z-10">Discuss Partnership</span>
          </motion.a>
          
        </motion.div>
        
      </div>
    </section>
  );
}
