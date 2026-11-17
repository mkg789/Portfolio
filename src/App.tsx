

import { useState } from 'react'

import { motion } from 'motion/react'

import {
  ArrowDown,
  ArrowRight,
  Mail,
  Menu,
  X,
  Terminal,
  Code2,
  Cloud,
  Cpu,
} from 'lucide-react'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import Experience from './components/Experience'

import Skills from './components/Skills'

import Projects from './components/Projects'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-slate-100">

      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-150px] top-[500px] h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)',
            backgroundSize: '55px 55px',
          }}
        />
      </div>

      {/* Navigation */}
      <header className="relative z-20 border-b border-white/[0.07]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <a href="#home" className="text-xl font-bold tracking-tight">
            MKG<span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:muralikrishnag2001@gmail.com"
            className="hidden items-center gap-2 rounded-lg border border-blue-400/30 px-4 py-2 text-sm text-blue-300 transition hover:bg-blue-500/10 md:flex"
          >
            Let's Connect <ArrowRight size={15} />
          </a>

          <button
            className="text-slate-200 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0c1120] px-6 py-5 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-slate-300 hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24 lg:px-10"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              SOFTWARE ENGINEER · INDIA
            </div>

            <p className="mb-4 text-lg text-slate-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Murali Krishna
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                G.
              </span>
            </h1>

            <h2 className="mt-7 text-xl font-medium text-slate-300 sm:text-2xl">
              Building Software. Automating Infrastructure.
              <span className="block text-slate-500">
                Exploring Engineering.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
              Software engineer with 2+ years of IT experience,
              working across cloud infrastructure, application
              development and automation. Passionate about building
              practical solutions that connect software and engineering.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-lg bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Explore My Work
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </a>

              <a
                href="https://drive.google.com/file/d/1KhYwiAUX4g0NK12eD4g3evjz9EH2oQ0j/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-blue-400/50 hover:text-white"
              >
                View Resume
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <a
                href="https://github.com/mkg789"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 transition hover:text-white"
              >
                <FaGithub size={21} />
              </a>
              <a
                href="https://www.linkedin.com/in/murali-krishna-g-195832256/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 transition hover:text-blue-400"
              >
                <FaLinkedinIn size={21} />
              </a>
              <a
                href="mailto:muralikrishnag2001@gmail.com"
                aria-label="Email"
                className="text-slate-500 transition hover:text-blue-400"
              >
                <Mail size={21} />
              </a>
            </div>
          </motion.div>

          {/* Engineering identity panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-5 rounded-3xl bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-2xl border border-white/10 bg-[#101727]/90 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">

              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-2">
                  <Terminal size={17} className="text-blue-400" />
                  <span className="text-sm font-medium text-slate-300">
                    engineering.profile
                  </span>
                </div>
                <span className="text-xs text-slate-600">v2.0</span>
              </div>

              <div className="space-y-7">
                {[
                  {
                    icon: Code2,
                    title: 'Application Development',
                    desc: 'React · TypeScript · Python · Java',
                    color: 'text-blue-400',
                  },
                  {
                    icon: Cloud,
                    title: 'Cloud & DevOps',
                    desc: 'AWS · Docker · CI/CD · GitOps',
                    color: 'text-cyan-400',
                  },
                  {
                    icon: Cpu,
                    title: 'Engineering & Robotics',
                    desc: 'Electronics · Embedded Systems',
                    color: 'text-indigo-400',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <item.icon size={21} className={item.color} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-200">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-6 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-9 rounded-xl border border-blue-400/10 bg-blue-400/[0.05] p-4">
                <p className="font-mono text-xs text-blue-300">
                  &gt; Always building. Always learning.
                  <span className="ml-1 inline-block h-3 w-1 animate-pulse bg-blue-400" />
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-5 -z-10 h-28 w-28 rounded-full border border-blue-400/20" />
          </motion.div>

        </div>
      </section>

      {/* Quick introduction */}
      <section id="about" className="relative z-10 border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-3 lg:px-10">

          {[
            { value: '2+', label: 'Years in IT', detail: 'Professional experience' },
            { value: 'Full Stack', label: 'Development', detail: 'Building end-to-end applications' },
            { value: 'Cloud + DevOps', label: 'Engineering', detail: 'Infrastructure and automation' },
          ].map((stat) => (
            <div key={stat.label}>
              <h3 className="text-2xl font-bold text-blue-400">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-200">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {stat.detail}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Experience */}
      <Experience />
      <Skills />
      <Projects />

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
          04 / Get In Touch
        </p>
        <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
          Let's build something
          <span className="block text-blue-400">meaningful.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
          Have an opportunity, an interesting project or an engineering
          idea? Let's connect.
        </p>
        <a
          href="mailto:muralikrishnag2001@gmail.com"
          className="mt-9 inline-flex items-center gap-3 rounded-lg bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
        >
          Get in touch <ArrowRight size={17} />
        </a>
      </section>

      <footer className="relative z-10 border-t border-white/[0.07] px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-slate-600 sm:flex-row lg:px-4">
          <p>© {new Date().getFullYear()} Murali Krishna G. All rights reserved.</p>
          <p>Designed & built with React, TypeScript and Tailwind CSS.</p>
        </div>
      </footer>

    </main>
  )
}

export default App
