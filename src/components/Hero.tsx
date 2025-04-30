
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <p className="font-mono text-tech-highlight mb-5 animate-fade-in">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-tech-lightSlate mb-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
          John Doe.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-tech-slate mb-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
          I build robust backend systems.
        </h2>
        <p className="text-tech-slate max-w-2xl text-lg mb-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
          I'm a backend engineer specializing in building scalable and efficient 
          server-side applications. Currently, I'm focused on developing 
          high-performance APIs and microservices that power exceptional digital experiences.
        </p>
        <Button 
          className="bg-transparent hover:bg-tech-highlight hover:bg-opacity-10 text-tech-highlight border border-tech-highlight px-6 py-4 rounded-md font-mono animate-fade-in" 
          style={{animationDelay: "0.4s"}}
        >
          Check out my work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
