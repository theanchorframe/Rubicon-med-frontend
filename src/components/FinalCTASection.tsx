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
        opacity: 0.07,
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M0 80 C150 40, 350 120, 500 70 S800 110, 1000 60 S1150 90, 1200 75'/%3E%3Cpath d='M0 140 C200 100, 300 180, 550 130 S750 170, 950 120 S1100 155, 1200 135'/%3E%3Cpath d='M0 210 C100 180, 400 240, 600 195 S850 230, 1050 190 S1180 215, 1200 200'/%3E%3Cpath d='M0 290 C180 260, 350 320, 520 275 S780 310, 980 270 S1120 295, 1200 280'/%3E%3Cpath d='M0 360 C250 330, 400 390, 580 345 S820 380, 1020 340 S1160 365, 1200 355'/%3E%3Cpath d='M0 430 C130 400, 380 460, 560 415 S790 450, 960 410 S1140 440, 1200 425'/%3E%3Cpath d='M0 510 C200 480, 350 540, 540 495 S760 530, 940 490 S1100 520, 1200 505'/%3E%3Cpath d='M0 570 C160 550, 320 590, 500 560 S720 585, 900 555 S1080 575, 1200 565'/%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundSize: '1200px 600px',
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
