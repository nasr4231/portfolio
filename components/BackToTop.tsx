'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 420);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-7 z-40 rounded-full bg-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(99,102,241,0.2)] transition ${
        visible ? 'opacity-100 visible' : 'pointer-events-none opacity-0 invisible'
      }`}
    >
      Top
    </button>
  );
}
