import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            <p className="text-primary font-medium mb-2 font-display">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold font-display mb-4 text-foreground">
              Ankit <span className="text-gradient">Sharma</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-display">
              Full Stack Developer
            </p>

            <p className="text-muted-foreground max-w-lg mb-8">
              Passionate about building elegant web applications with modern technologies.
              Turning ideas into reality through clean code and creative design.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <Button onClick={() => scrollTo("#projects")} size="lg">
                <ArrowDown className="mr-2 h-4 w-4" />
                View Projects
              </Button>

              <Button variant="outline" size="lg">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
              
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                
                {/* FINAL FIXED IMAGE TAG */}
                <img
                    src="profile.png"
                    alt="Ankit Sharma"
                    className="w-full h-full object-cover"
                />


              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
