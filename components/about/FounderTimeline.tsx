'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { SectionReveal } from '../SectionReveal';

const timelineSteps = [
  { label: "Geology", title: "Student Of The Earth", desc: "Learning to read formation, structure and potential, and that location is never accidental." },
  { label: "Real Estate", title: "From Land To Value", desc: "A natural evolution: from studying land to unlocking its value." },
  { label: "Entrepreneurship", title: "The Drive To Reshape", desc: "Not just working in the industry, but setting out to change it." },
  { label: "Mindfire", title: "Igniting A New Standard", desc: "Founding Mindfire Homes and Investments and leading it as MD/CEO: clean titles, strategic locations, designed communities." },
  { label: "Skylands", title: "Elevated Living", desc: "Proving Abuja, and Nigeria, can offer world-class living without compromise." },
  { label: "Next", title: "A Piece Of The Future", desc: "Helping more families own land and homes, and building communities where the next generation will thrive." }
];

export function FounderTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-32 md:py-48 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col">
        
        <SectionReveal className="text-center mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            The Evolution of a <span className="italic text-gold">Vision</span>
          </h2>
        </SectionReveal>

        <div className="relative pl-8 md:pl-0" ref={containerRef}>
          
          {/* Timeline Line Track */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-dark/10 md:-translate-x-1/2" />
          
          {/* Timeline Line Fill */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gold md:-translate-x-1/2 origin-top" 
          />

          <div className="flex flex-col space-y-24 py-12">
            {timelineSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Node */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-white border-[2px] border-gold z-10 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-gold opacity-50" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-ivory/50 p-8 rounded-[24px] border border-white"
                    >
                      <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-gold block mb-2">
                        {step.label}
                      </span>
                      <h3 className="font-serif text-2xl text-dark mb-3">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm text-muted font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
