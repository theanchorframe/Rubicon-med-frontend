import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto p-0">
        <div
          className="bg-white rounded-xl overflow-hidden"
          style={{ height: "650px" }}
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
            data-height="650"
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
