import { Button } from "@/components/ui/button";
import meetingImage from "@/assets/meeting-presentation.webp";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image */}
            <div className="md:w-1/2">
              <img 
                src={meetingImage} 
                alt="Rob Miraglia presenting strategic insights" 
                className="w-full aspect-[4/3] object-cover rounded-lg border-4 border-primary shadow-lg"
              />
            </div>
            
            {/* Text Content */}
            <div className="md:w-1/2 space-y-6">
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
                className="shine-effect text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              >
                Get Rob's Perspective
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
