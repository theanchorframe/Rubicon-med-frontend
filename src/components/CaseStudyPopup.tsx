import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import caseStudyBanner from "@/assets/epd-case-study.webp";

interface CaseStudyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyPopup = ({ isOpen, onClose }: CaseStudyPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
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
                onClick={onClose}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>

              {/* Banner image */}
              <div className="w-full h-40 md:h-48 overflow-hidden bg-background flex items-center justify-center">
                <img
                  src={caseStudyBanner}
                  alt="EPD Case Study"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-3 text-center">
                <h3 className="text-navy font-bold text-2xl md:text-3xl">
                  Get Our Complimentary EPD Case Study
                </h3>
                <p className="text-base md:text-lg text-navy/80 leading-relaxed">
                  How one MedTech team unlocked $35M in co-development funding.
                </p>
                
                {/* GHL Form */}
                <div className="w-full min-h-[280px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://link.anchorframe.com/widget/form/RSwk9c8PsfVO57gzIn2m"
                    style={{ width: "100%", height: "280px", border: "none", borderRadius: "8px" }}
                    id="popup-case-study-RSwk9c8PsfVO57gzIn2m" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="EPD Case Study Popup"
                    data-height="280"
                    data-layout-iframe-id="popup-case-study-RSwk9c8PsfVO57gzIn2m"
                    data-form-id="RSwk9c8PsfVO57gzIn2m"
                    title="EPD Case Study Popup"
                  />
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
