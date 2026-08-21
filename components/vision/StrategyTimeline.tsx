'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { SectionReveal } from '../SectionReveal';

const frameworkSteps = [
  { num: "01", title: "Understand", desc: "Analyse opportunities deeply." },
  { num: "02", title: "Strategise", desc: "Develop sustainable approaches." },
  { num: "03", title: "Execute", desc: "Move with discipline." },
  { num: "04", title: "Improve", desc: "Continuously evolve." }
];

export function StrategyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="relative py-32 md:py-48 px-6 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12">
        
        {/* Left Side */}
        <div className="lg:sticky lg:top-40 h-fit">
          <SectionReveal>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Decision Framework</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark leading-tight max-w-md">
              How I Approach <span className="italic text-gold">Decisions</span>
            </h2>
          </SectionReveal>
        </div>

        {/* Right Side - Timeline */}
        <div className="relative pt-12 lg:pt-0">
          
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-dark/10" />
          
          <motion.div 
            style={{ scaleY: scrollYProgress, originY: 0 }}
            className="absolute left-6 md:left-12 top-0 bottom-0 w-[2px] bg-gold drop-shadow-[0_0_8px_rgba(200,169,106,0.8)]"
          />

          <div className="flex flex-col space-y-24 md:space-y-32">
            {frameworkSteps.map((step, idx) => (
              <TimelineItem key={idx} step={step} index={idx} total={frameworkSteps.length} progress={scrollYProgress} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function TimelineItem({ step, index, total, progress }: { step: any, index: number, total: number, progress: any }) {
  const targetProgress = index / (total - 1);
  const isActive = useTransform(progress, (p: number) => p >= targetProgress - 0.1);
  
  return (
    <div className="relative flex items-start pl-16 md:pl-28 group">
      
      {/* Node */}
      <motion.div 
        style={{ 
          borderColor: isActive as any,
          boxShadow: isActive as any
        }}
        className="absolute left-[21px] md:left-[45px] top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-[2px] border-dark/20 z-10 transition-colors duration-500"
      >
        <motion.div 
          style={{ opacity: isActive as any ? 1 : 0 }}
          className="absolute inset-[2px] bg-gold rounded-full transition-opacity duration-500"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/40 backdrop-blur-md border border-ivory p-8 rounded-[32px] w-full shadow-[0_10px_40px_rgba(24,24,24,0.03)]"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <span className="font-sans text-5xl font-light text-gold/30">
            {step.num}
          </span>
          <div className="flex flex-col">
            <h3 className="font-serif text-3xl text-dark mb-2">{step.title}</h3>
            <p className="font-sans text-lg text-muted font-light">{step.desc}</p>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}
