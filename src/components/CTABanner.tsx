import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import strategyImage from "@/assets/strategy-meeting.jpg";

const CTABanner = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-accent rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0"
        >
          <div className="p-8 lg:p-12 space-y-6">
            <h3 className="text-3xl font-bold text-accent-foreground">
              From Idea to Launch: $30M Co-dev + $5M NRE for a more effective and
              safer EPD
            </h3>
            <p className="text-accent-foreground/90 text-sm">
              Learn how clinical proof, reimbursement insights, and advisory-board
              design sprints built an irresistible business case for market entry
            </p>
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
          <div className="h-full min-h-[300px]">
            <img
              src={strategyImage}
              alt="Strategy Meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
