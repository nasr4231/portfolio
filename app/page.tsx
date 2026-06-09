'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import SectionHeading from '@/components/SectionHeading';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';
import ContactCard from '@/components/ContactCard';
import BackToTop from '@/components/BackToTop';
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import { fadeIn, fadeInUp, staggerChildren } from '@/lib/motion';

const stats = [
  { label: 'Projects Completed', value: '1' },
  { label: 'Technologies Learned', value: '6+' },
  { label: 'Experience Level', value: 'fresh' },
];

const skills = [
  { title: 'HTML', rating: 4, description: 'Semantic layouts for modern interfaces' },
  { title: 'CSS', rating: 4, description: 'Responsive design and animation systems' },
  { title: 'JavaScript', rating: 4, description: 'Interactive UI and logic with ESNext' },
  { title: 'TypeScript', rating: 3, description: 'Typed builds for scalable applications' },
  { title: 'React', rating: 4, description: 'Component-driven architecture and hooks' },
  { title: 'Next.js', rating: 3, description: 'App Router, SSR and optimized builds' },
  { title: 'Tailwind', rating: 4, description: 'Utility-first styling with design system flow' },
  { title: 'Git/GitHub', rating: 3, description: 'Version control, pull requests and collaboration' },
];

const projects = [
  {
    title: 'Calculator App',
    description:
      'Modern calculator built with TypeScript and Tailwind CSS with responsive UI and smooth interactions.',
    tech: 'TypeScript • Tailwind',
    image: '/calc_project.jpg',
    github: 'https://github.com/nasr4231/calculator',
    demo: '#',
  },

  {
    title: 'Galaxy Analytics',
    description:
      'A premium dashboard built for modern marketing teams.',
    tech: 'Next.js • Tailwind • Framer Motion',
    image: '/project2.png',
    github: '#',
    demo: '#',
  },

  {
    title: 'Crypto Ledger',
    description:
      'A vibrant portfolio tracker for digital assets and insights.',
    tech: 'React • TypeScript • Chart.js',
    image: '/project3.png',
    github: '#',
    demo: '#',
  },
];

const socials = [
  { label: 'GitHub', href: '#', emoji: '🐙' },
  { label: 'LinkedIn', href: '#', emoji: '💼' },
  { label: 'Facebook', href: '#', emoji: '📘' },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-20">
      <LoadingScreen />
      <CustomCursor />
      <NavBar />
      <section id="home" className="relative overflow-hidden bg-hero-gradient pt-28 pb-20">
        <div className="container grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerChildren} className="space-y-8">
            <motion.h1 variants={fadeInUp} className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Hi, I’m <span className="text-violet-300">Ahmed</span>, Front-End Developer.
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-xl text-lg leading-8 text-slate-300">
              I build modern web experiences with React and Next.js, focused on polished interactions, fast performance, and great user experience.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/15 transition hover:bg-violet-400">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-violet-300/40 hover:text-violet-300">
                Contact Me
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:bg-white/10">
                Download CV
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md rounded-[2.5rem] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-xl"
          >
            <div className="absolute -left-10 top-12 h-14 w-14 rounded-full bg-violet-300/15 blur-2xl" />
            <div className="absolute -right-10 top-24 h-14 w-14 rounded-full bg-cyan-300/10 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-4">
              <Image
                src='/profile_pic.jpg'
                alt="Profile placeholder"
                width={520}
                height={520}
                className="h-auto w-full rounded-[2rem]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="container pt-20">
        <SectionHeading title="About Me" subtitle="Who am I" />
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow"
          >
            <p className="text-lg leading-8 text-slate-300">
              I’m a front-end developer who creates premium digital products with pixel-perfect execution. I love turning clean interfaces into scalable and responsive experiences using modern tools and strong visual design.
            </p>
            <p className="text-base leading-7 text-slate-400">
              My development style is detail-oriented, with a focus on performance, accessibility, and motion. I enjoy collaborating with teams, shipping polished UI, and maintaining organized project structure across every build.
            </p>
          </motion.div>
          <div className="grid gap-5">
            {stats.map((item) => (
              <StatsCard key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="container pt-24">
        <SectionHeading title="Skills & Toolkit" subtitle="What I excel at" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.title} title={skill.title} rating={skill.rating} description={skill.description} />
          ))}
        </div>
      </section>

      <section id="projects" className="container pt-24">
        <SectionHeading title="Featured Projects" subtitle="Recent work" />
        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              github={project.github}
              demo={project.demo} />
          ))}
        </div>
      </section>

      <section id="contact" className="container pt-24 pb-24">
        <SectionHeading title="Contact" subtitle="Let’s collaborate" />
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            onSubmit={(event) => event.preventDefault()}
            className="section-card rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow"
          >
            <div className="grid gap-5 lg:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input type="text" placeholder="Your name" className="w-full px-4 py-3" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-3" />
              </label>
            </div>
            <label className="mt-5 block space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea rows={6} placeholder="Tell me about your project" className="w-full px-4 py-3" />
            </label>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
              Send Message
            </button>
          </motion.form>

          <div className="grid gap-5">
            <ContactCard title="Email" value="ahmednasr74231@gmail.com" icon="✉️" />
            <ContactCard title="Location" value="Alexandria, Egypt" icon="📍" />
            <div className="section-card rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Stay connected</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:border-violet-300/40 hover:text-violet-300"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-surface/80 py-8 text-center text-sm text-slate-400">
        <div className="container">
          <p>© 2026 Ahmed Nasr. Crafted with Next.js, Tailwind, and Framer Motion.</p>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}
