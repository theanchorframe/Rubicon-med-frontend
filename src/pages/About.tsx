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

const specializations = [
  {
    icon: ChartBar,
    title: "Product Evaluation & Concept Vetting",
    stat: "40+",
    statLabel: "Projects Delivered",
    description:
      "Rigorous due diligence integrating clinical, regulatory, and market modeling to validate investment decisions.",
  },
  {
    icon: Users,
    title: "KOL & Voice-of-Customer Programs",
    stat: "100+",
    statLabel: "KOLs Engaged",
    description:
      "Full-lifecycle engagement from identification to clinician panels, synthesizing expert insights into actionable strategy.",
  },
  {
    icon: Target,
    title: "Clinical & Market Research",
    stat: "20+",
    statLabel: "Markets Sized",
    description:
      "Evidence-based triangulation of expert consultations and database analytics to eliminate market ambiguity.",
  },
  {
    icon: TrendUp,
    title: "Pricing, Forecasting & Financial Modeling",
    stat: "$30M",
    statLabel: "Revenue Forecasted",
    description:
      "Translating market dynamics into accurate revenue projections that synchronize AOP targets with clinical scalability.",
  },
  {
    icon: Briefcase,
    title: "Commercial Strategy & Launch",
    stat: "$2M",
    statLabel: "Investment Protected",
    description:
      "Go-to-market playbooks and sales enablement rooted in evidence for launches that sustain momentum.",
  },
  {
    icon: Heartbeat,
    title: "Upstream Portfolio Strategy",
    stat: "25+",
    statLabel: "Years of Leadership",
    description:
      "Defining STP frameworks and multi-year product roadmaps to isolate high-potential opportunities with the highest ROI.",
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
                Rob partners with CEOs and clinical leaders to clarify the real-world
                problem, pressure test the value story with KOLs, and build a business
                case that stands up to finance, procurement, and clinicians.
              </p>
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
                    {spec.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-20 bg-secondary/50">
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
