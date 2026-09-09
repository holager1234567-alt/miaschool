import { useLayoutEffect, useRef } from "react";

import { HeroCtaLeafWing } from "@/components/sections/HeroCtaLeafWing";
import { featuresStackCards } from "@/lib/content";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Wrapper() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          gsap.to(card, {
            scale: 0.92,
            opacity: 0.15,
            filter: "blur(4px)",
            ease: "power1.out",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top 75%",
              end: "top 30%",
              scrub: true,
            },
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-space relative bg-white">
      <div className="container-page">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
            <HeroCtaLeafWing side="right" className="h-9 sm:h-11 md:h-12" />
            <h2 className="heading-section font-ploni font-extrabold text-navy">
              <span className="block">למה לבחור</span>
              <span className="block">בבית ספר של מיה?</span>
            </h2>
            <HeroCtaLeafWing side="left" className="h-9 sm:h-11 md:h-12" />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col gap-12">
          {featuresStackCards.map((item, index) => (
            <div key={item.id} className="relative flex items-start gap-2 sm:gap-4">
              <div
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                style={{ top: `${100 + index * 24}px` }}
                className="sticky min-w-0 flex-1 overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-white to-cream/60 p-7 text-center shadow-lift will-change-transform sm:p-10"
              >
                <h3 className="mx-auto mb-4 max-w-full font-ploni text-lg font-light leading-snug text-balance text-navy sm:text-xl md:text-2xl">
                  {item.title}
                </h3>

                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  {item.description}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="font-ploni font-extrabold shrink-0 select-none pt-2 text-[80px] font-normal leading-none text-teal/70 sm:pt-4 sm:text-[100px] md:text-[120px]"
              >
                {item.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
