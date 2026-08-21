'use client';

import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef } from 'react';
import { SectionReveal } from '../SectionReveal';

const stages = [
  { num: "01", title: "Understand", desc: "Listen deeply. Analyse context." },
  { num: "02", title: "Strategise", desc: "Create clear direction." },
  { num: "03", title: "Execute", desc: "Move from ideas into action." },
  { num: "04", title: "Collaborate", desc: "Build stronger outcomes through people." },
  { num: "05", title: "Evolve", desc: "Continuously improve." }
];

export function LeadershipTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="relative py-32 md:py-48 px-6 bg-cream overflow-hidden" ref={containerRef}>
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <SectionReveal className="mb-24 flex flex-col items-center text-center">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Methodology</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            My Leadership Framework
          </h2>
        </SectionReveal>

        <div className="relative w-full max-w-2xl pl-8 md:pl-0">
          
          {/* Background Track Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[1px] bg-dark/10" />
          
          {/* Animated Fill Line */}
          <motion.div 
            style={{ scaleY: scrollYProgress, originY: 0 }}
            className="absolute left-8 md:left-12 top-0 bottom-0 w-[2px] bg-gold drop-shadow-[0_0_8px_rgba(200,169,106,0.6)]"
          />

          <div className="flex flex-col space-y-24 md:space-y-32 py-12">
            {stages.map((stage, idx) => (
              <TimelineStage 
                key={idx} 
                stage={stage} 
                index={idx} 
                total={stages.length} 
                progress={scrollYProgress} 
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

function TimelineStage({ 
  stage, 
  index, 
  total, 
  progress 
}: { 
  stage: any, 
  index: number, 
  total: number, 
  progress: MotionValue<number> 
}) {
  const targetProgress = index / (total - 1);
  const isActive = useTransform(progress, (p: number) => p >= targetProgress - 0.1);
  
  return (
    <div className="relative flex flex-col pl-16 md:pl-32 group">
      
      {/* Node */}
      <motion.div 
        style={{ 
          borderColor: isActive as any,
          boxShadow: isActive as any
        }}
        className="absolute left-0 md:left-[39px] top-4 -translate-x-[4px] w-5 h-5 rounded-full bg-cream border-[2px] border-dark/20 z-10 transition-colors duration-500"
      >
        <motion.div 
          style={{ opacity: isActive as any ? 1 : 0 }}
          className="absolute inset-[3px] bg-gold rounded-full transition-opacity duration-500 shadow-[0_0_10px_rgba(200,169,106,0.8)]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8"
      >
        <span className="font-sans text-4xl md:text-5xl font-light text-gold/40">
          {stage.num}
        </span>
        <div className="flex flex-col">
          <h3 className="font-serif text-3xl md:text-4xl text-dark mb-3">{stage.title}</h3>
          <p className="font-sans text-lg text-muted font-light whitespace-pre-line">{stage.desc}</p>
        </div>
      </motion.div>
      
    </div>
  );
}
