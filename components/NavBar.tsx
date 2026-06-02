'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);
    console.log("home:", document.getElementById("home"));
    console.log("about:", document.getElementById("about"));
    console.log("skills:", document.getElementById("skills"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 z-40 w-full border-b border-white/10 bg-surface/95 backdrop-blur-xl"
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white">
          NASR<span className="text-violet-300">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition hover:text-violet-300 ${active === item.href.slice(1) ? 'text-violet-300' : 'text-slate-300'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-violet-300/40 hover:text-violet-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-surface/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block rounded-2xl px-4 py-3 transition ${active === item.href.slice(1) ? 'bg-violet-500/10 text-violet-200' : 'text-slate-300 hover:bg-white/5'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
