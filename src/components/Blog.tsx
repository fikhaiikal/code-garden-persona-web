import { ChevronRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  href: string;
}
const blogPosts: BlogPost[] = [{
  title: "Building Scalable Microservices with Go",
  excerpt: "Learn how I built a high-performance system using Go microservices architecture and Docker containers.",
  date: "Apr 15, 2025",
  readTime: "8 min read",
  tags: ["Go", "Microservices", "Docker"],
  href: "#"
}, {
  title: "Performance Tuning Node.js Applications",
  excerpt: "Deep dive into optimizing Node.js backend applications for handling high traffic loads.",
  date: "Mar 22, 2025",
  readTime: "6 min read",
  tags: ["Node.js", "Performance", "Backend"],
  href: "#"
}, {
  title: "Implementing CI/CD Pipelines for Backend Projects",
  excerpt: "A step-by-step guide to setting up robust CI/CD pipelines for backend applications.",
  date: "Feb 10, 2025",
  readTime: "10 min read",
  tags: ["DevOps", "CI/CD", "Automation"],
  href: "#"
}];
const Blog = () => {
  return <section id="blog" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading">
          <span className="text-tech-highlight font-mono mr-2">05.</span> Technical Writing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post, index) => <Card key={index} className="bg-tech-lightBlue bg-opacity-20 border border-tech-highlight border-opacity-10 backdrop-blur-sm hover:border-opacity-30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-tech-white font-mono text-lg">
                  {post.title}
                </CardTitle>
                <div className="flex items-center space-x-2 text-sm text-tech-slate">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-tech-slate text-sm leading-relaxed min-h-[80px]">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => <Badge key={idx} variant="outline" className="bg-transparent text-tech-highlight border-tech-highlight text-xs">
                      {tag}
                    </Badge>)}
                </div>
                <Button variant="ghost" size="sm" className="text-tech-highlight hover:bg-tech-highlight hover:bg-opacity-10 p-0 flex items-center">
                  <span>Read Article</span>
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>)}
        </div>
        
        <div className="flex justify-center">
          <Button variant="outline" className="border border-tech-highlight text-tech-highlight hover:bg-opacity-10 flex items-center bg-slate-950 hover:bg-slate-800">
            <BookOpen size={16} className="mr-2" />
            <span>View All Articles</span>
          </Button>
        </div>

        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>;
};
export default Blog;