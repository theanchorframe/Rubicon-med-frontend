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
    icon: Wrench,
    value: "+25",
    label: "Years of experience"
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
      <div className="container mx-auto px-4">
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
          {/* Meet Robert Miraglia Section */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="space-y-8">
            {/* Heading */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Meet <span className="text-primary">Robert Miraglia</span>: Converting Clinical Insight into Market Traction
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                A four-step engagement that validates real-world need, aligns the commercial plan, and executes a launch that clinicians adopt.
              </p>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 text-center max-w-5xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed">
                Rob is a dedicated and methodical Healthcare Leader known for crossing the gap between medical innovation and market reality. With over 40 years in the med tech, pharma, and diagnostic areas—including senior roles at companies like Abbott, Medtronic, 3M, and Integer—Rob brings deep cross-functional expertise to every challenge.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                His focus is clear: to develop and execute data-driven growth strategies and product development that enhance patient health and achieve aggressive financial goals. Rob&apos;s consulting work centers on meticulous clinical, qualitative and quantitative marketing research, segmentation, and forecasting to identify new product opportunities, develop new products, and optimize product portfolios. He continues the journey towards commercialization with multiple rounds of open-ended qualitative prototype and product evaluations with quantitative scoring of ordinal data. As a proven leader and consultant, Rob provides the authoritative guidance needed to cross every marketing and commercialization hurdle. He works towards ensuring your product not only launches but dominates its market segment.
              </p>
            </div>
          </motion.div>

          {/* Statistics Grid - Full Width */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statistics.map((stat, index) => <div key={index} className="glass-card p-6 space-y-3 hover:scale-105 transition-transform duration-300">
                <stat.icon className="text-primary" size={32} weight="duotone" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
              </div>)}
          </motion.div>

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