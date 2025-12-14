import { Github, TrendingUp, Bot, Coins, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectTradingBot from "@/assets/project-trading-bot.png";
import projectSniperBot from "@/assets/project-sniper-bot.png";
import projectAutomation from "@/assets/project-automation.png";
import projectCryptoAnalytics from "@/assets/project-crypto-analytics.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Algorithmic Trading Bot",
      description: "AI-powered trading bot using Supertrend Indicator for automated cryptocurrency trading with real-time market analysis and execution.",
      tags: ["Python", "AI", "Trading", "Blockchain"],
      icon: TrendingUp,
      image: projectTradingBot,
      link: "https://github.com/Anandhavigneh",
    },
    {
      title: "Uniswap V2 BASE Network Sniper Bot",
      description: "Automated sniper bot built for the BASE network that detects newly created Uniswap V2 pairs and executes instant buy trades via MetaMask integration with built-in security checks for safer launches.",
      tags: ["Uniswap V2", "BASE Network", "MetaMask", "Web3", "Solidity", "Sniper Bot"],
      icon: Coins,
      image: projectSniperBot,
      link: "https://github.com/Anandhavigneh",
    },
    {
      title: "Automation Workflows",
      description: "Custom automation pipelines using n8n and Make for data processing, API integrations, and workflow optimization.",
      tags: ["n8n", "Make", "Apify", "Automation"],
      icon: Workflow,
      image: projectAutomation,
      link: "https://github.com/Anandhavigneh",
    },
    {
      title: "Crypto Trading Analytics",
      description: "TradingView-integrated analytics dashboard for real-time cryptocurrency market analysis and signal generation.",
      tags: ["TradingView", "Analytics", "Crypto", "Python"],
      icon: Bot,
      image: projectCryptoAnalytics,
      link: "https://github.com/Anandhavigneh",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating 3D crypto cubes */}
        <div className="absolute top-20 left-10 w-20 h-20 opacity-20 animate-float">
          <div className="w-full h-full border-2 border-primary/50 rounded-lg transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}>
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" alt="" className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45" />
          </div>
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 opacity-15 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full border-2 border-accent/50 rounded-lg transform rotate-12 animate-spin" style={{ animationDuration: '25s' }}>
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="" className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 w-18 h-18 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full border-2 border-primary/30 rounded-lg transform -rotate-12 animate-spin" style={{ animationDuration: '30s' }}>
            <img src="https://cryptologos.cc/logos/polygon-matic-logo.svg" alt="" className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 w-14 h-14 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-full h-full border-2 border-accent/40 rounded-lg transform rotate-30 animate-spin" style={{ animationDuration: '22s' }}>
            <img src="https://cryptologos.cc/logos/solana-sol-logo.svg" alt="" className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        
        {/* 3D Blockchain connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blockchain-3d-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="3" fill="currentColor" className="text-primary animate-pulse" />
              <circle cx="10" cy="10" r="2" fill="currentColor" className="text-accent" />
              <circle cx="110" cy="110" r="2" fill="currentColor" className="text-primary" />
              <line x1="60" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <line x1="60" y1="60" x2="60" y2="120" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <line x1="60" y1="60" x2="10" y2="10" stroke="currentColor" strokeWidth="0.3" className="text-accent" strokeDasharray="4 2" />
              <line x1="60" y1="60" x2="110" y2="110" stroke="currentColor" strokeWidth="0.3" className="text-accent" strokeDasharray="4 2" />
            </pattern>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(180 100% 50%)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(280 100% 65%)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#blockchain-3d-pattern)" />
        </svg>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"< Projects />"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions in blockchain, algorithmic trading, and Web 3.0 development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="group rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
              >
                {/* Project Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="gap-2" asChild>
            <a href="https://github.com/Anandhavigneh" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
