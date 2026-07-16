import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import caseStudyBanner from "@/assets/epd-case-study.webp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ConsultationDialog from "@/components/ConsultationDialog";

interface CaseStudyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  wantsConsultation: z.boolean(),
});

type FieldErrors = Partial<Record<"fullName" | "email", string>>;

const CASE_STUDY_VIEW_URL = "/thank-you-case-study";

const CaseStudyPopup = ({ isOpen, onClose }: CaseStudyPopupProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [wantsConsultation, setWantsConsultation] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const resetAndClose = () => {
    onClose();
    // brief delay so the fade-out finishes before we reset visible state
    setTimeout(() => {
      setFullName("");
      setEmail("");
      setWantsConsultation(false);
      setErrors({});
      setSubmitting(false);
      setSubmitted(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = formSchema.safeParse({ fullName, email, wantsConsultation });
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setErrors({
        fullName: flat.fullName?.[0],
        email: flat.email?.[0],
      });
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-case-study-lead", {
        body: parsed.data,
      });
      if (error || !data?.ok) {
        throw new Error(error?.message || "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={resetAndClose}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-[95%] max-w-lg bg-background rounded-xl shadow-2xl pointer-events-auto relative max-h-[92vh] overflow-y-auto"
              >
                <button
                  onClick={resetAndClose}
                  aria-label="Close"
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>

                <div className="px-5 pt-6 pb-5 md:px-7 md:pt-7 md:pb-6 space-y-4">
                  {/* Banner */}
                  <div className="w-full h-16 md:h-28 overflow-hidden flex items-center justify-center">
                    <img
                      src={caseStudyBanner}
                      alt="EPD Case Study"
                      className="h-full w-auto object-contain"
                    />
                  </div>

                  {/* Header */}
                  <div className="space-y-1 text-center">
                    <h3 className="text-navy font-bold text-xl md:text-2xl leading-tight">
                      Get Our Complimentary EPD Case Study
                    </h3>
                    <p className="hidden md:block text-sm text-navy/70">
                      How one MedTech team unlocked $35M in co-development funding.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="space-y-4 text-center">
                      <CheckCircle2 className="mx-auto h-10 w-10 text-navy" />
                      {wantsConsultation ? (
                        <>
                          <h4 className="text-navy font-bold text-lg md:text-xl">
                            You're all set.
                          </h4>
                          <p className="text-sm md:text-base text-navy/80 leading-relaxed">
                            The EPD case study is on its way to <span className="font-medium">{email}</span>. If you don't see it in your inbox, please check your SPAM folder
                          </p>
                          <div className="flex flex-col gap-2 pt-1">
                            <Button
                              onClick={() => {
                                setConsultationOpen(true);
                              }}
                              className="w-full h-12 bg-[#003B6F] text-white hover:bg-[#003B6F]/90"
                            >
                              Tell us more about your project
                            </Button>
                            <a
                              href={CASE_STUDY_VIEW_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-navy/70 hover:text-navy underline underline-offset-4"
                            >
                              View the case study now
                            </a>
                          </div>
                        </>
                      ) : (
                        <>
                          <h4 className="text-navy font-bold text-lg md:text-xl">
                            You're all set.
                          </h4>
                          <p className="text-sm md:text-base text-navy/80 leading-relaxed">
                            We just emailed the EPD case study to <span className="font-medium">{email}</span>. If you don't see it in your inbox within a few minutes, please check your SPAM folder and/or click below to view it.
                          </p>
                          <div className="flex flex-col gap-2 pt-1">
                            <a
                              href={CASE_STUDY_VIEW_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-full h-12 rounded-md bg-[#003B6F] text-white font-medium hover:bg-[#003B6F]/90 transition-colors"
                            >
                              View the case study now
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-2" noValidate>
                      <div className="space-y-1.5">
                        <Label htmlFor="cs-fullname" className="text-navy">Full Name <span className="text-destructive">*</span></Label>
                        <Input
                          id="cs-fullname"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Jane Doe"
                          className="h-11"
                          autoComplete="name"
                          maxLength={120}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-destructive">{errors.fullName}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="cs-email" className="text-navy">Company Email <span className="text-destructive">*</span></Label>
                        <Input
                          id="cs-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          className="h-11"
                          autoComplete="email"
                          maxLength={255}
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive">{errors.email}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full h-12 bg-[#003B6F] text-white hover:bg-[#003B6F]/90"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Sending…
                          </>
                        ) : (
                          "Send Me the Case Study"
                        )}
                      </Button>

                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <Checkbox
                          id="cs-consult"
                          checked={wantsConsultation}
                          onCheckedChange={(v) => setWantsConsultation(v === true)}
                          className="mt-0.5"
                        />
                        <span className="text-sm text-navy/85 leading-snug">
                          Please contact me to schedule a complimentary consultation
                        </span>
                      </label>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
};

export default CaseStudyPopup;
