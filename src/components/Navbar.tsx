import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface NavbarProps {
  onOpenConsultationDialog: () => void;
}

const Navbar = ({ onOpenConsultationDialog }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isBlogPage = location.pathname.startsWith("/blog");
  const isAboutPage = location.pathname === "/about";
  const isServicesPage = location.pathname === "/services";
  const isSubPage = isBlogPage || isAboutPage || isServicesPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
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
            <button 
              onClick={handleLogoClick}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img 
                src={logo} 
                alt="Rubicon Medical" 
                className={`transition-all duration-300 ${
                  isScrolled ? "h-14" : "h-20"
                }`}
                loading="lazy"
                decoding="async"
              />
              <div>
                <span className={`block font-bold text-foreground leading-[1.05] transition-all duration-300 text-left ${
                  isScrolled ? "text-sm md:text-base" : "text-base md:text-lg"
                }`}>
                  Rubicon Medical Marketing & Strategy Consultants
                </span>
                <span className={`block text-foreground/80 italic transition-all duration-300 text-center ${
                  isScrolled ? "text-xs md:text-sm" : "text-sm md:text-base"
                }`}>
                  Know your clinician. Know your market.
                </span>
              </div>
            </button>

            {isSubPage ? (
              /* Simplified navbar for blog/about pages - only page links */
              <div className="hidden lg:flex items-center gap-4 ml-8">
                <button onClick={handleLogoClick} className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base">Home</button>
                <button onClick={() => navigate("/blog")} className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base">Blog</button>
                <button onClick={() => navigate("/about")} className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base">About</button>
                <button onClick={() => navigate("/services")} className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base">Services</button>
                <Button className="shine-effect text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90" onClick={() => onOpenConsultationDialog()}>Request a Consult</Button>
              </div>
            ) : (
              <>
                <div className="hidden lg:flex items-center gap-4 ml-8">
                  <button onClick={handleLogoClick} className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base">Home</button>
                  <button onClick={() => navigate("/blog")} className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base">Blog</button>
                  <button onClick={() => navigate("/about")} className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base">About</button>
                  <button onClick={() => navigate("/services")} className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base">Services</button>
                  <button onClick={() => handleNavClick("case-study")} className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base">EPD Case Study</button>
                  <button onClick={() => handleNavClick("faq")} className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base">FAQ</button>
                  <Button className="shine-effect text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90" onClick={() => onOpenConsultationDialog()}>Request a Consult</Button>
                </div>

                <button className="lg:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </>
            )}

            {isSubPage && (
              <button className="lg:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-background border-t transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button onClick={() => { navigate("/"); setIsMobileMenuOpen(false); }} className="nav-link block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium text-base">Home</button>
            <button onClick={() => { navigate("/blog"); setIsMobileMenuOpen(false); }} className="nav-link block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium text-base">Blog</button>
            <button onClick={() => { navigate("/about"); setIsMobileMenuOpen(false); }} className="nav-link block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium text-base">About</button>
            <button onClick={() => { navigate("/services"); setIsMobileMenuOpen(false); }} className="nav-link block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium text-base">Services</button>
            {!isSubPage && (
              <>
                <button onClick={() => handleNavClick("case-study")} className="nav-link block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium text-base">EPD Case Study</button>
                <button onClick={() => handleNavClick("faq")} className="nav-link block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium text-base">FAQ</button>
              </>
            )}
            <Button className="w-full shine-effect text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90" onClick={() => { onOpenConsultationDialog(); setIsMobileMenuOpen(false); }}>Request a Consult</Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
