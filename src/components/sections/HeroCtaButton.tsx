import { whatsappHref } from "@/lib/content";
import { cn } from "@/lib/utils";

type HeroCtaButtonProps = {
  className?: string;
  variant?: "default" | "hero" | "hero-white" | "intro-gold" | "gold-glow";
  label?: string;
};

export function HeroCtaButton({
  className = "",
  variant = "hero-white",
  label = "לתיאום שיחת היכרות ואבחון ללא עלות",
}: HeroCtaButtonProps) {
  const isHeroStyle = variant === "hero-white" || variant === "hero";

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "font-ploni inline-flex items-center justify-center rounded-2xl text-center font-bold transition-all duration-200 active:scale-[0.98]",
        variant === "intro-gold"
          ? "hero-cta-button hero-cta-button--intro-gold"
          : variant === "gold-glow"
            ? "hero-cta-button hero-cta-button--gold-glow"
            : isHeroStyle
            ? "hero-cta-button hero-cta-button--hero-white w-full max-w-full whitespace-normal px-6 py-3.5 text-[clamp(12px,3.2vw,17px)] leading-snug text-pine sm:w-auto sm:max-w-2xl sm:px-9 sm:py-4 sm:leading-snug md:max-w-none"
            : "w-full max-w-xl bg-pine px-5 py-3.5 text-[15px] leading-snug text-linen shadow-[0_12px_28px_-8px_rgba(27,56,43,0.35)] hover:bg-navy-soft hover:shadow-[0_14px_32px_-8px_rgba(27,56,43,0.4)] sm:px-8 sm:py-4 sm:text-lg",
        className,
      )}
    >
      {label}
    </a>
  );
}
