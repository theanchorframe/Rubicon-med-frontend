import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";
import rubiconPainting from "@/assets/rubicon-river-painting.webp";

interface FinalCTASectionProps {
  onOpenConsultationDialog: () => void;
}

const FinalCTASection = ({ onOpenConsultationDialog }: FinalCTASectionProps) => {
  const mounted = useMounted();
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={mounted ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
                Ready to Validate Your Next Move?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Join the MedTech and Pharma teams who've used Rubicon's insight to protect capital and accelerate market entry.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-primary text-xl font-bold">✓</span>
                  <span className="font-bold text-foreground" style={{ fontSize: "1.05rem" }}>100+ KOL Engagements Across Specialties</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-xl font-bold">✓</span>
                  <span className="font-bold text-foreground" style={{ fontSize: "1.05rem" }}>$2M+ Protected From Non-Viable Investment</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-xl font-bold">✓</span>
                  <span className="font-bold text-foreground" style={{ fontSize: "1.05rem" }}>20+ Markets Evaluated for Commercial Potential</span>
                </div>
              </div>
              <div>
                <Button
                  size="lg"
                  onClick={onOpenConsultationDialog}
                  className="shine-effect text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto bg-primary hover:bg-primary/90 whitespace-normal text-center leading-tight max-w-full"
                >
                  Request a Complimentary Consultation
                </Button>
              </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={mounted ? { opacity: 0, x: 30 } : false}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src={rubiconPainting}
                alt="Rubicon river painting depicting MedTech leadership and strategic decision-making"
                className="rounded-lg shadow-xl w-full max-w-lg object-cover"
                style={{ aspectRatio: "1/1" }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
