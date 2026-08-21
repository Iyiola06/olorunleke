'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import heroBg from '../../src/assets/images/premium_abstract_business_1787322048855.jpg';

export function PortfolioHero() {
  const headingText = ["Building Ventures", "That Matter"];

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center px-6 overflow-hidden bg-cream">
      
      {/* Background with low opacity architectural texture */}
      <div className="absolute inset-0 z-0 bg-cream">
        <Image
          src={heroBg}
          alt="Abstract business texture"
          fill
          className="object-cover opacity-5 mix-blend-multiply"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Content */}
        <div className="flex flex-col items-start pt-20 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex items-center space-x-4"
          >
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-dark">
              BUSINESS PORTFOLIO
            </span>
          </motion.div>
          
          <h1 className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] tracking-tight text-dark mb-8">
            {headingText.map((line, lineIndex) => (
              <span key={lineIndex} className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.4,
                    delay: lineIndex * 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted max-w-[500px] font-sans font-light leading-relaxed"
          >
            Creating strategic opportunities through innovation, partnerships, and sustainable value creation.
          </motion.p>
        </div>

        {/* Right: Abstract Premium Business Imagery */}
        <div className="hidden lg:block relative h-[600px] w-full rounded-[40px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroBg}
              alt="Premium Ventures Ecosystem"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
            {/* Elegant overlay to blend the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-dark/10 via-transparent to-dark/5" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[40px]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
