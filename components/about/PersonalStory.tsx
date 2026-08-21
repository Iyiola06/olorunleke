'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

export function PersonalStory() {
  const chapters = [
    {
      num: "01",
      title: "Foundation",
      text: "The foundation of any great venture is built long before the first brick is laid. It is rooted in discipline, continuous learning, and a relentless commitment to understanding the complexities of the market. Developing a strong entrepreneurial mindset requires the patience to observe and the courage to act.",
      align: "left"
    },
    {
      num: "02",
      title: "Building Value",
      text: "Success is not merely about identifying opportunities; it is about executing with precision. Building true value involves creating solutions that resonate, fostering meaningful relationships, and approaching every partnership with integrity. The focus remains on sustainable growth over short-term gains.",
      align: "right"
    },
    {
      num: "03",
      title: "Future Vision",
      text: "Ambition must be paired with purpose. As we look to the future, the goal is to build ecosystems that generate enduring impact. True legacy is achieved when the platforms and physical spaces we create continue to empower others and elevate the standards of excellence for generations to come.",
      align: "left"
    }
  ];

  return (
    <section className="relative py-32 md:py-48 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <SectionReveal className="text-center mb-32">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark leading-tight">
            More Than Business. <br className="hidden md:block" />
            <span className="italic text-gold">A Mindset.</span>
          </h2>
        </SectionReveal>

        <div className="w-full max-w-4xl flex flex-col space-y-24 md:space-y-40">
          {chapters.map((chapter, index) => {
            const isLeft = chapter.align === 'left';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isLeft ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}
              >
                <div className="flex flex-col w-full md:w-[65%]">
                  <div className={`flex items-center space-x-4 mb-6 ${isLeft ? 'justify-start' : 'justify-start md:justify-end'}`}>
                    <span className="font-serif text-gold text-2xl italic">Chapter</span>
                    <span className="font-sans text-xl font-light text-muted">{chapter.num}</span>
                  </div>
                  
                  <h3 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                    {chapter.title}
                  </h3>
                  
                  <p className="font-sans text-lg text-muted font-light leading-relaxed">
                    {chapter.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
