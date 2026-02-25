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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75"
        style={{ backgroundImage: `url(${heroVascularBg})` }}
      ></div>
      <div className="absolute inset-0 bg-navy/30"></div>

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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight text-white"
            >
              Fueling patient outcomes and corporate growth through rigorous data and clinical insight.
            </motion.h1>

            <motion.p
              initial={mounted ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl leading-relaxed font-semibold max-w-3xl mx-auto"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Rubicon delivers fractional and traditional consulting fueled by clinical and market insights. We provide the strategic roadmap—from product development and market segmentation to revenue forecasting and launch execution.
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

              <div className="text-center max-w-md">
                <p className="text-white/90 text-base sm:text-lg md:text-xl italic font-semibold">
                  "Rob's is a strong contributor with deep insights which have helped us greatly."
                </p>
                <p className="text-white/70 text-sm sm:text-base mt-1 font-semibold">— Rick Kirchner, R&D Executive</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
