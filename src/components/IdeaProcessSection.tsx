import { motion } from "framer-motion";
import { useState } from "react";
import { useMounted } from "@/hooks/useMounted";

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

const IdeaProcessSection = () => {
  const [activeIdea, setActiveIdea] = useState<IdeaLetter>("I");
  const mounted = useMounted();

  const ideaContent: Record<IdeaLetter, IdeaContent> = {
    I: {
      title: "Immersion and Inquiry",
      subtitle: "(Initial Meeting)",
      summary: "Project Objective(s)",
      sections: [
        {
          bullets: [
            "Meet with the executive sponsor to align on goals, constraints, and how success will be measured.",
            "Understand the landscape: therapeutic area, competitive set, and current market dynamics",
            "Map internal and external stakeholders, including KOLs, clinical users, and commercial teams",
            "Learn pain points, unanswered questions, and where your team feels least certain today",
            "Clarify likely travel and touchpoints (conferences, KOL visits, client offices)",
            "Capture initial thoughts on strategy and expected deliverables to test later against the data",
          ],
        },
      ],
      deliverable:
        "Every engagement begins with a deep-dive into your real-world environment and project constraints, and to guide the IDEA process, we deliver a Statement of Understanding and a Statement of Work, a clear-eyed blueprint that transforms high-level goals into a validated, executable plan for your project.",
    },
    D: {
      title: "Delineate Project Roadmap",
      subtitle: "(Define Plan and Strategy)",
      summary: "Build project roadmap and plan",
      sections: [
        {
          bullets: [
            "Translate business questions into a focused learning plan and research strategy",
            "Plan for qualitative, quantitative, environmental, and or competitive research and analysis",
            "Define where we will learn: conferences, KOL IDIs, internal teams, and other key settings",
            "Align on when: timing of milestones and deliverables that match your internal decision calendar",
            "Outline how we will execute to minimize disruption to busy clinical and commercial stakeholders",
          ],
        },
      ],
      deliverable:
        "A reviewed and finalized plan with the executive sponsor and your core team that spells out what we need to know and how we will learn it.",
    },
    E: {
      title: "Engage Full Team for Plan Execution",
      subtitle: "(Team Kickoff)",
      summary: "Run the work, talk to the right people, and turn raw data into usable insight",
      sections: [
        {
          bullets: [
            "Validate project roadmap with larger team, obtain feedback, and conduct gap analysis",
            "Leverage data analytics to codify market segmentation, competitive landscape, growth, and growth drivers",
            "Synthesize clinical intelligence by distilling procedural nuances and comparative evidence to inform discussion guides, surveys, and other research instruments",
            "Develop discussion guides (with scoring when appropriate) and orchestrate expert in-depth interviews (IDIs) to extract deep domain insights for product development",
            "Validate qualitative research by deploying quantitative research methods on a larger sample to mitigate risk",
            "Collaborate with larger team for product development, finance, and marketing alignment",
          ],
        },
      ],
      deliverable: "",
    },
    A: {
      title: "Action and Advise",
      subtitle: "(Next Steps)",
      summary: "Execute on plan, report, and advise",
      sections: [
        {
          bullets: [
            "Translate research into clear product requirements in collaboration with the executive sponsor",
            "Work with R&D and other stakeholders to suggest high-level or detailed product specifications",
            "Identify any additional market research or advisory board needs to de-risk remaining questions",
            "Outline recommended targeting and positioning strategies based on the evidence gathered",
            "Draft initial concepts for messaging and work with downstream marketing if desired",
          ],
        },
        {
          label: "Marketing and creative deliverables may include:",
          bullets: [
            "Briefs for the creative team that inform campaigns and market development programs",
            "Draft or refine the value proposition, tagline, and elevator pitch",
            "Create messaging architecture and a simple user experience template by segment",
          ],
        },
        {
          label: "Business and investment deliverables may include:",
          bullets: [
            "Business briefs for the investment team",
            "An investment case, go-to-market strategy, and market or patient models that support board and leadership decisions",
          ],
        },
        {
          label: "Roadmap Briefing and Report:",
          bullets: [
            "Executive Summary",
            "Competitive Landscape",
            "Draft product specifications and product SWOT analysis",
            "Forecasted Market Shares, Revenue, Units, ASPs, Margin, and Growth",
            "Risk mitigation planning with additional market research, advisory board development, etc",
            "Suggested Targeting, Positioning, Value Proposition, Positioning Statement, Messaging, and Go-to-Market strategies",
            "Next Steps and Questions",
          ],
        },
      ],
      deliverable:
        "A full concept report and presentation that links every recommendation back to the evidence gathered in the IDEA process.",
    },
  };

  const activeContent = ideaContent[activeIdea];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="mx-auto px-5 max-w-7xl">
        <motion.div
          id="process"
          initial={mounted ? { opacity: 0, y: 30 } : false}
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

          {/* Unified Tab Bar */}
          <div className="max-w-6xl mx-auto">
            <div
              role="tablist"
              aria-label="IDEA Process Phases"
              className="flex flex-col md:flex-row gap-2 md:gap-0 mb-8"
            >
              {(
                [
                  { letter: "I" as const, label: "Phase 1: ", rest: "Immersion" },
                  { letter: "D" as const, label: "Phase 2: ", rest: "Delineate" },
                  { letter: "E" as const, label: "Phase 3: ", rest: "Engage" },
                  { letter: "A" as const, label: "Phase 4: ", rest: "Action" },
                ] as const
              ).map(({ letter, label, rest }) => {
                const isActive = activeIdea === letter;
                return (
                  <button
                    key={letter}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`idea-panel-${letter}`}
                    id={`idea-tab-${letter}`}
                    onClick={() => setActiveIdea(letter)}
                    className={`flex-1 text-left md:text-center px-4 py-4 md:py-5 rounded-lg md:rounded-none md:rounded-t-lg border transition-all duration-300 text-sm md:text-base font-semibold ${
                      isActive
                        ? "bg-primary/10 border-primary text-foreground shadow-sm"
                        : "bg-secondary border-border text-foreground/80 hover:bg-secondary/80 hover:border-primary/40"
                    }`}
                  >
                    <span className="md:hidden text-2xl font-extrabold text-primary mr-3">
                      {letter}
                    </span>
                    <span>
                      {label}
                      <span className="inline-flex items-baseline">
                        <span className="text-3xl font-extrabold text-primary leading-none mr-[1px]">
                          {rest.charAt(0)}
                        </span>
                        <span className="text-sm md:text-base font-semibold">
                          {rest.slice(1)}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Content Panel */}
            <motion.div
              key={activeIdea}
              initial={mounted ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              role="tabpanel"
              id={`idea-panel-${activeIdea}`}
              aria-labelledby={`idea-tab-${activeIdea}`}
              className="bg-secondary/50 border border-border rounded-xl p-6 lg:p-8 space-y-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Phase {activeIdea === "I" ? "1" : activeIdea === "D" ? "2" : activeIdea === "E" ? "3" : "4"}: {activeContent.title} {activeContent.subtitle}
              </h3>

              <p className="text-base lg:text-lg text-foreground leading-relaxed font-bold">
                {activeContent.summary}
              </p>

              <div className="space-y-6">
                {activeContent.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-3">
                    {section.label && (
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                        {section.label}
                      </h4>
                    )}
                    <ul className="space-y-2">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="flex gap-3 text-foreground/90 leading-relaxed text-sm lg:text-base"
                        >
                          <span className="text-primary flex-shrink-0 leading-relaxed text-sm lg:text-base">
                            &bull;
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {section.deliverable && (
                      <div className="pt-2 border-t border-border mt-2">
                        <p className="text-foreground text-sm lg:text-base">
                          <span className="font-bold text-primary">Deliverable:</span>{" "}
                          {section.deliverable}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {activeContent.deliverable && (
                <div className="pt-4 border-t border-border">
                  <p className="text-foreground text-sm lg:text-base">
                    <span className="font-bold text-primary">Deliverable:</span>{" "}
                    {activeContent.deliverable}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IdeaProcessSection;