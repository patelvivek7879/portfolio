import { education } from '../data';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Education</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid gap-6">
          {education.map((edu) => (
            <div 
              key={edu.degree}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-4 flex-shrink-0 mt-1">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{edu.degree}</h3>
                  <div className="text-blue-600 font-medium mb-2">{edu.institution}</div>
                  
                  <div className="flex flex-wrap gap-4 text-slate-600 text-sm">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.score && (
                      <div className="flex items-center">
                        <span className="font-medium">Score:</span>
                        <span className="ml-1">{edu.score}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;