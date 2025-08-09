import Image from 'next/image';
import { ChevronRight, Link, Github, FileText, Globe } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PROJECT_CONTENT = [
  {
    title: 'Multimodal Biomedical Chatbot',
    description:
      "My thesis project, where I engineered a sophisticated Graph-Based Retrieval Augmented Generation (GraphRAG) system. This chatbot uses Google's text-embedding-004 to build a knowledge graph from the MIMIC-IV dataset in a Neo4j database. The system is orchestrated with LangChain to handle complex queries between Google's Gemini 2.5 Pro and the database, achieving 97% faithfulness in validation.",
    techStack: [
      'GraphRAG',
      'LangChain',
      'LLMs',
      'Google Gemini',
      'Neo4j',
      'FastAPI',
      'Streamlit',
      'RAGAs',
      'Python',
    ],
    date: 'Mar 2025 - Jul 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/mhmhatta/BiomedChat',
      },
      {
        name: 'Live Demo',
        url: 'https://drive.google.com/file/d/1B8d_sUV66lrMUYgOd3JuksUtWa2RH6dV/view?usp=drive_link',
      },
      {
        name: 'View PDF Report',
        url: 'https://drive.google.com/file/d/1zHl0-GkpmH2gNNDjUFNMm6FRKUnajBmu/view?usp=drive_link',
      },
    ],
    images: [
        { src: '/biomed.jpg', alt: 'Biomedical chatbot interface' },
        { src: '/biomed2.jpg', alt: 'System architecture diagram' },
        { src: '/biomed3.png', alt: 'System architecture diagram' },
        { src: '/biomed4.jpg', alt: 'System architecture diagram' },
    ],
    supervisor: [
      { name: 'Prof. Dr. Romi Fadillah Rahmat B.Comp.Sc., M.Sc.', role : 'Supervisor 1 - Vice Dean at Fasilkom-TI USU'},
      { name: 'Dr. Erna Budhiarti Nababan M.IT', role : 'Supervisor 2 - Head Of Master Program In Data Science And Artificial Intelligence at Fasilkom-TI USU'},
    ]
  },
  {
    title: 'BUMA AI Chatbot',
    description:
      "During my internship at BUMA, I architected an AI Chatbot using Azure AI Studio and the GPT-4 model. The system features a Retrieval Augmented Generation (RAG) design with Azure Cognitive Search for data retrieval and role-based access control for security. The full-stack application uses a ReactJS frontend and a .NET backend, integrated via the Semantic Kernel framework. **Please note: The images showcased in this portfolio are from the final, production-level application. Due to project confidentiality and access limitations, the accompanying GitHub link directs to a prototype version that demonstrates the core functionalities.**",
    techStack: [
      'Azure AI Studio',
      'Azure OpenAI',
      'GPT-4',
      'RAG',
      '.NET',
      'ReactJS',
      'Semantic Kernel',
      'C#',
    ],
    date: 'May 2024 - Jun 2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/mhmhatta/BUMAxGemini',
      },
      {
        name: 'View PDF Report',
        url: 'https://drive.google.com/file/d/17DVwmTp0LzqwSj0CTDNEtzxINz_tE7G3/view?usp=drive_link',
      },
    ],
    images: [
        { src: '/BUMA.jpg', alt: 'BUMA AI chatbot interface' },
        { src: '/buma2.jpg', alt: 'BUMA AI chatbot interface' },
        { src: '/buma3.jpg', alt: 'BUMA AI chatbot interface' },
        { src: '/buma4.jpg', alt: 'BUMA AI chatbot interface' },
        { src: '/buma5.jpg', alt: 'BUMA AI chatbot interface' },
        { src: '/buma6.jpg', alt: 'BUMA AI chatbot interface' },
    ],
    supervisor: 'Raden Vicky - Technical Solution Specialist at BUMA'
  },
  {
    title: 'AI Dental Disease Detection',
    description:
      'As part of a collaboration with Malaysian students, I developed a web application that includes an AI-driven system for detecting dental diseases. The system leverages a Convolutional Neural Network (CNN) algorithm, trained on over 5,000 images, to classify conditions like caries, gingivitis, and calculus with over 87% accuracy.',
    techStack: ['Python', 'CNN Algorithm', 'Laravel', 'MySQL', 'JavaScript'],
    date: 'Mar 2023 - Aug 2023',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/mhmhatta/Dental-Diseases-Detector',
      },
      {
        name: 'View PDF Report',
        url: 'https://drive.google.com/file/d/14ZUWYppkE8RTxVVxUYKwZa4GKS3iba87/view?usp=drive_link',
      },
    ],
    images: [
        { src: '/ddd.jpg', alt: 'Dental disease detection interface' },
        { src: '/ddd2.jpg', alt: 'Dental disease detection interface' },
        { src: '/ddd3.png', alt: 'Dental disease detection interface' },
        { src: '/ddd4.png', alt: 'Dental disease detection interface' },
    ],
    supervisor: 'Miss Hafizatul Hanin bt Hamzah - Lecturer at Universiti Teknologi Mara (UiTM), Malaysia',
  },
];

interface ProjectProps {
  title: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }
  
  const getIconForLink = (linkName: string) => {
    if (linkName.toLowerCase().includes('github')) {
      return <Github className="h-4 w-4 text-muted-foreground" />;
    }
    if (linkName.toLowerCase().includes('demo')) {
      return <Globe className="h-4 w-4 text-muted-foreground" />;
    }
    if (linkName.toLowerCase().includes('pdf')) {
      return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
    return <Link className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Supervisor
            </h3>
            <div className="text-secondary-foreground text-sm space-y-2">
              {Array.isArray(projectData.supervisor) ? (
                projectData.supervisor.map((s, index) => (
                  <div key={index}>
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.role}</p>
                  </div>
                ))
              ) : (
                <p>{projectData.supervisor}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <div className="flex items-center gap-3">
                    {getIconForLink(link.name)}
                    <span className="font-light capitalize">{link.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {projectData.images.map((image, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main Data Export ---
export const data = [
  {
    category: 'Thesis Project',
    title: 'Multimodal Biomedical Chatbot',
    src: '/biomedPreview.png',
    content: <ProjectContent project={{ title: 'Multimodal Biomedical Chatbot' }} />,
  },
  {
    category: 'Full-Stack AI',
    title: 'BUMA AI Chatbot',
    src: '/BUMAIPReveiew.png',
    content: <ProjectContent project={{ title: 'BUMA AI Chatbot' }} />,
  },
  {
    category: 'Machine Learning',
    title: 'AI Dental Disease Detection',
    src: '/AIDD.png',
    content: <ProjectContent project={{ title: 'AI Dental Disease Detection' }} />,
  },
];