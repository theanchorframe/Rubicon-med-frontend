import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

interface ServicesSectionProps {
  onOpenConsultationDialog: () => void;
}

const ServicesSection = ({ onOpenConsultationDialog }: ServicesSectionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const mounted = useMounted();

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const services = [
  {
    title: "Product Evaluation & Concept Vetting",
    boldOpener: "Your capital only goes to products with a validated path to market leadership.",
    description:
    "Our proven framework integrates multidimensional technical, clinical, and regulatory due diligence with rigorous market modeling. We synthesize competitive intelligence and growth drivers to ensure capital is deployed only into assets with a validated path to market leadership."
  },
  {
    title: "Clinical & Market Research",
    boldOpener: "Every investment decision backed by evidence, not assumptions.",
    description:
    "Drive confident product investment through clinical and market triangulation. We leverage expert consultations and comprehensive database analytics to distill complex evidence into an actionable roadmap – eliminating market ambiguity and securing your path to entry."
  },
  {
    title: "KOL & Voice-of-Customer Programs",
    boldOpener: "Market credibility built before you spend a dollar on launch.",
    description:
    "Accelerate market adoption through clinical advocacy and expert mobilization. We manage the full-lifecycle engagement of Key Opinion Leaders—from strategic identification and contracting to the execution of IDIs, surveys, field trials, and clinician panels. By synthesizing the 'Voice of Customer' into evidence-based messaging, we ensure your value proposition resonates with providers and drives accelerated uptake."
  },
  {
    title: "Commercial Strategy & Launch",
    boldOpener: "Market entry strategies that sustain momentum long after launch day.",
    description:
    "Turn insight into adoption at scale. We craft go-to-market strategies and playbooks, sales enablement, and messaging rooted in evidence so your launch not only hits targets, but sustains momentum long after market entry."
  },
  {
    title: "Upstream Portfolio Strategy & Roadmapping",
    boldOpener: "Resources concentrated on the assets with the highest return.",
    description:
    "Optimize resource allocation and cross-functional alignment. By defining rigorous segmentation, targeting, and positioning (STP) frameworks alongside multi-year product roadmaps, we isolate high-potential opportunities. This allows R&D, Marketing, and Sales to concentrate resources on assets with the highest ROI."
  },
  {
    title: "Pricing, Forecasting & Financial Modeling",
    boldOpener: "Revenue projections that hold up under board-level scrutiny.",
    description:
    "Enable executive decision-making with rigorous financial modeling. We translate market dynamics and value-based pricing into accurate revenue projections that hold up under institutional scrutiny. Our models provide the clarity needed to synchronize AOP targets with actual clinical and commercial scalability."
  }];


  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? services.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === services.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedIndex(null);
  };

  return (
    <section id="services" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[3rem] font-bold text-navy text-center mb-4 px-2" style={{ lineHeight: '1.4' }}>Six Ways Rubicon Turns <span className="text-primary">Clinical and Market Intelligence</span> Into Defensible Commercial Decisions


        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          {services.map((service, index) => {
            const isOpen = openItems.includes(index);
            return (
              <motion.div
                key={index}
                initial={mounted ? { opacity: 0, y: 30 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl transition-all duration-300"
                style={{ border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <h3 className="text-2xl font-bold text-primary pr-4">{service.title}</h3>
                  <ChevronDown 
                    className={`h-6 w-6 shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <p className="text-foreground/80 leading-relaxed text-lg">
                          <span className="font-bold">{service.boldOpener}</span>{" "}{service.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12">
          
          <Button
            size="xl"
            onClick={onOpenConsultationDialog}
            className="shine-effect text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto bg-primary hover:bg-primary/90 whitespace-normal text-center leading-tight">
            
            Request a Complimentary Consultation
          </Button>
        </motion.div>
      </div>

      {/* Service Popup Modal */}
      <AnimatePresence>
        {selectedIndex !== null &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedIndex(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}>
          
            {/* Previous Arrow */}
            <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 hover:bg-background text-foreground shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous service">
            
              <CaretLeft size={28} weight="bold" />
            </button>

            {/* Content Card */}
            <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-background border-2 border-primary/30 rounded-2xl p-8 md:p-12 max-w-3xl w-full mx-12 shadow-2xl max-h-[80vh] overflow-y-auto">
            
              {/* Close Button */}
              <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors duration-200"
              aria-label="Close popup">
              
                <X size={24} className="text-foreground" />
              </button>

              {/* Service Counter */}
              <p className="text-sm text-muted-foreground mb-4">
                {selectedIndex + 1} of {services.length}
              </p>

              {/* Service Content */}
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {services[selectedIndex].title}
              </h3>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                <span className="font-bold">{services[selectedIndex].boldOpener}</span>{" "}{services[selectedIndex].description}
              </p>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {services.map((_, index) =>
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ?
                "bg-primary w-6" :
                "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`
                }
                aria-label={`Go to service ${index + 1}`} />

              )}
              </div>
            </motion.div>

            {/* Next Arrow */}
            <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 hover:bg-background text-foreground shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next service">
            
              <CaretRight size={28} weight="bold" />
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

};

export default ServicesSection;
