import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onOpenConsultationDialog: () => void;
}

const AboutSection = ({ onOpenConsultationDialog }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 bg-background scroll-mt-20">
      <div className="mx-auto px-5">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy">Meet Rob Miraglia</h2>
          <p className="text-lg text-foreground leading-relaxed">
            ing and strategy consultant who sits at the intersection of clinical insight and commercial reality. He has
            spent more than 25 years in medtech, pharma, and diagnostics, including leadership roles at Abbott,
            Medtronic, 3M, and Integer, helping teams decide which ideas are worth funding and which ones are not.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            His work focuses on one thing: turning clinical promise into growth. Rob partners with CEOs and clinical
            leaders to clarify the real-world problem, pressure test the value story with KOLs, and build a business
            case that stands up to finance, procurement, and clinicians. He has engaged over 25 specialty KOLs, sized
            and prioritized more than 10 markets, supported 40 plus product and market initiatives, and helped clients
            avoid at least 1.5 million dollars in non-viable investment.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            When the stakes are high and missteps are expensive, Rob gives teams a clear path from idea to launch so
            they can commit resources with confidence.
          </p>
          <Button
            size="lg"
            onClick={onOpenConsultationDialog}
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
