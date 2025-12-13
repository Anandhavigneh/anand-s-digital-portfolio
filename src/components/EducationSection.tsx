import annaUniversity from "@/assets/anna-university.png";
import jamalCollege from "@/assets/jamal-college.png";
import donBoscoSchool from "@/assets/don-bosco-school.jpg";

const EducationSection = () => {
  const education = [
    {
      institution: "Anna University",
      degree: "Master of Computer Applications (MCA)",
      period: "2024 - Present",
      logo: annaUniversity,
      description: "Currently pursuing MCA with focus on advanced computing and software development.",
    },
    {
      institution: "Jamal Mohamed College (Autonomous)",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2021 - 2024",
      logo: jamalCollege,
      description: "College with Potential for Excellence. Accredited (3rd Cycle) with 'A' Grade by NAAC.",
    },
    {
      institution: "Don Bosco Higher Secondary School",
      degree: "Higher Secondary Education",
      period: "2019 - 2021",
      logo: donBoscoSchool,
      description: "Completed higher secondary education with a focus on science and mathematics.",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"< Education />"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background and the institutions that shaped my technical foundation.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 glow-box z-10" />

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-secondary/50 p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-primary font-mono text-xs">{edu.period}</span>
                        <h3 className="text-lg font-bold mt-1">{edu.institution}</h3>
                        <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
