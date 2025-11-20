import { Button } from "@/components/ui/button";

interface MobileBottomNavProps {
  onOpenDialog: () => void;
}

const MobileBottomNav = ({ onOpenDialog }: MobileBottomNavProps) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <Button
          onClick={onOpenDialog}
          className="w-full shine-effect text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90"
        >
          Request a Consultation
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
