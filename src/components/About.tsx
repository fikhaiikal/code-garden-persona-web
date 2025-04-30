
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-tech-highlight font-mono mr-2">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <p className="text-tech-slate mb-4">
              Hello! I'm John, a backend engineer with over 5 years of experience designing and 
              implementing server-side applications. My journey in software engineering began when 
              I built my first web scraper to collect data for a research project during university.
            </p>
            <p className="text-tech-slate mb-4">
              Fast-forward to today, I've had the privilege of working at a 
              <span className="text-tech-highlight"> financial technology startup</span>, 
              a <span className="text-tech-highlight">large e-commerce corporation</span>, and a 
              <span className="text-tech-highlight"> health-tech company</span>. My main focus these 
              days is building scalable, secure, and maintainable backend systems and APIs that deliver 
              exceptional performance.
            </p>
            <p className="text-tech-slate mb-4">
              I also enjoy sharing my knowledge through technical writing and mentoring junior developers.
            </p>
            <p className="text-tech-slate">
              When I'm not at the computer, I'm probably hiking in the mountains, playing chess, or exploring 
              new coffee shops in the city.
            </p>
          </div>
          
          <div className="md:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-tech-highlight rounded-md blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <Card className="relative w-full h-64 md:h-72 overflow-hidden rounded-md bg-tech-lightBlue border-0">
                <div className="absolute inset-0 bg-tech-lightBlue bg-opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-tech-white font-mono text-center px-4">
                    Profile Image<br/>
                    (Add your photo here)
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
