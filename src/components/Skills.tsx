import React from 'react';

const skillGroups = [
  {
    title: 'Frontend & Mobile',
    skills: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'FastAPI', 'Express', 'Django', 'NestJS'],
  },
  {
    title: 'AI Architecture & Agents',
    skills: ['LLMs', 'LangGraph', 'CrewAI', 'RAG (Pinecone, pgvector)', 'vLLM', 'Model Context Protocol (MCP)'],
  },
  {
    title: 'Data Science & ML',
    skills: ['PyTorch', 'Scikit-Learn', 'NLP', 'Computer Vision', 'Pandas'],
  },
  {
    title: 'Infrastructure & DevOps',
    skills: ['Kubernetes', 'AWS (ECS, EC2, Bedrock)', 'Docker', 'CI/CD', 'PostgreSQL'],
  },
  {
    title: 'AIOps & Observability',
    skills: ['Langfuse', 'Arize Phoenix', 'Datadog', 'OpenTelemetry', 'Grafana'],
  },
  {
    title: 'Certifications',
    skills: ['Claude with Google Vertex AI (Anthropic Academy)'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white text-gray-900">
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
            Tech Stack
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl mb-6 text-gray-900">
            Practical tools for shipping full stack software.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            The stack is broad because the projects are broad: product UI, backend logic, AI workflows, mobile apps and deployment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div 
              key={group.title} 
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="mb-6 text-xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 block"></span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="rounded-lg bg-gray-50 border border-gray-200 px-3 py-1.5 text-sm font-semibold text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
