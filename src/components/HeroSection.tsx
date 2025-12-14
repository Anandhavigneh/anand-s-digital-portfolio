import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const titles = ["Crypto Engineer", "Backend Developer", "ALGO DEV & Trader", "Web 3.0"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-32">
      {/* 3D Crypto Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Floating 3D Crypto Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Bitcoin */}
        <div className="absolute top-[15%] left-[10%] w-16 h-16 opacity-20 animate-float">
          <div className="w-full h-full border-2 border-primary/60 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '15s' }}>
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" alt="" className="w-10 h-10" />
          </div>
        </div>
        {/* Ethereum */}
        <div className="absolute top-[25%] right-[15%] w-14 h-14 opacity-15 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full border-2 border-accent/50 rounded-lg transform rotate-45 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="" className="w-8 h-8 -rotate-45" />
          </div>
        </div>
        {/* Solana */}
        <div className="absolute bottom-[30%] left-[15%] w-12 h-12 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full border-2 border-primary/40 rounded-lg flex items-center justify-center animate-spin" style={{ animationDuration: '25s' }}>
            <img src="https://cryptologos.cc/logos/solana-sol-logo.svg" alt="" className="w-7 h-7" />
          </div>
        </div>
        {/* Polygon */}
        <div className="absolute bottom-[20%] right-[10%] w-10 h-10 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-full h-full border-2 border-accent/40 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '18s' }}>
            <img src="https://cryptologos.cc/logos/polygon-matic-logo.svg" alt="" className="w-6 h-6" />
          </div>
        </div>
        {/* BNB */}
        <div className="absolute top-[50%] left-[5%] w-8 h-8 opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-full h-full border border-primary/30 rounded-lg flex items-center justify-center animate-spin" style={{ animationDuration: '22s' }}>
            <img src="https://cryptologos.cc/logos/bnb-bnb-logo.svg" alt="" className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      {/* Blockchain Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse blur-md opacity-50" />
              <img
                src={profilePhoto}
                alt="Anandhavignesh R"
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/50"
              />
            </div>
          </div>

          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
            Hi there 👋, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-6 animate-slide-up">
            <span className="text-gradient">Anandhavignesh R</span>
          </h1>

          {/* Animated Titles */}
          <div className="h-12 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span
              className={`inline-block px-6 py-2 rounded-full text-lg md:text-xl font-bold bg-primary/20 border-2 border-primary text-primary transition-all duration-500 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
              }`}
            >
              {titles[currentTitleIndex]}
            </span>
          </div>

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
