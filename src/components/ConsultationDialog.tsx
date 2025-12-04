import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Share the product decision you're wrestling with
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            In a few lines, tell Rob where you need evidence, not opinions. He'll review and follow up with next steps if it's a good fit.
          </DialogDescription>
        </DialogHeader>
        <div
          className="bg-white rounded-b-xl overflow-hidden"
          style={{ height: "550px" }}
        >
          <iframe
            src="https://link.anchorframe.com/widget/form/jxrEwmyK9koADRveNp3T"
            style={{ width: "100%", height: "100%", border: "none" }}
            id="popup-jxrEwmyK9koADRveNp3T"
            data-layout="{'id':'POPUP'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Rubicon Form"
            data-height="550"
            data-layout-iframe-id="popup-jxrEwmyK9koADRveNp3T"
            data-form-id="jxrEwmyK9koADRveNp3T"
            title="Rubicon Form"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
