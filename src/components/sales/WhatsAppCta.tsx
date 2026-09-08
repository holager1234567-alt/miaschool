import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappHref } from "@/lib/content";
import { cn } from "@/lib/utils";

type WhatsAppCtaProps = {
  label: string;
  className?: string;
  variant?: "green" | "cream";
  showIcon?: boolean;
};

export function WhatsAppCta({
  label,
  className,
  variant = "green",
  showIcon = true,
}: WhatsAppCtaProps) {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex w-full max-w-xl items-center justify-center gap-2 rounded-full px-6 py-4 text-center text-base font-bold transition-transform active:scale-[0.98] sm:text-lg",
        variant === "green" &&
          "bg-whatsapp text-white hover:bg-whatsapp-deep",
        variant === "cream" &&
          "bg-cream text-forest-deep hover:bg-linen-warm",
        className,
      )}
    >
      {showIcon ? <WhatsAppIcon className="size-5 shrink-0" /> : null}
      {label}
    </a>
  );
}

export function CtaMicrocopy({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "mt-3 text-center text-sm leading-relaxed opacity-80 sm:text-base",
        className,
      )}
    >
      שיחה אישית ללא עלות וללא שום התחייבות
    </p>
  );
}
