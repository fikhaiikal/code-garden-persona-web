
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { Terminal } from "lucide-react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const commands = [
    "npm install backend-expertise",
    "docker compose up -d",
    "kubectl apply -f scalable-services.yaml"
  ];
  const typingSpeed = 60;
  const commandPauseTime = 1500;
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const pauseRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typeCommand = (command: string, index: number) => {
      let charIndex = 0;
      
      const typeChar = () => {
        if (charIndex < command.length) {
          setDisplayedText(prev => prev + command.charAt(charIndex));
          charIndex++;
          typingRef.current = setTimeout(typeChar, typingSpeed);
        } else {
          // Command fully typed, pause and then clear
          pauseRef.current = setTimeout(() => {
            setDisplayedText("");
            setCurrentCommandIndex((currentCommandIndex + 1) % commands.length);
          }, commandPauseTime);
        }
      };
      
      typeChar();
    };

    typeCommand(commands[currentCommandIndex], currentCommandIndex);

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
      if (pauseRef.current) clearTimeout(pauseRef.current);
    };
  }, [currentCommandIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-4 bg-tech-blue relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(20,1fr)] gap-[1px] opacity-5 z-0">
        {Array.from({ length: 800 }).map((_, i) => (
          <div key={i} className="bg-tech-highlight"></div>
        ))}
      </div>
      
      <div className="container mx-auto max-w-4xl z-10">
        <p className="font-mono text-tech-highlight mb-5 animate-fade-in">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-tech-lightSlate mb-4 animate-fade-in font-mono" style={{
        animationDelay: "0.1s"
      }}>Fikri Haikal</h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-tech-slate mb-6 animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>
          I build robust backend systems.
        </h2>
        <p className="text-tech-slate max-w-2xl text-lg mb-8 animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          I'm a backend engineer specializing in building scalable and efficient 
          server-side applications. Currently, I'm focused on developing 
          high-performance APIs and microservices that power exceptional digital experiences.
        </p>
        
        {/* Terminal Effect Container */}
        <div className="bg-tech-lightBlue bg-opacity-30 border border-tech-highlight border-opacity-20 rounded-md mb-8 p-4 font-mono text-tech-highlight animate-fade-in max-w-lg" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center mb-2">
            <Terminal size={16} className="mr-2" />
            <span className="text-xs">terminal</span>
          </div>
          <div className="flex">
            <span className="text-tech-slate mr-2">$</span>
            <span className="typing-text">{displayedText}</span>
            <span className="w-2 h-5 bg-tech-highlight inline-block animate-pulse ml-1"></span>
          </div>
        </div>
        
        <Button className="bg-transparent hover:bg-tech-highlight hover:bg-opacity-10 text-tech-highlight border border-tech-highlight px-6 py-4 rounded-md font-mono animate-fade-in" style={{
        animationDelay: "0.5s"
      }}>
          Check out my work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
