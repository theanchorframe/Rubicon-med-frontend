import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import doctorImage from "@/assets/doctor-tablet.png";

const FinalCTASection = () => {
  const points = [
    "Engaged 25+ KOLs across specialties to validate need and specifications",
    "Conceived and launches a new platform with $30M in forecasted revenue",
    "Saved $1.5M by preventing purchase of a non-viable device",
    "Sized and prioritized 10+ markets (TAM/SAM/SOM) to focus spend where adoption is highest",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-accent font-semibold italic text-center mb-4"
          >
            Trusted advisor on 20+ MedTech products worldwide
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-center mb-8 px-2"
          >
            Get Expert Eyes on Your Launch Before It's Too Late
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground">
                Walk away knowing what to <span className="font-bold">build</span>
                , who will <span className="font-bold">buy it</span>, and why it
                will <span className="font-bold">succeed.</span>
              </p>
              <div className="space-y-4">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <Check className="text-accent flex-shrink-0 mt-1" size={24} />
                    <p className="text-foreground">{point}</p>
                  </motion.div>
                ))}
              </div>
              <Button
                size="lg"
                className="shine-effect text-lg px-8 py-6 bg-primary hover:bg-primary/90"
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
                src={doctorImage}
                alt="Medical Professional"
                className="w-full max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
