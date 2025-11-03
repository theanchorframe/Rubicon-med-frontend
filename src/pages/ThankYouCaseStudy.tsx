import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import caseStudyBanner from "@/assets/thank-you-case-study-banner.jpg";

const ThankYouCaseStudy = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${caseStudyBanner})` }}
        >
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <div className="flex justify-center mb-6">
            <Download className="w-20 h-20 text-accent" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Your Case Study is Ready!
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Thank you for your interest. Check your email for the case study download link and insights into successful MedTech strategies.
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
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold text-navy">What's Inside?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Real-World Results</h3>
                  <p className="text-foreground/80">
                    See how successful MedTech companies achieved breakthrough results with proven strategies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Strategic Framework</h3>
                  <p className="text-foreground/80">
                    Learn the methodologies and approaches that drive commercial success in medical technology.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Actionable Insights</h3>
                  <p className="text-foreground/80">
                    Discover practical takeaways you can apply to your own product strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-primary/20">
              <p className="text-foreground/80">
                <strong className="text-navy">Need help applying these insights?</strong> Our team is ready to discuss how these strategies can be customized for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYouCaseStudy;
