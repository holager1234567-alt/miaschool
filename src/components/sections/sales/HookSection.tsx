import { SalesSection } from "@/components/sales/SalesSection";
import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { CtaMicrocopy } from "@/components/sales/WhatsAppCta";
import { salesCopy } from "@/lib/content";

export function HookSection() {
  const { hook } = salesCopy;

  return (
    <SalesSection id="hook" tone="linen" innerClassName="text-center">
      <div className="mb-8 flex justify-center sm:mb-10">
        <div className="h-[88px] w-[120px] sm:h-[104px] sm:w-[140px]">
          <img
            src="/images/logo.png?v=4"
            alt="מיה סקול"
            className="h-auto w-full object-contain object-top"
          />
        </div>
      </div>

      <h1 className="sales-h1 sales-h1-heavy mx-auto font-hero text-pine">
        {hook.h1Lines.map((line) => (
          <span key={line} className="hero-h1-line">
            {line}
          </span>
        ))}
      </h1>

      <div className="mx-auto mt-8 max-w-xl space-y-2">
        {hook.subtitleLines.map((line) => (
          <p key={line} className="sales-body text-muted">
            {line}
          </p>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center">
        <HeroCtaButton variant="hero-white" label={hook.cta} />
        <CtaMicrocopy className="text-sage" />
      </div>
    </SalesSection>
  );
}
