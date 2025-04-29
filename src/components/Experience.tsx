import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Professional Experience</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My professional journey building web applications and user interfaces.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-200"></div>

            {/* Timeline items */}
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative z-10 mb-12 md:mb-16 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
              >
                <div 
                  className={`bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'md:ml-6' : 'ml-6 md:ml-0'}`}
                >
                  <div className="absolute top-6 -left-3 md:left-auto md:-translate-x-1/2 md:top-6 rounded-full bg-blue-500 p-2 shadow-md">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.role}</h3>
                  <div className="text-blue-600 font-medium mb-2">{exp.company} • {exp.location}</div>
                  <div className="text-slate-500 text-sm mb-4">{exp.period}</div>
                  <ul className="space-y-2 text-slate-700">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;