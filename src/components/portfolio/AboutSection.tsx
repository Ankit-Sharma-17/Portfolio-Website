import { GraduationCap, Target, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Get to know more about my background, education, and what drives me.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display mb-2">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I build applications that are both functional and beautiful.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display mb-2">Education</h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">B.Tech in Computer Science & Engineering</strong>
                </p>
                <p className="text-muted-foreground">Silver Oak University — 2023–2027</p>
                <p className="text-sm text-muted-foreground mt-1">CGPA: 8.5/10</p>
              </div>
            </div>
          </div>

          {/* Career objective */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display mb-2">Career Objective</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To leverage my technical skills and creative thinking in a challenging role where I can contribute to innovative software solutions while continuously growing as a developer.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    { label: "Projects", value: "10+" },
                    { label: "Technologies", value: "15+" },
                    { label: "Experience", value: "2+ Years" },
                    { label: "Certifications", value: "5+" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-lg bg-muted">
                      <p className="text-2xl font-bold text-primary font-display">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
