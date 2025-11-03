import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy">
            Meet Rob Miraglia – 15+ Years of Clarity, Alignment, and Execution
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Robert Miraglia is a strategic product leader and launch advisor with
            a proven track record across medical device, pharmaceutical, and
            managed healthcare sectors. His rare combination of clinical insight,
            qualitative and quantitative marketing research, portfolio strategy,
            and commercial execution has earned him a reputation as the go-to
            consultant when considering build-your-own products or purchasing
            products from a partner
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            From negotiating <span className="font-bold">$1.5M</span> in vendor
            savings to leading <span className="font-bold">80+</span> product
            evaluations, Rob doesn't just advise, he engineers clarity at scale.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const formSection = document.getElementById("consultation-form");
              if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="shine-effect text-xl px-12 py-8 h-auto bg-primary hover:bg-primary/90"
          >
            Get Rob's Perspective
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
