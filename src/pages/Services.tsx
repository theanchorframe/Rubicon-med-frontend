import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import CaseStudyPopup from "@/components/CaseStudyPopup";
import ClientOnly from "@/components/ClientOnly";
import { useMounted } from "@/hooks/useMounted";

import serviceProductEvaluation from "@/assets/service-product-evaluation.jpg";
import serviceClinicalResearch from "@/assets/service-clinical-research.jpg";
import serviceKolPrograms from "@/assets/service-kol-programs.jpg";
import serviceCommercialLaunch from "@/assets/service-commercial-launch.jpg";
import servicePortfolioStrategy from "@/assets/service-portfolio-strategy.jpg";
import serviceFinancialModeling from "@/assets/service-financial-modeling.jpg";

const services = [
  {
    title: "Product Evaluation & Concept Vetting",
    subtitle: "Your capital only goes to products with a validated path to market leadership.",
    description:
      "Our proven framework integrates multidimensional technical, clinical, and regulatory due diligence with rigorous market modeling. We synthesize competitive intelligence and growth drivers to ensure capital is deployed only into assets with a validated path to market leadership. From early-stage concepts to portfolio acquisitions, we provide the analytical rigor that separates promising ideas from proven opportunities.",
    bullets: [
      "Technical, clinical & regulatory due diligence",
      "Competitive intelligence & market modeling",
      "Investment decision frameworks",
      "Portfolio acquisition analysis",
    ],
    image: serviceProductEvaluation,
  },
  {
    title: "Clinical & Market Research",
    subtitle: "Every investment decision backed by evidence, not assumptions.",
    description:
      "Drive confident product investment through clinical and market triangulation. We leverage expert consultations and comprehensive database analytics to distill complex evidence into an actionable roadmap — eliminating market ambiguity and securing your path to entry. Our research methodology combines primary and secondary sources to build an unassailable evidence base.",
    bullets: [
      "Expert consultations & database analytics",
      "Market sizing & segmentation",
      "Competitive landscape analysis",
      "Evidence-based roadmap development",
    ],
    image: serviceClinicalResearch,
  },
  {
    title: "KOL & Voice-of-Customer Programs",
    subtitle: "Market credibility built before you spend a dollar on launch.",
    description:
      "Accelerate market adoption through clinical advocacy and expert mobilization. We manage the full-lifecycle engagement of Key Opinion Leaders — from strategic identification and contracting to the execution of IDIs, surveys, field trials, and clinician panels. By synthesizing the 'Voice of Customer' into evidence-based messaging, we ensure your value proposition resonates with providers and drives accelerated uptake.",
    bullets: [
      "KOL identification & contracting",
      "IDIs, surveys & clinician panels",
      "Voice-of-Customer synthesis",
      "Evidence-based messaging development",
    ],
    image: serviceKolPrograms,
  },
  {
    title: "Commercial Strategy & Launch",
    subtitle: "Market entry strategies that sustain momentum long after launch day.",
    description:
      "Turn insight into adoption at scale. We craft go-to-market strategies and playbooks, sales enablement, and messaging rooted in evidence so your launch not only hits targets, but sustains momentum long after market entry. Our launch frameworks have been battle-tested across 40+ projects in vascular intervention, pharmaceuticals, and diagnostics.",
    bullets: [
      "Go-to-market strategy & playbooks",
      "Sales enablement & training",
      "Evidence-based messaging",
      "Launch execution & tracking",
    ],
    image: serviceCommercialLaunch,
  },
  {
    title: "Upstream Portfolio Strategy & Roadmapping",
    subtitle: "Resources concentrated on the assets with the highest return.",
    description:
      "Optimize resource allocation and cross-functional alignment. By defining rigorous segmentation, targeting, and positioning (STP) frameworks alongside multi-year product roadmaps, we isolate high-potential opportunities. This allows R&D, Marketing, and Sales to concentrate resources on assets with the highest ROI.",
    bullets: [
      "Segmentation, targeting & positioning",
      "Multi-year product roadmaps",
      "Cross-functional alignment",
      "Resource optimization frameworks",
    ],
    image: servicePortfolioStrategy,
  },
  {
    title: "Pricing, Forecasting & Financial Modeling",
    subtitle: "Revenue projections that hold up under board-level scrutiny.",
    description:
      "Enable executive decision-making with rigorous financial modeling. We translate market dynamics and value-based pricing into accurate revenue projections that hold up under institutional scrutiny. Our models provide the clarity needed to synchronize AOP targets with actual clinical and commercial scalability.",
    bullets: [
      "Value-based pricing strategies",
      "Revenue forecasting & projections",
      "AOP target synchronization",
      "Scalability modeling",
    ],
    image: serviceFinancialModeling,
  },
];

