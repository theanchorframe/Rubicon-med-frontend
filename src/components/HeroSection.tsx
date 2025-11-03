import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroVascularBg from "@/assets/hero-vascular-bg.jpg";

const HeroSection = () => {
  const scrollToProcess = () => {
    const processSection = document.getElementById("process");
    if (processSection) {
      processSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroVascularBg})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-navy/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:max-w-2xl space-y-6"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-semibold text-sm sm:text-base tracking-wide uppercase"
            >
              Trusted Advisor to the MedTech Field
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight"
            >
              Discover the perfect product for the ideal market, designed for the right patients
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed"
            >
              We help companies find clarity, create alignment, and accelerate time to value
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <Button
              size="lg"
              onClick={scrollToProcess}
              className="shine-effect w-full sm:w-auto text-sm sm:text-base px-6 py-5 shadow-lg hover:shadow-xl transition-all bg-primary hover:bg-primary/90 text-white"
            >
              How the Process Works
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
