import { Github, ExternalLink, Code, Database, Server, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'IoT Recycling Awareness System',
      description: 'A Python-powered IoT solution using inductive and capacitive sensors to detect and sort recyclables. The system tracks individual recycling activity via QR codes and translates actions into measurable environmental impact (e.g., CO₂ savings). Integrated with AWS IoT, React (S3/CloudFront), and Node.js (EC2) with CI/CD. Aims to raise environmental awareness through real-time feedback and social sharing.',
      tech: ['Python', 'AWS IoT', 'React', 'Node.js', 'EC2', 'S3', 'CloudFront', 'GitHub Actions','Camera Module','Raspberry Pi','MongoDB'],
      features: [
        'Real-time Material Detection',
        'AWS IoT Core Integration',
        'Automated User Identification',
        'Impact Visualization Dashboard',
        'Social Sharing Functionality',
        'CI/CD Pipeline',
        'Raspberry Pi-Powered Smart Bin'
      ],
      icon: <Code className="w-8 h-8" />,
      category: 'IoT & Cloud',
      link: 'https://github.com/nguyen2568',
      demo: null
    }
  ];

  return (
    <section id="projects" className='projects-section border-b-4 border-dotted border-black dark:border-white mb-8 pb-8'>
      <h2 className="text-5xl font-bold text-center uppercase tracking-wider mb-8">
        PERSONAL PROJECTS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border-4 border-black dark:border-white bg-white dark:bg-gray-800 p-6 group hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-black dark:text-white">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-black dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                {project.link && (
                  <a 
                    href={project.link} 
                    target='_blank' 
                    className="border-2 border-black dark:border-white p-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target='_blank' 
                    className="border-2 border-black dark:border-white p-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-black dark:text-gray-300 leading-relaxed mb-4">
              {project.description}
            </p>
            
            <div className="mb-4">
              <h4 className="font-bold text-black dark:text-white mb-2 uppercase tracking-wide">Key Features:</h4>
              <ul className="text-sm text-black dark:text-gray-300 space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-black dark:bg-white mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="border-2 border-black dark:border-white px-2 py-1 text-xs font-bold bg-white dark:bg-gray-900 text-black dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
