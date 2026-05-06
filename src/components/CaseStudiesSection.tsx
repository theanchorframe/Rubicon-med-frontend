import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";
import launchStrategyImage from "@/assets/launch-strategy.webp";
import clinicalInsightImage from "@/assets/clinical-insight.webp";
import deRiskImage from "@/assets/de-risk.webp";

interface CaseStudiesSectionProps {
  onOpenConsultationDialog: () => void;
}

const CaseStudiesSection = ({ onOpenConsultationDialog }: CaseStudiesSectionProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const mounted = useMounted();

  const caseStudies = [
    {
      image: launchStrategyImage,
      title: "Precision Before Investment: The Rubicon Model",
      description:
        "In the high-stakes environment of MedTech development, the most expensive mistake companies make is funding a product that the market doesn't want, the clinical data don't support or the geometries and construction are insufficient. We serve as the strategic \"gate\" between an idea and a multi-million dollar investment",
      cta: "Request a Complimentary Consultation",
      overlayText:
        "Precision before investment. We use VoC and predictive modeling to quantify market demand and identify barriers, allowing you to cut low-ROI projects and invest in only winners.",
    },
    {
      image: clinicalInsightImage,
      title: "Enter the Market With a Defensible Competitive Advantage",
      description:
        "We identify your highest-value segments, translate clinical evidence into targeted positioning, and develop messaging that drives adoption and stands up to scrutiny.",
      cta: "Request a Complimentary Consultation",
      overlayText:
        "We convert KOL insights into the market segments and clinical claims your sales team needs to win — before your competitors find them first.",
    },
    {
      image: deRiskImage,
      title: "Build a Roadmap That Reflects Actual Market Demands",
      description:
        "Many product roadmaps are built on assumptions, not market reality. Rubicon applies Voice of Customer analysis to ensure every development decision is grounded in what clinicians, patients, and payers will support.",
      cta: "Request a Complimentary Consultation",
      overlayText: "Turn Clinical Evidence Into the Co-Development Partnerships That Fund Your Next Product.",
    },
  ];

  return (
    <section id="case-studies" className="pt-2 pb-20 bg-background overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={mounted ? { opacity: 0, y: 50 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Image with hover overlay */}
              <div
                className="relative overflow-hidden group w-full md:w-1/2 rounded-lg"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full object-cover h-auto md:h-[450px]"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 bg-black/90 text-white p-6 transition-all duration-500 ${
                    hoveredCard === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{study.overlayText}</p>
                </div>
              </div>

              {/* Text content - vertically centered */}
              <div className="space-y-6 w-full md:w-1/2 text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-navy">{study.title}</h3>
                <p className="text-foreground leading-relaxed text-xl">{study.description}</p>
                <Button
                  size="lg"
                  onClick={onOpenConsultationDialog}
                  className="shine-effect text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto bg-primary hover:bg-primary/90 whitespace-normal text-center leading-tight"
                >
                  {study.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
