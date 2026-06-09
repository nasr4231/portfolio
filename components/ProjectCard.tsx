'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  demo,
}: {
  title: string;
  description: string;
  tech: string;
  image: string;
  github: string;
  demo: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      className="section-card overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-glow"
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-52 w-full object-cover transition duration-500 hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            {description}
          </p>
        </div>

        <p className="text-sm text-slate-400">
          Tech: {tech}
        </p>

        <div className="flex flex-wrap gap-3 pt-3">
          <a
            href={github}
            target="_blank"
            className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 transition hover:bg-violet-500/15"
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            className="rounded-full border border-slate-500/20 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-300/40 hover:text-violet-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}