import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of companies do you typically work with?",
      answer:
        "I primarily work with medical device companies. This includes early-stage startups preparing for their first product launch as well as established global manufacturers looking to refine their commercial strategy. Whether you’re entering the market or scaling an existing portfolio, I help teams find the clearest path forward and avoid costly missteps.",
    },
    {
      question: "What's your experience with launch planning and execution?",
      answer:
        "I’ve led or supported over 20 medical projects across product categories including vascular intervention, multiple pharmaceuticals, and diagnostics. I concentrate on the front end: defining the problem, selecting the right opportunities, and building the evidence story that unlocks adoption at launch.",
    },
    {
      question: "Do you only work with U.S.-based companies?",
      answer:
        "While I’m based in Long Island, New York, I’ve worked with teams across North America and Europe. As long as we’re aligned on goals and communication, I can support clients remotely or on-site for critical milestones like meeting with physicians, prototyping, or requirement gathering.",
    },
    {
      question: "What's your process like?",
      answer:
        "Every engagement starts with a discovery phase to understand your goals, team structure, timelines, and where friction may be slowing you down. From there, I deliver a formal Statement of Work that defines a tailored scope, priorities, and milestones, along with a short set of upstream recommendations shaped in discovery for your team. I stay focused on speed, fit, and return on investment.",
    },
    {
      question: "How do we know this investment will pay off?",
      answer:
        "My work has helped clients avoid $10M+ in wasted spend and reduce time-to-launch by 30% or more. If you’re making decisions that affect regulatory risk, market share, or product adoption, the cost of misalignment is far greater than the cost of getting it right.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-center mb-4 px-2"
        >
          What Teams Like Yours Always Ask Before Saying Yes
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12"
        >
          <Accordion
            type="single"
            collapsible
            className="bg-navy text-navy-foreground rounded-lg overflow-hidden"
            defaultValue="item-0"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-navy-foreground/20 last:border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-navy-foreground/5">
                  <span className="font-semibold text-lg md:text-xl">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-navy-foreground/90 text-base md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="shine-effect text-lg px-8 py-6 bg-primary hover:bg-primary/90">
            Align Product Decisions With Expert Clinical Opinion
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
