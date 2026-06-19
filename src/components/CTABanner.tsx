import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import StatsChart from "@/components/ui/stats-chart";
import { useMounted } from "@/hooks/useMounted";

interface CTABannerProps {
  onOpenCaseStudyPopup: () => void;
}

const CTABanner = ({ onOpenCaseStudyPopup }: CTABannerProps) => {
  const mounted = useMounted();
  return (
    <section className="py-12 pb-20 bg-background scroll-mt-20" id="case-study">
      <div className="container mx-auto px-4">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Mobile: Chart first, then text */}
          <div className="lg:hidden space-y-6">
            <StatsChart />
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                How One MedTech Team Unlocked $35M in Co-Development Funding
              </h3>
              <p className="text-foreground mx-auto" style={{ fontSize: '1.1rem', maxWidth: '620px', lineHeight: '1.7' }}>
                When clinical evidence alone isn't enough to move an executive team, you need market validation, KOL strategy, and financial modeling that makes the decision obvious. Here's exactly how that process worked — and what it produced.
              </p>
              <Button
                size="lg"
                onClick={onOpenCaseStudyPopup}
                className="shine-effect text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto bg-[#003B6F] text-white hover:bg-[#003B6F]/90 max-w-full whitespace-normal text-center"
              >
                Get the EPD Case Study
              </Button>
            </div>
          </div>

          {/* Desktop: Two columns */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Headline + subheadline + button */}
            <div className="space-y-6">
              <h3 className="text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                How One MedTech Team Unlocked $35M in Co-Development Funding
              </h3>
              <p className="text-foreground" style={{ fontSize: '1.1rem', maxWidth: '620px', lineHeight: '1.7' }}>
                When clinical evidence alone isn't enough to move an executive team, you need market validation, KOL strategy, and financial modeling that makes the decision obvious. Here's exactly how that process worked — and what it produced.
              </p>
              <Button
                size="lg"
                onClick={onOpenCaseStudyPopup}
                className="shine-effect text-base sm:text-xl px-6 sm:px-12 py-5 sm:py-8 h-auto bg-[#003B6F] text-white hover:bg-[#003B6F]/90 whitespace-normal max-w-full"
              >
                Get the EPD Case Study
              </Button>
            </div>

            {/* Right: Chart */}
            <div>
              <StatsChart />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
