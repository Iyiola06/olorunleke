'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';

export function PersonalStory() {
  const chapters = [
    {
      num: "01",
      title: "The Ground Beneath",
      text: "I have a background in Geology — and that changed how I see everything. While others saw just land, I saw formation, structure, potential. I learned how the earth holds value over time, how location is never accidental, and how what lies beneath determines what can stand above. Without knowing it, I was being trained for real estate.",
      align: "left"
    },
    {
      num: "02",
      title: "From Studying Land To Unlocking Its Value",
      text: "The shift from Geology to real estate wasn't a leap; it was a natural evolution. I moved from studying land to unlocking its value. From there, entrepreneurship took over — the drive to not just work in the industry, but to reshape it.",
      align: "right"
    },
    {
      num: "03",
      title: "Fire In The Name",
      text: "That drive gave birth to Mindfire Homes and Investments. Mindfire was not created just to sell plots and houses. It was created with fire in its name for a reason — to ignite a new standard of modern living in Nigeria. Under my leadership as MD/CEO, we've built it into a brand known for three things: clean, verifiable titles; strategic locations with real appreciation potential; and communities designed for how people actually want to live.",
      align: "left"
    }
  ];

  return (
    <section className="relative py-32 md:py-48 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <SectionReveal className="text-center mb-32">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark leading-tight">
            Trained By The Earth. <br className="hidden md:block" />
            <span className="italic text-gold">Built For Real Estate.</span>
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
