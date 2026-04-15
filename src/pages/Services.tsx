import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import CaseStudyPopup from "@/components/CaseStudyPopup";
import CTABanner from "@/components/CTABanner";
import MobileBottomNav from "@/components/MobileBottomNav";
import ClientOnly from "@/components/ClientOnly";
import { useMounted } from "@/hooks/useMounted";
import { Search, BarChart3, Users, Rocket, Map, DollarSign, Check, ChevronDown } from "lucide-react";

const servicesData = [
  {
    title: "Product Evaluation & Concept Vetting",
    icon: Search,
    hook: "Your capital only goes to products with a validated path to market leadership.",
    description:
      "Our framework integrates multidimensional technical and clinical due diligence with rigorous market modeling. We synthesize competitive intelligence and growth drivers to ensure capital is deployed only into assets with a validated path.",
    deliverables: [
      "Competitive landscape & database analysis",
      "Market modeling & segmentation",
      "Competitive benchmark reports",
      "Medical literature & syndicated data review",
      "Business opportunity analysis (BOA)",
    ],
    proof:
      "Saved a client approximately $1.5M after developing a Business Opportunity Analysis recommending against a scoring balloon due to obsolete technology and SKU limitations.",
  },
  {
    title: "Clinical & Market Research",
    icon: BarChart3,
    hook: "Every investment decision backed by evidence, not assumptions.",
    description:
      "Drive confident product investment through clinical, research & development, and market triangulation. We leverage expert consultations and comprehensive database analytics to distill complex evidence into an actionable roadmap — eliminating market ambiguity and securing your path to entry.",
    deliverables: [
      "Primary & secondary research with data analytics",
      "In-depth interviews (IDIs) with KOLs and practitioners",
      "Focus panels with patients and physicians",
      "Surveys with statistical analysis",
      "Market size, segmentation, targeting & positioning reports",
    ],
    proof:
      "Segmentation and targeting project propelled a 24% increase in market adoption by Nurse Practitioners after identifying them as the largest per-person revenue generators.",
  },
  {
    title: "KOL & Voice-of-Customer Programs",
    icon: Users,
    hook: "Market credibility built before you spend a dollar on launch.",
    description:
      "Accelerate market adoption through clinical advocacy and expert mobilization. We manage KOL identification, contact, contracting, and payment for the execution of IDIs, surveys, field trials, and clinician panels. By synthesizing the Voice of Customer into evidence-based messaging, we ensure your value proposition resonates with providers and drives accelerated uptake.",
    deliverables: [
      "KOL identification & contracting",
      "Honorarium negotiation & Sunshine Act tracking",
      "Field trials with physicians for new products",
      "Roundtable meetings with clinicians",
      "Voice-of-customer synthesis into evidence-based messaging",
    ],
    proof:
      "Managed 100+ KOL engagements across multiple subspecialties including recruitment, communication, appointment creation, and payment tracking.",
  },
  {
    title: "Commercial Strategy & Launch",
    icon: Rocket,
    hook: "Market entry strategies that sustain momentum long after launch.",
    description:
      "Turn insight into adoption at scale. We craft go-to-market strategies and playbooks, sales enablement, and messaging rooted in evidence, so your launch not only hits targets but sustains momentum long after market entry.",
    deliverables: [
      "Go-to-market strategy & playbooks",
      "Sales enablement, CRM optimization, and training",
      "Value proposition & elevator pitch development",
      "Messaging architecture & user experience templates",
      "Marketing plans & competitive dossiers",
    ],
    proof:
      "Trained 200+ sales professionals and penetrated the full 5,000 target Physical Therapy clinic base within 10 months post-launch, exceeding Year 1 sales and contribution goals.",
  },
  {
    title: "Upstream Portfolio Strategy & Roadmapping",
    icon: Map,
    hook: "Concentrate resources on the assets with the highest return.",
    description:
      "Optimize resource allocation and cross-functional alignment. By defining rigorous segmentation, targeting, and positioning frameworks alongside multi-year product roadmaps, we isolate high-potential opportunities. This allows R&D, Marketing, and Sales to concentrate resources on assets with the highest ROI.",
    deliverables: [
      "Product, portfolio & strategy roadmaps",
      "Pipeline planning from ideation to planned retirement",
      "SWOT analysis & strategic considerations",
      "R&D/marketing/sales cross-functional alignment",
      "Resource optimization frameworks",
    ],
    proof:
      "Collaborated with R&D and KOLs to develop an embolic protection device with forecasted revenue exceeding $30M over 5 years plus $5M in NRE revenue.",
  },
  {
    title: "Pricing, Forecasting & Financial Modeling",
    icon: DollarSign,
    hook: "Revenue projections that hold up under board-level scrutiny.",
    description:
      "Enable executive decision-making with rigorous financial modeling. We translate market dynamics and value-based pricing into accurate revenue projections that hold up under institutional scrutiny. Our models provide the clarity needed to synchronize AOP targets with actual clinical and commercial scalability.",
    deliverables: [
      "Market share projections with CAGR",
      "Competitive ASP analysis & pricing strategy",
      "Volume and revenue forecasting with CAGR and regression models",
      "High, Medium, and Low financial scenarios",
      "C-suite presentation decks with executive summaries",
    ],
    proof:
      "Saved a startup close to $10M by modeling that their urology product had only 3.4M available patients with strong existing pharmaceutical and TUMT competition.",
  },
];

