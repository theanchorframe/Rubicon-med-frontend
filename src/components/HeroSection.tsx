import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroVascularBg from "@/assets/hero-cardiac-catheterization.webp";
import { useMounted } from "@/hooks/useMounted";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

const HeroSection = ({ onOpenConsultation }: HeroSectionProps) => {
  const mounted = useMounted();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroVascularBg})` }}
      ></div>
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}></div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 max-w-6xl">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="space-y-4">
            <motion.h1
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-bold text-white text-center"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3.5rem)", lineHeight: "1.3" }}
            >
              Fueling Positive Patient Outcomes and Revenue Growth
            </motion.h1>

            <motion.p
              initial={mounted ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mx-auto font-medium text-center"
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                lineHeight: "1.7",
                maxWidth: "900px",
              }}
            >
              Rubicon equips <span className="font-semibold">C-Suite, Marketing VP's, and R&D leaders</span> with
              KOL-validated market intelligence, rigorous segmentation, and board-ready financial models through
              fractional and traditional consulting.
            </motion.p>

            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4 flex flex-col items-center gap-4"
            >
              <Button
                size="lg"
                onClick={onOpenConsultation}
                className="shine-effect text-xl sm:text-xl md:text-2xl lg:text-2xl px-6 sm:px-8 py-5 sm:py-6 bg-primary hover:bg-primary/90 whitespace-normal h-auto"
              >
                Request a Complimentary Consultation
              </Button>

              <div
                className="text-center md:flex md:justify-center md:gap-2"
                style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)", color: "rgba(255,255,255,0.85)", marginTop: "16px" }}
              >
                <p className="hidden md:flex md:items-center md:gap-2">
                  ✓ 100+ KOL Engagements Across Specialties&nbsp;&nbsp;|&nbsp;&nbsp;✓ $2M+ Protected From Non-Viable
                  Investment&nbsp;&nbsp;|&nbsp;&nbsp;✓ 20+ Markets Evaluated for Commercial Potential
                </p>
                <ul className="md:hidden space-y-1 list-none text-center">
                  <li>✓ 100+ KOL Engagements Across Specialties</li>
                  <li>✓ $2M+ Protected From Non-Viable Investment</li>
                  <li>✓ 20+ Markets Evaluated for Commercial Potential</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
