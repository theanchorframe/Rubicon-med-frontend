import { motion, AnimatePresence } from "framer-motion";
import { Users, CheckCircle, Clock } from "@phosphor-icons/react";
import { useState } from "react";

type IdeaLetter = "I" | "D" | "E" | "A";

interface IdeaContent {
  title: string;
  subtitle: string;
  summary: string;
  sections: {
    label?: string;
    bullets: string[];
    deliverable?: string;
  }[];
  deliverable: string;
}

const ProcessSection = () => {
  const [activeIdea, setActiveIdea] = useState<IdeaLetter | null>(null);

  const ideaContent: Record<IdeaLetter, IdeaContent> = {
    I: {
      title: "I – Immerse in your reality",
      subtitle: "(Initial Meeting / Discovery)",
      summary: "Start with the world you actually operate in, not a generic template.",
      sections: [
        {
          bullets: [
            "Meet with the executive sponsor to align on goals, constraints, and how success will be measured.",
            "Understand the landscape: therapeutic area, competitive set, and current market dynamics.",
            "Map internal and external stakeholders, including KOLs, clinical users, and commercial teams.",
            "Learn pain points, unanswered questions, and where the team feels least certain today.",
            "Clarify likely travel and touchpoints (conferences, KOL visits, client offices) that will matter.",
            "Capture initial thoughts on strategy and expected deliverables to test later against the data.",
          ],
        },
      ],
      deliverable: "A clear initial picture of your real-world environment, goals, constraints, and working hypotheses to guide the rest of the IDEA process.",
    },
    D: {
      title: "D – Design the strategy",
      subtitle: "(Define Plan and Strategy)",
      summary: "Define exactly what we will learn, where, when, and how.",
      sections: [
        {
          bullets: [
            "Translate business questions into a focused learning plan and research strategy.",
            "Decide what we are going to do: qualitative, quantitative, environmental, and competitive workstreams.",
            "Define where we will learn: conferences, KOLs, IDIs, internal teams, and other key settings.",
            "Align on when: timing of milestones and deliverables that match your internal decision calendar.",
            "Outline how we will execute to minimize disruption to busy clinical and commercial stakeholders.",
          ],
        },
      ],
      deliverable: "A reviewed and finalized plan with the executive sponsor and core team that spells out what we need to know and how we will learn it.",
    },
    E: {
      title: "E – Execute the evidence plan",
      subtitle: "(Execute Plan: internal, external, and quantitative work)",
      summary: "Run the work, talk to the right people, and turn raw data into usable insight.",
      sections: [
        {
          label: "Internal + Qualitative",
          bullets: [
            "Conduct qualitative meetings with internal stakeholders, starting with the executive sponsor if needed.",
            "Clarify roles, expectations, and where collaboration with Rob adds the most value.",
            "Test for alignment across clinical, marketing, and commercial teammates and identify gaps.",
          ],
          deliverable: "Concise summary of internal meetings for the executive sponsor, with proposed refinements to the plan.",
        },
        {
          label: "Data, Environment, Competition",
          bullets: [
            "Collect and analyze quantitative marketing data to understand segmentation and growth.",
            "Quantify growth using approaches such as CAGR and regression, then pressure-test results.",
            "Perform environmental scanning to explain why product or category growth is rising or falling.",
            "Build competitive dossiers that show how alternatives are positioned and perceived today.",
          ],
          deliverable: "Summary of analysis highlighting key trends, risks, and opportunities.",
        },
        {
          label: "Market Research: Physicians and Stakeholders",
          bullets: [
            "Run qualitative IDIs with physicians to deeply understand procedures and real-world workflows.",
            "Identify which product attributes matter at each step of the procedure and in which context.",
            "Surface product strengths, weaknesses, and explanations for segmentation patterns.",
            "Conduct IDIs with other external stakeholders where appropriate.",
            "Design and execute quantitative market research (surveys, scoring of IDIs, and related tools) to validate and size what the qualitative work revealed.",
          ],
          deliverable: "Marketing research report with a clear recap of the quantitative findings and what they mean for strategy.",
        },
      ],
      deliverable: "",
    },
    A: {
      title: "A – Advise on the decision",
      subtitle: "(Advise / Concept, Targeting, Positioning, and Messaging)",
      summary: "Turn evidence into a concrete product, market, and messaging plan your team can act on.",
      sections: [
        {
          bullets: [
            "Translate research into clear product requirements in collaboration with the executive sponsor.",
            "Work with R&D and other stakeholders to suggest high-level or detailed product specifications.",
            "Identify any additional market research or advisory board needs to de-risk remaining questions.",
            "Outline recommended targeting and positioning strategies based on the evidence gathered.",
            "Draft initial concepts for messaging and work with downstream marketing if desired.",
          ],
        },
        {
          label: "Marketing and creative deliverables can include:",
          bullets: [
            "Briefs for the creative team that inform campaigns and market development programs.",
            "Draft or refine the value proposition, tagline, and elevator pitch.",
            "Messaging architecture and a simple user experience template to keep teams aligned.",
          ],
        },
        {
          label: "Business and investment deliverables can include:",
          bullets: [
            "Business briefs for the investment team.",
            "An investment case, go-to-market strategy, and market or patient models that support board and leadership decisions.",
          ],
        },
      ],
      deliverable: "A full concept report and presentation that links every recommendation back to the evidence gathered in the IDEA process.",
    },
  };

  const statistics = [
    {
      icon: Users,
      value: "100+",
      label: "Engaged 100+ KOLs across specialties to validate needs and specifications across numerous product classes",
    },
    {
      icon: CheckCircle,
      value: "$2M+",
      label: "Helped companies avoid at least $2 million in non-viable investment",
    },
    {
      icon: Clock,
      value: "20+",
      label: "Evaluated over 20 markets to focus spend where the highest revenue is attainable",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden scroll-mt-20">
      <div className="mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12 max-w-7xl mx-auto"
        >
          {/* Two Column Layout: Stats Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Statistics */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-foreground"
              >
                Convert Clinical Insight into <span className="text-primary">Market Traction</span>
              </motion.h2>
              <div className="space-y-4">
                {statistics.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 space-y-3 hover:scale-105 transition-transform duration-300"
                  >
                    <stat.icon className="text-primary" size={32} weight="duotone" />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Bio Content */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-foreground"
              >
                <span className="text-primary">Rob Miraglia</span>: Your Partner in MedTech Growth.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-foreground leading-relaxed"
              >
                Rob is a medical marketing and strategy consultant who sits at the intersection of clinical insight and commercial reality. He has spent more than 25 years in medtech, pharma, and diagnostics, including management roles at Abbott, Medtronic, 3M, and Integer, helping teams decide which ideas are worth funding.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-foreground leading-relaxed"
              >
                His work focuses on one thing: turning clinical promise into growth. Rob partners with Executives and clinical leaders to clarify real-world problems, collaborate with R&D, and bring innovative products to market. He has engaged over 100 KOLs, evaluated over 20 markets, supported 40+ product and marketing initiatives, and helped companies avoid at least $2 million in non-viable investment.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-foreground leading-relaxed"
              >
                When the stakes are high and missteps are expensive, Rob gives teams a clear path from idea to launch so they can commit resources with confidence.
              </motion.p>
            </div>
          </div>

          {/* IDEA Framework Section */}
          <motion.div
            id="process"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8 scroll-mt-24"
          >
            {/* IDEA Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                The <span className="text-primary text-[1.2em]">IDEA</span> Process
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our four-stage framework ensures strategic consensus, landscape transparency, and data-driven discovery to provide board-ready outcomes grounded in market reality.
              </p>
            </div>

            {/* IDEA Accordion */}
            <div className="max-w-3xl mx-auto flex flex-col gap-4">
              {(["I", "D", "E", "A"] as const).map((letter, index) => (
                <div key={letter} className="flex flex-col items-start w-full">
                  <div
                    className={`flex items-center justify-between w-full cursor-pointer bg-secondary border border-border p-4 md:p-5 rounded-lg hover:bg-secondary/80 transition-colors ${
                      activeIdea === letter ? "bg-primary/10 border-primary/40" : ""
                    }`}
                    onClick={() => setActiveIdea(activeIdea === letter ? null : letter)}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-3xl md:text-4xl font-bold ${activeIdea === letter ? "text-primary" : "text-primary/60"} transition-colors duration-300`}>
                        {letter}
                      </span>
                      <span className="text-lg md:text-xl font-semibold text-foreground">
                        {letter === "I" && "– Immerse in your reality"}
                        {letter === "D" && "– Design the strategy"}
                        {letter === "E" && "– Execute the evidence plan"}
                        {letter === "A" && "– Advise on the decision"}
                      </span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`flex-shrink-0 ${activeIdea === letter ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
                    >
                      <path
                        d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-foreground"
                      />
                    </svg>
                  </div>
                  <div
                    className={`w-full text-sm md:text-base text-muted-foreground px-4 transition-all duration-500 ease-in-out overflow-hidden ${
                      activeIdea === letter
                        ? "opacity-100 max-h-[1500px] translate-y-0 pt-4 pb-2"
                        : "opacity-0 max-h-0 -translate-y-2"
                    }`}
                  >
                    <div className="bg-secondary/50 rounded-xl p-4 md:p-6 space-y-4">
                      {/* Subtitle */}
                      <p className="text-muted-foreground font-light text-base">
                        {ideaContent[letter].subtitle}
                      </p>

                      {/* Summary */}
                      <p className="text-base md:text-lg text-foreground leading-relaxed border-l-4 border-primary pl-4">
                        {ideaContent[letter].summary}
                      </p>

                      {/* Sections with bullets */}
                      <div className="space-y-4">
                        {ideaContent[letter].sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="space-y-2">
                            {section.label && (
                              <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                                {section.label}
                              </h4>
                            )}
                            <ul className="space-y-2">
                              {section.bullets.map((bullet, bulletIndex) => (
                                <li
                                  key={bulletIndex}
                                  className="flex gap-3 text-foreground/90 leading-relaxed text-sm md:text-base"
                                >
                                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                            {section.deliverable && (
                              <div className="pt-2 border-t border-border mt-2">
                                <p className="text-foreground text-sm md:text-base">
                                  <span className="font-bold text-primary">Deliverable:</span>{" "}
                                  {section.deliverable}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Main Deliverable */}
                      {ideaContent[letter].deliverable && (
                        <div className="pt-4 border-t border-border">
                          <p className="text-foreground text-sm md:text-base">
                            <span className="font-bold text-primary">Deliverable:</span>{" "}
                            {ideaContent[letter].deliverable}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;