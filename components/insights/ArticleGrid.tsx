'use client';

import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { SectionReveal } from '../SectionReveal';

import imgRealEstate from '../../src/assets/images/insight_real_estate_1787331931515.jpg';
import imgLeadership from '../../src/assets/images/insight_leadership_1787331946040.jpg';
import imgInnovation from '../../src/assets/images/insight_innovation_1787331967045.jpg';

const articles = [
  {
    title: "Navigating Market Cycles in Real Estate",
    category: "Real Estate",
    excerpt: "Understanding the underlying indicators that signal market shifts and how to position portfolios for resilience.",
    readTime: "6 min read",
    date: "Aug 15, 2026",
    image: imgRealEstate,
    slug: "#"
  },
  {
    title: "The Psychology of Executive Decision Making",
    category: "Leadership",
    excerpt: "How the best leaders manage risk, uncertainty, and cognitive bias when making critical business choices.",
    readTime: "8 min read",
    date: "Jul 22, 2026",
    image: imgLeadership,
    slug: "#"
  },
  {
    title: "Fostering an Innovation Mindset",
    category: "Entrepreneurship",
    excerpt: "Why true innovation requires structured thinking, disciplined environments, and the courage to fail strategically.",
    readTime: "5 min read",
    date: "Jun 10, 2026",
    image: imgInnovation,
    slug: "#"
  }
];

export function ArticleGrid() {
  return (
    <section className="relative py-32 px-6 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <SectionReveal className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Latest</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            Recent Perspectives
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <ArticleCard key={idx} article={article} index={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

function ArticleCard({ article, index }: { article: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={article.slug} className="block h-full group">
        <div className="h-full bg-white/65 backdrop-blur-[30px] border border-white/45 p-4 rounded-[32px] flex flex-col transition-all duration-500 hover:-translate-y-[12px] hover:shadow-[0_40px_80px_rgba(200,169,106,0.1)] overflow-hidden">
          
          {/* Image Container */}
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6">
            <motion.div
              className="absolute inset-0 w-full h-full"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full">
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-bold text-dark">
                {article.category}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col flex-grow px-4 pb-4">
            <h3 className="font-serif text-2xl text-dark mb-4 group-hover:text-gold transition-colors duration-400">
              {article.title}
            </h3>
            
            <p className="font-sans text-sm text-muted font-light leading-relaxed mb-8 flex-grow">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between border-t border-dark/5 pt-4">
              <div className="flex items-center space-x-4">
                <span className="font-sans text-[10px] text-muted tracking-wider uppercase">{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-gold/50" />
                <span className="font-sans text-[10px] text-muted tracking-wider uppercase">{article.readTime}</span>
              </div>
              
              <div className="w-8 h-8 rounded-full border border-dark/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-400">
                <svg className="w-3 h-3 text-dark/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
          
        </div>
      </Link>
    </motion.div>
  );
}
