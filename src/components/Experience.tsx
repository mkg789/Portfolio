
import { motion } from 'motion/react'
import {
  Cloud,
  Database,
  GitBranch,
  Workflow,
  Terminal,
  Boxes,
  CheckCircle2,
  Clock3,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'PSM — Application Migration & Deployment Automation',
    category: 'APPLICATION MIGRATION / DEVOPS',
    duration: '346 days',
    description:
      'Supported migration of PSM application components to new environments, covering online and batch processing. Worked on modernizing legacy deployment workflows and automating application deployments.',
    contributions: [
      'Migrated legacy deployment pipeline scripts from HP-UX to Linux.',
      'Worked on package generation, database comparison, archiving and installation workflows.',
      'Automated batch application deployments using GitHub Actions.',
      'Supported online application deployments using Helm and Argo CD.',
      'Configured and troubleshot Linux environments and application dependencies.',
      'Supported regression testing and infrastructure troubleshooting.',
    ],
    technologies: [
      'HP-UX',
      'Linux',
      'GitHub Actions',
      'Kubernetes',
      'Helm',
      'Argo CD',
    ],
    icon: Workflow,
    highlight: 'Deployment automation & GitOps',
  },
  {
    number: '02',
    title: 'Cross-Account Oracle Database & AWS Environment Migration',
    category: 'CLOUD INFRASTRUCTURE / DATABASE MIGRATION',
    duration: '334 days',
    description:
      'Worked on AWS environment migration involving Oracle Database infrastructure, cross-account backup transfers, database restoration and application environment configuration.',
    contributions: [
      'Provisioned and configured AWS EC2 instances for Oracle database deployment.',
      'Installed and configured Oracle Database 19c.',
      'Transferred RMAN backup files between AWS accounts using Amazon S3.',
      'Restored three Oracle databases and validated their functionality.',
      'Configured Linux users, shell profiles, permissions and shared storage.',
      'Configured Amazon EFS for application and database environments.',
      'Updated tnsnames.ora configurations and recreated Oracle database links.',
      'Troubleshot database connectivity, application dependencies and post-migration issues.',
    ],
    technologies: [
      'AWS EC2',
      'Amazon S3',
      'Amazon EFS',
      'Oracle Database 19c',
      'RMAN',
      'Linux',
    ],
    icon: Database,
    highlight: 'Three databases restored and validated',
  },
]

const deploymentPaths = [
  {
    title: 'Batch deployment',
    subtitle: 'Automated deployment workflow',
    steps: [
      'Application changes',
      'GitHub Actions',
      'Batch deployment',
    ],
    icon: Workflow,
  },
  {
    title: 'Online deployment',
    subtitle: 'Helm and GitOps-based deployment',
    steps: [
      'Deployment configuration',
      'Helm',
      'Argo CD',
      'Kubernetes environment',
    ],
    icon: Boxes,
  },
]

const techCategories = [
  {
    title: 'Cloud Infrastructure',
    icon: Cloud,
    items: ['AWS EC2', 'Amazon S3', 'Amazon EFS'],
  },
  {
    title: 'Database Engineering',
    icon: Database,
    items: ['Oracle 19c', 'RMAN', 'Database Links', 'tnsnames.ora'],
  },
  {
    title: 'DevOps & Deployment',
    icon: GitBranch,
    items: ['GitHub Actions', 'Helm', 'Argo CD', 'Kubernetes'],
  },
  {
    title: 'Systems & Operating Environments',
    icon: Terminal,
    items: ['Linux', 'HP-UX', 'Shell Configuration', 'Permissions'],
  },
]

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#101727]"
    >
      <div className="border-b border-white/[0.07] p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
              <Icon size={21} className="text-blue-400" />
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-400">
                ACCENTURE / PROJECT {project.number}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {project.category}
              </p>
            </div>
          </div>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400">
            {project.duration}
          </span>
        </div>

        <h3 className="mt-7 max-w-3xl text-xl font-bold leading-snug text-white md:text-2xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-blue-400/20 bg-blue-400/[0.06] px-3 py-2 text-xs font-medium text-blue-300">
          <CheckCircle2 size={14} />
          {project.highlight}
        </div>
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-[1.3fr_0.7fr] md:p-8">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
            Technical contributions
          </h4>

          <ul className="mt-5 space-y-4">
            {project.contributions.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
            Technology environment
          </h4>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
            <p className="text-xs font-semibold text-slate-300">
              My contribution
            </p>
            <p className="mt-2 text-xs leading-6 text-slate-500">
              Technical implementation, deployment support,
              environment configuration and troubleshooting
              within the project scope.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function DeploymentSpotlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 overflow-hidden rounded-2xl border border-blue-400/20 bg-[#101727]"
    >
      <div className="border-b border-white/[0.07] p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Technical Spotlight
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Kubernetes & GitOps
            </h3>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-3 py-2 text-xs font-medium text-amber-300">
            <Clock3 size={14} />
            Automation in progress
          </span>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
          Working with Kubernetes-based application deployment
          workflows through Helm and Argo CD. Currently developing
          deployment automation for an environment as part of
          ongoing engineering work.
        </p>
      </div>

      <div className="p-6 md:p-8">
        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
          Deployment workflow overview
        </h4>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {deploymentPaths.map((path) => {
            const Icon = path.icon

            return (
              <div
                key={path.title}
                className="rounded-xl border border-white/[0.08] bg-[#0b1220] p-5"
              >
                <div className="flex items-center gap-3">
                  <Icon size={19} className="text-blue-400" />
                  <div>
                    <h5 className="font-semibold text-white">
                      {path.title}
                    </h5>
                    <p className="mt-1 text-xs text-slate-500">
                      {path.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  {path.steps.map((step, index) => (
                    <div key={step}>
                      <div className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.025] px-4 py-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-[10px] font-bold text-blue-300">
                          {index + 1}
                        </span>
                        <span className="text-sm text-slate-300">
                          {step}
                        </span>
                      </div>

                      {index !== path.steps.length - 1 && (
                        <div className="ml-6 h-3 border-l border-blue-400/30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {[
            {
              name: 'Kubernetes',
              description: 'Workload and deployment environment',
            },
            {
              name: 'Helm',
              description: 'Application deployment packaging',
            },
            {
              name: 'Argo CD',
              description: 'GitOps-based deployment synchronization',
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-white/[0.07] p-4"
            >
              <p className="font-semibold text-slate-200">
                {item.name}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-slate-500">
          The automation initiative is ongoing. This overview
          describes the technologies and workflows involved,
          not a claim that end-to-end automation is already complete.
        </p>
      </div>
    </motion.div>
  )
}

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
            Experience & Engineering
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Enterprise application migration, cloud infrastructure,
            database engineering and deployment automation.
            Building practical experience across complex
            technology environments.
          </p>
        </motion.div>

        {/* Employment summary */}
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

        {/* Enterprise case studies */}
        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Enterprise Project Experience
          </p>

          <div className="mt-7 space-y-7">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </div>

        {/* Kubernetes spotlight */}
        <DeploymentSpotlight />

        {/* Technology environment */}
        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Engineering Environment
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            Technologies across my projects
          </h3>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techCategories.map((category) => {
              const Icon = category.icon

              return (
                <div
                  key={category.title}
                  className="rounded-xl border border-white/[0.08] bg-[#101727] p-5 transition hover:border-blue-400/30"
                >
                  <Icon size={22} className="text-blue-400" />

                  <h4 className="mt-4 font-semibold text-slate-200">
                    {category.title}
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-2 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
