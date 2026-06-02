'use client';

import { motion } from 'framer-motion';

export default function ContactCard({
  title,
  value,
  icon
}: {
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="section-card flex items-start gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/15 text-2xl text-violet-300">{icon}</div>
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{title}</p>
        <p className="mt-2 text-lg font-semibold text-white">{value}</p>
      </div>
    </motion.div>
  );
}
