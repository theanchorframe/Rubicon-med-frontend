import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CTABanner from "@/components/CTABanner";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <CTABanner />
      <StatsSection />
      <ServicesSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
