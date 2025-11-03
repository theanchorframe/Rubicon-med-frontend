import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section className="py-16 bg-accent scroll-mt-20" id="case-study">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-accent rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0"
        >
          <div className="p-6 md:p-8 lg:p-12 space-y-6">
            <h3 className="text-[35px] md:text-[47px] font-bold text-accent-foreground leading-tight">
              From Idea to Launch: $30M Co-dev + $5M NRE for a more effective and
              safer EPD
            </h3>
            <p className="text-accent-foreground/90 text-lg md:text-xl">
              Learn how clinical proof, reimbursement insights, and advisory-board
              design sprints built an irresistible business case for market entry
            </p>
          </div>
          <div className="h-full min-h-[490px] rounded-2xl overflow-hidden">
            <iframe
              src="https://link.anchorframe.com/widget/form/RSwk9c8PsfVO57gzIn2m"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px" }}
              id="inline-RSwk9c8PsfVO57gzIn2m" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Case Study Popup"
              data-height="490"
              data-layout-iframe-id="inline-RSwk9c8PsfVO57gzIn2m"
              data-form-id="RSwk9c8PsfVO57gzIn2m"
              title="Case Study Popup"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
