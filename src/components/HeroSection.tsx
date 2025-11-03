import { Button } from "@/components/ui/button";
import doctorImage from "@/assets/doctor-tablet.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-accent font-semibold text-lg italic">
              Trusted Advisor to the MedTech Field
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-navy leading-tight">
              MedTech Success: Discover the Perfect Product, for the Ideal
              Market, Designed for the Right Patients
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              We help MedTech companies leverage data and physician validation
              to create disruptive products that enhance patient health, with
              optimal technology and the right dimensional attributes for the
              right markets and patients, all while keeping{" "}
              <span className="font-bold">SKU complexity under control.</span>
            </p>
            <Button
              size="lg"
              className="shine-effect text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            >
              Get Expert Eyes on Your Product Strategy
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={doctorImage}
              alt="Medical Professional"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
