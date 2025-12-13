const SkillsSection = () => {
  const codingSkills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
    { name: "Polygon", icon: "https://cryptologos.cc/logos/polygon-matic-logo.svg" },
    { name: "Bitcoin", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg" },
    { name: "Ethereum", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
    { name: "Blockchain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  const tools = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "PyCharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Xcode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"< Skills />"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning web development, blockchain, and trading systems.
          </p>
        </div>

        {/* Coding Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-mono font-semibold mb-8 text-center">
            <span className="text-primary">{"{"}</span> I Code In <span className="text-primary">{"}"}</span>
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
            {codingSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 md:w-12 md:h-12 mb-2 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* IDE & Tools */}
        <div>
          <h3 className="text-xl font-mono font-semibold mb-8 text-center">
            <span className="text-primary">{"{"}</span> IDE & Tools I Use <span className="text-primary">{"}"}</span>
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-10 h-10 md:w-12 md:h-12 mb-2 group-hover:scale-110 transition-transform duration-300 invert"
                />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
