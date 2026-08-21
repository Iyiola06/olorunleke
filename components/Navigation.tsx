'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

export function Navigation() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Vision', href: '/vision' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4"
      >
        <motion.div 
          layout
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={twMerge(
            clsx(
              "w-full lg:w-[90%] max-w-7xl flex items-center justify-between px-6 transition-all duration-500 rounded-full",
              scrolled || mobileMenuOpen
                ? "py-4 bg-white/55 backdrop-blur-[30px] border border-white/40 shadow-[0_8px_32px_rgba(24,24,24,0.04)]" 
                : "py-6 bg-transparent border border-transparent"
            )
          )}
        >
          <Link href="/" className="font-sans text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-dark z-50 relative">
            Olorunleke Ojuolape
          </Link>
          
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-xs tracking-[0.15em] uppercase text-dark hover:text-gold transition-colors font-medium">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <motion.a 
              href="#partner"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative inline-flex items-center justify-center px-6 py-3 font-sans text-xs font-semibold tracking-widest uppercase bg-white/40 backdrop-blur-md border border-white/60 text-dark rounded-full overflow-hidden hover:bg-white hover:border-gold hover:shadow-[0_0_15px_rgba(200,169,106,0.15)] transition-all duration-300"
            >
              <span className="relative z-10">Partner With Me</span>
            </motion.a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 z-50 relative"
            aria-label="Toggle menu"
          >
            <motion.div 
              animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-dark" 
            />
            <motion.div 
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[1.5px] bg-dark" 
            />
            <motion.div 
              animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-dark" 
            />
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory/95 backdrop-blur-md flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-3xl text-dark hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-8"
              >
                <a 
                  href="#partner"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-semibold tracking-widest uppercase bg-dark text-white rounded-full"
                >
                  Partner With Me
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
