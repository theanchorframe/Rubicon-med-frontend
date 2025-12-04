import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface MobileBottomNavProps {
  onOpenDialog: () => void;
}

const MobileBottomNav = ({ onOpenDialog }: MobileBottomNavProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~100vh (hero section)
      const scrollThreshold = window.innerHeight;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg">
      <div className="container mx-auto px-3 py-2">
        <Button
          onClick={onOpenDialog}
          className="w-full shine-effect text-base px-6 py-3 h-auto bg-primary hover:bg-primary/90"
        >
          Request a Consultation
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
