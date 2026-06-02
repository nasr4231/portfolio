'use client';

import { motion } from 'framer-motion';

const stars = (rating: number) => Array.from({ length: 5 }, (_, i) => i < rating);

export default function SkillCard({ title, rating, description }: { title: string; rating: number; description: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="section-card group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow transition hover:-translate-y-1 hover:border-violet-300/30"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-300">{description}</p>
        </div>
        <div className="rounded-3xl bg-violet-500/10 px-3 py-2 text-sm font-semibold text-violet-300">{rating}/5</div>
      </div>
      <div className="mt-6 space-y-3">
        <div className="h-2 rounded-full bg-slate-800">
          <div className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500" style={{ width: `${rating * 20}%` }} />
        </div>
        <div className="flex items-center gap-1">
          {stars(rating).map((filled, idx) => (
            <span key={idx} className={`text-lg ${filled ? 'text-violet-300' : 'text-white/30'}`}>
              ★
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
