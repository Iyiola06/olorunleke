'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { SectionReveal } from '../SectionReveal';

const approachSteps = [
  { num: "01", title: "Vision", desc: "Understanding future potential." },
  { num: "02", title: "Research", desc: "Studying markets and opportunities." },
  { num: "03", title: "Strategy", desc: "Creating sustainable approaches." },
  { num: "04", title: "Execution", desc: "Turning ideas into reality." },
  { num: "05", title: "Growth", desc: "Building lasting value." }
];

export function PortfolioTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="relative py-32 md:py-48 px-6 bg-cream overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <SectionReveal className="mb-24 flex flex-col items-center text-center">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Strategic Approach</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            How Opportunities Are Evaluated
          </h2>
        </SectionReveal>

        <div className="relative pt-12 md:pt-24">
          
          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-dark/10 -translate-y-1/2" />
          <motion.div 
            style={{ scaleX: scrollYProgress, originX: 0 }}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gold -translate-y-1/2 drop-shadow-[0_0_8px_rgba(200,169,106,0.8)]"
          />

          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[1px] bg-dark/10" />
          <motion.div 
            style={{ scaleY: scrollYProgress, originY: 0 }}
            className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-gold drop-shadow-[0_0_8px_rgba(200,169,106,0.8)]"
          />

          <div className="flex flex-col md:flex-row justify-between space-y-16 md:space-y-0">
            {approachSteps.map((step, idx) => (
              <ApproachNode key={idx} step={step} index={idx} total={approachSteps.length} progress={scrollYProgress} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function ApproachNode({ step, index, total, progress }: { step: any, index: number, total: number, progress: any }) {
  const targetProgress = index / (total - 1);
  const isActive = useTransform(progress, (p: number) => p >= targetProgress - 0.1);
  
  return (
    <div className="relative flex md:flex-col items-center pl-16 md:pl-0 md:w-1/5 group">
      
      {/* Node */}
      <motion.div 
        style={{ 
          borderColor: isActive as any,
          boxShadow: isActive as any,
          scale: useTransform(progress, (p: number) => p >= targetProgress - 0.1 ? 1.3 : 1)
        }}
        className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-cream border-[2px] border-dark/20 z-10 transition-colors duration-500"
      >
        <motion.div 
          style={{ opacity: isActive as any ? 1 : 0 }}
          className="absolute inset-[2px] bg-gold rounded-full transition-opacity duration-500"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:items-center md:text-center md:mt-16 md:px-4"
      >
        <span className="font-sans text-sm uppercase tracking-[0.2em] font-bold text-gold mb-2">
          {step.num}
        </span>
        <h3 className="font-serif text-2xl text-dark mb-2">{step.title}</h3>
        <p className="font-sans text-sm text-muted font-light leading-relaxed">{step.desc}</p>
      </motion.div>
      
    </div>
  );
}
