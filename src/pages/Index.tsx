import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import IdeaProcessSection from "@/components/IdeaProcessSection";
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
  const [isCaseStudyPopupOpen, setIsCaseStudyPopupOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />
      <HeroSection onOpenConsultation={() => setIsConsultationDialogOpen(true)} />
      <ProcessSection />
      <TestimonialsSection />
      <IdeaProcessSection />
      <ServicesSection onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />
      <CaseStudiesSection onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />
      <CTABanner onOpenCaseStudyPopup={() => setIsCaseStudyPopupOpen(true)} />
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
        <CaseStudyPopup
          isOpen={isCaseStudyPopupOpen}
          onClose={() => setIsCaseStudyPopupOpen(false)}
          onOpenConsultation={() => setIsConsultationDialogOpen(true)}
        />
      </ClientOnly>
    </div>
  );
};

export default Index;
