import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-md"
      }`}>
        <div className="container mx-auto px-6 md:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-20" : "h-24"
          }`}>
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Rubicon Medical" 
                className={`transition-all duration-300 ${
                  isScrolled ? "h-14" : "h-20"
                }`}
              />
              <div>
                <h1 className={`font-bold text-foreground leading-tight transition-all duration-300 ${
                  isScrolled ? "text-sm md:text-base" : "text-base md:text-lg"
                }`}>
                  Rubicon Medical Marketing &<br />Strategy Consultants
                </h1>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("case-study")}
                className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base"
              >
                Case Study
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base"
              >
                FAQ
              </button>
              <Button 
                className="shine-effect text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90"
                onClick={() => {
                  const formSection = document.getElementById("consultation-form");
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                Request a Consult
              </Button>
            </div>

            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-background border-t transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="nav-link block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium text-base"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("case-study")}
              className="nav-link block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium text-base"
            >
              Case Study
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="nav-link block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium text-base"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="nav-link block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium text-base"
            >
              FAQ
            </button>
            <Button 
              className="w-full shine-effect text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90"
              onClick={() => {
                const formSection = document.getElementById("consultation-form");
                if (formSection) {
                  formSection.scrollIntoView({ behavior: "smooth" });
                }
                setIsMobileMenuOpen(false);
              }}
            >
              Request a Consult
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
