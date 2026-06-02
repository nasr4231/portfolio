'use client';

import { motion } from 'framer-motion';

export default function StatsCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 text-center shadow-glow"
    >
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">{label}</p>
    </motion.div>
  );
}
