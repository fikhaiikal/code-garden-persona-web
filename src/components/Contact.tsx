
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-tech-lightBlue bg-opacity-10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-tech-highlight font-mono mr-2">04.</span> Contact
        </h2>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl text-tech-lightSlate font-semibold mb-4">
            Get In Touch
          </h3>
          <p className="text-tech-slate max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-tech-blue border border-tech-lightBlue">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start">
                <Mail className="text-tech-highlight mr-4" size={20} />
                <div>
                  <p className="text-tech-lightSlate font-mono">Email</p>
                  <p className="text-tech-slate">johndoe@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-tech-highlight mr-4" size={20} />
                <div>
                  <p className="text-tech-lightSlate font-mono">Phone</p>
                  <p className="text-tech-slate">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-tech-highlight mr-4" size={20} />
                <div>
                  <p className="text-tech-lightSlate font-mono">Location</p>
                  <p className="text-tech-slate">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex justify-start space-x-4 mt-6">
                <a href="#" aria-label="Github Profile">
                  <Button variant="ghost" className="rounded-full text-tech-slate hover:text-tech-highlight hover:bg-transparent">
                    <Github size={22} />
                  </Button>
                </a>
                <a href="#" aria-label="LinkedIn Profile">
                  <Button variant="ghost" className="rounded-full text-tech-slate hover:text-tech-highlight hover:bg-transparent">
                    <Linkedin size={22} />
                  </Button>
                </a>
                <a href="#" aria-label="Twitter Profile">
                  <Button variant="ghost" className="rounded-full text-tech-slate hover:text-tech-highlight hover:bg-transparent">
                    <Twitter size={22} />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-tech-blue border border-tech-lightBlue">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-tech-lightBlue bg-opacity-20 border-tech-lightBlue text-tech-slate"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="bg-tech-lightBlue bg-opacity-20 border-tech-lightBlue text-tech-slate"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-tech-lightBlue bg-opacity-20 border-tech-lightBlue text-tech-slate resize-none h-32"
                  />
                </div>
                <Button 
                  className="w-full bg-transparent hover:bg-tech-highlight hover:bg-opacity-10 text-tech-highlight border border-tech-highlight"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
