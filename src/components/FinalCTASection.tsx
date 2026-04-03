import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";
import { FluidParticlesBackground } from "@/components/ui/fluid-particles-background";

interface FinalCTASectionProps {
  onOpenConsultationDialog: () => void;
}

const FinalCTASection = ({ onOpenConsultationDialog }: FinalCTASectionProps) => {
  const mounted = useMounted();
  return (
    <FluidParticlesBackground
      particleCount={1200}
      noiseIntensity={0.002}
      particleSize={{ min: 0.3, max: 1.5 }}
      className="py-20 bg-navy text-navy-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={mounted ? { opacity: 0, y: 30 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Validate Your Next Move?
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0.85 }}>
              Join the MedTech and Pharma teams who've used Rubicon's insight to protect capital and accelerate market entry.
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                onClick={onOpenConsultationDialog}
                className="shine-effect text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto bg-primary hover:bg-primary/90 whitespace-normal text-center leading-tight max-w-full"
              >
                Request a Complimentary Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </FluidParticlesBackground>
  );
};

export default FinalCTASection;
