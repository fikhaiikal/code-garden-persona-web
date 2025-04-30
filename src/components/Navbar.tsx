
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-tech-blue shadow-md backdrop-blur-sm bg-opacity-90' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-tech-highlight font-mono text-2xl font-bold">
          &lt;BE/&gt;
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#about" className="nav-link"><span className="text-tech-highlight font-mono mr-1">01.</span>About</a>
          <a href="#skills" className="nav-link"><span className="text-tech-highlight font-mono mr-1">02.</span>Skills</a>
          <a href="#projects" className="nav-link"><span className="text-tech-highlight font-mono mr-1">03.</span>Projects</a>
          <a href="#blog" className="nav-link"><span className="text-tech-highlight font-mono mr-1">04.</span>Blog</a>
          <a href="#contact" className="nav-link"><span className="text-tech-highlight font-mono mr-1">05.</span>Contact</a>
          <Button 
            variant="outline" 
            className="ml-4 border border-tech-highlight text-tech-highlight hover:bg-tech-highlight hover:bg-opacity-10"
          >
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-tech-highlight"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col items-center py-4 bg-tech-lightBlue gap-4">
          <a 
            href="#about" 
            className="text-tech-lightSlate hover:text-tech-highlight"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-tech-highlight font-mono mr-1">01.</span>About
          </a>
          <a 
            href="#skills" 
            className="text-tech-lightSlate hover:text-tech-highlight"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-tech-highlight font-mono mr-1">02.</span>Skills
          </a>
          <a 
            href="#projects" 
            className="text-tech-lightSlate hover:text-tech-highlight"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-tech-highlight font-mono mr-1">03.</span>Projects
          </a>
          <a 
            href="#blog" 
            className="text-tech-lightSlate hover:text-tech-highlight"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-tech-highlight font-mono mr-1">04.</span>Blog
          </a>
          <a 
            href="#contact" 
            className="text-tech-lightSlate hover:text-tech-highlight"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-tech-highlight font-mono mr-1">05.</span>Contact
          </a>
          <Button 
            variant="outline" 
            className="mt-2 border border-tech-highlight text-tech-highlight hover:bg-tech-highlight hover:bg-opacity-10"
          >
            Resume
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
