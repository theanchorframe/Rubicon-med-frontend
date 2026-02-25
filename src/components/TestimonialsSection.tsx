import { Star } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

const TestimonialsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const mounted = useMounted();

  const testimonials = [
    {
      headline: "Solid and detail-oriented product marketer",
      text: "Rob is a solid and detail-oriented product marketer. He excels at customer engagement and enjoys becoming a subject matter expert and resource on cross-functional project teams....",
      fullText:
        "Rob is a solid and detail-oriented product marketer. He excels at customer engagement and enjoys becoming a subject matter expert and resource on cross-functional project teams. He operates with a strong sense of ownership in his work and is well-liked by his peers. If you are looking for a hard-working, engaged marketer who is a good team player, I encourage you to consider Rob",
      author: "Joel Krueger",
      title: "Global Marketing Leader, Medical Devices",
    },
    {
      headline: "Strong contributor with deep insights",
      text: "Rob's is a strong contributor with deep insights which have helped us greatly. In working closely with him, I have witnessed how well he is able to draw valuable voice of customer...",
      fullText:
        "Rob's is a strong contributor with deep insights which have helped us greatly. In working closely with him, I have witnessed how well he is able to draw valuable voice of customer feedback from the marketplace; both online and in person. He is a natural in terms of getting people to open up and share details which are key in any new product development effort.",
      author: "Rick Kirchner",
      title: "R&D Executive",
    },
    {
      headline: "Best-in-class clinical stakeholder network",
      text: "Rob played a key role in advancing market initiatives in his position as Senior Product Marketing Manager at Lake Region Medical. While reporting to me, Rob completed a...",
      fullText:
        "Rob played a key role in advancing market initiatives in his position as Senior Product Marketing Manager at Lake Region Medical. While reporting to me, Rob completed a strategic initiative to develop an expanded clinical advisor network within his market franchise. He effectively leveraged his strong clinical acumen and market insights to lead the recruitment, development, and management of a best-in-class clinical stakeholder network including many KOLs. He utilized outputs from this initiative to guide decision making and drive business opportunities within his area of market responsibility. Additionally, Rob possessed passion for innovation and integrity as it relates to being a strong advocate for the patient and customer.",
      author: "Toby Ahlbrecht",
      title: "Director of Product Management at Integer Holdings Corporation",
    },
    {
      headline: "Great tactical discipline, teamwork, and deep market understanding",
      text: "Equipping innovators in MedTech and Life Science to win the launch, accelerate adoption, and sustain advantage. Rob oversaw the launch of a strategic product for our company...",
      fullText:
        " Equipping innovators in MedTech and Life Science to win the launch, accelerate adoption, and sustain advantage. Rob oversaw the launch of a strategic product for our company. The product, a premium drug delivery technology for pain management, required Rob to work across the organization to 1) train 200+ sales professionals and 2) appropriately position the technology for rapid adoption across the targeted clinic base, 5,000 Physical Therapy clinics. Rob's efforts, combined with a motivated sales force, resulted in EMPI penetrating the target clinic goal within 10 months post launch, while also exceeding the sales and contribution goals for the product in year 1. Rob displayed great tactical discipline, teamwork, and a deep understanding of his market throughout the launch phase.",
      author: "Barry R. Hix",
      title: "MBA, MPH",
    },
    {
      headline: "An asset to any Sales and Marketing Team",
      text: "Rob is an asset to any Sales and Marketing Team with the ability to assess a marketplace or industry in terms of competition, market stats and target groups to drive revenue....",
      fullText:
        "Rob is an asset to any Sales and Marketing Team with the ability to assess a marketplace or industry in terms of competition, market stats and target groups to drive revenue. Having sales management experience together with his knowledge of marketing is a great combination for many corporate growth scenarios.",
      author: "Ann MacGregor",
      title: "Consultant",
    },
    {
      headline: "Always has the courage to ask the right questions",
      text: "Rob is very pleasant to work with. He's also very thorough in his approach, and always has the courage to ask the right questions. He was quick to understand the issues and problems...",
      fullText:
        "Rob is very pleasant to work with. He's also very thorough in his approach, and always has the courage to ask the right questions. He was quick to understand the issues and problems and was always willing to work together to resolve these. He was always willing to co-operate and help me out on Human factors issues on projects. I'd highly recommend Rob.",
      author: "Rajeev Sahasrabudhe",
      title: "MedTech Global R&D Leader | Patient Centric Innovation | R&D Strategy",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-background scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-center mb-4 px-2"
        >
          Rubicon Medical Marketing & Strategy — Proven Healthcare Consulting
          That Generates Revenue and Margin
        </motion.h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={mounted ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid glass-card p-6 shadow-sm"
            >
            <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={20}
                  />
                ))}
              </div>
              <h3 className="text-navy font-bold text-lg mb-3">{testimonial.headline}</h3>
              <p className="text-foreground/90 italic mb-4">
                {expandedCard === index ? testimonial.fullText : testimonial.text}
              </p>
              {testimonial.text !== testimonial.fullText && (
                <button
                  onClick={() =>
                    setExpandedCard(expandedCard === index ? null : index)
                  }
                  className="text-primary font-semibold hover:underline mb-4"
                >
                  {expandedCard === index ? "Read less" : "Read more"}
                </button>
              )}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
