import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

interface FinalCTASectionProps {
  onOpenConsultationDialog: () => void;
}

const FinalCTASection = ({ onOpenConsultationDialog }: FinalCTASectionProps) => {
  const mounted = useMounted();
  return (
    <section className="py-20 bg-navy text-navy-foreground relative overflow-hidden">
      {/* Subtle topographic/contour pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.06,
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.8'%3E%3Cellipse cx='200' cy='200' rx='180' ry='120'/%3E%3Cellipse cx='200' cy='200' rx='150' ry='100'/%3E%3Cellipse cx='200' cy='200' rx='120' ry='80'/%3E%3Cellipse cx='200' cy='200' rx='90' ry='60'/%3E%3Cellipse cx='200' cy='200' rx='60' ry='40'/%3E%3Cellipse cx='200' cy='200' rx='30' ry='20'/%3E%3Cellipse cx='80' cy='80' rx='70' ry='50'/%3E%3Cellipse cx='80' cy='80' rx='45' ry='30'/%3E%3Cellipse cx='80' cy='80' rx='20' ry='12'/%3E%3Cellipse cx='320' cy='320' rx='75' ry='55'/%3E%3Cellipse cx='320' cy='320' rx='50' ry='35'/%3E%3Cellipse cx='320' cy='320' rx='25' ry='15'/%3E%3Cellipse cx='350' cy='80' rx='50' ry='70'/%3E%3Cellipse cx='350' cy='80' rx='30' ry='45'/%3E%3Cellipse cx='80' cy='320' rx='60' ry='45'/%3E%3Cellipse cx='80' cy='320' rx='35' ry='25'/%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundSize: '400px 400px',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
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
    </section>
  );
};

export default FinalCTASection;
