import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  percentage: number;
}

const frontendSkills: Skill[] = [
  { name: "React.js", percentage: 90 },
  { name: "TypeScript", percentage: 85 },
  { name: "Tailwind CSS", percentage: 92 },
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
];

const backendSkills: Skill[] = [
  { name: "Node.js", percentage: 82 },
  { name: "Python", percentage: 78 },
  { name: "PostgreSQL", percentage: 75 },
  { name: "REST APIs", percentage: 88 },
  { name: "Express.js", percentage: 80 },
];

const otherSkills = [
  "Git", "Docker", "AWS", "Firebase", "Figma", "Linux", "MongoDB",
  "Redis", "GraphQL", "CI/CD", "Agile", "Jira",
];

const ProgressBar = ({ skill, delay }: { skill: Skill; delay: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
      <span className="text-sm font-medium text-primary">{skill.percentage}%</span>
    </div>
    <div className="w-full h-2.5 rounded-full bg-muted">
      <div
        className="h-2.5 rounded-full bg-gradient-to-r from-primary to-accent animate-progress-fill"
        style={{
          "--progress-width": `${skill.percentage}%`,
          animationDelay: `${delay * 0.1}s`,
        } as React.CSSProperties}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold font-display mb-6 text-primary">Frontend</h3>
            {frontendSkills.map((skill, i) => (
              <ProgressBar key={skill.name} skill={skill} delay={i} />
            ))}
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold font-display mb-6 text-primary">Backend</h3>
            {backendSkills.map((skill, i) => (
              <ProgressBar key={skill.name} skill={skill} delay={i} />
            ))}
          </div>
        </div>

        {/* Other skills */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold font-display mb-4 text-primary">Tools & Others</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {otherSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
