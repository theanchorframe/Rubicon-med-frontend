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
        style={{ backgroundImage: `url(${heroVascularBg})` }}>
      </div>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}></div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 max-w-6xl">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6">
          
          <div className="space-y-4">
            <motion.h1
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white" style={{ lineHeight: '1.3' }}>
              
              Turn Clinical Evidence Into Commercial Advantage
            </motion.h1>

            <motion.p
              initial={mounted ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl leading-relaxed font-semibold max-w-3xl mx-auto"
              style={{ color: "rgba(255,255,255,0.8)" }}>
              
              Rubicon delivers board-ready market intelligence and go-to-market strategy for MedTech and Pharma teams who can't afford to get it wrong.
            </motion.p>

            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4 flex flex-col items-center gap-4">
              
              <Button
                size="lg"
                onClick={onOpenConsultation}
                className="shine-effect text-xl sm:text-xl md:text-2xl lg:text-2xl px-6 sm:px-8 py-5 sm:py-6 bg-primary hover:bg-primary/90 whitespace-normal h-auto">
                
                Request a Complimentary Consultation
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;
