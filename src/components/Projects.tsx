
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Distributed Task Queue System",
      description:
        "A highly scalable distributed task queue system built with Node.js and Redis, capable of processing millions of tasks per day with automatic retries and failure handling.",
      tags: ["Node.js", "Redis", "Docker", "Microservices"],
      github: "#",
      external: "#"
    },
    {
      title: "E-commerce API Platform",
      description:
        "Designed and implemented a RESTful API platform for an e-commerce application handling product inventory, user authentication, order processing, and payment integration.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Stripe API"],
      github: "#",
      external: "#"
    },
    {
      title: "Real-time Analytics Pipeline",
      description:
        "Built a real-time data processing pipeline using Kafka and Elasticsearch for monitoring application metrics and generating custom alerts.",
      tags: ["Python", "Kafka", "Elasticsearch", "Docker", "AWS"],
      github: "#",
      external: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-tech-highlight font-mono mr-2">03.</span> Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-tech-lightBlue bg-opacity-10 border border-tech-lightBlue hover:border-tech-highlight transition-all duration-300 flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="text-tech-highlight font-mono">Featured Project</div>
                  <div className="flex space-x-2">
                    <a href={project.github} aria-label="GitHub Repository">
                      <Button variant="ghost" size="sm" className="text-tech-slate hover:text-tech-highlight">
                        <Github size={18} />
                      </Button>
                    </a>
                    <a href={project.external} aria-label="Live Demo">
                      <Button variant="ghost" size="sm" className="text-tech-slate hover:text-tech-highlight">
                        <ExternalLink size={18} />
                      </Button>
                    </a>
                  </div>
                </div>
                <CardTitle className="text-xl text-tech-lightSlate">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-tech-slate">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
