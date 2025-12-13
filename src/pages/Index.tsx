import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <section id="about" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">{"< About Me />"}</p>
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
              Who <span className="text-gradient">I Am</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate <span className="text-primary">Master of Computer Applications</span> student 
              with a deep interest in <span className="text-primary">Blockchain technology</span>, 
              <span className="text-primary"> Algorithmic Trading</span>, and <span className="text-primary">Web 3.0</span> development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Currently focused on learning <span className="text-primary">Data Structures & Algorithms</span> and 
              integrating <span className="text-primary">AI</span> with emerging Web 3.0 technologies. 
              I enjoy building innovative solutions that bridge the gap between traditional finance and decentralized systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring the latest developments in cryptocurrency, 
              developing trading strategies, or contributing to open-source projects.
            </p>
          </div>
        </div>
      </section>
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
