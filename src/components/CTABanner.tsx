import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import strategyImage from "@/assets/strategy-meeting.webp";

const CTABanner = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-accent rounded-2xl overflow-hidden grid md:grid-cols-[1fr,1.5fr] gap-0"
        >
          <div className="p-6 md:p-8 lg:p-12 space-y-6">
            <h3 className="text-[42px] md:text-[56px] font-bold text-accent-foreground leading-tight">
              From Idea to Launch: $30M Co-dev + $5M NRE for a more effective and
              safer EPD
            </h3>
            <p className="text-accent-foreground/90 text-lg md:text-xl">
              Learn how clinical proof, reimbursement insights, and advisory-board
              design sprints built an irresistible business case for market entry
            </p>
            <div className="space-y-2">
              <Button
                size="lg"
                className="shine-effect bg-navy text-navy-foreground hover:bg-navy/90"
              >
                Get the EPD Case Study
              </Button>
              <p className="text-accent-foreground/80 text-xs italic">
                Instant Email Delivery*
              </p>
            </div>
          </div>
          <div className="h-full min-h-[280px] rounded-2xl overflow-hidden">
            <img
              src={strategyImage}
              alt="Strategy Meeting"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
