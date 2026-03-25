import { motion } from "framer-motion";
import StatsChart from "@/components/ui/stats-chart";
import { useMounted } from "@/hooks/useMounted";

const CTABanner = () => {
  const mounted = useMounted();
  return (
    <section className="py-12 pb-4 bg-background scroll-mt-20" id="case-study">
      <div className="container mx-auto px-4">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-3 lg:space-y-12"
        >
          {/* Mobile & Tablet Chart - Shows First */}
          <div className="lg:hidden mb-3">
            <StatsChart />
          </div>

          {/* Centered Headline */}
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-5xl mx-auto">
              How Rubicon Helped a MedTech Team Build the Internal Business Case That Unlocked $35M in Co-Development Funding
            </h3>
            <p className="text-muted-foreground mx-auto mt-4" style={{ fontSize: '1.1rem', maxWidth: '620px', lineHeight: '1.7' }}>
              When clinical evidence alone isn't enough to move an executive team, you need market validation, KOL strategy, and financial modeling that makes the decision obvious. Here's exactly how that process worked — and what it produced.
            </p>
          </div>

          {/* Two Column Layout - Desktop Only */}
          <div className="grid lg:grid-cols-2 gap-3 lg:gap-12 items-start">
            {/* Left: Form */}
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

            {/* Right: Interactive Chart - Desktop Only */}
            <div className="hidden lg:flex items-start justify-center mt-0 lg:mt-8">
              <StatsChart />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
