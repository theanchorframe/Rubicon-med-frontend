import { motion } from "framer-motion";
import { Users, Wrench, CheckCircle, Clock, Check } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import doctorImage from "@/assets/doctor-tablet.png";
const ProcessSection = () => {
  const processSteps = [{
    number: "01",
    title: "Discovery & Analysis",
    description: "Deep VOC with clinicians and buyers, competitive scan, market sizing, and clear acceptance criteria."
  }, {
    number: "02",
    title: "Strategic Planning",
    description: "Commercial blueprint covering segmentation, positioning, pricing and access, KOL engagement, and evidence plan."
  }, {
    number: "03",
    title: "Execution & Launch",
    description: "Pilot, enable, and scale with playbooks, sales training, and performance loops for continuous optimization."
  }];
  const statistics = [{
    icon: Users,
    value: "25+",
    label: "Engaged 25+ KOLs across specialties to validate needs and specifications across numerous product classes"
  }, {
    icon: Wrench,
    value: "$30M",
    label: "Conceived and launched a new platform with $30M in forecasted revenue plus $5M in NRE"
  }, {
    icon: CheckCircle,
    value: "$1.5M",
    label: "Saved $1.5M by preventing purchase of a non-viable device"
  }, {
    icon: Clock,
    value: "10+",
    label: "Sized, segmented, and prioritized 10+ markets (TAM/SAM/SOM) to focus spend where revenue opportunity is highest"
  }];
  const benefits = ["15+ years advancing MedTech from concept to adoption", "Clinical insight combined with rigorous commercial execution", "$1.5M+ in vendor savings negotiated", "80+ product evaluations and go/no-go decisions led"];
  return <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="space-y-12">
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Convert Clinical Insight into <span className="text-primary">Market Traction</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                A three-step engagement that validates real-world need, aligns the commercial plan, and executes a launch that clinicians adopt.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-6">
              {processSteps.map((step, index) => <motion.div key={step.number} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.15
            }} viewport={{
              once: true
            }} className="flex gap-4 items-start">
                  <div className="glass-card px-6 py-4 min-w-[80px]">
                    <span className="text-3xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>)}
            </div>

            {/* Statistics Grid */}
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
          }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {statistics.map((stat, index) => <div key={index} className="glass-card p-6 space-y-3 hover:scale-105 transition-transform duration-300">
                  <stat.icon className="text-primary" size={32} weight="duotone" />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
                </div>)}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="space-y-8">
            {/* About Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Meet <span className="text-primary">Robert Miraglia</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                15+ Years of Clarity, Alignment, and Execution
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                Robert Miraglia is a strategic product leader and launch advisor with
                a proven track record across medical device, pharmaceutical, and
                managed healthcare sectors. His rare combination of clinical insight,
                qualitative and quantitative marketing research, portfolio strategy,
                and commercial execution has earned him a reputation as the go-to
                consultant when considering build-your-own products or purchasing
                products from a partner
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                From negotiating <span className="font-bold">$1.5M</span> in vendor
                savings to leading <span className="font-bold">80+</span> product
                evaluations, Rob doesn't just advise, he engineers clarity at scale.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              
              
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="flex gap-3 items-start">
                  <div className="glass-card p-2 rounded-full bg-primary/10">
                    <Check className="text-primary" size={20} weight="bold" />
                  </div>
                  <p className="text-foreground text-lg pt-1">{benefit}</p>
                </motion.div>)}
            </div>

            {/* CTA Button */}
            <Button size="lg" className="shine-effect text-lg px-8 py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto">
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ProcessSection;