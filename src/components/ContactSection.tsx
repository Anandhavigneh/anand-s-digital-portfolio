import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Anandhavigneh",
      color: "hover:text-foreground",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anandhavignesh02/",
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:anandhavigneshcr7@gmail.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"< Contact />"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-card border border-border text-center">
            {/* Email */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-mono font-semibold mb-2">Drop me a line</h3>
              <a
                href="mailto:anandhavigneshcr7@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors text-lg"
              >
                anandhavigneshcr7@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="mb-10">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Tiruchirappalli, Tamil Nadu, India</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button variant="glow" size="xl" asChild className="mb-10">
              <a href="mailto:anandhavigneshcr7@gmail.com">
                <Send className="w-5 h-5" />
                Send Message
              </a>
            </Button>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-secondary border border-border text-muted-foreground ${social.color} hover:border-primary/50 transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
