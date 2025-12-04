import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-[95%] max-w-lg bg-background rounded-xl shadow-2xl overflow-hidden pointer-events-auto relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>

              {/* Banner image */}
              <div className="w-full h-32 md:h-40 overflow-hidden">
                <img
                  src={caseStudyBanner}
                  alt="Case Study"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-3 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-navy">
                  Get Our Free Case Study
                </h3>
                <p className="text-sm text-navy/80 leading-relaxed">
                  Discover how we helped a MedTech company avoid a 7-figure launch misfire and align their teams with data-driven strategy.
                </p>
                
                {/* GHL Form */}
                <div className="w-full min-h-[350px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://link.anchorframe.com/widget/form/RSwk9c8PsfVO57gzIn2m"
                    style={{ width: "100%", height: "350px", border: "none", borderRadius: "8px" }}
                    id="popup-case-study-RSwk9c8PsfVO57gzIn2m" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Case Study Popup"
                    data-height="350"
                    data-layout-iframe-id="popup-case-study-RSwk9c8PsfVO57gzIn2m"
                    data-form-id="RSwk9c8PsfVO57gzIn2m"
                    title="Case Study Popup"
                  />
                </div>
                
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyPopup;
