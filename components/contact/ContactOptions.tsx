'use client';

import { motion } from 'motion/react';
import { SectionReveal } from '../SectionReveal';
import { Mail, Linkedin, Instagram, Briefcase } from 'lucide-react';
import { CONTACT_EMAIL, LINKEDIN_URL, INSTAGRAM_URL, MINDFIRE_URL } from '@/lib/site';

export function ContactOptions() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <SectionReveal className="mb-20 flex flex-col items-center text-center">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold">Ecosystem</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            Connect With Olorunleke
          </h2>
        </SectionReveal>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Email */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-full bg-ivory/50 backdrop-blur-[30px] border border-white/60 rounded-[32px] p-10 flex flex-col items-center text-center transition-all duration-400 hover:-translate-y-[12px] hover:shadow-[0_30px_60px_rgba(24,24,24,0.04)] group">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-dark/5 shadow-sm mb-8 group-hover:border-gold/30 transition-colors duration-400">
                <Mail className="w-6 h-6 text-dark/60 group-hover:text-gold transition-colors duration-400" />
              </div>
              
              <h3 className="font-serif text-2xl text-dark mb-4">Direct Email</h3>
              <p className="font-sans text-sm text-muted font-light mb-8 max-w-[220px]">
                For formal enquiries, direct proposals, and professional correspondence.
              </p>
              
              <p className="font-sans text-xs text-dark mb-8 tracking-wider font-medium break-all">
                {CONTACT_EMAIL}
              </p>
              
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-auto px-6 py-3 w-full border border-dark/20 rounded-full font-sans text-xs uppercase tracking-widest font-semibold text-dark hover:bg-dark hover:text-white transition-colors duration-300"
              >
                Send Email
              </a>
            </div>
          </motion.div>

          {/* Card 2: Strategic Partnerships */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-full bg-ivory/50 backdrop-blur-[30px] border border-white/60 rounded-[32px] p-10 flex flex-col items-center text-center transition-all duration-400 hover:-translate-y-[12px] hover:shadow-[0_30px_60px_rgba(24,24,24,0.04)] group">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-dark/5 shadow-sm mb-8 group-hover:border-gold/30 transition-colors duration-400">
                <Briefcase className="w-6 h-6 text-dark/60 group-hover:text-gold transition-colors duration-400" />
              </div>
              
              <h3 className="font-serif text-2xl text-dark mb-4">Invest With Mindfire</h3>
              <p className="font-sans text-sm text-muted font-light mb-8 max-w-[220px]">
                Land, homes, Skylands enquiries and joint ventures with Mindfire Homes and Investments.
              </p>
              
              <p className="font-sans text-xs text-dark mb-8 tracking-wider font-semibold uppercase text-gold">
                Mindfire Homes
              </p>
              
              <div className="mt-auto w-full flex flex-col gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Mindfire%20Investment%20Enquiry`}
                  className="px-6 py-3 w-full border border-dark/20 rounded-full font-sans text-xs uppercase tracking-widest font-semibold text-dark hover:bg-dark hover:text-white transition-colors duration-300"
                >
                  Enquire By Email
                </a>
                <a
                  href={MINDFIRE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] uppercase tracking-widest font-semibold text-muted hover:text-gold transition-colors duration-300"
                >
                  mindfirehomes.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-full bg-ivory/50 backdrop-blur-[30px] border border-white/60 rounded-[32px] p-10 flex flex-col items-center text-center transition-all duration-400 hover:-translate-y-[12px] hover:shadow-[0_30px_60px_rgba(24,24,24,0.04)] group">
              
              <h3 className="font-serif text-2xl text-dark mb-4 mt-2">Social Network</h3>
              <p className="font-sans text-sm text-muted font-light mb-10 max-w-[220px]">
                Follow the leadership journey, industry insights, and professional network.
              </p>
              
              <div className="flex items-center space-x-4 mb-8 mt-auto">
                <a 
                  href={LINKEDIN_URL} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md border border-dark/5 flex items-center justify-center hover:-translate-y-1 hover:bg-white hover:border-gold/50 transition-all duration-300 group/icon shadow-sm"
                >
                  <Linkedin className="w-5 h-5 text-dark/50 group-hover/icon:text-gold transition-colors duration-300" />
                </a>
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md border border-dark/5 flex items-center justify-center hover:-translate-y-1 hover:bg-white hover:border-gold/50 transition-all duration-300 group/icon shadow-sm"
                >
                  <Instagram className="w-5 h-5 text-dark/50 group-hover/icon:text-gold transition-colors duration-300" />
                </a>
              </div>
              
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}

