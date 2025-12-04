import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseStudyBanner from "@/assets/case-study-banner.webp";

interface CaseStudyPopupProps {
  onRequestCaseStudy: () => void;
}

const CaseStudyPopup = ({ onRequestCaseStudy }: CaseStudyPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if popup was already dismissed this session
    const dismissed = sessionStorage.getItem("caseStudyPopupDismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("caseStudyPopupDismissed", "true");
  };

  const handleGetCaseStudy = () => {
    handleDismiss();
    onRequestCaseStudy();
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleDismiss}
          />
          
          {/* Popup Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-[90%] max-w-lg bg-background rounded-xl shadow-2xl overflow-hidden pointer-events-auto"
            >
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>

            {/* Banner image */}
            <div className="w-full h-40 md:h-48 overflow-hidden">
              <img
                src={caseStudyBanner}
                alt="Case Study"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-navy">
                Get Our Free Case Study
              </h3>
              <p className="text-foreground leading-relaxed">
                Discover how we helped a MedTech company avoid a 7-figure launch misfire and align their teams with data-driven strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  size="lg"
                  onClick={handleGetCaseStudy}
                  className="shine-effect bg-primary hover:bg-primary/90 text-xl px-8 py-6 h-auto"
                >
                  Get the Case Study
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDismiss}
                  className="text-xl px-8 py-6 h-auto"
                >
                  Maybe Later
                </Button>
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyPopup;
