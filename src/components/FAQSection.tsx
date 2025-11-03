import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of companies do you typically work with?",
      answer:
        "I primarily work with medical device companies. This includes early-stage startups preparing for their first product launch as well as established global manufacturers looking to refine their commercial strategy. Whether you're entering the market or scaling an existing portfolio, I help teams find the clearest path forward and avoid costly missteps.",
    },
    {
      question: "What's your experience with launch planning and execution?",
      answer:
        "I have led and advised on 40+ product launches across medical devices, pharmaceuticals, and managed healthcare. My experience spans everything from concept validation and KOL engagement to go-to-market strategy and commercial execution, with proven results including $30M+ in forecasted revenue and $1.5M in prevented wasted investment.",
    },
    {
      question: "Do you only work with U.S.-based companies?",
      answer:
        "No. While I have deep experience in U.S. markets, I work with companies globally. My approach to market research, product strategy, and clinical validation applies across regions, and I've successfully advised international teams on entering and expanding in multiple markets.",
    },
    {
      question: "What's your process like?",
      answer:
        "My process is built on clinical proof, market evidence, and cross-functional alignment. I start by understanding your product, market, and stakeholders, then combine KOL interviews, segmentation analysis, and voice-of-customer research to build strategies that are both clinically sound and commercially viable. Every engagement is tailored to your specific needs and timeline.",
    },
    {
      question: "How do we know this investment will pay off?",
      answer:
        "The work I do is designed to reduce risk and maximize ROI. By validating your market before you commit resources, identifying the highest-value segments, and aligning your team around evidence-based strategy, you avoid expensive mistakes and focus investment where it will generate the most return. My clients have saved millions in wasted development costs and generated tens of millions in new revenue.",
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
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-navy-foreground/20 last:border-0">
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
          <Button
            size="lg"
            className="shine-effect text-lg px-8 py-6 bg-primary hover:bg-primary/90"
          >
            Align Product Decisions With Expert Clinical Opinion
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
