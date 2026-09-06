import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

type Project = {
  name: string;
  category: string;
  url: string;
  description: string;
  role: string;
};

type ProjectSection = {
  title: string;
  subtitle: string;
  projects: Project[];
};

const projectSections: ProjectSection[] = [
  {
    title: 'AI, Automation & Applied Systems',
    subtitle: 'The work that best shows forward-deployed applied AI capability: product thinking, integrations, workflows and production systems.',
    projects: [
      {
        name: 'Twin Companion',
        category: 'Conversational AI',
        url: 'https://twin-companion.com',
        description: 'Conversational AI app with advanced session memory and adaptive sentiment matching.',
        role: 'Frontend + AI Integration',
      },
      {
        name: 'Study Mind',
        category: 'EdTech & LLM',
        url: 'https://studymindlab.site',
        description: 'Document reasoning, notes and study scheduling using a NotebookLM-style workflow.',
        role: 'Full-stack + LLM',
      },
      {
        name: 'Vital Edge Fit',
        category: 'Healthcare AI SaaS',
        url: 'https://www.vital-edge-fit.space/',
        description: 'Healthcare and fitness SaaS with secure auth, records and appointment chatbot flows.',
        role: 'Full-stack Product Engineer',
      },
      {
        name: 'Planet AI',
        category: 'AI Workflow Builder',
        url: 'https://planet-ai.online',
        description: 'Multi-agent workflow builder for automating complex business operations.',
        role: 'Full-stack + AI Agents',
      },
      {
        name: 'The AutoBot',
        category: 'GraphRAG',
        url: 'https://theautobot.ca',
        description: 'Enterprise assistant combining vector search and knowledge graphs for verifiable answers.',
        role: 'Applied AI Engineer',
      },
      {
        name: 'Alfalah Collection',
        category: 'Commerce Automation',
        url: 'https://alfalahcollection.com',
        description: 'Multi-vendor commerce platform with localized deals, automated discounts and webMCP integration.',
        role: 'Full-stack E-Commerce',
      },
    ],
  },
  {
    title: 'Web Apps & Product Platforms',
    subtitle: 'Web products where the work spans architecture, data, dashboards, CRM flows, user experience and delivery.',
    projects: [
      {
        name: 'RIA Catalyst',
        category: 'Fintech & M&A',
        url: 'https://riacatalyst.com/',
        description: 'AI-powered M&A intelligence and deal-sourcing platform for RIA dealmakers.',
        role: 'Full-stack Product Engineering',
      },
      {
        name: 'Snootme',
        category: 'Computer Vision',
        url: 'https://snootme.com',
        description: 'Real-time image analyzer with Nylas calendar integration and automated scheduling.',
        role: 'Full-stack + AI / Nylas',
      },
      {
        name: 'BMC Capital / PMC Capital',
        category: 'PropTech & Fintech CRM',
        url: 'https://pmc-capital.rent/',
        description: 'Real estate and mortgage CRM for pipelines, documents and portfolio operations.',
        role: 'Solution Architect',
      },
      {
        name: 'MatchStatHub',
        category: 'Sports Analytics',
        url: 'https://matchstathub.com',
        description: 'Football analytics platform for aggregating and presenting live match metrics.',
        role: 'Full-stack + Data Aggregation',
      },
      {
        name: 'SPS Fulfillment',
        category: 'Logistics',
        url: 'https://spsfulfillment.com',
        description: 'Fulfillment platform for EU warehousing, onboarding and shipment tracking.',
        role: 'Full-stack Logistics',
      },
      {
        name: 'RussWorld',
        category: 'E-Commerce & Media',
        url: 'https://russworld.com',
        description: 'Commerce and fan engagement platform for merchandise, content and event updates.',
        role: 'Full-stack E-Commerce',
      },
      {
        name: 'Surge Digital Marketing',
        category: 'Marketing Analytics',
        url: 'https://surge.justdigitalmarketing.com/',
        description: 'Advertising dashboard aggregating campaign performance across Google and Meta ads.',
        role: 'Full-stack + Data Analytics',
      },
      {
        name: 'Shabbaton CTeen',
        category: 'Community & Events',
        url: 'https://shabbaton.cteen.com/',
        description: 'Responsive event portal with registration flows and clean information architecture.',
        role: 'Frontend React',
      },
      {
        name: 'Developer Portfolio',
        category: 'Portfolio & Personal',
        url: 'https://abaidbutt.website/',
        description: 'Personal engineering portfolio with search-ready profile data, WebMCP support and technical project proof.',
        role: 'Frontend / Tailwind',
      },
    ],
  },
  {
    title: 'Mobile Apps',
    subtitle: 'React Native projects focused on published apps, hardware interaction, business workflows and mobile product delivery.',
    projects: [
      {
        name: 'Vlore',
        category: 'Mobile NFC',
        url: 'https://apps.apple.com/us/app/vloreapp/id6753225226',
        description: 'Cross-platform mobile app for scanning, writing and managing NFC tags.',
        role: 'React Native Developer',
      },
      {
        name: 'Tactlink',
        category: 'Mobile Directory',
        url: 'https://apps.apple.com/sg/app/tactlink/id1469516661',
        description: 'Commercial business directory and networking app published for mobile users.',
        role: 'React Native Developer',
      },
      {
        name: 'Fuboot',
        category: 'Mobile Fintech',
        url: 'https://play.google.com/store/apps/details?id=com.fuboot.app',
        description: 'Community financial pooling app with SQL optimization and contribution tracking.',
        role: 'React Native Developer',
      },
    ],
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.2) }}
    className="group flex min-h-[230px] flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-100"
  >
    <div>
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          {project.category}
        </span>
        <FiExternalLink className="mt-1 shrink-0 text-gray-400 transition-colors group-hover:text-gray-900 dark:group-hover:text-white" />
      </div>
      <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
        {project.name}
      </h3>
      <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
        {project.description}
      </p>
    </div>
    <div className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-800">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">Role</p>
      <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-100">{project.role}</p>
    </div>
  </motion.a>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Projects grouped by the systems I can lead and ship.
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">
            Clear proof for applied AI, web platforms and mobile products. Each project opens in a new tab.
          </p>
        </div>

        <div className="space-y-16">
          {projectSections.map(section => (
            <div key={section.title}>
              <div className="mb-6 flex flex-col gap-2 border-b border-gray-200 pb-5 dark:border-gray-800 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{section.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-300">{section.subtitle}</p>
                </div>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  {section.projects.length} projects
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {section.projects.map((project, index) => (
                  <ProjectCard key={project.name} project={project} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
