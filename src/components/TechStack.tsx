
import { Card, CardContent } from "@/components/ui/card";
import { Database, Code, LayoutGrid, Cloud, Terminal } from "lucide-react";

const TechStack = () => {
  const techStack = [
    {
      category: "Programming Languages",
      icon: <Code className="h-6 w-6 text-tech-highlight mb-2" />,
      items: [
        { name: "JavaScript", logo: "/tech-logos/javascript.svg" },
        { name: "TypeScript", logo: "/tech-logos/typescript.svg" },
        { name: "Python", logo: "/tech-logos/python.svg" },
        { name: "Go", logo: "/tech-logos/go.svg" },
        { name: "Java", logo: "/tech-logos/java.svg" },
        { name: "PHP", logo: "/tech-logos/php.svg" }
      ]
    },
    {
      category: "Frameworks",
      icon: <LayoutGrid className="h-6 w-6 text-tech-highlight mb-2" />,
      items: [
        { name: "Node.js", logo: "/tech-logos/nodejs.svg" },
        { name: "Express", logo: "/tech-logos/express.svg" },
        { name: "NestJS", logo: "/tech-logos/nestjs.svg" },
        { name: "Django", logo: "/tech-logos/django.svg" },
        { name: "Flask", logo: "/tech-logos/flask.svg" },
        { name: "Spring Boot", logo: "/tech-logos/spring.svg" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="h-6 w-6 text-tech-highlight mb-2" />,
      items: [
        { name: "Docker", logo: "/tech-logos/docker.svg" },
        { name: "Kubernetes", logo: "/tech-logos/kubernetes.svg" },
        { name: "AWS", logo: "/tech-logos/aws.svg" },
        { name: "Azure", logo: "/tech-logos/azure.svg" },
        { name: "Terraform", logo: "/tech-logos/terraform.svg" },
        { name: "Jenkins", logo: "/tech-logos/jenkins.svg" }
      ]
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6 text-tech-highlight mb-2" />,
      items: [
        { name: "PostgreSQL", logo: "/tech-logos/postgresql.svg" },
        { name: "MySQL", logo: "/tech-logos/mysql.svg" },
        { name: "MongoDB", logo: "/tech-logos/mongodb.svg" },
        { name: "Redis", logo: "/tech-logos/redis.svg" },
        { name: "Elasticsearch", logo: "/tech-logos/elasticsearch.svg" },
        { name: "DynamoDB", logo: "/tech-logos/dynamodb.svg" }
      ]
    },
    {
      category: "Code Editors",
      icon: <Terminal className="h-6 w-6 text-tech-highlight mb-2" />,
      items: [
        { name: "VSCode", logo: "/tech-logos/vscode.svg" },
        { name: "IntelliJ IDEA", logo: "/tech-logos/intellij.svg" },
        { name: "Vim", logo: "/tech-logos/vim.svg" },
        { name: "Sublime Text", logo: "/tech-logos/sublime.svg" },
        { name: "PyCharm", logo: "/tech-logos/pycharm.svg" },
        { name: "WebStorm", logo: "/tech-logos/webstorm.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-tech-lightBlue bg-opacity-10 grid-pattern">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading">
          <span className="text-tech-highlight font-mono mr-2">02.</span> Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, index) => (
            <Card 
              key={index} 
              className="border border-tech-lightBlue hover:border-tech-highlight transition-colors bg-tech-blue bg-opacity-80 backdrop-blur-sm tech-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-5">
                  {category.icon}
                  <h3 className="text-tech-highlight font-mono text-lg">
                    {category.category}
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {category.items.map((tech, techIndex) => (
                    <div key={techIndex} className="flex flex-col items-center justify-center p-2 hover:bg-tech-lightBlue hover:bg-opacity-20 rounded-md transition-colors">
                      <div className="h-12 w-12 flex items-center justify-center mb-2 bg-tech-darkCharcoal rounded-full p-2">
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`} 
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg'; 
                            e.currentTarget.alt = `${tech.name} (placeholder)`;
                          }}
                        />
                      </div>
                      <span className="text-xs text-center text-tech-lightSlate">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
