
import { useState } from 'react'
import { motion } from 'motion/react'

const categories = [
  'All',
  'Cloud',
  'DevOps',
  'Development',
  'Databases',
  'Engineering',
]

const skills = [
  {
    name: 'AWS',
    category: 'Cloud',
    description: 'Cloud infrastructure and services',
    status: 'Professional exposure',
  },
  {
    name: 'Oracle Cloud (OCI)',
    category: 'Cloud',
    description: 'Oracle cloud fundamentals and services',
    status: 'Professional exposure',
  },
  {
    name: 'Amazon RDS',
    category: 'Cloud',
    description: 'Managed database environments',
    status: 'Professional exposure',
  },
  {
    name: 'Amazon EFS',
    category: 'Cloud',
    description: 'Shared file storage and mounts',
    status: 'Professional exposure',
  },
  {
    name: 'Amazon S3 & KMS',
    category: 'Cloud',
    description: 'Object storage and encryption',
    status: 'Professional exposure',
  },
  {
    name: 'Terraform',
    category: 'Cloud',
    description: 'Infrastructure as Code',
    status: 'Professional exposure',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    description: 'Containerization and Docker Compose',
    status: 'Hands-on project experience',
  },
  {
    name: 'GitHub Actions',
    category: 'DevOps',
    description: 'Automated CI/CD workflows',
    status: 'Professional exposure',
  },
  {
    name: 'GitHub Container Registry (GHCR)',
    category: 'DevOps',
    description: 'Container image publishing and distribution',
    status: 'Hands-on project experience',
  },
  {
    name: 'Harbor',
    category: 'DevOps',
    description: 'Container image registry receiving images from GHCR',
    status: 'Professional exposure',
  },
  {
    name: 'Kubernetes',
    category: 'DevOps',
    description: 'Container orchestration',
    status: 'Professional exposure',
  },
  {
    name: 'Helm',
    category: 'DevOps',
    description: 'Kubernetes package management',
    status: 'Professional exposure',
  },
  {
    name: 'Argo CD',
    category: 'DevOps',
    description: 'GitOps continuous delivery',
    status: 'Professional exposure',
  },
  {
    name: 'Python',
    category: 'Development',
    description: 'Scripting, automation and application development',
    status: 'Professional exposure',
  },
  {
    name: 'Oracle Database',
    category: 'Databases',
    description: 'Enterprise database environments',
    status: 'Professional exposure',
  },
  {
    name: 'MongoDB',
    category: 'Databases',
    description: 'NoSQL database and Atlas',
    status: 'Hands-on projects',
  },
  {
    name: 'SQL & ADW',
    category: 'Databases',
    description: 'Database querying and analytics warehouse',
    status: 'Professional exposure',
  },
  {
    name: 'Linux',
    category: 'Engineering',
    description: 'Command-line operations and shell scripting',
    status: 'Professional exposure',
  },
  {
    name: 'Electronics',
    category: 'Engineering',
    description: 'Circuit fundamentals and hardware prototyping',
    status: 'Hands-on projects',
  },
  {
    name: 'Robotics',
    category: 'Engineering',
    description: 'Robotic arm and mechatronics projects',
    status: 'Hands-on projects',
  },
]

const statusStyles: Record<string, string> = {
  'Professional exposure':
    'border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-300',
  'Hands-on projects':
    'border-blue-400/20 bg-blue-400/[0.07] text-blue-300',
  'Hands-on project experience':
    'border-blue-400/20 bg-blue-400/[0.07] text-blue-300',
  'Hands-on practice':
    'border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300',
  'Currently learning':
    'border-amber-400/20 bg-amber-400/[0.07] text-amber-300',
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section
      id="skills"
      className="relative border-t border-white/[0.07] bg-[#080b14] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            02 / Technical Arsenal
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            A growing collection of technologies across cloud
            infrastructure, software development, DevOps and
            hardware engineering.
          </p>
        </motion.div>

        {/* Experience legend */}
        <div className="mt-10 flex flex-wrap gap-3">
          {Object.entries(statusStyles).map(([status, style]) => (
            <span
              key={status}
              className={`rounded-full border px-3 py-2 text-xs ${style}`}
            >
              {status}
            </span>
          ))}
        </div>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg border px-4 py-2.5 text-sm transition ${
                activeCategory === category
                  ? 'border-blue-400 bg-blue-500 text-white'
                  : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-blue-400/40 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="group rounded-xl border border-white/[0.08] bg-[#101727] p-5 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-[#131e32]"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-slate-100">
                  {skill.name}
                </h3>

                <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400 opacity-60 transition group-hover:opacity-100" />
              </div>

              <p className="mt-3 min-h-10 text-xs leading-6 text-slate-500">
                {skill.description}
              </p>

              <div className="mt-5 border-t border-white/[0.07] pt-4">
                <span
                  className={`inline-block rounded-md border px-2.5 py-1.5 text-[10px] leading-4 ${statusStyles[skill.status]}`}
                >
                  {skill.status}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-xs text-slate-600">
          Showing {filteredSkills.length} technologies
        </p>

      </div>
    </section>
  )
}