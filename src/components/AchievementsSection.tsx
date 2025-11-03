import { Check } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      text: "Engaged 25+ KOLs",
      subtext: "across specialties to validate needs and specifications across numerous product classes",
    },
    {
      text: "Conceived and launched a new platform with $30M",
      subtext: "in forecasted revenue plus $5M in NRE",
    },
    {
      text: "Saved $1.5M",
      subtext: "by preventing purchase of a non-viable device",
    },
    {
      text: "Sized, segmented, and prioritized 10+ markets",
      subtext: "(TAM/SAM/SOM) to focus spend where revenue opportunity is highest",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex gap-4">
              <Check className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-foreground text-lg">
                  {achievement.text}
                </p>
                <p className="text-foreground/80 mt-1">{achievement.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
