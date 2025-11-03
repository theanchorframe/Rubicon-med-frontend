import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import doctorImage from "@/assets/doctor-tablet.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-background overflow-x-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 w-full overflow-hidden"
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
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy leading-tight break-words overflow-wrap-anywhere hyphens-auto"
              style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
            >
              MedTech Success: Discover the Perfect Product, for the Ideal
              Market, Designed for the Right Patients
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-foreground leading-relaxed break-words"
              style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
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
              className="w-full"
            >
              <Button
                size="lg"
                className="shine-effect text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto break-words"
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
            className="flex justify-center lg:justify-end w-full"
          >
            <img
              src={doctorImage}
              alt="Medical Professional"
              className="w-full max-w-lg object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
