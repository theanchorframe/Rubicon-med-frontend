import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

interface StatsSectionProps {
  onOpenConsultationDialog: () => void;
}

const StatsSection = ({ onOpenConsultationDialog }: StatsSectionProps) => {
  const mounted = useMounted();
  const stats = [
    {
      number: "$30M",
      description: "Forecasted revenue from new device launch",
    },
    {
      number: "24%",
      description: "Increase in market adoption by highest unit/clinical segment",
    },
    {
      number: "40+",
      description: "Projects delivered across MedTech & Pharma",
    },
    {
      number: "$2M",
      description: "Prevented in wasted product investment",
    },
  ];

  return (
    <section className="py-20 bg-navy text-navy-foreground">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 px-2"
        >
          Turning Product Strategy Into Tangible Success
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={mounted ? { opacity: 0, scale: 0.8 } : false}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-navy-foreground/10 backdrop-blur-sm p-8 rounded-lg text-center border border-navy-foreground/20 hover:bg-navy-foreground/20 hover:scale-105 transition-all duration-300"
            >
              <p className="text-6xl md:text-7xl font-bold mb-4">{stat.number}</p>
              <p className="text-navy-foreground/90">{stat.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={onOpenConsultationDialog}
            className="shine-effect text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto bg-background text-foreground hover:bg-background/90 whitespace-normal text-center leading-tight max-w-full"
          >
            Request a Complimentary Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
