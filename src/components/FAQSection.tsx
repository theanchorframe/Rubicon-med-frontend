import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMounted } from "@/hooks/useMounted";

interface FAQSectionProps {
  onOpenConsultationDialog: () => void;
}

const FAQSection = ({ onOpenConsultationDialog }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const mounted = useMounted();

  const faqs = [
    {
      question: "At what stage should we engage Rubicon?",
      answer:
        "Earlier than most companies do. Rubicon has worked with companies at the product ideation stage, using KOL research, market sizing, and competitive analysis to validate the concept before commitments are made. Rubicon has also been brought in during active launch planning when strategy needed sharper validation before go-to-market. If a market decision is on the table, the conversation is worth having.",
    },
    {
      question: "What does your experience with launch planning actually look like?",
      answer:
        "With a legacy of orchestrating 40+ high-stakes launches across vascular intervention, pharmaceuticals, and diagnostics, Rob specializes in the critical 'Front-End of Innovation.' By applying a comprehensive launch framework, we identify high-value opportunities and architect the clinical evidence stories that drive adoption. We don't just plan; we equip and train your launch teams to ensure a seamless, high-ROI transition from R&D to global commercialization.",
    },
    {
      question: "Do you offer fractional engagements or only project-based work?",
      answer:
        "For companies needing an embedded senior resource, Rob operates as a fractional partner — inside your team, driving decisions, without the full-time cost. For defined needs, Rubicon delivers project-based engagements: market assessments, KOL programs, launch planning, due diligence. Timelines flex from weeks to ongoing. The first conversation determines which model serves you best.",
    },
    {
      question: "What does an engagement with Rubicon actually look like, start to finish?",
      answer:
        "Every engagement begins with a deep-dive into your real-world environment and project constraints. To guide the IDEA process, we deliver a Statement of Understanding and a Statement of Work—a clear-eyed blueprint that transforms high-level goals into a validated, executable plan for your device.",
    },
    {
      question: "How do we know this investment will generate a return?",
      answer:
        "Our work has helped companies avoid $2M+ in wasted spend and helped bring >$10M in new product revenue. While innovation inherently carries uncertainty, our risk-mitigation frameworks provide the clinical and commercial confidence necessary for a successful launch.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Questions Leaders Ask Rubicon Before Engaging
          </h2>
        </motion.div>

        <motion.div
          initial={mounted ? { opacity: 0, y: 30 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl w-full mx-auto mt-10 flex flex-col gap-4"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <div
                className="flex items-center justify-between w-full cursor-pointer bg-secondary border border-border p-4 md:p-5 rounded-lg hover:bg-secondary/80 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-sm md:text-base font-medium text-foreground text-left pr-4">{faq.question}</h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`flex-shrink-0 ${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
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
                className={`text-sm md:text-base text-muted-foreground px-4 transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "opacity-100 max-h-[500px] translate-y-0 pt-4 pb-2"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
