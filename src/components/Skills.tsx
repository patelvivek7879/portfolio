import { skills } from '../data';
import { Brain, Library, PenTool as Tool } from 'lucide-react';

const SkillCategory = ({ title, skills, icon }: { title: string; skills: string[]; icon: React.ReactNode }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Skills & Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The technologies and tools I use to bring products to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Core Skills" 
            skills={skills.core} 
            icon={<Brain size={24} />} 
          />
          <SkillCategory 
            title="Libraries & Frameworks" 
            skills={skills.libraries} 
            icon={<Library size={24} />} 
          />
          <SkillCategory 
            title="Tools" 
            skills={skills.tools} 
            icon={<Tool size={24} />} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;