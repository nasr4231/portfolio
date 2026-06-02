import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mb-8 max-w-2xl"
    >
      <p className="font-mono text-sm uppercase tracking-[0.35em] text-violet-300/80">{subtitle}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
