import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import doctorImage from "@/assets/doctor-tablet.png";

const FinalCTASection = () => {
  const points = [
    "Engaged 25+ KOLs across specialties to validate need and specifications",
    "Conceived and launches a new platform with $30M in forecasted revenue",
    "Saved $1.5M by preventing purchase of a non-viable device",
    "Sized and prioritized 10+ markets (TAM/SAM/SOM) to focus spend where adoption is highest",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent font-semibold italic text-center mb-4">
            Trusted advisor on 20+ MedTech products worldwide
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy text-center mb-8">
            Get Expert Eyes on Your Launch Before It's Too Late
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground">
                Walk away knowing what to <span className="font-bold">build</span>
                , who will <span className="font-bold">buy it</span>, and why it
                will <span className="font-bold">succeed.</span>
              </p>
              <div className="space-y-4">
                {points.map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <Check className="text-accent flex-shrink-0 mt-1" size={24} />
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="shine-effect text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              >
                Schedule a FREE Consultation Call
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src={doctorImage}
                alt="Medical Professional"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
