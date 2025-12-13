import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

import certMagicBus from "@/assets/cert-magic-bus.jpg";
import certWadhwani from "@/assets/cert-wadhwani.jpg";
import certBnRathi from "@/assets/cert-bn-rathi.jpg";
import certJamalCollege from "@/assets/cert-jamal-college.jpg";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Magic Bus FutureX Livelihood Programme",
      issuer: "Michael & Susan Dell Foundation",
      date: "July 2025 - October 2025",
      image: certMagicBus,
      description: "Successfully completed the Magic Bus FutureX Livelihood Programme.",
    },
    {
      title: "Obtain an Appropriate Job",
      issuer: "Wadhwani Foundation",
      date: "September 29, 2025",
      image: certWadhwani,
      description: "Microcertificate of Completion - 7 hours of training on job acquisition skills.",
    },
    {
      title: "Algorithmic Trading AI Bot Development",
      issuer: "B N Rathi Securities Limited",
      date: "February - June 2025",
      image: certBnRathi,
      description: "Internship in Algorithmic Trading AI Bot with Supertrend Indicator and Blockchain integration.",
    },
    {
      title: "PC Hardware and Troubleshooting",
      issuer: "Jamal Mohamed College",
      date: "July 2022",
      image: certJamalCollege,
      description: "Value Added Course conducted by the Department of Computer Application.",
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"< Certifications />"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Credentials and certificates that validate my skills and continuous learning journey.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Dialog key={cert.title}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-border">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-sm md:text-base line-clamp-2 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-sm text-primary font-mono mt-1">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-border">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
