'use client';

import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { SectionReveal } from '../SectionReveal';
import { MINDFIRE_URL } from '@/lib/site';
import mindfireImage from '../../src/assets/images/luxury_office_space_1787322063551.jpg';
import skylandsImage from '../../src/assets/images/future_architecture_vision_1787321525325.jpg';

type Venture = {
  id: string;
  category: string;
  name: string;
  description: string;
  meta: string;
  image: StaticImageData;
  imageAlt: string;
  cta: { label: string; href: string; external?: boolean };
};

const ventures: Venture[] = [
  {
    id: 'mindfire',
    category: 'Real Estate Development · Abuja',
    name: 'Mindfire Homes and Investments',
    description:
      'Created with fire in its name to ignite a new standard of modern living in Nigeria. Mindfire handles acquisition, due diligence, documentation, infrastructure planning and development end to end — no stories, no stress, just value.',
    meta: 'Role: Founder, MD/CEO',
    image: mindfireImage,
    imageAlt: 'Modern interior representing Mindfire Homes and Investments',
    cta: { label: 'Visit mindfirehomes.com', href: MINDFIRE_URL, external: true },
  },
  {
    id: 'skylands',
    category: 'Flagship Estate · Abuja',
    name: 'Skylands',
    description:
      'A little of heaven on earth. Wide, serene, thoughtfully planned spaces where luxury meets peace, and investment meets legacy — proof that Abuja can offer world-class living without compromise.',
    meta: 'By Mindfire Homes',
    image: skylandsImage,
    imageAlt: 'Contemporary architecture evoking the Skylands estate in Abuja',
    cta: { label: 'Enquire About Skylands', href: '/contact' },
  },
];

const arrow = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export function VentureShowcase() {
  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">

        <SectionReveal className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Featured</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            Ventures
          </h2>
        </SectionReveal>

        <div className="flex flex-col gap-10 md:gap-14">
          {ventures.map((venture, idx) => (
            <article
              key={venture.id}
              id={venture.id}
              className="relative w-full min-h-[640px] md:min-h-[600px] xl:min-h-0 xl:aspect-[21/9] rounded-[40px] overflow-hidden group scroll-mt-32"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.08 }}
                viewport={{ once: false, margin: "100px" }}
                transition={{ duration: 15, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={venture.image}
                  alt={venture.imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>

              {/* Cinematic lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute bottom-6 left-6 right-6 md:bottom-12 md:w-[520px] bg-white/10 backdrop-blur-[40px] border border-white/30 p-8 md:p-10 rounded-[32px] shadow-[0_20px_50px_rgba(24,24,24,0.2)] flex flex-col ${
                  idx % 2 === 0 ? 'md:left-12 md:right-auto' : 'md:right-12 md:left-auto'
                }`}
              >
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold text-gold/90 mb-3">
                  {venture.category}
                </span>

                <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  {venture.name}
                </h3>

                <p className="font-sans text-sm md:text-base text-white/75 font-light leading-relaxed mb-8">
                  {venture.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-white/20">
                  <span className="font-sans text-xs text-white/60 tracking-widest uppercase">{venture.meta}</span>

                  {venture.cta.external ? (
                    <a
                      href={venture.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gold transition-colors duration-300 font-sans text-xs uppercase tracking-widest font-semibold flex items-center space-x-2"
                    >
                      <span>{venture.cta.label}</span>
                      {arrow}
                    </a>
                  ) : (
                    <Link
                      href={venture.cta.href}
                      className="text-white hover:text-gold transition-colors duration-300 font-sans text-xs uppercase tracking-widest font-semibold flex items-center space-x-2"
                    >
                      <span>{venture.cta.label}</span>
                      {arrow}
                    </Link>
                  )}
                </div>
              </motion.div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
