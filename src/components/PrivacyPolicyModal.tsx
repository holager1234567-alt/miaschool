import { ExternalLink } from "lucide-react";

import { HeroLogo } from "@/components/sections/HeroLogo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  PRIVACY_POLICY_LAST_UPDATED,
  PRIVACY_POLICY_PDF_PATH,
  privacyPolicySections,
} from "@/lib/privacyPolicyContent";

type PrivacyPolicyModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function PrivacyPolicyModal({
  open,
  onOpenChange,
}: PrivacyPolicyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby="privacy-policy-description"
        className="gap-0 p-0"
      >
        <div className="border-b border-sage-soft/80 bg-white/80 px-6 pt-8 pb-5 text-center">
          <HeroLogo variant="brand" />
          <DialogHeader className="mt-2">
            <DialogTitle className="text-[clamp(24px,4vw,32px)] font-bold">
              מדיניות פרטיות
            </DialogTitle>
            <DialogDescription
              id="privacy-policy-description"
              className="text-[14px] text-sage"
            >
              עודכן לאחרונה: {PRIVACY_POLICY_LAST_UPDATED}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div
          dir="rtl"
          lang="he"
          className="flex-1 overflow-y-auto px-6 py-6 text-right [text-align:justify]"
        >
          <div className="space-y-8 text-[15px] leading-[1.75] text-muted md:text-[16px]">
            {privacyPolicySections.map((section, index) => (
              <section key={section.title} aria-labelledby={`privacy-section-${index}`}>
                <h2
                  id={`privacy-section-${index}`}
                  className="mb-3 font-heading text-[18px] font-bold text-pine md:text-[20px]"
                >
                  {index + 1}. {section.title}
                </h2>
                <div className="space-y-3">{section.content}</div>
              </section>
            ))}
          </div>
        </div>

        <DialogFooter className="sm:items-center">
          <Button variant="outline" size="sm" asChild>
            <a
              href={PRIVACY_POLICY_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              פתח בחלון חדש / הורד PDF
            </a>
          </Button>
          <DialogClose asChild>
            <Button variant="coral" size="sm">
              סגור
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
