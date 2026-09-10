import { SalesSection } from "@/components/sales/SalesSection";
import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { salesCopy } from "@/lib/content";

export function HookSection() {
  const { hook } = salesCopy;

  return (
    <SalesSection id="hook" tone="linen" innerClassName="text-center">
      <div className="mb-8 flex justify-center sm:mb-10">
        <div className="h-[88px] w-[120px] sm:h-[104px] sm:w-[140px]">
          <img
            src="/images/logo.png?v=4"
            alt="מיה'סקול"
            className="h-auto w-full object-contain object-top"
          />
        </div>
      </div>

      <h1 className="sales-h1 sales-h1-heavy mx-auto font-ploni font-extrabold text-pine">
        <span className="block">{hook.h1Lead}</span>
        <span className="mt-2 block text-turquoise">{hook.h1Accent}</span>
      </h1>

      <p className="sales-body mx-auto mt-8 max-w-xl text-muted">
        {hook.subtitle}
      </p>

      <div className="mt-10 flex flex-col items-center">
        <HeroCtaButton variant="hero-white" label={hook.cta} />
      </div>
    </SalesSection>
  );
}
