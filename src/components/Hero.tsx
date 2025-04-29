import { personalInfo } from '../data';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-400">{personalInfo.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 animate-fadeIn animation-delay-200">
              {personalInfo.title}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-8 animate-fadeIn animation-delay-400">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8 animate-fadeIn animation-delay-600">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href={`https://linkedin.com/in/${personalInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/patelvivek7879" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-400 animate-fadeIn animation-delay-800">
              <MapPin size={18} className="mr-2" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-full h-64 md:h-80 lg:h-96 bg-blue-400/10 rounded-lg relative overflow-hidden animate-float">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
                  <path fill="#3B82F6" d="M45.3,-70.1C59.9,-63.5,73.8,-53.7,81.7,-40.2C89.6,-26.7,91.6,-9.5,87.4,5.5C83.2,20.4,72.8,33.1,61.6,43.9C50.4,54.7,38.4,63.6,24.7,69.2C11,74.7,-4.3,76.9,-20.3,74.9C-36.3,72.9,-53,66.8,-65.3,55.4C-77.5,44.1,-85.4,27.6,-86.2,11.1C-87.1,-5.4,-81,-21.9,-71,-34.1C-61,-46.3,-47,-54.2,-33.4,-61.3C-19.7,-68.5,-6.4,-74.9,7.3,-76.1C21,-77.2,42,-76.7,45.3,-70.1Z" transform="translate(100 100)" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white">VP</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#experience" className="text-white opacity-70 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;