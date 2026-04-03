import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

interface FinalCTASectionProps {
  onOpenConsultationDialog: () => void;
}

const FinalCTASection = ({ onOpenConsultationDialog }: FinalCTASectionProps) => {
  const mounted = useMounted();
  return (
    <section className="py-28 md:py-36 bg-navy">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={mounted ? { opacity: 0, y: 30 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2
              className="font-bold text-white text-center"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3.5rem)", lineHeight: "1.3" }}
            >
              Every Major Market Decision Is a Rubicon Moment.
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              When Caesar crossed the Rubicon, there was no turning back. Your next market entry, acquisition, or product launch carries the same weight — capital at risk, timelines compressed, and the cost of a wrong move compounding fast. Rubicon ensures you cross with confidence, not assumption.
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                onClick={onOpenConsultationDialog}
                className="shine-effect text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto bg-white text-navy hover:bg-white/90 whitespace-normal text-center leading-tight max-w-full font-bold"
              >
                Request a Complimentary Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
