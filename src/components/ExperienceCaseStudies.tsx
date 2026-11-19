import { motion } from 'motion/react'
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Cloud,
  FileCog,
  HardDrive,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

const caseStudies = [
  {
    number: '01',
    title: 'PSM Enterprise Environment Migration & Package Automation',
    category: 'FEATURED · APPLICATION MIGRATION',
    summary:
      'Helped make a multi-component PSM environment functional on AWS, spanning legacy package generation, batch dependencies, shared storage, and online deployment.',
    overview:
      'Worked across the migration and configuration of PSM application components for batch processing, online deployment, database connectivity, and document processing infrastructure.',
    problem:
      'The migrated environment depended on a multi-step package-generation workflow and several infrastructure and application components that needed to work together.',
    responsibilities: [
      'Analyzed the main package-generation script and its dependent shell scripts, including Friday dump validation, delta comparison, package preparation, archiving, installation, and post-install cleanup.',
      'Troubleshot legacy HP-UX shell compatibility and worked on making package generation functional in the migrated environment.',
      'Provisioned and configured AWS EC2 instances, Linux users, and KornShell environments.',
      'Transferred application files between AWS accounts through S3 and configured EFS mounts, shared storage, and permissions.',
      'Installed Oracle, Perl, and required Perl dependencies for batch processing; investigated TNS configuration and database-link failures.',
      'Updated application image references in Helm charts, coordinated online deployments through Harbor and Argo CD, and ran database deployment scripts through SQL*Plus.',
    ],
    challenges:
      'Legacy shell behavior, database connectivity, and dependencies spanning Linux hosts, shared storage, batch processing, and online services.',
    troubleshooting:
      'Traced the package flow through its main and dependent scripts, checked environment compatibility, and investigated infrastructure, mount, permission, and Oracle connectivity issues alongside deployment coordination.',
    outcome:
      'Contributed to making the package-generation workflow functional in the migrated environment and configured supporting batch and online components.',
    technologies: [
      'AWS EC2',
      'S3',
      'EFS',
      'Linux',
      'KornShell',
      'Bash',
      'Perl',
      'Oracle / TNS',
      'Helm',
      'Harbor',
      'Argo CD',
      'Kubernetes',
    ],
    featured: true,
    workflow: [
      'Friday dump validation',
      'Delta comparison',
      'Package preparation',
      'Archiving',
      'Installation',
      'Post-install cleanup',
    ],
  },
  {
    number: '02',
    title: 'Oracle 19c Database Migration & RMAN Restoration',
    category: 'DATABASE MIGRATION',
    summary:
      'Participated in a 10-database migration effort and personally restored three databases on AWS EC2 using Oracle RMAN.',
    overview:
      'Helped move on-premises Oracle databases to AWS EC2 by preparing target infrastructure, transferring backup files across AWS accounts, and restoring databases.',
    problem:
      'Database backups and server parameter files needed to be transferred to private AWS infrastructure and restored in a configured Oracle 19c environment.',
    responsibilities: [
      'Created EC2 instances in private subnets, attached and configured EBS volumes, and set up network connectivity from VDI to private instances.',
      'Transferred database backup files and SP files through source and target AWS S3 buckets.',
      'Installed and configured Oracle Database 19c Enterprise Edition, created the Oracle operating-system user, and set environment variables.',
      'Executed RMAN restoration for three databases using instructions provided by the team lead.',
    ],
    challenges:
      'Coordinating cross-account backup transfers with private-subnet access, storage setup, and Oracle installation and configuration.',
    troubleshooting:
      'Prepared the target host and storage, established VDI connectivity, moved the required files through S3, then followed the team lead’s restoration instructions with RMAN.',
    outcome:
      'Personally handled RMAN restoration of 3 databases within an overall migration activity involving 10 databases.',
    technologies: [
      'AWS EC2',
      'EBS',
      'S3',
      'Oracle 19c Enterprise Edition',
      'RMAN',
      'Linux',
      'Private subnets',
      'VDI',
    ],
  },
  {
    number: '03',
    title: 'ISIS Papyrus Document Processing Infrastructure Migration',
    category: 'DOCUMENT PROCESSING',
    summary:
      'Configured shared-storage access and application services supporting PDF and AFP generation through ISIS Papyrus formatter commands.',
    overview:
      'Worked on migrating and configuring document-processing infrastructure that generated PDF and AFP output through application-specific formatter commands.',
    problem:
      'Document generation depended on accessible files, shared EFS storage, correct Linux permissions, licensing, fonts, and compatible rendering settings.',
    responsibilities: [
      'Configured environment-specific SSH access to ISIS servers and worked with application-specific export commands.',
      'Troubleshot cross-account EFS connectivity and investigated missing files affecting document generation.',
      'Resolved file and directory access issues with Linux ACLs and setfacl, including shared group permissions for multiple application users.',
      'Investigated licensing, font, and page-size rendering issues; verified IPASS service availability and performed DOCExec version upgrades.',
    ],
    challenges:
      'Cross-account shared storage, access across multiple application users, and document-rendering dependencies such as fonts, page size, and licensing.',
    troubleshooting:
      'Checked SSH and EFS access, traced missing-file and permission issues, adjusted ACLs and shared-group access, and investigated service and rendering configuration.',
    outcome:
      'Addressed file and access issues, verified IPASS service availability, and performed DOCExec upgrades.',
    technologies: [
      'AWS EFS',
      'Linux',
      'SSH',
      'setfacl / ACLs',
      'Shared storage',
      'PDF',
      'AFP',
      'DOCExec',
    ],
  },
  {
    number: '04',
    title: 'CBM Regression Environment Stability & Troubleshooting',
    category: 'INFRASTRUCTURE TROUBLESHOOTING',
    summary:
      'Investigated an EC2 instance becoming unresponsive during regression runs, identified memory exhaustion as the likely cause, and validated a swap-based corrective action.',
    overview:
      'Migrated and stabilized a CBM regression environment used to validate application packages before client-side deployment.',
    problem:
      'An EC2 instance became unresponsive while long-running regression test cases were executing, interrupting work in the validation environment.',
    responsibilities: [
      'Migrated application files between AWS accounts through S3 and configured EC2 instances, application-specific Linux users, and required Oracle and Perl dependencies.',
      'Configured EFS shared storage and filesystem mounts, and resolved Oracle database-link connectivity issues.',
      'Executed long-running regression cases and investigated the instance becoming unresponsive during test execution.',
      'Reviewed AWS monitoring metrics, configured a 6 GB swap file, and reran the regression workload.',
    ],
    challenges:
      'The regression workload coincided with an EC2 instance becoming unresponsive; the cause needed to be investigated without attributing unsupported performance metrics.',
    troubleshooting:
      'Analyzed AWS monitoring metrics and identified memory exhaustion as the likely cause. Added a 6 GB swap file, reran the workload, and checked whether the earlier interruption recurred.',
    outcome:
      'Verified the environment could continue running the regression workload without the previous memory-related interruption; no quantified performance improvement was measured.',
    technologies: [
      'AWS EC2',
      'CloudWatch',
      'S3',
      'EFS',
      'Linux',
      'Swap memory',
      'Oracle',
      'Perl',
    ],
  },
  {
    number: '05',
    title: 'Multi-Environment Kubernetes Application Deployment',
    category: 'APPLICATION & DATABASE DEPLOYMENT',
    summary:
      'Worked within an existing Helm, Harbor, and Argo CD deployment workflow for upgrades, hotfixes, and maintenance across 10–14 environments.',
    overview:
      'Handled application and database deployments across multiple environments, supporting application upgrades, hotfixes, and regular maintenance.',
    problem:
      'Repeated environment-specific deployment steps and coordination across namespaces, application workloads, and database scripts needed consistent execution.',
    responsibilities: [
      'Updated application image references in Helm charts and worked with Harbor image repositories.',
      'Synchronized deployments using Argo CD and managed environment-specific Kubernetes namespaces.',
      'Monitored application jobs and pods during deployments and executed database deployment scripts through SQL*Plus.',
      'Supported application upgrades and hotfixes and worked on semi-automating repetitive deployment steps across 10–14 environments.',
    ],
    challenges:
      'Keeping image references, namespaces, application workloads, and database deployment steps aligned across multiple target environments.',
    troubleshooting:
      'Followed the existing deployment workflow: checked Helm image references, coordinated Argo CD synchronization, monitored jobs and pods, and ran the corresponding database scripts.',
    outcome:
      'Supported upgrades, hotfixes, and regular maintenance while working to reduce repetitive execution across 10–14 environments; this was not a claim of building the platform or completing end-to-end automation.',
    technologies: [
      'Kubernetes',
      'Helm',
      'Harbor',
      'Argo CD',
      'Oracle SQL*Plus',
      'Linux',
      'Shell scripting',
    ],
  },
]

function WorkflowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#0b1220] p-5 md:p-6">
      <div className="flex items-center gap-3">
        <Workflow size={19} className="text-blue-400" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
            Package workflow investigated
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Stages in the package-generation scripts
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-2 lg:flex lg:items-center">
        {steps.map((step, index) => (
          <div key={step} className="contents">
            <div className="flex min-h-12 items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2.5 lg:min-w-0 lg:flex-1">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-[10px] font-bold text-blue-300">
                {index + 1}
              </span>
              <span className="text-sm leading-5 text-slate-300 lg:text-xs">{step}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center">
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="hidden shrink-0 text-blue-400/60 lg:block"
                />
                <ArrowDown
                  size={15}
                  aria-hidden="true"
                  className="shrink-0 text-blue-400/60 lg:hidden"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[number]
  index: number
}) {
  return (
    <motion.details
      id={`case-study-${study.number}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group overflow-hidden rounded-2xl border bg-[#101727] ${
        study.featured
          ? 'border-blue-400/25 shadow-xl shadow-blue-950/15 lg:col-span-2'
          : 'border-white/[0.09]'
      }`}
    >
      <summary className="list-none cursor-pointer p-4 outline-none transition hover:bg-white/[0.02] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-400 sm:p-6 md:p-7 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start gap-3 sm:gap-4">
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-sm font-bold ${
              study.featured
                ? 'border-blue-400/30 bg-blue-400/10 text-blue-300'
                : 'border-white/10 bg-white/[0.035] text-slate-300'
            }`}
          >
            {study.number}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
                <p className="text-[10px] font-semibold tracking-[0.12em] text-blue-400 sm:tracking-[0.16em]">
                  {study.category}
                </p>
                {study.featured && (
                  <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-2 py-1 text-[9px] font-semibold tracking-wider text-blue-300">
                    FEATURED
                  </span>
                )}
              </div>
              <ChevronDown
                size={18}
                aria-hidden="true"
                className="mt-1 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
              />
            </div>
            <h3 className="mt-2 text-base font-bold leading-snug text-white sm:text-lg md:text-xl">
              {study.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {study.summary}
            </p>
          </div>

        </div>
        <span className="sr-only">Expand case study details</span>
      </summary>

      <div className="border-t border-white/[0.07] p-4 sm:p-6 md:p-7">
        <div className="grid gap-6 md:grid-cols-2">
          <DetailBlock
            icon={FileCog}
            title="Project overview"
            content={study.overview}
          />
          <DetailBlock
            icon={Network}
            title="Engineering problem"
            content={study.problem}
          />
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200">
              <HardDrive size={15} className="text-blue-400" />
              My responsibilities
            </h4>
            <ul className="mt-4 space-y-3">
              {study.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="flex gap-3 text-sm leading-6 text-slate-400 lg:text-xs"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <DetailBlock
              icon={Server}
              title="Technical challenges"
              content={study.challenges}
            />
            <DetailBlock
              icon={Workflow}
              title="Troubleshooting approach"
              content={study.troubleshooting}
            />
            <DetailBlock
              icon={ShieldCheck}
              title="Outcome / validation"
              content={study.outcome}
            />
          </div>
        </div>

        {study.workflow && <WorkflowDiagram steps={study.workflow} />}

        <div className="mt-7 border-t border-white/[0.07] pt-5">
          <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200">
            <Cloud size={15} className="text-blue-400" />
            Technologies used
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {study.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-2 text-xs text-slate-300 lg:py-1.5 lg:text-[10px]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.details>
  )
}

function DetailBlock({
  icon: Icon,
  title,
  content,
}: {
  icon: typeof FileCog
  title: string
  content: string
}) {
  return (
    <div>
      <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200">
        <Icon size={15} className="text-blue-400" />
        {title}
      </h4>
      <p className="mt-3 text-sm leading-6 text-slate-400 lg:text-xs">{content}</p>
    </div>
  )
}

export default function ExperienceCaseStudies() {
  return (
    <section
      id="engineering-case-studies"
      aria-labelledby="case-studies-heading"
      className="relative border-t border-white/[0.07] bg-[#080b14] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            01.1 / Accenture
          </p>
          <h2
            id="case-studies-heading"
            className="mt-4 text-3xl font-bold text-white sm:text-4xl"
          >
            Engineering Case Studies
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Five examples of hands-on work across enterprise migrations,
            infrastructure troubleshooting, database restoration, and
            application deployments. Expand a case study for the technical
            detail.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-2 lg:gap-5">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.number} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
