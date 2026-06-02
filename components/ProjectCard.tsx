'use client';

import { motion } from 'framer-motion';

export default function ProjectCard({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      className="section-card overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-glow"
    >
      <div className="relative overflow-hidden bg-slate-950">
        <div className="h-52 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),_transparent_55%),linear-gradient(180deg,_rgba(15,23,42,0.9),_rgba(15,23,42,0.9))]" />
        <div className="absolute inset-0 flex items-end justify-start p-5">
          <span className="rounded-3xl bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">UI / Dashboard</span>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
        </div>
        <p className="text-sm text-slate-400">Tech: {tech}</p>
        <div className="flex flex-wrap gap-3 pt-3">
          <a
            href="#"
            className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 transition hover:bg-violet-500/15"
          >
            GitHub
          </a>
          <a
            href="#"
            className="rounded-full border border-slate-500/20 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-300/40 hover:text-violet-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
