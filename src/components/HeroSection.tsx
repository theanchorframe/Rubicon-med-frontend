import { motion } from "framer-motion";
import heroVascularBg from "@/assets/hero-cardiac-catheterization.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with 85% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
        style={{ backgroundImage: `url(${heroVascularBg})` }}
      ></div>
      {/* Navy overlay for better text readability */}
      <div className="absolute inset-0 bg-navy/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-semibold text-sm sm:text-base tracking-wide uppercase"
              style={{ color: '#4FC3F7' }}
            >
              When your next MedTech bet cannot be a guess
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight w-full text-white"
            >
              Stop betting R&D budgets on hunches and make MedTech moves backed by real evidence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl leading-relaxed font-semibold w-full"
              style={{ color: '#4FC3F7' }}
            >
              Rubicon combines data, marketing research, and physician insight so you know which markets to pursue, which technologies to back, and how to grow without exploding SKU complexity.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            id="consultation-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full"
          >
            <div
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden"
              style={{ height: "650px" }}
            >
              <iframe
                src="https://link.anchorframe.com/widget/form/jxrEwmyK9koADRveNp3T"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px" }}
                id="inline-jxrEwmyK9koADRveNp3T"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name=" Rubicon Form"
                data-height="650"
                data-layout-iframe-id="inline-jxrEwmyK9koADRveNp3T"
                data-form-id="jxrEwmyK9koADRveNp3T"
                title=" Rubicon Form"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Form embed script */}
      <script src="https://link.anchorframe.com/js/form_embed.js"></script>

      {/* Case Study Popup Form */}
      <iframe
        src="https://link.anchorframe.com/widget/form/VVGIyZfOQ8WRJA6ylwdl"
        style={{ display: "none", width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
        id="popup-VVGIyZfOQ8WRJA6ylwdl"
        data-layout="{'id':'POPUP'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Case study Pop up"
        data-height="485"
        data-layout-iframe-id="popup-VVGIyZfOQ8WRJA6ylwdl"
        data-form-id="VVGIyZfOQ8WRJA6ylwdl"
        title="Case study Pop up"
      />
      <script src="https://link.anchorframe.com/js/form_embed.js"></script>
    </section>
  );
};

export default HeroSection;
