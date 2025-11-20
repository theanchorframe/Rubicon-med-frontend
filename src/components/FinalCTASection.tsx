import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import cathLabImage from "@/assets/cath-lab.jpg";

interface FinalCTASectionProps {
  onOpenConsultationDialog: () => void;
}

const FinalCTASection = ({ onOpenConsultationDialog }: FinalCTASectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy">
                Cross the Right Rubicon
              </h2>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                Rubicon exists to replace guesswork with conviction. We shape upstream decisions that focus your effort, align stakeholders, and create a roadmap that earns adoption and accelerates growth.
              </p>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                <span className="font-bold">Crossing:</span> make the decisive move only when the data and the team say go.
              </p>
              <Button
                size="lg"
                onClick={onOpenConsultationDialog}
                className="shine-effect text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto bg-primary hover:bg-primary/90 whitespace-normal text-center leading-tight max-w-full"
              >
                Schedule a FREE Consultation Call
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={cathLabImage}
                alt="Catheterization lab procedure"
                className="w-full max-w-2xl rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
