const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Who I Am */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"< About Me />"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A skilled software developer with a strong foundation in crypto and computer science
          </p>
        </div>

        {/* Tagline */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dedicated software developer with a strong foundation in crypto seeking to leverage analytical problem-solving skills and technical expertise to build innovative, efficient applications. Specializing in <span className="text-primary">algorithm optimization</span> and <span className="text-primary">blockchain technology</span> to deliver elegant solutions to complex challenges.
          </p>
        </div>

        {/* My Journey */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-mono mb-6 text-center">
            My <span className="text-gradient">Journey</span>
          </h3>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I'm <span className="text-primary font-semibold">ANANDHA VIGNESH .R</span>, a software developer with a strong background in Computer Applications. My academic journey began with a BCA in Bachelor of Computer Applications, which provided me with a solid foundation in analytical thinking and problem-solving approaches that I now apply to developing efficient, elegant software solutions.
            </p>
            
            <p className="text-lg">
              My passion lies at the intersection of <span className="text-primary">computer science applications</span> and <span className="text-primary">crypto & web 3</span>. I'm particularly interested in algorithm design, computational crypto Algorithmic, and exploring the potential of blockchain technology for solving complex problems.
            </p>
            
            <p className="text-lg">
              When I'm not studying or coding, I enjoy participating in <span className="text-primary">crypto & web 3 competitions</span>, contributing to open-source projects, and exploring new technologies. I believe in continuous learning and am always seeking opportunities to expand my knowledge and skills in both crypto and computer science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
