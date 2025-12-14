import { Github, ExternalLink, TrendingUp, Bot, Coins, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectTradingBot from "@/assets/project-trading-bot.png";
import projectWeb3Dapp from "@/assets/project-web3-dapp.png";
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
      title: "Web3 DApp Development",
      description: "Decentralized application built on Ethereum and Polygon networks with smart contract integration for secure transactions.",
      tags: ["Solidity", "Ethereum", "Polygon", "Web3"],
      icon: Coins,
      image: projectWeb3Dapp,
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
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating crypto icons */}
        <div className="absolute top-20 left-10 w-16 h-16 opacity-10 animate-pulse">
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>
          <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute bottom-40 left-20 w-14 h-14 opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>
          <img src="https://cryptologos.cc/logos/polygon-matic-logo.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 right-10 w-10 h-10 opacity-10 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" alt="" className="w-full h-full" />
        </div>
        
        {/* Blockchain connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blockchain-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-primary" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <line x1="50" y1="50" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blockchain-pattern)" />
        </svg>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
          {projects.map((project, index) => {
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
