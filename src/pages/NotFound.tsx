import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";

const NotFound = () => {
  const location = useLocation();
  const [isConsultationDialogOpen, setIsConsultationDialogOpen] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-navy text-navy-foreground">
      <Navbar onOpenConsultationDialog={() => setIsConsultationDialogOpen(true)} />
      <div className="flex min-h-screen items-center justify-center pt-32">
        <div className="text-center">
          <p className="text-primary font-semibold text-lg tracking-wide uppercase mb-4">Error</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">404</h1>
          <p className="mb-4 text-xl text-navy-foreground/80">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/80">
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
      <ConsultationDialog
        open={isConsultationDialogOpen}
        onOpenChange={setIsConsultationDialogOpen}
      />
    </div>
  );
};

export default NotFound;