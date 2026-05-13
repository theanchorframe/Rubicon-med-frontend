import { motion } from "framer-motion";
import { Users, CheckCircle, Clock } from "@phosphor-icons/react";
import robHeadshot from "@/assets/rob-miraglia-headshot.webp";
import { useMounted } from "@/hooks/useMounted";

const ProcessSection = () => {
  const mounted = useMounted();

  const statistics = [
    {
      icon: Users,
      value: "100+",
      label: "Engaged 100+ KOLs across specialties to validate needs and specifications across numerous product classes",
    },
    {
      icon: CheckCircle,
      value: "$2M+",
      label: "Helped companies avoid at least $2 million in non-viable investment",
    },
    {
      icon: Clock,
      value: "20+",
      label: "Evaluated over 20 markets to focus spend where the highest revenue is attainable",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden scroll-mt-20">
      <div className="mx-auto px-5">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12 max-w-7xl mx-auto"
        >
          {/* Two Column Layout: Stats Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Statistics */}
            <div className="space-y-6">
              <motion.h2
                initial={mounted ? { opacity: 0, y: 20 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="sm:text-4xl lg:text-5xl font-bold text-foreground text-4xl"
              >
                Convert Clinical Insight into <span className="text-primary">Market Traction</span>
              </motion.h2>
              <div className="space-y-4">
                {statistics.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={mounted ? { opacity: 0, y: 20 } : false}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 space-y-3 hover:scale-105 transition-transform duration-300"
                  >
                    <stat.icon className="text-primary" size={32} weight="duotone" />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Bio Content */}
            <div className="space-y-6">
              <motion.h2
                initial={mounted ? { opacity: 0, y: 20 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-bold text-foreground text-4xl"
              >
                <span className="text-primary">Rob Miraglia</span>: Your Partner in MedTech Growth.
              </motion.h2>
              <motion.p
                initial={mounted ? { opacity: 0, y: 20 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-foreground leading-relaxed"
              >
                Rob turns clinical promise into commercial growth. With over 25 years of leadership and management at Abbott, Medtronic, Integer, and 3M, he helps teams validate high-stakes investments, develop products, and turn medical innovation into market growth.
              </motion.p>
              <motion.p
                initial={mounted ? { opacity: 0, y: 20 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-foreground leading-relaxed"
              >
                With expertise spanning 20+ markets and 100+ KOL engagements, Rob specializes in identifying high-growth opportunities. His strategic guidance ensures funding goes to the right ideas for commercial growth and risk mitigation.
              </motion.p>
              <motion.div
                initial={mounted ? { opacity: 0, y: 20 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center pt-4"
              >
                <img
                  src={robHeadshot}
                  alt="Rob Miraglia"
                  className="w-64 h-auto rounded-lg shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
