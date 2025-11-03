import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Product Evaluation & Concept Vetting",
      description:
        "Identify and stop costly misfires before they drain budget or delay your launch. Our proven evaluation process blends technical, clinical, and regulatory checks with market sizing and patient coverage analysis so you invest only in concept built to win.",
    },
    {
      title: "Clinical & Market Research",
      description:
        "Turn complex data into market clarity. We combine KOL interviews, clinician panels, and secondary research across medical literature, industry reports, and databases to translate evidence into actionable strategies that guide confident product decisions.",
    },
    {
      title: "KOL & Voice-of-Customer Programs",
      description:
        "Accelerate adoption by building clinical credibility. From identifying and contracting Key Opinion Leaders to running compliant interviews, panels, and field trials, we capture the voice of physicians and patients to shape messaging that resonates and drives uptake.",
    },
    {
      title: "Commercial Strategy & Launch",
      description:
        "Turn insight into adoption at scale. We craft go-to-market playbooks, sales enablement, and messaging rooted in evidence so your launch not only hits targets, but sustains momentum long after market entry.",
    },
    {
      title: "Upstream Portfolio Strategy & Road mapping",
      description:
        "Prioritize the right bets and align your teams. Through segmentation, positioning, and product roadmaps, we cut through internal noise and keep R&D, marketing, and sales focused on products with the highest clinical and commercial return.",
    },
    {
      title: "Pricing, Forecasting & Financial Modeling",
      description:
        "Build a revenue story that holds up under scrutiny. Our financial modeling—from competitive ASPs to contribution goals—gives leadership and investors a roadmap backed by defendable numbers, not guesswork.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-navy text-center mb-4">
          Strategic Product Intelligence That Shapes What You Build and How You
          Launch
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border space-y-4"
            >
              <h3 className="text-xl font-bold text-navy">{service.title}</h3>
              <p className="text-foreground/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="shine-effect text-lg px-8 py-6 bg-primary hover:bg-primary/90"
          >
            Ready to Validate Your Market Before You Commit?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
