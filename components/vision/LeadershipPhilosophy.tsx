'use client';

import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef } from 'react';

const statements = [
  "Think Beyond The Moment",
  "Build With Purpose",
  "Create Meaningful Impact"
];

export function LeadershipPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef} 
      className="relative bg-white"
      style={{ height: `${statements.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-20 flex items-center space-x-4">
          <div className="w-8 h-[1px] bg-gold" />
          <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Leadership</span>
          <div className="w-8 h-[1px] bg-gold" />
        </div>

        {statements.map((statement, idx) => (
          <LeadershipStatement 
            key={idx} 
            statement={statement} 
            idx={idx} 
            total={statements.length} 
            scrollYProgress={scrollYProgress} 
          />
        ))}
        
      </div>
    </section>
  );
}

function LeadershipStatement({ 
  statement, 
  idx, 
  total, 
  scrollYProgress 
}: { 
  statement: string; 
  idx: number; 
  total: number; 
  scrollYProgress: MotionValue<number>; 
}) {
  const start = idx / total;
  const end = (idx + 1) / total;
  const peak = start + (end - start) / 2;

  const opacity = useTransform(
    scrollYProgress,
    [start, peak - 0.1, peak + 0.1, end],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, peak, end],
    [50, 0, -50]
  );

  const blurValue = useTransform(
    scrollYProgress,
    [start, peak - 0.1, peak + 0.1, end],
    [10, 0, 0, 10]
  );
  
  const filter = useTransform(blurValue, (v: any) => `blur(${v}px)`);

  return (
    <motion.div
      style={{ opacity, y, filter }}
      className="absolute inset-0 flex flex-col items-center justify-center px-6"
    >
      <h2 className="font-serif text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] text-dark text-center leading-[1.1] max-w-6xl">
        {statement}
      </h2>
    </motion.div>
  );
}
