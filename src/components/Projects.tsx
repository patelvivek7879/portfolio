import { projects } from '../data';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <div className="mb-4">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-slate-600 mb-2">
                      {desc}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-slate-200 p-4 bg-slate-50">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  View on GitHub
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;