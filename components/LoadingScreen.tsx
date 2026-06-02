'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/95 backdrop-blur-lg">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/15 shadow-glow">
          <div className="h-12 w-12 animate-spin rounded-full border border-r-transparent border-white/60" />
        </div>
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Welcome</p>
      </div>
    </div>
  );
}
