import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CTABanner from "@/components/CTABanner";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import ClientOnly from "@/components/ClientOnly";
import MobileBottomNav from "@/components/MobileBottomNav";
import CaseStudyPopup from "@/components/CaseStudyPopup";

const Index = () => {
  const [isConsultationDialogOpen, setIsConsultationDialogOpen] = useState(false);

  const openCaseStudyForm = () => {
    const popup = document.getElementById("popup-VVGIyZfOQ8WRJA6ylwdl") as HTMLIFrameElement;
    if (popup) {
      popup.style.display = "block";
    }
  };

  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <Navbar onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />
      <HeroSection onOpenConsultation={() => setIsConsultationDialogOpen(true)} />
      <ProcessSection />
      <ServicesSection onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />
      <TestimonialsSection />
      <CaseStudiesSection onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />
      <CTABanner />
      <StatsSection onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />
      <FAQSection onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />
      <FinalCTASection onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />
      <Footer />
      <ConsultationDialog 
        open={isConsultationDialogOpen} 
        onOpenChange={setIsConsultationDialogOpen} 
      />
      <ClientOnly>
        <MobileBottomNav onOpenDialog={() => setIsConsultationDialogOpen(true)} />
        <CaseStudyPopup onRequestCaseStudy={openCaseStudyForm} />
      </ClientOnly>
    </div>
  );
};

export default Index;
