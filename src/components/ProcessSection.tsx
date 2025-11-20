import { motion } from "framer-motion";
import { Users, Wrench, CheckCircle, Clock } from "@phosphor-icons/react";
import { useState } from "react";
const ProcessSection = () => {
  const [activeIdea, setActiveIdea] = useState<"I" | "D" | "E" | "A">("I");
  const processSteps = [{
    number: "I",
    title: "Insight & Discovery",
    description: "Deep VOC with clinicians and buyers, competitive scan, market sizing, and clear acceptance criteria."
  }, {
    number: "D",
    title: "Design & Planning",
    description: "Commercial blueprint covering segmentation, positioning, pricing and access, KOL engagement, and evidence plan."
  }, {
    number: "E",
    title: "Execution & Launch",
    description: "Pilot, enable, and scale with playbooks, sales training, and performance loops for continuous optimization."
  }, {
    number: "A",
    title: "Adoption & Optimization",
    description: "Monitor performance, gather feedback, and refine strategies to ensure sustained market success."
  }];
  const ideaContent = {
    I: {
      title: "Insight & Discovery",
      description: "We start by deeply understanding your market, customers, and clinical needs. Through comprehensive voice-of-customer research with clinicians and buyers, competitive landscape analysis, and detailed market sizing, we establish clear acceptance criteria that guide every decision moving forward."
    },
    D: {
      title: "Design & Planning",
      description: "With insights in hand, we craft a comprehensive commercial blueprint. This includes market segmentation, strategic positioning, pricing and reimbursement strategy, KOL engagement plans, and a detailed clinical evidence roadmap that aligns with regulatory and payer requirements."
    },
    E: {
      title: "Execution & Launch",
      description: "We bring strategy to life with pilot programs, sales enablement, and scalable playbooks. Our approach includes hands-on sales training, performance monitoring, and continuous optimization loops to ensure your launch gains immediate traction and momentum."
    },
    A: {
      title: "Adoption & Optimization",
      description: "Post-launch success requires vigilance. We monitor market performance, gather real-world feedback from clinicians and customers, and continuously refine strategies to drive sustained adoption, maximize market share, and achieve your revenue goals."
    }
  };
  const statistics = [{
    icon: Users,
    value: "25+",
    label: "Engaged 25+ KOLs across specialties to validate needs and specifications across numerous product classes"
  }, {
    icon: CheckCircle,
    value: "$1.5M",
    label: "Saved $1.5M by preventing purchase of a non-viable device"
  }, {
    icon: Clock,
    value: "10+",
    label: "Sized, segmented, and prioritized 10+ markets (TAM/SAM/SOM) to focus spend where revenue opportunity is highest"
  }];
  return <section id="about" className="py-20 bg-background relative overflow-hidden scroll-mt-20">
      <div className="mx-auto px-5">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="space-y-12 max-w-7xl mx-auto">
          {/* Two Column Layout: Stats Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Statistics */}
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }} 
                viewport={{ once: true }}
                className="text-5xl font-bold text-foreground"
              >
                Convert Clinical Insight into Market Traction
              </motion.h2>
              <div className="space-y-4">
                {statistics.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }} 
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
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }} 
                viewport={{ once: true }}
                className="text-5xl font-bold text-foreground"
              >
                Rob Miraglia: Your Partner in MedTech Growth.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.3 }} 
                viewport={{ once: true }}
                className="text-lg text-foreground leading-relaxed"
              >
                Rob is a medical marketing and strategy consultant who sits at the intersection of clinical insight and commercial reality. He has spent more than 25 years in medtech, pharma, and diagnostics, including leadership roles at Abbott, Medtronic, 3M, and Integer, helping teams decide which ideas are worth funding and which ones are not.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.4 }} 
                viewport={{ once: true }}
                className="text-lg text-foreground leading-relaxed"
              >
                His work focuses on one thing: turning clinical promise into growth. Rob partners with CEOs and clinical leaders to clarify the real-world problem, pressure test the value story with KOLs, and build a business case that stands up to finance, procurement, and clinicians. He has engaged over 25 specialty KOLs, sized and prioritized more than 10 markets, supported 40 plus product and market initiatives, and helped clients avoid at least 1.5 million dollars in non-viable investment.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.5 }} 
                viewport={{ once: true }}
                className="text-lg text-foreground leading-relaxed"
              >
                When the stakes are high and missteps are expensive, Rob gives teams a clear path from idea to launch so they can commit resources with confidence.
              </motion.p>
            </div>
          </div>

          {/* IDEA Interactive Section */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} viewport={{
          once: true
        }} className="space-y-8">
            {/* IDEA Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              {(["I", "D", "E", "A"] as const).map(letter => <button key={letter} onClick={() => setActiveIdea(letter)} className={`glass-card px-8 py-6 min-w-[100px] transition-all duration-300 hover:scale-105 ${activeIdea === letter ? "bg-primary/20 border-primary/40 shadow-lg" : "hover:bg-primary/10"}`}>
                  <span className={`text-4xl font-bold ${activeIdea === letter ? "text-primary" : "text-primary/60"}`}>
                    {letter}
                  </span>
                </button>)}
            </div>

            {/* Content Display */}
            <motion.div key={activeIdea} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.4
          }} className="glass-card p-8 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {ideaContent[activeIdea].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {ideaContent[activeIdea].description}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default ProcessSection;