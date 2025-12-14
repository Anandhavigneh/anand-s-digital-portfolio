import { Coins, FolderGit2, Rocket } from "lucide-react";

const ExperienceSection = () => {
  const stats = [
    {
      icon: Coins,
      value: "5+",
      label: "Years in Crypto",
      description: "Trading & Development",
    },
    {
      icon: FolderGit2,
      value: "26+",
      label: "Projects",
      description: "Completed",
    },
    {
      icon: Rocket,
      value: "5+",
      label: "Real World Projects",
      description: "Production Apps",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"< Experience />"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Years of hands-on experience in blockchain, trading, and software development.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
