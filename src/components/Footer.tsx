
import { Github, Linkedin, Twitter, Code, Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center bg-tech-darkBlue border-t border-tech-lightBlue border-opacity-20">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="#" 
            className="text-tech-slate hover:text-tech-highlight transition-colors"
            aria-label="Github Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="#" 
            className="text-tech-slate hover:text-tech-highlight transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="#" 
            className="text-tech-slate hover:text-tech-highlight transition-colors"
            aria-label="Twitter Profile"
          >
            <Twitter size={20} />
          </a>
        </div>
        
        <div className="font-mono text-center">
          <p className="text-tech-slate text-sm flex items-center justify-center">
            <Terminal size={14} className="mr-2 text-tech-highlight" />
            <span>Designed & Built by Fikri Haikal</span>
            <Code size={14} className="ml-2 text-tech-highlight" />
          </p>
          <p className="text-tech-slate text-xs mt-2 font-mono">
            © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
