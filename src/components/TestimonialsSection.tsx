import { Star } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const testimonials = [
    {
      text: "Rob is a solid and detail-oriented product marketer. He excels at customer engagement and enjoys becoming a subject matter expert and resource on cross-functional project team...",
      fullText:
        "Rob is a solid and detail-oriented product marketer. He excels at customer engagement and enjoys becoming a subject matter expert and resource on cross-functional project teams. His dedication to excellence and ability to collaborate effectively make him an invaluable asset to any organization.",
      author: "Joel Krueger",
      title: "Global Marketing Leader, Medical Devices",
    },
    {
      text: "Rob's is a strong contributor with deep insights which have helped us greatly. In working closely with him, I have witnessed how well he is able to draw valuable voice of customer...",
      fullText:
        "Rob's is a strong contributor with deep insights which have helped us greatly. In working closely with him, I have witnessed how well he is able to draw valuable voice of customer insights and translate them into actionable strategies that drive real business results.",
      author: "Rick Kirchner",
      title: "R&D Executive",
    },
    {
      text: "Rob played a key role in advancing market initiatives in his position as Senior Product Marketing Manager at Lake Region Medical. While reporting to me, Rob completed a...",
      fullText:
        "Rob played a key role in advancing market initiatives in his position as Senior Product Marketing Manager at Lake Region Medical. While reporting to me, Rob completed a comprehensive market analysis that identified new opportunities worth $30M+ in potential revenue.",
      author: "Toby Ahlbrecht",
      title: "Director of Product Management at Integer Holdings Corporation",
    },
    {
      text: "Equipping innovators in MedTech and Life Science to win the launch, accelerate adoption, and sustain advantage. Rob oversaw the launch of a strategic product for our company...",
      fullText:
        "Equipping innovators in MedTech and Life Science to win the launch, accelerate adoption, and sustain advantage. Rob oversaw the launch of a strategic product for our company that exceeded all expectations and established new benchmarks for success in our market.",
      author: "Barry R. Hix",
      title: "MBA, MPH",
    },
    {
      text: "Rob is an asset to any Sales and Marketing Team with the ability to assess a marketplace or industry in terms of competition, market stats and target groups to drive revenue....",
      fullText:
        "Rob is an asset to any Sales and Marketing Team with the ability to assess a marketplace or industry in terms of competition, market stats and target groups to drive revenue. His analytical approach and strategic thinking consistently deliver measurable results.",
      author: "Ann MacGregor",
      title: "Consultant",
    },
    {
      text: "Rob is very pleasant to work with. He's also very thorough in his approach, and always has the courage to ask the right questions. He was quick to understand the issues and problems...",
      fullText:
        "Rob is very pleasant to work with. He's also very thorough in his approach, and always has the courage to ask the right questions. He was quick to understand the issues and problems we faced and provided actionable solutions that made a real difference.",
      author: "Rajeev Sahasrabudhe",
      title: "MedTech Global R&D Leader | Patient Centric Innovation | R&D Strategy",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-secondary scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-navy text-center mb-4">
          Rubicon Medical Marketing & Strategy — Proven Healthcare Consulting
          That Generates Revenue and Margin
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={20}
                  />
                ))}
              </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
