import { Button } from "@/components/ui/button";

const StatsSection = () => {
  const stats = [
    {
      number: "$30M",
      description: "Forecasted revenue from new device launch",
    },
    {
      number: "24%",
      description: "Increase in market adoption by highest unit/clinical segment",
    },
    {
      number: "40+",
      description: "Projects delivered across MedTech & Pharma",
    },
    {
      number: "$1.5M",
      description: "Prevented in wasted product investment",
    },
  ];

  return (
    <section className="py-20 bg-navy text-navy-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Turning Product Strategy Into Tangible Success
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-navy-foreground/10 backdrop-blur-sm p-8 rounded-lg text-center border border-navy-foreground/20"
            >
              <p className="text-5xl font-bold mb-4">{stat.number}</p>
              <p className="text-navy-foreground/90">{stat.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="shine-effect text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90"
          >
            Get Clarity On Your Path Forward
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
