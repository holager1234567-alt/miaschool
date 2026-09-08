import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { FadeIn } from "@/components/motion/FadeIn";
import { SalesSection } from "@/components/sales/SalesSection";
import { CtaMicrocopy } from "@/components/sales/WhatsAppCta";
import { salesCopy } from "@/lib/content";

export function FinalOfferSection() {
  const { offer } = salesCopy;

  return (
    <SalesSection
      id="offer"
      tone="forest"
      className="overflow-x-clip pt-4 pb-10 md:pt-6 md:pb-14"
      innerClassName="text-center"
    >
      <FadeIn>
        <h2 className="offer-title mx-auto w-full text-center font-hero">
          <span className="block whitespace-nowrap">{offer.h2Lines[0]}</span>
          <span className="mt-1 block whitespace-nowrap sm:mt-1.5">
            {offer.h2Lines[1]}
          </span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center">
          {offer.urgency.map((item) => {
            if (typeof item === "object") {
              return (
                <p key={item.lines[0]} className="offer-urgency-text">
                  <span className="block">{item.lines[0]}</span>
                  <span className="mt-1 block sm:mt-1.5">{item.lines[1]}</span>
                </p>
              );
            }

            return (
              <p key={item.slice(0, 24)} className="offer-urgency-text">
                {item}
              </p>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.16}>
        <p className="offer-hook mx-auto mt-10 max-w-[22ch] font-hero">
          {offer.hook}
        </p>
      </FadeIn>

      <FadeIn delay={0.24}>
        <div className="mx-auto mt-8 max-w-xl space-y-4">
          {offer.explanation.map((line) => (
            <p key={line.slice(0, 24)} className="offer-explanation-text">
              {line}
            </p>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.32} className="mt-12 flex flex-col items-center">
        <HeroCtaButton variant="hero-white" label={offer.cta} />
        <CtaMicrocopy className="text-sage" />
      </FadeIn>
    </SalesSection>
  );
}
