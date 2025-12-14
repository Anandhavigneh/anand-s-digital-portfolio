import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [cryptoPrices, setCryptoPrices] = useState<{ btc: string; eth: string }>({
    btc: "Loading...",
    eth: "Loading...",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
        );
        const data = await response.json();
        setCryptoPrices({
          btc: `$${data.bitcoin.usd.toLocaleString()}`,
          eth: `$${data.ethereum.usd.toLocaleString()}`,
        });
      } catch (error) {
        setCryptoPrices({ btc: "$--", eth: "$--" });
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Dark Mode Toggle - Left */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-muted-foreground hover:text-primary"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <a href="#" className="font-mono text-xl font-bold text-gradient">
              {"<AV />"}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Crypto Prices & Resume Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-primary/10 border border-primary/20">
                <img
                  src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
                  alt="BTC"
                  className="w-4 h-4"
                />
                <span className="text-primary">{cryptoPrices.btc}</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-primary/10 border border-primary/20">
                <img
                  src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
                  alt="ETH"
                  className="w-4 h-4"
                />
                <span className="text-primary">{cryptoPrices.eth}</span>
              </div>
            </div>
            <Button variant="glow" size="sm" asChild>
              <a
                href="https://drive.google.com/file/d/1OFQUROZdRURVzL98QY-63lXggfulxc8N/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {/* Mobile Crypto Prices */}
              <div className="flex items-center gap-3 text-xs font-mono pb-4 border-b border-border">
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-primary/10 border border-primary/20">
                  <img
                    src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
                    alt="BTC"
                    className="w-4 h-4"
                  />
                  <span className="text-primary">{cryptoPrices.btc}</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-primary/10 border border-primary/20">
                  <img
                    src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
                    alt="ETH"
                    className="w-4 h-4"
                  />
                  <span className="text-primary">{cryptoPrices.eth}</span>
                </div>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="glow" size="sm" className="w-fit" asChild>
                <a
                  href="https://drive.google.com/file/d/1OFQUROZdRURVzL98QY-63lXggfulxc8N/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
