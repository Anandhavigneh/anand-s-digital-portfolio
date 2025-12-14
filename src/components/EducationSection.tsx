import annaUniversity from "@/assets/anna-university.png";
import jamalCollege from "@/assets/jamal-college.png";
import donBoscoSchool from "@/assets/don-bosco-school.jpg";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "University College of Engineering, BIT Campus, Anna University",
      degree: "Master of Computer Applications (MCA)",
      period: "2023 - 2025",
      location: "Trichy, India",
      logo: annaUniversity,
      description: "Completed advanced studies in computer science with specialization in software development and data science. Focused on practical applications of computing principles and modern software engineering methodologies.",
      achievements: [
        "Developed a full-stack web application for campus resource management",
        "Participated in university coding competitions and hackathons",
        "Collaborated on research project exploring Crypto & blockchain applications"
      ],
      courses: ["Advanced Data Structures", "Web Application Development", "Database Management Systems", "Software Engineering", "Crypto & Blockchain", "Cloud Computing"]
    },
    {
      institution: "Jamal Mohamed College (Autonomous)",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2020 - 2023",
      location: "Trichy, India",
      logo: jamalCollege,
      description: "Completed foundational and intermediate studies in computer applications with a strong focus on programming, database systems, and software development fundamentals. Gained hands-on experience in building practical applications and understanding core computing concepts essential for backend and full-stack development.",
      achievements: [
        "Python Application Development",
        "Database Design (MySQL)",
        "Web Development Projects",
        "Problem Solving & Algorithms",
        "Crypto & Blockchain Basics"
      ],
      courses: ["Python Programming", "Data Structures", "Database Management Systems", "Software Engineering"]
    },
    {
      institution: "Don Bosco Higher Secondary School",
      degree: "Higher Secondary Education",
      period: "2016 - 2021",
      location: "V.Pet, India",
      logo: donBoscoSchool,
      description: "Completed higher secondary education with a focus on science and mathematics, building a strong analytical foundation.",
      achievements: [],
      courses: []
    }
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

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div className="shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-secondary/50 p-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-primary font-mono text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-lg text-foreground/80 font-medium">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  {/* Achievements */}
                  {edu.achievements.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span>Achievements</span>
                      </div>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Courses */}
                  {edu.courses.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span>Key Courses</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
