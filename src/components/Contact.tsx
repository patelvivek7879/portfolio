import { personalInfo } from '../data';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="bg-slate-800 p-6 rounded-lg flex flex-col items-center text-center hover:bg-slate-700 transition-colors"
            >
              <div className="p-3 bg-blue-500/20 rounded-full mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-slate-400 break-all">{personalInfo.email}</p>
            </a>
            
            <a 
              href={`https://linkedin.com/in/${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-6 rounded-lg flex flex-col items-center text-center hover:bg-slate-700 transition-colors"
            >
              <div className="p-3 bg-blue-500/20 rounded-full mb-4">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-medium mb-1">LinkedIn</h3>
              <p className="text-slate-400">{personalInfo.linkedin}</p>
            </a>
            
            <a 
              href="https://github.com/patelvivek7879"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-6 rounded-lg flex flex-col items-center text-center hover:bg-slate-700 transition-colors"
            >
              <div className="p-3 bg-blue-500/20 rounded-full mb-4">
                <Github className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-medium mb-1">GitHub</h3>
              <p className="text-slate-400">patelvivek7879</p>
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center text-slate-400">
              <MapPin className="mr-2 h-5 w-5" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;