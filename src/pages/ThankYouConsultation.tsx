import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import consultationBanner from "@/assets/thank-you-consultation-banner.jpg";
import logo from "@/assets/logo.png";

const ThankYouConsultation = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Rubicon Medical Marketing & Strategy Consultants Corp." className="h-16 w-auto" />
          </Link>
          <Button variant="ghost" size="sm" className="gap-2" onClick={handleBackToHome}>
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </div>
      </header>
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${consultationBanner})` }}
        >
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-accent" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Thank You for Reaching Out!
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            We've received your consultation request and will be in touch within 24 hours to discuss how we can help accelerate your MedTech success.
          </p>
          
          <Button
            size="lg"
            onClick={handleBackToHome}
            className="shine-effect bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base sm:text-lg"
          >
            Return to Home
          </Button>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold text-navy">What Happens Next?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Initial Review</h3>
                  <p className="text-foreground/80">
                    Our team will review your request and prepare for our conversation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Personal Outreach</h3>
                  <p className="text-foreground/80">
                    We'll reach out within 24 hours to schedule a convenient time to discuss your needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Strategic Discussion</h3>
                  <p className="text-foreground/80">
                    We'll have an in-depth conversation about your product strategy and market goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYouConsultation;
