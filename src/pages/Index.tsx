
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-tech-blue text-tech-white">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="animate-on-scroll opacity-0 transition-opacity duration-500 delay-100">
          <About />
        </div>
        <div className="animate-on-scroll opacity-0 transition-opacity duration-500 delay-200">
          <Skills />
        </div>
        <div className="animate-on-scroll opacity-0 transition-opacity duration-500 delay-300">
          <Projects />
        </div>
        <div className="animate-on-scroll opacity-0 transition-opacity duration-500 delay-400">
          <Blog />
        </div>
        <div className="animate-on-scroll opacity-0 transition-opacity duration-500 delay-500">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
