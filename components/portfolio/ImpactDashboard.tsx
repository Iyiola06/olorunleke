'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { SectionReveal } from '../SectionReveal';

const metrics = [
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Projects Delivered", value: 0, suffix: " [Editable]" },
  { label: "Strategic Partnerships", value: 0, suffix: " [Editable]" },
  { label: "Markets Served", value: 0, suffix: " [Editable]" }
];

export function ImpactDashboard() {
  return (
    <section className="relative py-32 px-6 bg-ivory overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col">
        
        <SectionReveal className="mb-20">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Metrics</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            Impact Dashboard
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} metric={metric} index={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

function MetricCard({ metric, index }: { metric: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && metric.value > 0) {
      let start = 0;
      const end = metric.value;
      const duration = 2000;
      const incrementTime = (duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, metric.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/50 backdrop-blur-[20px] border border-white/60 p-8 rounded-[32px] flex flex-col items-start justify-center shadow-[0_10px_30px_rgba(24,24,24,0.02)]"
    >
      <div className="font-serif text-5xl md:text-6xl text-dark mb-4 flex items-baseline">
        {metric.value > 0 ? count : metric.value}
        <span className="font-sans text-xl md:text-2xl text-gold font-light ml-1">{metric.suffix}</span>
      </div>
      <div className="w-8 h-[1px] bg-gold/50 mb-4" />
      <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-muted">
        {metric.label}
      </span>
    </motion.div>
  );
}
