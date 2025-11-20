import { motion } from "framer-motion";
import StatsChart from "@/components/ui/stats-chart";

const CTABanner = () => {
  return (
    <section className="py-16 pb-4 bg-background scroll-mt-20" id="case-study">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-8 lg:space-y-12"
        >
          {/* Centered Headline */}
          <div className="text-center">
            <h3 className="text-[32px] md:text-[42px] lg:text-[52px] font-bold text-accent-foreground leading-tight max-w-5xl mx-auto">
              From Idea to Launch: $30M Co-dev + $5M NRE for a More Effective and Safer EPD
            </h3>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Subheadline & Form */}
            <div className="space-y-6">
              <p className="text-accent-foreground/90 text-lg md:text-xl leading-relaxed">
                Learn how clinical proof, reimbursement insights, and advisory-board
                design sprints built an irresistible business case for market entry
              </p>
              <div className="w-full min-h-[490px] rounded-2xl overflow-hidden bg-background/50 backdrop-blur-sm">
                <iframe
                  src="https://link.anchorframe.com/widget/form/RSwk9c8PsfVO57gzIn2m"
                  style={{ width: "100%", height: "490px", border: "none", borderRadius: "10px" }}
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
            </div>

            {/* Right: Interactive Chart */}
            <div className="flex items-start justify-center mt-0 lg:mt-8">
              <StatsChart />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
