import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import launchStrategyImage from "@/assets/launch-strategy.webp";
import clinicalInsightImage from "@/assets/clinical-insight.webp";
import deRiskImage from "@/assets/de-risk.webp";
import alignTeamsImage from "@/assets/align-teams.webp";

interface CaseStudiesSectionProps {
  onOpenConsultationDialog: () => void;
}

const CaseStudiesSection = ({ onOpenConsultationDialog }: CaseStudiesSectionProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const caseStudies = [
    {
      image: launchStrategyImage,
      tagline: "DATA-DRIVEN, PHYSICIAN-READY",
      title: "Validate product licensing and acquisitions",
      description:
        "Identify and mitigate investment risk in potential product licensing and acquisitions. We perform rigorous due diligence to isolate assets that lack market scalability due to technical limitations in geometry, sizing, or procedural compatibility. By triangulating these findings with KOL inquiries, we prevent the acquisition of products that cannot achieve critical mass in the clinical environment.",
      cta: "Request a Complimentary Consultation",
      overlayText:
        "From Clinical Evidence to Enterprise Partnership: How rigorous literature scanning and expert validation built the strategic foundation for a high-yield co-development project.",
    },
    {
      image: clinicalInsightImage,
      tagline: "CLINICALLY INFORMED. COMMERCIALLY PROVEN.",
      title: "Commercial Growth from Clinical and Market Insight",
      description:
        "We synchronize expert insights, segmentation, and targeted positioning to drive quick adoption. We translate clinical evidence into optimized messaging, ensuring your product enters the market with a defensible competitive advantage and clinical alignment.",
      cta: "Request a Complimentary Consultation",
      overlayText:
        "From KOL interviews and segmentation, Rob distills clinical insight into target segments, messaging, and claims that sales can use tomorrow to win faster and with proof.",
    },
    {
      image: deRiskImage,
      tagline: "BACKED BY 80+ PRODUCT and PROTYPE EVALUATIONS",
      title: "New Product Risk Mitigation",
      description:
        "We apply data-driven segmentation and VoC analysis so that your roadmap reflects true market demand.",
      cta: "Request a Complimentary Consultation",
      overlayText:
        "VoC and data modeling size real demand and barriers before you build. You drop low ROI bets and fund the moves with the strongest evidence.",
    },
  ];

  return (
    <section id="case-studies" className="pt-2 pb-20 bg-background overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Button
            size="xl"
            onClick={onOpenConsultationDialog}
            className="shine-effect text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto bg-primary hover:bg-primary/90 mb-8 whitespace-normal text-center leading-tight"
          >
            Request a Complimentary Consultation
          </Button>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-start ${index === 0 ? "bg-muted/50 rounded-xl p-6 md:p-8" : ""}`}
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
                  className={`w-full object-cover ${index === 0 ? "h-auto md:h-[500px]" : "h-auto md:h-[400px]"}`}
                />
                <div
                  className={`absolute inset-x-0 bottom-0 bg-black/90 text-white p-6 transition-all duration-500 ${
                    hoveredCard === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{study.overlayText}</p>
                </div>
              </div>

              {/* Text content - left aligned and starting at top */}
              <div className="space-y-6 w-full md:w-1/2 text-left">
                <p className="text-accent font-semibold italic text-xl">{study.tagline}</p>
                <h3 className="text-4xl lg:text-5xl font-bold text-navy">
                  {study.title}
                </h3>
                <p className="text-foreground leading-relaxed text-xl">
                  {study.description}
                </p>
                {index !== 0 && (
                  <Button 
                    size="lg" 
                    onClick={onOpenConsultationDialog}
                    className="shine-effect text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto bg-primary hover:bg-primary/90 whitespace-normal text-center leading-tight"
                  >
                    {study.cta}
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
