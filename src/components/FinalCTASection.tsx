import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import cathLabImage from "@/assets/cath-lab.jpg";

const FinalCTASection = () => {
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
                onClick={() => {
                  const formSection = document.getElementById("consultation-form");
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="shine-effect text-xl px-12 py-8 h-auto bg-primary hover:bg-primary/90"
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
                className="w-full max-w-md rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
