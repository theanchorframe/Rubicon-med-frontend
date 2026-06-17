import { Link, useLocation, useNavigate } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith("/blog");
  const isAboutPage = location.pathname === "/about";
  const isServicesPage = location.pathname === "/services";
  const isSubPage = isBlogPage || isAboutPage || isServicesPage;

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <footer className="bg-navy text-navy-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4 flex flex-col items-center text-center">
            <img
              src={logo}
              alt="Rubicon Medical Marketing & Strategy Consultants Corp."
              className="h-20 w-auto mx-auto"
              loading="lazy"
              decoding="async"
            />
            <p className="text-sm text-navy-foreground/80 tracking-wider">
              Know your evidence. Know your clinician. Know your market.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={handleHomeClick} className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/blog")} className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/about")} className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/services")} className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                  Services
                </button>
              </li>
              {!isSubPage && (
                <>
                  <li>
                    <button onClick={() => scrollToSection("case-study")} className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                      EPD Case Study
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("faq")} className="text-navy-foreground/80 hover:text-navy-foreground transition-colors">
                      FAQ
                    </button>
                  </li>
                </>
              )}
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
              <a
                href="mailto:rob@rubiconmed.us?subject=Rubicon%20Consultation%20Inquiry"
                className="flex items-center gap-2 text-sm text-navy-foreground/80 hover:text-navy-foreground transition-colors"
              >
                <Mail size={20} />
                <span>rob@rubiconmed.us</span>
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
            Copyright © 2026 Rubicon Medical Marketing & Strategy Consultants Corp. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
