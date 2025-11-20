import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-navy-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="Rubicon Medical Marketing & Strategy Consultants Corp." className="h-12 w-auto" />
            <p className="text-sm text-navy-foreground/80">
              Expert MedTech consulting for product strategy and market success.
            </p>
          </div>

          {/* Quick Links */}
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

          {/* Contact */}
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

          {/* Legal */}
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

        {/* Bottom Bar */}
        <div className="border-t border-navy-foreground/20 pt-8 text-center">
          <p className="text-sm text-navy-foreground/60">
            Copyright © 2025 Rubicon Medical Marketing & Strategy Consultants Corp. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
