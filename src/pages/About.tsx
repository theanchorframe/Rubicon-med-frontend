import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import MobileBottomNav from "@/components/MobileBottomNav";
import { useMounted } from "@/hooks/useMounted";
import robHeadshot from "@/assets/rob-miraglia-headshot.webp";
import {
  ChartBar,
  Users,
  Target,
  TrendUp,
  Briefcase,
  Heartbeat,
} from "@phosphor-icons/react";
import { Sparkles } from "lucide-react";

const specializations = [
  {
    icon: ChartBar,
    title: "Product Evaluation & Concept Vetting",
    stat: "40+",
    statLabel: "Projects Delivered",
    description:
      "Your capital only goes to products with a validated path to market leadership. Our proven framework integrates multidimensional technical, clinical, and research and development due diligence with rigorous market modeling. We synthesize competitive intelligence and growth drivers to ensure capital is deployed only into assets with a validated path to market leadership.",
  },
  {
    icon: Target,
    title: "Clinical & Market Research",
    stat: "20+",
    statLabel: "Markets Sized",
    description:
      "Every investment decision backed by evidence, not assumptions. Drive confident product investment through clinical, research & development, and market triangulation. We leverage expert consultations and comprehensive database analytics to distill complex evidence into an actionable roadmap – eliminating market ambiguity and securing your path to success.",
  },
  {
    icon: Users,
    title: "KOL & other VoC Programs",
    stat: "100+",
    statLabel: "KOLs Engaged",
    description:
      "Market credibility built before you spend a dollar on launch. Accelerate market adoption through clinical advocacy. We manage KOL identification, contact, contracting, payment and Sunshine Act collaboration for the execution of IDIs, surveys, field trials, and clinician panels. By synthesizing the 'VoC' into evidence-based messaging, we ensure your value proposition resonates with providers and drives uptake.",
  },
  {
    icon: Briefcase,
    title: "Commercial Strategy & Launch",
    stat: "$2M",
    statLabel: "Investment Protected",
    description:
      "Market entry strategies that sustain momentum long after launch. Turn insight into adoption at scale. We craft go-to-market strategies and playbooks, sales enablement, and messaging rooted in evidence, so your launch not only hits targets, but sustains momentum long after market entry.",
  },
  {
    icon: Heartbeat,
    title: "Upstream Portfolio Strategy & Roadmapping",
    stat: "25+",
    statLabel: "Years of Leadership",
    description:
      "Resources concentrated on the assets with the highest return. Optimize resource allocation and cross-functional alignment. By defining rigorous segmentation, targeting, and positioning (STP) frameworks alongside multi-year product roadmaps, we isolate high-potential opportunities. This allows R&D, Marketing, and Sales to concentrate resources on assets with the highest ROI.",
  },
  {
    icon: TrendUp,
    title: "Pricing, Forecasting & Financial Modeling",
    stat: "$30M",
    statLabel: "Revenue Forecasted",
    description:
      "Revenue projections that hold up under board-level scrutiny. Enable executive decision-making with rigorous financial modeling. We translate market dynamics and value-based pricing into accurate revenue projections that hold up under institutional scrutiny. Our models provide the clarity needed to synchronize AOP targets with actual clinical and commercial scalability.",
  },
];

