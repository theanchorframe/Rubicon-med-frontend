import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";
import { FluidParticlesBackground } from "@/components/ui/fluid-particles-background";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

interface FinalCTASectionProps {
  onOpenConsultationDialog: () => void;
}

const FinalCTASection = ({ onOpenConsultationDialog }: FinalCTASectionProps) => {
  const mounted = useMounted();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FluidParticlesBackground
      particleCount={1200}
      noiseIntensity={0.0015}
      particleSize={{ min: 0.3, max: 1.5 }}
      speed={0.00005}
      className="bg-navy text-navy-foreground"
    >
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={mounted ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Ready to Validate Your Next Move?
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0.85 }}>
                Join the MedTech and Pharma teams who've used Rubicon's insight to protect capital and accelerate market entry.
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  onClick={onOpenConsultationDialog}
                  className="shine-effect text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto bg-primary hover:bg-primary/90 whitespace-normal text-center leading-tight max-w-full"
                >
                  Request a Complimentary Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <img src={logo} alt="Rubicon Medical Marketing & Strategy Consultants Corp." className="h-12 w-auto" />
              <p className="text-sm text-navy-foreground/80">
                Expert MedTech consulting for product strategy and market success.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection("process")} className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                    Our Process
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("testimonials")} className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                    Testimonials
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("case-studies")} className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                    Case Studies
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("faq")} className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/in/robmiraglia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-navy-foreground/80 hover:text-navy-foreground transition-colors"
                >
                  <Linkedin size={20} />
                  <span>Rob's LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/privacy-policy" className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-navy-foreground/20 pt-8 text-center">
            <p className="text-sm text-navy-foreground/60">
              Copyright © 2026 Rubicon Medical Marketing & Strategy Consultants Corp. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </FluidParticlesBackground>
  );
};

export default FinalCTASection;
