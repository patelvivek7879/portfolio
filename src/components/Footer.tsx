import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">VP</span>
          </div>
          
          <div className="flex items-center">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} Vivek Patel. All Rights Reserved.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-slate-400 text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> in React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;