import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Lightbulb, PenTool, FlaskConical, Rocket } from "lucide-react";
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

  const handleViewFramework = () => {
    navigate("/");
    setTimeout(() => {
      const processSection = document.getElementById("process");
      if (processSection) {
        processSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const ideaSteps = [
    {
      letter: "I",
      title: "Insight & Discovery",
      description: "We'll dive deep into your market landscape, competitive dynamics, and unmet clinical needs to uncover the real opportunities.",
      icon: Lightbulb,
    },
    {
      letter: "D",
      title: "Design & Planning",
      description: "Together, we'll craft a strategic roadmap that aligns your product vision with market evidence and stakeholder buy-in.",
      icon: PenTool,
    },
    {
      letter: "E",
      title: "Execute the Evidence Plan",
      description: "We'll run the right research—VoC, KOL interviews, and segmentation—to build the proof that drives decisions.",
      icon: FlaskConical,
    },
    {
      letter: "A",
      title: "Adoption & Optimization",
      description: "Your launch strategy will be refined with physician-validated messaging and evidence-backed positioning for maximum impact.",
      icon: Rocket,
    },
  ];

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

      {/* What Happens Next - IDEA Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What Happens Next?</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Your journey with Rubicon follows our proven <span className="font-bold text-accent">IDEA</span> framework—a systematic approach that transforms gut feel into evidence-backed strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ideaSteps.map((step, index) => (
              <div
                key={index}
                className="bg-accent/5 border border-accent/20 rounded-lg p-6 hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {step.letter}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-5 h-5 text-accent" />
                      <h3 className="font-semibold text-navy text-lg">{step.title}</h3>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Framework CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Want to Learn More About Our Framework?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Discover the complete IDEA process and see how Rubicon's evidence-driven approach has helped MedTech leaders make confident, board-ready decisions.
          </p>
          <Button
            size="lg"
            onClick={handleViewFramework}
            className="shine-effect bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg"
          >
            Explore the IDEA Framework
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYouConsultation;
