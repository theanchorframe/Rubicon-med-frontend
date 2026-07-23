import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const phaseOptions = [
  "Ideation / Early R&D",
  "Clinical Trials",
  "Pre-Launch",
  "Market Expansion",
  "Other",
];

const challengeOptions = [
  "Concept Vetting",
  "KOL Engagement",
  "Market Sizing",
  "Launch Strategy",
  "Other",
];

const formSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  title: z.string().trim().min(1, "Corporate title is required").max(150),
  phase: z.string().optional(),
  phaseOther: z.string().trim().max(500).optional(),
  challenge: z.string().optional(),
  challengeOther: z.string().trim().max(500).optional(),
});

type FormState = {
  fullName: string;
  email: string;
  title: string;
  phase: string;
  phaseOther: string;
  challenge: string;
  challengeOther: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  title: "",
  phase: "",
  phaseOther: "",
  challenge: "",
  challengeOther: "",
};

const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    if (form.phase === "Other" && !form.phaseOther.trim()) {
      toast.error("Please specify your asset phase");
      return;
    }
    if (form.challenge === "Other" && !form.challengeOther.trim()) {
      toast.error("Please specify your strategic challenge");
      return;
    }

    setSubmitting(true);
    const phaseFinal = form.phase === "Other" ? `Other — ${form.phaseOther}` : (form.phase || "Not provided");
    const challengeFinal = form.challenge === "Other" ? `Other — ${form.challengeOther}` : (form.challenge || "Not provided");

    try {
      const { data, error } = await supabase.functions.invoke("submit-strategic-briefing", {
        body: {
          fullName: form.fullName,
          email: form.email,
          title: form.title,
          phase: phaseFinal,
          challenge: challengeFinal,
        },
      });
      if (error || !data?.ok) {
        throw new Error(error?.message || "Submission failed");
      }
      toast.success("Your briefing request has been sent. We'll be in touch within two business days.");
      setForm(initialState);
      onOpenChange(false);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-xl max-h-[92vh] overflow-y-auto w-[92%] sm:w-full p-0 border border-gray-200 bg-white"
        style={{ borderRadius: "16px", boxShadow: "0 20px 50px -20px rgba(15, 23, 42, 0.35)" }}
      >
        <DialogHeader className="px-8 pt-10 pb-2 text-center">
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-navy text-center tracking-tight">
            Request a Strategic Briefing
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground pt-2 max-w-md mx-auto">
            Share a few details so we can tailor the conversation to your stage and priorities.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="px-8 pb-10 pt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium text-navy">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              placeholder="Jane Doe"
              autoComplete="name"
              maxLength={120}
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-navy">
              Your Company Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="name@company.com"
              autoComplete="email"
              maxLength={255}
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium text-navy">
              Corporate Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="VP of Product / CEO"
              autoComplete="organization-title"
              maxLength={150}
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-navy">Current Asset Phase</Label>
            <Select value={form.phase} onValueChange={(v) => update("phase", v)}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select asset phase" />
              </SelectTrigger>
              <SelectContent>
                {phaseOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.phase === "Other" && (
              <Input
                value={form.phaseOther}
                onChange={(e) => update("phaseOther", e.target.value)}
                placeholder="Please specify..."
                maxLength={500}
                className="h-11 mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-navy">Primary Strategic Challenge</Label>
            <Select value={form.challenge} onValueChange={(v) => update("challenge", v)}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select strategic challenge" />
              </SelectTrigger>
              <SelectContent>
                {challengeOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.challenge === "Other" && (
              <Input
                value={form.challengeOther}
                onChange={(e) => update("challengeOther", e.target.value)}
                placeholder="Please specify..."
                maxLength={500}
                className="h-11 mt-2"
              />
            )}
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="w-full h-12 text-base font-semibold rounded-md bg-navy hover:bg-navy/90 text-navy-foreground"
          >
            {submitting ? "Sending..." : "Schedule Strategic Briefing"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
