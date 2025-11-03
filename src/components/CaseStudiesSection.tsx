import { Button } from "@/components/ui/button";
import { useState } from "react";
import meetingImage from "@/assets/meeting-presentation.jpg";
import dataImage from "@/assets/data-analysis.jpg";
import productImage from "@/assets/product-development.jpg";
import roundtableImage from "@/assets/clinical-roundtable.jpg";

const CaseStudiesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const caseStudies = [
    {
      image: meetingImage,
      tagline: "DATA-DRIVEN, PHYSICIAN-READY",
      title: "Avoid 7-Figure Launch Misfires With Upstream Strategy That Aligns Teams",
      description:
        "Rob identifies misalignment early across research, positioning, and stakeholder input so that your product launches with clarity, confidence, and cross-functional buy-in.",
      cta: "Book Your Clarity Call Now",
      overlayText:
        "VoC and data modeling size real demand and barriers before you build. You drop low ROI bets and fund the moves with the strongest evidence.",
    },
    {
      image: dataImage,
      tagline: "CLINICALLY INFORMED. COMMERCIALLY PROVEN.",
      title: "Turn Clinical Insight Into Strategy That Wins Market Share",
      description:
        "Rob blends KOL interviews, segmentation, and evidence-based messaging so products land with speed, proof, and precision.",
      cta: "Align Product Decisions With Proof",
      overlayText:
        "From KOL interviews and segmentation, Rob distills clinical insight into target segments, messaging, and claims that sales can use tomorrow to win faster and with proof.",
    },
    {
      image: productImage,
      tagline: "BACKED BY 80+ PRODUCT and PROTYPE EVALUATIONS",
      title: "De-Risk Every Product Bet With Proven Market Insight",
      description:
        "Robert applies data-driven segmentation and VoC analysis so that your roadmap reflects real market demand, not assumptions.",
      cta: "Find the Blind Spots in Your Launch Plan",
      overlayText:
        "VoC and data modeling size real demand and barriers before you build. You drop low ROI bets and fund the moves with the strongest evidence.",
    },
    {
      image: roundtableImage,
      tagline: "CLINICIAN-LED, PATIENT-BACKED",
      title: "Align Teams Quickly with Patient and Clinician Roundtables",
      description:
        "Too many opinions, not enough evidence? Patient and clinician sessions deliver the ranked action plan you can execute this quarter.",
      cta: "Schedule Your First Panel",
      overlayText:
        "Patient and clinician roundtables bring clarity fast. Rob facilitates sessions that surface unmet needs, rank priorities, and deliver actionable insights your team can implement immediately.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Button
            size="lg"
            className="shine-effect text-lg px-8 py-6 bg-primary hover:bg-primary/90 mb-8"
          >
            Turn Your Launch Into the Next Case Study
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-[400px] object-cover rounded-lg"
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
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div key={index} className="space-y-4">
              <p className="text-accent font-semibold italic">{study.tagline}</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-navy">
                {study.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {study.description}
              </p>
              <Button className="shine-effect bg-primary hover:bg-primary/90">
                {study.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
