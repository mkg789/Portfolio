import { motion } from 'motion/react'

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/[0.07] bg-[#0a0e19] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            01 / Professional Journey
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Experience &amp; Engineering
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Enterprise application migration, cloud infrastructure,
            database engineering and deployment automation.
            Building practical experience across complex
            technology environments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-white/10 bg-[#101727] p-6 md:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Professional Experience
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Accenture
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Analyst · April 2024 — Present
              </p>
            </div>

            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3">
              <p className="text-xs font-semibold text-emerald-300">
                Associate Software Engineer → Analyst
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Career progression
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
