import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart management, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    image: "🛒",
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates, drag-and-drop, and team workspaces.",
    tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    image: "✅",
  },
  {
    title: "AI Chat Assistant",
    description: "Conversational AI bot with natural language processing and context-aware responses.",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    image: "🤖",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking with interactive maps, forecasts, and location-based alerts.",
    tags: ["React", "REST API", "Chart.js", "CSS"],
    image: "🌤️",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of projects that showcase my skills and experience.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <Card
              key={project.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {project.image}
              </div>

              <CardHeader>
                <CardTitle className="font-display text-lg">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2">
                <Button variant="default" size="sm" className="flex-1">
                  <ExternalLink className="mr-1 h-3 w-3" /> Live Demo
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="mr-1 h-3 w-3" /> Source Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