const Services = () => {
  const [isConsultationDialogOpen, setIsConsultationDialogOpen] = useState(false);
  const [isCaseStudyPopupOpen, setIsCaseStudyPopupOpen] = useState(false);
  const mounted = useMounted();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />

      {/* Header */}
      <header className="bg-navy pt-40 pb-16">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <motion.h1
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-navy-foreground mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-navy-foreground mx-auto"
            style={{ fontSize: "1.1rem", opacity: 0.85, maxWidth: "650px", lineHeight: "1.7" }}
          >
            Six ways Rubicon turns clinical and market intelligence into defensible commercial decisions.
          </motion.p>
        </div>
      </header>

      {/* Zigzag Services */}
      <main>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const showCaseStudyCTA = index === 3; // After 3rd service

          return (
            <div key={index}>
              {showCaseStudyCTA && (
                <section className="py-16 md:py-20 bg-navy">
                  <div className="container mx-auto px-6 md:px-8 max-w-4xl text-center">
                    <motion.div
                      initial={mounted ? { opacity: 0, y: 20 } : false}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground">
                        See These Services in Action
                      </h2>
                      <p className="text-navy-foreground/80 text-lg max-w-2xl mx-auto">
                        Download our case study to see how Rubicon helped a MedTech company validate their product concept and accelerate time-to-market.
                      </p>
                      <Button
                        size="lg"
                        onClick={() => setIsCaseStudyPopupOpen(true)}
                        className="shine-effect text-lg px-10 py-6 h-auto bg-primary hover:bg-primary/90"
                      >
                        Download Case Study
                      </Button>
                    </motion.div>
                  </div>
                </section>
              )}

              <section className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-background" : "bg-secondary/30"}`}>
                <div className="container mx-auto px-6 md:px-8 max-w-6xl">
                  <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "md:flex-row-reverse" : ""}`}>
                    {/* Text */}
                    <motion.div
                      initial={mounted ? { opacity: 0, x: isEven ? -30 : 30 } : false}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className={`space-y-6 ${!isEven ? "md:order-2" : ""}`}
                    >
                      <p className="text-primary font-bold text-sm uppercase tracking-wider">
                        Service {index + 1} of 6
                      </p>
                      <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-lg font-semibold text-primary">
                        {service.subtitle}
                      </p>
                      <p className="text-foreground/80 leading-relaxed text-lg">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                            <span className="text-foreground/75">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        onClick={() => setIsConsultationDialogOpen(true)}
                        className="shine-effect text-base px-8 py-5 h-auto bg-primary hover:bg-primary/90"
                      >
                        Discuss This Service
                      </Button>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                      initial={mounted ? { opacity: 0, x: isEven ? 30 : -30 } : false}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      viewport={{ once: true }}
                      className={`${!isEven ? "md:order-1" : ""}`}
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          width={800}
                          height={600}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}

        {/* Final CTA */}
        <section className="py-20 bg-navy">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground">
                Ready to Turn Intelligence Into Action?
              </h2>
              <p className="text-navy-foreground/80 text-lg">
                The first conversation determines which engagement model serves you best.
              </p>
              <Button
                size="lg"
                onClick={() => setIsConsultationDialogOpen(true)}
                className="shine-effect text-xl px-12 py-8 h-auto bg-primary hover:bg-primary/90"
              >
                Request a Complimentary Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationDialog open={isConsultationDialogOpen} onOpenChange={setIsConsultationDialogOpen} />
      <ClientOnly>
        <CaseStudyPopup isOpen={isCaseStudyPopupOpen} onClose={() => setIsCaseStudyPopupOpen(false)} />
      </ClientOnly>
    </div>
  );
};

export default Services;
