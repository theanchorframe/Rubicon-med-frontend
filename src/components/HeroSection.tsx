import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import doctorImage from "@/assets/doctor-tablet.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-accent font-semibold text-lg italic"
            >
              Trusted Advisor to the MedTech Field
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-navy leading-tight"
            >
              MedTech Success: Discover the Perfect Product, for the Ideal
              Market, Designed for the Right Patients
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-foreground leading-relaxed"
            >
              We help MedTech companies leverage data and physician validation
              to create disruptive products that enhance patient health, with
              optimal technology and the right dimensional attributes for the
              right markets and patients, all while keeping{" "}
              <span className="font-bold">SKU complexity under control.</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="shine-effect text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              >
                Get Expert Eyes on Your Product Strategy
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={doctorImage}
              alt="Medical Professional"
              className="w-full max-w-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
