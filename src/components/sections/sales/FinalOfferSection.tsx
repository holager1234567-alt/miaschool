import { ArrowLeft, ArrowRight } from "lucide-react";
import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { FadeIn } from "@/components/motion/FadeIn";
import { SalesSection } from "@/components/sales/SalesSection";
import { salesCopy } from "@/lib/content";

function OfferCtaPointer({ side }: { side: "left" | "right" }) {
  const Icon = side === "left" ? ArrowRight : ArrowLeft;

  return (
    <span
      className={`offer-cta-arrow offer-cta-arrow--${side}`}
      aria-hidden="true"
    >
      <Icon strokeWidth={2.5} />
    </span>
  );
}

export function FinalOfferSection() {
  const { offer } = salesCopy;

  return (
    <SalesSection
      id="offer"
      tone="forest"
      className="overflow-x-clip pt-4 pb-10 md:overflow-x-visible md:pt-6 md:pb-14"
      innerClassName="text-center"
    >
      <FadeIn>
        <h2 className="offer-title offer-title-line mx-auto w-full text-center font-ploni font-extrabold">
          {offer.h2Lines[0]}
        </h2>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center">
          {offer.urgency.map((item) => {
            if (typeof item === "object") {
              return (
                <p key={item.lines[0]} className="offer-urgency-text">
                  <span className="offer-urgency-line block">{item.lines[0]}</span>
                  <span className="offer-urgency-line mt-1 block sm:mt-1.5">
                    {item.lines[1]}
                  </span>
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
        <p className="offer-hook highlight-brand-title mx-auto mt-10 max-w-3xl text-balance md:max-w-4xl">
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

      <FadeIn delay={0.32} className="mt-12 flex w-full flex-col items-center px-1 sm:px-0">
        <div className="offer-cta-wrap">
          <div className="offer-cta-inner">
            <OfferCtaPointer side="left" />
            <HeroCtaButton
              variant="hero-white"
              label={offer.cta}
              className="offer-cta-button"
            />
            <OfferCtaPointer side="right" />
          </div>
        </div>
      </FadeIn>
    </SalesSection>
  );
}
