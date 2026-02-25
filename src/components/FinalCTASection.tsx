import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FinalCTASectionProps {
  onOpenConsultationDialog: () => void;
}

const FinalCTASection = ({ onOpenConsultationDialog }: FinalCTASectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy">
              Let Rubicon Tell You When to Cross
            </h2>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto">
              You do not need "more analysis." You need the decision that sticks. We turn evidence + alignment into a roadmap your team actually adopts.
            </p>
            <Button
              size="lg"
              onClick={onOpenConsultationDialog}
              className="shine-effect text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto bg-primary hover:bg-primary/90 whitespace-normal text-center leading-tight max-w-full"
            >
              Request a Complimentary Consultation
            </Button>
            <p className="text-base md:text-lg text-muted-foreground italic">
              No prep needed. Bring the decision you're stuck on.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
