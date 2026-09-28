'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionReveal } from '../SectionReveal';

const shots = [
  {
    img: '/images/jahi-facade.jpg',
    alt: 'Completed Mindfire Homes apartment block in Jahi, Abuja',
    project: 'Jahi, Abuja',
    status: 'Completed',
    detail: '4-bedroom penthouse and 3-bedroom flats, all rooms en-suite.',
  },
  {
    img: '/images/jahi-lounge.jpg',
    alt: 'Interior lounge of a completed Mindfire Homes apartment in Jahi, Abuja',
    project: 'Jahi, Abuja',
    status: 'Interior',
    detail: 'Finished, air-conditioned living space ready for handover.',
  },
  {
    img: '/images/wuye-site.jpg',
    alt: 'Wuye Apartments under construction in Abuja',
    project: 'Wuye Apartments',
    status: 'Under construction, 2021',
    detail: 'Structure up and blockwork done, with flexible payment plans for buyers.',
  },
  {
    img: '/images/wuye-construction.jpg',
    alt: 'Wuye Apartments block with scaffolding in Abuja',
    project: 'Wuye Apartments',
    status: 'Under construction, 2021',
    detail: 'Great road network, balconies and green areas planned in.',
  },
];

export function ProjectGallery() {
  return (
    <section className="relative py-32 px-6 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">

        <SectionReveal className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">On The Ground</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark max-w-3xl">
            Real Sites. Real Buildings. Abuja.
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {shots.map((shot, idx) => (
            <motion.figure
              key={shot.img}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden mb-6 border border-white/40 shadow-[0_20px_40px_rgba(24,24,24,0.05)]">
                <Image
                  src={shot.img}
                  alt={shot.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <figcaption className="flex flex-col px-2">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-gold mb-2">
                  {shot.status}
                </span>
                <h3 className="font-serif text-xl text-dark mb-2">{shot.project}</h3>
                <p className="font-sans text-sm text-muted font-light leading-relaxed">{shot.detail}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

      </div>
    </section>
  );
}