const About = () => {
  const [isConsultationDialogOpen, setIsConsultationDialogOpen] = useState(false);
  const mounted = useMounted();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />

      {/* Hero / Intro Section */}
      <section className="pt-32 pb-20 bg-navy text-navy-foreground">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={mounted ? { opacity: 0, x: -30 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-3 space-y-6"
            >
              <p className="text-primary font-semibold text-lg tracking-wide uppercase">
                About Rubicon
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Meet Rob Miraglia
              </h1>
              <p className="text-xl text-navy-foreground/85 leading-relaxed">
                A marketing and strategy consultant who sits at the intersection of
                clinical insight and commercial reality. He has spent more than 25
                years in medtech, pharma, and diagnostics — including leadership and management roles
                at <strong>Abbott, Medtronic, 3M, and Integer</strong> — helping teams
                decide which ideas are worth funding and which ones are not.
              </p>
              <p className="text-lg text-navy-foreground/75 leading-relaxed">
                His work focuses on one thing: turning clinical promise into growth.
                Rob partners with C-Suite, Marketing VP's, and R&D leaders to clarify
                the real-world problem, pressure test the value story with KOLs, and
                build a business case that stands up to finance, procurement, and
                clinicians.
              </p>
              <div className="pt-2">
                <Button
                  size="lg"
                  onClick={() => {
                    document.getElementById("about-contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="shine-effect text-xl px-12 py-8 h-auto bg-primary hover:bg-primary/90"
                >
                  Request a Complimentary Consultation
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={mounted ? { opacity: 0, scale: 0.9 } : false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-primary/20 rounded-2xl blur-xl" />
                <img
                  src={robHeadshot}
                  alt="Rob Miraglia — Rubicon Medical Marketing"
                  className="relative rounded-2xl shadow-2xl w-full max-w-sm object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations with Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              Areas of Specialization
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Deep expertise spanning product strategy, clinical evidence, and
              commercial execution across medtech and pharma.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={index}
                  initial={mounted ? { opacity: 0, y: 30 } : false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card border-2 border-border hover:border-primary/50 rounded-xl p-8 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon size={28} weight="duotone" />
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-navy">{spec.stat}</p>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                        {spec.statLabel}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-navy group-hover:text-primary transition-colors duration-300">
                    {spec.title}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed">
                    {(() => {
                      const dotIndex = spec.description.indexOf('. ');
                      if (dotIndex === -1) return spec.description;
                      const firstSentence = spec.description.slice(0, dotIndex + 1);
                      const rest = spec.description.slice(dotIndex + 1);
                      return <><strong>{firstSentence}</strong>{rest}</>;
                    })()}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Foundation */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              Academic Foundation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Business strategy meets life sciences — the training behind the thinking.
            </p>
          </motion.div>

          <div className="relative grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Vertical center divider (desktop only) */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ backgroundColor: "hsl(var(--primary) / 0.3)" }}
            />

            {[
              {
                institution: "Carlson School of Management",
                sub: "University of Minnesota · Minneapolis, MN",
                degree: "Master of Business Administration (MBA)",
                emphasis: "Emphases in Marketing and Healthcare",
              },
              {
                institution: "Brooklyn College",
                sub: "City University of New York · Brooklyn, NY",
                degree: "Bachelor of Science, Psychology",
                emphasis: "Pre-Med Concentration",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={mounted ? { opacity: 0, y: 30 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-6"
              >
                <div className="absolute left-0 top-1 w-[3px] h-[60px] bg-primary rounded-full" />
                <h3 className="text-2xl font-bold text-navy leading-tight">
                  {edu.institution}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{edu.sub}</p>
                <p className="text-base text-navy font-medium mt-4">{edu.degree}</p>
                <p className="text-sm italic text-muted-foreground mt-1">
                  {edu.emphasis}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Affiliations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              Credentials & Affiliations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Continuous learning at the intersection of medicine, commercialization, and AI.
            </p>
          </motion.div>

          {/* AI Certification Pills */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              "Foundation & Potential of AI in Healthcare",
              "Data to Decision Path — AI Infusion in Healthcare",
              "AI Agents in Healthcare & Capstone",
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={mounted ? { opacity: 0, y: 20 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-card border border-border rounded-full pl-4 pr-5 py-3 flex-1 min-w-[260px]"
              >
                <div className="flex-shrink-0 text-primary">
                  <Sparkles size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-bold text-navy leading-tight">{cert}</p>
                  <p className="text-[13px] text-muted-foreground mt-0.5">
                    University of Colorado
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
              Industry Credentials
            </p>
            <p className="text-muted-foreground leading-relaxed">
              3M Six Sigma Black Belt (DMAIC & DFSS)
              <span className="mx-2 text-primary">·</span>
              Medical Industry Leadership Institute — Charter Member
              <span className="mx-2 text-primary">·</span>
              Medical Alley Member
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="about-contact" className="py-20 bg-secondary/50 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              Strategy Rooted in Evidence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navigate high-stakes product decisions with a partner who understands the intersection of clinical reality and commercial success.
            </p>
          </motion.div>

          <motion.div
            initial={mounted ? { opacity: 0, y: 30 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 bg-card rounded-2xl shadow-xl border border-border overflow-hidden"
          >
            <div className="px-4 pb-6 md:px-8 md:pb-8">
              <div className="w-full rounded-xl overflow-hidden" style={{ height: "750px" }}>
                <iframe
                  src="https://link.anchorframe.com/widget/form/jxrEwmyK9koADRveNp3T"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  id="about-page-jxrEwmyK9koADRveNp3T"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Rubicon Form"
                  data-height="550"
                  data-layout-iframe-id="about-page-jxrEwmyK9koADRveNp3T"
                  data-form-id="jxrEwmyK9koADRveNp3T"
                  title="Contact Rob - Rubicon Form"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ConsultationDialog
        open={isConsultationDialogOpen}
        onOpenChange={setIsConsultationDialogOpen}
      />
      <MobileBottomNav onOpenDialog={() => setIsConsultationDialogOpen(true)} />
    </div>
  );
};

export default About;
