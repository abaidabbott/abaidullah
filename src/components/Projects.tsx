import React from 'react';
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
    subtitle: 'Projects that show applied AI thinking, integrations, workflows and production software.',
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
        role: 'Full-stack + AI Systems',
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
    subtitle: 'React Native and mobile system work for published apps, hardware interaction, business workflows and commerce operations.',
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
      {
        name: 'Royce Lighting',
        category: 'Retail Commerce',
        url: 'https://roycelight.com/',
        description: 'Mobile app work for an e-commerce and retail lighting system that sells residential and commercial products.',
        role: 'Mobile App Engineer',
      },
      {
        name: 'Keventers Cafe & Wraps',
        category: 'Food & Beverage',
        url: 'https://keventerscafeandwraps.com/',
        description: 'Mobile app work for a multi-store fast food and beverage business system.',
        role: 'Mobile App Engineer',
      },
      {
        name: 'Nizams Kathi Kabab',
        category: 'Food & Beverage',
        url: 'https://nizamkathikabab.com/',
        description: 'Mobile app work for restaurant ordering and multi-location food operations.',
        role: 'Mobile App Engineer',
      },
    ],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex min-h-[250px] flex-col justify-between rounded-xl bg-white border border-gray-200 p-8 hover:-translate-y-1 hover:shadow-lg transition-all"
  >
    <div>
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
          {project.category}
        </span>
        <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <FiExternalLink className="text-gray-500 group-hover:text-white transition-colors" size={18} />
        </div>
      </div>
      <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
        {project.name}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600">
        {project.description}
      </p>
    </div>
    <div className="mt-8 border-t border-gray-200 pt-5">
      <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Role</p>
      <p className="mt-1 text-sm font-semibold text-gray-900">{project.role}</p>
    </div>
  </a>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="space-y-24">
          {projectSections.map((section) => (
            <div key={section.title}>
              <div className="mb-10 flex flex-col gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-3xl font-extrabold tracking-tight md:text-4xl text-gray-900">{section.title}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">{section.subtitle}</p>
                </div>
                <span className="shrink-0 text-sm font-bold text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                  {section.projects.length} projects
                </span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {section.projects.map((project) => (
                  <ProjectCard key={project.name} project={project} />
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