const Services = () => {
  const [isConsultationDialogOpen, setIsConsultationDialogOpen] = useState(false);
  const [isCaseStudyPopupOpen, setIsCaseStudyPopupOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const mounted = useMounted();

  const active = servicesData[activeService];
  const ActiveIcon = active.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />

      {/* Hero */}
      <header className="bg-navy pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl text-center">
          <motion.h1
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6"
            style={{ lineHeight: "1.2" }}
          >
            What We Actually Do — And The Value You Receive
          </motion.h1>
          <motion.p
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)", maxWidth: "700px" }}
          >
            Every engagement is built around one question: does this product have a defensible commercial path? Here's how we answer it.
          </motion.p>
        </div>
      </header>

      <main>
        {/* Desktop: Two-column interactive layout */}
        <section className="hidden md:block py-20 bg-background">
          <div className="container mx-auto px-6 md:px-8 max-w-7xl">
            <div className="flex gap-12 lg:gap-16">
              {/* Left sidebar - sticky */}
              <div className="w-[35%] shrink-0">
                <div className="sticky top-32 space-y-2">
                  {servicesData.map((service, index) => {
                    const Icon = service.icon;
                    const isActive = activeService === index;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveService(index)}
                        className={`w-full text-left px-5 py-4 rounded-lg transition-all duration-200 flex items-center gap-4 border-l-4 ${
                          isActive
                            ? "border-l-primary bg-secondary/50 shadow-sm"
                            : "border-l-transparent hover:bg-secondary/30"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 shrink-0 ${isActive ? "text-primary" : "text-foreground/40"}`}
                        />
                        <span
                          className={`text-sm lg:text-base ${
                            isActive ? "font-bold text-navy" : "text-foreground/60"
                          }`}
                        >
                          {service.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right detail panel */}
              <div className="flex-1 min-h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-3">
                      <ActiveIcon className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl lg:text-4xl font-bold text-navy">{active.title}</h2>
                    </div>

                    <p className="text-lg font-bold text-primary">{active.hook}</p>

                    <p className="text-foreground/80 leading-relaxed text-lg">{active.description}</p>

                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-4">Key Deliverables</h3>
                      <ul className="space-y-3">
                        {active.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/75">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-secondary/40 rounded-xl p-6 border border-border">
                      <p className="text-foreground/80 leading-relaxed italic">"{active.proof}"</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile: Accordion layout */}
        <section className="md:hidden py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-3">
              {servicesData.map((service, index) => {
                const Icon = service.icon;
                const isOpen = mobileOpen === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => setMobileOpen(isOpen ? null : index)}
                      className="w-full flex items-center gap-3 px-5 py-4 text-left"
                    >
                      <Icon className={`h-5 w-5 shrink-0 ${isOpen ? "text-primary" : "text-foreground/40"}`} />
                      <span className={`flex-1 text-base ${isOpen ? "font-bold text-navy" : "text-foreground/70"}`}>
                        {service.title}
                      </span>
                      <ChevronDown className={`h-5 w-5 text-foreground/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 space-y-5">
                            <p className="text-base font-bold text-primary">{service.hook}</p>
                            <p className="text-foreground/80 leading-relaxed">{service.description}</p>
                            <div>
                              <h3 className="text-base font-semibold text-navy mb-3">Key Deliverables</h3>
                              <ul className="space-y-2">
                                {service.deliverables.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground/75 text-sm">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-secondary/40 rounded-lg p-4 border border-border">
                              <p className="text-foreground/80 text-sm leading-relaxed italic">"{service.proof}"</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Study CTA with graph */}
        <CTABanner onOpenCaseStudyPopup={() => setIsCaseStudyPopupOpen(true)} />

        {/* Bottom CTA */}
        <section className="py-20 bg-navy">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2
                className="font-bold text-white"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3.5rem)", lineHeight: "1.3" }}
              >
                Ready to Know If Your Next Product Is Worth the Investment?
              </h2>
              <Button
                size="lg"
                onClick={() => setIsConsultationDialogOpen(true)}
                className="shine-effect text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 h-auto bg-white text-navy hover:bg-white/90 font-bold"
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
      <MobileBottomNav onOpenDialog={() => setIsConsultationDialogOpen(true)} />
    </div>
  );
};

export default Services;
