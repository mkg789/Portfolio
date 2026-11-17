
import { motion } from 'motion/react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  GitBranch,
  Workflow,
  Container,
  Cpu,
  Code2,
  ExternalLink,
  Database,
  Boxes,
  Server,
  Terminal,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const featuredProject = {
  title: 'End-to-End DevOps Implementation',
  description:
    'Objective: demonstrate a working end-to-end CI/CD and GitOps workflow by deploying ElectronicsWeb, a separate full-stack e-commerce application.',
  github: 'https://github.com/mkg789/Devops_Proj1',
  live: 'https://electronics-web-cl4o.vercel.app/',
  technologies: [
    'Git',
    'GitHub Actions',
    'Docker',
    'GitHub Container Registry (GHCR)',
    'Harbor',
    'WSL 2 Self-hosted Runner',
    'Helm',
    'Argo CD',
    'Kubernetes',
    'Minikube',
    'MongoDB Atlas',
  ],
}

const otherProjects = [
  {
    title: 'ElectronicsWeb – Full-Stack E-commerce Application',
    category: 'FULL-STACK DEVELOPMENT',
    description:
      'An electronics storefront with sign-up/login, product browsing and search, cart and wishlist management, checkout, and order history. It uses a React and Vite frontend, Node.js and Express backend, and MongoDB Atlas, separate from the DevOps deployment workflow.',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB Atlas'],
    github: 'https://github.com/mkg789/ElectronicsWeb',
    live: 'https://electronics-web-cl4o.vercel.app/',
    icon: Code2,
  },
  {
    title: 'Robotic Arm',
    category: 'ROBOTICS & ENGINEERING',
    description:
      'A hands-on robotics project combining mechanical construction, electronics and software-controlled movement.',
    technologies: ['Electronics', 'Robotics', 'Embedded Systems'],
    github: 'https://github.com/mkg789/Robotic-Arm',
    icon: Cpu,
  },
  {
    title: 'Linux Engineering',
    category: 'SYSTEMS & AUTOMATION',
    description:
      'Practical Linux command-line learning and shell scripting, covering process management, file operations and system automation.',
    technologies: ['Linux', 'Bash', 'Shell Scripting'],
    github: 'https://github.com/mkg789',
    icon: Terminal,
  },
  {
    title: 'CLI Based Chat Tool',
    category: 'APPLICATION DEVELOPMENT',
    description:
      'A command-line chat application built to explore communication and application development.',
    technologies: ['Python', 'CLI', 'Networking'],
    github: 'https://github.com/mkg789/CLI_based_Chat_tool',
    icon: Code2,
  },
]

function FlowArrow() {
  return (
    <div className="flex justify-center py-2 lg:px-1 lg:py-0">
      <ArrowDown size={17} className="text-blue-400/70 lg:hidden" />
      <ArrowRight size={17} className="hidden text-blue-400/70 lg:block" />
    </div>
  )
}

function ArchitectureNode({
  icon: Icon,
  title,
  subtitle,
  tag,
  color = 'blue',
}: {
  icon: React.ElementType
  title: string
  subtitle: string
  tag?: string
  color?: 'blue' | 'green' | 'orange' | 'purple'
}) {
  const colors = {
    blue: 'border-blue-400/20 bg-blue-400/[0.06] text-blue-400',
    green: 'border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-400',
    orange: 'border-orange-400/20 bg-orange-400/[0.06] text-orange-400',
    purple: 'border-purple-400/20 bg-purple-400/[0.06] text-purple-400',
  }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#101727] p-3 transition hover:border-blue-400/30">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${colors[color]}`}>
        <Icon size={19} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-200">
          {title}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          {subtitle}
        </p>
      </div>

      {tag && (
        <span className={`hidden rounded-md border px-2 py-1 text-[9px] font-semibold sm:block ${colors[color]}`}>
          {tag}
        </span>
      )}
    </div>
  )
}

