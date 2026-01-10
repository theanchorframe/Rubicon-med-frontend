import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroVascularBg from "@/assets/hero-cardiac-catheterization.webp";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

const HeroSection = ({ onOpenConsultation }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with 85% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75"
        style={{ backgroundImage: `url(${heroVascularBg})` }}
      ></div>
      {/* Navy overlay for better text readability */}
      <div className="absolute inset-0 bg-navy/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-sm sm:text-base tracking-wide uppercase"
              style={{ color: "#4FC3F7" }}
            >
              When your next MedTech bet cannot be a guess
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            >
              Stop betting{" "}
              <span className="text-[1.1em] underline decoration-[#0080FF]">
                R&D
                <br />
                budgets
              </span>{" "}
              on gut feel or cool tech.
              <br />
              Make MedTech moves backed by <span className="text-[1.1em]">data</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl leading-relaxed font-semibold max-w-3xl mx-auto"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Rubicon offers both fractional and traditional consulting services. We synthesize primary and secondary
              market research data with physician interviews and surveys and the medical literature to inform decisions
              on which markets to pursue, in which technologies you should invest, and how and to whom you should
              launch, with estimated annual revenue and CAGRs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4 flex flex-col items-center gap-4"
            >
              <Button
                size="lg"
                onClick={onOpenConsultation}
                className="shine-effect text-xl sm:text-xl md:text-2xl lg:text-2xl px-6 sm:px-8 py-5 sm:py-6 bg-primary hover:bg-primary/90 whitespace-normal h-auto"
              >
                Click This Button to Request
                <br />a Complimentary Consultation
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
