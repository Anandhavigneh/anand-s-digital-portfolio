import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
            Hi there 👋, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-6 animate-slide-up">
            <span className="text-gradient">Anandhavignesh R</span>
          </h1>

          {/* Titles */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {["MCA Student", "Crypto Engineer", "Backend Dev", "ALGO DEV & Trader", "Web 3.0"].map((title, index) => (
              <span
                key={title}
                className="px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-secondary border border-border text-muted-foreground"
              >
                #{title}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Currently learning <span className="text-primary">DSA</span> and Integrating <span className="text-primary">AI & Web 3.0</span>. 
            Passionate about building innovative solutions in blockchain and algorithmic trading.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="glow" size="lg" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://drive.google.com/file/d/1OFQUROZdRURVzL98QY-63lXggfulxc8N/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="social" size="icon" asChild>
              <a
                href="https://github.com/Anandhavigneh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="social" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/anandhavignesh02/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="social" size="icon" asChild>
              <a
                href="mailto:anandhavigneshcr7@gmail.com"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