function Architecture() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0b1220] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            System Architecture
          </p>
          <h4 className="mt-2 text-lg font-bold text-white">
            CI/CD & GitOps Workflow
          </h4>
        </div>

        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-[10px] font-semibold text-emerald-300">
          END-TO-END WORKING
        </span>
      </div>

      <div className="mt-7 grid gap-5">
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 md:p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Image distribution
            </p>
            <p className="mt-1 text-xs text-slate-500">
              GitHub Actions builds the frontend and backend Docker images.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            <ArchitectureNode
              icon={Workflow}
              title="GitHub Actions"
              subtitle="Builds frontend and backend images"
              tag="CI"
            />
            <FlowArrow />
            <ArchitectureNode
              icon={Container}
              title="GitHub Container Registry"
              subtitle="Receives the built images"
              tag="GHCR"
              color="purple"
            />
            <FlowArrow />
            <ArchitectureNode
              icon={Boxes}
              title="Harbor"
              subtitle="Receives images from GHCR"
              tag="REGISTRY"
              color="orange"
            />
          </div>
        </div>

        <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 md:p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              GitOps deployment
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Helm and the GitOps repository manage deployment configuration and image versions.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center">
            <ArchitectureNode
              icon={Terminal}
              title="WSL 2 Self-hosted Runner"
              subtitle="Runs the deployment workflow"
              color="blue"
            />
            <FlowArrow />
            <ArchitectureNode
              icon={GitBranch}
              title="Helm / GitOps Repository"
              subtitle="Manages configuration and image versions"
              color="purple"
            />
            <FlowArrow />
            <ArchitectureNode
              icon={GitBranch}
              title="Argo CD"
              subtitle="Synchronizes desired state from Git"
              tag="GITOPS"
              color="purple"
            />
          </div>

          <div className="flex justify-center py-2">
            <ArrowDown size={17} className="text-blue-400/70" />
          </div>

          <div className="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_auto_minmax(220px,0.6fr)] lg:items-center">
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.035] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                  <Server size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white">
                    Minikube Kubernetes Cluster
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    ElectronicsWeb workloads
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-white/[0.08] bg-[#101727] p-3">
                  <p className="text-xs font-semibold text-slate-200">
                    Frontend
                  </p>
                  <p className="mt-1 text-sm font-bold text-emerald-400">
                    3 replicas
                  </p>
                </div>
                <div className="rounded-lg border border-white/[0.08] bg-[#101727] p-3">
                  <p className="text-xs font-semibold text-slate-200">
                    Backend
                  </p>
                  <p className="mt-1 text-sm font-bold text-emerald-400">
                    1 replica
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-slate-500">
                    Connects to MongoDB Atlas
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 py-2 lg:py-0">
              <ArrowDown size={17} className="text-emerald-400/70 lg:hidden" />
              <ArrowRight size={17} className="hidden text-emerald-400/70 lg:block" />
              <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                Backend connection
              </span>
            </div>

            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.04] p-4">
              <div className="flex items-center gap-3">
                <Database size={19} className="shrink-0 text-emerald-400" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-200">
                    MongoDB Atlas
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-slate-500">
                    External database used by the backend
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-[10px] leading-5 text-slate-500">
            Helm configuration references image versions available through the separate GHCR → Harbor distribution flow; Argo CD synchronizes the GitOps desired state into Minikube.
          </p>
        </div>
      </div>
    </div>
  )
}

function FeaturedProject() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-blue-400/20 bg-[#101727]"
    >
      {/* Project information */}
      <div className="p-7 md:p-9">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-[10px] font-semibold tracking-wider text-emerald-300">
            FLAGSHIP PROJECT
          </span>

          <span className="text-xs text-slate-500">
            DEVOPS / CLOUD ENGINEERING
          </span>
        </div>

        <h3 className="mt-7 max-w-3xl text-2xl font-bold leading-tight text-white md:text-3xl">
          {featuredProject.title}
        </h3>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
          {featuredProject.description}
        </p>

        <div className="mt-6 grid gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 sm:grid-cols-2 md:p-5">
          <div className="sm:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-400">
              Project overview
            </p>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              A working end-to-end workflow deploys ElectronicsWeb through two distinct paths:
              image distribution and GitOps-based deployment.
            </p>
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-[#101727] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Image distribution
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              GitHub Actions builds frontend and backend Docker images, pushes them to GHCR, and Harbor receives them from GHCR.
            </p>
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-[#101727] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              GitOps deployment
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              A WSL 2 self-hosted runner updates Helm/GitOps configuration and image versions; Argo CD syncs the desired state to Minikube.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Key technologies
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {featuredProject.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={featuredProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            <FaGithub size={17} />
            View Repository
            <ArrowUpRight size={16} />
          </a>

          <a
            href={featuredProject.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-400/40 hover:text-white"
          >
            Live Application
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Architecture */}
      <div className="border-t border-white/[0.07] p-4 md:p-7">
        <Architecture />
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/[0.07] bg-[#0a0e19] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            03 / Selected Work
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Projects that I've built.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            From automated deployment pipelines to full-stack
            applications and robotics, this is where engineering
            meets implementation.
          </p>
        </motion.div>

        {/* Featured DevOps project */}
        <div className="mt-12">
          <FeaturedProject />
        </div>

        {/* Other projects */}
        <div className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                More Engineering
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Other projects
              </h3>
            </div>

            <a
              href="https://github.com/mkg789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Explore GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherProjects.map((project, index) => {
              const Icon = project.icon

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex flex-col rounded-xl border border-white/[0.08] bg-[#101727] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.08] text-blue-400">
                    <Icon size={21} />
                  </div>

                  <p className="mt-5 text-[10px] font-semibold tracking-wider text-blue-400">
                    {project.category}
                  </p>

                  <h4 className="mt-2 text-lg font-bold text-white">
                    {project.title}
                  </h4>

                  <p className="mt-3 flex-1 text-xs leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/[0.04] px-2 py-1.5 text-[10px] text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-slate-300 transition hover:text-blue-400"
                    >
                      <FaGithub size={15} />
                      View project
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live application`}
                        className="text-slate-400 hover:text-blue-400"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
