import { whatsappHref } from "@/lib/content";
import { cn } from "@/lib/utils";

type HeroCtaButtonProps = {
  className?: string;
  variant?: "default" | "hero" | "hero-white";
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
        "inline-flex items-center justify-center rounded-2xl text-center font-bold transition-all duration-200 active:scale-[0.98]",
        isHeroStyle
          ? "hero-cta-button w-full max-w-full whitespace-normal border border-turquoise bg-white px-6 py-3.5 text-[clamp(12px,3.2vw,17px)] leading-snug text-pine shadow-[0_0_0_1px_rgba(42,157,143,0.35),0_0_20px_rgba(42,157,143,0.38)] hover:bg-white hover:shadow-[0_0_0_1px_rgba(42,157,143,0.5),0_0_28px_rgba(42,157,143,0.48)] sm:w-auto sm:max-w-none sm:whitespace-nowrap sm:px-9 sm:py-4 sm:leading-none"
          : "w-full max-w-xl bg-pine px-5 py-3.5 text-[15px] leading-snug text-linen shadow-[0_12px_28px_-8px_rgba(27,56,43,0.35)] hover:bg-navy-soft hover:shadow-[0_14px_32px_-8px_rgba(27,56,43,0.4)] sm:px-8 sm:py-4 sm:text-lg",
        className,
      )}
    >
      {label}
    </a>
  );
}
