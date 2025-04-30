
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "NestJS", "Django", "Flask", "FastAPI", "Spring Boot"]
    },
    {
      category: "Programming Languages",
      items: ["JavaScript/TypeScript", "Python", "Java", "Go", "PHP", "C#"]
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"]
    },
    {
      category: "API Design",
      items: ["RESTful APIs", "GraphQL", "API Gateways", "Swagger/OpenAPI", "gRPC"]
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Azure", "Terraform", "Jenkins"]
    },
    {
      category: "Architecture",
      items: ["Microservices", "Event-driven", "Serverless", "Message Queues", "System Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-tech-lightBlue bg-opacity-10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-tech-highlight font-mono mr-2">02.</span> Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card 
              key={index} 
              className="border border-tech-lightBlue hover:border-tech-highlight transition-colors bg-tech-blue"
            >
              <CardContent className="p-6">
                <h3 className="text-tech-highlight font-mono text-lg mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start">
                      <span className="text-tech-highlight mr-2">▹</span>
                      <span className="text-tech-lightSlate">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
