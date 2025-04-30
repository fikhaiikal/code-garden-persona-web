
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center">
      <div className="container mx-auto max-w-4xl">
        <div className="md:hidden flex justify-center space-x-6 mb-6">
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
        
        <p className="text-tech-slate text-sm font-mono">
          Designed & Built by John Doe
        </p>
        <p className="text-tech-slate text-sm mt-2">
          © 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
